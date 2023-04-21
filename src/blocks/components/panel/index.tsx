/**
 * WordPress
 */
import { PanelBody } from '@wordpress/components';
import { useMemo } from '@wordpress/element';

interface PanelProps {
	title: string;
	initialOpen: (() => boolean) | boolean;
	children: React.ReactNode;
}

export default function Panel({ title, initialOpen, children }: PanelProps) {
	const _initialOpen = useMemo(() => {
		if ('function' === typeof initialOpen) {
			return initialOpen();
		}
		return initialOpen;
	}, []);
	return (
		<PanelBody title={title} initialOpen={_initialOpen}>
			{children}
		</PanelBody>
	);
}
