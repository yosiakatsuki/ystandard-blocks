import {icons} from "./icons";

const {Button, BaseControl, PanelBody} = wp.components;
const {PlainText} = wp.editor;
const {Component} = wp.element;

class IconSelect extends Component {
    constructor(props) {
        super(props);

        this.onIconSelect = this.onIconSelect.bind(this);
        this.onIconInput = this.onIconInput.bind(this);
    }

    render() {
        const {
            selectIcon,
            clearIcon,
            inputIcon,
            customIcon,
            customInfo
        } = this.props;

        return (
            <PanelBody title={__('[ys]アイコン設定', 'ystandard-blocks')}>
                <BaseControl label={__('アイコン', 'ystandard-blocks')}>
                    <div className={'ystdb-btn-selector -icons'}>
                        {icons.map((item) => {
                            return (
                                <Button
                                    isDefault
                                    isPrimary={icon === item.class}
                                    onClick={() => {
                                        selectIcon(item.class);
                                    }}
                                >
                                    <i className={item.class} title={item.title}></i>
                                </Button>
                            );
                        })}
                    </div>
                    <div className={'ystdb-icon-select__label'}>カスタムアイコン(上級者向け)</div>
                    <PlainText
                        value={customIcon}
                        onChange={(content) => {
                            inputIcon(content);
                        }}
                        placeholder={'fas fa-angle-right'}
                        aria-label={__('アイコンのクラスを入力')}
                    />
                    <div className={'ystdb-btn-selector -notice'}>※<a href={`https://fontawesome.com/icons?d=gallery`}>Font
                        Awesome</a>のクラスを入力して下さい。
                    </div>
                    <div className={'ystdb-btn-selector -notice'}>※カスタムアイコンが入力されている場合、ボタンで選択したアイコンよりカスタムアイコンが優先されます。
                    </div>
                    <br/>
                    <div className={'ystdb-btn-selector__clear'}>
                        <Button
                            isDefault
                            onClick={clearIcon}
                        >
                            {__('クリア', 'ystandard-blocks')}
                        </Button>
                    </div>
                    {customInfo ? customInfo : ''}
                </BaseControl>
            </PanelBody>
        );
    }
}

export default IconSelect;