/**
 * WordPress dependencies.
 */
import { BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Plugin dependencies.
 */
import { IconSelect } from '@aktk/block-components/components/icon-select';
import { ComponentContainer } from '@aktk/blocks/components/component-container';
import { IconSize } from './size';

//@ts-expect-error
export function IconLeft( props ) {
	const { attributes, setAttributes } = props;
	const { iconLeft, iconSizeLeft } = attributes;

	return (
		<BaseControl id={ 'left-icon' }>
			<ComponentContainer>
				<IconSelect
					label={ __( '左アイコン', 'ystandard-blocks' ) }
					icon={ iconLeft }
					onChange={ ( value: string | undefined ) => {
						setAttributes( { iconLeft: value } );
					} }
				/>
				<IconSize
					size={ iconSizeLeft }
					onChange={ ( value: string | undefined ) => {
						setAttributes( { iconSizeLeft: value } );
					} }
				/>
			</ComponentContainer>
		</BaseControl>
	);
}
