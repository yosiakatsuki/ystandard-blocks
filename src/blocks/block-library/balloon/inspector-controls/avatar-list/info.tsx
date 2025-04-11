/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk Dependencies.
 */
import { ManualLink } from '@aktk/block-components/components/manual-link';
import BaseControl from '@aktk/block-components/wp-controls/base-control';

const MANUAL_LINK_URL =
	'https://wp-ystandard.com/manual/ystdb-balloon-avatar-setting/';

export default function AvatarListInfo() {
	return (
		<BaseControl>
			<div className={ 'text-fz-xs' }>
				<div className={ 'text-gray-400 [&>p]:!text-[11px]' }>
					<p>
						{ __(
							'登録済みのアバター画像はありません。',
							'ystandard-blocks'
						) }
					</p>
					<p>
						{ __(
							'「yStandard Blocks」設定画面の「吹き出し登録」からよく使うアバター画像を登録できます。',
							'ystandard-blocks'
						) }
					</p>
				</div>
				<p>
					<ManualLink url={ MANUAL_LINK_URL } />
				</p>
			</div>
		</BaseControl>
	);
}
