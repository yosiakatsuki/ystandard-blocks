/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import { CustomSizeControl } from '@aktk/block-components/components/custom-size-control';
import { isResponsive } from '@aktk/block-components/utils/object';
import type { ResponsiveValues } from '@aktk/block-components/types';

/**
 * Component dependencies.
 */
import { SIZE_UNITS } from './index';

// @ts-expect-error
export function Height( props ) {
	const { attributes, setAttributes } = props;
	const { height, responsiveHeight } = attributes;

	const handleOnChange = ( value: ResponsiveValues | undefined ) => {
		if ( isResponsive( value ) ) {
			// レスポンシブの場合
			setAttributes( {
				responsiveHeight: value,
				height: undefined,
			} );
		} else {
			// 通常の場合.
			setAttributes( {
				responsiveHeight: undefined,
				height: value?.desktop,
			} );
		}
	};

	const _height = isResponsive( responsiveHeight )
		? responsiveHeight
		: {
				desktop: height,
				tablet: undefined,
				mobile: undefined,
		  };

	return (
		<>
			<BaseControl
				id={ 'height' }
				label={ __( '高さ(height)', 'ystandard-blocks' ) }
			>
				<CustomSizeControl
					value={ _height }
					onChange={ handleOnChange }
					units={ SIZE_UNITS }
				/>
			</BaseControl>
		</>
	);
}
