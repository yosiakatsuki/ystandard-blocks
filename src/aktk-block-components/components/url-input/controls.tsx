/**
 * WordPress dependencies.
 */
import { URLInput as WPURLInput } from '@wordpress/block-editor';

/**
 * Aktk dependencies.
 */
import ToggleControl from '@aktk/block-components/wp-controls/toggle-control';
import TextControl from '@aktk/block-components/wp-controls/text-control';
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import { BUTTON_NEW_TAB_REL } from '@aktk/block-components/components/url-input/const';

export type CustomURLInputValue = {
	url: string;
	linkTarget?: string;
	rel?: string;
};

interface CustomURLInputProps {
	URLInputLabel?: string;
	linkTargetLabel?: string;
	linkRelInputLabel?: string;
	url: string;
	linkTarget?: string;
	rel?: string;
	enableLinkTarget?: boolean;
	onChange: ( value: CustomURLInputValue ) => void;
	disableSuggestions?: boolean;
}

export function CustomURLInput( props: CustomURLInputProps ) {
	const {
		URLInputLabel,
		linkTargetLabel,
		linkRelInputLabel,
		url,
		linkTarget,
		rel,
		enableLinkTarget = true,
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
		let updatedRel = rel;
		if ( newLinkTarget && ! rel ) {
			updatedRel = BUTTON_NEW_TAB_REL;
		} else if ( ! newLinkTarget && rel === BUTTON_NEW_TAB_REL ) {
			updatedRel = undefined;
		}
		handleOnChange( { url, linkTarget: newLinkTarget, rel: updatedRel } );
	};

	const handleRelChange = ( value: string ) => {
		handleOnChange( { url, linkTarget, rel: value } );
	};

	const _URLInputLabel = URLInputLabel || 'リンク先URL';
	const _LinkTargetLabel = linkTargetLabel || '新しいタブで開く';
	const _LinkRelInputLabel = linkRelInputLabel || 'リンクrel属性';

	return (
		<>
			<BaseControl id={ 'link-url' } label={ _URLInputLabel }>
				<URLInput
					value={ url }
					onChange={ handleURLChange }
					disableSuggestions={ disableSuggestions }
				/>
			</BaseControl>
			{ enableLinkTarget && (
				<>
					<BaseControl>
						<ToggleControl
							label={ _LinkTargetLabel }
							onChange={ handleLinkTargetChange }
							checked={ linkTarget === '_blank' }
						/>
					</BaseControl>
					<BaseControl>
						<TextControl
							label={ _LinkRelInputLabel }
							value={ rel || '' }
							onChange={ handleRelChange }
						/>
					</BaseControl>
				</>
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
