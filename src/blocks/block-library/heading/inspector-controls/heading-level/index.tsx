/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, BaseControl } from '@wordpress/components';
/**
 * Aktk dependencies.
 */
import CustomSelectControl, {
	type CustomSelectControlOption,
} from '@aktk/block-components/components/custom-select-control';

const HEADING_LEVELS: CustomSelectControlOption[] = [
	{
		key: '1',
		name: 'H1',
	},
	{
		key: '2',
		name: 'H2',
	},
	{
		key: '3',
		name: 'H3',
	},
	{
		key: '4',
		name: 'H4',
	},
	{
		key: '5',
		name: 'H5',
	},
	{
		key: '6',
		name: 'H6',
	},
];

// @ts-ignore
export function HeadingLevel( props ) {
	const { setAttributes, attributes } = props;
	const { level } = attributes;

	const handleOnChange = ( value: string ) => {
		const newLevel = parseInt( value, 10 );
		setAttributes( { level: isNaN( newLevel ) ? 2 : newLevel } );
	};

	return (
		<PanelBody title={ __( '見出しレベル', 'ystandard-blocks' ) }>
			<BaseControl id={ 'heading-level' }>
				<CustomSelectControl
					value={ level.toString() }
					onChange={ handleOnChange }
					options={ HEADING_LEVELS }
					useDefaultItem={ false }
				/>
			</BaseControl>
		</PanelBody>
	);
}
