import { BorderBoxControl } from '@aktk/blocks/components/border-box-control';

// @ts-expect-error
export function Border( props ) {
	const { attributes, setAttributes } = props;
	const { border } = attributes;
	// @ts-expect-error
	const handleOnChange = ( value ) => {
		setAttributes( { border: value || undefined } );
	};
	return (
		<>
			<BorderBoxControl value={ border } onChange={ handleOnChange } />
		</>
	);
}
