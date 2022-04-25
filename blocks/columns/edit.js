import classnames from 'classnames';
/**
 * WordPress.
 */
import { withDispatch } from '@wordpress/data';
import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	PanelBody,
	BaseControl,
	RangeControl,
	Button,
	ToggleControl,
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';
/**
 * yStandard.
 */
import { getNumber } from '@ystd/helper/number';

/**
 * Block.
 */
import { default as BlockControls } from './block-controls';
import { paddingTypes } from './item/config';

const ALLOWED_BLOCKS = [ 'ystdb/column' ];
const TEMPLATE = [
	[ 'ystdb/column', {} ],
	[ 'ystdb/column', {} ],
	[ 'ystdb/column', {} ],
];

function Columns( props ) {
	const {
		attributes,
		setAttributes,
		className,
		updatePadding,
		updateBoxShadow,
	} = props;
	const {
		colPc,
		colTablet,
		colMobile,
		verticalAlignment,
		horizonAlignment,
		reverse,
		removeMargin,
	} = attributes;

	const blockProps = useBlockProps( {
		className: classnames( className, 'ystdb-columns-wrap' ),
	} );

	const columnsProps = {
		className: classnames( 'ystdb-columns', {
			[ `has-${ colMobile }-columns` ]: colMobile,
			[ `has-${ colTablet }-columns--tablet` ]: colTablet,
			[ `has-${ colPc }-columns--pc` ]: colPc,
			[ `is-vertically-aligned-${ verticalAlignment }` ]: verticalAlignment,
			[ `is-horizontally-aligned-${ horizonAlignment }` ]: horizonAlignment,
			'is-no-margin': removeMargin,
		} ),
	};

	return (
		<>
			<BlockControls { ...props } />
			<InspectorControls>
				<PanelBody title={ __( 'カラム設定', 'ystandard-blocks' ) }>
					<BaseControl
						id={ 'column-count' }
						label={ __( 'カラム数', 'ystandard-blocks' ) }
					>
						<RangeControl
							label={ __( 'デスクトップ', 'ystandard-blocks' ) }
							beforeIcon={ 'desktop' }
							value={ colPc }
							onChange={ ( value ) => {
								setAttributes( {
									colPc: getNumber( value, 3, 1, 6 ),
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
									colTablet: getNumber( value, 3, 1, 6 ),
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
									colMobile: getNumber( value, 1, 1, 6 ),
								} );
							} }
							min={ 1 }
							max={ 6 }
						/>
					</BaseControl>
					<BaseControl
						id={ 'remove-margin' }
						label={ __(
							'カラム間の余白を削除',
							'ystandard-blocks'
						) }
					>
						<ToggleControl
							label={ __( '余白なし', 'ystandard-blocks' ) }
							checked={ removeMargin }
							onChange={ () => {
								setAttributes( {
									removeMargin: ! removeMargin,
								} );
							} }
						/>
					</BaseControl>
					<BaseControl
						id={ 'column-reverse' }
						label={ __(
							'表示順序を逆順にする',
							'ystandard-blocks'
						) }
					>
						<div className="ystdb-inspector-controls__dscr margin-bottom">
							※行内での表示が逆順になります。1行で複数列のカラムを表示するときに便利な設定です。
							<br/>
							※公開ページのみ逆順で表示され、編集画面では追加した順で表示されます。
						</div>
						<ToggleControl
							label={ __( '逆順にする', 'ystandard-blocks' ) }
							checked={ reverse }
							onChange={ () => {
								setAttributes( {
									reverse: ! reverse,
								} );
							} }
						/>
					</BaseControl>
				</PanelBody>
				<PanelBody
					title={ __( 'デザイン 一括設定', 'ystandard-blocks' ) }
				>
					<BaseControl
						id={ 'padding' }
						label={ __( '余白', 'ystandard-blocks' ) }
					>
						<div
							className={
								'ystdb-btn-selector components-base-control'
							}
						>
							<div className="ystdb-inspector-controls__horizon-buttons">
								{ paddingTypes.map( ( item ) => {
									return (
										<Button
											key={ item.value }
											isSecondary
											onClick={ () => {
												updatePadding( {
													paddingType: item.value,
												} );
											} }
										>
											<span>{ item.label }</span>
										</Button>
									);
								} ) }
							</div>
						</div>
					</BaseControl>
					<BaseControl
						id={ 'shadow' }
						label={ __( '影', 'ystandard-blocks' ) }
					>
						<div className="ystdb-inspector-controls__horizon-buttons">
							<Button
								key={ 'shadow-on' }
								isSecondary
								onClick={ () => {
									updateBoxShadow( true );
								} }
							>
								{ __( 'ON', 'ystandard-blocks' ) }
							</Button>
							<Button
								key={ 'shadow-off' }
								isSecondary
								onClick={ () => {
									updateBoxShadow( false );
								} }
							>
								{ __( 'OFF', 'ystandard-blocks' ) }
							</Button>
						</div>
					</BaseControl>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div { ...columnsProps }>
					<InnerBlocks
						allowedBlocks={ ALLOWED_BLOCKS }
						template={ TEMPLATE }
						templateLock={ false }
					/>
				</div>
			</div>
		</>
	);
};

const columnsEdit = withDispatch( ( dispatch, ownProps, registry ) => ( {
	updatePadding( paddingType ) {
		const { clientId } = ownProps;
		const { updateBlockAttributes } = dispatch( 'core/block-editor' );
		const { getBlockOrder } = registry.select( 'core/block-editor' );
		const innerBlockClientIds = getBlockOrder( clientId );
		innerBlockClientIds.forEach( ( innerBlockClientId ) => {
			updateBlockAttributes( innerBlockClientId, paddingType );
		} );
	},
	updateBoxShadow( shadow ) {
		const { clientId } = ownProps;
		const { updateBlockAttributes } = dispatch( 'core/block-editor' );
		const { getBlockOrder } = registry.select( 'core/block-editor' );
		const innerBlockClientIds = getBlockOrder( clientId );
		innerBlockClientIds.forEach( ( innerBlockClientId ) => {
			updateBlockAttributes( innerBlockClientId, { shadow } );
		} );
	},
} ) )( Columns );

export default columnsEdit;
