/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import TextDecorationControl from '@aktk/block-components/wp-controls/text-decoration-control';

// @ts-expect-error
export function TextDecoration( props ) {
	const { attributes, setAttributes } = props;
	const { textDecoration } = attributes;
	const handleOnChange = ( value: string ) => {
		setAttributes( { textDecoration: value } );
	};
	return (
		<>
			<BaseControl
				id={ 'text-decoration' }
				label={ __( '文字装飾', 'ystandard-blocks' ) }
			>
				<div className={ 'ystdtb-control__button__text-decoration' }>
					<TextDecorationControl
						value={ textDecoration }
						onChange={ handleOnChange }
					/>
				</div>
			</BaseControl>
		</>
	);
}
