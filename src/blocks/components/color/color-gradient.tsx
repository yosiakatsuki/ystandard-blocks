/**
 * External dependencies
 */
import classnames from 'classnames';
/**
 * WordPress dependencies.
 */
import {
	Button,
	ColorIndicator,
	Dropdown,
	FlexItem,
	__experimentalDropdownContentWrapper as DropdownContentWrapper,
	__experimentalHStack as HStack,
} from '@wordpress/components';
import {
	// @ts-expect-error
	__experimentalColorGradientControl as ColorGradientControl,
	// @ts-expect-error
	__experimentalUseGradient,
	// @ts-expect-error
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients,
} from '@wordpress/block-editor';

type Color = {
	color: string;
};

interface ColorGradientSettingsDropdownProps {
	clearable?: boolean;
	colorValue: Color;
	onChange: (color: Color) => void;
	label: string;
	disableGradient?: boolean;
}

const LabeledColorIndicator = ({
	colorValue,
	label,
}: {
	colorValue: string;
	label: string;
}) => (
	<HStack justify="flex-start">
		<ColorIndicator
			className="block-editor-panel-color-gradient-settings__color-indicator"
			colorValue={colorValue}
		/>
		<FlexItem
			className="block-editor-panel-color-gradient-settings__color-name"
			title={label}
		>
			{label}
		</FlexItem>
	</HStack>
);

const renderToggle =
	// @ts-expect-error


		(settings) =>
		// @ts-expect-error
		({ onToggle, isOpen }) => {
			const { colorValue, label } = settings;

			const toggleProps = {
				onClick: onToggle,
				className: classnames(
					'block-editor-panel-color-gradient-settings__dropdown',
					'border border-gray-300 border-solid',
					{ 'is-open': isOpen }
				),
				'aria-expanded': isOpen,
			};

			return (
				<Button {...toggleProps}>
					<LabeledColorIndicator
						colorValue={colorValue}
						label={label}
					/>
				</Button>
			);
		};

export function ColorGradientSettingsDropdown(
	props: ColorGradientSettingsDropdownProps
) {
	let popoverProps;
	popoverProps = {
		placement: 'left-start',
		offset: 36,
		shift: true,
	};
	const { colorValue, label, onChange, disableGradient = false } = props;
	const colorGradientSettings = useMultipleOriginColorsAndGradients();
	const { gradientValue, setGradient } = __experimentalUseGradient();
	const controlProps = {
		clearable: false,
		colorValue: colorValue,
		gradientValue: gradientValue,
		label: label,
		onColorChange: onChange,
		onGradientChange: !disableGradient ? setGradient : undefined,
		showTitle: false,
		...colorGradientSettings,
	};
	const toggleSettings = {
		colorValue: gradientValue ?? colorValue,
		label: label,
	};

	return (
		<>
			{colorGradientSettings.hasColorsOrGradients && (
				<Dropdown
					// @ts-expect-error
					popoverProps={popoverProps}
					className="block-editor-tools-panel-color-gradient-settings__dropdown"
					renderToggle={renderToggle(toggleSettings)}
					renderContent={() => (
						<DropdownContentWrapper paddingSize="none">
							<div className="block-editor-panel-color-gradient-settings__dropdown-content">
								<ColorGradientControl {...controlProps} />
							</div>
						</DropdownContentWrapper>
					)}
				/>
			)}
		</>
	);
}
