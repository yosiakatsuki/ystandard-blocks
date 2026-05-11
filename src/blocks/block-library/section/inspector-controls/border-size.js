import { __ } from '@wordpress/i18n';
/**
 * Aktk Dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import RangeControl from '@aktk/block-components/wp-controls/range-control';

import { toNumber } from '@aktk/helper/number';

const BorderSize = ( props ) => {
	const { attributes, setAttributes } = props;

	const { borderSize } = attributes;

	const handleOnChange = ( value ) => {
		setAttributes( {
			borderSize: `${ value }px`,
		} );
	};

	return (
		<BaseControl>
			<RangeControl
				label={ __( '枠線サイズ', 'ystandard-blocks' ) }
				value={ toNumber( parseInt( borderSize ) ) }
				onChange={ handleOnChange }
				min={ 0 }
				max={ 50 }
				step={ 1 }
				initialPosition={ 0 }
				allowReset={ true }
			/>
		</BaseControl>
	);
};

export default BorderSize;
