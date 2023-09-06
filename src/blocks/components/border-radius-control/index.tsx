import { isString } from 'lodash';
// @ts-ignore
import { __experimentalBorderRadiusControl as WPBorderRadiusControl } from '@wordpress/block-editor';

export type BorderRadiusValue = {
	borderRadius?: string;
	topLeft?: string;
	topRight?: string;
	bottomLeft?: string;
	bottomRight?: string;
};

export interface BorderRadiusControlProps {
	onChange: (value: BorderRadiusValue | string | undefined) => void;
	values?: BorderRadiusValue | string;
}

export function BorderRadiusControl(props: BorderRadiusControlProps) {
	const { values, onChange } = props;

	const handleOnChange = (value: BorderRadiusValue | string) => {
		if (!value) {
			onChange(undefined);
		}
		if (isString(value)) {
			onChange({ borderRadius: value });
		}
		onChange(value);
	};

	return (
		<>
			<WPBorderRadiusControl values={values} onChange={handleOnChange} />
		</>
	);
}

export { getBorderRadiusStyles } from './utils';
