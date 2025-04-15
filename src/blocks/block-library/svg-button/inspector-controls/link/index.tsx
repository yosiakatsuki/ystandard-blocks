/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
/**
 * Aktk dependencies.
 */
import ToggleControl from '@aktk/block-components/wp-controls/toggle-control';
import TextControl from '@aktk/block-components/wp-controls/text-control';

/**
 * Plugin dependencies.
 */
import { BUTTON_NEW_TAB_REL } from '@aktk/blocks/config';

// @ts-ignore
export function Link( props ) {
	const { attributes, setAttributes } = props;
	const { linkTarget, rel } = attributes;
	return (
		<>
			<PanelBody title={ __( 'Link settings' ) }>
				<ToggleControl
					label={ __( 'Open in new tab' ) }
					onChange={ ( value ) => {
						const newLinkTarget = value ? '_blank' : undefined;
						let updatedRel = rel;
						if ( newLinkTarget && ! rel ) {
							updatedRel = BUTTON_NEW_TAB_REL;
						} else if (
							! newLinkTarget &&
							rel === BUTTON_NEW_TAB_REL
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
		</>
	);
}
