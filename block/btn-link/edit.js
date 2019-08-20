import {wrapClass, previewStyles} from './styles';

const {BlockControls, PlainText, InspectorControls, PanelColorSettings, ContrastChecker, getColorClassName, withColors} = wp.editor;
const {Fragment} = wp.element;
const {Disabled, SandBox} = wp.components;
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
        content
    } = attributes;

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
                                        ${(content ? content : '')}
                                    </div>`}
                                styles={[previewStyles, styles]}
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
                    <PanelColorSettings
                        title={__('Color Settings')}
                        initialOpen={false}
                        colorSettings={[
                            {
                                value: backgroundColor.color,
                                onChange: setBackgroundColor,
                                label: __('Background Color'),
                            },
                            {
                                value: textColor.color,
                                onChange: setTextColor,
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