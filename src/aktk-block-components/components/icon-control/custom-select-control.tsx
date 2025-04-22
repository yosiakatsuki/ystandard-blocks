/**
 * Components
 */
import { DesktopControl, TabletControl, MobileControl } from './wrapper';
import CustomSelectControl from '@aktk/block-components/wp-controls/custom-select-control';

interface IconSelectControlProps {
	onChange: ( value: string ) => void;
	value: string;
	label?: string;
	options: { name: string; key: string }[];
	emptyLabel?: string;
}

function CustomSelectBase( props: IconSelectControlProps ) {
	const { onChange, value, label, options, emptyLabel = '----' } = props;
	return (
		<CustomSelectControl
			label={ label }
			value={ value }
			options={ options }
			emptyLabel={ emptyLabel }
			onChange={ ( newValue ) => {
				onChange( newValue );
			} }
		/>
	);
}

function DesktopIconSelectControl( props: IconSelectControlProps ) {
	return (
		<DesktopControl>
			<CustomSelectBase { ...props } />
		</DesktopControl>
	);
}

function TabletIconSelectControl( props: IconSelectControlProps ) {
	return (
		<TabletControl>
			<CustomSelectBase { ...props } />
		</TabletControl>
	);
}

function MobileIconSelectControl( props: IconSelectControlProps ) {
	return (
		<MobileControl>
			<CustomSelectBase { ...props } />
		</MobileControl>
	);
}

const IconSelectControl = ( props: IconSelectControlProps ) => {
	return <CustomSelectBase { ...props } />;
};

IconSelectControl.Desktop = DesktopIconSelectControl;
IconSelectControl.Tablet = TabletIconSelectControl;
IconSelectControl.Mobile = MobileIconSelectControl;

export { IconSelectControl };
