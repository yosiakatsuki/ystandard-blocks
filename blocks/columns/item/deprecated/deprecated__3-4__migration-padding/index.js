/* eslint-disable camelcase */
import classnames from 'classnames';
import metadata from './block.json';
import {
	getColorClassName,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';

export const deprecated__34__migrationPadding = [
	{
		...metadata,
		migrate( attributes ) {
			return migratePadding( attributes );
		},
		save( { attributes } ) {
			const {
				shadow,
				backgroundColor,
				customBackgroundColor,
				paddingType,
			} = attributes;

			const backgroundClass = getColorClassName(
				'background-color',
				backgroundColor
			);

			const blockProps = useBlockProps.save( {
				className: classnames( 'ystdb-column', {
					'has-background': backgroundClass || customBackgroundColor,
					[ backgroundClass ]: backgroundClass,
					'has-shadow': shadow,
					[ paddingType ]: paddingType,
				} ),
				style: {
					backgroundColor: customBackgroundColor
						? customBackgroundColor
						: undefined,
				},
			} );

			const containerProps = {
				className: 'ystdb-column-block-container',
			};

			const innerBlocksProps = useInnerBlocksProps.save( containerProps );

			return (
				<div { ...blockProps }>
					<div { ...innerBlocksProps } />
				</div>
			);
		},
	},
];

export function migratePadding( attributes ) {
	if ( ! attributes?.paddingType ) {
		return attributes;
	}
	let newAttributes = attributes;
	const oldPadding = {
		'is-padding-small': '1rem',
		'is-padding-large': '1.5rem',
	};
	Object.keys( oldPadding ).map( ( key ) => {
		if ( key === newAttributes?.paddingType ) {
			newAttributes = {
				...newAttributes,
				padding: {
					desktop: {
						top: oldPadding[ key ],
						right: oldPadding[ key ],
						bottom: oldPadding[ key ],
						left: oldPadding[ key ],
					},
				},
			};
			delete newAttributes.paddingType;
			if ( newAttributes?.className ) {
				newAttributes.className = newAttributes.className
					.replace( key, '' )
					.trim();
			}
		}
		return true;
	} );
	return newAttributes;
}
