/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk dependencies.
 */
import { Panel } from '@aktk/block-components/components/panel';
import { NoticeSecondary } from '@aktk/block-components/components/notice';
/**
 * Plugin dependencies.
 */
import { Width } from './width';
import { Height } from './height';

//@ts-expect-error
export function SizePanel( props ) {
	return (
		<>
			<Panel title={ __( 'サイズ', 'ystandard-blocks' ) }>
				<div className={ '-mt-2 mb-2' }>
					<NoticeSecondary>
						{ __(
							'※アイコンのサイズではなく、アイコンを囲むボックスのサイズを設定します。背景色や枠線と合わせて利用してください。',
							'ystandard-blocks'
						) }
					</NoticeSecondary>
				</div>
				<Width { ...props } />
				<Height { ...props } />
			</Panel>
		</>
	);
}

export const SIZE_UNITS = [
	{ value: 'px', label: 'px', default: 0 },
	{ value: 'em', label: 'em', default: 0 },
	{ value: 'rem', label: 'rem', default: 0 },
	{ value: '%', label: '%', default: 0 },
	{ value: 'vw', label: 'vw', default: 0 },
	{ value: 'vh', label: 'vh', default: 0 },
	{ value: 'ch', label: 'ch', default: 0 },
];
