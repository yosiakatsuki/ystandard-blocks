/**
 * WordPress
 */
import { __ } from '@wordpress/i18n';
/**
 * yStandard.
 */
import ResponsiveToggle from '@aktk/blocks/deprecated/components/responsive-toggle';
import Notice, { noticeType } from '@aktk/blocks/deprecated/components/notice';
import { isObject } from '@aktk/blocks/deprecated/utils/object';

// @ts-ignore
const AutoWidth = ({ attributes, setAttributes }) => {
	const { isAutoWidth, width } = attributes;
	// @ts-ignore
	const handleOnChange = (value) => {
		setAttributes({
			isAutoWidth: value,
		});
	};

	return (
		<>
			<ResponsiveToggle
				panelLabel={__('幅自動調整', 'ystandard-blocks')}
				toggleLabel={__('幅を自動で伸縮する', 'ystandard-blocks')}
				values={isAutoWidth}
				onChange={handleOnChange}
			/>
			{isObject(isAutoWidth) && isObject(width) && (
				// @ts-ignore
				<Notice type={noticeType.warning}>
					<div>
						{__(
							'「カラム幅」と「幅を自動で伸縮する」を両方指定した場合、「カラム幅」が優先されます。',
							'ystandard-blocks'
						)}
					</div>
				</Notice>
			)}
		</>
	);
};

export default AutoWidth;
