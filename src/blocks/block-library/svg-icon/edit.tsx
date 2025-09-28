import classnames from 'classnames';
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
import { SvgIcon } from '@aktk/block-components/components/svg-icon';
import {
	getCustomFontSizeClass,
	getCustomFontSizeStyle,
} from '@aktk/block-components/components/custom-font-size-picker';

/**
 * Block dependencies.
 */
import { InspectorControls } from './inspector-controls';
import { BlockControls } from './block-controls';

// @ts-expect-error
function Edit( props ) {
	const {
		textColor,
		setTextColor,
		attributes,
		setAttributes,
		isSelected,
		fontSize,
		setFontSize,
		className,
	} = props;

	// attributes.
	const { icon, align, iconSize } = attributes;

	console.log( { fontSize } );
	// ブロックの基本プロパティ.
	const blockProps = useBlockProps( {
		className: classnames( className, 'ystdb-icon', {
			[ `has-text-align-${ align }` ]: align,
			[ textColor?.class ]: textColor?.class,
			[ fontSize?.class ]: fontSize?.class,
			[ `is-size--${ iconSize }` ]: iconSize,
		} ),
		style: {
			color: textColor?.color,
			fontSize: fontSize?.size ? fontSize.size : undefined,
		},
	} );

	return (
		<>
			<BlockControls { ...props } />
			<InspectorControls { ...props } />

			{ /* アイコン表示 */ }
			<div { ...blockProps }>
				{ !! icon ? (
					<SvgIcon name={ icon } />
				) : (
					<div className={ 'ystdb-icon__select--no-icon' }>
						<SvgIcon name={ 'info' } />
						<p>
							「アイコン設定」から
							<br />
							アイコンを選択
						</p>
					</div>
				) }
			</div>
		</>
	);
}

// @ts-expect-error
export default compose( [
	withColors( 'backgroundColor', { textColor: 'color' } ),
] )( Edit );
