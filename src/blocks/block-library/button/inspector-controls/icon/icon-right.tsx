/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Plugin dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import { IconSelect } from '@aktk/block-components/components/icon-select';
import { ComponentContainer } from '@aktk/blocks/components/component-container';
import { IconSize } from './size';

//@ts-expect-error
export function IconRight( props ) {
	const { attributes, setAttributes } = props;
	const { iconRight, iconSizeRight } = attributes;

	return (
		<BaseControl id={ 'right-icon' }>
			<ComponentContainer>
				<IconSelect
					label={ __( '右アイコン', 'ystandard-blocks' ) }
					icon={ iconRight }
					onChange={ ( value: string | undefined ) => {
						setAttributes( { iconRight: value } );
					} }
				/>
				<IconSize
					size={ iconSizeRight }
					onChange={ ( value: string | undefined ) => {
						setAttributes( { iconSizeRight: value } );
					} }
				/>
			</ComponentContainer>
		</BaseControl>
	);
}
