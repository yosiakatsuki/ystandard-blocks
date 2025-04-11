import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { getNumber } from '@aktk/blocks-old/helper/number.js';

/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';

// @ts-ignore
const PanelColumns = ( { attributes, setAttributes } ) => {
	const { colPc, colTablet, colMobile } = attributes;

	//@ts-ignore
	const handleOnchangePc = ( value ) => {
		setAttributes( {
			// @ts-ignore
			colPc: getNumber( value, 3, 1, 6 ),
		} );
	};

	//@ts-ignore
	const handleOnChangeTablet = ( value ) => {
		setAttributes( {
			//@ts-ignore
			colTablet: getNumber( value, 3, 1, 6 ),
		} );
	};

	//@ts-ignore
	const handleOnChangeMobile = ( value ) => {
		setAttributes( {
			//@ts-ignore
			colMobile: getNumber( value, 1, 1, 6 ),
		} );
	};
	return (
		<PanelBody title={ __( 'カラム数', 'ystandard-blocks' ) }>
			<BaseControl __nextHasNoMarginBottom>
				<RangeControl
					label={ __( 'デスクトップ', 'ystandard-blocks' ) }
					beforeIcon={ 'desktop' }
					value={ colPc }
					onChange={ handleOnchangePc }
					min={ 1 }
					max={ 6 }
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>
				<RangeControl
					label={ __( 'タブレット', 'ystandard-blocks' ) }
					beforeIcon={ 'tablet' }
					value={ colTablet }
					onChange={ handleOnChangeTablet }
					min={ 1 }
					max={ 6 }
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>
				<RangeControl
					label={ __( 'モバイル', 'ystandard-blocks' ) }
					beforeIcon={ 'smartphone' }
					value={ colMobile }
					onChange={ handleOnChangeMobile }
					min={ 1 }
					max={ 6 }
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>
			</BaseControl>
		</PanelBody>
	);
};

export default PanelColumns;
