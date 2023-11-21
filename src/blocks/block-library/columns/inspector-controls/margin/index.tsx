import { PanelBody } from '@wordpress/components';
import ResponsiveMarginControl from '@aktk/blocks/deprecated/components/responsive-margin-control';
import { __ } from '@wordpress/i18n';

// @ts-ignore
const PanelMargin = ({ attributes, setAttributes }) => {
	const { margin } = attributes;
	// @ts-ignore
	const handleMarginOnChange = (newValue) => {
		setAttributes({
			margin: newValue,
		});
	};
	return (
		<PanelBody title={__('余白', 'ystandard-blocks')}>
			{/* @ts-ignore */}
			<ResponsiveMarginControl
				label={__('外側余白(margin)', 'ystandard-blocks')}
				onChange={handleMarginOnChange}
				values={margin}
			/>
		</PanelBody>
	);
};
export default PanelMargin;
