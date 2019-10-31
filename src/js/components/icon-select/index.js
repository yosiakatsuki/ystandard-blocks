import icons from "./icons.json";
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';

const {__} = wp.i18n;
const {Button, BaseControl, PanelBody, ExternalLink, RadioControl} = wp.components;
const {Component} = wp.element;

class IconSelect extends Component {
    constructor(props) {
        super(props);
        this.onChangeCustomIcon = this.onChangeCustomIcon.bind(this);
    }

    /**
     * カスタムアイコンの変更処理
     */
    onChangeCustomIcon(e) {
        const {onChangeCustomIcon} = this.props;
        /**
         * Font AwesomeのHTMLコピーをそのまま貼り付けたときの処理
         */
        let iconClass = e.target.value.match(/<i.+?class="(.+)?"><\/i>/);
        if (iconClass && 1 <= iconClass.length) {
            iconClass = iconClass[1];
        } else {
            iconClass = e.target.value;
        }
        onChangeCustomIcon(iconClass);
    }

    render() {
        const {
            panelTitle,
            iconPosition,
            onChangePosition,
            selectedIcon,
            onClickIcon,
        } = this.props;

        const controlPanelTitle = panelTitle ? panelTitle : __('[ys]アイコン設定', 'ystandard-blocks');

        console.log(icons);
        const pickerProps = {
            icons: icons.icons,
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
                <BaseControl label={__('アイコン種類2', 'ystandard-blocks')}>
                    <div className={'ystdb-icon-select__picker'}>
                        <FontIconPicker {...pickerProps} />
                    </div>
                </BaseControl>
            </PanelBody>
        );
    }
}

export default IconSelect;
