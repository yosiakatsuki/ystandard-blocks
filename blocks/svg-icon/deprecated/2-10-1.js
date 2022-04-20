import classnames from 'classnames';
import SVGIcon from '@ystdb/components/svg-icon';
import { getColorClassName, getFontSizeClass } from '@wordpress/block-editor';

export const blockAttributes = {
	icon: {
		type: 'string',
	},
	iconSize: {
		type: 'string',
		default: '5',
	},
	align: {
		type: 'string',
		default: 'center',
	},
	textColor: {
		type: 'string',
	},
	customTextColor: {
		type: 'string',
	},
	fontSize: {
		type: 'string',
	},
	customFontSize: {
		type: 'number',
	},
	url: {
		type: 'string',
	},
	linkTarget: {
		type: 'string',
	},
	rel: {
		type: 'string',
	},
};

export const blockSupports = {
	align: false,
	className: false,
};

export const deprecated2101 = [
	{
		attributes: {
			...blockAttributes,
		},
		supports: {
			...blockSupports,
		},
		migrate( attributes ) {
			let newFontSize = attributes.customFontSize;
			if ( 'number' === typeof newFontSize ) {
				newFontSize = newFontSize.toString().replace( 'px', '' ) + 'px';
			}
			return {
				...attributes,
				customFontSize: newFontSize,
			};
		},
		save( { attributes } ) {
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
		},
	},
];
