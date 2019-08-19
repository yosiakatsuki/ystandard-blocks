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
    'wp-block-html'
);

const previewStyles = `
    html,body,:root {
        margin: 0 !important;
        padding: 0 !important;
        overflow: visible !important;
        min-height: auto !important;
    }
`;

const editorStyles = {
    'width':'100%'
}

const edit = ({attributes, setAttributes, setState, isPreview}) => {
    return (
        <div className={wrapClass} style={editorStyles}>
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
                            <SandBox html={attributes.content} style={previewStyles}/>
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

registerBlockType('ystdb/afi-btn', {
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
    edit: withState({isPreview: false})(edit),
    save({attributes}) {
        return (
            <div className={wrapClass}>
                <RawHTML>{attributes.content}</RawHTML>
            </div>
        );
    },
});