/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';
/**
 * Plugin dependencies.
 */
import Panel from '@aktk/blocks/components/panel';
import { ButtonGrid } from '@aktk/blocks/components/button-grid';

// @ts-expect-error
export function ButtonTypePanel(props) {
	const { attributes, setAttributes } = props;
	const { buttonType } = attributes;
	const handleOnchange = (value: string) => {
		setAttributes({ buttonType: value || undefined });
	};
	return (
		<>
			<Panel
				title={__('ボタンタイプ', 'ystandard-blocks')}
				initialOpen={true}
			>
				<BaseControl id={'button-type'} className="">
					<ButtonGrid
						current={buttonType || ''}
						onChange={handleOnchange}
						buttons={[
							{
								value: '',
								label: __('デフォルト', 'ystandard-blocks'),
							},
							{
								value: 'outline',
								label: __('アウトライン', 'ystandard-blocks'),
							},
							{
								value: 'link',
								label: __('リンク', 'ystandard-blocks'),
							},
						]}
					/>
				</BaseControl>
			</Panel>
		</>
	);
}
