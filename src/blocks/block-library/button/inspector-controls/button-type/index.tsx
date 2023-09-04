/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Plugin dependencies.
 */
import Panel from '@aktk/blocks/components/panel';
import CustomSelectControl from '@aktk/blocks/components/custom-select-control';

// @ts-expect-error
export function ButtonTypePanel(props) {
	const { attributes, setAttributes } = props;
	const { buttonType } = attributes;
	const handleOnchange = (value: string) => {
		setAttributes({ buttonType: value });
	};
	return (
		<>
			<Panel title={__('タイプ', 'ystandard-blocks')} initialOpen={true}>
				<CustomSelectControl
					label={__('ボタンタイプ', 'ystandard-blocks')}
					value={buttonType}
					onChange={handleOnchange}
					options={[
						{
							key: '',
							name: __('デフォルト', 'ystandard-toolbox'),
						},
						{
							key: 'outline',
							name: __('アウトライン', 'ystandard-toolbox'),
						},
						{
							key: 'link',
							name: __('リンク', 'ystandard-toolbox'),
						},
					]}
					useDefaultItem={false}
					// @ts-expect-error
					__nextUnconstrainedWidth
				/>
			</Panel>
		</>
	);
}
