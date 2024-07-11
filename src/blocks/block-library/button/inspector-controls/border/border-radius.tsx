/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Plugin dependencies.
 */
import { BorderRadiusControl } from '@aktk/blocks/components/border-radius-control';

// @ts-expect-error
export function BorderRadius( props ) {
	const { attributes, setAttributes } = props;
	const { borderRadius } = attributes;

	// @ts-expect-error
	const handleOnChange = ( value ) => {
		setAttributes( { borderRadius: value || undefined } );
	};
	const borderRadiusValue = borderRadius?.borderRadius || borderRadius;

	return (
		<>
			<BorderRadiusControl
				onChange={ handleOnChange }
				values={ borderRadiusValue }
			/>
		</>
	);
}
