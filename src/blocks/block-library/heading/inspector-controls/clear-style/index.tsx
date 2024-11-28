/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, BaseControl, ToggleControl } from '@wordpress/components';

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
				/>
			</BaseControl>
		</PanelBody>
	);
}
