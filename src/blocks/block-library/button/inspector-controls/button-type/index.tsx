/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * WordPress dependencies.
 */
import { applyFilters } from '@wordpress/hooks';
/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import { Panel } from '@aktk/block-components/components/panel';
import { ButtonGrid } from '@aktk/block-components/components/buttons';
import { NoticeSecondary } from '@aktk/block-components/components/notice';

const BUTTON_TYPES = [
	{
		value: '',
		label: __( 'デフォルト', 'ystandard-blocks' ),
	},
	{
		value: 'outline',
		label: __( 'アウトライン', 'ystandard-blocks' ),
	},
	{
		value: 'link',
		label: __( 'リンク', 'ystandard-blocks' ),
	},
];

// @ts-expect-error
export function ButtonTypePanel( props ) {
	const { attributes, setAttributes } = props;
	const { buttonType } = attributes;
	const handleOnchange = ( value: string ) => {
		setAttributes( { buttonType: value || undefined } );
	};

	// ボタンタイプを拡張できるようにする.
	const buttonTypes = applyFilters(
		'ystdb.block.custom-button.buttonType',
		BUTTON_TYPES
	) as Array< {
		value: string;
		label: string;
	} >;

	return (
		<>
			<Panel
				title={ __( 'ボタンタイプ', 'ystandard-blocks' ) }
				initialOpen={ true }
			>
				<BaseControl>
					<ButtonGrid
						current={ buttonType || '' }
						onChange={ handleOnchange }
						buttons={ buttonTypes }
					/>
					<NoticeSecondary>
						{ __(
							'※文字色・背景色・枠線が設定されている場合、そちらが優先されます。',
							'ystandard-blocks'
						) }
					</NoticeSecondary>
				</BaseControl>
			</Panel>
		</>
	);
}
