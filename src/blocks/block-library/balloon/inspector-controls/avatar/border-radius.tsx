/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';

/**
 * Aktk Dependencies.
 */
import UnitControl from '@aktk/block-components/wp-controls/unit-control';

const UNITS = [
	{
		value: 'px',
		label: 'px',
	},
];

// @ts-ignore
export default function AvatarBorderRadius( props ) {
	const { attributes, setAttributes } = props;
	const { avatarBorderRadius } = attributes;

	const borderRadius = avatarBorderRadius ? `${ avatarBorderRadius }px` : '';
	const handleOnChange = ( value: string ) => {
		// 数値型に変換.
		const _value = value ? parseInt( value, 10 ) : undefined;
		setAttributes( { avatarBorderRadius: _value } );
	};
	return (
		<BaseControl
			id={ 'avatar-border-radius' }
			label={ __( 'アバター画像の角丸', 'ystandard-blocks' ) }
		>
			<UnitControl
				value={ borderRadius }
				onChange={ handleOnChange }
				units={ UNITS }
			/>
		</BaseControl>
	);
}
