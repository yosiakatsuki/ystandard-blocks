import classnames from "classnames";

const {
    getColorClassName,
    InnerBlocks
} = wp.editor;
const {__} = wp.i18n;

export default function save(props) {
    const {
        attributes,
    } = props;
    const {
        backgroundColor,
        textColor,
        customBackgroundColor,
        customTextColor,
        wrapperTag,
        marginTop,
        marginBottom,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        backgroundImageURL,
        backgroundImageOpacity,
        backgroundSkew,
        innerCustomWidth
    } = attributes;

    /**
     * HTMLタグ
     */
    const Wrapper = wrapperTag;

    /**
     * 色設定
     */
    const textClass = getColorClassName('color', textColor);
    const backgroundClass = getColorClassName('background-color', backgroundColor);
    /**
     * 背景関連
     */
    const hasBackground = (backgroundColor || customBackgroundColor) && !backgroundSkew;
    const hasBackgroundClass = backgroundClass && !backgroundSkew;
    const hasBackgroundImage = backgroundImageURL && !backgroundSkew;
    const hasBackgroundDim = backgroundImageURL && !backgroundSkew;
    const backgroundDimClass = 'has-background-dim-' + (10 * Math.round(backgroundImageOpacity / 10));

    /**
     * メインクラス名
     */
    const classes = classnames(
        'ystdb-section',
        {
            'has-text-color': textColor || customTextColor,
            [textClass]: textClass,
            'has-background': hasBackground,
            [backgroundClass]: hasBackgroundClass,
            'has-background-image': hasBackgroundImage,
            'has-background-dim': hasBackgroundDim,
            [backgroundDimClass]: hasBackgroundDim,
            'has-background-skew': backgroundSkew
        }
    );
    /**
     * インナーブロックのクラス名
     */
    const innerClasses = 'ystdb-section__inner';
    /**
     * セクションスタイル
     */
    const sectionStyles = {
        backgroundColor: (backgroundClass || backgroundSkew) ? undefined : customBackgroundColor,
        color: textClass ? undefined : customTextColor,
        'margin-top': 0 === marginTop ? 0 : marginTop + 'rem',
        'margin-bottom': 0 === marginBottom ? 0 : marginBottom + 'rem',
        'padding-top': 0 === paddingTop ? 0 : paddingTop + 'rem',
        'padding-bottom': 0 === paddingBottom ? 0 : paddingBottom + 'rem',
        backgroundImage: hasBackgroundImage ? `url("${backgroundImageURL}")` : undefined,
        'padding-left':'1rem',
        'padding-right':'1rem'
    };
    /**
     * インナーのスタイル
     */
    const innerStyles = {
        'max-width': innerCustomWidth !== 0 ? innerCustomWidth : undefined,
        'margin-right': 'auto',
        'margin-left': 'auto',
        'padding-left': 0 === paddingLeft ? 0 : paddingLeft + 'rem',
        'padding-right': 0 === paddingRight ? 0 : paddingRight + 'rem'
    };
    /**
     * 背景斜めのマスク
     */
    const skewMask = () => {
        if (backgroundSkew) {
            const backgroundSkewValue = backgroundSkew + 'deg';
            const skewStyle = {
                backgroundColor: backgroundClass ? undefined : customBackgroundColor,
                transform: `skewY(${backgroundSkewValue}) translateY(-50%)`
            };
            const skewClass = classnames(
                'ystdb-section__mask',
                {
                    'has-background': backgroundColor || customBackgroundColor,
                    [backgroundClass]: backgroundClass,
                }
            );
            return (
                <div className={skewClass} style={skewStyle}></div>
            );
        }
    };

    return (
        <div className={classes} style={sectionStyles}>
            {skewMask()}
            <Wrapper className={innerClasses} style={innerStyles}>
                <InnerBlocks.Content/>
            </Wrapper>
        </div>
    );
}