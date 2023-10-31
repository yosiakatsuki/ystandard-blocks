import classnames from 'classnames';
import SVGIconSelect from '@aktk/components/svg-icon-select/index';
import SVGIcon from '@aktk/components/svg-icon';
import { sizing } from './config';

import {
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	PanelColorSettings,
	withColors,
	FontSizePicker,
	withFontSizes,
	URLInput,
} from '@wordpress/block-editor';

import { Fragment } from '@wordpress/element';

import {
	PanelBody,
	BaseControl,
	ToggleControl,
	TextControl,
	SelectControl,
} from '@wordpress/components';

import { compose } from '@wordpress/compose';

import { __ } from '@wordpress/i18n';

const NEW_TAB_REL = 'noreferrer noopener';

function svgIcon(props) {
	const {
		textColor,
		setTextColor,
		attributes,
		setAttributes,
		isSelected,
		fontSize,
		setFontSize,
		className,
	} = props;
	const { icon, iconSize, align, url, rel, linkTarget } = attributes;

	const classes = classnames(className, 'ystdb-icon', {
		[`has-text-align-${align}`]: align,
		[textColor.class]: textColor.class,
		[fontSize.class]: fontSize.class,
		[`is-size--${iconSize}`]: iconSize,
	});

	const styles = {
		color: textColor.color,
		fontSize: fontSize.size ? fontSize.size : undefined,
	};

	return (
		<Fragment>
			<BlockControls>
				<AlignmentToolbar
					value={align}
					onChange={(nextAlign) => {
						setAttributes({ align: nextAlign });
					}}
				/>
			</BlockControls>
			<InspectorControls>
				<PanelColorSettings
					title={__('色設定', 'ystandard-blocks')}
					initialOpen={true}
					colorSettings={[
						{
							value: textColor.color,
							onChange: (color) => {
								setTextColor(color);
							},
							label: __('文字色', 'ystandard-blocks'),
						},
					]}
				/>
				<PanelBody title={__('アイコン設定', 'ystandard-blocks')}>
					<BaseControl
						id={'icon'}
						label={__('アイコン', 'ystandard-blocks')}
					>
						<SVGIconSelect
							panelTitle={__('アイコン選択', 'ystandard-blocks')}
							iconControlTitle={''}
							selectedIcon={icon}
							onClickIcon={(value) => {
								setAttributes({ icon: value });
							}}
							align={'center'}
							isFloat={true}
						/>
					</BaseControl>
					<FontSizePicker
						__nextHasNoMarginBottom
						label={__('アイコンサイズ', 'ystandard-blocks')}
						value={fontSize.size}
						onChange={(font) => {
							setFontSize(font);
						}}
					/>
					<SelectControl
						label={__('アイコン倍率', 'ystandard-blocks')}
						value={iconSize}
						options={sizing}
						onChange={(size) => {
							setAttributes({ iconSize: size });
						}}
					/>
				</PanelBody>
				<PanelBody title={__('リンク設定', 'ystandard-blocks')}>
					<URLInput
						label={__('リンク', 'ystandard-blocks')}
						className="ystdb-icon__link"
						value={url}
						/* eslint-disable jsx-a11y/no-autofocus */
						autoFocus={false}
						/* eslint-enable jsx-a11y/no-autofocus */
						onChange={(value) => setAttributes({ url: value })}
						disableSuggestions={!isSelected}
						isFullWidth
						hasBorder
					/>
					<ToggleControl
						label={__('新しいタブで開く', 'ystandard-blocks')}
						onChange={(value) => {
							const newLinkTarget = value ? '_blank' : undefined;

							let updatedRel = rel;
							if (newLinkTarget && !rel) {
								updatedRel = NEW_TAB_REL;
							} else if (!newLinkTarget && rel === NEW_TAB_REL) {
								updatedRel = undefined;
							}

							setAttributes({
								linkTarget: newLinkTarget,
								rel: updatedRel,
							});
						}}
						checked={linkTarget === '_blank'}
					/>
					<TextControl
						label={__('リンクrel', 'ystandard-blocks')}
						value={rel || ''}
						onChange={(value) => {
							setAttributes({ rel: value });
						}}
					/>
				</PanelBody>
			</InspectorControls>

			<div className={classes} style={styles}>
				{!!icon ? (
					<SVGIcon name={icon} />
				) : (
					<div className={'ystdb-icon__select--no-icon'}>
						<SVGIcon name={'info'} />
						<div
							style={{
								fontSize: '12px',
								lineHeight: 1.2,
								marginTop: '0.5em',
							}}
						>
							「アイコン設定」から
							<br />
							アイコンを選択
						</div>
					</div>
				)}
			</div>
		</Fragment>
	);
}

export default compose([
	withColors({ textColor: 'color' }),
	withFontSizes('fontSize'),
])(svgIcon);
