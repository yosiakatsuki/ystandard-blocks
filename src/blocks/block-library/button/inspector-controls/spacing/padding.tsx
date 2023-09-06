/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Plugin dependencies.
 */
import { SpacingSize } from '@aktk/blocks/components/spacing-size';

// @ts-expect-error
export function Padding(props) {
	const handleOnChange = (value) => {
		// console.log({ padding: value });
	};
	return (
		<>
			<SpacingSize onChange={handleOnChange} />
		</>
	);
}
