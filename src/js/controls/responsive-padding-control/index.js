import { BaseControl } from '@wordpress/components';
import ResponsiveSpacing from '@ystd/components/responsive-spacing';
import { __ } from '@wordpress/i18n';

import { getResponsiveValues } from '@ystd/helper/responsive';

const ResponsivePaddingControl = ( { label, values, onChange, ...props } ) => {
	const handleOnChange = ( newValue ) => {
		onChange( getResponsiveValues( newValue ) );
	};

	return (
		<BaseControl>
			<ResponsiveSpacing
				label={
					label
						? label
						: __( '内側余白(padding)', 'ystandard-toolbox' )
				}
				values={ values }
				onChange={ handleOnChange }
				{ ...props }
			/>
		</BaseControl>
	);
};

export default ResponsivePaddingControl;
