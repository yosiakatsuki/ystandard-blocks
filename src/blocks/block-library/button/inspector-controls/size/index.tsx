/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk dependencies.
 */
import { Panel } from '@aktk/block-components/components/panel';
/**
 * Plugin dependencies.
 */
import { Width } from './width';

//@ts-expect-error
export function SizePanel( props ) {
	return (
		<>
			<Panel
				title={ __( 'サイズ', 'ystandard-blocks' ) }
				initialOpen={ false }
			>
				<Width { ...props } />
			</Panel>
		</>
	);
}

export const SIZE_UNITS = [
	{ value: '%', label: '%', default: 0 },
	{ value: 'px', label: 'px', default: 0 },
	{ value: 'em', label: 'em', default: 0 },
	{ value: 'rem', label: 'rem', default: 0 },
	{ value: 'vw', label: 'vw', default: 0 },
	{ value: 'vh', label: 'vh', default: 0 },
	{ value: 'ch', label: 'ch', default: 0 },
];
