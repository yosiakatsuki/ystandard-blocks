/**
 * WordPress dependencies.
 */
import { BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
/**
 * Plugin dependencies.
 */
import { ValueInput } from '@aktk/blocks/components/value-input';
import { parseObjectAttributes } from '@aktk/blocks/utils';

// @ts-expect-error
export function Width(props) {
	const { attributes, setAttributes } = props;
	console.log({ attributes });
	const { style = {} } = attributes;

	const handleOnChange = (value: string) => {
		const newStyle = {
			...style,
			...{
				width: value || undefined,
			},
		};
		setAttributes({ style: parseObjectAttributes(newStyle) });
	};

	return (
		<>
			<BaseControl id={'width'} label={__('幅', 'ystandard-blocks')}>
				<ValueInput
					value={style?.width || ''}
					onChange={handleOnChange}
				/>
			</BaseControl>
		</>
	);
}
