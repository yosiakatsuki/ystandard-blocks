/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import { IconSelect } from '@aktk/block-components/components/icon-select';

/**
 * Plugin dependencies.
 */
import { IconSize } from './size';

//@ts-expect-error
export function IconLeft( props ) {
	const { attributes, setAttributes } = props;
	const { iconLeft, iconSizeLeft } = attributes;

	return (
		<BaseControl id={ 'left-icon' }>
			<BaseControl>
				<IconSelect
					label={ __( '左アイコン', 'ystandard-blocks' ) }
					icon={ iconLeft }
					onChange={ ( value: string | undefined ) => {
						setAttributes( { iconLeft: value } );
					} }
				/>
			</BaseControl>
			<BaseControl>
				<IconSize
					size={ iconSizeLeft }
					onChange={ ( value: string | undefined ) => {
						setAttributes( { iconSizeLeft: value } );
					} }
				/>
			</BaseControl>
		</BaseControl>
	);
}
