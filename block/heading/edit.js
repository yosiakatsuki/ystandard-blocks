import classnames from 'classnames';

import {
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	PanelColorSettings,
	withColors,
	FontSizePicker,
	withFontSizes,
} from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';

import {
	Fragment,
} from '@wordpress/element';

import {
	PanelBody,
	BaseControl,
	ToggleControl,
	TextControl,
	SelectControl,
} from '@wordpress/components';

import {
	compose,
} from '@wordpress/compose';

import { __ } from '@wordpress/i18n';

function customHeading( props ) {
	const {
		textColor,
		setTextColor,
		attributes,
		setAttributes,
		isSelected,
		fontSize,
		setFontSize,
		subTextSize,
		setSubTextSize,
		onReplace,
		mergeBlocks,
	} = props;
	const {
		content,
		align,
		subText,
		subTextTest,
	} = attributes;

	const classes = classnames(
		'ystdb-heading',
		{
			[ `has-text-align-${ align }` ]: align,
			[ textColor.class ]: textColor.class,
			[ fontSize.class ]: fontSize.class,
		}
	);

	const styles = {
		color: textColor.color,
		fontSize: fontSize.size ? fontSize.size + 'px' : undefined,
	};

	return (
		<Fragment>
			<BlockControls>
				<AlignmentToolbar
					value={ align }
					onChange={ ( nextAlign ) => {
						setAttributes( { align: nextAlign } );
					} }
				/>
			</BlockControls>
			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Color Settings' ) }
					initialOpen={ true }
					colorSettings={ [
						{
							value: textColor.color,
							onChange: ( color ) => {
								setTextColor( color );
							},
							label: __( 'Text Color' ),
						},
					] }
				>
				</PanelColorSettings>
				<PanelBody title={ __( 'サイズ設定', 'ystandard-blocks' ) }>
					<FontSizePicker
						label={ __( '文字サイズ', 'ystandard-blocks' ) }
						value={ fontSize.size }
						onChange={ ( font ) => {
							setFontSize( font );
						} }
					/>
				</PanelBody>
			</InspectorControls>

			<div className={ classes } style={ styles }>
				<RichText
					identifier="content"
					tagName={ 'h2' }
					placeholder={ __( 'Add text…' ) }
					value={ content }
					onChange={ ( value ) => {
						setAttributes( {
							content: value
						} );
					} }
					onMerge={ mergeBlocks }
					onSplit={ ( value ) => {
						if ( ! value ) {
							return createBlock( 'core/paragraph' );
						}

						return createBlock( 'ystdb/heading', {
							...attributes,
							content: value,
						} );
					} }
					onReplace={ onReplace }
					onRemove={ () => onReplace( [] ) }
				/>
			</div>
		</Fragment>
	);
}

export default compose( [
	withColors( { textColor: 'color' } ),
	withFontSizes( 'fontSize', { subTextSize: 'fontSize' } ),
] )( customHeading );
