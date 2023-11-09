/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Plugin dependencies.
 */
/**
 * Plugin dependencies.
 */
import type { SpacingValue } from '@aktk/blocks/components/spacing-size-control';
import {
	ResponsivePaddingSelect,
	ResponsiveSpacing,
} from '@aktk/blocks/components/responsive-spacing';

/**
 * Internal dependencies
 */
import type { Attributes } from '../../types';

// @ts-expect-error
export function Padding(props) {
	const { attributes, setAttributes } = props;
	const { padding, responsivePadding } = attributes as unknown as Attributes;

	const handleOnChange = (value: SpacingValue | undefined) => {
		setAttributes({
			padding: {
				...padding,
				...value,
			},
			responsivePadding: undefined,
		});
	};

	const handleOnResponsiveChange = (value: ResponsiveSpacing | undefined) => {
		setAttributes({
			responsivePadding: {
				...responsivePadding,
				...value,
			},
			padding: undefined,
		});
	};

	return (
		<>
			<ResponsivePaddingSelect
				label={__('パディング', 'ystandard-blocks')}
				onChange={handleOnChange}
				onResponsiveChange={handleOnResponsiveChange}
				value={padding as unknown as SpacingValue}
				responsiveValue={responsivePadding}
				splitOnAxis={true}
				sides={['horizontal', 'vertical']}
			/>
		</>
	);
}
