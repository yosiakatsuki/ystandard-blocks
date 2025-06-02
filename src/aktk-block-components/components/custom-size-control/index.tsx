/**
 * Aktk Dependencies
 */
import { ResponsiveSelectTab } from '@aktk/block-components/components/tab-panel';
import {
	stripUndefined,
	isResponsive,
} from '@aktk/block-components/utils/object';
import type { ResponsiveValues } from '@aktk/block-components/types';

/**
 * Component Dependencies.
 */
import type { CustomSizeControlProps } from './types';
import { NormalSizeEdit, ResponsiveSizeEdit } from './control';

export { NormalSizeEdit, ResponsiveSizeEdit };

export function CustomSizeControl( props: CustomSizeControlProps ) {
	const {
		value,
		onChange,
		responsiveControlStyle = 'vertical',
		useResponsive = true,
		showResetButton = true,
		units = undefined,
		additionalContent,
	} = props;

	const handleOnChange = ( newValue: ResponsiveValues ) => {
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
					defaultTabContent={
						<>
							<NormalSizeEdit
								value={ value?.desktop }
								onChange={ handleOnChange }
								onReset={
									showResetButton ? handleOnReset : undefined
								}
								units={ units }
							/>
							{ !! additionalContent &&
								additionalContent( false ) }
						</>
					}
					responsiveTabContent={
						<>
							<ResponsiveSizeEdit
								value={ value || {} }
								onChange={ handleOnChange }
								responsiveControlStyle={
									responsiveControlStyle
								}
								onReset={
									showResetButton ? handleOnReset : undefined
								}
								units={ units }
							/>
							{ !! additionalContent &&
								additionalContent( true ) }
						</>
					}
				/>
			) : (
				<>
					<NormalSizeEdit
						value={ value?.desktop }
						onChange={ ( newValue ) => {
							onChange( newValue );
						} }
						onReset={ showResetButton ? handleOnReset : undefined }
						units={ units }
					/>
					{ !! additionalContent && additionalContent( false ) }
				</>
			) }
		</>
	);
}
