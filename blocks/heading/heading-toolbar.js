import { range } from 'lodash';
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { Toolbar, Path, SVG } from '@wordpress/components';
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

		return (
			<Toolbar
				isCollapsed={isCollapsed}
				icon={this.getIcon(selectedLevel)}
				controls={range(minLevel, maxLevel).map((index) =>
					this.createLevelControl(index, selectedLevel, onChange)
				)}
			/>
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
