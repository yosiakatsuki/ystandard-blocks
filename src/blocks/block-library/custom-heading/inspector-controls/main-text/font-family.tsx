/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import { FontFamilySelect } from '@aktk/block-components/components/font-family-select';

// @ts-expect-error.
export function MainTextFontFamily( props ) {
	const { attributes, setAttributes } = props;
	const { fontFamily } = attributes;

	const handleOnChange = ( value: string ) => {
		setAttributes( {
			fontFamily: value,
		} );
	};
	return (
		<BaseControl>
			<FontFamilySelect
				value={ fontFamily }
				onChange={ handleOnChange }
			/>
		</BaseControl>
	);
}
