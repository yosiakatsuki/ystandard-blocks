/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';
/**
 * Aktk Dependencies
 */
import InputControl from '@aktk/block-components/wp-controls/input-control';

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
			label={ __( 'サブテキストコンテンツ', 'ystandard-blocks' ) }
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
