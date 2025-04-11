/**
 * WordPress.
 */
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import type { BlockAttributes, BlockEditProps } from '@wordpress/blocks';

/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';

/**
 * Plugin.
 */
import Notice from '@aktk/blocks/components/notice';
import HorizonButtons from '@aktk/blocks/components/horizon-buttons';

const OPTIONS = [
	{
		label: __( '表示', 'ystandard-blocks' ),
		value: 'only',
	},
	{
		label: __( '非表示', 'ystandard-blocks' ),
		value: 'hide',
	},
];

export default function FilterType( props: BlockEditProps< BlockAttributes > ) {
	const { attributes, setAttributes } = props;
	const { taxFilterType } = attributes;
	const _selectedValue = taxFilterType || 'only';
	return (
		<BaseControl
			id={ 'filter-type' }
			label={ __( '表示・非表示タイプ', 'ystandard-blocks' ) }
		>
			<HorizonButtons>
				{ OPTIONS.map( ( item ) => {
					const variant =
						item.value === _selectedValue ? 'primary' : 'secondary';
					return (
						<Button
							key={ item.value }
							variant={ variant }
							onClick={ () => {
								setAttributes( {
									taxFilterType: item.value,
								} );
							} }
						>
							<span>{ item.label }</span>
						</Button>
					);
				} ) }
			</HorizonButtons>
			<Notice type={ 'help' }>
				{ __(
					'選択したカテゴリー・タグ・タクソノミーがついたページのみでこのブロックが表示されるか、非表示になるか選択します',
					'ystandard-blocks'
				) }
			</Notice>
		</BaseControl>
	);
}
