import classnames from 'classnames';
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk dependencies
 */
import type { ResponsiveValues } from '@aktk/block-components/types';
import { IconUnitControl } from '@aktk/block-components/components/icon-control';
import { DestructiveButton } from '@aktk/block-components/components/buttons';
import type { UnitType } from '@aktk/block-components/wp-controls/unit-control';

export function NormalSizeEdit( props: {
	value: string | undefined;
	onChange: ( newValue: ResponsiveValues ) => void;
	onReset?: () => void;
	units?: UnitType[] | undefined;
} ) {
	const { value, onChange, onReset, units } = props;
	const handleOnChange = ( newValue: string ) => {
		// Desktopのみにセット.
		onChange( {
			desktop: '' === newValue ? undefined : newValue,
			tablet: undefined,
			mobile: undefined,
		} );
	};
	return (
		<div className={ 'flex items-center gap-2' }>
			<IconUnitControl
				className={ '!mb-0 w-full' }
				unitType={ 'size' }
				value={ value }
				onChange={ handleOnChange }
				units={ units }
			/>
			{ onReset && (
				<ResetButton onClick={ onReset } isHorizontal={ true } />
			) }
		</div>
	);
}

export function ResponsiveSizeEdit( props: {
	value: ResponsiveValues;
	onChange: ( newValue: ResponsiveValues ) => void;
	responsiveControlStyle?: 'vertical' | 'horizontal';
	onReset?: () => void;
	units?: UnitType[] | undefined;
} ) {
	const {
		value,
		onChange,
		responsiveControlStyle = 'vertical',
		onReset,
		units,
	} = props;
	const handleOnChange = ( newValue: ResponsiveValues ) => {
		onChange( {
			...value,
			...newValue,
		} );
	};

	const gridClasses = classnames( 'grid grid-cols-1 gap-2', {
		'md:grid-cols-3 md:gap-4': 'horizontal' === responsiveControlStyle,
	} );

	return (
		<div>
			<div className={ gridClasses }>
				<div>
					<IconUnitControl.Desktop
						unitType={ 'size' }
						value={ value?.desktop }
						onChange={ ( newValue ) => {
							handleOnChange( {
								...value,
								desktop: newValue,
							} );
						} }
						units={ units }
					/>
				</div>
				<div>
					<IconUnitControl.Tablet
						unitType={ 'size' }
						value={ value?.tablet }
						onChange={ ( newValue ) => {
							handleOnChange( {
								...value,
								tablet: newValue,
							} );
						} }
						units={ units }
					/>
				</div>
				<div>
					<IconUnitControl.Mobile
						unitType={ 'size' }
						value={ value?.mobile }
						onChange={ ( newValue ) => {
							handleOnChange( {
								...value,
								mobile: newValue,
							} );
						} }
						units={ units }
					/>
				</div>
			</div>
			{ onReset && <ResetButton onClick={ onReset } /> }
		</div>
	);
}

function ResetButton( props: { onClick: () => void; isHorizontal?: boolean } ) {
	const { onClick, isHorizontal = false } = props;

	const buttonClass = classnames(
		'justify-center whitespace-nowrap text-center',
		{
			'mt-2 w-full': ! isHorizontal,
			'w-auto': isHorizontal,
		}
	);

	return (
		<DestructiveButton
			className={ buttonClass }
			onClick={ onClick }
			isSmall
		>
			{ __( 'リセット', 'ystandard-toolbox' ) }
		</DestructiveButton>
	);
}
