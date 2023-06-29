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
/**
 * Plugin dependencies.
 */
import { SvgIcon } from '@aktk/blocks/components/svg-icon';
import { toNumber } from '@aktk/blocks/utils/number';

export * from './functions';

function getUnit(unit: string) {
	const DEFAULT_UNIT = 'px';

	return undefined === unit ? DEFAULT_UNIT : unit;
}

/**
 * @deprecated
 */
// @ts-ignore
export default function ResponsiveDeprecatedNumberControl(props) {
	const {
		label,
		useResponsive,
		changeResponsiveMode,
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
		min,
		max,
		step,
	} = props;

	// 単位によって変えるかもしれない.
	const controlMin = undefined === min ? 0 : min;
	const controlMax = undefined === max ? 200 : max;
	const controlStep = undefined === step ? 1 : step;

	const toggleUseResponsive = () => {
		changeResponsiveMode(!useResponsive);
	};

	return (
		<BaseControl id={'ResponsiveDeprecatedNumberControl'}>
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
							<div className="ystdb-inspector-controls__columns is-center">
								<NumberControl
									value={desktopValue}
									onChange={(value) => {
										// @ts-ignore
										const newValue = toNumber(value, {
											min: controlMin,
											max: controlMax,
										});
										desktopOnChange(newValue);
									}}
									min={controlMin}
									max={controlMax}
									step={
										undefined === controlStep
											? 1
											: controlStep
									}
									style={{ flexGrow: 1 }}
								/>
								{!!unitOptions ? (
									<SelectControl
										value={desktopUnit}
										options={unitOptions}
										onChange={(value) => {
											desktopUnitOnChange(value);
										}}
									/>
								) : (
									<span>{getUnit(desktopUnit)}</span>
								)}
							</div>
						</>
					) : (
						<>
							<div className="ystdb-inspector-controls__columns is-center">
								<Icon icon={'desktop'} />
								<NumberControl
									value={desktopValue}
									onChange={(value) => {
										// @ts-ignore
										const newValue = toNumber(value, {
											min: controlMin,
											max: controlMax,
										});
										desktopOnChange(newValue);
									}}
									min={controlMin}
									max={controlMax}
									step={
										undefined === controlStep
											? 1
											: controlStep
									}
									style={{ flexGrow: 1 }}
								/>
								{!!unitOptions ? (
									<SelectControl
										value={desktopUnit}
										options={unitOptions}
										onChange={(value) => {
											desktopUnitOnChange(value);
										}}
									/>
								) : (
									<span>{getUnit(desktopUnit)}</span>
								)}
							</div>
							<div className="ystdb-inspector-controls__columns is-center">
								<Icon icon={'tablet'} />
								<NumberControl
									value={tabletValue}
									onChange={(value) => {
										// @ts-ignore
										const newValue = toNumber(value, {
											min: controlMin,
											max: controlMax,
										});
										tabletOnChange(newValue);
									}}
									min={controlMin}
									max={controlMax}
									step={
										undefined === controlStep
											? 1
											: controlStep
									}
									style={{ flexGrow: 1 }}
								/>
								{!!unitOptions ? (
									<SelectControl
										value={tabletUnit}
										options={unitOptions}
										onChange={(value) => {
											tabletUnitOnChange(value);
										}}
									/>
								) : (
									<span>{getUnit(tabletUnit)}</span>
								)}
							</div>
							<div className="ystdb-inspector-controls__columns is-center">
								<Icon icon={'smartphone'} />
								<NumberControl
									value={mobileValue}
									onChange={(value) => {
										// @ts-ignore
										const newValue = toNumber(value, {
											min: controlMin,
											max: controlMax,
										});
										mobileOnChange(newValue);
									}}
									min={controlMin}
									max={controlMax}
									step={
										undefined === controlStep
											? 1
											: controlStep
									}
									style={{ flexGrow: 1 }}
								/>
								{!!unitOptions ? (
									<SelectControl
										value={mobileUnit}
										options={unitOptions}
										onChange={(value) => {
											mobileUnitOnChange(value);
										}}
									/>
								) : (
									<span>{getUnit(mobileUnit)}</span>
								)}
							</div>
						</>
					)}
				</div>
			</div>
		</BaseControl>
	);
}
