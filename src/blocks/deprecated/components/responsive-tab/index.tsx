import classnames from 'classnames';
import { Monitor, Tablet, Smartphone } from 'react-feather';
import { TabPanel } from '@wordpress/components';
import './_edit.scss';

/**
 * @deprecated 置き換え予定
 */
export const tabType = {
	desktop: 'desktop',
	tablet: 'tablet',
	mobile: 'mobile',
};

/**
 * @param      root0
 * @param      root0.label
 * @param      root0.activeClass
 * @param      root0.onSelect
 * @param      root0.children
 * @deprecated 置き換え予定
 */
// @ts-ignore
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
						// @ts-ignore
						title: <Monitor />,
						className: classnames(
							'ystd-responsive-tab__tab-button'
						),
					},
					{
						name: tabType.tablet,
						// @ts-ignore
						title: <Tablet />,
						className: classnames(
							'ystd-responsive-tab__tab-button'
						),
					},
					{
						name: tabType.mobile,
						// @ts-ignore
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
