/**
 * WordPress.
 */
import { BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * yStandard
 */
import ResponsiveSpacing from '@aktk/blocks/deprecated/components/responsive-spacing';
import { getResponsiveValues } from '@aktk/blocks-old/helper/responsive';

/**
 *
 * @param label
 * @param values
 * @param onChange
 * @param min
 * @param props
 * @returns {JSX.Element}
 * @constructor
 * @deprecated Old
 */
const ResponsiveMarginControl = ( {
                                    // @ts-ignore
                                    label,
                                    // @ts-ignore
                                    values,
                                    // @ts-ignore
                                    onChange,
                                    min = -9999,
                                    ...props
                                  } ) => {
  // @ts-ignores
  const handleOnChange = ( newValue ) => {
    onChange( getResponsiveValues( newValue ) );
  };

  return (
    <BaseControl>
      <ResponsiveSpacing
        { ...props }
        label={
          label ? label : __( '外側余白(margin)', 'ystandard-toolbox' )
        }
        values={ values }
        onChange={ handleOnChange }
        inputProps={ {
          min
        } }
      />
    </BaseControl>
  );
};

export default ResponsiveMarginControl;
