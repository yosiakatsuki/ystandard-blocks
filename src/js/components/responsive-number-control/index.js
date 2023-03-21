import classnames from 'classnames';
import {
	BaseControl,
	Button,
	SelectControl,
	Icon,
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';
import { Fragment, Component } from '@wordpress/element';
import SVGIcon from '../svg-icon';
import getNum from '../../util/_getNum';

class ResponsiveNumberControl extends Component {
	getUnit(unit) {
		const DEFAULT_UNIT = 'px';

		return undefined === unit ? DEFAULT_UNIT : unit;
	}

	render() {
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
		} = this.props;

		// 単位によって変えるかもしれない.
		const controlMin = undefined === min ? 0 : min;
		const controlMax = undefined === max ? 200 : max;
		const controlStep = undefined === step ? 1 : step;

		const toggleUseResponsive = () => {
			changeResponsiveMode(!useResponsive);
		};

		return (
			<BaseControl>
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
								<SVGIcon name={'settings'} />
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
											const newValue = getNum(
												value,
												controlMin,
												controlMax,
												null
											);
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
										<span>{this.getUnit(desktopUnit)}</span>
									)}
								</div>
							</>
						) : (
							<Fragment>
								<div className="ystdb-inspector-controls__columns is-center">
									<Icon icon={'desktop'} />
									<NumberControl
										value={desktopValue}
										onChange={(value) => {
											const newValue = getNum(
												value,
												controlMin,
												controlMax,
												null
											);
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
										<span>{this.getUnit(desktopUnit)}</span>
									)}
								</div>
								<div className="ystdb-inspector-controls__columns is-center">
									<Icon icon={'tablet'} />
									<NumberControl
										value={tabletValue}
										onChange={(value) => {
											const newValue = getNum(
												value,
												controlMin,
												controlMax,
												null
											);
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
										<span>{this.getUnit(tabletUnit)}</span>
									)}
								</div>
								<div className="ystdb-inspector-controls__columns is-center">
									<Icon icon={'smartphone'} />
									<NumberControl
										value={mobileValue}
										onChange={(value) => {
											const newValue = getNum(
												value,
												controlMin,
												controlMax,
												null
											);
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
										<span>{this.getUnit(mobileUnit)}</span>
									)}
								</div>
							</Fragment>
						)}
					</div>
				</div>
			</BaseControl>
		);
	}
}

export default ResponsiveNumberControl;
