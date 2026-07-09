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

type ToolsPanelProps = React.ComponentProps< typeof WPToolsPanel >;
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

	return (
		<WPToolsPanel
			{ ...props }
			dropdownMenuProps={ props.dropdownMenuProps ?? dropdownMenuProps }
		/>
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
