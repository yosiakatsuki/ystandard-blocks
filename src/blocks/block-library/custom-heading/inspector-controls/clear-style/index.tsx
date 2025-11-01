/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import { Panel } from '@aktk/block-components/components/panel';
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import ToggleControl from '@aktk/block-components/wp-controls/toggle-control';

// @ts-ignore.
export function ClearStyle( props ) {
	const { attributes, setAttributes } = props;
	const { clearStyle } = attributes;
	return (
		<Panel title={ __( 'スタイル削除', 'ystandard-blocks' ) }>
			<BaseControl>
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
		</Panel>
	);
}
