import { BlockControls } from '@wordpress/block-editor';
import VerticalAlign from './vertical-align';
import HorizonAlignment from './horizon-alignment';

// @ts-ignore
const ColumnsBlockControls = ( props ) => {
	return (
		// @ts-ignore
		<BlockControls>
			<VerticalAlign { ...props } />
			<HorizonAlignment { ...props } />
		</BlockControls>
	);
};

export default ColumnsBlockControls;
