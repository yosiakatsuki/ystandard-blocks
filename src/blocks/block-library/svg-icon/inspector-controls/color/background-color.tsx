/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import { ColorPalette } from '@aktk/block-components/components/color-pallet-control';
import { NoticeSecondary } from '@aktk/block-components/components/notice';

// @ts-expect-error
export function BackgroundColor( props ) {
	const { backgroundColor, setBackgroundColor } = props;
	return (
		<>
			<BaseControl
				id={ 'text-color' }
				label={ __( '背景色', 'ystandard-blocks' ) }
			>
				<ColorPalette
					label={ __( '背景色', 'ystandard-blocks' ) }
					value={ backgroundColor.color }
					onChange={ setBackgroundColor }
					enableTransparent={ true }
				/>
				<NoticeSecondary>
					{ __(
						'※アイコン周りの背景色を設定できます。内側余白も合わせて調整してください。',
						'ystandard-blocks'
					) }
				</NoticeSecondary>
			</BaseControl>
		</>
	);
}
