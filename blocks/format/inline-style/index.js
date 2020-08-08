import { inlineStyles } from './config';
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { Toolbar, ToolbarButton } from '@wordpress/components';
import { BlockFormatControls } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

/**
 * インラインスタイル追加
 */
inlineStyles.map( ( style, index ) => {
	registerFormatType( style.name, {
		title: style.title,
		tagName: 'span',
		className: style.class,
		edit( props ) {
			const { value, isActive, onChange } = props;
			const onToggle = () =>
				onChange( toggleFormat( value, { type: style.name } ) );
			return (
				<Fragment>
					<BlockFormatControls>
						<div className="editor-format-toolbar block-editor-format-toolbar">
							<div
								className={ `ystdb-inline-style-toolbar inline-style-${
									index + 1
								}` }
							>
								<Toolbar>
									<ToolbarButton
										icon={ style.icon }
										title={ style.title }
										onClick={ onToggle }
										isActive={ isActive }
									/>
								</Toolbar>
							</div>
						</div>
					</BlockFormatControls>
				</Fragment>
			);
		},
	} );
	return true;
} );
