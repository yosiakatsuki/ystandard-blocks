/**
 * WordPress dependencies.
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Platform } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Block dependencies.
 */
import type { Attributes } from './types';
import { InspectorControls } from './inspector-controls';
import { ToolbarControls } from './toolbar-controls';
import { getMainTextClasses, getMainTextStyles } from './utils';

// @ts-ignore.
function Edit( props ) {
	const { attributes, setAttributes, mergeBlocks, onReplace } = props;
	const { content, level, placeholder } = attributes as Attributes;
	// 見出しタグ.
	const tagName = 'h' + level;

	// メインテキストのクラスとスタイルを生成.
	const mainTextClasses = getMainTextClasses( attributes );
	const mainTextStyles = getMainTextStyles( attributes );

	// ブロックProps.
	const blockProps = useBlockProps( {
		className: mainTextClasses,
		style: mainTextStyles,
	} );

	// メインテキストの変更.
	const onMainTextContentChange = ( newContent: string ) => {
		setAttributes( { content: newContent } );
	};

	return (
		<>
			<ToolbarControls { ...props } />
			<InspectorControls { ...props } />
			<RichText
				identifier="content"
				// @ts-ignore
				tagName={ tagName }
				value={ content || '' }
				onChange={ onMainTextContentChange }
				onMerge={ mergeBlocks }
				onReplace={ onReplace }
				onRemove={ () => onReplace( [] ) }
				placeholder={
					placeholder ||
					__( 'カスタム見出しテキスト…', 'ystandard-blocks' )
				}
				// @ts-ignore
				{ ...( Platform.isNative && { deleteEnter: true } ) }
				{ ...blockProps }
			/>
		</>
	);
}

export default Edit;
