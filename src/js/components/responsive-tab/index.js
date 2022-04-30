import classnames from 'classnames';
import { Monitor, Tablet, Smartphone } from 'react-feather';
import { TabPanel } from '@wordpress/components';

export const tabType = {
	desktop: 'desktop',
	tablet: 'tablet',
	mobile: 'mobile',
};

const ResponsiveTab = ( { label, activeClass, onSelect, children } ) => {
	return (
		<div className="ystd-responsive-tab">
			{ !! label && (
				<div className={ classnames( 'ystd-responsive-tab__label' ) }>
					{ label }
				</div>
			) }
			<TabPanel
				className={ classnames( 'ystd-responsive-tab__panel', {
					'has-label': !! label,
				} ) }
				activeClass={ activeClass }
				onSelect={ onSelect }
				tabs={ [
					{
						name: tabType.desktop,
						title: <Monitor />,
						className: classnames(
							'ystd-responsive-tab__tab-button'
						),
					},
					{
						name: tabType.tablet,
						title: <Tablet />,
						className: classnames(
							'ystd-responsive-tab__tab-button'
						),
					},
					{
						name: tabType.mobile,
						title: <Smartphone />,
						className: classnames(
							'ystd-responsive-tab__tab-button'
						),
					},
				] }
			>
				{ children }
			</TabPanel>
		</div>
	);
};

export default ResponsiveTab;
