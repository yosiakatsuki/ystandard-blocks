/**
 * WordPress dependencies.
 */
import {
	RichText,
	useBlockProps,
	// @ts-expect-error
	__experimentalGetGradientClass as getGradientClass,
} from '@wordpress/block-editor';

/**
 * Aktk dependencies.
 */
import {
	getCustomFontSizeClass,
	getCustomFontSizeStyle,
} from '@aktk/block-components/components/custom-font-size-picker/utils';

/**
 * Block.
 */
import {
	getLinkClasses,
	getLinkStyles,
	getWrapClasses,
	getWrapStyles,
} from './utils';
import { Icon } from './icon';
import type { Attributes } from './types';

// @ts-expect-error
function Save( { attributes } ) {
	const {
		content = '',
		url,
		iconLeft,
		iconSizeLeft,
		iconLeftBlank,
		iconRight,
		iconSizeRight,
		iconRightBlank,
		fontSize,
		customFontSize,
		gradient,
		linkTarget,
		rel,
	} = attributes as Attributes;

	const blockProps = useBlockProps.save( {
		className: getWrapClasses( { ...attributes } ),
		style: getWrapStyles( { ...attributes } ),
	} );
	const linkClasses = getLinkClasses( {
		...attributes,
		// @ts-expect-error
		fontSize: getCustomFontSizeClass( fontSize ),
		gradientClass: getGradientClass( gradient ),
	} );
	const linkStyles = getLinkStyles( {
		...attributes,
		// @ts-expect-error
		fontSize: getCustomFontSizeStyle( fontSize, customFontSize ),
	} );
	return (
		<>
			<div { ...blockProps }>
				<a
					href={ url }
					className={ linkClasses }
					style={ linkStyles }
					target={ linkTarget || undefined }
					rel={ rel || undefined }
				>
					<Icon.Content
						hasIcon={ !! iconLeft || !! iconLeftBlank }
						icon={ iconLeft }
						size={ iconSizeLeft }
					/>
					<RichText.Content
						tagName={ 'span' }
						value={ content }
						className={ 'ystdb-custom-button__content' }
					/>
					<Icon.Content
						hasIcon={ !! iconRight || !! iconRightBlank }
						icon={ iconRight }
						size={ iconSizeRight }
					/>
				</a>
			</div>
		</>
	);
}

export default Save;
