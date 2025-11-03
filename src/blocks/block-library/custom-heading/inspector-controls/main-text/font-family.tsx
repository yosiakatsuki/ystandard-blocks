/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import FontFamilyControl from '@aktk/block-components/wp-controls/font-family-control';

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
			<FontFamilyControl
				value={ fontFamily }
				onChange={ handleOnChange }
			/>
		</BaseControl>
	);
}
