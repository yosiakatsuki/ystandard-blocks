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
import { calcClamp } from '../../util/_calcClamp';

class ResponsiveRangeControl extends Component {
	render() {
		const {
			label,
			useResponsive,
			changeResponsiveMode,
			desktopLabel,
			desktopValue,
			desktopOnChange,
			desktopUnit,
			desktopUnitOnChange,
			desktopControl,
			min,
			max,
			step,
			unitOptions,
			mobileValue,
			mobileOnChange,
			mobileUnit,
			mobileUnitOnChange,
			showDeviceSize,
		} = this.props;

		const showDeviceSizeValue =
			undefined === showDeviceSize ? true : showDeviceSize;

		const toggleUseResponsive = () => {
			changeResponsiveMode( ! useResponsive );
		};

		const customRangeControl = () => {
			return desktopControl ? desktopControl() : undefined;
		};

		const calcSize = {
			mobile: calcClamp( {
				size: 320,
				mobile: mobileValue,
				desktop: desktopValue,
			} ),
			tablet: calcClamp( {
				size: 768,
				mobile: mobileValue,
				desktop: desktopValue,
			} ),
			desktop: calcClamp( {
				size: 1200,
				mobile: mobileValue,
				desktop: desktopValue,
			} ),
		};
		return (
			<BaseControl>
				<div className="ystdb-responsive-range">
					<div className="ystdb-responsive-range__title">
						<span className="components-base-control__label">
							{ label }
						</span>
						<div className="ystdb-responsive-range__toggle">
							<Button
								className={ classnames( {
									'is-use-responsive': useResponsive,
								} ) }
								onClick={ toggleUseResponsive }
							>
								<SVGIcon name={ 'settings' } />
							</Button>
						</div>
					</div>

					<div className="ystdb-responsive-range__content">
						{ ! useResponsive ? (
							<>
								{ undefined !== desktopControl ? (
									customRangeControl()
								) : (
									<div className="ystdb-inspector-controls__columns is-center">
										<span className={ 'label' }>
											{ desktopLabel }
										</span>
										<NumberControl
											value={ desktopValue }
											onChange={ ( value ) => {
												desktopOnChange( value );
											} }
											min={ min }
											max={ max }
											step={
												undefined === step ? 1 : step
											}
											style={ { flexGrow: 1 } }
										/>

										{ !! unitOptions ? (
											<SelectControl
												value={ desktopUnit }
												options={ unitOptions }
												onChange={ ( value ) => {
													desktopUnitOnChange(
														value
													);
												} }
											/>
										) : (
											<span>{ desktopUnit }</span>
										) }
									</div>
								) }
							</>
						) : (
							<Fragment>
								<div className="ystdb-inspector-controls__columns is-center">
									<Icon icon={ 'desktop' } />
									<NumberControl
										value={ desktopValue }
										onChange={ ( value ) => {
											desktopOnChange( value );
										} }
										min={ min }
										max={ max }
										step={ undefined === step ? 1 : step }
										style={ { flexGrow: 1 } }
									/>
									{ !! unitOptions ? (
										<SelectControl
											value={ desktopUnit }
											options={ unitOptions }
											onChange={ ( value ) => {
												desktopUnitOnChange( value );
											} }
										/>
									) : (
										<span>{ desktopUnit }</span>
									) }
								</div>
								<div className="ystdb-inspector-controls__columns is-center">
									<Icon icon={ 'smartphone' } />
									<NumberControl
										value={ mobileValue }
										onChange={ ( value ) => {
											mobileOnChange( value );
										} }
										min={ min }
										max={ max }
										step={ undefined === step ? 1 : step }
										style={ { flexGrow: 1 } }
									/>
									{ !! unitOptions ? (
										<SelectControl
											value={ mobileUnit }
											options={ unitOptions }
											onChange={ ( value ) => {
												mobileUnitOnChange( value );
											} }
										/>
									) : (
										<span>{ mobileUnit }</span>
									) }
								</div>
								{ showDeviceSizeValue && (
									<div className="ystdb-responsive-range__info">
										<div className="ystdb-inspector-controls__columns is-center">
											<div
												className={
													'ystdb-responsive-range__info-label'
												}
											>
												参考値{ ' ' }
											</div>
											<span>
												<SVGIcon
													name={ 'smartphone' }
												/>
												{ calcSize.mobile }
											</span>
											<span>
												<SVGIcon name={ 'tablet' } />
												{ calcSize.tablet }
											</span>
											<span>
												<SVGIcon name={ 'monitor' } />
												{ calcSize.desktop }
											</span>
										</div>
									</div>
								) }
							</Fragment>
						) }
					</div>
				</div>
			</BaseControl>
		);
	}
}

export default ResponsiveRangeControl;
