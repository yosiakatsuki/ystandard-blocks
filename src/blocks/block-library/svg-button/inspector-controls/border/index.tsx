/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl } from '@wordpress/components';

// @ts-ignore
export function Border(props) {
	const { attributes, setAttributes } = props;
	const { borderRadius } = attributes;
	return (
		<>
			<PanelBody title={__('枠線設定', 'ystandard-blocks')}>
				<RangeControl
					value={borderRadius}
					label={__('枠線の角丸', 'ystandard-blocks')}
					min={0}
					max={100}
					initialPosition={4}
					allowReset
					onChange={(value) => {
						setAttributes({ borderRadius: value });
					}}
				/>
			</PanelBody>
		</>
	);
}
