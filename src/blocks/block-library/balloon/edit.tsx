import classnames from 'classnames';
/**
 * WordPress Dependencies
 */
import { useBlockProps, withColors } from '@wordpress/block-editor';

/**
 * Block.
 */
import InspectorControls from './inspector-controls';
import BlockControls from '@aktk/blocks/block-library/balloon/block-controls';
import './editor.scss';

// @ts-ignore
export default function Edit( props ) {
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
