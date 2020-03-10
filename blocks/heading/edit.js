import classnames from 'classnames';

import {
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	PlainText,
	withColors,
	FontSizePicker,
	withFontSizes,
} from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import HeadingToolbar from './heading-toolbar';
import { select } from '@wordpress/data';

import { Fragment } from '@wordpress/element';

import {
	PanelBody,
	ToggleControl,
	ColorPalette,
	RangeControl,
	Button,
	Path,
	SVG,
} from '@wordpress/components';

import { compose } from '@wordpress/compose';

import { __ } from '@wordpress/i18n';
import { positions } from './config';
import getNum from '../../src/js/util/_getNum';

function customHeading( props ) {
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
		subText,
		subTextPosition,
		subTextBorderWidth,
		subTextBorderHeight,
		dividerMarginTop,
		dividerMarginBottom,
		clearStyle,
	} = attributes;

	const TagName = 'h' + level;
	const { colors } = select( 'core/block-editor' ).getSettings();
	const showSubText = isSelected || '' !== subText;

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
	const editorClasses = classnames( 'ystdb-heading__editor' );

	/**
	 * 見出し
	 *
	 * @type {string}
	 */
	const headingClasses = classnames( className, 'ystdb-heading', {
		'is-clear-style': clearStyle,
		[ `has-text-align-${ align }` ]: align,
		[ textColor.class ]: textColor.class,
		[ fontSize.class ]: fontSize.class,
		'has-border': subTextBorderHeight && subTextBorderWidth,
		'has-sub-text': subText,
	} );

	const styles = {
		color: textColor.color,
		fontSize: fontSize.size ? fontSize.size + 'px' : undefined,
	};

	const textClass = classnames( 'ystdb-heading__text' );

	/**
	 * 線
	 */
	const divider = () => {
		if ( 0 === subTextBorderHeight || 0 === subTextBorderWidth ) {
			return null;
		}
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
				'right' === align || 'center' === align ? 'auto' : undefined,
		};
		return (
			<SVG
				className={ 'ystdb-heading__line' }
				width={ subTextBorderWidth }
				height={ subTextBorderHeight }
				viewBox={ `0 0 ${ subTextBorderWidth } ${ subTextBorderHeight }` }
				xmlns="http://www.w3.org/2000/svg"
				style={ lineStyle }
			>
				<Path
					d={ `m0 0 h ${ subTextBorderWidth } v ${ subTextBorderHeight } h -${ subTextBorderWidth } z` }
				/>
			</SVG>
		);
	};

	/**
	 * サブテキスト
	 *
	 * @return {*} サブテキスト.
	 */
	const editSubText = () => {
		const padding = `calc(.25em + ${ subTextBorderHeight }px)`;

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

		const textStyle = {
			fontSize: subTextSize.size ? subTextSize.size + 'px' : '16px',
			color: subTextColor.color,
			textAlign: align,
			width: 'auto',
		};

		return (
			<Fragment>
				<div
					className={
						'ystdb-heading__subtext ystdb-heading__subtext-edit'
					}
					style={ wrapStyle }
				>
					{ showSubText && (
						<PlainText
							value={ subText }
							className={ 'ystdb-heading__subtext-textarea' }
							style={ textStyle }
							onChange={ ( value ) => {
								setAttributes( {
									subText: value,
								} );
							} }
							placeholder={ 'サブテキスト...' }
							aria-label={ __( 'Sub Text' ) }
						/>
					) }
				</div>
			</Fragment>
		);
	};

	return (
		<Fragment>
			<BlockControls>
				<HeadingToolbar
					minLevel={ 2 }
					maxLevel={ 5 }
					selectedLevel={ level }
					onChange={ ( newLevel ) =>
						setAttributes( { level: newLevel } )
					}
				/>
				<AlignmentToolbar
					value={ align }
					onChange={ ( nextAlign ) => {
						setAttributes( { align: nextAlign } );
					} }
				/>
			</BlockControls>

			<InspectorControls>
				<PanelBody
					title={ __( '見出しレベル', 'ystandard-blocks' ) }
					initialOpen={ true }
				>
					<HeadingToolbar
						isCollapsed={ false }
						minLevel={ 1 }
						maxLevel={ 7 }
						selectedLevel={ level }
						onChange={ ( newLevel ) =>
							setAttributes( { level: newLevel } )
						}
					/>
				</PanelBody>

				<PanelBody
					title={ __( '見出しテキスト設定', 'ystandard-blocks' ) }
					initialOpen={ true }
				>
					<div className="ystdb-inspector-controls__label">
						{ __( 'Text Color' ) }
					</div>
					<ColorPalette
						colors={ colors }
						disableCustomColors={ false }
						onChange={ ( color ) => {
							setTextColor( color );
						} }
						value={ textColor.color }
					/>
					<div className="ystdb-inspector-controls__label">
						{ __( '文字サイズ', 'ystandard-blocks' ) }
					</div>
					<FontSizePicker
						label={ __( '文字サイズ', 'ystandard-blocks' ) }
						value={ fontSize.size }
						onChange={ ( font ) => {
							setFontSize( font );
						} }
					/>
				</PanelBody>

				<PanelBody
					title={ __( 'サブテキスト設定', 'ystandard-blocks' ) }
					initialOpen={ false }
				>
					<div className="ystdb-inspector-controls__label">
						{ __( 'サブテキストの位置', 'ystandard-blocks' ) }
					</div>
					<div
						className={
							'ystdb-btn-selector components-base-control'
						}
					>
						{ positions.map( ( item ) => {
							return (
								<Button
									key={ item.value }
									isDefault
									isPrimary={ subTextPosition === item.value }
									onClick={ () => {
										setAttributes( {
											subTextPosition: item.value,
										} );
									} }
								>
									<span>{ item.label }</span>
								</Button>
							);
						} ) }
					</div>
					<div className="ystdb-inspector-controls__label">
						{ __( 'サブテキスト文字の色', 'ystandard-blocks' ) }
					</div>
					<ColorPalette
						colors={ colors }
						disableCustomColors={ false }
						onChange={ ( color ) => {
							setSubTextColor( color );
						} }
						value={ subTextColor.color }
					/>
					<div className="ystdb-inspector-controls__label">
						{ __( 'サブテキスト文字サイズ', 'ystandard-blocks' ) }
					</div>
					<FontSizePicker
						label={ __( '文字サイズ', 'ystandard-blocks' ) }
						value={ subTextSize.size }
						onChange={ ( font ) => {
							setSubTextSize( font );
						} }
					/>
				</PanelBody>
				<PanelBody
					title={ __( '区切り線設定', 'ystandard-blocks' ) }
					initialOpen={ false }
				>
					<RangeControl
						label={ __( '線の長さ(px)', 'ystandard-blocks' ) }
						value={ subTextBorderWidth }
						onChange={ ( value ) =>
							setAttributes( {
								subTextBorderWidth: getNum( value, 0, 1000, 0 ),
							} )
						}
						min={ 0 }
						max={ 1000 }
						step={ 1 }
					/>
					<RangeControl
						label={ __( '線の太さ(px)', 'ystandard-blocks' ) }
						value={ subTextBorderHeight }
						onChange={ ( value ) =>
							setAttributes( {
								subTextBorderHeight: getNum( value, 0, 10, 0 ),
							} )
						}
						min={ 0 }
						max={ 10 }
						step={ 1 }
					/>
					<div className="ystdb-inspector-controls__label">
						{ __( '区切り線の色', 'ystandard-blocks' ) }
					</div>
					<ColorPalette
						colors={ colors }
						disableCustomColors={ false }
						onChange={ ( color ) => {
							setDividerColor( color );
						} }
						value={ dividerColor.color }
					/>
					<div className="ystdb-inspector-controls__label">
						{ __( '区切り線の上下余白', 'ystandard-blocks' ) }
					</div>
					<RangeControl
						label={ __( '上側の余白(px)', 'ystandard-blocks' ) }
						value={ dividerMarginTop }
						onChange={ ( value ) =>
							setAttributes( {
								dividerMarginTop: getNum( value, 0, 100, 0 ),
							} )
						}
						min={ 0 }
						max={ 100 }
						step={ 1 }
						allowReset={ true }
					/>
					<RangeControl
						label={ __( '下側の余白(px)', 'ystandard-blocks' ) }
						value={ dividerMarginBottom }
						onChange={ ( value ) =>
							setAttributes( {
								dividerMarginBottom: getNum( value, 0, 100, 0 ),
							} )
						}
						min={ 0 }
						max={ 100 }
						step={ 1 }
						allowReset={ true }
					/>
				</PanelBody>
				<PanelBody
					title={ __( 'スタイル削除', 'ystandard-blocks' ) }
					initialOpen={ false }
				>
					<ToggleControl
						label={ __(
							'テーマの見出しスタイルをクリアする',
							'ystandard-blocks'
						) }
						checked={ clearStyle }
						onChange={ () => {
							setAttributes( {
								clearStyle: ! clearStyle,
							} );
						} }
					/>
				</PanelBody>
			</InspectorControls>

			<div className={ editorClasses }>
				<TagName className={ headingClasses } style={ styles }>
					{ 'top' === subTextPosition && editSubText() }
					{ 'top' === subTextPosition && divider() }
					<RichText
						identifier="content"
						tagName={ 'span' }
						className={ textClass }
						placeholder={ __( 'Write heading…' ) }
						value={ content }
						onChange={ ( value ) => {
							setAttributes( {
								content: value,
							} );
						} }
						onMerge={ mergeBlocks }
						onSplit={ ( value ) => {
							if ( ! value ) {
								return createBlock( 'core/paragraph' );
							}

							return createBlock( 'ystdb/heading', {
								...attributes,
								content: value,
							} );
						} }
						onReplace={ onReplace }
						onRemove={ () => onReplace( [] ) }
					/>
					{ 'bottom' === subTextPosition && divider() }
					{ 'bottom' === subTextPosition && editSubText() }
				</TagName>
			</div>
		</Fragment>
	);
}

export default compose( [
	withColors( {
		textColor: 'color',
		subTextColor: 'color',
		dividerColor: 'fill',
	} ),
	withFontSizes( 'fontSize', 'subTextSize' ),
] )( customHeading );
