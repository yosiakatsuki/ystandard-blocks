/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk Dependencies
 */
import InputControl from '@aktk/block-components/wp-controls/input-control';
import BaseControl from '@aktk/block-components/wp-controls/base-control';

// @ts-ignore
export function SubTextContent( props ) {
	const { attributes, setAttributes } = props;
	const { subText } = attributes;

	const handleOnChange = ( newValue: string | undefined ) => {
		setAttributes( {
			subText: newValue,
		} );
	};
	return (
		<BaseControl
			id={ 'sub-text' }
			label={ __( 'テキスト', 'ystandard-blocks' ) }
		>
			<InputControl
				value={ subText }
				onChange={ handleOnChange }
				placeholder={ __( 'サブテキスト…', 'ystandard-blocks' ) }
				ariaLabel={ __( 'Sub Text' ) }
			/>
		</BaseControl>
	);
}
