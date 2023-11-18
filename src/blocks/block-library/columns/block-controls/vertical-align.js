import { ToolbarGroup, ToolbarItem, DropdownMenu } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
	AlignTop,
	AlignCenter,
	AlignBottom,
	AlignLastBlockBottom,
} from '@aktk/components/icons';

const VerticalAlign = ({ attributes, setAttributes }) => {
	const CONTROLS = [
		{
			name: 'top',
			title: __('上揃え', 'ystandard-blocks'),
			icon: AlignTop,
			default: true,
		},
		{
			name: 'center',
			title: __('中央揃え', 'ystandard-blocks'),
			icon: AlignCenter,
		},
		{
			name: 'bottom',
			title: __('下揃え', 'ystandard-blocks'),
			icon: AlignBottom,
		},
		{
			name: 'last',
			title: __('最後のブロックを下に揃える', 'ystandard-blocks'),
			icon: AlignLastBlockBottom,
		},
	];
	const { verticalAlignment } = attributes;
	const selected = CONTROLS.filter((item) => {
		return verticalAlignment === item.name;
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
						label={__('縦揃え位置の変更', 'ystandard-blocks')}
						controls={CONTROLS.map((control) => {
							return {
								...CONTROLS.filter((item) => {
									return control.name === item.name;
								})[0],
								isActive: verticalAlignment === control.name,
								onClick: () =>
									setAttributes({
										verticalAlignment:
											verticalAlignment === control.name
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

export default VerticalAlign;
