/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import { IconSelect as AktkIconSelect } from '@aktk/block-components/components/icon-select';

// @ts-expect-error
export function IconSelect( props ) {
	const { attributes, setAttributes } = props;
	const { icon } = attributes;

	return (
		<BaseControl
			id={ 'icon-select' }
			label={ __( 'アイコン', 'ystandard-blocks' ) }
		>
			<AktkIconSelect
				icon={ icon }
				onChange={ ( value: string | undefined ) => {
					setAttributes( { icon: value } );
				} }
			/>
		</BaseControl>
	);
}
