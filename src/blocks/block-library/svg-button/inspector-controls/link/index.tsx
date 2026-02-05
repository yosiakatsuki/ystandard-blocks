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
						setAttributes( {
							linkTarget: newLinkTarget,
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
