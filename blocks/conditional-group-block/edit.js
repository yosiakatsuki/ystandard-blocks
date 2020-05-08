import classnames from 'classnames';
import { InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

const conditionalGroupEdit = ( {
	attributes,
	setAttributes,
	className,
	hasInnerBlocks,
} ) => {
	const { hideSp, hideMd, hideLg, hideAMP, onlyAMP } = attributes;
	const classes = classnames( className, 'ystdb-conditional-group', {} );
	const innerClasses = classnames(
		'wp-block-group__inner-container',
		'ystdb-conditional-group__inner',
		{}
	);

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( '画面サイズ別非表示設定', 'ystandard-blocks' ) }
					initialOpen={ true }
				>
					<div className={ `ystdb-info__label` }>
						各デバイスの画面サイズでブロックを非表示にできます。
					</div>
					<div style={ { marginTop: '1em' } }>
						<ToggleControl
							label={ __(
								'スマートフォンサイズで非表示',
								'ystandard-blocks'
							) }
							checked={ hideSp }
							onChange={ ( value ) => {
								setAttributes( { hideSp: value } );
							} }
						/>

						<ToggleControl
							label={ __(
								'タブレットサイズで非表示',
								'ystandard-blocks'
							) }
							checked={ hideMd }
							onChange={ ( value ) => {
								setAttributes( { hideMd: value } );
							} }
						/>

						<ToggleControl
							label={ __(
								'PCサイズで非表示',
								'ystandard-blocks'
							) }
							checked={ hideLg }
							onChange={ ( value ) => {
								setAttributes( { hideLg: value } );
							} }
						/>
					</div>
				</PanelBody>
				<PanelBody
					title={ __( 'AMP 表示・非表示 設定', 'ystandard-blocks' ) }
					initialOpen={ true }
				>
					<div className={ `ystdb-info__label` }>
						AMPページでの表示・非表示設定
					</div>
					<div style={ { marginTop: '1em' } }>
						<ToggleControl
							label={ __(
								'AMPページで非表示',
								'ystandard-blocks'
							) }
							checked={ hideAMP }
							onChange={ ( value ) => {
								setAttributes( { hideAMP: value } );
							} }
						/>
						<ToggleControl
							label={ __(
								'AMPページのみ表示',
								'ystandard-blocks'
							) }
							checked={ onlyAMP }
							onChange={ ( value ) => {
								setAttributes( { onlyAMP: value } );
							} }
						/>
					</div>
				</PanelBody>
			</InspectorControls>

			<div className={ classes }>
				<div className={ innerClasses }>
					<InnerBlocks
						renderAppender={
							hasInnerBlocks
								? undefined
								: () => <InnerBlocks.ButtonBlockAppender />
						}
					/>
				</div>
			</div>
		</>
	);
};

export default compose( [
	withSelect( ( select, { clientId } ) => {
		const { getBlock } = select( 'core/block-editor' );

		const block = getBlock( clientId );

		return {
			hasInnerBlocks: !! ( block && block.innerBlocks.length ),
		};
	} ),
] )( conditionalGroupEdit );
