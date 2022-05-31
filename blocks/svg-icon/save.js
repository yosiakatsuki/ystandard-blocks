import classnames from 'classnames';
import SVGIcon from '@aktk/components/svg-icon';
import { getColorClassName, getFontSizeClass } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		textColor,
		customTextColor,
		icon,
		iconSize,
		align,
		fontSize,
		customFontSize,
		url,
		rel,
		linkTarget,
	} = attributes;

	const textClass = getColorClassName( 'color', textColor );
	const fontSizeClass = getFontSizeClass( fontSize );

	const classes = classnames( 'ystdb-icon', {
		'has-text-color': textColor || customTextColor,
		[ textClass ]: textClass,
		[ `has-text-align-${ align }` ]: align,
		[ fontSizeClass ]: fontSizeClass,
		[ `is-size--${ iconSize }` ]: iconSize,
	} );

	const styles = {
		color: textClass ? undefined : customTextColor,
		fontSize: fontSizeClass ? undefined : customFontSize,
	};

	return (
		<div className={ classes } style={ styles }>
			{ !! url ? (
				<a
					className={ 'ystdb-icon__link' }
					href={ url }
					target={ linkTarget }
					rel={ rel }
				>
					<SVGIcon name={ icon } />
				</a>
			) : (
				<SVGIcon name={ icon } />
			) }
		</div>
	);
}
