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
export function Width( props ) {
	const { attributes, setAttributes } = props;
	const { width, responsiveWidth } = attributes;

	const handleOnChange = ( value: ResponsiveValues | undefined ) => {
		if ( isResponsive( value ) ) {
			// レスポンシブの場合
			setAttributes( {
				responsiveWidth: value,
				width: undefined,
			} );
		} else {
			// 通常の場合.
			setAttributes( {
				responsiveWidth: undefined,
				width: value?.desktop,
			} );
		}
	};

	const _width = isResponsive( responsiveWidth )
		? responsiveWidth
		: {
				desktop: width,
				tablet: undefined,
				mobile: undefined,
		  };

	return (
		<BaseControl
			id={ 'width' }
			label={ __( '幅(width)', 'ystandard-blocks' ) }
		>
			<CustomSizeControl
				value={ _width }
				onChange={ handleOnChange }
				units={ SIZE_UNITS }
			/>
		</BaseControl>
	);
}
