import classnames from 'classnames';

import {
	getColorClassName,
	getFontSizeClass,
} from '@wordpress/block-editor';

export default function save( props ) {
	const {
		attributes,
	} = props;
	const {
		textColor,
		customTextColor,
		icon,
		iconSize,
		align,
		animating,
		fontSize,
		customFontSize,
		url,
		rel,
		linkTarget,
	} = attributes;

	const textClass = getColorClassName( 'color', textColor );
	const fontSizeClass = getFontSizeClass( fontSize );

	const classes = classnames(
		'ystdb-fa-icon',
		{
			'has-text-color': textColor || customTextColor,
			[ textClass ]: textClass,
			[ `has-text-align-${ align }` ]: align,
			[ fontSizeClass ]: fontSizeClass,
		}
	);

	const styles = {
		color: textClass ? undefined : customTextColor,
		fontSize: fontSizeClass ? undefined : customFontSize,
	};

	const iconClass = classnames(
		{
			[ icon ]: icon,
			[ iconSize ]: iconSize,
			'fa-spin': animating === 'spin',
		}
	);

	return (
		<div className={ classes } style={ styles }>
			{ ( !! url ) ? (
				<a
					className={ 'ystdb-fa-icon__link' }
					href={ url }
					target={ linkTarget }
					rel={ rel }
				>
					<i className={ iconClass }></i>
				</a>
			) : (
				<i className={ iconClass }></i>
			) }
		</div>
	);
}
