/**
 * WordPress
 */
import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import type { BlockAttributes, BlockEditProps } from '@wordpress/blocks';
/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
/**
 * Plugin.
 */
import Panel from '@aktk/blocks/components/panel';
import Notice from '@aktk/blocks/components/notice';

/**
 * 画面サイズ別非表示設定
 *
 * @param {Object}   props
 * @param {Object}   props.attributes
 * @param {Function} props.setAttributes
 * @class
 */
const PanelDevice = ( {
	attributes,
	setAttributes,
}: BlockEditProps< BlockAttributes > ) => {
	// @ts-ignore
	const { hideSp, hideMd, hideLg } = attributes;
	return (
		<Panel
			title={ __( '画面サイズ別非表示設定', 'ystandard-blocks' ) }
			initialOpen={ hideSp || hideMd || hideLg }
		>
			<BaseControl id={ 'notice' }>
				<Notice type={ 'help' }>
					{ __(
						'各デバイスの画面サイズでブロックを非表示にできます。',
						'ystandard-blocks'
					) }
				</Notice>
			</BaseControl>
			<BaseControl id={ 'device' }>
				<ToggleControl
					label={ __(
						'スマートフォンサイズで非表示',
						'ystandard-blocks'
					) }
					checked={ hideSp }
					onChange={ ( value ) => {
						setAttributes( { hideSp: value } );
					} }
					__nextHasNoMarginBottom
				/>

				<ToggleControl
					label={ __(
						'タブレットサイズで非表示',
						'ystandard-blocks'
					) }
					checked={ hideMd }
					onChange={ ( value ) => {
						setAttributes( { hideMd: value } );
					} }
					__nextHasNoMarginBottom
				/>

				<ToggleControl
					label={ __( 'PCサイズで非表示', 'ystandard-blocks' ) }
					checked={ hideLg }
					onChange={ ( value ) => {
						setAttributes( { hideLg: value } );
					} }
					__nextHasNoMarginBottom
				/>
			</BaseControl>
		</Panel>
	);
};
export default PanelDevice;
