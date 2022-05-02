import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const ButtonReset = ( { onClick, label, isDisable, ...props } ) => {
	const _label = label ?? __( 'リセット', 'ystandard-blocks' );
	return (
		<>
			<Button
				isSecondary
				isSmall
				disabled={ !! isDisable }
				onClick={ onClick }
				{ ...props }
			>
				{ _label }
			</Button>
		</>
	);
};
export default ButtonReset;
