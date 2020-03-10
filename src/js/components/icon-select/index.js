import _ from 'lodash';
import allIcons from './icons.json';
import recommendIcons from './reccomend-icons.json';
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';

import { __ } from '@wordpress/i18n';
import { RadioControl, BaseControl } from '@wordpress/components';

import { Component } from '@wordpress/element';

class IconSelect extends Component {
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
		const useIcons =
			'all' === ystdb.useAllIcons
				? [ ...recommendIcons.icons, ...allIcons.icons ]
				: [ ...recommendIcons.icons ];
		const icons = _.uniq( useIcons );

		const pickerProps = {
			icons,
			theme: 'bluegrey',
			renderUsing: 'class',
			value: selectedIcon,
			onChange: ( value ) => {
				onClickIcon( value );
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

export default IconSelect;
