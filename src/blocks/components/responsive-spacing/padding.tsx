/**
 * WordPress dependencies.
 */
import { BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Plugin dependencies.
 */
import {
	SpacingCustomAxialSizeControl,
	SpacingValue,
} from '@aktk/blocks/components/spacing-size-control';
import { TabPanel } from '@aktk/blocks/components/tab-panel';

/**
 * Internal dependencies.
 */
import type { ResponsiveSpacing } from './types';
import { ResponsiveSpacingControl } from './controls';
import './index.scss';

export interface ResponsivePaddingSelectProps {
	label?: string;
	controlLabel?: string;
	id?: string;
	value: SpacingValue | undefined;
	responsiveValue: ResponsiveSpacing | undefined;
	onChange: ( value: SpacingValue | undefined ) => void;
	onResponsiveChange: ( size?: ResponsiveSpacing ) => void;
	isResponsive?: boolean;
	sides?: (
		| 'top'
		| 'right'
		| 'bottom'
		| 'left'
		| 'horizontal'
		| 'vertical'
	)[];
	splitOnAxis?: boolean;
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

export function ResponsivePaddingSelect( props: ResponsivePaddingSelectProps ) {
	const {
		label,
		controlLabel = ' ',
		id = 'ystandard-blocks-responsive-padding-select',
		value,
		responsiveValue,
		onChange,
		onResponsiveChange,
		isResponsive = true,
		sides = [ 'top', 'right', 'bottom', 'left' ],
		splitOnAxis = false,
	} = props;

	const tabPanels = {
		[ TAB_SINGLE.value ]: (
			<>
				<SpacingCustomAxialSizeControl
					onChange={ onChange }
					value={ value }
				/>
			</>
		),
		[ TAB_RESPONSIVE.value ]: (
			<>
				<ResponsiveSpacingControl
					label={ controlLabel }
					onChange={ onResponsiveChange }
					values={ responsiveValue }
					splitOnAxis={ splitOnAxis }
					sides={ sides }
				/>
			</>
		),
	};

	const renderPanelType = ( type: string ) => (
		<div className="mt-4">{ tabPanels[ type ] }</div>
	);

	return (
		<BaseControl
			id={ id }
			label={ label }
			className="ystdb-responsive-spacing-tab-pannel"
		>
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
