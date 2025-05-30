/**
 * WordPress dependencies.
 */
import {
	useBlockProps,
	RichText,
	withColors,
	// @ts-expect-error
	__experimentalUseGradient,
} from '@wordpress/block-editor';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import {
	getCustomFontSizeClass,
	getCustomFontSizeStyle,
} from '@aktk/block-components/components/custom-font-size-picker';

/**
 * Block
 */
import { InspectorControls } from './inspector-controls';
import { BlockControls } from './block-controls';
import type { Attributes } from './types';
import {
	getLinkClasses,
	getLinkStyles,
	getWrapClasses,
	getWrapStyles,
} from './utils';
import { Icon } from './icon';
import './style-editor.scss';

// @ts-expect-error
function Edit( props ) {
	const { gradientClass, gradientValue, setGradient } =
		__experimentalUseGradient();
	const {
		textColor,
		backgroundColor,
		attributes,
		setAttributes,
		className,
		clientId,
	} = props;

	const {
		content,
		iconLeft,
		iconSizeLeft,
		iconRight,
		iconSizeRight,
		fontSize,
		customFontSize,
	} = attributes as unknown as Attributes;

	const wrapProps = {
		className: getWrapClasses( {
			clientId,
			className,
			...attributes,
		} ),
		style: getWrapStyles( { ...attributes } ),
	};
	const linkProps = {
		className: getLinkClasses( {
			...attributes,
			// @ts-expect-error
			fontSize: getCustomFontSizeClass( fontSize ),
			gradientClass,
		} ),
		style: getLinkStyles( {
			...attributes,
			textColor: textColor?.color,
			backgroundColor: backgroundColor?.color,
			// @ts-expect-error
			fontSize: getCustomFontSizeStyle( fontSize, customFontSize ),
			customGradient: gradientValue,
		} ),
	};
	const inspectorControlsProps = {
		...props,
		gradientValue,
		setGradient,
	};

	return (
		<>
			<BlockControls { ...props } />
			<InspectorControls { ...inspectorControlsProps } />

			<div { ...useBlockProps( {} ) }>
				{ /* @ts-ignore */ }
				<div { ...wrapProps }>
					<div { ...linkProps }>
						<Icon
							hasIcon={ !! iconLeft || !! iconRight }
							icon={ iconLeft }
							size={ iconSizeLeft }
						/>
						<RichText
							tagName={ 'span' }
							placeholder={ __(
								'テキスト…',
								'ystandard-blocks'
							) }
							value={ content || '' }
							onChange={ ( value ) =>
								setAttributes( { content: value } )
							}
							// @ts-ignore
							withoutInteractiveFormatting
							className={ 'ystdb-custom-button__content' }
						/>
						<Icon
							hasIcon={ !! iconLeft || !! iconRight }
							icon={ iconRight }
							size={ iconSizeRight }
						/>
					</div>
				</div>
			</div>
		</>
	);
}

// @ts-expect-error
export default compose( [
	withColors( 'backgroundColor', { textColor: 'color' } ),
] )( Edit );
