import classnames from 'classnames';
import { exAttributes } from './config';
import isApplyExtension from '../../src/js/util/_isApplyExtension';

import { hasBlockSupport, getBlockType } from '@wordpress/blocks';

import { InspectorControls } from '@wordpress/block-editor';

import { PanelBody, ToggleControl } from '@wordpress/components';

import { addFilter } from '@wordpress/hooks';

import { createHigherOrderComponent } from '@wordpress/compose';

import { __ } from '@wordpress/i18n';

addFilter(
	'blocks.registerBlockType',
	'ystdb/hide-by-device/attributes',
	( settings ) => {
		if ( isApplyExtension( settings.name ) ) {
			settings.attributes = {
				...settings.attributes,
				...exAttributes,
			};
		}
		return settings;
	}
);

addFilter(
	'editor.BlockEdit',
	'ystdb/hide-by-device/block-edit',
	createHigherOrderComponent( ( BlockEdit ) => {
		return ( props ) => {
			const { attributes, setAttributes, name } = props;

			if ( ! isApplyExtension( name ) ) {
				return <BlockEdit { ...props } />;
			}

			const { ystdbHideSp, ystdbHideMd, ystdbHideLg } = attributes;

			const blockType = getBlockType( name );
			if ( ! blockType ) {
				return <BlockEdit { ...props } />;
			}

			if ( ! hasBlockSupport( blockType, 'customClassName', true ) ) {
				return <BlockEdit { ...props } />;
			}
			if ( !! attributes.className ) {
				attributes.className = attributes.className
					.replace( /ystdb-hide--(sp|md|lg)/g, '' )
					.trim();
			}

			attributes.className = classnames( attributes.className, {
				'ystdb-hide--sp': ystdbHideSp,
				'ystdb-hide--md': ystdbHideMd,
				'ystdb-hide--lg': ystdbHideLg,
			} );

			const panelOpen = ystdbHideSp || ystdbHideMd || ystdbHideLg;

			return (
				<>
					<BlockEdit { ...props } />

					<InspectorControls>
						<PanelBody
							title={ __(
								'[ys]デバイス別非表示設定',
								'ystandard-blocks'
							) }
							initialOpen={ panelOpen }
						>
							<div className={ `ystdb-info__label` }>
								各デバイスのサイズで非表示にできます。
							</div>
							<div style={ { marginTop: '1em' } }>
								<ToggleControl
									label={ __(
										'スマートフォンで非表示',
										'ystandard-blocks'
									) }
									checked={ ystdbHideSp }
									onChange={ ( value ) => {
										setAttributes( { ystdbHideSp: value } );
									} }
								/>

								<ToggleControl
									label={ __(
										'タブレットで非表示',
										'ystandard-blocks'
									) }
									checked={ ystdbHideMd }
									onChange={ ( value ) => {
										setAttributes( { ystdbHideMd: value } );
									} }
								/>

								<ToggleControl
									label={ __(
										'PCで非表示',
										'ystandard-blocks'
									) }
									checked={ ystdbHideLg }
									onChange={ ( value ) => {
										setAttributes( { ystdbHideLg: value } );
									} }
								/>
							</div>
						</PanelBody>
					</InspectorControls>
				</>
			);
		};
	}, 'withyStandardBlocksHideByDeviceBlockEdit' )
);
