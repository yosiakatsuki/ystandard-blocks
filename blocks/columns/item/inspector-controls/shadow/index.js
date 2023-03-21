/**
 * WordPress.
 */
import { PanelBody, BaseControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const PanelShadow = ({ attributes, setAttributes }) => {
	const { shadow } = attributes;
	const handleOnClick = (value) => {
		setAttributes({
			shadow: value,
		});
	};
	return (
		<PanelBody title={__('影設定', 'ystandard-blocks')}>
			<BaseControl>
				<ToggleControl
					label={__('影をつける', 'ystandard-blocks')}
					checked={shadow}
					onChange={() => {
						handleOnClick(!shadow);
					}}
				/>
			</BaseControl>
		</PanelBody>
	);
};
export default PanelShadow;
