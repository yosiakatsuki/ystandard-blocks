// @ts-ignore
import { __experimentalFontAppearanceControl as WPFontAppearanceControl } from '@wordpress/block-editor';

type FontAppearanceValue = {
	fontStyle?: string;
	fontWeight?: string;
};

export interface FontAppearanceControlProps {
	onChange: ( value: FontAppearanceValue ) => void;
	hasFontStyles?: boolean;
	hasFontWeights?: boolean;
	value: FontAppearanceValue;
}

/**
 * 文字太さ・スタイルコントロール
 * @param props
 * @class
 */
export function FontAppearanceControl( props: FontAppearanceControlProps ) {
	return <WPFontAppearanceControl { ...props } />;
}

export interface FontWeightStyleControlProps {
	onChange: ( value: string ) => void;
	value: string;
}

/**
 * 文字太さコントロール
 * @param props
 * @class
 */
export function FontWeightControl( props: FontWeightStyleControlProps ) {
	const { onChange, value } = props;
	const handleOnChange = ( newValue: FontAppearanceValue ) => {
		onChange( newValue?.fontWeight || '' );
	};
	return (
		<WPFontAppearanceControl
			value={ { fontWeight: value } }
			onChange={ handleOnChange }
			hasFontStyles={ false }
			hasFontWeights={ true }
		/>
	);
}

/**
 * 文字スタイルコントロール
 * @param props
 * @class
 */
export function FontStyleControl( props: FontWeightStyleControlProps ) {
	const { onChange, value } = props;
	const handleOnChange = ( newValue: FontAppearanceValue ) => {
		onChange( newValue?.fontStyle || '' );
	};
	return (
		<WPFontAppearanceControl
			value={ { fontStyle: value } }
			onChange={ handleOnChange }
			hasFontStyles={ true }
			hasFontWeights={ false }
		/>
	);
}
