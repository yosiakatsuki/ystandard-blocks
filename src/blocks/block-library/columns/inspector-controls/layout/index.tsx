import { PanelBody, BaseControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import Notice from '@aktk/blocks-old/components/notice';

/**
 * レイアウト
 * @param attributes.attributes
 * @param attributes
 * @param setAttributes
 * @param attributes.setAttributes
 * @class
 */
// @ts-ignore
const PanelLayout = ( { attributes, setAttributes } ) => {
	const { reverse } = attributes;
	const handleOnChange = () => {
		setAttributes( {
			reverse: ! reverse,
		} );
	};
	return (
		<PanelBody title={ __( 'レイアウト', 'ystandard-blocks' ) }>
			<BaseControl
				id={ 'column-reverse' }
				label={ __( '表示順序を逆順にする', 'ystandard-blocks' ) }
			>
				<ToggleControl
					label={ __( '逆順にする', 'ystandard-blocks' ) }
					checked={ reverse }
					onChange={ handleOnChange }
				/>
				{ /* @ts-ignore */ }
				<Notice type={ 'help' } style={ { marginTop: '-24px' } }>
					※行内での表示が逆順になります。1行で複数列のカラムを表示するときに便利な設定です。
					<br />
					※公開ページのみ逆順で表示され、編集画面では追加した順で表示されます。
				</Notice>
			</BaseControl>
		</PanelBody>
	);
};
export default PanelLayout;
