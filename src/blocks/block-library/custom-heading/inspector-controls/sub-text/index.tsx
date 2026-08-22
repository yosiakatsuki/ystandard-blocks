/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import { Panel } from '@aktk/block-components/components/panel';
import { ToggleGroup } from '@aktk/block-components/components/toggle-group';

/**
 * Block dependencies.
 */
import type { Attributes } from '../../types';

// @ts-ignore.
export function SubTextPanel( props ) {
	const { attributes, setAttributes } = props;
	const { hasSubText } = attributes as Attributes;

	return (
		<Panel title={ __( 'サブテキスト設定', 'ystandard-blocks' ) }>
			<ToggleGroup
				label={ __( '見出し構成', 'ystandard-blocks' ) }
				value={ hasSubText ? 'with-sub-text' : 'heading-only' }
				options={ [
					{
						label: __( '見出しのみ', 'ystandard-blocks' ),
						value: 'heading-only',
					},
					{
						label: `${ __(
							'サブテキスト',
							'ystandard-blocks'
						) }\n${ __( 'あり', 'ystandard-blocks' ) }`,
						value: 'with-sub-text',
					},
				] }
				onChange={ ( value ) => {
					setAttributes( {
						hasSubText: 'with-sub-text' === value,
					} );
				} }
				isBlock
				isMultiline
			/>
		</Panel>
	);
}
