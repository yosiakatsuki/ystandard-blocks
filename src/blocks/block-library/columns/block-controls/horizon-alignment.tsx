import { ToolbarGroup, ToolbarItem, DropdownMenu } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
	justifyLeft,
	justifyCenter,
	justifyRight,
	justifySpaceBetween,
} from '@wordpress/icons';

// @ts-ignore
const HorizonAlignment = ({ attributes, setAttributes }) => {
	const CONTROLS = [
		{
			name: 'left',
			title: __('左揃え', 'ystandard-blocks'),
			icon: justifyLeft,
			default: true,
		},
		{
			name: 'center',
			title: __('中央揃え', 'ystandard-blocks'),
			icon: justifyCenter,
		},
		{
			name: 'right',
			title: __('右揃え', 'ystandard-blocks'),
			icon: justifyRight,
		},
		{
			name: 'between',
			title: __('両端に揃える', 'ystandard-blocks'),
			icon: justifySpaceBetween,
		},
	];
	const { horizonAlignment } = attributes;
	const selected = CONTROLS.filter((item) => {
		return horizonAlignment === item.name;
	});
	const defaultControl = CONTROLS.filter((item) => true === item.default)[0];
	return (
		<ToolbarGroup>
			<ToolbarItem>
				{(toolbarItemHTMLProps) => (
					<DropdownMenu
						toggleProps={toolbarItemHTMLProps}
						isCollapsed={true}
						icon={
							selected.length > 0
								? selected[0].icon
								: defaultControl.icon
						}
						label={__('横位置', 'ystandard-blocks')}
						controls={CONTROLS.map((control) => {
							return {
								...CONTROLS.filter((item) => {
									return control.name === item.name;
								})[0],
								isActive: horizonAlignment === control.name,
								onClick: () =>
									setAttributes({
										horizonAlignment:
											horizonAlignment === control.name
												? undefined
												: control.name,
									}),
							};
						})}
					/>
				)}
			</ToolbarItem>
		</ToolbarGroup>
	);
};

export default HorizonAlignment;
