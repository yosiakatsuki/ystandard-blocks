/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Plugin dependencies.
 */
import Panel from '@aktk/blocks/components/panel';
import { Width } from './width';

//@ts-expect-error
export function SizePanel( props ) {
	return (
		<>
			<Panel
				title={ __( 'サイズ', 'ystandard-blocks' ) }
				initialOpen={ true }
			>
				<Width { ...props } />
			</Panel>
		</>
	);
}
