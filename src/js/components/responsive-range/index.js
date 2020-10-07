import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import {
	BaseControl,
	Button,
	SelectControl,
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';
import { Fragment, Component } from '@wordpress/element';
import SVGIcon from '../svg-icon';

class ResponsiveRangeControl extends Component {
	render() {
		const {
			label,
			useResponsive,
			changeResponsiveMode,
			normalRangeLabel,
			normalRangeValue,
			normalRangeOnChange,
			normalRangeUnit,
			normalRangeUnitOnChange,
			rangeMin,
			rangeMax,
			rangeStep,
			unitOptions,
			minRangeValue,
			minRangeOnChange,
			minRangeUnit,
			minRangeUnitOnChange,
			preferredValue,
			preferredOnChange,
			preferredMax,
			preferredMin,
			preferredUnit,
			showDeviceSize,
		} = this.props;

		const preferredUnitLabel =
			undefined === preferredUnit ? '' : preferredUnit;
		const showDeviceSizeValue =
			undefined === showDeviceSize ? true : showDeviceSize;

		const toggleUseResponsive = () => {
			changeResponsiveMode(!useResponsive);
		};

		const getDeviceSize = (size) => {
			let deviceSize = (preferredValue / 100) * size;
			if (deviceSize < minRangeValue) {
				deviceSize = minRangeValue;
			}
			if (deviceSize > normalRangeValue) {
				deviceSize = normalRangeValue;
			}
			return parseInt(deviceSize);
		};
		const calcSize = {
			mobile: getDeviceSize(320),
			tablet: getDeviceSize(768),
			desktop: getDeviceSize(1200),
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
							<div className="ystdb-inspector-controls__columns is-center">
								<span className={'label'}>
									{normalRangeLabel}
								</span>
								<NumberControl
									value={normalRangeValue}
									onChange={(value) => {
										normalRangeOnChange(value);
									}}
									min={rangeMin}
									max={rangeMax}
									step={
										undefined === rangeStep ? 1 : rangeStep
									}
									style={{ flexGrow: 1 }}
								/>
								{!!unitOptions ? (
									<SelectControl
										value={normalRangeUnit}
										options={unitOptions}
										onChange={(value) => {
											normalRangeUnitOnChange(value);
										}}
									/>
								) : (
									<span>{normalRangeUnit}</span>
								)}
							</div>
						) : (
							<Fragment>
								<div className="ystdb-inspector-controls__columns is-center">
									<span className={'label'}>
										{__('最大', 'ystandard-blocks')}
									</span>
									<NumberControl
										value={normalRangeValue}
										onChange={(value) => {
											normalRangeOnChange(value);
										}}
										min={rangeMin}
										max={rangeMax}
										step={
											undefined === rangeStep
												? 1
												: rangeStep
										}
										style={{ flexGrow: 1 }}
									/>
									{!!unitOptions ? (
										<SelectControl
											value={normalRangeUnit}
											options={unitOptions}
											onChange={(value) => {
												normalRangeUnitOnChange(value);
											}}
										/>
									) : (
										<span>{normalRangeUnit}</span>
									)}
								</div>
								<div className="ystdb-inspector-controls__columns is-center">
									<span className={'label'}>
										{__('最小', 'ystandard-blocks')}
									</span>
									<NumberControl
										value={minRangeValue}
										onChange={(value) => {
											minRangeOnChange(value);
										}}
										min={rangeMin}
										max={rangeMax}
										step={
											undefined === rangeStep
												? 1
												: rangeStep
										}
										style={{ flexGrow: 1 }}
									/>
									{!!unitOptions ? (
										<SelectControl
											value={minRangeUnit}
											options={unitOptions}
											onChange={(value) => {
												minRangeUnitOnChange(value);
											}}
										/>
									) : (
										<span>{minRangeUnit}</span>
									)}
								</div>
								<div className="ystdb-inspector-controls__columns is-center">
									<span className={'label'}>
										{__('増加率', 'ystandard-blocks')}
									</span>
									<NumberControl
										value={preferredValue}
										onChange={(value) => {
											preferredOnChange(value);
										}}
										min={preferredMin}
										max={preferredMax}
										step={'0.1'}
										style={{ flexGrow: 1 }}
									/>
									<span>{preferredUnitLabel}</span>
								</div>
								{showDeviceSizeValue && (
									<div className="ystdb-responsive-range__info">
										<div className="ystdb-inspector-controls__columns is-center">
											<div
												className={
													'ystdb-responsive-range__info-label'
												}
											>
												参考値{' '}
											</div>
											<span>
												<SVGIcon name={'smartphone'} />
												{calcSize.mobile}
											</span>
											<span>
												<SVGIcon name={'tablet'} />
												{calcSize.tablet}
											</span>
											<span>
												<SVGIcon name={'monitor'} />
												{calcSize.desktop}
											</span>
										</div>
									</div>
								)}
							</Fragment>
						)}
					</div>
				</div>
			</BaseControl>
		);
	}
}

export default ResponsiveRangeControl;
