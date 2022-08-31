import classnames from 'classnames';
import {
	ColorIndicator,
	Dropdown,
	FlexItem,
	__experimentalHStack as HStack,
	__experimentalItem as Item,
	__experimentalItemGroup as ItemGroup,
} from '@wordpress/components';

const ColorDropdown = ( {
	key,
	value,
	label,
	position = 'bottom left',
	renderContent,
} ) => {
	const _buttonLabel = label ?? '色';

	return (
		<ItemGroup
			isBordered
			isSeparated
			className="block-editor-panel-color-gradient-settings__item-group"
		>
			<Dropdown
				key={ key }
				position={ position }
				className="block-editor-panel-color-gradient-settings__dropdown"
				contentClassName="block-editor-panel-color-gradient-settings__dropdown-content"
				style={ { display: 'block' } }
				renderToggle={ ( { isOpen, onToggle } ) => (
					<Item
						onClick={ onToggle }
						className={ classnames(
							'block-editor-panel-color-gradient-settings__item',
							{ 'is-open': isOpen }
						) }
					>
						<HStack justify="flex-start">
							<ColorIndicator
								className="block-editor-panel-color-gradient-settings__color-indicator"
								colorValue={ value }
							/>
							<FlexItem>{ _buttonLabel }</FlexItem>
						</HStack>
					</Item>
				) }
				renderContent={ renderContent }
			/>
		</ItemGroup>
	);
};
export default ColorDropdown;
