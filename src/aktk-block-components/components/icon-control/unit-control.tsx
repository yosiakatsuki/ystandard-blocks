/**
 * Aktk
 */
import UnitControl, {
	UnitControlProps,
	UnitType,
} from '@aktk/block-components/wp-controls/unit-control';

/**
 * Components
 */
import { DesktopControl, TabletControl, MobileControl } from './wrapper';

type IconUnitControlProps = UnitControlProps & {
	unitType?: 'fontSize' | 'spacing' | 'length' | 'size';
};

const UNITS = {
	fontSize: [
		{ value: 'px', label: 'px', default: 0 },
		{ value: 'em', label: 'em', default: 0 },
		{ value: 'rem', label: 'rem', default: 0 },
	] as UnitType[],
	spacing: [
		{ value: 'px', label: 'px', default: 0 },
		{ value: 'em', label: 'em', default: 0 },
		{ value: 'rem', label: 'rem', default: 0 },
		{ value: '%', label: '%', default: 0 },
		{ value: 'vw', label: 'vw', default: 0 },
		{ value: 'vh', label: 'vh', default: 0 },
		{ value: 'ch', label: 'ch', default: 0 },
	] as UnitType[],
	size: [
		{ value: 'px', label: 'px', default: 0 },
		{ value: 'em', label: 'em', default: 0 },
		{ value: 'rem', label: 'rem', default: 0 },
		{ value: '%', label: '%', default: 0 },
		{ value: 'vw', label: 'vw', default: 0 },
		{ value: 'vh', label: 'vh', default: 0 },
		{ value: 'ch', label: 'ch', default: 0 },
	] as UnitType[],
	length: [
		{ value: 'px', label: 'px', default: 0 },
		{ value: 'em', label: 'em', default: 0 },
		{ value: 'rem', label: 'rem', default: 0 },
		{ value: '%', label: '%', default: 0 },
		{ value: 'vw', label: 'vw', default: 0 },
		{ value: 'vh', label: 'vh', default: 0 },
		{ value: 'ch', label: 'ch', default: 0 },
	] as UnitType[],
} as const;

type UnitTypes = keyof typeof UNITS | string | undefined;

function getUnits( type: UnitTypes ): UnitType[] | undefined {
	if ( ! type ) {
		return undefined;
	}
	return UNITS.hasOwnProperty( type )
		? UNITS[ type as keyof typeof UNITS ]
		: undefined;
}

function IconUnitControlBase( props: IconUnitControlProps ) {
	return <UnitControl { ...props } units={ getUnits( props?.unitType ) } />;
}

function MobileUnitControl( props: IconUnitControlProps ) {
	return (
		<MobileControl>
			<IconUnitControl { ...props } />
		</MobileControl>
	);
}

function TabletUnitControl( props: IconUnitControlProps ) {
	return (
		<TabletControl>
			<IconUnitControl { ...props } />
		</TabletControl>
	);
}

function DesktopUnitControl( props: IconUnitControlProps ) {
	return (
		<DesktopControl>
			<IconUnitControl { ...props } />
		</DesktopControl>
	);
}

const IconUnitControl = ( props: IconUnitControlProps ) => {
	return <IconUnitControlBase { ...props } />;
};

IconUnitControl.Mobile = MobileUnitControl;
IconUnitControl.Tablet = TabletUnitControl;
IconUnitControl.Desktop = DesktopUnitControl;

export { IconUnitControl };
