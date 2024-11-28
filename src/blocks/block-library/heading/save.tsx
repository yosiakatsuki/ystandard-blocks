/**
 * WordPress.
 */
import {
	getColorClassName,
	getFontSizeClass,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';

/**
 * Internal dependencies.
 */
import {
	getBlockClasses,
	getBlockTextClasses,
} from '@aktk/blocks/block-library/heading/util';

// @ts-ignore
export default function Save( { attributes } ) {
	const { level, content } = attributes;

	// 見出しタグ.
	const tagName = `h${ level }`;

	// ブロック一番外側のプロパティなど.
	const blockProps = useBlockProps.save( {
		className: getBlockClasses( attributes ),
	} );

	// 見出しタグ本体のクラス.
	const textClasses = getBlockTextClasses( attributes );

	return (
		<div { ...blockProps }>
			<div className={ `ystdb-heading__container` }>
				<RichText.Content
					// @ts-ignore
					tagName={ tagName }
					className={ textClasses }
					value={ content }
				/>
			</div>
		</div>
	);
}
