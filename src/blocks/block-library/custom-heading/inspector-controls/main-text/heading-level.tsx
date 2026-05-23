/**
 * WordPress dependencies.
 */
import { __, sprintf } from '@wordpress/i18n';
import {
	headingLevel1,
	headingLevel2,
	headingLevel3,
	headingLevel4,
	headingLevel5,
	headingLevel6,
} from '@wordpress/icons';

/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import {
	ToggleGroupControl,
	ToggleGroupControlOptionIcon,
} from '@aktk/block-components/wp-controls/toggle-group-control';

/**
 * Block dependencies.
 */
import type { Attributes } from '../../types';

const HEADING_LEVELS = [
	{
		level: 1,
		icon: headingLevel1,
	},
	{
		level: 2,
		icon: headingLevel2,
	},
	{
		level: 3,
		icon: headingLevel3,
	},
	{
		level: 4,
		icon: headingLevel4,
	},
	{
		level: 5,
		icon: headingLevel5,
	},
	{
		level: 6,
		icon: headingLevel6,
	},
];

const getValidatedLevel = ( level?: number ): number => {
	const isValidLevel = HEADING_LEVELS.some(
		( { level: headingLevel } ) => headingLevel === level
	);
	return isValidLevel ? Number( level ) : 2;
};

// @ts-ignore.
export function MainTextHeadingLevel( props ) {
	const { attributes, setAttributes } = props;
	const { level } = attributes as Attributes;
	const currentLevel = getValidatedLevel( level );
	const label = __( '見出しレベル', 'ystandard-blocks' );

	const handleOnChange = ( value?: string | number ) => {
		const newLevel = Number( value );
		const isValidLevel = HEADING_LEVELS.some(
			( { level: headingLevel } ) => headingLevel === newLevel
		);

		if ( isValidLevel ) {
			setAttributes( { level: newLevel } );
		}
	};

	return (
		<BaseControl id="heading-level" label={ label }>
			<ToggleGroupControl
				label={ label }
				value={ currentLevel }
				onChange={ handleOnChange }
				isBlock
				hideLabelFromVision
			>
				{ HEADING_LEVELS.map( ( { level: headingLevel, icon } ) => (
					<ToggleGroupControlOptionIcon
						key={ headingLevel }
						value={ headingLevel }
						label={ sprintf(
							// translators: %d: 見出しレベル。
							__( '見出しレベル %d', 'ystandard-blocks' ),
							headingLevel
						) }
						icon={ icon }
					/>
				) ) }
			</ToggleGroupControl>
		</BaseControl>
	);
}
