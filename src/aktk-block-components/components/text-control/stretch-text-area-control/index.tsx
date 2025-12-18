import classnames from 'classnames';
/**
 * Aktk dependencies
 */
import TextareaControl from '@aktk/block-components/wp-controls/textarea-control';

import './style-editor.scss';


interface StretchTextAreaControlProps {
	value: string;
	onChange: ( value: string ) => void;
	className?: string;
	placeholder?: string;
	style?: React.CSSProperties;
}
export function StretchTextAreaControl( props: StretchTextAreaControlProps ) {
	const { value, onChange, className, placeholder, style } = props;
	const inputClassName = classnames(
		'aktk-component-stretch-text-area-control',
		className
	);
	const dummyTextClass = classnames(
		'aktk-component-stretch-text-area-control__dummy',
		className
	);
	const dummyText = value || placeholder || ' ';
	return (
		<div className="relative inline-flex w-full">
			<div
				className={ dummyTextClass }
				style={ style }
				aria-hidden={ true }
			>
				{ dummyText }
			</div>
			<TextareaControl
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
