/**
 * WordPress dependencies.
 */
import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
/**
 * Plugin dependencies.
 */
import { ComponentLabel } from '@aktk/blocks/components/label';

// @ts-expect-error
export function IconPosition(props) {
	const { attributes, setAttributes } = props;
	const { iconPosition } = attributes;

	const handleOnChange = (value: boolean) => {
		setAttributes({
			iconPosition: value ? 'space-between' : undefined,
		});
	};
	return (
		<div>
			<ComponentLabel>
				{__('アイコンの位置', 'ystandard-blocks')}
			</ComponentLabel>
			<div className={'mt-2'}>
				<ToggleControl
					label={__('外側に配置する', 'ystandard-blocks')}
					checked={iconPosition === 'space-between'}
					onChange={handleOnChange}
				/>
			</div>
		</div>
	);
}
