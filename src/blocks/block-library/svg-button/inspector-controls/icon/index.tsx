/**
 * WordPress dependencies.
 */
import { __, _x } from '@wordpress/i18n';
import { BaseControl, Button, PanelBody } from '@wordpress/components';
/**
 * Plugin dependencies.
 */
import SvgIconSelect from '@aktk/blocks/components/svg-icon-select';
import HorizonButtons from '@aktk/blocks/components/horizon-buttons';

/**
 * Components.
 */
export const ICON_SIZES = [
	{
		value: 'is-small',
		label: __('小', 'ystandard-blocks'),
	},
	{
		value: '',
		label: __('中', 'ystandard-blocks'),
	},
	{
		value: 'is-large',
		label: __('大', 'ystandard-blocks'),
	},
];

// @ts-ignore
export function Icon(props) {
	const { attributes, setAttributes } = props;
	const { iconLeft, iconRight, iconSizeLeft, iconSizeRight } = attributes;
	return (
		<>
			<PanelBody title={__('アイコン設定', 'ystandard-blocks')}>
				<BaseControl id={'icon-left'}>
					<SvgIconSelect
						iconControlTitle={__('左アイコン', 'ystandard-blocks')}
						selectedIcon={iconLeft}
						// @ts-ignore
						onClickIcon={(value) => {
							setAttributes({ iconLeft: value });
						}}
					/>
					<BaseControl
						id={'icon-left-size'}
						label={_x('左アイコンサイズ', 'ystandard-blocks')}
					>
						<IconSize
							iconSize={iconSizeLeft}
							onChange={(value) => {
								setAttributes({
									iconSizeLeft: value,
								});
							}}
						/>
					</BaseControl>
				</BaseControl>

				<BaseControl id={'icon-right'}>
					<SvgIconSelect
						iconControlTitle={__('右アイコン', 'ystandard-blocks')}
						selectedIcon={iconRight}
						// @ts-ignore
						onClickIcon={(value) => {
							setAttributes({ iconRight: value });
						}}
					/>
					<BaseControl
						id={'icon-left-size'}
						label={_x('左アイコンサイズ', 'ystandard-blocks')}
					>
						<IconSize
							iconSize={iconSizeRight}
							onChange={(value) => {
								setAttributes({
									iconSizeRight: value,
								});
							}}
						/>
					</BaseControl>
				</BaseControl>
			</PanelBody>
		</>
	);
}

interface IconSizeProps {
	iconSize: string;
	onChange: (value: string) => void;
}

function IconSize(props: IconSizeProps) {
	const { iconSize, onChange } = props;
	const convertIconSize = (size: string) => {
		if ('fa-xs' === size) {
			return 'is-small';
		}
		if ('fa-2x' === size) {
			return 'is-large';
		}
		return size;
	};
	return (
		<>
			<HorizonButtons>
				{ICON_SIZES.map((item) => {
					const variant =
						convertIconSize(iconSize) === item.value
							? 'primary'
							: 'secondary';
					return (
						<Button
							key={item.value}
							variant={variant}
							onClick={() => {
								onChange(item.value);
							}}
						>
							<span>{item.label}</span>
						</Button>
					);
				})}
			</HorizonButtons>
		</>
	);
}
