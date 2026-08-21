import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
import {
	RichText,
	// @ts-expect-error 型定義が同梱されていないWordPress公開API.
	useSettings,
	useBlockProps,
} from '@wordpress/block-editor';
import { Platform } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import { getInnerBlockSupportProps } from '@aktk/block-components/utils/block-supports';

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
	const { content, level, hasSubText, subText, placeholder } =
		attributes as Attributes;
	// 見出しタグ.
	const tagName = 'h' + level;

	// メインテキストのクラスとスタイルを生成.
	const mainTextClasses = getMainTextClasses( attributes );
	const mainTextStyles = getMainTextStyles( attributes );
	const [ fluidTypographySettings, layoutSettings ] = useSettings(
		'typography.fluid',
		'layout'
	);
	const mainBlockSupportProps = getInnerBlockSupportProps( attributes, {
		typography: {
			fluid: fluidTypographySettings,
		},
		layout: layoutSettings,
	} );
	const mainTextProps = {
		className: classnames(
			mainTextClasses,
			mainBlockSupportProps.className
		),
		style: {
			...mainBlockSupportProps.style,
			...mainTextStyles,
		},
	};

	// ブロックProps.
	const blockProps = useBlockProps(
		hasSubText ? { className: 'ystdb-custom-heading-group' } : mainTextProps
	);

	// メインテキストの変更.
	const onMainTextContentChange = ( newContent: string ) => {
		setAttributes( { content: newContent } );
	};
	const onSubTextContentChange = ( newContent: string ) => {
		setAttributes( { subText: newContent } );
	};

	const mainText = (
		<RichText
			identifier="content"
			// @ts-ignore
			tagName={ tagName }
			{ ...mainTextProps }
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
		/>
	);

	return (
		<>
			<ToolbarControls { ...props } />
			<InspectorControls { ...props } />
			{ hasSubText ? (
				<hgroup { ...blockProps }>
					{ mainText }
					<RichText
						identifier="subText"
						tagName="p"
						className="ystdb-custom-heading-sub"
						value={ subText || '' }
						onChange={ onSubTextContentChange }
						placeholder={ __(
							'サブテキストを入力…',
							'ystandard-blocks'
						) }
					/>
				</hgroup>
			) : (
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
			) }
		</>
	);
}

export default Edit;
