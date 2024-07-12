/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';

/**
 * Aktk Dependencies.
 */
import UnitControl from '@aktk/block-components/wp-controls/unit-control';

/**
 * Block.
 */
import { isTypeOutline } from '../../utils';

const UNITS = [
	{
		value: 'px',
		label: 'px',
	},
];

// @ts-ignore
export default function BalloonBorderWidth( props ) {
	const { attributes, setAttributes } = props;
	const { balloonBorderWidth } = attributes;

	// 枠線モード以外は非表示.
	if ( ! isTypeOutline( attributes ) ) {
		return <></>;
	}

	const borderWidth = balloonBorderWidth ? `${ balloonBorderWidth }px` : '';
	const handleOnChange = ( value: string ) => {
		// 数値型に変換.
		const _value = value ? parseInt( value, 10 ) : undefined;
		setAttributes( { balloonBorderWidth: _value } );
	};
	return (
		<BaseControl
			id={ 'balloon-border-width' }
			label={ __( '吹き出し枠線太さ', 'ystandard-blocks' ) }
		>
			<UnitControl
				value={ borderWidth }
				onChange={ handleOnChange }
				units={ UNITS }
			/>
		</BaseControl>
	);
}
