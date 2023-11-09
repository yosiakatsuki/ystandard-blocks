import { URLInput as WPURLInput } from '@wordpress/block-editor';

import './index.scss';

export interface URLInputProps {
	value: string;
	label: string;
	onChange: (value: string) => void;
	disableSuggestions?: boolean;
	isUseInspectorControl?: boolean;
}

export default function URLInput(props: URLInputProps) {
	const { value, label, onChange, disableSuggestions = true } = props;
	return (
		<>
			<WPURLInput
				// @ts-ignore
				label={label}
				className="ystdb-component-url-input"
				value={value}
				/* eslint-disable jsx-a11y/no-autofocus */
				autoFocus={false}
				/* eslint-enable jsx-a11y/no-autofocus */
				onChange={onChange}
				disableSuggestions={disableSuggestions}
				isFullWidth
				hasBorder
				__nextHasNoMarginBottom
			/>
		</>
	);
}
