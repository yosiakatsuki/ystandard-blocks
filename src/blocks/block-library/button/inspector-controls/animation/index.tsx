/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk dependencies.
 */
import { Panel } from '@aktk/block-components/components/panel';

/**
 * Internal dependencies.
 */
import { AnimationType } from './type';
import { AnimationInterval } from './interval';

// @ts-ignore
export function AnimationPanel( props ) {
	return (
		<Panel title={ __( 'アニメーション', 'ystandard-blocks' ) }>
			<AnimationType { ...props } />
			<AnimationInterval { ...props } />
		</Panel>
	);
}
