import classnames from 'classnames';
import {
	BaseControl,
	Button,
	SelectControl,
	Icon,
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';
import { FontSizePicker } from '@wordpress/block-editor';
import { Fragment, Component } from '@wordpress/element';
import SVGIcon from '../svg-icon';

/**
 * @deprecated
 */
class ResponsiveFontSizeControl extends Component {
	render() {
		const {
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
		} = this.props;

		// 単位によって変えるかもしれない.
		const min = 0;
		const max = 200;
		const step = 1;

		const toggleUseResponsive = () => {
			changeResponsiveMode( ! useResponsive );
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
								<FontSizePicker
									label={ label }
									value={ fontSize.size }
									onChange={ ( font ) => {
										onChangeFontSizePicker( font );
									} }
									__nextHasNoMarginBottom
								/>
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
									<Icon icon={ 'tablet' } />
									<NumberControl
										value={ tabletValue }
										onChange={ ( value ) => {
											tabletOnChange( value );
										} }
										min={ min }
										max={ max }
										step={ undefined === step ? 1 : step }
										style={ { flexGrow: 1 } }
									/>
									{ !! unitOptions ? (
										<SelectControl
											value={ tabletUnit }
											options={ unitOptions }
											onChange={ ( value ) => {
												tabletUnitOnChange( value );
											} }
										/>
									) : (
										<span>{ tabletUnit }</span>
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
							</Fragment>
						) }
					</div>
				</div>
			</BaseControl>
		);
	}
}

export default ResponsiveFontSizeControl;
