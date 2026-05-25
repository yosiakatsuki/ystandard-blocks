/**
 * Aktk dependencies.
 */
import { FontWeightControl } from '@aktk/block-components/wp-controls/font-appearance-control';
import BaseControl from '@aktk/block-components/wp-controls/base-control';

// @ts-ignore.
export function MainTextFonWeight( props ) {
	const { attributes, setAttributes } = props;
	const { fontWeight } = attributes;
	const handleOnFontWeightChange = ( value: string ) => {
		setAttributes( {
			fontWeight: value,
		} );
	};
	return (
		<BaseControl>
			<FontWeightControl
				value={ fontWeight }
				onChange={ handleOnFontWeightChange }
			/>
		</BaseControl>
	);
}
