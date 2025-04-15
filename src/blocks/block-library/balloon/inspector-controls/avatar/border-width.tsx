/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk Dependencies.
 */
import UnitControl from '@aktk/block-components/wp-controls/unit-control';
import BaseControl from '@aktk/block-components/wp-controls/base-control';

const UNITS = [
	{
		value: 'px',
		label: 'px',
	},
];

// @ts-ignore
export default function AvatarBorderWidth( props ) {
	const { attributes, setAttributes } = props;
	const { avatarBorderWidth } = attributes;

	const borderWidth = avatarBorderWidth ? `${ avatarBorderWidth }px` : '';
	const handleOnChange = ( value: string ) => {
		// 数値型に変換.
		const _value = value ? parseInt( value, 10 ) : undefined;
		setAttributes( { avatarBorderWidth: _value } );
	};
	return (
		<BaseControl
			id={ 'avatar-border-width' }
			label={ __( 'アバター画像の枠線太さ', 'ystandard-blocks' ) }
		>
			<UnitControl
				value={ borderWidth }
				onChange={ handleOnChange }
				units={ UNITS }
			/>
		</BaseControl>
	);
}
