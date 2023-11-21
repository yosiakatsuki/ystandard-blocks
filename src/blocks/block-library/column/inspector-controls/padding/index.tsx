/**
 * WordPress.
 */
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
/**
 * yStandard.
 */
import ResponsivePaddingControl from '@aktk/blocks/deprecated/components/responsive-padding-control';

// @ts-ignore
const PanelPadding = ({ attributes, setAttributes }) => {
	const { padding } = attributes;
	// @ts-ignore
	const handlePaddingOnChange = (value) => {
		setAttributes({
			padding: value,
		});
	};
	return (
		<PanelBody title={__('余白設定', 'ystandard-blocks')}>
			{/* @ts-ignore */}
			<ResponsivePaddingControl
				values={padding}
				onChange={handlePaddingOnChange}
			/>
		</PanelBody>
	);
};
export default PanelPadding;
