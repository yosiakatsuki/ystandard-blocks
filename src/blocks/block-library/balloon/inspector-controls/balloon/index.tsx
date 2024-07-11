/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk Dependencies.
 */
import { Panel } from '@aktk/block-components/components/panel';
/**
 * Block.
 */
import BalloonPosition from './position';
import BalloonType from './type';

// @ts-ignore
export default function Balloon( props ) {
	return (
		<Panel title={ __( '吹き出し設定', 'ystandard-blocks' ) }>
			<BalloonPosition { ...props } />
			<BalloonType { ...props } />
		</Panel>
	);
}
