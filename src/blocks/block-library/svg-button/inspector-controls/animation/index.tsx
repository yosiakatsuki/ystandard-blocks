/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import {
	BaseControl,
	PanelBody,
	RadioControl,
} from '@wordpress/components';
/**
 * Plugin dependencies.
 */
import { BUTTON_ANIMATION } from '@aktk/blocks/config';
import RangeControl from '@aktk/block-components/wp-controls/range-control';

// @ts-ignore
export function Animation( props ) {
	const { attributes, setAttributes } = props;
	const { animationType, animationInterval } = attributes;
	return (
		<>
			<PanelBody title={ __( 'アニメーション設定', 'ystandard-blocks' ) }>
				<BaseControl id={ 'type' }>
					<RadioControl
						label={ __( 'アニメーション種類', 'ystandard-blocks' ) }
						selected={ animationType }
						options={ BUTTON_ANIMATION }
						onChange={ ( option ) => {
							setAttributes( { animationType: option } );
						} }
					/>
					<RangeControl
						value={ animationInterval }
						label={ __(
							'アニメーションの速さ(秒)',
							'ystandard-blocks'
						) }
						min={ 1 }
						max={ 10 }
						initialPosition={ 5 }
						allowReset
						onChange={ ( value ) => {
							setAttributes( { animationInterval: value } );
						} }
					/>
				</BaseControl>
			</PanelBody>
		</>
	);
}
