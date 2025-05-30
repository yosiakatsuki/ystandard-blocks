/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk dependencies.
 */
import {
	CustomURLInput,
	type CustomURLInputValue,
} from '@aktk/block-components/components/url-input';
import { Panel } from '@aktk/block-components/components/panel';

// @ts-expect-error
export function Link( props ) {
	const { attributes, setAttributes } = props;
	const { linkTarget, rel, url } = attributes;

	const handleCustomURLInputChange = ( value: CustomURLInputValue ) => {
		const { url: newURL, linkTarget: newLinkTarget, rel: newRel } = value;
		setAttributes( {
			url: newURL,
			linkTarget: newLinkTarget,
			rel: newRel,
		} );
	};

	return (
		<Panel
			title={ __( 'リンク設定', 'ystandard-blocks' ) }
			initialOpen={ true }
		>
			<CustomURLInput
				URLInputLabel={ __( 'リンク先URL', 'ystandard-blocks' ) }
				linkTargetLabel={ __( '新しいタブで開く', 'ystandard-blocks' ) }
				linkRelInputLabel={ __( 'リンクrel属性', 'ystandard-blocks' ) }
				url={ url }
				linkTarget={ linkTarget }
				rel={ rel }
				onChange={ handleCustomURLInputChange }
			/>
		</Panel>
	);
}
