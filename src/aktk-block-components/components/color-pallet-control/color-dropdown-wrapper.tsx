import classnames from 'classnames/dedupe';
/**
 * WordPress dependencies
 */
import {
	Button,
	ColorIndicator,
	Dropdown,
	FlexItem,
	__experimentalDropdownContentWrapper as DropdownContentWrapper,
	__experimentalHStack as HStack,
} from '@wordpress/components';

//@ts-ignore
const LabeledColorIndicator = ( { colorValue, label } ) => (
	<HStack justify="flex-start">
		<ColorIndicator
			className="block-editor-panel-color-gradient-settings__color-indicator"
			colorValue={ colorValue }
		/>
		<FlexItem
			className="block-editor-panel-color-gradient-settings__color-name"
			title={ label }
		>
			{ label }
		</FlexItem>
	</HStack>
);

const renderToggle =
	//@ts-ignore


		( settings ) =>
		//@ts-ignore
		( { onToggle, isOpen } ) => {
			const { colorValue, label } = settings;

			const toggleProps = {
				onClick: onToggle,
				className: classnames(
					'block-editor-panel-color-gradient-settings__dropdown',
					'border border-solid border-gray-300',
					{ 'is-open': isOpen }
				),
				'aria-expanded': isOpen,
			};

			return (
				<Button { ...toggleProps }>
					<LabeledColorIndicator
						colorValue={ colorValue }
						label={ label }
					/>
				</Button>
			);
		};

export default function ColorDropdownWrapper( {
	colorValue,
	label,
	children,
}: {
	colorValue: string;
	label: string;
	children: React.ReactNode;
} ) {
	const popoverProps = {
		placement: 'bottom-start',
		offset: 16,
		shift: true,
	};

	return (
		<Dropdown
			popoverProps={ popoverProps }
			className="block-editor-tools-panel-color-gradient-settings__dropdown"
			renderToggle={ renderToggle( { colorValue, label } ) }
			renderContent={ () => (
				<DropdownContentWrapper paddingSize="none">
					<div className="block-editor-panel-color-gradient-settings__dropdown-content">
						{ children }
					</div>
				</DropdownContentWrapper>
			) }
		/>
	);
}
