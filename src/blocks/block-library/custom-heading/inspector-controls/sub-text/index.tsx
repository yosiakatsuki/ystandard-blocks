/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import { Panel } from '@aktk/block-components/components/panel';
import ToggleControl from '@aktk/block-components/wp-controls/toggle-control';

/**
 * Block dependencies.
 */
import type { Attributes } from '../../types';

// @ts-ignore.
export function SubTextPanel( props ) {
	const { attributes, setAttributes } = props;
	const { hasSubText } = attributes as Attributes;

	return (
		<Panel title={ __( 'サブテキスト設定', 'ystandard-blocks' ) }>
			<ToggleControl
				label={ __( 'サブテキストを使う', 'ystandard-blocks' ) }
				checked={ !! hasSubText }
				onChange={ ( value ) => {
					setAttributes( { hasSubText: value } );
				} }
				__nextHasNoMarginBottom
			/>
		</Panel>
	);
}
