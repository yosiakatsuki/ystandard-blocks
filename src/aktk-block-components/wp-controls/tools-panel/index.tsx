/**
 * WordPress Dependencies.
 */
import {
	// @ts-expect-error
	__experimentalToolsPanel as WPToolsPanel,
	// @ts-expect-error
	__experimentalToolsPanelItem as WPToolsPanelItem,
} from '@wordpress/components';
import { useViewportMatch } from '@wordpress/compose';
import './style.scss';

type ToolsPanelProps = React.ComponentProps< typeof WPToolsPanel > & {
	icon?: React.ReactNode;
};
type ToolsPanelItemProps = React.ComponentProps< typeof WPToolsPanelItem >;

/**
 * ToolsPanelのドロップダウン表示位置を取得.
 */
function useToolsPanelDropdownMenuProps() {
	const isMobile = useViewportMatch( 'medium', '<' );

	return ! isMobile
		? {
				popoverProps: {
					placement: 'left-start',
					offset: 259,
				},
		  }
		: {};
}

/**
 * ToolsPanel.
 *
 * @param props
 */
export function ToolsPanel( props: ToolsPanelProps ): JSX.Element {
	const dropdownMenuProps = useToolsPanelDropdownMenuProps();
	const { icon, ...panelProps } = props;
	const panel = (
		<WPToolsPanel
			{ ...panelProps }
			dropdownMenuProps={
				panelProps.dropdownMenuProps ?? dropdownMenuProps
			}
		/>
	);

	return icon ? (
		<div className="aktk-component-tools-panel--with-icon">
			<span className="aktk-component-tools-panel__icon">{ icon }</span>
			{ panel }
		</div>
	) : (
		panel
	);
}

/**
 * ToolsPanelItem.
 *
 * @param props
 */
export function ToolsPanelItem( props: ToolsPanelItemProps ): JSX.Element {
	return <WPToolsPanelItem { ...props } />;
}
