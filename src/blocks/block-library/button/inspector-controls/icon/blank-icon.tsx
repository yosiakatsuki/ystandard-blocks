/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import ToggleControl from '@aktk/block-components/wp-controls/toggle-control';

interface BlankIconProps {
	onChange: ( value: boolean | undefined ) => void;
	checked?: boolean;
}

export function BlankIcon( props: BlankIconProps ) {
	const { onChange, checked } = props;

	const handleOnChange = ( value: boolean ) => {
		onChange( value );
	};

	return (
		<ToggleControl
			label={ __( '空のアイコンを追加する', 'ystandard-blocks' ) }
			onChange={ handleOnChange }
			checked={ checked ?? false }
		/>
	);
}
