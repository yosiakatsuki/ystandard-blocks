/**
 * WordPress dependencies.
 */
import { BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Plugin dependencies.
 */
import {
	ResponsiveValuesControl,
	ResponsiveValues,
	ResponsiveValuesUnit,
} from '@aktk/blocks/components/responsive-values';
import { TabPanel } from '@aktk/blocks/components/tab-panel';
import { FontSizeEdit } from '@aktk/blocks/components/font-size-edit';

/**
 * Internal dependencies.
 */
import type { ResponsiveFontSize } from './types';

export { ResponsiveFontSize };

interface ResponsiveFontSizeSelectProps {
	label?: string;
	id?: string;
	value?: string | undefined;
	responsiveValue?: ResponsiveFontSize | undefined;
	onPickerChange?: (
		size: string | undefined,
		slug?: string | undefined
	) => void;
	onResponsiveChange?: ( size?: ResponsiveFontSize ) => void;
	isResponsive?: boolean;
	units?: ResponsiveValuesUnit[];
}

const TAB_SINGLE = {
	name: 'single',
	title: __( '標準', 'ystandard-blocks' ),
	value: 'single',
};
const TAB_RESPONSIVE = {
	name: 'responsive',
	title: __( 'レスポンシブ', 'ystandard-blocks' ),
	value: 'responsive',
};

const TABS_SETTINGS = [ TAB_SINGLE, TAB_RESPONSIVE ];

const DEFAULT_UNITS = [
	{ value: 'px', label: 'px' },
	{ value: 'em', label: 'em' },
	{ value: 'rem', label: 'rem' },
	{ value: 'vw', label: 'vw' },
	{ value: 'vh', label: 'vh' },
	{ value: 'ch', label: 'ch' },
];

export function ResponsiveFontSizeSelect(
	props: ResponsiveFontSizeSelectProps
) {
	const {
		label,
		id = 'font-size-select',
		value,
		responsiveValue,
		onPickerChange,
		onResponsiveChange,
		isResponsive = true,
		units,
	} = props;

	const _units = units || DEFAULT_UNITS;

	const handleOnChangePicker = (
		size?: string | undefined,
		slug?: string | undefined
	) => {
		onPickerChange?.( size, slug );
	};

	const handleOnChangeResponsive = ( size?: ResponsiveValues ) => {
		onResponsiveChange?.( size as ResponsiveFontSize );
	};

	const tabPanels = {
		[ TAB_SINGLE.value ]: (
			<>
				<FontSizeSelect
					value={ value }
					onPickerChange={ handleOnChangePicker }
				/>
			</>
		),
		[ TAB_RESPONSIVE.value ]: (
			<>
				<ResponsiveValuesControl
					label={ __( 'フォントサイズ', 'ystandard-blocks' ) }
					labelClassName={ 'text-[10px]' }
					values={ responsiveValue }
					onChange={ handleOnChangeResponsive }
					units={ _units }
				/>
			</>
		),
	};

	const renderPanelType = ( type: string ) => (
		<div className="mt-4">{ tabPanels[ type ] }</div>
	);

	return (
		<BaseControl id={ id } label={ label }>
			{ isResponsive ? (
				<>
					<TabPanel
						tabs={ TABS_SETTINGS }
						initialTabName={
							responsiveValue
								? TAB_RESPONSIVE.value
								: TAB_SINGLE.value
						}
					>
						{ ( tab ) => renderPanelType( tab.value ) }
					</TabPanel>
				</>
			) : (
				<>{ renderPanelType( TAB_SINGLE.value ) }</>
			) }
		</BaseControl>
	);
}

function FontSizeSelect( props: ResponsiveFontSizeSelectProps ) {
	const { value, onPickerChange } = props;
	return (
		<>
			<FontSizeEdit
				value={ value }
				onChange={ (
					size: string | undefined,
					slug?: string | undefined
				) => {
					onPickerChange?.( size, slug );
				} }
			/>
		</>
	);
}
