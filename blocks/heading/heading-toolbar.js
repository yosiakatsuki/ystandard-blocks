import { range } from 'lodash';
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import {
	Path,
	SVG,
	ToolbarGroup,
	ToolbarItem,
	ToolbarButton,
	DropdownMenu,
} from '@wordpress/components';
import { paths } from './config';

class HeadingToolbar extends Component {
	createLevelControl(targetLevel, selectedLevel, onChange) {
		const isActive = targetLevel === selectedLevel;
		return {
			icon: this.getIcon(targetLevel, isActive),
			title: `${__('Heading')} ${targetLevel}`,
			isActive,
			onClick: () => onChange(targetLevel),
		};
	}

	render() {
		const {
			isCollapsed = true,
			minLevel,
			maxLevel,
			selectedLevel,
			onChange,
		} = this.props;

		const dropdownMenu = () => {
			return (
				<ToolbarItem>
					{(toolbarItemHTMLProps) => (
						<DropdownMenu
							toggleProps={toolbarItemHTMLProps}
							isCollapsed={isCollapsed}
							icon={this.getIcon(selectedLevel)}
							label={__('見出しレベル', 'ystandard-blocks')}
							controls={range(minLevel, maxLevel).map((index) =>
								this.createLevelControl(
									index,
									selectedLevel,
									onChange
								)
							)}
						/>
					)}
				</ToolbarItem>
			);
		};

		const buttons = () => {
			return range(minLevel, maxLevel).map((index) => {
				return (
					<ToolbarButton
						key={index}
						{...this.createLevelControl(
							index,
							selectedLevel,
							onChange
						)}
					/>
				);
			});
		};

		return (
			<ToolbarGroup>
				{isCollapsed ? dropdownMenu() : buttons()}
			</ToolbarGroup>
		);
	}

	getIcon(level = 2, isPressed = false) {
		if (!paths.hasOwnProperty(level)) {
			return null;
		}
		return (
			<SVG
				width="20"
				height="20"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				isPressed={isPressed}
			>
				<Path d={paths[level]} />
			</SVG>
		);
	}
}

export default HeadingToolbar;
