import classnames from 'classnames';
/**
 * WordPress
 */
import { plusCircle, Icon as WPIcon } from '@wordpress/icons';

/**
 * Aktk dependencies.
 */
import Button from '@aktk/block-components/wp-controls/button';

interface BaseButtonProps {
	variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
}

interface AktkButtonProps {
	className?: string;
	onClick: () => void;
	style?: React.CSSProperties;
	children?: React.ReactNode;
	disabled?: boolean;
	isBusy?: boolean;
	icon?: string | Function | null | React.ReactNode;
	iconSize?: number;
	isSmall?: boolean;
	text?: string;
	isDestructive?: boolean;
}

function BaseButton( props: BaseButtonProps & AktkButtonProps ) {
	const {
		variant,
		className,
		onClick,
		style,
		children,
		disabled,
		isBusy,
		icon,
		iconSize,
		isSmall,
		text,
		isDestructive,
	} = props;
	const buttonClass = classnames( className );
	const buttonStyle = {
		...style,
	};
	return (
		<>
			<Button
				variant={ variant }
				className={ buttonClass }
				style={ buttonStyle }
				onClick={ onClick }
				disabled={ disabled }
				isBusy={ isBusy }
				// @ts-ignore
				icon={ icon }
				iconSize={ iconSize }
				isSmall={ isSmall }
				text={ text }
				isDestructive={ isDestructive }
			>
				{ children }
			</Button>
		</>
	);
}

export function PlainButton( props: AktkButtonProps ) {
	return (
		<>
			<BaseButton { ...props } />
		</>
	);
}

export function PrimaryButton( props: AktkButtonProps ) {
	return (
		<>
			<BaseButton variant={ 'primary' } { ...props } />
		</>
	);
}

export function SecondaryButton( props: AktkButtonProps ) {
	return (
		<>
			<BaseButton variant={ 'secondary' } { ...props } />
		</>
	);
}

export function LinkButton( props: AktkButtonProps ) {
	return (
		<>
			<BaseButton { ...props } variant={ 'link' } />
		</>
	);
}

export function TertiaryButton( props: AktkButtonProps ) {
	return (
		<>
			<BaseButton { ...props } variant={ 'tertiary' } />
		</>
	);
}

export function DestructiveButton( props: AktkButtonProps ) {
	return (
		<>
			<BaseButton
				{ ...props }
				variant={ 'secondary' }
				isDestructive={ true }
			/>
		</>
	);
}

export function CancelLinkButton( props: AktkButtonProps ) {
	const { style = {} } = props;
	const _style = {
		...style,
		color: 'var(--ys--global--text-color--gray,#989EA1)',
	};
	return (
		<>
			<BaseButton { ...props } variant={ 'tertiary' } style={ _style } />
		</>
	);
}

export function AddButton( props: AktkButtonProps ) {
	const { text, children, iconSize = 18 } = props;
	const buttonProps = {
		...props,
		text: undefined,
		icon: undefined,
		iconSize: undefined,
	};
	const buttonContent = children ? children : text;
	return (
		<PrimaryButton { ...buttonProps }>
			<span className={ 'flex items-center gap-1' }>
				<WPIcon icon={ plusCircle } size={ iconSize } />
				<>{ buttonContent }</>
			</span>
		</PrimaryButton>
	);
}

export function IconButton( props: AktkButtonProps ) {
	const { text, children, iconSize = 18, ...buttonProps } = props;
	const buttonContent = children ? children : text;
	return (
		<PrimaryButton { ...buttonProps }>
			<span className={ 'flex items-center gap-1' }>
				<WPIcon icon={ plusCircle } size={ iconSize } />
				<>{ buttonContent }</>
			</span>
		</PrimaryButton>
	);
}

export function HasElementButton( props: AktkButtonProps ) {
	const { style } = props;

	const _style = {
		...style,
		height: 'auto',
	};
	return <PlainButton { ...props } style={ _style } />;
}
