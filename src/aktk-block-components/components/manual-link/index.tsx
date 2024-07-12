import { FiBook } from 'react-icons/fi';
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

interface ManualLinkProps {
	url: string;
	text?: string;
	target?: string;
}

export function ManualLink( props: ManualLinkProps ) {
	const {
		url,
		text = __( 'マニュアルを見る', 'aktk-components' ),
		target = '_blank',
	} = props;

	return (
		<a
			className={ 'flex items-center gap-1 text-fz-xs' }
			href={ url }
			target={ target }
		>
			<FiBook size={ 12 } />
			<span>{ text }</span>
		</a>
	);
}
