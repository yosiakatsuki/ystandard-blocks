import classnames from 'classnames';
import getNum from '../../src/js/util/_getNum';
import { allowedBlocks, template, alignmentsControls } from './config';

import {
	BlockControls,
	InspectorControls,
	InnerBlocks,
	__experimentalBlock as Block,
} from '@wordpress/block-editor';

import { Fragment } from '@wordpress/element';

import {
	PanelBody,
	BaseControl,
	RangeControl,
	Toolbar,
} from '@wordpress/components';

import { __, _x } from '@wordpress/i18n';

function columns( props ) {
	const { attributes, setAttributes, className } = props;
	const { colPc, colTablet, colMobile, verticalAlignment } = attributes;

	const classes = classnames( 'ystdb-columns', {
		[ `has-${ colMobile }-columns` ]: colMobile,
		[ `has-${ colTablet }-columns--tablet` ]: colTablet,
		[ `has-${ colPc }-columns--pc` ]: colPc,
		[ `is-vertically-aligned-${ verticalAlignment }` ]: verticalAlignment,
	} );

	const DEFAULT_CONTROLS = [ 'top', 'center', 'bottom', 'last' ];
	const DEFAULT_CONTROL = 'top';

	const activeAlignment = alignmentsControls[ verticalAlignment ];
	const defaultAlignmentControl = alignmentsControls[ DEFAULT_CONTROL ];

	return (
		<Fragment>
			<BlockControls>
				<Toolbar
					isCollapsed={ true }
					icon={
						activeAlignment
							? activeAlignment.icon
							: defaultAlignmentControl.icon
					}
					label={ _x(
						'Change vertical alignment',
						'Block vertical alignment setting label'
					) }
					controls={ DEFAULT_CONTROLS.map( ( control ) => {
						return {
							...alignmentsControls[ control ],
							isActive: verticalAlignment === control,
							onClick: () =>
								setAttributes( {
									verticalAlignment:
										verticalAlignment === control
											? undefined
											: control,
								} ),
						};
					} ) }
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ __( 'カラム設定', 'ystandard-blocks' ) }>
					<BaseControl>
						<RangeControl
							label={ __( 'PC', 'ystandard-blocks' ) }
							beforeIcon={ 'desktop' }
							value={ colPc }
							onChange={ ( value ) => {
								setAttributes( {
									colPc: getNum( value, 1, 6, 3 ),
								} );
							} }
							min={ 1 }
							max={ 6 }
						/>
						<RangeControl
							label={ __( 'タブレット', 'ystandard-blocks' ) }
							beforeIcon={ 'tablet' }
							value={ colTablet }
							onChange={ ( value ) => {
								setAttributes( {
									colTablet: getNum( value, 1, 6, 3 ),
								} );
							} }
							min={ 1 }
							max={ 6 }
						/>
						<RangeControl
							label={ __( 'モバイル', 'ystandard-blocks' ) }
							beforeIcon={ 'smartphone' }
							value={ colMobile }
							onChange={ ( value ) => {
								setAttributes( {
									colMobile: getNum( value, 1, 6, 1 ),
								} );
							} }
							min={ 1 }
							max={ 6 }
						/>
					</BaseControl>
				</PanelBody>
			</InspectorControls>

			<Block.div
				className={ classnames( className, 'ystdb-columns-wrap' ) }
			>
				<div className={ classes }>
					<InnerBlocks
						allowedBlocks={ allowedBlocks }
						template={ template }
						templateLock={ false }
					/>
				</div>
			</Block.div>
		</Fragment>
	);
}

export default columns;
