import classnames from 'classnames';

/**
 * マスク作成に必要な要素
 */
export const sectionBackgroundParam = {
	class: '',
	customColor: '',
	image: '',
	imageOpacity: '',
	dim: 0,
	skew: 0,
};

/**
 * 背景部分を作成
 *
 * @param {Object} background
 */
export const getSectionBackground = (background) => {
	if (
		!background.class &&
		!background.customColor &&
		!background.image &&
		!background.skew
	) {
		return '';
	}
	/**
	 * 背景画像関連
	 */
	const hasBackgroundImage = background.image && !background.skew;
	const hasBackgroundDim =
		background.image &&
		!background.skew &&
		(background.class || background.customColor);
	const backgroundDimClass =
		'has-background-dim-' + 10 * Math.round(background.imageOpacity / 10);
	/**
	 * 傾き
	 */
	const backgroundSkewValue = background.skew + 'deg';
	/**
	 * スタイル
	 */
	const bgStyle = {
		backgroundColor: background.class ? undefined : background.customColor,
		transform: background.skew
			? `skewY(${backgroundSkewValue}) translateY(-50%)`
			: undefined,
		backgroundImage: hasBackgroundImage
			? `url("${background.image}")`
			: undefined,
	};
	/**
	 * クラス
	 */
	const bgClass = classnames('ystdb-section__bg', {
		'has-background': background.class || background.customColor,
		[background.class]: background.class,
		'has-background-image': hasBackgroundImage,
		'has-background-dim': hasBackgroundDim,
		[backgroundDimClass]: hasBackgroundDim,
		'has-background-skew': background.skew,
	});
	return <div className={bgClass} style={bgStyle}></div>;
};
