/**
 * External dependencies
 */
import clsx from 'clsx';
/**
 * WordPress dependencies.
 */
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	withColors,
	withFontSizes,
} from '@wordpress/block-editor';
import { createBlock, getDefaultBlockName } from '@wordpress/blocks';
/**
 * Aktk Dependencies
 */
import InputControl from '@aktk/block-components/wp-controls/input-control';
/**
 * Plugin dependencies.
 */
import { getDeprecatedFontResponsiveClass } from '@aktk/blocks/deprecated/components/responsive-font-size';
/**
 * Internal dependencies.
 */
import {
	getBlockClasses,
	getBlockStyles,
	getHeadingTextClasses,
	getHeadingTextStyles,
	getSubTextClasses,
	getSubTextStyles,
} from './util';
import { BlockControls } from './block-controls';
import { InspectorControls } from './inspector-controls';
import type { AttributeType } from './type';
import './style-editor.scss';
import { Divider } from '@aktk/blocks/block-library/heading/component';

// @ts-ignore
function Edit( props ) {
	const {
		attributes,
		setAttributes,
		textColor,
		fontSize,
		subTextColor,
		subTextSize,
		dividerColor,
		mergeBlocks,
		onReplace,
		style,
		isSelected,
		clientId,
	} = props;

	const {
		level,
		align,
		content,
		useFontSizeResponsive,
		fontSizeMobile,
		fontSizeTablet,
		fontSizeDesktop,
		subText,
		subTextPosition,
		subTextBorderWidth,
		subTextBorderHeight,
		dividerMarginTop,
		dividerMarginBottom,
		dividerImageURL,
		dividerImageAlt,
		marginTop,
		marginTopUnit,
		marginRight,
		marginRightUnit,
		marginBottom,
		marginBottomUnit,
		marginLeft,
		marginLeftUnit,
	} = attributes as AttributeType;

	// 見出しレベル.
	const TagName = `h${ level }`;

	// ブロック一番外側のプロパティなど.
	const blockProps = useBlockProps( {
		className: clsx(
			getBlockClasses( {
				...attributes,
			} ),
			{
				...getDeprecatedFontResponsiveClass(
					useFontSizeResponsive,
					fontSizeMobile,
					fontSizeTablet,
					fontSizeDesktop
				),
			}
		),
		style: {
			...style,
			...getBlockStyles( attributes ),
			// 編集画面ではマージンを設定しない.
			marginTop: undefined,
			marginTopUnit: undefined,
			marginRight: undefined,
			marginRightUnit: undefined,
			marginBottom: undefined,
			marginBottomUnit: undefined,
			marginLeft: undefined,
			marginLeftUnit: undefined,
		},
	} );

	const containerStyles = {
		...getBlockStyles( {
			useFontSizeResponsive: false,
			marginTop,
			marginTopUnit,
			marginRight,
			marginRightUnit,
			marginBottom,
			marginBottomUnit,
			marginLeft,
			marginLeftUnit,
		} ),
	};

	// 見出しタグ本体のクラス.
	const textClasses = getHeadingTextClasses( {
		...attributes,
		textColor: textColor?.class,
		hasTextColor: !! textColor?.color || !! textColor?.class,
		fontSize: fontSize?.class,
	} );
	// 見出しタグ本体のstyle.
	const textStyles = {
		...getHeadingTextStyles( {
			...attributes,
			textColor: textColor?.color,
			fontSize: fontSize?.size,
		} ),
		lineHeight: '1.4',
	};

	// 見出しテキストの変更.
	const handleOnChange = ( value: string ) => {
		setAttributes( { content: value } );
	};

	// サブテキスト編集.
	const editSubText = () => {
		const showControl = isSelected || subText;

		const editorStyles = {};
		const subTextClasses = clsx(
			'ystdb-heading__subtext-edit',
			'[&_input+div]:!hidden [&_input]:!h-auto [&_input]:!p-0 [&_input]:!text-[1em] [&_input]:!tracking-[inherit] [&_input]:!text-current',
			getSubTextClasses( {
				...attributes,
				subTextColor: subTextColor?.class,
				customSubTextColor: subTextColor?.color,
				subTextSize: subTextSize?.class,
				hasSubTextSize:
					!! subTextSize?.size ||
					!! subTextSize?.class ||
					useFontSizeResponsive,
			} ),
			{
				'[&_input]:text-center': 'center' === align,
				'[&_input]:text-right': 'right' === align,
			}
		);
		const subTextStyles = {
			'--wp-components-color-background': 'transparent',
			...getSubTextStyles( {
				...attributes,
				subTextColor: subTextColor?.color,
				subTextSize: subTextSize?.size || '14px',
			} ),
		};

		return (
			<>
				{ showControl && (
					<div className={ subTextClasses } style={ editorStyles }>
						<InputControl
							className="!bg-transparent [&_*]:!bg-transparent"
							value={ subText || '' }
							style={ subTextStyles }
							onChange={ ( newValue ) => {
								setAttributes( { subText: newValue } );
							} }
							placeholder={ __(
								'サブテキスト…',
								'ystandard-blocks'
							) }
							ariaLabel={ __( 'Sub Text' ) }
							// @ts-ignore
							__next40pxDefaultSize
						/>
					</div>
				) }
			</>
		);
	};

	const SubTextDivider = () => {
		return (
			<Divider
				width={ subTextBorderWidth }
				height={ subTextBorderHeight }
				color={ dividerColor.color }
				colorClass={ dividerColor.class }
				marginTop={ dividerMarginTop }
				marginBottom={ dividerMarginBottom }
				image={ {
					url: dividerImageURL,
					alt: dividerImageAlt,
				} }
				align={ align }
			/>
		);
	};

	return (
		<>
			<BlockControls { ...props } />
			<InspectorControls { ...props } />

			<div { ...blockProps }>
				<div
					className={ `ystdb-heading__container` }
					style={ containerStyles }
				>
					{ 'top' === subTextPosition && (
						<>
							{ editSubText() }
							<SubTextDivider />
						</>
					) }
					<RichText
						identifier="content"
						// @ts-ignore
						tagName={ TagName }
						className={ textClasses }
						style={ textStyles }
						value={ content || '' }
						onChange={ handleOnChange }
						onMerge={ mergeBlocks }
						onSplit={ ( value, isOriginal ) => {
							let block;

							if ( isOriginal || value ) {
								block = createBlock( 'core/heading', {
									...attributes,
									content: value,
								} );
							} else {
								block = createBlock(
									getDefaultBlockName() ?? 'core/heading'
								);
							}

							if ( isOriginal ) {
								// @ts-ignore
								block.clientId = clientId;
							}

							return block;
						} }
						onReplace={ onReplace }
						onRemove={ () => onReplace( [] ) }
						placeholder={ __(
							'見出しテキスト…',
							'ystandard-blocks'
						) }
						aria-label={ __(
							'見出しテキスト…',
							'ystandard-blocks'
						) }
					/>
					{ 'bottom' === subTextPosition && (
						<>
							<SubTextDivider />
							{ editSubText() }
						</>
					) }
				</div>
			</div>
		</>
	);
}

// @ts-ignore
export default compose( [
	withColors( {
		textColor: 'color',
		subTextColor: 'color',
		dividerColor: 'fill',
	} ),
	withFontSizes( 'fontSize', 'subTextSize' ),
] )( Edit );
