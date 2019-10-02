import {icons} from "./icons";

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
            onClickClear,
            customIcon,
            customInfo
        } = this.props;

        const controlPanelTitle = panelTitle ? panelTitle : __('[ys]アイコン設定', 'ystandard-blocks');

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
                <BaseControl label={__('アイコン種類', 'ystandard-blocks')}>
                    <div className={'ystdb-icon-select__btn-list'}>
                        {icons.map((item) => {
                            return (
                                <Button
                                    isDefault
                                    isPrimary={selectedIcon === item.class}
                                    onClick={() => {
                                        onClickIcon(item.class);
                                    }}
                                >
                                    <i className={item.class} title={item.title}></i>
                                </Button>
                            );
                        })}
                    </div>
                    <div className={'ystdb-icon-select__clear'}>
                        <Button
                            isDefault
                            onClick={onClickClear}
                        >
                            {__('クリア', 'ystandard-blocks')}
                        </Button>
                    </div>
                    {customInfo &&
                    (
                        <div className={'ystdb-icon-select__sub'}>
                            {customInfo}
                        </div>
                    )}
                </BaseControl>
                <BaseControl label={__('カスタムアイコン(上級者向け)', 'ystandard-blocks')}>
                    <input
                        className={`components-text-control__input`}
                        type={'text'}
                        value={customIcon}
                        onChange={this.onChangeCustomIcon}
                        placeholder={'fas fa-angle-right'}
                        aria-label={__('アイコンのクラスを入力')}
                    />
                    <div className={'ystdb-icon-select__sub'}>
                        <div>※<ExternalLink href={`https://fontawesome.com/icons?d=gallery`}>Font Awesome</ExternalLink>のクラスを入力して下さい。
                        </div>
                    </div>
                    <div className={'ystdb-icon-select__btn-list'}>
                        <Button
                            className={'ystdb-icon-select__custom'}
                            isDefault
                            isPrimary={'custom' === selectedIcon}
                            onClick={() => {
                                onClickIcon('custom');
                            }}
                        >
                            カスタムアイコンを使用する
                        </Button>
                    </div>

                </BaseControl>
            </PanelBody>
        );
    }
}

export default IconSelect;