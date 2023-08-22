/**
 * WordPress dependencies.
 */
import { BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Plugin dependencies.
 */
import { IconSelect } from '@aktk/blocks/components/icon-select';
import { ComponentContainer } from '@aktk/blocks/components/component-container';
import { IconSize } from './size';

//@ts-expect-error
export function IconRight(props) {
	const { attributes, setAttributes } = props;
	const { iconRight, iconSizeRight } = attributes;

	return (
		<BaseControl id={'right-icon'}>
			<ComponentContainer>
				<IconSelect
					label={__('右アイコン', 'ystandard-blocks')}
					icon={iconRight}
					onChange={(value: string | undefined) => {
						setAttributes({ iconRight: value });
					}}
				/>
				<IconSize
					size={iconSizeRight}
					onChange={(value: string | undefined) => {
						setAttributes({ iconSizeRight: value });
					}}
				/>
			</ComponentContainer>
		</BaseControl>
	);
}
