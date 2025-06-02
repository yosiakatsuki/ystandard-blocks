/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import Button from '@aktk/block-components/wp-controls/button';
import { CustomSizeControl } from '@aktk/block-components/components/custom-size-control';
import { HorizonButtons } from '@aktk/block-components/components/buttons';
import { isResponsive } from '@aktk/block-components/utils/object';
import type { ResponsiveValues } from '@aktk/block-components/types';

/**
 * Component dependencies.
 */
import { SIZE_UNITS } from './index';

const TOGGLE_SIZES = [
	{
		label: __( '25%', 'ystandard-blocks' ),
		value: '25%',
	},
	{
		label: __( '50%', 'ystandard-blocks' ),
		value: '50%',
	},
	{
		label: __( '75%', 'ystandard-blocks' ),
		value: '75%',
	},
	{
		label: __( '100%', 'ystandard-blocks' ),
		value: '100%',
	},
];

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

	const AdditionalContent = ( isResponsiveTab: boolean ) => {
		if ( isResponsiveTab ) {
			return <></>;
		}
		return (
			<BaseControl
				id={ 'width-toggle' }
				className="mt-4"
				label={ __( '簡単設定', 'ystandard-blocks' ) }
			>
				<HorizonButtons>
					{ TOGGLE_SIZES.map( ( option ) => (
						<Button
							key={ option.value }
							variant="secondary"
							size="small"
							onClick={ () => {
								setAttributes( {
									responsiveWidth: undefined,
									width: option.value,
								} );
							} }
						>
							{ option.label }
						</Button>
					) ) }
				</HorizonButtons>
			</BaseControl>
		);
	};

	return (
		<>
			<BaseControl
				id={ 'width' }
				label={ __( '幅(width)', 'ystandard-blocks' ) }
			>
				<CustomSizeControl
					value={ _width }
					onChange={ handleOnChange }
					units={ SIZE_UNITS }
					additionalContent={ AdditionalContent }
				/>
			</BaseControl>
		</>
	);
}
