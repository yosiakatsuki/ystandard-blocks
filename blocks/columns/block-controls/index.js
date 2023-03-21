import { BlockControls } from '@wordpress/block-editor';
import VerticalAlign from './vertical-align';
import HorizonAlignment from './horizon-alignment';

const ColumnsBlockControls = (props) => {
	return (
		<BlockControls>
			<VerticalAlign {...props} />
			<HorizonAlignment {...props} />
		</BlockControls>
	);
};

export default ColumnsBlockControls;
