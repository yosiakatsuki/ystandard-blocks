import classNames from 'classnames';
import './style-editor.scss';

interface NoticeProps {
	children?: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

export function Notice( props: NoticeProps ) {
	const baseClassName = 'aktk-notice';

	const { children, className, style } = props;
	const noticeClass = classNames( baseClassName, className );
	const noticeStyle = {
		...style,
	};

	return (
		<>
			<div className={ noticeClass } style={ noticeStyle }>
				{ children }
			</div>
		</>
	);
}

export function NoticeText( props: NoticeProps ) {
	const baseClassName = 'aktk-notice--text';

	const { children, className, style } = props;
	const noticeClass = classNames( baseClassName, className );
	const noticeStyle = {
		...style,
	};

	return (
		<>
			<div className={ noticeClass } style={ noticeStyle }>
				{ children }
			</div>
		</>
	);
}

export function NoticeInfo( props: NoticeProps ) {
	return (
		<Notice
			{ ...props }
			className={ 'bg-aktk-bg-blue text-aktk-text-blue' }
		/>
	);
}

export function NoticeWarning( props: NoticeProps ) {
	return (
		<Notice
			{ ...props }
			className={
				'mt-1 bg-aktk-bg-yellow text-fz-xxs text-aktk-text-yellow'
			}
		/>
	);
}

export function NoticeWarningText( props: NoticeProps ) {
	return (
		<NoticeText
			{ ...props }
			className={ 'mt-1 text-fz-xxs text-aktk-text-yellow' }
		/>
	);
}

export function NoticeSecondaryText( props: NoticeProps ) {
	return (
		<NoticeText
			{ ...props }
			className={ 'mt-1 text-fz-xxs text-aktk-text-gray' }
		/>
	);
}
