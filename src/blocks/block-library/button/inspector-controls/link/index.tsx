/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import TextControl from '@aktk/block-components/wp-controls/text-control';
import ToggleControl from '@aktk/block-components/wp-controls/toggle-control';
import { Panel } from '@aktk/block-components/components/panel';
import { BUTTON_NEW_TAB_REL } from '@aktk/block-components/config';

// @ts-expect-error
export function Link( props ) {
	const { attributes, setAttributes } = props;
	const { linkTarget, rel } = attributes;

	const handleLinkTargetChange = ( value: boolean ) => {
		const newLinkTarget = value ? '_blank' : undefined;
		let updatedRel = rel;
		if ( newLinkTarget && ! rel ) {
			updatedRel = BUTTON_NEW_TAB_REL;
		} else if ( ! newLinkTarget && rel === BUTTON_NEW_TAB_REL ) {
			updatedRel = undefined;
		}
		setAttributes( {
			linkTarget: newLinkTarget,
			rel: updatedRel,
		} );
	};
	return (
		<Panel title={ __( 'リンク設定', 'ystandard-blocks' ) }>
			<BaseControl>
				<ToggleControl
					label={ __( '新しいタブで開く', 'ystandard-blocks' ) }
					onChange={ handleLinkTargetChange }
					checked={ linkTarget === '_blank' }
				/>
			</BaseControl>
			<BaseControl>
				<TextControl
					label={ __( 'リンクrel属性', 'ystandard-blocks' ) }
					value={ rel || '' }
					onChange={ ( value ) => {
						setAttributes( { rel: value } );
					} }
				/>
			</BaseControl>
		</Panel>
	);
}
