/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import CustomSelectControl, {
	type CustomSelectControlOption,
} from '@aktk/block-components/components/custom-select-control';
import BaseControl from '@aktk/block-components/wp-controls/base-control';

const FONT_WEIGHTS: CustomSelectControlOption[] = [
	{
		key: '',
		name: __( '指定なし', 'ystandard-blocks' ),
	},
	{
		key: '700',
		name: __( '太字(700)', 'ystandard-blocks' ),
	},
	{
		key: '400',
		name: __( '標準(400)', 'ystandard-blocks' ),
	},
	{
		key: '100',
		name: '100',
	},
	{
		key: '200',
		name: '200',
	},
	{
		key: '300',
		name: '300',
	},
	{
		key: '500',
		name: '500',
	},
	{
		key: '600',
		name: '600',
	},
	{
		key: '800',
		name: '800',
	},
	{
		key: '900',
		name: '900',
	},
];

// @ts-ignore
export function FontWeight( props ) {
	const { attributes, setAttributes } = props;
	const { fontWeight } = attributes;

	const handleOnChange = ( value: string ) => {
		setAttributes( { fontWeight: value } );
	};

	return (
		<BaseControl
			id={ 'font-weight' }
			label={ __( '文字太さ', 'ystandard-blocks' ) }
		>
			<CustomSelectControl
				value={ fontWeight }
				onChange={ handleOnChange }
				options={ FONT_WEIGHTS }
				useDefaultItem={ false }
			/>
		</BaseControl>
	);
}
