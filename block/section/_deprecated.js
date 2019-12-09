import classnames from 'classnames';
import getNum from '../../src/js/util/_getNum';

import {
	getColorClassName,
	InnerBlocks,
} from '@wordpress/block-editor';

export const deprecated = [
	{
		attributes: {
			wrapperTag: {
				type: 'string',
				default: 'div',
			},
			backgroundColor: {
				type: 'string',
			},
			customBackgroundColor: {
				type: 'string',
			},
			textColor: {
				type: 'string',
			},
			customTextColor: {
				type: 'string',
			},
			margin: {
				type: 'string',
				default: 'normal', //normal,wide,narrow
			},
			marginTop: {
				type: 'integer',
				default: 24,
			},
			marginBottom: {
				type: 'integer',
				default: 24,
			},
			padding: {
				type: 'string',
				default: 'normal', //normal,wide,narrow
			},
			paddingTop: {
				type: 'integer',
				default: 32,
			},
			paddingBottom: {
				type: 'integer',
				default: 32,
			},
			innerWidth: {
				type: 'string',
				default: 'normal', //normal,narrow
			},
			innerCustomWidth: {
				type: 'integer',
				default: 0,
			},
		},
		migrate( { marginTop, marginBottom, paddingTop, paddingBottom } ) {
			return {
				marginTop: getNum( marginTop, -10, 10, 0 ),
				marginBottom: getNum( marginBottom, -10, 10, 0 ),
				paddingTop: getNum( paddingTop, 0, 10 ),
				paddingBottom: getNum( paddingBottom, 0, 10 ),
			};
		},
		save( props ) {
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
				innerCustomWidth,
			} = attributes;

			const Wrapper = wrapperTag;

			const textClass = getColorClassName( 'color', textColor );
			const backgroundClass = getColorClassName( 'background-color', backgroundColor );

			const classes = classnames(
				'ystdb-section',
				{
					'has-text-color': textColor || customTextColor,
					[ textClass ]: textClass,
					'has-background': backgroundColor || customBackgroundColor,
					[ backgroundClass ]: backgroundClass,
				}
			);
			const innerClasses = 'ystdb-section__inner';

			const sectionStyles = {
				backgroundColor: backgroundClass ? undefined : customBackgroundColor,
				color: textClass ? undefined : customTextColor,
				'margin-top': marginTop,
				'margin-bottom': marginBottom,
				'padding-top': paddingTop,
				'padding-bottom': paddingBottom,
			};
			const innerStyles = {
				'max-width': innerCustomWidth !== 0 ? innerCustomWidth : undefined,
				'margin-right': 'auto',
				'margin-left': 'auto',
			};

			return (
				<div className={ classes } style={ sectionStyles }>
					<Wrapper className={ innerClasses } style={ innerStyles }>
						<InnerBlocks.Content />
					</Wrapper>
				</div>
			);
		},
	},
];
