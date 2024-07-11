import classnames from 'classnames';
/**
 * WordPress Dependencies
 */
import {
	useBlockProps,
	withColors,
	withFontSizes,
} from '@wordpress/block-editor';

/**
 * Block.
 */
import InspectorControls from './inspector-controls';
import BlockControls from '@aktk/blocks/block-library/balloon/block-controls';
import './editor.scss';
import { compose } from '@wordpress/compose';

// @ts-ignore
export function Edit( props ) {
	const { attributes, className } = props;
	const blockProps = useBlockProps( {
		className: classnames( 'ystdb-balloon', className ),
	} );
	return (
		<>
			<BlockControls { ...props } />
			<InspectorControls { ...props } />

			<div { ...blockProps }>
				<div>バルーン作成中</div>
			</div>
		</>
	);
}

// @ts-ignore
export default compose( [
	withColors( 'backgroundColor', {
		textColor: 'color',
		avatarNameColor: 'color',
		avatarBorderColor: 'borderColor',
		balloonBorderColor: 'borderColor',
	} ),
	withFontSizes( 'fontSize' ),
] )( Edit );
