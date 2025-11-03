/**
 * Aktk dependencies.
 */
import { FontStyleControl } from '@aktk/block-components/wp-controls/font-appearance-control';
import BaseControl from '@aktk/block-components/wp-controls/base-control';

// @ts-ignore.
export function MainTextFontStyle( props ) {
	const { attributes, setAttributes } = props;
	const { fontStyle } = attributes;
	const handleOnFontStyleChange = ( value: string ) => {
		setAttributes( {
			fontStyle: value,
		} );
	};
	return (
		<BaseControl>
			<FontStyleControl
				value={ fontStyle }
				onChange={ handleOnFontStyleChange }
			/>
		</BaseControl>
	);
}
