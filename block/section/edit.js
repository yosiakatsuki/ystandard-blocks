import classnames from 'classnames';
import {marginType} from "./config";
import getNum from "../../src/js/util/_getNum"

import {
    BlockControls,
    InspectorControls,
    PanelColorSettings,
    ContrastChecker,
    getColorClassName,
    withColors,
    InnerBlocks,
    MediaUpload
} from '@wordpress/block-editor';
import {
    PanelBody,
    BaseControl,
    SelectControl,
    RangeControl,
    Button,
    ToggleControl
} from '@wordpress/components';

import {
    Fragment
} from '@wordpress/element';
import {
    withState,
    compose,
} from '@wordpress/compose';
import {__} from '@wordpress/i18n';

const sectionEdit = (props) => {
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
        marginTop,
        marginBottom,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        backgroundImageURL,
        backgroundImageAlt,
        backgroundImageID,
        backgroundImageOpacity,
        backgroundSkew,
        backgroundSkewWidth,
        innerCustomWidth
    } = attributes;

    const rangeStep = 0.5;

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
    /**
     * 背景画像関連
     */
    const ALLOWED_MEDIA_TYPES = ['image'];
    const hasBackgroundImage = backgroundImageURL && !backgroundSkew;
    const hasBackgroundDim = backgroundImageURL && !backgroundSkew;
    const backgroundDimClass = 'has-background-dim-' + (10 * Math.round(backgroundImageOpacity / 10));

    /**
     * メインクラス名
     */
    const classes = classnames(
        'ystdb-section',
        {
            'has-background': backgroundColor.color,
            [backgroundColor.class]: backgroundColor.class,
            'has-text-color': textColor.color,
            [textColor.class]: textColor.class,
            'has-background-image': hasBackgroundImage,
            'has-background-dim': hasBackgroundDim,
            [backgroundDimClass]: hasBackgroundDim
        }
    );
    /**
     * インナーブロックのクラス名
     */
    const innerClasses = 'ystdb-section__inner';
    /**
     * 編集画面のラッパースタイル
     */
    const editWrapStyle = {
        paddingTop: 0 === marginTop ? 0 : marginTop + 'rem',
        paddingBottom: 0 === marginBottom ? 0 : marginBottom + 'rem',
    };
    /**
     * セクションスタイル
     */
    const sectionStyles = {
        backgroundColor: (backgroundColor.color && !backgroundSkew) ? backgroundColor.color : undefined,
        color: textColor.color,
        paddingTop: 0 === paddingTop ? 0 : paddingTop + 'rem',
        paddingBottom: 0 === paddingBottom ? 0 : paddingBottom + 'rem',
        backgroundImage: hasBackgroundImage ? `url("${backgroundImageURL}")` : undefined,
        paddingLeft: '1rem',
        paddingRight: '1rem'
    };
    /**
     * インナーのスタイル
     */
    const innerStyles = {
        maxWidth: innerCustomWidth !== 0 ? innerCustomWidth : undefined,
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingLeft: 0 === paddingLeft ? 0 : paddingLeft + 'rem',
        paddingRight: 0 === paddingRight ? 0 : paddingRight + 'rem'
    };
    /**
     * 画像設定コントロール
     */
    const mediaUploadRender = (obj) => {
        if (0 === backgroundImageID) {
            return (
                <Button
                    isDefault
                    onClick={obj.open}
                >
                    {__('背景画像を選択', 'ystandard-blocks')}
                </Button>
            );
        } else {
            return (
                <div>
                    <Button
                        onClick={obj.open}
                        className={'ystdb-mediaupload__preview'}
                        style={{padding: 0}}
                    >
                        <img src={backgroundImageURL} alt={backgroundImageAlt}/>
                    </Button>
                    <Button
                        isDefault
                        onClick={() => {
                            setAttributes({
                                backgroundImageURL: '',
                                backgroundImageID: 0
                            });
                        }}
                    >
                        {__('背景画像をクリア', 'ystandard-blocks')}
                    </Button>
                </div>
            );
        }
    };
    /**
     * 背景斜めのマスク
     */
    const skewMask = () => {
        if (backgroundSkew) {
            const backgroundSkewValue = backgroundSkew + 'deg';
            const skewStyle = {
                height: backgroundSkewWidth ? backgroundSkewWidth + '%' : undefined,
                backgroundColor: backgroundColor.color,
                transform: `skewY(${backgroundSkewValue}) translateY(-50%)`
            };
            const skewClass = classnames(
                'ystdb-section__mask'
            );
            return (
                <div className={skewClass} style={skewStyle}></div>
            );
        }
    };

    return (
        <Fragment>
            <InspectorControls>
                <div className="ystdb-inspectorcontrols">
                    <PanelBody title={__('余白設定', 'ystandard-blocks')}>
                        <BaseControl label={__('余白設定(外側)', 'ystandard-blocks')}>
                            <div className={`ystdb-info__label`}>かんたん設定</div>
                            <div className={'ystdb-btn-selector components-base-control'}>
                                {marginType.margin.map((item) => {
                                    return (
                                        <Button
                                            isDefault
                                            onClick={() => {
                                                setAttributes({
                                                    marginTop: item.num,
                                                    marginBottom: item.num,
                                                });
                                            }}
                                        >
                                            <span>{item.label}</span>
                                        </Button>
                                    );
                                })}
                            </div>
                            <RangeControl
                                label={__('上側', 'ystandard-blocks')}
                                value={marginTop}
                                onChange={(value) => setAttributes({marginTop: getNum(value, -10, 10, 0)})}
                                min={-10}
                                max={10}
                                step={rangeStep}
                            />
                            <RangeControl
                                label={__('下側', 'ystandard-blocks')}
                                value={marginBottom}
                                onChange={(value) => setAttributes({marginBottom: getNum(value, -10, 10, 0)})}
                                min={-10}
                                max={10}
                                step={rangeStep}
                            />
                            <p>
                                <span className={`ystdb-info__small`}>※数字が大きいほど余白が大きくなります。</span>
                                <span className={`ystdb-info__small`}>※単位はremです。</span>
                            </p>
                        </BaseControl>
                        <BaseControl label={__('余白設定(内側)', 'ystandard-blocks')}>
                            <div className={`ystdb-info__label`}>かんたん設定</div>
                            <div className={'ystdb-btn-selector components-base-control'}>
                                {marginType.padding.map((item) => {
                                    return (
                                        <Button
                                            isDefault
                                            onClick={() => {
                                                setAttributes({
                                                    paddingTop: item.num,
                                                    paddingBottom: item.num,
                                                });
                                            }}
                                        >
                                            <span>{item.label}</span>
                                        </Button>
                                    );
                                })}
                                <br/>
                                <div>
                                    <span className={`ystdb-info__small`}>※上下余白のかんたん設定</span>
                                </div>
                            </div>
                            <RangeControl
                                label={__('上側', 'ystandard-blocks')}
                                value={paddingTop}
                                onChange={(value) => setAttributes({paddingTop: getNum(value, 0, 10)})}
                                min={0}
                                max={10}
                                step={rangeStep}
                            />
                            <RangeControl
                                label={__('下側', 'ystandard-blocks')}
                                value={paddingBottom}
                                onChange={(value) => setAttributes({paddingBottom: getNum(value, 0, 10)})}
                                min={0}
                                max={10}
                                step={rangeStep}
                            />
                            <RangeControl
                                label={__('左側', 'ystandard-blocks')}
                                value={paddingLeft}
                                onChange={(value) => setAttributes({paddingLeft: getNum(value, 0, 5)})}
                                min={0}
                                max={5}
                                step={rangeStep}
                            />
                            <RangeControl
                                label={__('右側', 'ystandard-blocks')}
                                value={paddingRight}
                                onChange={(value) => setAttributes({paddingRight: getNum(value, 0, 5)})}
                                min={0}
                                max={5}
                                step={rangeStep}
                            />
                            <div>
                                <span className={`ystdb-info__small`}>※数字が大きいほど余白が大きくなります。</span>
                                <span className={`ystdb-info__small`}>※単位はremです。</span>
                            </div>
                        </BaseControl>
                    </PanelBody>
                    <PanelBody title={__('セクションコンテンツ幅設定', 'ystandard-blocks')}>
                        <div className={`ystdb-info__label`}>かんたん設定</div>
                        <div className={'ystdb-btn-selector components-base-control'}>
                            {marginType.innerWidth.map((item) => {
                                return (
                                    <Button
                                        isDefault
                                        onClick={() => {
                                            setAttributes({
                                                innerCustomWidth: item.num
                                            });
                                        }}
                                    >
                                        <span>{item.label}</span>
                                    </Button>
                                );
                            })}
                        </div>
                        <RangeControl
                            label={__('コンテンツ部分の最大幅', 'ystandard-blocks')}
                            value={innerCustomWidth}
                            onChange={(value) => setAttributes({innerCustomWidth: getNum(value, 0, 1920, 960)})}
                            min={0}
                            max={1920}
                            step={16}
                            allowReset={true}
                        />
                        <p>
                            <span className={`ystdb-info__small`}>※最大幅指定なしにしたい場合0にしてください。</span>
                        </p>
                    </PanelBody>
                    <PanelBody
                        title={__('HTMLタグ設定', 'ystandard-blocks')}
                        initialOpen={false}
                    >
                        <p>
                            <span className={`ystdb-info__small`}>コンテンツを囲むHTMLタグを選択できます。</span>
                        </p>
                        <div className={'ystdb-btn-selector components-base-control'}>
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
                    </PanelBody>
                    <PanelBody
                        title={__('背景画像設定', 'ystandard-blocks')}
                        initialOpen={false}
                    >
                        <MediaUpload
                            onSelect={(media) => {
                                setAttributes({
                                    backgroundImageURL: media.url,
                                    backgroundImageID: media.id,
                                    backgroundImageAlt: media.alt
                                });
                            }}
                            type={ALLOWED_MEDIA_TYPES}
                            value={backgroundImageID}
                            render={mediaUploadRender}
                        />
                        <br/><br/>
                        <RangeControl
                            label={__('画像の上に重ねる色の濃さ', 'ystandard-blocks')}
                            value={backgroundImageOpacity}
                            onChange={(value) => setAttributes({backgroundImageOpacity: getNum(value, 0, 100)})}
                            min={0}
                            max={100}
                            step={10}
                        />
                        <p>
                            <span className={`ystdb-info__small`}>※数値が大きいほど背景画像が見えづらくなります。</span>
                            <span className={`ystdb-info__small`}>※画像の上に重ねる色は、色設定の「背景色」で変更できます。</span>
                        </p>
                    </PanelBody>
                    <PanelBody
                        title={__('背景の傾き設定', 'ystandard-blocks')}
                        initialOpen={false}
                    >
                        <p>
                            <span className={`ystdb-info__small ystdb-info__bold`}>※傾きの設定をする場合、背景画像設定が無視されます。</span>
                        </p>
                        <RangeControl
                            label={__('背景の傾き具合', 'ystandard-blocks')}
                            value={backgroundSkew}
                            onChange={(value) => setAttributes({backgroundSkew: getNum(value, -3, 3, 0)})}
                            min={-3}
                            max={3}
                            step={0.5}
                            allowReset={true}
                        />
                        <RangeControl
                            label={__('背景の太さ', 'ystandard-blocks')}
                            value={backgroundSkewWidth}
                            onChange={(value) => setAttributes({backgroundSkewWidth: getNum(value, 70, 100, 90)})}
                            min={70}
                            max={100}
                            step={1}
                            allowReset={true}
                        />
                        <p>
                                <span
                                    className={`ystdb-info__small`}>※コンテンツがはみ出る・余白が少なく感じる場合、「背景の太さ」と「余白設定(内側)」の上下を大きくして調整して下さい。</span>
                            <span className={`ystdb-info__small`}>※背景色は、色設定の「背景色」で変更できます。</span>
                        </p>
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
                    {skewMask()}
                    <Wrapper className={innerClasses} style={innerStyles}>
                        <InnerBlocks/>
                    </Wrapper>
                </div>
            </div>
        </Fragment>
    );
};

export default compose([
    withColors('backgroundColor', {textColor: 'color'}),
])(sectionEdit);
