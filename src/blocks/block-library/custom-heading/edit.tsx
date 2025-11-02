/**
 * WordPress dependencies.
 */
import { useBlockProps, RichText, withColors } from '@wordpress/block-editor';
import { compose } from '@wordpress/compose';
import { Platform } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Block dependencies.
 */
import type { Attributes } from './types';
import { InspectorControls } from './inspector-controls';
import { getHeadingClasses, getHeadingStyles } from './utils';

// @ts-ignore.
function Edit( props ) {
	const { attributes, setAttributes, mergeBlocks, onReplace } = props;
	const { content, level, textAlign, placeholder } = attributes as Attributes;
	// 見出しタグ.
	const tagName = 'h' + level;
	// ブロックProps.
	const blockProps = useBlockProps( {
		className: getHeadingClasses( attributes ),
		style: getHeadingStyles( attributes ),
	} );

	const onContentChange = ( newContent: string ) => {
		setAttributes( { content: newContent } );
	};

	return (
		<>
			<InspectorControls { ...props } />
			<RichText
				identifier="content"
				// @ts-ignore
				tagName={ tagName }
				value={ content || '' }
				onChange={ onContentChange }
				onMerge={ mergeBlocks }
				onReplace={ onReplace }
				onRemove={ () => onReplace( [] ) }
				placeholder={
					placeholder ||
					__( 'カスタム見出しテキスト…', 'ystandard-blocks' )
				}
				textAlign={ textAlign }
				// @ts-ignore
				{ ...( Platform.isNative && { deleteEnter: true } ) }
				{ ...blockProps }
			/>
		</>
	);
}

// @ts-expect-error
export default compose( [
	withColors( 'backgroundColor', { textColor: 'color' } ),
] )( Edit );
