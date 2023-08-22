/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Plugin dependencies.
 */
import { IconSelect } from '@aktk/blocks/components/icon-select';

//@ts-expect-error
export function IconLeft(props) {
	const { attributes, setAttributes } = props;
	const { iconLeft } = attributes;

	const handleOnChange = (value: string) => {
		setAttributes({ iconLeft: value });
	};

	return (
		<IconSelect
			label={__('左アイコン', 'ystandard-blocks')}
			icon={iconLeft}
			onChange={handleOnChange}
		/>
	);
}
