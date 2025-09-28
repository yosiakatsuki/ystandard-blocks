import SVGIconSelect from '@aktk/components/svg-icon-select/index';
import { sizing } from './config';

import {
	InspectorControls,
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

/**
 * Aktk Dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';

const NEW_TAB_REL = 'noreferrer noopener';

function svgIcon( props ) {
	const { attributes, setAttributes, isSelected, fontSize, setFontSize } =
		props;
	const { icon, iconSize, url, rel, linkTarget } = attributes;

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={ __( 'アイコン設定', 'ystandard-blocks' ) }>
					<FontSizePicker
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						label={ __( 'アイコンサイズ', 'ystandard-blocks' ) }
						value={ fontSize.size }
						onChange={ ( font ) => {
							setFontSize( font );
						} }
					/>
					<div style={ { marginTop: '1.5em' } }>
						<SelectControl
							label={ __( 'アイコン倍率', 'ystandard-blocks' ) }
							value={ iconSize }
							options={ sizing }
							onChange={ ( size ) => {
								setAttributes( { iconSize: size } );
							} }
							__next40pxDefaultSize
							__nextHasNoMarginBottom
						/>
					</div>
				</PanelBody>
				<PanelBody title={ __( 'リンク設定', 'ystandard-blocks' ) }>
					<URLInput
						label={ __( 'リンク', 'ystandard-blocks' ) }
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
						__nextHasNoMarginBottom
					/>
					<ToggleControl
						label={ __( '新しいタブで開く', 'ystandard-blocks' ) }
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
						__nextHasNoMarginBottom
					/>
					<TextControl
						label={ __( 'リンクrel', 'ystandard-blocks' ) }
						value={ rel || '' }
						onChange={ ( value ) => {
							setAttributes( { rel: value } );
						} }
						__nextHasNoMarginBottom
						__next40pxDefaultSize
					/>
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);
}

export default compose( [
	withColors( { textColor: 'color' } ),
	withFontSizes( 'fontSize' ),
] )( svgIcon );
