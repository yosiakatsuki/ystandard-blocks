import { BaseControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
/**
 * yStandard
 */
import HorizonButtons from '@aktk/components/horizon-buttons';
import Notice from '@aktk/components/notice';

const OPTIONS = [
	{
		label: __('表示', 'ystandard-blocks'),
		value: 'only',
	},
	{
		label: __('非表示', 'ystandard-blocks'),
		value: 'hide',
	},
];

const FilterType = (props) => {
	const { attributes, setAttributes } = props;
	const { taxFilterType } = attributes;
	const _selectedValue = taxFilterType || 'only';
	return (
		<BaseControl
			id={'filter-type'}
			label={__('表示・非表示タイプ', 'ystandard-blocks')}
		>
			<HorizonButtons>
				{OPTIONS.map((item) => {
					return (
						<Button
							key={item.value}
							isSecondary={item.value !== _selectedValue}
							isPrimary={item.value === _selectedValue}
							onClick={() => {
								setAttributes({
									taxFilterType: item.value,
								});
							}}
						>
							<span>{item.label}</span>
						</Button>
					);
				})}
			</HorizonButtons>
			<Notice type={'help'}>
				{__(
					'選択したカテゴリー・タグ・タクソノミーがついたページのみでこのブロックが表示されるか、非表示になるか選択します',
					'ystandard-blocks'
				)}
			</Notice>
		</BaseControl>
	);
};
export default FilterType;
