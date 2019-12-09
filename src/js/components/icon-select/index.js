import _ from 'lodash';
import allIcons from './icons.json';
import recommendIcons from './reccomend-icons.json';
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';

import { __, _x } from '@wordpress/i18n';
import {
	RadioControl,
} from '@wordpress/components';

import {
	Component,
} from '@wordpress/element';

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

		const iconBaseControlTitle = iconControlTitle === undefined ? _x( '表示アイコン', 'ystandard-blocks' ) : iconControlTitle;

		const icons = _.uniq( [ ...recommendIcons.icons, ...allIcons.icons ] );

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
				{ ( customInfo &&
					<div style={ customInfoStyle }>{ customInfo }</div>
				) }
				{ ( !! onChangePosition &&
					<div className={ 'ystdb-base-control' }>
						<div className="ystdb-base-control__label">{ _x( 'アイコン表示位置', 'ystandard-blocks' ) }</div>
						<div className={ 'ystdb-icon-select__position' }>
							<RadioControl
								selected={ iconPosition }
								options={ [
									{ label: __( '左', 'ystandard-blocks' ), value: 'left' },
									{ label: __( '右', 'ystandard-blocks' ), value: 'right' },
								] }
								onChange={ onChangePosition }
							/>
						</div>
					</div>
				) }
				<div className={ 'ystdb-base-control' }>
					<div className="ystdb-base-control__label">{ iconBaseControlTitle }</div>
					<div className={ 'ystdb-icon-select__picker' }>
						<FontIconPicker { ...pickerProps } />
					</div>
				</div>
			</div>
		);
	}
}

export default IconSelect;
