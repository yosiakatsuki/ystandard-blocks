/**
 * WordPress dependencies.
 */
// @ts-ignore.
import { useSettings } from '@wordpress/block-editor';
import { useMemo } from '@wordpress/element';
/**
 * Aktk dependencies.
 */
import FontFamilyControl, {
	type FontFamilies,
} from '@aktk/block-components/wp-controls/font-family-control';

interface FontFamilySelectProps {
	value: string | undefined;
	onChange: ( value: string ) => void;
	fontFamilies?: FontFamilies;
	className?: string;
}

export function FontFamilySelect( props: FontFamilySelectProps ) {
	const { value, onChange, className, fontFamilies } = props;
	const themeFontFamilies = useFontFamilies();

	return (
		<FontFamilyControl
			value={ value }
			onChange={ onChange }
			className={ className }
			fontFamilies={ fontFamilies || themeFontFamilies }
		/>
	);
}

export function useFontFamilies() {
	const [ defaultFamilies, themeFamilies, customFamilies ] = useSettings(
		'typography.fontFamilies.default',
		'typography.fontFamilies.theme',
		'typography.fontFamilies.custom'
	);

	return useMemo( () => {
		const result = [];
		if ( themeFamilies && themeFamilies.length ) {
			result.push( ...themeFamilies );
		} else if ( defaultFamilies && defaultFamilies.length ) {
			result.push( ...defaultFamilies );
		}
		if ( customFamilies && customFamilies.length ) {
			result.push( ...customFamilies );
		}
		return result;
	}, [ defaultFamilies, themeFamilies, customFamilies ] );
}
