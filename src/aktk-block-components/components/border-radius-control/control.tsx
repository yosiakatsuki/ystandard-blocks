import { isString } from 'lodash';
/**
 * WordPress dependencies.
 */
// @ts-ignore
import { __experimentalBorderRadiusControl as WPBorderRadiusControl } from '@wordpress/block-editor';

import type { BorderRadiusControlProps, BorderRadiusValue } from './types';

export function BorderRadiusControl( props: BorderRadiusControlProps ) {
	const { values, onChange } = props;

	const handleOnChange = ( value: BorderRadiusValue | string ) => {
		// 値が空の場合はundefinedを返す.
		// 文字列の場合はborderRadiusの形式で返す.
		// オブジェクトの場合はそのまま返す.
		const _returnValue = ! value
			? undefined
			: isString( value )
			? { borderRadius: value }
			: value;
		onChange( _returnValue );
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
