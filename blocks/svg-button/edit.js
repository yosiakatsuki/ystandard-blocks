import classnames from 'classnames';
import SVGIconSelect from '@ystdb/components/svg-icon-select/index';
import SVGIcon from '@ystdb/components/svg-icon';
import { ystdbConfig } from '../../src/js/config/config';

import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	PanelColorSettings,
	RichText,
	URLInput,
	withColors,
	withFontSizes,
} from '@wordpress/block-editor';

import { Fragment } from '@wordpress/element';

import {
	BaseControl,
	Button,
	PanelBody,
	RadioControl,
	RangeControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';

import { compose } from '@wordpress/compose';

import { __, _x } from '@wordpress/i18n';
import ResponsiveFontSizeControl from '@ystdb/components/responsive-font-size/index';
import ResponsiveNumberControl from '@ystdb/components/responsive-number-control/index';
import {
	getPaddingResponsiveClass,
	getPaddingResponsiveStyle,
} from '@ystdb/components/responsive-number-control/functions';
import getNum from '../../src/js/util/_getNum';
import {
	getFontResponsiveClass,
	getFontResponsiveStyle,
} from '@ystdb/components/responsive-font-size/functions';

function svgButton(props) {
	const {
		textColor,
		backgroundColor,
		setTextColor,
		setBackgroundColor,
		attributes,
		setAttributes,
		isSelected,
		fontSize,
		setFontSize,
		className,
	} = props;
	const {
		borderRadius,
		text,
		iconLeft,
		iconSizeLeft,
		iconRight,
		iconSizeRight,
		isFontSizeResponsive,
		fontSizeMobile,
		fontSizeTablet,
		fontSizeDesktop,
		align,
		url,
		rel,
		linkTarget,
		isPaddingVerticalResponsive,
		paddingVerticalDesktop,
		paddingVerticalTablet,
		paddingVerticalMobile,
		isPaddingHorizontalResponsive,
		paddingHorizontalDesktop,
		paddingHorizontalTablet,
		paddingHorizontalMobile,
		buttonBlockDesktop,
		buttonBlockTablet,
		buttonBlockMobile,
		maxWidth,
		maxUnit,
		animationType,
		animationInterval,
	} = attributes;

	const wrapClasses = classnames(className, 'wp-block-button', {
		[`has-text-align-${align}`]: align,
		[fontSize.class]: fontSize.class && !isFontSizeResponsive,
		...getFontResponsiveClass(
			isFontSizeResponsive,
			fontSizeDesktop,
			fontSizeTablet,
			fontSizeMobile
		),
	});
	const wrapStyles = {
		fontSize:
			fontSize.size && !isFontSizeResponsive ? fontSize.size : undefined,
		...getFontResponsiveStyle({
			isResponsive: isFontSizeResponsive,
			desktop: fontSizeDesktop,
			tablet: fontSizeTablet,
			mobile: fontSizeMobile,
		}),
	};

	const linkClasses = classnames(
		'wp-block-button__link',
		'ystdb-button__link',
		{
			[textColor.class]: textColor.class,
			'has-text-color': textColor.class,
			[backgroundColor.class]: backgroundColor.class,
			'has-background': backgroundColor.class,
			'is-block':
				buttonBlockDesktop || buttonBlockTablet || buttonBlockMobile,
			'is-block--desktop': buttonBlockDesktop,
			'is-block--tablet': buttonBlockTablet,
			'is-block--mobile': buttonBlockMobile,
			'is-vertical-padding-responsive': isPaddingVerticalResponsive,
			'is-horizontal-padding-responsive': isPaddingHorizontalResponsive,
			'has-animation': animationType && 'none' !== animationType,
			[`has-animation--${animationType}`]: 'none' !== animationType,
			...getPaddingResponsiveClass({
				isResponsive: isPaddingVerticalResponsive,
				desktop: paddingVerticalDesktop,
				tablet: paddingVerticalTablet,
				mobile: paddingVerticalMobile,
				prefix: 'vertical',
			}),
			...getPaddingResponsiveClass({
				isResponsive: isPaddingHorizontalResponsive,
				desktop: paddingHorizontalDesktop,
				tablet: paddingHorizontalTablet,
				mobile: paddingHorizontalMobile,
				prefix: 'horizontal',
			}),
		}
	);

	const linkStyles = {
		color: textColor.color,
		backgroundColor: backgroundColor.color,
		borderRadius,
		maxWidth:
			(buttonBlockDesktop || buttonBlockTablet || buttonBlockMobile) &&
			maxWidth
				? `${maxWidth}${maxUnit}`
				: undefined,
		animationDuration:
			'none' !== animationType && animationInterval
				? `${animationInterval}s`
				: undefined,
		paddingTop:
			!isPaddingVerticalResponsive && paddingVerticalDesktop
				? paddingVerticalDesktop
				: undefined,
		paddingBottom:
			!isPaddingVerticalResponsive && paddingVerticalDesktop
				? paddingVerticalDesktop
				: undefined,
		paddingRight:
			!isPaddingHorizontalResponsive && paddingHorizontalDesktop
				? paddingHorizontalDesktop
				: undefined,
		paddingLeft:
			!isPaddingHorizontalResponsive && paddingHorizontalDesktop
				? paddingHorizontalDesktop
				: undefined,
		...getPaddingResponsiveStyle({
			isResponsive: isPaddingVerticalResponsive,
			desktop: paddingVerticalDesktop,
			tablet: paddingVerticalTablet,
			mobile: paddingVerticalMobile,
			prefix: 'vertical',
		}),
		...getPaddingResponsiveStyle({
			isResponsive: isPaddingHorizontalResponsive,
			desktop: paddingHorizontalDesktop,
			tablet: paddingHorizontalTablet,
			mobile: paddingHorizontalMobile,
			prefix: 'horizontal',
		}),
	};

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
					title={__('Color settings', 'ystandard-blocks')}
					initialOpen={true}
					colorSettings={[
						{
							value: backgroundColor.color,
							onChange: (newColor) => {
								setAttributes({ customGradient: undefined });
								setBackgroundColor(newColor);
							},
							label: __('Background Color', 'ystandard-blocks'),
						},
						{
							value: textColor.color,
							onChange: (color) => {
								setTextColor(color);
							},
							label: __('Text Color', 'ystandard-blocks'),
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
						iconControlTitle={__('左アイコン', 'ystandard-blocks')}
						selectedIcon={iconLeft}
						onClickIcon={(value) => {
							setAttributes({ iconLeft: value });
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
											convertIconSize(iconSizeLeft) !==
											item.value
										}
										isPrimary={
											convertIconSize(iconSizeLeft) ===
											item.value
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
						iconControlTitle={__('右アイコン', 'ystandard-blocks')}
						selectedIcon={iconRight}
						onClickIcon={(value) => {
							setAttributes({ iconRight: value });
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
											convertIconSize(iconSizeRight) !==
											item.value
										}
										isPrimary={
											convertIconSize(iconSizeRight) ===
											item.value
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
						<ResponsiveFontSizeControl
							id={'font-size'}
							useResponsive={isFontSizeResponsive}
							fontSize={fontSize}
							onChangeFontSizePicker={(font) => {
								setFontSize(font);
							}}
							changeResponsiveMode={(value) => {
								if (value) {
									setAttributes({
										fontSizeDesktop:
											!fontSizeDesktop && fontSize.size
												? fontSize.size
												: getNum(
														fontSizeDesktop,
														0,
														200,
														null
												  ),
										fontSizeTablet:
											!fontSizeTablet && fontSize.size
												? fontSize.size
												: getNum(
														fontSizeTablet,
														0,
														200,
														null
												  ),
										fontSizeMobile:
											!fontSizeMobile && fontSize.size
												? fontSize.size
												: getNum(
														fontSizeMobile,
														0,
														200,
														null
												  ),
									});
								}
								setAttributes({ isFontSizeResponsive: value });
							}}
							desktopValue={fontSizeDesktop}
							desktopOnChange={(value) => {
								setAttributes({
									fontSizeDesktop: getNum(
										value,
										0,
										200,
										null
									),
								});
							}}
							desktopUnit={'px'}
							tabletValue={fontSizeTablet}
							tabletOnChange={(value) =>
								setAttributes({
									fontSizeTablet: getNum(value, 0, 200, null),
								})
							}
							tabletUnit={'px'}
							mobileValue={fontSizeMobile}
							mobileOnChange={(value) =>
								setAttributes({
									fontSizeMobile: getNum(value, 0, 200, null),
								})
							}
							mobileUnit={'px'}
						/>
					</BaseControl>
				</PanelBody>

				<PanelBody title={__('余白設定', 'ystandard-blocks')}>
					<BaseControl>
						<div>
							<span className={`ystdb-info__small`}>
								ボタン内側の余白設定
							</span>
						</div>
					</BaseControl>

					<BaseControl>
						<ResponsiveNumberControl
							label={__('上下', 'ystandard-blocks')}
							useResponsive={isPaddingVerticalResponsive}
							changeResponsiveMode={(value) => {
								setAttributes({
									isPaddingVerticalResponsive: value,
								});
							}}
							desktopValue={paddingVerticalDesktop}
							desktopOnChange={(value) => {
								setAttributes({
									paddingVerticalDesktop: value,
								});
							}}
							tabletValue={paddingVerticalTablet}
							tabletOnChange={(value) => {
								setAttributes({ paddingVerticalTablet: value });
							}}
							mobileValue={paddingVerticalMobile}
							mobileOnChange={(value) => {
								setAttributes({ paddingVerticalMobile: value });
							}}
							min={1}
							max={500}
							step={1}
						/>
						<ResponsiveNumberControl
							label={__('左右', 'ystandard-blocks')}
							useResponsive={isPaddingHorizontalResponsive}
							changeResponsiveMode={(value) => {
								setAttributes({
									isPaddingHorizontalResponsive: value,
								});
							}}
							desktopValue={paddingHorizontalDesktop}
							desktopOnChange={(value) => {
								setAttributes({
									paddingHorizontalDesktop: value,
								});
							}}
							tabletValue={paddingHorizontalTablet}
							tabletOnChange={(value) => {
								setAttributes({
									paddingHorizontalTablet: value,
								});
							}}
							mobileValue={paddingHorizontalMobile}
							mobileOnChange={(value) => {
								setAttributes({
									paddingHorizontalMobile: value,
								});
							}}
							min={1}
							max={500}
							step={1}
						/>
					</BaseControl>
				</PanelBody>
				<PanelBody title={__('ブロックタイプ設定', 'ystandard-blocks')}>
					<BaseControl>
						<ToggleControl
							label={__('デスクトップ', 'ystandard-blocks')}
							onChange={() => {
								setAttributes({
									buttonBlockDesktop: !buttonBlockDesktop,
								});
							}}
							checked={buttonBlockDesktop}
						/>
						<ToggleControl
							label={__('タブレット', 'ystandard-blocks')}
							onChange={() => {
								setAttributes({
									buttonBlockTablet: !buttonBlockTablet,
								});
							}}
							checked={buttonBlockTablet}
						/>
						<ToggleControl
							label={__('モバイル', 'ystandard-blocks')}
							onChange={() => {
								setAttributes({
									buttonBlockMobile: !buttonBlockMobile,
								});
							}}
							checked={buttonBlockMobile}
						/>
					</BaseControl>
					{(buttonBlockDesktop ||
						buttonBlockTablet ||
						buttonBlockMobile) && (
						<BaseControl>
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
					)}
				</PanelBody>
				<PanelBody title={__('アニメーション設定', 'ystandard-blocks')}>
					<BaseControl>
						<RadioControl
							label={__('アニメーション種類', 'ystandard-blocks')}
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
								setAttributes({ animationInterval: value });
							}}
						/>
					</BaseControl>
				</PanelBody>
				<PanelBody title={__('Link settings')}>
					<ToggleControl
						label={__('Open in new tab')}
						onChange={(value) => {
							const newLinkTarget = value ? '_blank' : undefined;
							let updatedRel = rel;
							if (newLinkTarget && !rel) {
								updatedRel = ystdbConfig.button.newTabRel;
							} else if (
								!newLinkTarget &&
								rel === ystdbConfig.button.newTabRel
							) {
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
						label={__('Link rel')}
						value={rel || ''}
						onChange={(value) => {
							setAttributes({ rel: value });
						}}
					/>
				</PanelBody>
			</InspectorControls>

			<div className={wrapClasses} style={wrapStyles}>
				<span className={linkClasses} style={linkStyles}>
					<span className="ystdb-button__link-content">
						{!!iconLeft && (
							<span
								className={classnames(
									'ystdb-button__icon',
									'ystdb-button__icon--left',
									{
										[iconSizeLeft]: iconSizeLeft,
									}
								)}
							>
								<SVGIcon name={iconLeft} />
							</span>
						)}
						<RichText
							tagName={'span'}
							placeholder={__('Add text…')}
							value={text}
							onChange={(value) => setAttributes({ text: value })}
							withoutInteractiveFormatting
							className={'ystdb-button__text'}
						/>
						{!!iconRight && (
							<span
								className={classnames(
									'ystdb-button__icon',
									'ystdb-button__icon--right',
									{
										[iconSizeRight]: iconSizeRight,
									}
								)}
							>
								<SVGIcon name={iconRight} />
							</span>
						)}
					</span>
				</span>
			</div>

			{!!isSelected && (
				<div className={'ystdb-button__link-container'}>
					<URLInput
						label={__('Link')}
						className="ystdb-button__link"
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
						label={__('Open in new tab')}
						onChange={(value) => {
							const newLinkTarget = value ? '_blank' : undefined;
							let updatedRel = rel;
							if (newLinkTarget && !rel) {
								updatedRel = ystdbConfig.button.newTabRel;
							} else if (
								!newLinkTarget &&
								rel === ystdbConfig.button.newTabRel
							) {
								updatedRel = undefined;
							}
							setAttributes({
								linkTarget: newLinkTarget,
								rel: updatedRel,
							});
						}}
						checked={linkTarget === '_blank'}
					/>
				</div>
			)}
		</Fragment>
	);
}

export default compose([
	withColors('backgroundColor', { textColor: 'color' }),
	withFontSizes('fontSize'),
])(svgButton);
