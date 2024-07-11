/**
 * WordPress dependencies
 */
import { Button, ButtonGroup } from '@wordpress/components';
import { Icon } from '@wordpress/icons';

import { TEXT_ALIGNMENT_OPTIONS } from './const';

interface TextAlignButtonsProps {
	onChange: ( align: string | undefined ) => void;
	value: string | undefined;
}

export function TextAlignButtons( props: TextAlignButtonsProps ) {
	const { onChange, value } = props;
	return (
		<ButtonGroup>
			{ TEXT_ALIGNMENT_OPTIONS.map( ( { icon, title, align } ) => {
				const variant = value === align ? 'primary' : 'tertiary';
				return (
					<Button
						key={ align }
						title={ title }
						variant={ variant }
						onClick={ () => {
							onChange( value !== align ? align : undefined );
						} }
					>
						{ /* @ts-ignore */ }
						<Icon icon={ icon } />
					</Button>
				);
			} ) }
		</ButtonGroup>
	);
}
