/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import { Panel } from '@aktk/block-components/components/panel';

/**
 * Block dependencies.
 */
import { GroupSpacingMarginControl } from './margin';
import { GroupSpacingPaddingControl } from './padding';

// @ts-ignore.
export function GroupSpacingPanel( props ) {
	const { attributes } = props;
	const { hasSubText } = attributes;

	const label = hasSubText
		? __( '見出しグループ余白', 'ystandard-blocks' )
		: __( 'メインテキスト余白', 'ystandard-blocks' );
	return (
		<Panel title={ label } initialOpen={ false }>
			<GroupSpacingMarginControl { ...props } />
			<GroupSpacingPaddingControl { ...props } />
		</Panel>
	);
}
