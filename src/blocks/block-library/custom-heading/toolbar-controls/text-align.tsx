/**
 * WordPress dependencies.
 */
import { AlignmentControl } from '@wordpress/block-editor';

/**
 * Aktk dependencies.
 */
import { stripUndefined } from '@aktk/block-components/utils/object';

/**
 * Block dependencies.
 */
import type { Attributes } from '../types';

// @ts-ignore
export function TextAlign( props ) {
	const { attributes, setAttributes } = props;
	const { hasSubText, style } = attributes as Attributes;
	const textAlign = style?.typography?.textAlign;

	// サブテキスト使用時はhgroup全体の配置方法を別途設計するため表示しない.
	if ( hasSubText ) {
		return null;
	}

	return (
		<AlignmentControl
			value={ textAlign }
			onChange={ ( nextAlign ) => {
				setAttributes( {
					style: stripUndefined( {
						...style,
						typography: {
							...style?.typography,
							textAlign: nextAlign,
						},
					} ),
				} );
			} }
		/>
	);
}
