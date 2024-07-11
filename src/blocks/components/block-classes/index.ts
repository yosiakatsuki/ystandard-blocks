type BlockStyleClassesType = {
	textColor?: string;
	inlineTextColor?: string;
	backgroundColor?: string;
	gradients?: string;
};

export function getBlockStyleClasses( attributes: BlockStyleClassesType ) {
	const { textColor, inlineTextColor, backgroundColor, gradients } =
		attributes;

	return {
		'has-text-color': textColor,
		'has-inline-text-color': inlineTextColor,
		'has-background': backgroundColor || gradients,
	};
}
