import classnames from 'classnames';
import IconSelect from '../../src/js/components/icon-select/index';
import { ystdbConfig } from '../../src/js/config/config';

import {
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	PanelColorSettings,
	withColors,
	FontSizePicker,
	withFontSizes,
	URLInput,
} from '@wordpress/block-editor';

import {
	Fragment,
} from '@wordpress/element';

import {
	PanelBody,
	BaseControl,
	ToggleControl,
	TextControl,
	Button,
	RangeControl,
	RadioControl,
} from '@wordpress/components';

import {
	compose,
} from '@wordpress/compose';

import { __, _x } from '@wordpress/i18n';

function ysButton( props ) {
	const {
		textColor,
		backgroundColor,
		setTextColor,
		setBackgroundColor,
		attributes,
		setAttributes,
		isSelected,
		fontSize,
		setFontSize,
		className,
	} = props;
	const {
		borderRadius,
		text,
		iconLeft,
		iconSizeLeft,
		iconRight,
		iconSizeRight,
		align,
		url,
		rel,
		linkTarget,
		paddingType,
		buttonType,
		maxWidth,
		maxUnit,
		animationType,
		animationInterval,
	} = attributes;

	const wrapClasses = classnames(
		className,
		'wp-block-button',
		{
			[ `has-text-align-${ align }` ]: align,
			[ fontSize.class ]: fontSize.class,
		}
	);

	const linkClasses = classnames(
		'wp-block-button__link',
		'ystdb-button__link',
		{
			[ textColor.class ]: textColor.class,
			'has-text-color': textColor.class,
			[ backgroundColor.class ]: backgroundColor.class,
			'has-background': backgroundColor.class,
			[ paddingType ]: paddingType,
			[ buttonType ]: buttonType,
			'has-animation': animationType && 'none' !== animationType,
			[ `has-animation--${ animationType }` ]: 'none' !== animationType,
		}
	);

	const wrapStyles = {
		fontSize: fontSize.size ? fontSize.size + 'px' : undefined,
	};
	const linkStyles = {
		color: textColor.color,
		backgroundColor: backgroundColor.color,
		borderRadius,
		maxWidth: buttonType && maxWidth ? `${ maxWidth }${ maxUnit }` : undefined,
		animationDuration: 'none' !== animationType && animationInterval ? `${ animationInterval }s` : undefined,
	};

	const maxWidthUnitMaximum = 'px' === maxUnit ? 1200 : 100;
	const maxWidthValue = '%' === maxUnit && 100 < maxWidth ? 100 : maxWidth;

	return (
		<Fragment>
			<BlockControls>
				<AlignmentToolbar
					value={ align }
					onChange={ ( nextAlign ) => {
						setAttributes( { align: nextAlign } );
					} }
				/>
			</BlockControls>
			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Color Settings' ) }
					initialOpen={ true }
					colorSettings={ [
						{
							value: backgroundColor.color,
							onChange: ( newColor ) => {
								setAttributes( { customGradient: undefined } );
								setBackgroundColor( newColor );
							},
							label: __( 'Background Color' ),
						},
						{
							value: textColor.color,
							onChange: ( color ) => {
								setTextColor( color );
							},
							label: __( 'Text Color' ),
						},
					] }
				>
				</PanelColorSettings>
				<PanelBody title={ __( '枠線設定', 'ystandard-blocks' ) }>
					<RangeControl
						value={ borderRadius }
						label={ __( '枠線の角丸', 'ystandard-blocks' ) }
						min={ ystdbConfig.button.borderRadiusMin }
						max={ ystdbConfig.button.borderRadiusMax }
						initialPosition={ ystdbConfig.button.borderRadiusInitialPosition }
						allowReset
						onChange={ ( value ) => {
							setAttributes( {
								borderRadius: ! value ? ystdbConfig.button.borderRadiusInitialPosition : value,
							} );
						} }
					/>
				</PanelBody>
				<PanelBody title={ __( 'アイコン設定', 'ystandard-blocks' ) }>
					<IconSelect
						iconControlTitle={ __( '左アイコン', 'ystandard-blocks' ) }
						selectedIcon={ iconLeft }
						onClickIcon={ ( value ) => {
							setAttributes( { iconLeft: value } );
						} }
					/>
					<BaseControl>
						<div className="ystdb-inspector-controls__label">{ _x( '左アイコンサイズ', 'ystandard-blocks' ) }</div>
						<div className={ 'ystdb-btn-selector components-base-control' }>
							{ ystdbConfig.icon.size.map( ( item ) => {
								return (
									<Button
										key={ item.value }
										isDefault
										isPrimary={ iconSizeLeft === item.value }
										onClick={ () => {
											setAttributes( {
												iconSizeLeft: item.value,
											} );
										} }
									>
										<span>{ item.label }</span>
									</Button>
								);
							} ) }
						</div>
					</BaseControl>
					<IconSelect
						iconControlTitle={ __( '右アイコン', 'ystandard-blocks' ) }
						selectedIcon={ iconRight }
						onClickIcon={ ( value ) => {
							setAttributes( { iconRight: value } );
						} }
					/>
					<BaseControl>
						<div className="ystdb-inspector-controls__label">{ _x( '右アイコンサイズ', 'ystandard-blocks' ) }</div>
						<div className={ 'ystdb-btn-selector components-base-control' }>
							{ ystdbConfig.icon.size.map( ( item ) => {
								return (
									<Button
										key={ item.value }
										isDefault
										isPrimary={ iconSizeRight === item.value }
										onClick={ () => {
											setAttributes( {
												iconSizeRight: item.value,
											} );
										} }
									>
										<span>{ item.label }</span>
									</Button>
								);
							} ) }
						</div>
					</BaseControl>
				</PanelBody>

				<PanelBody title={ __( '文字設定', 'ystandard-blocks' ) }>
					<BaseControl>
						<FontSizePicker
							label={ __( '文字サイズ', 'ystandard-blocks' ) }
							value={ fontSize.size }
							onChange={ ( font ) => {
								setFontSize( font );
							} }
						/>
					</BaseControl>
				</PanelBody>
				<PanelBody title={ __( '余白設定', 'ystandard-blocks' ) }>
					<BaseControl>
						<span className={ `ystdb-info__small` }>ボタン内側の余白を設定できます。</span>
						<div className={ 'ystdb-btn-selector components-base-control' }>
							{ ystdbConfig.button.paddingTypes.map( ( item ) => {
								return (
									<Button
										key={ item.value }
										isDefault
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
				</PanelBody>
				<PanelBody title={ __( 'ブロックボタン設定', 'ystandard-blocks' ) }>
					<BaseControl>
						<ToggleControl
							label={ __( 'ボタンをブロック型にする', 'ystandard-blocks' ) }
							onChange={ () => {
								const value = 'is-block' === buttonType ? '' : 'is-block';
								setAttributes( { buttonType: value } );
							} }
							checked={ buttonType === 'is-block' }
						/>
						<RangeControl
							value={ maxWidthValue }
							label={ __( 'ボタン最大幅', 'ystandard-blocks' ) }
							min={ 0 }
							max={ maxWidthUnitMaximum }
							initialPosition={ 100 }
							allowReset
							onChange={ ( value ) => {
								setAttributes( { maxWidth: value } );
							} }
						/>
						<RadioControl
							label={ __( '最大幅単位', 'ystandard-blocks' ) }
							selected={ maxUnit }
							options={ [
								{ label: __( '%', 'ystandard-blocks' ), value: '%' },
								{ label: __( 'px', 'ystandard-blocks' ), value: 'px' },
							] }
							onChange={ ( option ) => {
								setAttributes( { maxUnit: option } );
							} }
						/>
					</BaseControl>
				</PanelBody>
				<PanelBody title={ __( 'アニメーション設定', 'ystandard-blocks' ) }>
					<BaseControl>
						<RadioControl
							label={ __( 'アニメーション種類', 'ystandard-blocks' ) }
							selected={ animationType }
							options={ ystdbConfig.button.animationTypes }
							onChange={ ( option ) => {
								setAttributes( { animationType: option } );
							} }
						/>
						<RangeControl
							value={ animationInterval }
							label={ __( 'アニメーションの速さ(秒)', 'ystandard-blocks' ) }
							min={ 1 }
							max={ 10 }
							initialPosition={ 5 }
							allowReset
							onChange={ ( value ) => {
								setAttributes( { animationInterval: value } );
							} }
						/>
					</BaseControl>
				</PanelBody>
				<PanelBody title={ __( 'Link settings' ) }>
					<ToggleControl
						label={ __( 'Open in new tab' ) }
						onChange={ ( value ) => {
							const newLinkTarget = value ? '_blank' : undefined;
							let updatedRel = rel;
							if ( newLinkTarget && ! rel ) {
								updatedRel = ystdbConfig.button.newTabRel;
							} else if ( ! newLinkTarget && rel === ystdbConfig.button.newTabRel ) {
								updatedRel = undefined;
							}
							setAttributes( {
								linkTarget: newLinkTarget,
								rel: updatedRel,
							} );
						} }
						checked={ linkTarget === '_blank' }
					/>
					<TextControl
						label={ __( 'Link rel' ) }
						value={ rel || '' }
						onChange={ ( value ) => {
							setAttributes( { rel: value } );
						} }
					/>
				</PanelBody>
			</InspectorControls>

			<div className={ wrapClasses } style={ wrapStyles }>
				<span className={ linkClasses } style={ linkStyles }>
					<span className="ystdb-button__link-content">
						{ ( !! iconLeft &&
							<span className={ classnames(
								'ystdb-button__icon',
								'ystdb-button__icon--left',
								iconLeft,
								{
									[ iconSizeLeft ]: iconSizeLeft,
								}
							) }> </span>
						) }
						<RichText
							tagName={ 'span' }
							placeholder={ __( 'Add text…' ) }
							value={ text }
							onChange={ ( value ) => setAttributes( { text: value } ) }
							withoutInteractiveFormatting
							className={ 'ystdb-button__text' }
						/>
						{ ( !! iconRight &&
							<span className={ classnames(
								'ystdb-button__icon',
								'ystdb-button__icon--right',
								iconRight,
								{
									[ iconSizeRight ]: iconSizeRight,
								}
							) }> </span>
						) }
					</span>
				</span>
			</div>

			{ ( !! isSelected &&
				<div className={ 'ystdb-button__link-container' }>
					<div className="ystdb-button__link-label">リンク先URL</div>
					<URLInput
						label={ __( 'Link' ) }
						className="ystdb-button__link"
						value={ url }
						/* eslint-disable jsx-a11y/no-autofocus */
						autoFocus={ false }
						/* eslint-enable jsx-a11y/no-autofocus */
						onChange={ ( value ) => setAttributes( { url: value } ) }
						disableSuggestions={ ! isSelected }
						isFullWidth
						hasBorder
					/>
				</div>
			) }
		</Fragment>
	);
}

export default compose( [
	withColors( 'backgroundColor', { textColor: 'color' } ),
	withFontSizes( 'fontSize' ),
] )( ysButton );
