import { PanelBody, BaseControl, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { getNumber } from '@aktk/helper/number.js';

const PanelColumns = ({ attributes, setAttributes }) => {
	const { colPc, colTablet, colMobile } = attributes;

	const handleOnchangePc = (value) => {
		setAttributes({
			colPc: getNumber(value, 3, 1, 6),
		});
	};

	const handleOnChangeTablet = (value) => {
		setAttributes({
			colTablet: getNumber(value, 3, 1, 6),
		});
	};

	const handleOnChangeMobile = (value) => {
		setAttributes({
			colMobile: getNumber(value, 1, 1, 6),
		});
	};
	return (
		<PanelBody title={__('カラム数', 'ystandard-blocks')}>
			<BaseControl>
				<RangeControl
					label={__('デスクトップ', 'ystandard-blocks')}
					beforeIcon={'desktop'}
					value={colPc}
					onChange={handleOnchangePc}
					min={1}
					max={6}
				/>
				<RangeControl
					label={__('タブレット', 'ystandard-blocks')}
					beforeIcon={'tablet'}
					value={colTablet}
					onChange={handleOnChangeTablet}
					min={1}
					max={6}
				/>
				<RangeControl
					label={__('モバイル', 'ystandard-blocks')}
					beforeIcon={'smartphone'}
					value={colMobile}
					onChange={handleOnChangeMobile}
					min={1}
					max={6}
				/>
			</BaseControl>
		</PanelBody>
	);
};

export default PanelColumns;
