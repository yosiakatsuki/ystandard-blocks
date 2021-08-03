import { Component } from '@wordpress/element';
import { withState, compose } from '@wordpress/compose';
import { Button } from '@wordpress/components';
import classnames from 'classnames';
import { getIcons } from '@ystdb/util/icons';
import SVGIcon from '@ystdb/components/svg-icon';
import { __ } from '@wordpress/i18n';

class IconSelect extends Component {
	render() {
		const {
			selectedIcon,
			onChange,
			isOpen,
			previewIcon,
			setState,
		} = this.props;

		const iconList = getIcons();
		const isPreview = false === previewIcon ? previewIcon : true;

		return (
			<div className={'ys-icon-picker'}>
				<div className={'ys-icon-picker__selected'}>
					{isPreview && (
						<div className={'ys-icon-picker__preview'}>
							{!!selectedIcon && <SVGIcon name={selectedIcon} />}
						</div>
					)}
					<Button
						className={classnames({
							'is-open': isOpen,
						})}
						isSecondary
						onClick={() => {
							setState({ isOpen: !isOpen });
						}}
						style={{
							minWidth: '110px',
							textAlign: 'center',
							justifyContent: 'center',
						}}
					>
						{isOpen && (
							<span>{__('閉じる', 'ystandard-blocks')}</span>
						)}
						{!isOpen && (
							<span>
								{__('アイコン選択', 'ystandard-blocks')}
							</span>
						)}
					</Button>
					<Button
						className={'ys-icon-picker__remove'}
						disabled={!selectedIcon}
						isSmall
						isSecondary
						onClick={() => {
							onChange('');
							setState({ isOpen: false });
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
						{iconList.map((icon) => {
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
											setState({ isOpen: false });
										} else {
											onChange(icon.name);
										}
									}}
								>
									<SVGIcon name={icon.name} />
								</Button>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default compose([withState({ isOpen: false })])(IconSelect);
