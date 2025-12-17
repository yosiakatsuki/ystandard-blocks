import classnames from 'classnames';
/**
 * Aktk dependencies
 */
import TextControl from '@aktk/block-components/wp-controls/text-control';

import './style-editor.scss';

interface StretchTextControlProps {
	value: string;
	onChange: ( value: string ) => void;
	className?: string;
	placeholder?: string;
	style?: React.CSSProperties;
}
export function StretchTextControl( props: StretchTextControlProps ) {
	const { value, onChange, className, placeholder, style } = props;
	const inputClassName = classnames(
		'aktk-component-stretch-text-control',
		className
	);
	const dummyTextClass = classnames(
		'aktk-component-stretch-text-control__dummy',
		className
	);
	const dummyText = value || placeholder || ' ';
	return (
		<div className="relative inline-flex">
			<div
				className={ dummyTextClass }
				style={ style }
				aria-hidden={ true }
			>
				{ dummyText }
			</div>
			<TextControl
				className={ inputClassName }
				// @ts-ignore
				style={ style }
				value={ value }
				onChange={ onChange }
				placeholder={ placeholder }
			/>
		</div>
	);
}
