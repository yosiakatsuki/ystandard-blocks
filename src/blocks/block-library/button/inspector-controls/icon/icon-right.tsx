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
export function IconRight( props ) {
	const { attributes, setAttributes } = props;
	const { iconRight, iconSizeRight, iconRightBlank } = attributes;

	return (
		<BaseControl id={ 'right-icon' }>
			<BaseControl>
				<IconSelect
					label={ __( '右アイコン', 'ystandard-blocks' ) }
					icon={ iconRight }
					onChange={ ( value: string | undefined ) => {
						setAttributes( { iconRight: value } );
						if ( !! value ) {
							setAttributes( { iconRightBlank: undefined } );
						}
					} }
				/>
			</BaseControl>
			{ ! iconRight && (
				<BaseControl>
					<BlankIcon
						checked={ iconRightBlank || false }
						onChange={ ( value: boolean | undefined ) => {
							setAttributes( {
								iconRightBlank: value || undefined,
							} );
						} }
					/>
				</BaseControl>
			) }
			<BaseControl>
				<IconSize
					size={ iconSizeRight }
					onChange={ ( value: string | undefined ) => {
						setAttributes( { iconSizeRight: value } );
					} }
				/>
			</BaseControl>
		</BaseControl>
	);
}
