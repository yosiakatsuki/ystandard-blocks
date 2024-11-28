/**
 * WordPress dependencies.
 */
// @ts-ignore
import { HeadingLevelDropdown } from '@wordpress/block-editor';

const HEADING_LEVELS = [ 1, 2, 3, 4, 5, 6 ];

// @ts-ignore
export function HeadingLevel( props ) {
	const { setAttributes, attributes } = props;
	const { level } = attributes;

	const handleOnChange = ( value: number ) => {
		setAttributes( { level: value } );
	};

	return (
		<HeadingLevelDropdown
			options={ HEADING_LEVELS }
			value={ level }
			onChange={ handleOnChange }
		/>
	);
}
