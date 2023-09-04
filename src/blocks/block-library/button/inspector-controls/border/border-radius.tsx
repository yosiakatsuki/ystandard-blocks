/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Plugin dependencies.
 */
import {
	ValueInput,
	ValueInputOnChange,
} from '@aktk/blocks/components/value-input';

// @ts-expect-error
export function BorderRadius(props) {
	const { attributes, setAttributes } = props;
	const { borderRadius } = attributes;

	const handleOnChange: ValueInputOnChange = (value) => {
		setAttributes({ borderRadius: value || undefined });
	};

	return (
		<>
			<ValueInput
				label={__('角丸', 'ystandard-blocks')}
				value={borderRadius}
				onChange={handleOnChange}
			/>
		</>
	);
}
