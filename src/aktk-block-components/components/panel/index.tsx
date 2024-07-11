/**
 * WordPress
 */
import { PanelBody } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';

interface PanelProps {
	title: string;
	initialOpen?: ( () => boolean ) | boolean;
	children: React.ReactNode;
}

export function Panel( props: PanelProps ) {
	const { title, initialOpen, children } = props;
	const [ panelOpen, setPanelOpen ] = useState( false );

	const setInitialOpen = () => {
		if ( 'function' === typeof initialOpen ) {
			setPanelOpen( initialOpen() );
		}
		setPanelOpen( initialOpen ?? false );
	};

	useEffect( () => {
		setInitialOpen();
	}, [] );

	useEffect( () => {
		setInitialOpen();
	}, [ initialOpen ] );

	const togglePanel = () => {
		setPanelOpen( ! panelOpen );
	};

	return (
		<PanelBody
			title={ title }
			initialOpen={ panelOpen }
			onToggle={ togglePanel }
		>
			{ children }
		</PanelBody>
	);
}

export function OpenPanel( props: PanelProps ) {
	const { title, initialOpen, children } = props;
	return (
		<Panel title={ title } initialOpen={ initialOpen ?? true }>
			{ children }
		</Panel>
	);
}
