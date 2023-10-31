/**
 * WordPress dependencies.
 */
import {
	BlockControls,
	PlainText,
	AlignmentToolbar,
	InspectorControls,
	PanelColorSettings,
	withColors,
	FontSizePicker,
	withFontSizes,
	useBlockProps,
} from '@wordpress/block-editor';
// @ts-expect-error
import ServerSideRender from '@wordpress/server-side-render';

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
import { useState } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { __, _x } from '@wordpress/i18n';
/**
 * Plugin dependencies.
 */
import HorizonButtons from '@aktk/blocks/components/horizon-buttons';
import SvgIconSelect from '@aktk/blocks/deprecated/components/svg-icon-select';
import { getIconSvg } from '@aktk/block-components/utils/icon';

/**
 * Block.
 */
import './style-editor.scss';

const ICON_SIZES = [
	{
		value: 'is-small',
		label: __('小', 'ystandard-blocks'),
	},
	{
		value: '',
		label: __('中', 'ystandard-blocks'),
	},
	{
		value: 'is-large',
		label: __('大', 'ystandard-blocks'),
	},
];

const PADDING_TYPES = [
	{
		value: 'is-small',
		label: __('小', 'ystandard-blocks'),
	},
	{
		value: '',
		label: __('中', 'ystandard-blocks'),
	},
	{
		value: 'is-large',
		label: __('大', 'ystandard-blocks'),
	},
];

const ANIMATION_TYPES = [
	{ label: __('なし', 'ystandard-blocks'), value: 'none' },
	{ label: __('キラキラ', 'ystandard-blocks'), value: 'shine' },
];

// @ts-expect-error
const SVGButtonLinkEdit = (props) => {
	const {
		backgroundColor,
		textColor,
		setBackgroundColor,
		setTextColor,
		attributes,
		setAttributes,
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

	const [isPreview, setIsPreview] = useState(false);

	const maxWidthUnitMaximum = 'px' === maxUnit ? 1200 : 100;
	const maxWidthValue = '%' === maxUnit && 100 < maxWidth ? 100 : maxWidth;

	const convertIconSize = (size: string) => {
		if ('fa-xs' === size) {
			return 'is-small';
		}
		if ('fa-2x' === size) {
			return 'is-large';
		}
		return size;
	};

	const blockProps = useBlockProps({
		className: 'wp-block-html',
	});

	return (
		<div {...blockProps}>
			<>
				{/* @ts-expect-error */}
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
								setIsPreview(false);
							}}
						>
							<span>HTML</span>
						</ToolbarButton>
						<ToolbarButton
							className={`components-tab-button`}
							isPressed={isPreview}
							onClick={() => {
								setIsPreview(true);
							}}
						>
							<span>{__('プレビュー', 'ystandard-blocks')}</span>
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
								className={'ystdb-btn-link__input'}
								value={content}
								onChange={(value) => {
									setAttributes({ content: value });
								}}
								placeholder={'HTMLを入力...'}
								aria-label={__('HTML')}
							/>
						)
					}
				</Disabled.Consumer>
				<InspectorControls>
					<PanelColorSettings
						title={__('色設定', 'ystandard-blocks')}
						initialOpen={true}
						colorSettings={[
							{
								value: backgroundColor.color,
								//@ts-expect-error
								onChange: (newColor) => {
									setAttributes({
										customGradient: undefined,
									});
									setBackgroundColor(newColor);
								},
								label: __('背景色', 'ystandard-blocks'),
							},
							{
								value: textColor.color,
								//@ts-expect-error
								onChange: (color) => {
									setTextColor(color);
								},
								label: __('文字色', 'ystandard-blocks'),
							},
						]}
					/>
					<PanelBody title={__('枠線設定', 'ystandard-blocks')}>
						<RangeControl
							value={borderRadius}
							label={__('枠線の角丸', 'ystandard-blocks')}
							min={0}
							max={100}
							initialPosition={4}
							allowReset
							onChange={(value) => {
								setAttributes({ borderRadius: value });
							}}
						/>
					</PanelBody>
					<PanelBody title={__('アイコン設定', 'ystandard-blocks')}>
						<SvgIconSelect
							iconControlTitle={__(
								'左アイコン',
								'ystandard-blocks'
							)}
							selectedIcon={iconLeft}
							// @ts-ignore
							onClickIcon={(value) => {
								setAttributes({
									iconLeft: value,
									iconLeftSVG: getIconSvg(value),
								});
							}}
						/>
						<BaseControl id={'left-icon-size'}>
							<div className="ystdb-inspector-controls__label">
								{_x('左アイコンサイズ', 'ystandard-blocks')}
							</div>
							<HorizonButtons>
								{ICON_SIZES.map((item) => {
									const variant =
										convertIconSize(iconSizeLeft) ===
										item.value
											? 'primary'
											: 'secondary';
									return (
										<Button
											key={item.value}
											variant={variant}
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
							</HorizonButtons>
						</BaseControl>
						<SvgIconSelect
							iconControlTitle={__(
								'右アイコン',
								'ystandard-blocks'
							)}
							selectedIcon={iconRight}
							// @ts-ignore
							onClickIcon={(value) => {
								setAttributes({
									iconRight: value,
									iconRightSVG: getIconSvg(value),
								});
							}}
						/>
						<BaseControl id={'right-icon-sizr'}>
							<div className="ystdb-inspector-controls__label">
								{_x('右アイコンサイズ', 'ystandard-blocks')}
							</div>
							<HorizonButtons>
								{ICON_SIZES.map((item) => {
									const variant =
										convertIconSize(iconSizeRight) ===
										item.value
											? 'primary'
											: 'secondary';
									return (
										<Button
											key={item.value}
											variant={variant}
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
							</HorizonButtons>
						</BaseControl>
					</PanelBody>

					<PanelBody title={__('文字設定', 'ystandard-blocks')}>
						<BaseControl id={'font-size'}>
							<FontSizePicker
								label={__('文字サイズ', 'ystandard-blocks')}
								value={fontSize.size}
								// @ts-expect-error
								onChange={(font) => {
									setFontSize(font);
								}}
								__nextHasNoMarginBottom
							/>
						</BaseControl>
					</PanelBody>
					<PanelBody title={__('余白設定', 'ystandard-blocks')}>
						<BaseControl id={'padding'}>
							<span className={`ystdb-info__small`}>
								ボタン内側の余白を設定できます。
							</span>
							<div
								className={
									'ystdb-btn-selector components-base-control'
								}
							>
								{PADDING_TYPES.map((item) => {
									const variant =
										paddingType === item.value
											? 'primary'
											: 'secondary';
									return (
										<Button
											key={item.value}
											variant={variant}
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
						<BaseControl id={'block'}>
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
						<BaseControl id={'animation'}>
							<RadioControl
								label={__(
									'アニメーション種類',
									'ystandard-blocks'
								)}
								selected={animationType}
								options={ANIMATION_TYPES}
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
			</>
		</div>
	);
};
// @ts-expect-error
export default compose([
	withColors('backgroundColor', { textColor: 'color' }),
	withFontSizes('fontSize'),
])(SVGButtonLinkEdit);
