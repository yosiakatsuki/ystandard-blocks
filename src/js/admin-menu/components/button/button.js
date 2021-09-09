import './_button.scss';
import { Button } from '@wordpress/components';
import classnames from 'classnames';

export const UpdateButton = (props) => {
	const buttonClassName = classnames(
		'ystdb-component-admin-menu-button',
		'is-update',
		props.className
	);
	return (
		<Button className={buttonClassName} {...props}>
			{props.children}
		</Button>
	);
};
export const CancelButton = (props) => {
	const buttonClassName = classnames(
		'ystdb-component-admin-menu-button',
		'is-cancel',
		props.className
	);
	return (
		<Button className={buttonClassName} {...props}>
			{props.children}
		</Button>
	);
};
export const DeleteButton = (props) => {
	const buttonClassName = classnames(
		'ystdb-component-admin-menu-button',
		'is-delete',
		props.className
	);
	return (
		<Button className={buttonClassName} {...props}>
			{props.children}
		</Button>
	);
};
