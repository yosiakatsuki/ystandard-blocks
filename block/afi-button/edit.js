import {wrapClass, previewStyles} from './styles';

const {BlockControls, PlainText, InspectorControls, PanelColorSettings, ContrastChecker, getColorClassName} = wp.editor;
const {Fragment} = wp.element;
const {Disabled, SandBox} = wp.components;
const {withState} = wp.compose;
const {__} = wp.i18n;

export default function ({attributes, setAttributes, setState, isPreview, styles}) {
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
                <InspectorControls>
                    <PanelColorSettings
                        title={ __( 'Color Settings' ) }
                        colorSettings={ [
                            {
                                value: backgroundColor.color,
                                onChange: setBackgroundColor,
                                label: __( 'Background Color' ),
                            },
                            {
                                value: textColor.color,
                                onChange: setTextColor,
                                label: __( 'Text Color' ),
                            },
                        ] }
                    >
                        <ContrastChecker
                            { ...{
                                isLargeText: false,
                                textColor: textColor.color,
                                backgroundColor: backgroundColor.color,
                                fallbackBackgroundColor,
                                fallbackTextColor,
                            } }
                        />
                    </PanelColorSettings>
                </InspectorControls>
            </Fragment>
        </div>
    );
}