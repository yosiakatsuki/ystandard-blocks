import classnames from 'classnames';
import SVGIconSelect from '../../src/js/components/svg-icon-select/index';
import SVGIcon from '../../src/js/components/svg-icon';
import { sizing } from './config';

import {
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	PanelColorSettings,
	withColors,
	FontSizePicker,
	withFontSizes,
	URLInput,
} from '@wordpress/block-editor';

import { Fragment } from '@wordpress/element';

import {
	PanelBody,
	ToggleControl,
	TextControl,
	SelectControl,
} from '@wordpress/components';

import { compose } from '@wordpress/compose';

import { __ } from '@wordpress/i18n';

const NEW_TAB_REL = 'noreferrer noopener';

function svgIcon( props ) {
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
	const { icon, iconSize, align, url, rel, linkTarget } = attributes;

	const classes = classnames( className, 'ystdb-icon', {
		[ `has-text-align-${ align }` ]: align,
		[ textColor.class ]: textColor.class,
		[ fontSize.class ]: fontSize.class,
		[ `is-size--${ iconSize }` ]: iconSize,
	} );

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
					title={ __( 'Background & Text Color' ) }
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
				/>
				<PanelBody title={ __( 'サイズ設定', 'ystandard-blocks' ) }>
					<FontSizePicker
						label={ __( 'アイコンサイズ', 'ystandard-blocks' ) }
						value={ fontSize.size }
						onChange={ ( font ) => {
							setFontSize( font );
						} }
					/>
					<SelectControl
						label={ __( 'アイコン倍率', 'ystandard-blocks' ) }
						value={ iconSize }
						options={ sizing }
						onChange={ ( size ) => {
							setAttributes( { iconSize: size } );
						} }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Link settings' ) }>
					<ToggleControl
						label={ __( 'Open in new tab' ) }
						onChange={ ( value ) => {
							const newLinkTarget = value ? '_blank' : undefined;

							let updatedRel = rel;
							if ( newLinkTarget && ! rel ) {
								updatedRel = NEW_TAB_REL;
							} else if (
								! newLinkTarget &&
								rel === NEW_TAB_REL
							) {
								updatedRel = undefined;
							}

							setAttributes( {
								linkTarget: newLinkTarget,
								rel: updatedRel,
							} );
						} }
						checked={ linkTarget === '_blank' }
					/>
					<TextControl
						label={ __( 'Link rel' ) }
						value={ rel || '' }
						onChange={ ( value ) => {
							setAttributes( { rel: value } );
						} }
					/>
				</PanelBody>
			</InspectorControls>

			<div className={ classes } style={ styles }>
				{ !! icon ? (
					<SVGIcon name={ icon }/>
				) : (
					<div className={ 'ystdb-icon__select--no-icon' }>
						<SVGIcon name={ 'info' }/>
						<div>アイコンを選択</div>
					</div>
				) }
			</div>

			{ !! isSelected && (
				<div>
					<div className="ystdb-icon__select-start">
						<SVGIconSelect
							panelTitle={ __(
								'アイコン選択',
								'ystandard-blocks'
							) }
							iconControlTitle={ '' }
							selectedIcon={ icon }
							onClickIcon={ ( value ) => {
								setAttributes( { icon: value } );
							} }
						/>
					</div>
					<URLInput
						label={ __( 'Link' ) }
						className="ystdb-icon__link"
						value={ url }
						/* eslint-disable jsx-a11y/no-autofocus */
						autoFocus={ false }
						/* eslint-enable jsx-a11y/no-autofocus */
						onChange={ ( value ) =>
							setAttributes( { url: value } )
						}
						disableSuggestions={ ! isSelected }
						isFullWidth
						hasBorder
					/>
				</div>
			) }
		</Fragment>
	);
}

export default compose( [
	withColors( { textColor: 'color' } ),
	withFontSizes( 'fontSize' ),
] )( svgIcon );
