import SVGIconSelect, {
	getSVGIconTag,
} from '../../src/js/components/svg-icon-select/index';
import { ystdbConfig } from '../../src/js/config/config';

import {
	BlockControls,
	PlainText,
	AlignmentToolbar,
	InspectorControls,
	PanelColorSettings,
	withColors,
	FontSizePicker,
	withFontSizes,
} from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';

import { Fragment } from '@wordpress/element';

import {
	Disabled,
	PanelBody,
	BaseControl,
	ToggleControl,
	RadioControl,
	RangeControl,
	Button,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';

import { withState, compose } from '@wordpress/compose';

import { __, _x } from '@wordpress/i18n';

const SVGButtonLinkEdit = (props) => {
	const {
		backgroundColor,
		textColor,
		setBackgroundColor,
		setTextColor,
		attributes,
		setAttributes,
		setState,
		isPreview,
		fontSize,
		setFontSize,
	} = props;
	const {
		content,
		borderRadius,
		iconLeft,
		iconSizeLeft,
		iconRight,
		iconSizeRight,
		align,
		paddingType,
		buttonType,
		maxWidth,
		maxUnit,
		animationType,
		animationInterval,
	} = attributes;

	const maxWidthUnitMaximum = 'px' === maxUnit ? 1200 : 100;
	const maxWidthValue = '%' === maxUnit && 100 < maxWidth ? 100 : maxWidth;

	const convertIconSize = (size) => {
		if ('fa-xs' === size) {
			return 'is-small';
		}
		if ('fa-2x' === size) {
			return 'is-large';
		}
		return size;
	};

	return (
		<div className={'wp-block-html'}>
			<Fragment>
				<BlockControls>
					<AlignmentToolbar
						value={align}
						onChange={(nextAlign) => {
							setAttributes({ align: nextAlign });
						}}
					/>
					<ToolbarGroup>
						<ToolbarButton
							className={`components-tab-button`}
							isPressed={!isPreview}
							onClick={() => {
								setState({ isPreview: false });
							}}
						>
							<span>HTML</span>
						</ToolbarButton>
						<ToolbarButton
							className={`components-tab-button`}
							isPressed={isPreview}
							onClick={() => {
								setState({ isPreview: true });
							}}
						>
							<span>{__('Preview')}</span>
						</ToolbarButton>
					</ToolbarGroup>
				</BlockControls>
				<Disabled.Consumer>
					{() =>
						isPreview ? (
							<div className={'ystdb-btn-link__preview'}>
								<ServerSideRender
									block="ystdb/svg-button-link"
									attributes={attributes}
								/>
							</div>
						) : (
							<PlainText
								value={content}
								onChange={(value) =>
									setAttributes({ content: value })
								}
								placeholder={'HTMLを入力...'}
								aria-label={__('HTML')}
							/>
						)
					}
				</Disabled.Consumer>
				<InspectorControls>
					<PanelColorSettings
						title={__('Color settings')}
						initialOpen={true}
						colorSettings={[
							{
								value: backgroundColor.color,
								onChange: (newColor) => {
									setAttributes({
										customGradient: undefined,
									});
									setBackgroundColor(newColor);
								},
								label: __('Background Color'),
							},
							{
								value: textColor.color,
								onChange: (color) => {
									setTextColor(color);
								},
								label: __('Text Color'),
							},
						]}
					/>
					<PanelBody title={__('枠線設定', 'ystandard-blocks')}>
						<RangeControl
							value={borderRadius}
							label={__('枠線の角丸', 'ystandard-blocks')}
							min={ystdbConfig.button.borderRadiusMin}
							max={ystdbConfig.button.borderRadiusMax}
							initialPosition={
								ystdbConfig.button.borderRadiusInitialPosition
							}
							allowReset
							onChange={(value) => {
								setAttributes({ borderRadius: value });
							}}
						/>
					</PanelBody>
					<PanelBody title={__('アイコン設定', 'ystandard-blocks')}>
						<SVGIconSelect
							iconControlTitle={__(
								'左アイコン',
								'ystandard-blocks'
							)}
							selectedIcon={iconLeft}
							onClickIcon={(value) => {
								setAttributes({ iconLeft: value });
								setAttributes({
									iconLeftSVG: getSVGIconTag(value),
								});
							}}
						/>
						<BaseControl>
							<div className="ystdb-inspector-controls__label">
								{_x('左アイコンサイズ', 'ystandard-blocks')}
							</div>
							<div
								className={
									'ystdb-btn-selector components-base-control'
								}
							>
								{ystdbConfig.icon.size.map((item) => {
									return (
										<Button
											key={item.value}
											isSecondary={
												convertIconSize(
													iconSizeLeft
												) !== item.value
											}
											isPrimary={
												convertIconSize(
													iconSizeLeft
												) === item.value
											}
											onClick={() => {
												setAttributes({
													iconSizeLeft: item.value,
												});
											}}
										>
											<span>{item.label}</span>
										</Button>
									);
								})}
							</div>
						</BaseControl>
						<SVGIconSelect
							iconControlTitle={__(
								'右アイコン',
								'ystandard-blocks'
							)}
							selectedIcon={iconRight}
							onClickIcon={(value) => {
								setAttributes({ iconRight: value });
								setAttributes({
									iconRightSVG: getSVGIconTag(value),
								});
							}}
						/>
						<BaseControl>
							<div className="ystdb-inspector-controls__label">
								{_x('右アイコンサイズ', 'ystandard-blocks')}
							</div>
							<div
								className={
									'ystdb-btn-selector components-base-control'
								}
							>
								{ystdbConfig.icon.size.map((item) => {
									return (
										<Button
											key={item.value}
											isSecondary={
												convertIconSize(
													iconSizeRight
												) !== item.value
											}
											isPrimary={
												convertIconSize(
													iconSizeRight
												) === item.value
											}
											onClick={() => {
												setAttributes({
													iconSizeRight: item.value,
												});
											}}
										>
											<span>{item.label}</span>
										</Button>
									);
								})}
							</div>
						</BaseControl>
					</PanelBody>

					<PanelBody title={__('文字設定', 'ystandard-blocks')}>
						<BaseControl>
							<FontSizePicker
								label={__('文字サイズ', 'ystandard-blocks')}
								value={fontSize.size}
								onChange={(font) => {
									setFontSize(font);
								}}
							/>
						</BaseControl>
					</PanelBody>
					<PanelBody title={__('余白設定', 'ystandard-blocks')}>
						<BaseControl>
							<span className={`ystdb-info__small`}>
								ボタン内側の余白を設定できます。
							</span>
							<div
								className={
									'ystdb-btn-selector components-base-control'
								}
							>
								{ystdbConfig.button.paddingTypes.map((item) => {
									return (
										<Button
											key={item.value}
											isSecondary={
												paddingType !== item.value
											}
											isPrimary={
												paddingType === item.value
											}
											onClick={() => {
												setAttributes({
													paddingType: item.value,
												});
											}}
										>
											<span>{item.label}</span>
										</Button>
									);
								})}
							</div>
						</BaseControl>
					</PanelBody>
					<PanelBody
						title={__('ブロックボタン設定', 'ystandard-blocks')}
					>
						<BaseControl>
							<ToggleControl
								label={__(
									'ボタンをブロック型にする',
									'ystandard-blocks'
								)}
								onChange={() => {
									const value =
										'is-block' === buttonType
											? ''
											: 'is-block';
									setAttributes({ buttonType: value });
								}}
								checked={buttonType === 'is-block'}
							/>
							<RangeControl
								value={maxWidthValue}
								label={__('ボタン最大幅', 'ystandard-blocks')}
								min={0}
								max={maxWidthUnitMaximum}
								initialPosition={100}
								allowReset
								onChange={(value) => {
									setAttributes({ maxWidth: value });
								}}
							/>
							<RadioControl
								label={__('最大幅単位', 'ystandard-blocks')}
								selected={maxUnit}
								options={[
									{
										label: __('%', 'ystandard-blocks'),
										value: '%',
									},
									{
										label: __('px', 'ystandard-blocks'),
										value: 'px',
									},
								]}
								onChange={(option) => {
									setAttributes({ maxUnit: option });
								}}
							/>
						</BaseControl>
					</PanelBody>
					<PanelBody
						title={__('アニメーション設定', 'ystandard-blocks')}
					>
						<BaseControl>
							<RadioControl
								label={__(
									'アニメーション種類',
									'ystandard-blocks'
								)}
								selected={animationType}
								options={ystdbConfig.button.animationTypes}
								onChange={(option) => {
									setAttributes({ animationType: option });
								}}
							/>
							<RangeControl
								value={animationInterval}
								label={__(
									'アニメーションの速さ(秒)',
									'ystandard-blocks'
								)}
								min={1}
								max={10}
								initialPosition={5}
								allowReset
								onChange={(value) => {
									setAttributes({
										animationInterval: value,
									});
								}}
							/>
						</BaseControl>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		</div>
	);
};

export default compose([
	withColors('backgroundColor', { textColor: 'color' }),
	withState({ isPreview: false, styles: '' }),
	withFontSizes('fontSize'),
])(SVGButtonLinkEdit);
