import classnames from 'classnames';
import {marginType} from "./_margin";
import getNum from "../../src/js/util/_getNum"

const {
    BlockControls,
    InspectorControls,
    PanelColorSettings,
    ContrastChecker,
    getColorClassName,
    withColors,
    InnerBlocks
} = wp.editor;
const {
    PanelBody,
    BaseControl,
    SelectControl,
    RangeControl,
    Button,
    ToggleControl
} = wp.components;
const {Fragment} = wp.element;
const {__} = wp.i18n;

export default function (props) {
    const {
        attributes,
        setAttributes,
        backgroundColor,
        textColor,
        setBackgroundColor,
        setTextColor,
    } = props;
    const {
        wrapperTag,
        margin,
        marginTop,
        marginBottom,
        padding,
        paddingTop,
        paddingBottom,
        innerWidth,
        innerCustomWidth
    } = attributes;

    /**
     * HTMLタグ
     */
    const wrapperTagNames = [
        {
            tag: 'div'
        },
        {
            tag: 'section'
        },
        {
            tag: 'aside'
        }
    ];
    const Wrapper = wrapperTag;
    const classes = classnames(
        'ystdb-section',
        {
            'has-background': backgroundColor.color,
            [backgroundColor.class]: backgroundColor.class,
            'has-text-color': textColor.color,
            [textColor.class]: textColor.class
        }
    );
    const innerClasses = 'ystdb-section__inner';
    const editWrapStyle = {
        'padding-top': marginTop,
        'padding-bottom': marginBottom,
    };
    const sectionStyles = {
        backgroundColor: backgroundColor.color,
        color: textColor.color,
        'padding-top': paddingTop,
        'padding-bottom': paddingBottom,
    };
    const innerStyles = {
        'max-width': innerCustomWidth !== 0 ? innerCustomWidth : undefined,
        'margin-right': 'auto',
        'margin-left': 'auto'
    };


    return (
        <Fragment>
            <InspectorControls>
                <div className="ystdb-inspectorcontrols">
                    <PanelBody title={__('ブロック設定', 'ystandard-blocks')}>
                        <BaseControl label={__('HTMLタグ', 'ystandard-blocks')}>
                            <div className={'ystdb-btn-selector'}>
                                {wrapperTagNames.map((item) => {
                                    return (
                                        <Button
                                            isDefault
                                            isPrimary={wrapperTag === item.tag}
                                            onClick={() => {
                                                setAttributes({wrapperTag: item.tag});
                                            }}
                                        >
                                            <span>{item.tag}</span>
                                        </Button>
                                    );
                                })}
                            </div>
                        </BaseControl>
                        <BaseControl label={__('余白設定(外側)', 'ystandard-blocks')}>
                            <SelectControl
                                label={__('一括設定', 'ystandard-blocks')}
                                value={margin}
                                onChange={(value) => {
                                    setAttributes({margin: value});
                                    let target = marginType.margin.find((val) => val.value === value);
                                    if (target) {
                                        setAttributes({marginTop: target.num});
                                        setAttributes({marginBottom: target.num});
                                    }
                                }}
                                options={marginType.margin}
                            />
                            <RangeControl
                                label={__('数値 上側(px)', 'ystandard-blocks')}
                                value={marginTop}
                                onChange={(value) => setAttributes({marginTop: getNum(value, 0, 160)})}
                                min="0"
                                max="160"
                            />
                            <RangeControl
                                label={__('数値 下側(px)', 'ystandard-blocks')}
                                value={marginBottom}
                                onChange={(value) => setAttributes({marginBottom: getNum(value, 0, 160)})}
                                min="0"
                                max="160"
                            />
                        </BaseControl>
                        <BaseControl label={__('余白設定(内側)', 'ystandard-blocks')}>
                            <SelectControl
                                label={__('一括設定', 'ystandard-blocks')}
                                value={padding}
                                onChange={(value) => {
                                    setAttributes({padding: value});
                                    let target = marginType.padding.find((val) => val.value === value);
                                    if (target) {
                                        setAttributes({paddingTop: target.num});
                                        setAttributes({paddingBottom: target.num});
                                    }
                                }}
                                options={marginType.padding}
                            />
                            <RangeControl
                                label={__('数値 上側(px)', 'ystandard-blocks')}
                                value={paddingTop}
                                onChange={(value) => setAttributes({paddingTop: getNum(value, 0, 160)})}
                                min="0"
                                max="160"
                            />
                            <RangeControl
                                label={__('数値 下側(px)', 'ystandard-blocks')}
                                value={paddingBottom}
                                onChange={(value) => setAttributes({paddingBottom: getNum(value, 0, 160)})}
                                min="0"
                                max="160"
                            />
                        </BaseControl>
                        <BaseControl label={__('セクション内コンテンツの最大幅', 'ystandard-blocks')}>
                            <SelectControl
                                label={__('選択', 'ystandard-blocks')}
                                value={innerWidth}
                                onChange={(value) => {
                                    setAttributes({innerWidth: value});
                                    let target = marginType.innerWidth.find((val) => val.value === value);
                                    if (target) {
                                        setAttributes({innerCustomWidth: target.num});
                                    }
                                }}
                                options={marginType.innerWidth}
                            />
                            <RangeControl
                                label={__('数値', 'ystandard-blocks')}
                                value={innerCustomWidth}
                                onChange={(value) => setAttributes({innerCustomWidth: getNum(value, 0, 1600)})}
                                min="0"
                                max="1600"
                            />
                            <div>
                                <small>※最大幅指定なしにしたい場合0にしてください。</small>
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
                                },
                                label: __('Background Color'),
                            },
                            {
                                value: textColor.color,
                                onChange: (color) => {
                                    setTextColor(color);
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
                </div>
            </InspectorControls>

            <div className={'ystdb-section__edit-wrap'} style={editWrapStyle}>
                <div className={classes} style={sectionStyles}>
                    <Wrapper className={innerClasses} style={innerStyles}>
                        <InnerBlocks/>
                    </Wrapper>
                </div>
            </div>
        </Fragment>
    );
}