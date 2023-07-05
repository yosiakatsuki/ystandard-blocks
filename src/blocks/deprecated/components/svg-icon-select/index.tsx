import classnames from 'classnames';
/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { RadioControl, BaseControl } from '@wordpress/components';
/**
 * Component
 */
import IconSelect from './icon-select';
import './index.scss';

/**
 *
 * @param props
 * @constructor
 * @deprecated
 */
// @ts-ignore
export default function SvgIconSelect(props) {
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
	} = props;
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
				<BaseControl id={'icon-position'}>
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
			<BaseControl id={'icon-select'}>
				<div className="ystdb-inspector-controls__label">
					{iconBaseControlTitle}
				</div>
				<div className={'ystdb-icon-select__picker'}>
					{/* @ts-ignore */}
					<IconSelect
						selectedIcon={selectedIcon}
						previewIcon={previewIcon}
						// @ts-ignore
						onChange={(value) => {
							onClickIcon(value);
						}}
					/>
				</div>
			</BaseControl>
		</div>
	);
}
