/**
 * WordPress dependencies.
 */
import { useBlockProps, withColors } from '@wordpress/block-editor';
import { compose } from '@wordpress/compose';

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
	const { textColor, backgroundColor, attributes, className } = props;

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
			backgroundColor: backgroundColor?.class || '',
		} ),
		style: getWrapStyles( {
			...attributes,
			customTextColor: textColor?.color || '',
			customBackgroundColor: backgroundColor?.color || '',
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
