import classnames from 'classnames';
/**
 * WordPress dependencies.
 */
import { getColorClassName, getFontSizeClass } from '@wordpress/block-editor';

/**
 * Aktk dependencies.
 */
import { SvgIcon } from '@aktk/block-components/components/svg-icon';

const blockAttributes = {
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
		type: 'string',
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
} as const;

export const to031900 = [
	{
		attributes: blockAttributes,
		supports: {
			className: false,
			align: false,
		},
		// @ts-ignore.
		migrate( attributes ) {
			return attributes;
		},
		// @ts-ignore
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
							<SvgIcon.Content name={ icon } />
						</a>
					) : (
						<SvgIcon.Content name={ icon } />
					) }
				</div>
			);
		},
	},
];
