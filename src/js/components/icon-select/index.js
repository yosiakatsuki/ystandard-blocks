import _ from 'lodash';
import allIcons from "./icons.json";
import recommendIcons from './reccomend-icons.json';
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';

import {__} from '@wordpress/i18n';
import {
    BaseControl,
    PanelBody,
    RadioControl
} from '@wordpress/components';

import {
    Component
} from '@wordpress/element';

class IconSelect extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            panelTitle,
            iconControlTitle,
            iconPosition,
            onChangePosition,
            selectedIcon,
            onClickIcon,
        } = this.props;

        const controlPanelTitle = panelTitle ? panelTitle : __('[ys]アイコン設定', 'ystandard-blocks');
        const iconBaseControlTitle = iconControlTitle === undefined ? __('表示アイコン', 'ystandard-blocks') : iconControlTitle;

        const icons = _.uniq([...recommendIcons.icons, ...allIcons.icons]);

        const pickerProps = {
            icons: icons,
            theme: 'bluegrey',
            renderUsing: 'class',
            value: selectedIcon,
            onChange: (value) => {
                onClickIcon(value);
            },
            isMulti: false,
        };

        return (
            <PanelBody title={controlPanelTitle}>
                {(!!onChangePosition &&
                    <BaseControl label={__('アイコン表示位置', 'ystandard-blocks')}>
                        <div className={'ystdb-icon-select__position'}>
                            <RadioControl
                                selected={iconPosition}
                                options={[
                                    {label: __('右', 'ystandard-blocks'), value: 'right'},
                                    {label: __('左', 'ystandard-blocks'), value: 'left'},
                                ]}
                                onChange={onChangePosition}
                            />
                        </div>
                    </BaseControl>
                )}
                <BaseControl label={iconBaseControlTitle}>
                    <div className={'ystdb-icon-select__picker'}>
                        <FontIconPicker {...pickerProps} />
                    </div>
                </BaseControl>
            </PanelBody>
        );
    }
}

export default IconSelect;
