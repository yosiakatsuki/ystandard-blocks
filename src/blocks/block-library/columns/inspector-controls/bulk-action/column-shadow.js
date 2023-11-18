import { BaseControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import HorizonButtons from '@aktk/components/horizon-buttons';

const ColumnShadow = (props) => {
	const { updateColumnAttributes } = props;
	const handleOnClick = (value) => {
		updateColumnAttributes({
			shadow: value,
		});
	};
	return (
		<BaseControl id={'shadow'} label={__('影', 'ystandard-blocks')}>
			<HorizonButtons>
				<Button
					key={'shadow-on'}
					isSecondary
					onClick={() => {
						handleOnClick(true);
					}}
				>
					{__('ON', 'ystandard-blocks')}
				</Button>
				<Button
					key={'shadow-off'}
					isSecondary
					onClick={() => {
						handleOnClick(false);
					}}
				>
					{__('OFF', 'ystandard-blocks')}
				</Button>
			</HorizonButtons>
		</BaseControl>
	);
};
export default ColumnShadow;
