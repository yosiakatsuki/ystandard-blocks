// @ts-ignore.
import { __experimentalFontFamilyControl as WPFontFamilyControl } from '@wordpress/block-editor';

export type FontFamilies = Array< {
	name: string;
	fontFamily: string;
} >;

interface FontFamilyControlProps {
	value: string | undefined;
	onChange: ( value: string ) => void;
	fontFamilies?: FontFamilies;
	className?: string;
}

export default function FontFamilyControl( props: FontFamilyControlProps ) {
	const { value, onChange, fontFamilies, className } = props;
	return (
		<WPFontFamilyControl
			value={ value }
			onChange={ onChange }
			fontFamilies={ fontFamilies }
			className={ className }
			__nextHasNoMarginBottom
			__next40pxDefaultSize
		/>
	);
}
