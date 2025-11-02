/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

import BaseControl from '@aktk/block-components/wp-controls/base-control';
import ToggleControl from '@aktk/block-components/wp-controls/toggle-control';

// @ts-ignore.
export function ClearStyle( props ) {
	const { attributes, setAttributes } = props;
	const { clearStyle } = attributes;
	return (
		<BaseControl>
			<ToggleControl
				label={ __(
					'テーマの見出しスタイルをクリアする',
					'ystandard-blocks'
				) }
				onChange={ () => {
					setAttributes( {
						clearStyle: ! clearStyle,
					} );
				} }
				checked={ clearStyle }
			/>
		</BaseControl>
	);
}
