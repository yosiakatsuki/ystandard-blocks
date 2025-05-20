import { isString } from 'lodash';
/**
 * WordPress dependencies.
 */
// @ts-ignore
import { __experimentalBorderRadiusControl as WPBorderRadiusControl } from '@wordpress/block-editor';

import { BorderRadiusControlProps, BorderRadiusValue } from './types';

export function BorderRadiusControl( props: BorderRadiusControlProps ) {
	const { values, onChange } = props;

	const handleOnChange = ( value: BorderRadiusValue | string ) => {
		if ( ! value ) {
			onChange( undefined );
		}
		if ( isString( value ) ) {
			onChange( { borderRadius: value } );
		}
		onChange( value );
	};

	return (
		<>
			<WPBorderRadiusControl
				values={ values }
				onChange={ handleOnChange }
			/>
		</>
	);
}
