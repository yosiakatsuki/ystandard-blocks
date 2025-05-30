/**
 * WordPress dependencies
 */
import { ToolbarButton, Popover } from '@wordpress/components';
import { link, linkOff } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';

/**
 * Aktk dependencies.
 */
import {
	CustomURLInput,
	type CustomURLInputValue,
} from '@aktk/block-components/components/url-input';

// @ts-ignore
export function ToolbarLinkButton( props ) {
	const [ isEditingURL, setIsEditingURL ] = useState( false );

	const { attributes, setAttributes, isSelected } = props;
	const { linkTarget, rel, url } = attributes;
	const isURLSet = !! url;

	const popoverAnchor = null;

	useEffect( () => {
		if ( ! isSelected ) {
			setIsEditingURL( false );
		}
	}, [ isSelected ] );

	// @ts-ignore
	function startEditing( event ) {
		event.preventDefault();
		if ( ! isEditingURL ) {
			setIsEditingURL( true );
		}
	}

	// リンク解除.
	function unlink() {
		setAttributes( {
			url: undefined,
			linkTarget: undefined,
			rel: undefined,
		} );
		setIsEditingURL( false );
	}

	const handleCustomURLInputChange = ( value: CustomURLInputValue ) => {
		const { url: newURL, linkTarget: newLinkTarget, rel: newRel } = value;
		setAttributes( {
			url: newURL,
			linkTarget: newLinkTarget,
			rel: newRel,
		} );
	};

	return (
		<>
			<ToolbarButton
				icon={ link }
				title={ __( 'リンク', 'ystandard-blocks' ) }
				onClick={ startEditing }
				isActive={ isURLSet }
			/>
			{ isSelected && isEditingURL && (
				<Popover
					placement="bottom"
					onClose={ () => {
						setTimeout( () => {
							setIsEditingURL( false );
						}, 90 );
					} }
					anchor={ popoverAnchor }
					focusOnMount={ isEditingURL ? 'firstElement' : false }
					__unstableSlotName="__unstable-block-tools-after"
					shift
				>
					<div className={ 'p-4 [&>div+div]:mt-4' }>
						<CustomURLInput
							URLInputLabel={ __(
								'リンク先URL',
								'ystandard-blocks'
							) }
							linkTargetLabel={ __(
								'新しいタブで開く',
								'ystandard-blocks'
							) }
							linkRelInputLabel={ __(
								'リンクrel属性',
								'ystandard-blocks'
							) }
							url={ url }
							linkTarget={ linkTarget }
							rel={ rel }
							onChange={ handleCustomURLInputChange }
						/>
					</div>
				</Popover>
			) }
			{ isSelected && isURLSet && (
				<ToolbarButton
					icon={ linkOff }
					title={ __( 'リンク削除', 'ystandard-blocks' ) }
					onClick={ unlink }
				/>
			) }
		</>
	);
}
