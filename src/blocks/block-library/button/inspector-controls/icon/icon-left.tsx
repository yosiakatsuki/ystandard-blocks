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
import { BlankIcon } from './blank-icon';

//@ts-expect-error
export function IconLeft( props ) {
	const { attributes, setAttributes } = props;
	const { iconLeft, iconSizeLeft, iconLeftBlank } = attributes;

	return (
		<BaseControl id={ 'left-icon' }>
			<BaseControl>
				<IconSelect
					label={ __( '左アイコン', 'ystandard-blocks' ) }
					icon={ iconLeft }
					onChange={ ( value: string | undefined ) => {
						setAttributes( { iconLeft: value } );
						if ( !! value ) {
							setAttributes( { iconLeftBlank: undefined } );
						}
					} }
				/>
			</BaseControl>
			{ ! iconLeft && (
				<BaseControl>
					<BlankIcon
						checked={ iconLeftBlank || false }
						onChange={ ( value: boolean | undefined ) => {
							setAttributes( {
								iconLeftBlank: value || undefined,
							} );
						} }
					/>
				</BaseControl>
			) }
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
