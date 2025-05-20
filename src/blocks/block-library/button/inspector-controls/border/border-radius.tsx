/**
 * Aktk dependencies.
 */
import { BorderRadiusControl } from '@aktk/block-components/components/border-radius-control';
import BaseControl from '@aktk/block-components/wp-controls/base-control';

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
		<BaseControl>
			<BorderRadiusControl
				onChange={ handleOnChange }
				values={ borderRadiusValue }
			/>
		</BaseControl>
	);
}
