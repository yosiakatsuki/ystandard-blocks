import classnames from 'classnames';
import {previewStyles} from './styles';
import {icons} from './icons';

const {
    BlockControls,
    PlainText,
    AlignmentToolbar,
    InspectorControls,
    PanelColorSettings,
    ContrastChecker,
    getColorClassName,
    withColors
} = wp.editor;
const {Fragment} = wp.element;
const {
    Disabled,
    SandBox,
    PanelBody,
    BaseControl,
    Button
} = wp.components;
const {withState} = wp.compose;
const {__} = wp.i18n;

export default function (props) {
    const {
        backgroundColor,
        textColor,
        setBackgroundColor,
        setTextColor,
        attributes,
        setAttributes,
        setState,
        isPreview,
        styles
    } = props;
    const {
        content,
        icon,
        align
    } = attributes;

    /**
     * 色設定
     */
    const bgColor = backgroundColor.color ? backgroundColor.color : '#222';
    const txtColor = textColor.color ? textColor.color : '#fff';

    /**
     * 色設定をプレビューに反映する
     */
    const colorStyle = `
        .ystdb-btn-link {
            background-color: ${bgColor};
            border-color: ${bgColor};
            color: ${txtColor};
        }
    `;
    /**
     * プレビュー作成
     */
    let previewContent = content ? content : '';
    let previewClass = 'ystdb-btn-link';
    if (icon) {
        previewContent = `${content}<i class="${icon}"></i>`;
        previewClass = `${previewClass} -has-icon`;
    }

    const refreshPreview = () => {
        if (isPreview) {
            setState({isPreview: false})
            setTimeout(() => {
                setState({isPreview: true})
            }, 100);
        }
    };

    const alignPreview = align ? `has-text-align-${align}` : '';

    return (
        <div className={'wp-block-html'}>
            <Fragment>
                <BlockControls>
                    <AlignmentToolbar
                        value={align}
                        onChange={(nextAlign) => {
                            setAttributes({align: nextAlign});
                            refreshPreview();
                        }}
                    />
                    <div className="components-toolbar">
                        <button
                            className={`components-tab-button ${!isPreview ? 'is-active' : ''}`}
                            onClick={() => {
                                setState({isPreview: false})
                            }}
                        >
                            <span>HTML</span>
                        </button>
                        <button
                            className={`components-tab-button ${isPreview ? 'is-active' : ''}`}
                            onClick={() => {
                                setState({isPreview: true})
                            }}
                        >
                            <span>{__('Preview')}</span>
                        </button>
                    </div>
                </BlockControls>
                <Disabled.Consumer>
                    {() => (
                        (isPreview) ? (
                            <SandBox
                                html={`
                                    <div class="wp-block-button ${alignPreview}">
                                        <div class="${previewClass}">
                                            ${previewContent}
                                        </div>
                                    </div>`}
                                styles={[previewStyles, styles, colorStyle]}
                            />
                        ) : (
                            <PlainText
                                value={content}
                                onChange={(content) => setAttributes({content})}
                                placeholder={'HTMLを入力...'}
                                aria-label={__('HTML')}
                            />
                        )
                    )}
                </Disabled.Consumer>
                <InspectorControls>
                    <PanelBody title={__('アイコン設定', 'ystandard-blocks')}>
                        <BaseControl label={__('アイコン', 'ystandard-blocks')}>
                            <div className={'ystdb-btn-link--edit__icons'}>
                                {icons.map((item) => {
                                    return (
                                        <Button
                                            isDefault
                                            isPrimary={icon === item.class}
                                            onClick={() => {
                                                setAttributes({icon: item.class});
                                                refreshPreview();
                                            }}
                                        >
                                            <i className={item.class} title={item.title}></i>
                                        </Button>
                                    );
                                })}
                            </div>
                            <div className={'ystdb-btn-link--edit__icons-clear'}>
                                <Button
                                    isDefault
                                    onClick={() => {
                                        setAttributes({icon: ''});
                                        refreshPreview();
                                    }}
                                >
                                    {__('クリア', 'ystandard-blocks')}
                                </Button>
                            </div>
                        </BaseControl>
                    </PanelBody>
                    <PanelColorSettings
                        title={__('Color Settings')}
                        initialOpen={true}
                        colorSettings={[
                            {
                                value: backgroundColor.color,
                                onChange: (color) => {
                                    setBackgroundColor(color);
                                    refreshPreview();
                                },
                                label: __('Background Color'),
                            },
                            {
                                value: textColor.color,
                                onChange: (color) => {
                                    setTextColor(color);
                                    refreshPreview();
                                },
                                label: __('Text Color'),
                            },
                        ]}
                    >
                        <ContrastChecker
                            backgroundColor={backgroundColor.color}
                            textColor={textColor.color}
                        />
                    </PanelColorSettings>

                </InspectorControls>
            </Fragment>
        </div>
    );
}