import clsx from 'clsx';

import {
	type FontWeightStyleControlProps,
	FontWeightControl,
} from '@aktk/block-components/wp-controls/font-appearance-control';
/**
 * Components
 */
import { DesktopControl, TabletControl, MobileControl } from './wrapper';

const WRAPPER_CLASS = clsx( '!items-end [&>svg]:mb-1.5' );

function IconFontWeightControlBase( props: FontWeightStyleControlProps ) {
	return <FontWeightControl { ...props } />;
}

function DesktopFontWeightControl( props: FontWeightStyleControlProps ) {
	return (
		<DesktopControl className={ WRAPPER_CLASS }>
			<IconFontWeightControlBase { ...props } />
		</DesktopControl>
	);
}

function TabletFontWeightControl( props: FontWeightStyleControlProps ) {
	return (
		<TabletControl className={ WRAPPER_CLASS }>
			<IconFontWeightControlBase { ...props } />
		</TabletControl>
	);
}

function MobileFontWeightControl( props: FontWeightStyleControlProps ) {
	return (
		<MobileControl className={ WRAPPER_CLASS }>
			<IconFontWeightControlBase { ...props } />
		</MobileControl>
	);
}

const IconFontWeightControl = ( props: FontWeightStyleControlProps ) => {
	return <IconFontWeightControlBase { ...props } />;
};

IconFontWeightControl.Desktop = DesktopFontWeightControl;
IconFontWeightControl.Tablet = TabletFontWeightControl;
IconFontWeightControl.Mobile = MobileFontWeightControl;

export { IconFontWeightControl };
