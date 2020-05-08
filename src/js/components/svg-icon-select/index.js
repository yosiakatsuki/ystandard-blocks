import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import feather from 'feather-icons';
import simpleIcons from 'simple-icons';
import icons from './icons.json';

import { __ } from '@wordpress/i18n';
import { RadioControl, BaseControl } from '@wordpress/components';

import { Component } from '@wordpress/element';
import classnames from 'classnames';

export const getSVGIconTag = ( name ) => {
	if ( ! name ) {
		return '';
	}
	let svg = '';
	const isSNSIcon = -1 !== name.indexOf( 'sns-' );

	if ( isSNSIcon ) {
		const snsIcon = simpleIcons.get(
			name.replace( 'sns-', '' )
		);
		svg = snsIcon.svg;
	} else {
		if ( ! feather.icons[ name ] ) {
			return '';
		}
		svg = feather.icons[ name ].toSvg();
	}

	return svg;
};

class SVGIconSelect extends Component {
	render() {
		const {
			iconControlTitle,
			iconPosition,
			onChangePosition,
			selectedIcon,
			onClickIcon,
			customInfo,
			customInfoStyle,
		} = this.props;

		const iconBaseControlTitle =
			iconControlTitle === undefined
				? __( '表示アイコン', 'ystandard-blocks' )
				: iconControlTitle;
		const pickerProps = {
			icons,
			theme: 'bluegrey',
			renderUsing: 'class',
			value: selectedIcon,
			onChange: ( value ) => {
				onClickIcon( value );
			},
			renderFunc: ( name ) => {
				return (
					<div
						className={ classnames( {
							'sns-icon': ( -1 !== name.indexOf( 'sns-' ) ),
						} ) }
						dangerouslySetInnerHTML={ {
							__html: getSVGIconTag( name ),
						} }
					/>
				);
			},
			isMulti: false,
		};

		return (
			<div className={ 'ystdb-icon-select' }>
				{ customInfo && (
					<div style={ customInfoStyle }>{ customInfo }</div>
				) }
				{ !! onChangePosition && (
					<BaseControl>
						<div className="ystdb-inspector-controls__label">
							{ __( 'アイコン表示位置', 'ystandard-blocks' ) }
						</div>
						<div className={ 'ystdb-icon-select__position' }>
							<RadioControl
								selected={ iconPosition }
								options={ [
									{
										label: __( '左', 'ystandard-blocks' ),
										value: 'left',
									},
									{
										label: __( '右', 'ystandard-blocks' ),
										value: 'right',
									},
								] }
								onChange={ onChangePosition }
							/>
						</div>
					</BaseControl>
				) }
				<BaseControl>
					<div className="ystdb-inspector-controls__label">
						{ iconBaseControlTitle }
					</div>
					<div className={ 'ystdb-icon-select__picker' }>
						<FontIconPicker { ...pickerProps } />
					</div>
				</BaseControl>
			</div>
		);
	}
}

export default SVGIconSelect;
