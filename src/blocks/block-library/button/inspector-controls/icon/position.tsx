/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import RadioControl from '@aktk/block-components/wp-controls/radio-control';
import { NoticeInfo } from '@aktk/block-components/components/notice';

const BUTTONS = [
	{
		label: __( 'テキストの近くに配置する', 'ystandard-blocks' ),
		value: 'normal',
	},
	{
		label: __( 'ボタン端に配置する', 'ystandard-blocks' ),
		value: 'space-between',
	},
];

// @ts-expect-error
export function IconPosition( props ) {
	const { attributes, setAttributes } = props;
	const { iconPosition } = attributes;

	const handleOnChange = ( value: string ) => {
		setAttributes( {
			iconPosition: 'normal' === value ? undefined : value,
		} );
	};

	return (
		<BaseControl>
			<RadioControl
				label={ __( 'アイコンの位置', 'ystandard-blocks' ) }
				selected={ ! iconPosition ? 'normal' : iconPosition }
				options={ BUTTONS }
				onChange={ handleOnChange }
			/>
			{ 'space-between' === iconPosition && (
				<NoticeInfo>
					{ __(
						'「ボタン外側に配置する」を選択する場合は合わせてボタンの幅も設定してください。',
						'ystandard-blocks'
					) }
				</NoticeInfo>
			) }
		</BaseControl>
	);
}
