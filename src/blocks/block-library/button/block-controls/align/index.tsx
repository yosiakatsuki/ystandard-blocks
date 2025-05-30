/**
 * WordPress dependencies.
 */
// @ts-ignore
import { JustifyContentControl } from '@wordpress/block-editor';

// @ts-ignore
export function TextAlign( props ) {
	const { attributes, setAttributes } = props;
	const { align } = attributes;

	const handleOnChange = ( nextAlign: string ) => {
		setAttributes( { align: nextAlign } );
	};

	return (
		<>
			<JustifyContentControl
				value={ align }
				onChange={ handleOnChange }
				allowedControls={ [ 'left', 'center', 'right' ] }
			/>
		</>
	);
}
