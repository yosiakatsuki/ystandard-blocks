// @ts-expect-error
import { BlockVerticalAlignmentControl } from '@wordpress/block-editor';

// @ts-ignore
export default function AlignmentControl( props ) {
	const { attributes, setAttributes } = props;
	const { verticalAlign } = attributes;

	const handleOnChange = ( value: string ) => {
		setAttributes( { verticalAlign: value } );
	};
	return (
		<BlockVerticalAlignmentControl
			onChange={ handleOnChange }
			value={ verticalAlign }
		/>
	);
}
