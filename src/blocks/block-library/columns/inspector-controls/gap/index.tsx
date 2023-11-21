import { PanelBody } from '@wordpress/components';
import ResponsiveGapControl from '@aktk/blocks/deprecated/components/responsive-gap-control';
import { __ } from '@wordpress/i18n';

/**
 * カラム間余白
 * @param attributes.attributes
 * @param attributes
 * @param setAttributes
 * @param attributes.setAttributes
 * @function
 */
// @ts-ignore
const PanelGap = ({ attributes, setAttributes }) => {
	const { gap } = attributes;
	// @ts-ignore
	const handleGapOnChange = (newValue) => {
		setAttributes({
			gap: newValue,
		});
	};
	return (
		<PanelBody title={__('カラム間余白', 'ystandard-blocks')}>
			{/* @ts-ignore */}
			<ResponsiveGapControl
				label={__('カラム間の余白(gap)', 'ystandard-blocks')}
				onChange={handleGapOnChange}
				values={gap}
			/>
		</PanelBody>
	);
};
export default PanelGap;
