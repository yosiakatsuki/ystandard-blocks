/**
 * WordPress dependencies.
 */
import {
	useBlockProps,
	withColors,
	// @ts-expect-error
	__experimentalUseGradient,
} from '@wordpress/block-editor';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import { SvgIcon } from '@aktk/block-components/components/svg-icon';

/**
 * Block dependencies.
 */
import { InspectorControls } from './inspector-controls';
import { BlockControls } from './block-controls';
import { getBlockClasses, getWrapClasses, getWrapStyles } from './utils';

// @ts-expect-error
function Edit( props ) {
	const { textColor, attributes, className } = props;

	// attributes.
	const { icon } = attributes;

	// ブロックの基本プロパティ.
	const blockProps = useBlockProps( {
		className: getBlockClasses( {
			...attributes,
			className,
		} ),
	} );

	const wrapProps = {
		className: getWrapClasses( {
			...attributes,
			textColor: textColor?.class || '',
		} ),
		style: getWrapStyles( {
			...attributes,
			customTextColor: textColor?.color || '',
		} ),
	};

	return (
		<>
			<BlockControls { ...props } />
			<InspectorControls { ...props } />

			{ /* アイコン表示 */ }
			<div { ...blockProps }>
				<div { ...wrapProps }>
					<SvgIcon name={ icon || 'info' } />
				</div>
			</div>
		</>
	);
}

// @ts-expect-error
export default compose( [
	withColors( 'backgroundColor', { textColor: 'color' } ),
] )( Edit );
