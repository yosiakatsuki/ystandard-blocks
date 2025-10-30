/**
 * WordPress dependencies.
 */
// @ts-ignore.
import { __experimentalTextDecorationControl as WPTextDecorationControl } from '@wordpress/block-editor';

interface TextDecorationControlProps {
	value: string;
	onChange: ( value: string ) => void;
}

export default function TextDecorationControl(
	props: TextDecorationControlProps
) {
	return <WPTextDecorationControl { ...props } />;
}
