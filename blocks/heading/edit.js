// @ts-nocheck
import classnames from 'classnames';
/**
 * WordPress.
 */
import {
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	MediaUpload,
	withColors,
	withFontSizes,
} from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';

import { Fragment } from '@wordpress/element';

import {
	PanelBody,
	BaseControl,
	ToggleControl,
	RangeControl,
	SelectControl,
	Button,
	TextControl,
	Path,
	SVG,
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';

import { compose } from '@wordpress/compose';

import { __ } from '@wordpress/i18n';
/**
 * Plugin.
 */
import getNum from '@aktk/util/_getNum';
import ResponsiveFontSizeControl from '@aktk/components/responsive-font-size/index';
import {
	getFontResponsiveClass,
	getFontResponsiveStyle,
} from '@aktk/components/responsive-font-size/functions';
import HorizonButtons from '@aktk/components/horizon-buttons';
import ColorPaletteControl from '@aktk/components/color-palette-control';
/**
 * Blocks.
 */
import { positions, cssUnit, fontWeightList } from './config';
import HeadingToolbar from './heading-toolbar';

function customHeading(props) {
	const {
		textColor,
		setTextColor,
		subTextColor,
		setSubTextColor,
		dividerColor,
		setDividerColor,
		attributes,
		setAttributes,
		isSelected,
		fontSize,
		setFontSize,
		subTextSize,
		setSubTextSize,
		onReplace,
		mergeBlocks,
		className,
	} = props;
	const {
		content,
		level,
		align,
		useFontSizeResponsive,
		fontSizeMobile,
		fontSizeTablet,
		fontSizeDesktop,
		fontWeight,
		letterSpacing,
		subText,
		subTextPosition,
		subTextBorderWidth,
		subTextBorderHeight,
		useSubTextSizeResponsive,
		subTextSizeMobile,
		subTextSizeTablet,
		subTextSizeDesktop,
		subTextFontWeight,
		subTextLetterSpacing,
		dividerMarginTop,
		dividerMarginBottom,
		clearStyle,
		dividerImageURL,
		dividerImageAlt,
		dividerImageID,
		marginTop,
		marginTopUnit,
		marginRight,
		marginRightUnit,
		marginBottom,
		marginBottomUnit,
		marginLeft,
		marginLeftUnit,
	} = attributes;

	const TagName = 'h' + level;
	const showSubText = isSelected || '' !== subText;

	const MARGIN_MIN_SIZE = -120;
	const MARGIN_NEGATIVE_ADD = '28px';

	/**
	 * 編集画面の余白調整
	 *
	 * @type {string}
	 */
	const dividerEditorMarginTop =
		'bottom' === subTextPosition
			? dividerMarginTop + 2 + 'px'
			: dividerMarginTop - 1 + 'px';
	const dividerEditorMarginBottom =
		'bottom' === subTextPosition
			? dividerMarginBottom + 'px'
			: dividerMarginBottom + 2 + 'px';
	/**
	 * 編集領域
	 *
	 * @type {string}
	 */
	const editorClasses = classnames('ystdb-heading__editor');

	/**
	 * 見出し
	 *
	 * @type {string}
	 */
	const headingClasses = classnames(className, 'ystdb-heading', {
		[`has-text-align-${align}`]: align,
		[textColor.class]: textColor.class,
		[fontSize.class]: fontSize.class && !useFontSizeResponsive,
		'has-border': subTextBorderHeight && subTextBorderWidth,
		'has-sub-text': subText,
		...getFontResponsiveClass(
			useFontSizeResponsive,
			fontSizeDesktop,
			fontSizeTablet,
			fontSizeMobile
		),
	});

	const getVerticalMargin = (margin, unit) => {
		if ('' === margin || !parseFloat(margin)) {
			return undefined;
		}
		if (0 > parseFloat(margin)) {
			return `calc(${margin}${unit} - ${MARGIN_NEGATIVE_ADD})`;
		}
		return `${margin}${unit}`;
	};

	const headingStyles = {
		marginTop: getVerticalMargin(marginTop, marginTopUnit),
		marginRight:
			'' !== marginRight ? marginRight + marginRightUnit : undefined,
		marginBottom: getVerticalMargin(marginBottom, marginBottomUnit),
		marginLeft: '' !== marginLeft ? marginLeft + marginLeftUnit : undefined,
		...getFontResponsiveStyle({
			isResponsive: useFontSizeResponsive,
			desktop: fontSizeDesktop,
			tablet: fontSizeTablet,
			mobile: fontSizeMobile,
		}),
	};

	const styles = {
		color: textColor.color,
		fontSize:
			fontSize.size && !useFontSizeResponsive ? fontSize.size : undefined,
		fontWeight: !!fontWeight ? fontWeight : undefined,
		letterSpacing:
			!!letterSpacing && 0 < letterSpacing
				? `${letterSpacing}em`
				: undefined,
	};
	const textClass = classnames('ystdb-heading__text', {
		'is-clear-style': clearStyle,
	});

	/**
	 * 線
	 */
	const divider = () => {
		if (0 === subTextBorderHeight || 0 === subTextBorderWidth) {
			return null;
		}
		const svg = () => {
			const lineStyle = {
				fill: dividerColor.color ? dividerColor.color : '#222',
				marginTop:
					0 !== dividerMarginTop ? dividerEditorMarginTop : undefined,
				marginBottom:
					0 !== dividerMarginBottom
						? dividerEditorMarginBottom
						: undefined,
				marginRight:
					'left' === align || 'center' === align ? 'auto' : undefined,
				marginLeft:
					'right' === align || 'center' === align
						? 'auto'
						: undefined,
			};
			return (
				<SVG
					className={'ystdb-heading__line'}
					width={subTextBorderWidth}
					height={subTextBorderHeight}
					viewBox={`0 0 ${subTextBorderWidth} ${subTextBorderHeight}`}
					xmlns="http://www.w3.org/2000/svg"
					style={lineStyle}
				>
					<Path
						d={`m0 0 h ${subTextBorderWidth} v ${subTextBorderHeight} h -${subTextBorderWidth} z`}
					/>
				</SVG>
			);
		};
		const image = () => {
			const lineStyle = {
				display: 'block',
				width: subTextBorderWidth,
				height: subTextBorderHeight,
				marginTop:
					0 !== dividerMarginTop ? dividerEditorMarginTop : undefined,
				marginBottom:
					0 !== dividerMarginBottom
						? dividerEditorMarginBottom
						: undefined,
				marginRight:
					'left' === align || 'center' === align ? 'auto' : undefined,
				marginLeft:
					'right' === align || 'center' === align
						? 'auto'
						: undefined,
			};
			return (
				<img
					className={'ystdb-heading__line'}
					src={dividerImageURL}
					width={subTextBorderWidth}
					height={subTextBorderHeight}
					alt={dividerImageAlt}
					style={lineStyle}
				/>
			);
		};
		return !!dividerImageURL ? image() : svg();
	};

	/**
	 * サブテキスト
	 *
	 * @return {*} サブテキスト.
	 */
	const editSubText = () => {
		const padding = `calc(.25em + ${subTextBorderHeight}px)`;

		const wrapStyle = {
			marginBottom:
				'top' === subTextPosition && subTextBorderHeight
					? padding
					: undefined,
			marginTop:
				'bottom' === subTextPosition && subTextBorderHeight
					? padding
					: undefined,
			marginRight: 'center' === align ? 'auto' : undefined,
			marginLeft: 'center' === align ? 'auto' : undefined,
		};

		let textStyle = {
			color: subTextColor.color,
			textAlign: align,
			width: 'auto',
			height: 'auto',
			fontWeight: !!subTextFontWeight ? subTextFontWeight : undefined,
			letterSpacing:
				!!subTextLetterSpacing && 0 < subTextLetterSpacing
					? `${subTextLetterSpacing}em`
					: undefined,
		};

		if (useSubTextSizeResponsive) {
			textStyle = {
				...textStyle,
				...getFontResponsiveStyle({
					isResponsive: useSubTextSizeResponsive,
					desktop: subTextSizeDesktop,
					tablet: subTextSizeTablet,
					mobile: subTextSizeMobile,
				}),
			};
		} else {
			textStyle = {
				...textStyle,
				fontSize: subTextSize.size ? subTextSize.size : '14px',
			};
		}

		const subTextClass = classnames(
			'ystdb-heading__subtext',
			'ystdb-heading__subtext-edit',
			{
				...getFontResponsiveClass(
					useSubTextSizeResponsive,
					subTextSizeDesktop,
					subTextSizeTablet,
					subTextSizeMobile
				),
			}
		);

		return (
			<Fragment>
				<div className={subTextClass} style={wrapStyle}>
					{showSubText && (
						<TextControl
							value={subText}
							style={textStyle}
							onChange={(value) => {
								setAttributes({
									subText: value,
								});
							}}
							placeholder={'サブテキスト...'}
							aria-label={__('Sub Text')}
						/>
					)}
				</div>
			</Fragment>
		);
	};
	/**
	 * 画像設定コントロール
	 *
	 * @param {Object} obj
	 */
	const mediaUploadRender = (obj) => {
		if (0 === dividerImageID) {
			return (
				<Button variant="secondary" onClick={obj.open}>
					{__('画像を選択', 'ystandard-blocks')}
				</Button>
			);
		}
		return (
			<div>
				<Button
					onClick={obj.open}
					className={'ystdb-mediaupload__preview'}
					style={{ padding: 0 }}
				>
					<img src={dividerImageURL} alt={dividerImageAlt} />
				</Button>
				<Button
					variant="secondary"
					onClick={() => {
						setAttributes({
							dividerImageURL: '',
							dividerImageID: 0,
						});
					}}
				>
					{__('画像をクリア', 'ystandard-blocks')}
				</Button>
			</div>
		);
	};

	const getMarginStep = (unit) => {
		if ('em' === unit || 'rem' === unit) {
			return 0.1;
		}
		return 1;
	};

	return (
		<Fragment>
			<BlockControls>
				<HeadingToolbar
					minLevel={2}
					maxLevel={5}
					selectedLevel={level}
					onChange={(newLevel) => setAttributes({ level: newLevel })}
				/>
				<AlignmentToolbar
					value={align}
					onChange={(nextAlign) => {
						setAttributes({ align: nextAlign });
					}}
				/>
			</BlockControls>

			<InspectorControls>
				<PanelBody
					title={__('見出しレベル', 'ystandard-blocks')}
					initialOpen={true}
				>
					<HeadingToolbar
						isCollapsed={false}
						minLevel={1}
						maxLevel={7}
						selectedLevel={level}
						onChange={(newLevel) =>
							setAttributes({ level: newLevel })
						}
					/>
				</PanelBody>

				<PanelBody
					title={__('色・サイズ', 'ystandard-blocks')}
					initialOpen={true}
				>
					<div className="ystdb-inspector-controls__label">
						{__('文字色', 'ystandard-blocks')}
					</div>
					<ColorPaletteControl
						label={__('文字色', 'ystandard-blocks')}
						value={textColor.color}
						onChange={(color) => {
							setTextColor(color);
						}}
					/>
					<div className="ystdb-inspector-controls__label">
						{__('文字サイズ', 'ystandard-blocks')}
					</div>
					<ResponsiveFontSizeControl
						id={'font-size'}
						useResponsive={useFontSizeResponsive}
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
							setAttributes({ useFontSizeResponsive: value });
						}}
						desktopValue={fontSizeDesktop}
						desktopOnChange={(value) => {
							setAttributes({
								fontSizeDesktop: getNum(value, 0, 200, null),
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
					<div className="ystdb-inspector-controls__label">
						{__('太さ', 'ystandard-blocks')}
					</div>
					<SelectControl
						value={fontWeight}
						options={fontWeightList}
						onChange={(type) => {
							setAttributes({
								fontWeight: type,
							});
						}}
					/>
					<div className="ystdb-inspector-controls__label">
						{__('Letter Spacing', 'ystandard-blocks')}
					</div>
					<NumberControl
						value={letterSpacing}
						onChange={(value) => {
							setAttributes({
								letterSpacing: getNum(value, 0, 1, null),
							});
						}}
						min={0}
						max={1}
						step={0.01}
					/>
				</PanelBody>
				<PanelBody
					title={__('余白', 'ystandard-blocks')}
					initialOpen={false}
				>
					<div className="ystdb-inspector-controls__columns has-unit-select">
						<span>{__('上', 'ystandard-blocks')}</span>
						<NumberControl
							value={marginTop}
							onChange={(value) => {
								const newValue =
									'' === value
										? ''
										: getNum(value, -120, 120, 0);
								setAttributes({
									marginTop: newValue.toString(),
								});
							}}
							min={MARGIN_MIN_SIZE}
							max={120}
							step={getMarginStep(marginTopUnit)}
							style={{ flexGrow: 1 }}
						/>
						<SelectControl
							value={marginTopUnit}
							options={cssUnit}
							onChange={(type) => {
								setAttributes({
									marginTopUnit: type,
								});
							}}
						/>
					</div>
					<div className="ystdb-inspector-controls__columns has-unit-select">
						<span>{__('右', 'ystandard-blocks')}</span>
						<NumberControl
							value={marginRight}
							onChange={(value) => {
								const newValue =
									'' === value
										? ''
										: getNum(value, -120, 120, 0);
								setAttributes({
									marginRight: newValue.toString(),
								});
							}}
							min={MARGIN_MIN_SIZE}
							max={120}
							step={getMarginStep(marginRightUnit)}
							style={{ flexGrow: 1 }}
						/>
						<SelectControl
							value={marginRightUnit}
							options={cssUnit}
							onChange={(type) => {
								setAttributes({
									marginRightUnit: type,
								});
							}}
						/>
					</div>
					<div className="ystdb-inspector-controls__columns has-unit-select">
						<span>{__('下', 'ystandard-blocks')}</span>
						<NumberControl
							value={marginBottom}
							onChange={(value) => {
								const newValue =
									'' === value
										? ''
										: getNum(value, -120, 120, 0);
								setAttributes({
									marginBottom: newValue.toString(),
								});
							}}
							min={MARGIN_MIN_SIZE}
							max={120}
							step={getMarginStep(marginBottomUnit)}
							style={{ flexGrow: 1 }}
						/>
						<SelectControl
							value={marginBottomUnit}
							options={cssUnit}
							onChange={(type) => {
								setAttributes({
									marginBottomUnit: type,
								});
							}}
						/>
					</div>
					<div className="ystdb-inspector-controls__columns has-unit-select">
						<span>{__('左', 'ystandard-blocks')}</span>
						<NumberControl
							value={marginLeft}
							onChange={(value) => {
								const newValue =
									'' === value
										? ''
										: getNum(value, -120, 120, 0);
								setAttributes({
									marginLeft: newValue.toString(),
								});
							}}
							min={MARGIN_MIN_SIZE}
							max={120}
							step={getMarginStep(marginLeftUnit)}
							style={{ flexGrow: 1 }}
						/>
						<SelectControl
							value={marginLeftUnit}
							options={cssUnit}
							onChange={(type) => {
								setAttributes({
									marginLeftUnit: type,
								});
							}}
						/>
					</div>
				</PanelBody>

				<PanelBody
					title={__('サブテキスト', 'ystandard-blocks')}
					initialOpen={false}
				>
					<div className="ystdb-inspector-controls__label">
						{__('サブテキストの位置', 'ystandard-blocks')}
					</div>
					<HorizonButtons>
						{positions.map((item) => {
							return (
								<Button
									key={item.value}
									isSecondary={subTextPosition !== item.value}
									isPrimary={subTextPosition === item.value}
									onClick={() => {
										setAttributes({
											subTextPosition: item.value,
										});
									}}
								>
									<span>{item.label}</span>
								</Button>
							);
						})}
					</HorizonButtons>
					<div className="ystdb-inspector-controls__label">
						{__('サブテキスト文字の色', 'ystandard-blocks')}
					</div>
					<ColorPaletteControl
						label={__('サブテキスト文字の色', 'ystandard-blocks')}
						value={subTextColor.color}
						onChange={(color) => {
							setSubTextColor(color);
						}}
					/>
					<div className="ystdb-inspector-controls__label">
						{__('サブテキスト文字サイズ', 'ystandard-blocks')}
					</div>
					<ResponsiveFontSizeControl
						id={'sub-text-size'}
						useResponsive={useSubTextSizeResponsive}
						fontSize={subTextSize}
						onChangeFontSizePicker={(font) => {
							setSubTextSize(font);
						}}
						changeResponsiveMode={(value) => {
							if (value) {
								setAttributes({
									subTextSizeDesktop:
										!subTextSizeDesktop && subTextSize.size
											? subTextSize.size
											: getNum(
													subTextSizeDesktop,
													0,
													200,
													null
											  ),
									subTextSizeTablet:
										!subTextSizeTablet && subTextSize.size
											? subTextSize.size
											: getNum(
													subTextSizeTablet,
													0,
													200,
													null
											  ),
									subTextSizeMobile:
										!subTextSizeMobile && subTextSize.size
											? subTextSize.size
											: getNum(
													subTextSizeMobile,
													0,
													200,
													null
											  ),
								});
							}
							setAttributes({
								useSubTextSizeResponsive: value,
							});
						}}
						desktopValue={subTextSizeDesktop}
						desktopOnChange={(value) =>
							setAttributes({
								subTextSizeDesktop: getNum(value, 0, 200, null),
							})
						}
						desktopUnit={'px'}
						tabletValue={subTextSizeTablet}
						tabletOnChange={(value) =>
							setAttributes({
								subTextSizeTablet: getNum(value, 0, 200, null),
							})
						}
						tabletUnit={'px'}
						mobileValue={subTextSizeMobile}
						mobileOnChange={(value) =>
							setAttributes({
								subTextSizeMobile: getNum(value, 0, 200, null),
							})
						}
						mobileUnit={'px'}
					/>

					<div className="ystdb-inspector-controls__label">
						{__('太さ', 'ystandard-blocks')}
					</div>
					<SelectControl
						value={subTextFontWeight}
						options={fontWeightList}
						onChange={(type) => {
							setAttributes({
								subTextFontWeight: type,
							});
						}}
					/>
					<div className="ystdb-inspector-controls__label">
						{__('Letter Spacing', 'ystandard-blocks')}
					</div>
					<NumberControl
						value={subTextLetterSpacing}
						onChange={(value) => {
							setAttributes({
								subTextLetterSpacing: getNum(value, 0, 1, null),
							});
						}}
						min={0}
						max={1}
						step={0.01}
					/>
				</PanelBody>
				<PanelBody
					title={__('区切り線', 'ystandard-blocks')}
					initialOpen={false}
				>
					<RangeControl
						label={__('線の長さ(px)', 'ystandard-blocks')}
						value={subTextBorderWidth}
						onChange={(value) =>
							setAttributes({
								subTextBorderWidth: getNum(value, 0, 1000, 0),
							})
						}
						min={0}
						max={1000}
						step={1}
					/>
					<RangeControl
						label={__('線の太さ(px)', 'ystandard-blocks')}
						value={subTextBorderHeight}
						onChange={(value) =>
							setAttributes({
								subTextBorderHeight: getNum(value, 0, 10, 0),
							})
						}
						min={0}
						max={10}
						step={1}
					/>
					<div className="ystdb-inspector-controls__label">
						{__('区切り線の色', 'ystandard-blocks')}
					</div>
					<ColorPaletteControl
						label={__('区切り線の色', 'ystandard-blocks')}
						value={dividerColor.color}
						onChange={(color) => {
							setDividerColor(color);
						}}
					/>
					<div className="ystdb-inspector-controls__label">
						{__('区切り線用画像', 'ystandard-blocks')}
					</div>
					<MediaUpload
						onSelect={(media) => {
							setAttributes({
								dividerImageURL: media.url,
								dividerImageID: media.id,
								dividerImageAlt: media.alt,
							});
						}}
						type={['image']}
						value={dividerImageID}
						render={mediaUploadRender}
					/>
					<span className={`ystdb-info__small`}>
						{__(
							'※画像を指定した場合、区切り線の色設定は無視されます。',
							'ystandard-blocks'
						)}
					</span>
					<div className="ystdb-inspector-controls__label">
						{__('区切り線の上下余白', 'ystandard-blocks')}
					</div>
					<RangeControl
						label={__('上側の余白(px)', 'ystandard-blocks')}
						value={dividerMarginTop}
						onChange={(value) =>
							setAttributes({
								dividerMarginTop: getNum(value, 0, 100, 0),
							})
						}
						min={0}
						max={100}
						step={1}
						allowReset={true}
					/>
					<RangeControl
						label={__('下側の余白(px)', 'ystandard-blocks')}
						value={dividerMarginBottom}
						onChange={(value) =>
							setAttributes({
								dividerMarginBottom: getNum(value, 0, 100, 0),
							})
						}
						min={0}
						max={100}
						step={1}
						allowReset={true}
					/>
				</PanelBody>
				<PanelBody
					title={__('スタイル削除', 'ystandard-blocks')}
					initialOpen={false}
				>
					<BaseControl>
						<ToggleControl
							label={__(
								'テーマの見出しスタイルをクリアする',
								'ystandard-blocks'
							)}
							checked={clearStyle}
							onChange={() => {
								setAttributes({
									clearStyle: !clearStyle,
								});
							}}
						/>
					</BaseControl>
				</PanelBody>
			</InspectorControls>

			<div className={editorClasses}>
				<div className={headingClasses} style={headingStyles}>
					<div className={`ystdb-heading__container`}>
						{'top' === subTextPosition && editSubText()}
						{'top' === subTextPosition && divider()}
						<RichText
							identifier="content"
							tagName={TagName}
							className={textClass}
							placeholder={__(
								'見出しテキスト…',
								'ystandard-blocks'
							)}
							value={content}
							style={styles}
							onChange={(value) => {
								setAttributes({
									content: value,
								});
							}}
							onMerge={mergeBlocks}
							onSplit={(value) => {
								if (!value) {
									return createBlock('core/paragraph');
								}

								return createBlock('ystdb/heading', {
									...attributes,
									content: value,
								});
							}}
							onReplace={onReplace}
							onRemove={() => onReplace([])}
						/>
						{'bottom' === subTextPosition && divider()}
						{'bottom' === subTextPosition && editSubText()}
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default compose([
	withColors({
		textColor: 'color',
		subTextColor: 'color',
		dividerColor: 'fill',
	}),
	withFontSizes('fontSize', 'subTextSize'),
])(customHeading);
