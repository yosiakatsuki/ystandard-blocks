import { getBlockEditorConfig } from '@ystd/helper/config';
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { BlockFormatControls } from '@wordpress/block-editor';
import { getProperty } from '@ystd/helper/object';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';

const buttons = getProperty(
	getBlockEditorConfig( 'inlineStyle', {} ),
	'buttons',
	[]
);

buttons.map( ( button, index ) => {
	const isEnable = getProperty( button, 'enable', true );
	const buttonNo = index + 1;
	const title = __( '[ys]マーカー', 'ystandard-blocks' );
	const name = `ystdb/inline-style-${ buttonNo }`;
	const className = `ystdb-inline--${ buttonNo }`;
	const icon = 'admin-customizer';
	if ( isEnable ) {
		registerFormatType( name, {
			title: `${ title } ${ buttonNo }`,
			tagName: 'span',
			className,
			edit( props ) {
				const { value, isActive, onChange } = props;
				const onToggle = () =>
					onChange( toggleFormat( value, { type: name } ) );
				return (
					<>
						<BlockFormatControls>
							<div className="editor-format-toolbar block-editor-format-toolbar">
								<div
									className={ classnames(
										'ystdb-inline-style-toolbar',
										`inline-style-${ buttonNo }`,
										className
									) }
								>
									<ToolbarGroup>
										<ToolbarButton
											icon={ icon }
											title={ `${ title } ${ buttonNo }` }
											onClick={ onToggle }
											isActive={ isActive }
										/>
									</ToolbarGroup>
								</div>
							</div>
						</BlockFormatControls>
					</>
				);
			},
		} );
	}
	return true;
} );
