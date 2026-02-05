/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { URLInput as WPURLInput } from '@wordpress/block-editor';

/**
 * Aktk dependencies.
 */
import ToggleControl from '@aktk/block-components/wp-controls/toggle-control';
import TextControl from '@aktk/block-components/wp-controls/text-control';
import BaseControl from '@aktk/block-components/wp-controls/base-control';

export type CustomURLInputValue = {
	url: string;
	linkTarget?: string;
	rel?: string;
};

interface CustomURLInputProps {
	URLInputLabel?: string;
	linkTargetLabel?: string;
	linkRelNofollow?: string;
	linkRelInputLabel?: string;
	url: string;
	linkTarget?: string;
	rel?: string;
	enableLinkTarget?: boolean;
	enableRelNofollow?: boolean;
	enableCustomRel?: boolean;
	onChange: ( value: CustomURLInputValue ) => void;
	disableSuggestions?: boolean;
}

export function CustomURLInput( props: CustomURLInputProps ) {
	const {
		URLInputLabel = __( 'リンク先URL', 'ystandard-blocks' ),
		linkTargetLabel = __( '新しいタブで開く', 'ystandard-blocks' ),
		linkRelNofollow = __( '「nofollow」を追加', 'ystandard-blocks' ),
		linkRelInputLabel = __( 'リンクrel属性', 'ystandard-blocks' ),
		url,
		linkTarget,
		rel,
		enableLinkTarget = true,
		enableRelNofollow = true,
		enableCustomRel = true,
		onChange,
		disableSuggestions = false,
	} = props;

	const handleOnChange = ( value: CustomURLInputValue ) => {
		onChange( value );
	};

	const handleURLChange = ( value: string ) => {
		handleOnChange( { url: value, linkTarget, rel } );
	};

	const handleLinkTargetChange = ( value: boolean ) => {
		const newLinkTarget = value ? '_blank' : undefined;
		handleOnChange( { url, linkTarget: newLinkTarget, rel: rel } );
	};
	const handleNoFollowChange = ( value: boolean ) => {
		let newRel =
			rel?.replace( 'nofollow', '' ).trim().replace( /\s+/g, ' ' ) || '';
		if ( value ) {
			newRel = `${ newRel } nofollow`.trim();
		}
		handleOnChange( { url, linkTarget, rel: newRel } );
	};

	const handleRelChange = ( value: string ) => {
		handleOnChange( { url, linkTarget, rel: value } );
	};

	return (
		<>
			<BaseControl id={ 'link-url' } label={ URLInputLabel }>
				<URLInput
					value={ url }
					onChange={ handleURLChange }
					disableSuggestions={ disableSuggestions }
				/>
			</BaseControl>
			{ enableLinkTarget && (
				<BaseControl>
					<ToggleControl
						label={ linkTargetLabel }
						onChange={ handleLinkTargetChange }
						checked={ linkTarget === '_blank' }
					/>
				</BaseControl>
			) }
			{ enableRelNofollow && (
				<BaseControl>
					<ToggleControl
						label={ linkRelNofollow }
						onChange={ handleNoFollowChange }
						// @ts-expect-error
						checked={ rel?.includes( 'nofollow' ) }
					/>
				</BaseControl>
			) }
			{ enableCustomRel && (
				<BaseControl>
					<TextControl
						label={ linkRelInputLabel }
						value={ rel || '' }
						onChange={ handleRelChange }
					/>
				</BaseControl>
			) }
		</>
	);
}

interface URLInputProps {
	value: string;
	onChange: ( value: string ) => void;
	disableSuggestions?: boolean;
	isUseInspectorControl?: boolean;
}

export function URLInput( props: URLInputProps ) {
	const { value, onChange, disableSuggestions = true } = props;

	const handleChange = ( newValue: string ) => {
		onChange( newValue );
	};

	return (
		<WPURLInput
			className="min-w-[100px]"
			value={ value }
			onChange={ handleChange }
			disableSuggestions={ disableSuggestions }
			isFullWidth
			hasBorder
		/>
	);
}

interface LinkTargetToggleProps {
	label?: string;
	onChange: ( value: boolean ) => void;
	linkTarget: string;
}

export function LinkTargetToggle( props: LinkTargetToggleProps ) {
	const { label, onChange, linkTarget } = props;

	const _label = label || '新しいタブで開く';

	const handleOnChange = ( value: boolean ) => {
		onChange( value );
	};

	return (
		<ToggleControl
			label={ _label }
			onChange={ handleOnChange }
			checked={ linkTarget === '_blank' }
		/>
	);
}

interface LinkRelInputProps {
	label?: string;
	onChange: ( value: string ) => void;
	value: string;
}

export function LinkRelInput( props: LinkRelInputProps ) {
	const { label, onChange, value: rel } = props;

	const handleOnChange = ( value: string ) => {
		onChange( value );
	};

	const _label = label || 'リンクrel属性';
	return (
		<TextControl
			label={ _label }
			value={ rel || '' }
			onChange={ handleOnChange }
		/>
	);
}
