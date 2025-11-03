/**
 * WordPress
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk Dependencies.
 */
import LineHeightControl from '@aktk/block-components/wp-controls/line-height-control';
import BaseControl from '@aktk/block-components/wp-controls/base-control';

/**
 * Block Dependencies.
 */
import type { Attributes } from '../../types';

// @ts-ignore.
export function MainTextLineHeight( props ) {
	const { attributes, setAttributes } = props;
	const { lineHeight } = attributes as Attributes;

	const handleOnChange = ( newValue: string | undefined ) => {
		setAttributes( {
			lineHeight: newValue,
		} );
	};

	return (
		<BaseControl>
			<LineHeightControl
				// @ts-ignore.
				label={ __( '行の高さ', 'ystandard-blocks' ) }
				// @ts-ignore.
				value={ lineHeight }
				onChange={ handleOnChange }
			/>
		</BaseControl>
	);
}
