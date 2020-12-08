import classnames from 'classnames';
import getNum from '../../src/js/util/_getNum';
import {
	allowedBlocks,
	template,
	alignmentsControls,
	horizonAlignmentsControls,
} from './config';
import { withDispatch } from '@wordpress/data';
import {
	BlockControls,
	InspectorControls,
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';

import { Fragment } from '@wordpress/element';

import {
	PanelBody,
	BaseControl,
	RangeControl,
	ToolbarGroup,
	ToolbarItem,
	Button,
	ToggleControl,
	DropdownMenu,
} from '@wordpress/components';

import { __, _x } from '@wordpress/i18n';
import { paddingTypes } from './item/config';

function Columns(props) {
	const {
		attributes,
		setAttributes,
		className,
		updatePadding,
		updateBoxShadow,
	} = props;
	const {
		colPc,
		colTablet,
		colMobile,
		verticalAlignment,
		horizonAlignment,
		reverse,
		removeMargin,
	} = attributes;

	const classes = classnames('ystdb-columns', {
		[`has-${colMobile}-columns`]: colMobile,
		[`has-${colTablet}-columns--tablet`]: colTablet,
		[`has-${colPc}-columns--pc`]: colPc,
		[`is-vertically-aligned-${verticalAlignment}`]: verticalAlignment,
		[`is-horizontally-aligned-${horizonAlignment}`]: horizonAlignment,
		'is-no-margin': removeMargin,
	});

	const blockProps = useBlockProps({
		className: classnames(className, 'ystdb-columns-wrap'),
	});

	const DEFAULT_CONTROLS = ['top', 'center', 'bottom', 'last'];
	const DEFAULT_CONTROL = 'top';
	const DEFAULT_HORIZON_CONTROLS = ['left', 'center', 'right', 'between'];
	const DEFAULT_HORIZON_CONTROL = 'left';

	const activeAlignment = alignmentsControls[verticalAlignment];
	const defaultAlignmentControl = alignmentsControls[DEFAULT_CONTROL];

	const activeHorizonAlignment = horizonAlignmentsControls[horizonAlignment];
	const defaultHorizonAlignment =
		horizonAlignmentsControls[DEFAULT_HORIZON_CONTROL];

	return (
		<Fragment>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarItem>
						{(toolbarItemHTMLProps) => (
							<DropdownMenu
								toggleProps={toolbarItemHTMLProps}
								isCollapsed={true}
								icon={
									activeAlignment
										? activeAlignment.icon
										: defaultAlignmentControl.icon
								}
								label={_x(
									'Change vertical alignment',
									'Block vertical alignment setting label'
								)}
								controls={DEFAULT_CONTROLS.map((control) => {
									return {
										...alignmentsControls[control],
										isActive: verticalAlignment === control,
										onClick: () =>
											setAttributes({
												verticalAlignment:
													verticalAlignment ===
													control
														? undefined
														: control,
											}),
									};
								})}
							/>
						)}
					</ToolbarItem>
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarItem>
						{(toolbarItemHTMLProps) => (
							<DropdownMenu
								toggleProps={toolbarItemHTMLProps}
								isCollapsed={true}
								icon={
									activeHorizonAlignment
										? activeHorizonAlignment.icon
										: defaultHorizonAlignment.icon
								}
								label={__('横位置', 'ystandard-blocks')}
								controls={DEFAULT_HORIZON_CONTROLS.map(
									(control) => {
										return {
											...horizonAlignmentsControls[
												control
											],
											isActive:
												horizonAlignment === control,
											onClick: () =>
												setAttributes({
													horizonAlignment:
														horizonAlignment ===
														control
															? undefined
															: control,
												}),
										};
									}
								)}
							/>
						)}
					</ToolbarItem>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={__('カラム設定', 'ystandard-blocks')}>
					<BaseControl
						id={'column-count'}
						label={__('カラム数', 'ystandard-blocks')}
					>
						<RangeControl
							label={__('デスクトップ', 'ystandard-blocks')}
							beforeIcon={'desktop'}
							value={colPc}
							onChange={(value) => {
								setAttributes({
									colPc: getNum(value, 1, 6, 3),
								});
							}}
							min={1}
							max={6}
						/>
						<RangeControl
							label={__('タブレット', 'ystandard-blocks')}
							beforeIcon={'tablet'}
							value={colTablet}
							onChange={(value) => {
								setAttributes({
									colTablet: getNum(value, 1, 6, 3),
								});
							}}
							min={1}
							max={6}
						/>
						<RangeControl
							label={__('モバイル', 'ystandard-blocks')}
							beforeIcon={'smartphone'}
							value={colMobile}
							onChange={(value) => {
								setAttributes({
									colMobile: getNum(value, 1, 6, 1),
								});
							}}
							min={1}
							max={6}
						/>
					</BaseControl>
					<BaseControl
						id={'remove-margin'}
						label={__('カラム間の余白を削除', 'ystandard-blocks')}
					>
						<ToggleControl
							label={__('余白なし', 'ystandard-blocks')}
							checked={removeMargin}
							onChange={() => {
								setAttributes({
									removeMargin: !removeMargin,
								});
							}}
						/>
					</BaseControl>
					<BaseControl
						id={'column-reverse'}
						label={__('表示順序を逆順にする', 'ystandard-blocks')}
					>
						<div className="ystdb-inspector-controls__dscr margin-bottom">
							※行内での表示が逆順になります。1行で複数列のカラムを表示するときに便利な設定です。
							<br />
							※公開ページのみ逆順で表示され、編集画面では追加した順で表示されます。
						</div>
						<ToggleControl
							label={__('逆順にする', 'ystandard-blocks')}
							checked={reverse}
							onChange={() => {
								setAttributes({
									reverse: !reverse,
								});
							}}
						/>
					</BaseControl>
				</PanelBody>
				<PanelBody title={__('デザイン 一括設定', 'ystandard-blocks')}>
					<BaseControl
						id={'padding'}
						label={__('余白', 'ystandard-blocks')}
					>
						<div
							className={
								'ystdb-btn-selector components-base-control'
							}
						>
							<div className="ystdb-inspector-controls__horizon-buttons">
								{paddingTypes.map((item) => {
									return (
										<Button
											key={item.value}
											isSecondary
											onClick={() => {
												updatePadding({
													paddingType: item.value,
												});
											}}
										>
											<span>{item.label}</span>
										</Button>
									);
								})}
							</div>
						</div>
					</BaseControl>
					<BaseControl
						id={'shadow'}
						label={__('影', 'ystandard-blocks')}
					>
						<div className="ystdb-inspector-controls__horizon-buttons">
							<Button
								key={'shadow-on'}
								isSecondary
								onClick={() => {
									updateBoxShadow(true);
								}}
							>
								{__('ON', 'ystandard-blocks')}
							</Button>
							<Button
								key={'shadow-off'}
								isSecondary
								onClick={() => {
									updateBoxShadow(false);
								}}
							>
								{__('OFF', 'ystandard-blocks')}
							</Button>
						</div>
					</BaseControl>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className={classes}>
					<InnerBlocks
						allowedBlocks={allowedBlocks}
						template={template}
						templateLock={false}
					/>
				</div>
			</div>
		</Fragment>
	);
}

const columnsEdit = withDispatch((dispatch, ownProps, registry) => ({
	updatePadding(paddingType) {
		const { clientId } = ownProps;
		const { updateBlockAttributes } = dispatch('core/block-editor');
		const { getBlockOrder } = registry.select('core/block-editor');
		const innerBlockClientIds = getBlockOrder(clientId);
		innerBlockClientIds.forEach((innerBlockClientId) => {
			updateBlockAttributes(innerBlockClientId, paddingType);
		});
	},
	updateBoxShadow(shadow) {
		const { clientId } = ownProps;
		const { updateBlockAttributes } = dispatch('core/block-editor');
		const { getBlockOrder } = registry.select('core/block-editor');
		const innerBlockClientIds = getBlockOrder(clientId);
		innerBlockClientIds.forEach((innerBlockClientId) => {
			updateBlockAttributes(innerBlockClientId, { shadow });
		});
	},
}))(Columns);

export default columnsEdit;
