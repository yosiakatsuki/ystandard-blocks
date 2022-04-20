import './_message.scss';
import classnames from 'classnames';

const Message = ( props ) => {
	const { children, type, isShow } = props;
	const className = classnames( 'ystdb-component-message', `is-${ type }`, {
		'is-hide': false === isShow,
	} );

	return <div className={ className }>{ children }</div>;
};

export const HelpMessage = ( props ) => {
	const { children } = props;
	return (
		<Message type={ 'help' } { ...props }>
			{ children }
		</Message>
	);
};

export const ErrorMessage = ( props ) => {
	const { children } = props;
	return (
		<Message type={ 'error' } { ...props }>
			{ children }
		</Message>
	);
};

export const WarningMessage = ( props ) => {
	const { children } = props;
	return (
		<Message type={ 'warning' } { ...props }>
			{ children }
		</Message>
	);
};
