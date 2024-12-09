/**
 * External dependencies
 */
import clsx from 'clsx';
/**
 * WordPress dependencies.
 */
import { compose } from '@wordpress/compose';
import {
	useBlockProps,
	RichText,
	withColors,
	withFontSizes,
} from '@wordpress/block-editor';
import { createBlock, getDefaultBlockName } from '@wordpress/blocks';
/**
 * Internal dependencies.
 */
import { BlockControls } from '@aktk/blocks/block-library/heading/block-controls';
import { InspectorControls } from '@aktk/blocks/block-library/heading/inspector-controls';
import {
	getBlockClasses,
	getBlockStyles,
	getHeadingTextClasses,
	getHeadingTextStyles,
} from '@aktk/blocks/block-library/heading/util';
import { __ } from '@wordpress/i18n';
import { getDeprecatedFontResponsiveClass } from '@aktk/blocks/deprecated/components/responsive-font-size';

// @ts-ignore
function Edit( props ) {
	const {
		attributes,
		setAttributes,
		className,
		textColor,
		fontSize,
		mergeBlocks,
		onReplace,
		style,
		clientId,
	} = props;

	const {
		level,
		content,
		useFontSizeResponsive,
		fontSizeMobile,
		fontSizeTablet,
		fontSizeDesktop,
	} = attributes;

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
		},
	} );

	// 見出しタグ本体のクラス.
	const textClasses = getHeadingTextClasses( {
		...attributes,
		textColor: textColor?.class,
		hasTextColor: !! textColor?.color || !! textColor?.class,
		fontSize: fontSize?.class,
	} );
	// 見出しタグ本体のstyle.
	const textStyles = getHeadingTextStyles( {
		...attributes,
		textColor: textColor?.color,
		fontSize: fontSize?.size,
	} );

	// 見出しテキストの変更.
	const handleOnChange = ( value: string ) => {
		setAttributes( { content: value } );
	};

	return (
		<>
			<BlockControls { ...props } />
			<InspectorControls { ...props } />

			<div { ...blockProps }>
				<div className={ `ystdb-heading__container` }>
					<RichText
						identifier="content"
						// @ts-ignore
						tagName={ TagName }
						className={ textClasses }
						style={ textStyles }
						value={ content }
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
