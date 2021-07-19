import classnames from 'classnames';
import IconSelect from './icon-select';
import { __ } from '@wordpress/i18n';
import { RadioControl, BaseControl } from '@wordpress/components';

import { Component } from '@wordpress/element';

class SVGIconSelect extends Component {
	render() {
		const {
			iconControlTitle,
			iconPosition,
			onChangePosition,
			selectedIcon,
			onClickIcon,
			customInfo,
			customInfoStyle,
			previewIcon,
			align,
			isFloat,
		} = this.props;

		const iconBaseControlTitle =
			iconControlTitle === undefined
				? __('表示アイコン', 'ystandard-blocks')
				: iconControlTitle;

		return (
			<div
				className={classnames('ystdb-icon-select', {
					[`align--${align}`]: align,
					'is-float': isFloat,
				})}
			>
				{customInfo && <div style={customInfoStyle}>{customInfo}</div>}
				{!!onChangePosition && (
					<BaseControl>
						<div className="ystdb-inspector-controls__label">
							{__('アイコン表示位置', 'ystandard-blocks')}
						</div>
						<div className={'ystdb-icon-select__position'}>
							<RadioControl
								selected={iconPosition}
								options={[
									{
										label: __('左', 'ystandard-blocks'),
										value: 'left',
									},
									{
										label: __('右', 'ystandard-blocks'),
										value: 'right',
									},
								]}
								onChange={onChangePosition}
							/>
						</div>
					</BaseControl>
				)}
				<BaseControl>
					<div className="ystdb-inspector-controls__label">
						{iconBaseControlTitle}
					</div>
					<div className={'ystdb-icon-select__picker'}>
						<IconSelect
							selectedIcon={selectedIcon}
							previewIcon={previewIcon}
							onChange={(value) => {
								onClickIcon(value);
							}}
						/>
					</div>
				</BaseControl>
			</div>
		);
	}
}

export default SVGIconSelect;
