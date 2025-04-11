/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl } from '@wordpress/components';
/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';

// @ts-ignore
export function ClearStyle( props ) {
	const { attributes, setAttributes } = props;
	const { clearStyle } = attributes;

	return (
		<PanelBody
			title={ __( 'スタイル削除', 'ystandard-blocks' ) }
			initialOpen={ false }
		>
			<BaseControl id={ 'clear-style' }>
				<ToggleControl
					label={ __(
						'テーマの見出しスタイルをクリアする',
						'ystandard-blocks'
					) }
					onChange={ () => {
						setAttributes( {
							clearStyle: ! clearStyle,
						} );
					} }
					checked={ clearStyle }
					__nextHasNoMarginBottom
				/>
			</BaseControl>
		</PanelBody>
	);
}
