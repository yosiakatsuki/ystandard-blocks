/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import { stripUndefined } from '@aktk/block-components/utils/object';

/**
 * Internal dependencies.
 */
import type { Attributes } from '../../types';
import NumberControl from '@aktk/block-components/wp-controls/number-control';

// @ts-ignore.
export function AnimationInterval( props ) {
	const { attributes, setAttributes } = props;
	const { animation } = attributes as Attributes;

	const handleOnChange = ( value?: number | string ) => {
		const _animation = {
			...animation,
			interval: '' === value ? undefined : value,
		};
		setAttributes( { animation: stripUndefined( _animation ) } );
	};

	return (
		<BaseControl
			id={ 'animation-interval' }
			label={ __( 'アニメーションの速さ(秒)', 'ystandard-blocks' ) }
		>
			<NumberControl
				onChange={ handleOnChange }
				value={ animation?.interval || '' }
				min={ 0 }
				step={ 0.1 }
				shiftStep={ 1 }
			/>
		</BaseControl>
	);
}
