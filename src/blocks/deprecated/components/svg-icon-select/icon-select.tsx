import classnames from 'classnames';
/**
 * WordPress dependencies.
 */
import { useState } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
/**
 * Plugin.
 */
import { getIcons } from '@aktk/block-components/utils/icon';
import { SvgIcon } from '@aktk/block-components/components/svg-icon';

// @ts-ignore
export default function IconSelect(props) {
	const [isOpen, setIsOpen] = useState(false);
	const { selectedIcon, onChange, previewIcon } = props;
	const iconList = getIcons();
	const isPreview = false === previewIcon ? previewIcon : true;

	return (
		<div className={'ys-icon-picker'}>
			<div className={'ys-icon-picker__selected'}>
				{isPreview && (
					<div className={'ys-icon-picker__preview'}>
						{!!selectedIcon && <SvgIcon name={selectedIcon} />}
					</div>
				)}
				<Button
					className={classnames({
						'is-open': isOpen,
					})}
					variant="secondary"
					onClick={() => {
						setIsOpen(!isOpen);
					}}
					style={{
						minWidth: '110px',
						textAlign: 'center',
						justifyContent: 'center',
					}}
				>
					{isOpen && <span>{__('閉じる', 'ystandard-blocks')}</span>}
					{!isOpen && (
						<span>{__('アイコン選択', 'ystandard-blocks')}</span>
					)}
				</Button>
				<Button
					className={'ys-icon-picker__remove'}
					disabled={!selectedIcon}
					isSmall
					variant="secondary"
					onClick={() => {
						onChange('');
						setIsOpen(false);
					}}
				>
					{__('リセット', 'ystandard-blocks')}
				</Button>
			</div>
			<div
				className={classnames('ys-icon-picker__list', {
					'is-open': isOpen,
				})}
			>
				<div className="ys-icon-picker__list-container">
					{
						// @ts-ignore
						iconList.map((icon) => {
							return (
								<Button
									key={icon.name}
									className={classnames(
										`ys-icon-picker__icon`,
										{
											'is-selected':
												selectedIcon === icon.name,
										}
									)}
									onClick={() => {
										if (selectedIcon === icon.name) {
											onChange('');
											setIsOpen(false);
										} else {
											onChange(icon.name);
										}
									}}
								>
									<SvgIcon name={icon.name} />
								</Button>
							);
						})
					}
				</div>
			</div>
		</div>
	);
}
