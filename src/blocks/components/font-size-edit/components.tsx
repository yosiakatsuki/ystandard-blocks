/**
 * WordPress dependencies.
 */
import {
	FontSizePicker,
	// @ts-expect-error
	getFontSizeObjectByValue,
} from '@wordpress/block-editor';
import { useFontSizes } from '@aktk/blocks/components/font-size-edit/hooks';

export interface FontSizeEditProps {
	value?: string | undefined;
	onChange?: (size: string | undefined, slug?: string | undefined) => void;
}

export function FontSizeEdit(props: FontSizeEditProps) {
	const { value, onChange } = props;
	const fontSizes = useFontSizes();
	const handleOnChange = (size: string | undefined) => {
		const font = getFontSizeObjectByValue(fontSizes, size);
		onChange?.(font?.size, font?.slug);
	};
	return (
		<FontSizePicker
			__nextHasNoMarginBottom
			value={value}
			onChange={handleOnChange}
		/>
	);
}
