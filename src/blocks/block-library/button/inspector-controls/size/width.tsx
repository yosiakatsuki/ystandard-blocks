/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';

/**
 * Plugin dependencies.
 */
import { ValueInput } from '@aktk/blocks/components/value-input';
import { parseObjectAttributes } from '@aktk/blocks/utils';

// @ts-expect-error
export function Width( props ) {
	const { attributes, setAttributes } = props;
	const { style = {} } = attributes;

	const handleOnChange = ( value: string | undefined ) => {
		const newStyle = {
			...style,
			...{
				width: value || undefined,
			},
		};
		setAttributes( { style: parseObjectAttributes( newStyle ) } );
	};

	return (
		<BaseControl id={ 'width' } label={ __( '幅', 'ystandard-blocks' ) }>
			<ValueInput
				value={ style?.width || '' }
				onChange={ handleOnChange }
			/>
		</BaseControl>
	);
}
