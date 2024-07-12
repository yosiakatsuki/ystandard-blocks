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
import BalloonFontSize from './font-size';
import BalloonBackgroundColor from './background-color';
import BalloonTextColor from './text-color';
import BalloonBorderWidth from './border-width';
import BalloonBorderColor from './border-color';

// @ts-ignore
export default function Balloon( props ) {
	return (
		<Panel title={ __( '吹き出し設定', 'ystandard-blocks' ) }>
			<BalloonPosition { ...props } />
			<BalloonType { ...props } />
			<BalloonFontSize { ...props } />
			<BalloonBackgroundColor { ...props } />
			<BalloonTextColor { ...props } />
			<BalloonBorderWidth { ...props } />
			<BalloonBorderColor { ...props } />
		</Panel>
	);
}
