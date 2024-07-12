// @ts-expect-error
import { LineHeightControl as WPLineHeightControl } from '@wordpress/block-editor';

interface LineHeightControlProps {
	value: string | undefined;
	onChange: ( value: number ) => void;
}
export default function LineHeightControl( props: LineHeightControlProps ) {
	const { value, onChange } = props;
	return (
		<div className="max-w-[150px] [&_.components-input-control__input]:!h-[40px] [&_.components-input-control__input]:placeholder:text-transparent [&_div]:w-auto">
			<WPLineHeightControl
				value={ value }
				onChange={ onChange }
				__nextHasNoMarginBottom={ true }
			/>
		</div>
	);
}
