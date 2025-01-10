import classnames from 'classnames';
/**
 * WordPress dependencies
 */
import { BaseControl } from '@wordpress/components';
import { PlainButton } from '@aktk/block-components/components/buttons';

type AvatarObject = {
	id: number;
	name: string;
	url: string;
	alt: string;
};

// @ts-ignore
export default function AvatarSelect( props ) {
	const { images, attributes, setAttributes } = props;
	const { avatarID, avatarName } = attributes;

	const handleOnClick = ( value: AvatarObject ) => {
		setAttributes( {
			avatarID: value.id,
			avatarName: value.name,
			avatarURL: value.url,
			avatarAlt: value.name,
		} );
	};
	return (
		<BaseControl>
			<div className={ 'grid grid-cols-3 gap-3' }>
				{ images.map( ( item: AvatarObject ) => {
					const key = `${ item.id }-${ item.name }`;
					return (
						<AvatarSelectButton
							key={ key }
							item={ item }
							avatarID={ avatarID }
							avatarName={ avatarName }
							onClick={ handleOnClick }
						/>
					);
				} ) }
			</div>
		</BaseControl>
	);
}

interface AvatarSelectButtonProps {
	item: AvatarObject;
	avatarID: number;
	avatarName: string;
	onClick: ( value: AvatarObject ) => void;
}

function AvatarSelectButton( props: AvatarSelectButtonProps ) {
	const { item, avatarID, avatarName, onClick } = props;
	const isCurrent = avatarID === item.id && avatarName === item.name;

	return (
		<PlainButton
			className={ classnames( 'block !h-auto !p-0', {
				'': ! isCurrent,
			} ) }
			onClick={ () => onClick( item ) }
		>
			<img
				className={ classnames(
					'block aspect-square rounded-full object-cover w-full',
					{
						grayscale: ! isCurrent,
					}
				) }
				src={ item.url }
				alt={ item.name }
			/>
			{ !! item.name && (
				<span
					className={ 'mt-1 block max-w-full truncate text-fz-xxs' }
				>
					{ item.name }
				</span>
			) }
		</PlainButton>
	);
}
