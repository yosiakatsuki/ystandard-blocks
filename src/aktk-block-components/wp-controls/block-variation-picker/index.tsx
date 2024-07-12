// @ts-expect-error
import { __experimentalBlockVariationPicker as WPBlockVariationPicker } from '@wordpress/block-editor';

export type BlockVariationItem = {
	name: string;
	title: string;
	description?: string;
	icon?: string;
	attributes?: Record< string, any >;
	innerBlocks?: [ string ][];
	scope?: string[];
};

interface BlockVariationPickerProps {
	icon?: string;
	label?: string;
	variations: BlockVariationItem[];
	onSelect: ( variation: BlockVariationItem ) => void;
	allowSkip?: boolean;
}

const BlockVariationPicker = ( props: BlockVariationPickerProps ) => {
	return <WPBlockVariationPicker { ...props } />;
};

export default BlockVariationPicker;
