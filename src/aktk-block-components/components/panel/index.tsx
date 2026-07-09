/**
 * WordPress
 */
import { PanelBody } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';

interface PanelProps {
	title: string;
	initialOpen?: boolean;
	initialOpenControlled?: ( () => boolean ) | boolean;
	children: React.ReactNode;
	className?: string;
}

// @ts-ignore.
export function Panel( props: PanelProps ): JSX.Element {
	const {
		title,
		initialOpen = true,
		initialOpenControlled = false,
		children,
		className,
	} = props;
	const [ panelOpen, setPanelOpen ] = useState( initialOpen );

	// 動的に開閉状態を制御する場合の初期値設定.
	const setInitialOpen = () => {
		if ( 'function' === typeof initialOpenControlled ) {
			setPanelOpen( initialOpenControlled() );
		}
	};

	useEffect( () => {
		setInitialOpen();
	}, [] );

	useEffect( () => {
		setInitialOpen();
	}, [ initialOpenControlled ] );

	const togglePanel = () => {
		setPanelOpen( ! panelOpen );
	};

	return (
		// @ts-ignore.
		<PanelBody
			title={ title }
			initialOpen={ panelOpen }
			onToggle={ togglePanel }
			className={ className }
		>
			{ children }
		</PanelBody>
	);
}

export function OpenPanel( props: PanelProps ): JSX.Element {
	const { title, initialOpen, children } = props;
	return (
		<Panel title={ title } initialOpen={ initialOpen ?? true }>
			{ children }
		</Panel>
	);
}
