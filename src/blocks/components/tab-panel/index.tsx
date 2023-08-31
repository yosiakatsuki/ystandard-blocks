import classnames from 'classnames';
import { TabPanel as WPTabPanel } from '@wordpress/components';

export interface Tab {
	name: string;
	title: string;
	value: string;
}

export interface TabPanelProps {
	className?: string;
	tabs: Tab[];
	initialTabName?: string;
	children: (tab: Tab) => React.ReactNode;
}

import './tab-panel.scss';

export function TabPanel(props: TabPanelProps) {
	const { tabs, initialTabName, children, className } = props;
	const tabPanelClassess = classnames('ystdb-tab-panel', className);

	return (
		<WPTabPanel
			className={tabPanelClassess}
			tabs={tabs}
			initialTabName={initialTabName}
		>
			{(tab) => children(tab as unknown as Tab)}
		</WPTabPanel>
	);
}
