/**
 * WordPress dependencies
 */
import { sidesHorizontal, sidesVertical } from '@wordpress/icons';
import { Icon } from '@wordpress/components';
// @ts-ignore
import { __experimentalSpacingSizesControl as WPSpacingSizeControl } from '@wordpress/block-editor';
/**
 * Plugin dependencies.
 */
import { ValueInput } from '@aktk/blocks/components/value-input';

export type SpacingValue = {
	top: string | undefined;
	right: string | undefined;
	bottom: string | undefined;
	left: string | undefined;
};

interface SpacingSizeProps {
	inputProps?: object;
	label?: string;
	minimumCustomValue?: number;
	onChange: ( value: SpacingValue | undefined ) => void;
	onMouseOut?: () => void;
	onMouseOver?: () => void;
	showSideInLabel?: boolean;
	sides?: string[];
	values?: SpacingValue;
	splitOnAxis?: boolean;
}

export function SpacingSizeControl( props: SpacingSizeProps ) {
	return <WPSpacingSizeControl { ...props } />;
}

interface SpacingCustomAxialSizeControlProps {
	label?: string;
	onChange: ( value: SpacingValue | undefined ) => void;
	value?: SpacingValue;
	units?: {
		value: string;
		label: string;
		default?: number;
	}[];
	sides?: ( 'horizontal' | 'vertical' )[];
}

export function SpacingCustomAxialSizeControl(
	props: SpacingCustomAxialSizeControlProps
) {
	const {
		label,
		onChange,
		value,
		units,
		sides = [ 'horizontal', 'vertical' ],
	} = props;
	const DEFAULT_VALUE: SpacingValue = {
		top: undefined,
		right: undefined,
		bottom: undefined,
		left: undefined,
	};

	const isAllSides = sides?.length === 2;

	const handleOnHorizontalChange = ( newValue: string | undefined ) => {
		onChange( {
			...DEFAULT_VALUE,
			...value,
			right: newValue || undefined,
			left: newValue || undefined,
		} );
	};
	const handleOnVerticalChange = ( newValue: string | undefined ) => {
		onChange( {
			...DEFAULT_VALUE,
			...value,
			top: newValue || undefined,
			bottom: newValue || undefined,
		} );
	};

	return (
		<div className="ystdb-spacing-custom-axial-size-control">
			{ label && (
				<span className="mb-1 block text-fz-xs font-bold">
					{ label }
				</span>
			) }
			<div className="flex flex-col gap-2">
				{ ( isAllSides || sides?.includes( 'vertical' ) ) && (
					<div className="flex items-center gap-2">
						<Icon icon={ sidesVertical } size={ 24 } />
						<ValueInput
							value={ value?.top || '' }
							onChange={ handleOnVerticalChange }
							units={ units }
						/>
					</div>
				) }
				{ ( isAllSides || sides?.includes( 'horizontal' ) ) && (
					<div className="flex items-center gap-2">
						<Icon icon={ sidesHorizontal } size={ 24 } />
						<ValueInput
							value={ value?.right || '' }
							onChange={ handleOnHorizontalChange }
							units={ units }
						/>
					</div>
				) }
			</div>
		</div>
	);
}
