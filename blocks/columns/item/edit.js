import classnames from 'classnames';

import {
	InnerBlocks,
	InspectorControls,
	withColors,
	PanelColorSettings,
} from '@wordpress/block-editor';
import {
	PanelBody,
	BaseControl,
	ToggleControl,
	Button,
} from '@wordpress/components';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { paddingTypes } from './config';

function ColumnEdit( props ) {
	const {
		attributes,
		setAttributes,
		setBackgroundColor,
		backgroundColor,
		hasChildBlocks,
		className,
	} = props;
	const { shadow, paddingType } = attributes;

	const classes = classnames( className, 'ystdb-column', {
		'has-background': backgroundColor.color,
		[ backgroundColor.class ]: backgroundColor.class,
		'has-shadow': shadow,
		[ paddingType ]: paddingType,
	} );

	return (
		<Fragment>
			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Color settings' ) }
					colorSettings={ [
						{
							value: backgroundColor.color,
							onChange: ( color ) => {
								setBackgroundColor( color );
							},
							label: __( 'Background Color' ),
						},
					] }
				/>
				<PanelBody title={ __( 'デザイン', 'ystandard-blocks' ) }>
					<BaseControl
						id={ 'padding' }
						label={ __( '余白', 'ystandard-blocks' ) }
					>
						<div className="ystdb-inspector-controls__horizon-buttons">
							{ paddingTypes.map( ( item ) => {
								return (
									<Button
										key={ item.value }
										isSecondary={
											paddingType !== item.value
										}
										isPrimary={ paddingType === item.value }
										onClick={ () => {
											setAttributes( {
												paddingType: item.value,
											} );
										} }
									>
										<span>{ item.label }</span>
									</Button>
								);
							} ) }
						</div>
					</BaseControl>
					<BaseControl
						id={ 'shadow' }
						label={ __( '影', 'ystandard-blocks' ) }
					>
						<ToggleControl
							label={ __( '影をつける', 'ystandard-blocks' ) }
							checked={ shadow }
							onChange={ () => {
								setAttributes( {
									shadow: ! shadow,
								} );
							} }
						/>
					</BaseControl>
				</PanelBody>
			</InspectorControls>

			<div className={ classes }>
				<div className="ystdb-column-block-container">
					<InnerBlocks
						templateLock={ false }
						renderAppender={
							hasChildBlocks
								? undefined
								: () => <InnerBlocks.ButtonBlockAppender />
						}
					/>
				</div>
			</div>
		</Fragment>
	);
}

export default compose( [
	withColors( 'backgroundColor' ),
	withSelect( ( select, ownProps ) => {
		const { clientId } = ownProps;
		const { getBlockOrder } = select( 'core/block-editor' );

		return {
			hasChildBlocks: getBlockOrder( clientId ).length > 0,
		};
	} ),
] )( ColumnEdit );
