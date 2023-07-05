import classnames from 'classnames';
/**
 * WordPress dependencies.
 */
import {
	BaseControl,
	Button,
	SelectControl,
	Icon,
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';
import { FontSizePicker } from '@wordpress/block-editor';
/**
 * Plugin dependencies.
 */
import { SvgIcon } from '@aktk/blocks/components/svg-icon';

/**
 * Component.
 */
export * from './functions';

interface ResponsiveFontSizeControlProps {
	id?: string;
	label: string;
	useResponsive: boolean;
	changeResponsiveMode: (value: boolean) => void;
	fontSize: object;
	onChangeFontSizePicker: (value: object) => void;
	unitOptions: object[];
	desktopValue: number;
	desktopOnChange: (value: number) => void;
	desktopUnit: string;
	desktopUnitOnChange: (value: string) => void;
	tabletValue: number;
	tabletOnChange: (value: number) => void;
	tabletUnit: string;
	tabletUnitOnChange: (value: string) => void;
	mobileValue: number;
	mobileOnChange: (value: number) => void;
	mobileUnit: string;
	mobileUnitOnChange: (value: string) => void;
}

/**
 * @param props
 * @deprecated
 */
export default function ResponsiveDeprecatedFontSizeControl(
	props: ResponsiveFontSizeControlProps
) {
	const {
		id,
		label,
		useResponsive,
		changeResponsiveMode,
		fontSize,
		onChangeFontSizePicker,
		unitOptions,
		desktopValue,
		desktopOnChange,
		desktopUnit,
		desktopUnitOnChange,
		tabletValue,
		tabletOnChange,
		tabletUnit,
		tabletUnitOnChange,
		mobileValue,
		mobileOnChange,
		mobileUnit,
		mobileUnitOnChange,
	} = props;

	// 単位によって変えるかもしれない.
	const min = 0;
	const max = 200;
	const step = 1;

	const toggleUseResponsive = () => {
		changeResponsiveMode(!useResponsive);
	};

	return (
		<BaseControl id={id}>
			<div className="ystdb-responsive-range">
				<div className="ystdb-responsive-range__title">
					<span className="components-base-control__label">
						{label}
					</span>
					<div className="ystdb-responsive-range__toggle">
						<Button
							className={classnames({
								'is-use-responsive': useResponsive,
							})}
							onClick={toggleUseResponsive}
						>
							<SvgIcon name={'settings'} />
						</Button>
					</div>
				</div>

				<div className="ystdb-responsive-range__content">
					{!useResponsive ? (
						<>
							<FontSizePicker
								label={label}
								// @ts-ignore
								value={fontSize.size}
								// @ts-ignore
								onChange={(font) => {
									onChangeFontSizePicker(font);
								}}
							/>
						</>
					) : (
						<>
							<div className="ystdb-inspector-controls__columns is-center">
								<Icon icon={'desktop'} />
								<NumberControl
									value={desktopValue}
									onChange={(value) => {
										// @ts-ignore
										desktopOnChange(value);
									}}
									min={min}
									max={max}
									step={!step ? 1 : step}
									style={{ flexGrow: 1 }}
								/>
								{!!unitOptions ? (
									<SelectControl
										value={desktopUnit}
										// @ts-ignore
										options={unitOptions}
										onChange={(value) => {
											desktopUnitOnChange(value);
										}}
									/>
								) : (
									<span>{desktopUnit}</span>
								)}
							</div>
							<div className="ystdb-inspector-controls__columns is-center">
								<Icon icon={'tablet'} />
								<NumberControl
									value={tabletValue}
									onChange={(value) => {
										// @ts-ignore
										tabletOnChange(value);
									}}
									min={min}
									max={max}
									step={!step ? 1 : step}
									style={{ flexGrow: 1 }}
								/>
								{!!unitOptions ? (
									<SelectControl
										value={tabletUnit}
										// @ts-ignore
										options={unitOptions}
										onChange={(value) => {
											tabletUnitOnChange(value);
										}}
									/>
								) : (
									<span>{tabletUnit}</span>
								)}
							</div>
							<div className="ystdb-inspector-controls__columns is-center">
								<Icon icon={'smartphone'} />
								<NumberControl
									value={mobileValue}
									onChange={(value) => {
										// @ts-ignore
										mobileOnChange(value);
									}}
									min={min}
									max={max}
									step={!step ? 1 : step}
									style={{ flexGrow: 1 }}
								/>
								{!!unitOptions ? (
									<SelectControl
										value={mobileUnit}
										// @ts-ignore
										options={unitOptions}
										onChange={(value) => {
											mobileUnitOnChange(value);
										}}
									/>
								) : (
									<span>{mobileUnit}</span>
								)}
							</div>
						</>
					)}
				</div>
			</div>
		</BaseControl>
	);
}
