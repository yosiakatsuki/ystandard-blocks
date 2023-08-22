/**
 * WordPress dependencies.
 */
import {
	BaseControl,
	Button,
	TextControl,
	Popover,
} from '@wordpress/components';
import { useMemo, useCallback, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Plugin.
 */
import { SvgIcon } from '@aktk/blocks/components/svg-icon';
import { getFilteredIcons } from '@aktk/blocks/utils/icon';

/**
 * Internal dependencies.
 */
import './icon-select.scss';

export interface IconSelectProps {
	icon: string;
	label?: string;
	onChange: (value: string) => void;
}

export function IconSelect(props: IconSelectProps) {
	const { icon, label, onChange } = props;
	const [filter, setFilter] = useState('');
	const [isOpen, setIsOpen] = useState(false);
	const [popoverAnchor, setPopoverAnchor] = useState();
	const buttonText = isOpen
		? __('閉じる', 'ystandard-blocks')
		: __('アイコン選択', 'ystandard-blocks');

	return (
		<BaseControl
			id={'icon-select'}
			className={'ystd-component__icon-select'}
		>
			<>
				{label && <div className={'font-bold mb-2'}>{label}</div>}
				{/* @ts-expect-error */}
				<div className={'flex gap-4'} ref={setPopoverAnchor}>
					<div className="w-8 h-8 flex justify-center items-center bg-gray-300">
						<PreviewIcon icon={icon} />
					</div>
					<Button
						variant={'secondary'}
						className="h-8"
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					>
						{buttonText}
					</Button>
				</div>
				{isOpen && (
					<Popover
						anchor={popoverAnchor}
						position={'top right'}
						className={
							'ystd-component__icon-select__popover min-w-[300px]'
						}
						onClose={() => setIsOpen(false)}
					>
						<div className="p-2">
							<div className="mb-2">
								<TextControl
									value={filter}
									onChange={setFilter}
									placeholder={__(
										'絞り込み...',
										'ystandard-blocks'
									)}
								/>
							</div>
							<div className="max-h-[200px] overflow-y-scroll">
								<IconButtons
									icon={icon}
									onChange={onChange}
									filter={filter}
								/>
							</div>
						</div>
					</Popover>
				)}
			</>
		</BaseControl>
	);
}

function PreviewIcon({ icon }: { icon: string }) {
	return (
		<SvgIcon
			name={icon}
			fallback={
				<div
					className={
						'aspect-[1/1] w-[24px] flex items-center justify-center'
					}
				>
					...
				</div>
			}
		/>
	);
}

interface IconButtonsProps {
	icon: string;
	onChange: (value: string) => void;
	filter?: string;
}

function IconButtons(props: IconButtonsProps) {
	const { icon, onChange, filter = '' } = props;
	const icons = getFilteredIcons(filter);
	const handleOnChange = useCallback(
		(value: string) => {
			const _value = value === icon ? '' : value;
			onChange(_value);
		},
		[onChange, icon]
	);

	const Content = useMemo(() => {
		return (
			<div className="ystd-component__icon-select__icon-list grid grid-cols-5 gap-2">
				{icons.map((item) => {
					const variant =
						icon === item.name ? 'primary' : 'secondary';
					return (
						<Button
							variant={variant}
							onClick={() => handleOnChange(item.name)}
							className={'flex justify-center items-center'}
						>
							<PreviewIcon icon={item.name} />
						</Button>
					);
				})}
			</div>
		);
	}, [icon, filter]);

	return <>{Content}</>;
}
