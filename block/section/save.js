import classnames from 'classnames';

import {
	getColorClassName,
	InnerBlocks,
} from '@wordpress/block-editor';

export default function save( props ) {
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
		backgroundSkewWidth,
		innerCustomWidth,
	} = attributes;

	/**
	 * HTMLタグ
	 */
	const Wrapper = wrapperTag;

	/**
	 * 色設定
	 */
	const textClass = getColorClassName( 'color', textColor );
	const backgroundClass = getColorClassName( 'background-color', backgroundColor );
	/**
	 * 背景関連
	 */
	const hasBackground = ( backgroundColor || customBackgroundColor ) && ! backgroundSkew;
	const hasBackgroundClass = backgroundClass && ! backgroundSkew;
	const hasBackgroundImage = backgroundImageURL && ! backgroundSkew;
	const hasBackgroundDim = backgroundImageURL && ! backgroundSkew;
	const backgroundDimClass = 'has-background-dim-' + ( 10 * Math.round( backgroundImageOpacity / 10 ) );

	/**
	 * メインクラス名
	 */
	const wrapperClass = classnames(
		'ystdb-section',
		{
			'has-text-color': textColor || customTextColor,
			[ textClass ]: textClass,
			'has-background': hasBackground,
			[ backgroundClass ]: hasBackgroundClass,
			'has-background-image': hasBackgroundImage,
			'has-background-dim': hasBackgroundDim,
			[ backgroundDimClass ]: hasBackgroundDim,
			'has-background-skew': backgroundSkew,
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
		backgroundColor: ( backgroundClass || backgroundSkew ) ? undefined : customBackgroundColor,
		color: textClass ? undefined : customTextColor,
		marginTop: 0 === marginTop ? 0 : marginTop + 'rem',
		marginBottom: 0 === marginBottom ? 0 : marginBottom + 'rem',
		paddingTop: 0 === paddingTop ? 0 : paddingTop + 'rem',
		paddingBottom: 0 === paddingBottom ? 0 : paddingBottom + 'rem',
		backgroundImage: hasBackgroundImage ? `url("${ backgroundImageURL }")` : undefined,
		paddingLeft: '1rem',
		paddingRight: '1rem',
	};
	/**
	 * インナーのスタイル
	 */
	const innerStyles = {
		maxWidth: innerCustomWidth !== 0 ? innerCustomWidth : undefined,
		marginRight: 'auto',
		marginLeft: 'auto',
		paddingLeft: 0 === paddingLeft ? 0 : paddingLeft + 'rem',
		paddingRight: 0 === paddingRight ? 0 : paddingRight + 'rem',
	};
	/**
	 * 背景斜めのマスク
	 */
	const skewMask = () => {
		if ( backgroundSkew ) {
			const backgroundSkewValue = backgroundSkew + 'deg';
			const skewStyle = {
				height: backgroundSkewWidth ? backgroundSkewWidth + '%' : undefined,
				backgroundColor: backgroundClass ? undefined : customBackgroundColor,
				transform: `skewY(${ backgroundSkewValue }) translateY(-50%)`,
			};
			const skewClass = classnames(
				'ystdb-section__mask',
				{
					'has-background': backgroundColor || customBackgroundColor,
					[ backgroundClass ]: backgroundClass,
				}
			);
			return (
				<div className={ skewClass } style={ skewStyle }></div>
			);
		}
	};

	return (
		<div className={ wrapperClass } style={ sectionStyles }>
			{ skewMask() }
			<Wrapper className={ innerClasses } style={ innerStyles }>
				<InnerBlocks.Content />
			</Wrapper>
		</div>
	);
}
