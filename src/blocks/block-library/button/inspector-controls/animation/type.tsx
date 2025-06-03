/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import { HorizonButtonSelect } from '@aktk/block-components/components/buttons';
import { stripUndefined } from '@aktk/block-components/utils/object';

/**
 * Plugin dependencies.
 */
import type { Attributes } from '../../types';

const ANIMATION_TYPE_OPTIONS = [
	{ label: __( 'なし', 'ystandard-blocks' ), value: 'none' },
	{ label: __( 'キラキラ', 'ystandard-blocks' ), value: 'shine' },
];

// @ts-ignore.
export function AnimationType( props ) {
	const { attributes, setAttributes } = props;
	const { animation } = attributes as Attributes;

	const handleOnChange = ( value: string ) => {
		const _animation = {
			...animation,
			type: 'none' === value ? undefined : value,
		};
		setAttributes( { animation: stripUndefined( _animation ) } );
	};

	return (
		<BaseControl
			id={ 'animation-type' }
			label={ __( 'アニメーション種類', 'ystandard-blocks' ) }
		>
			<HorizonButtonSelect
				onChange={ handleOnChange }
				value={ animation?.type || 'none' }
				options={ ANIMATION_TYPE_OPTIONS }
			/>
		</BaseControl>
	);
}
