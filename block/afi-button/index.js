import classnames from 'classnames';

const {registerBlockType} = wp.blocks;
const {BlockControls, PlainText, InspectorControls, PanelColorSettings, ContrastChecker, getColorClassName} = wp.editor;
const {RawHTML, Fragment} = wp.element;
const {Disabled, SandBox} = wp.components;
const {withState} = wp.compose;
const {__} = wp.i18n;

/**
 * ラッパークラス
 */
const wrapClass = classnames(
    'wp-block-button',
    'ystdb-btn-wrap',
);

const previewStyles = `
    html,body,:root {
        margin: 0 !important;
        padding: 0 !important;
        overflow: visible !important;
        min-height: auto !important;
    }
    .wp-block-button a {
        display: inline-block;
        padding: .5rem 1.5rem;
        border-radius: 4px;
        text-decoration: none;
        -webkit-transition: all .3s;
        transition: all .3s;
        border-width: 1px;
        border-style: solid;
    }
    .wp-block-button a:not(.has-background) {
        background-color: #222;
        border-color: #222;
    }
    .wp-block-button a:not(.has-text-color) {
        color: #fff;
    }
`;

const edit = ({attributes, setAttributes, setState, isPreview, styles}) => {
    return (
        <div className={'wp-block-html'}>
            <Fragment>
                <BlockControls>
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
                                    <div class="${wrapClass}">
                                        ${attributes.content}
                                    </div>`}
                                styles={[previewStyles, styles]}
                            />
                        ) : (
                            <PlainText
                                value={attributes.content}
                                onChange={(content) => setAttributes({content})}
                                placeholder={'アフィリエイトタグを入力'}
                                aria-label={__('HTML')}
                            />
                        )
                    )}
                </Disabled.Consumer>
            </Fragment>
        </div>
    );
}

registerBlockType('ystdb/afi-button', {
    title: 'アフィリエイトリンクボタンブロック',
    description: 'アフィリエイトリンクなど、入力したリンクをボタン形式で表示します。',
    icon: 'embed-generic',
    keywords: [__('link'), __('button'), 'button'],
    category: 'ystdb',
    attributes: {
        content: {
            type: "string"
        }
    },
    supports: {
        className: false
        // html: false,
    },
    edit: withState({isPreview: false, styles: ''})(edit),
    save() {
        return null;
    }
});