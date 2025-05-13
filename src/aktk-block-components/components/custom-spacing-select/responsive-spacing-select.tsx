/**
 * Aktk Dependencies.
 */
import { ResponsiveSelectTab } from '@aktk/block-components/components/tab-panel';
import {
	stripUndefined,
	isResponsive,
} from '@aktk/block-components/utils/object';
/**
 * Component Imports.
 */
import type { ResponsiveSpacingSelectProps, ResponsiveSpacing } from './types';

export function ResponsiveSpacingSelect( props: ResponsiveSpacingSelectProps ) {
	const {
		value,
		onChange,
		label,
		responsiveControlStyle = 'vertical',
		useResponsive = true,
		showResetButton = true,
		sides,
		minimumCustomValue = 0,
	} = props;

	const handleOnChange = ( newValue: ResponsiveSpacing ) => {
		onChange( stripUndefined( newValue ) );
	};

	const handleOnReset = () => {
		onChange( {
			desktop: undefined,
			tablet: undefined,
			mobile: undefined,
		} );
	};

	return (
		<>
			{ useResponsive ? (
				<ResponsiveSelectTab
					isResponsive={ isResponsive( value ) }
					defaultTabContent={ <></> }
					responsiveTabContent={ <></> }
				/>
			) : (
				<></>
			) }
		</>
	);
}
