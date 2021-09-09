import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const NotificationContainer = (props) => {
	return (
		<ToastContainer
			position="bottom-right"
			autoClose={3000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			{...props}
		/>
	);
};

const notificationOption = {
	position: 'bottom-right',
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
};

export const notifySuccess = (message = undefined) => {
	const showMessage = message ?? '更新しました。';
	toast.success(showMessage, notificationOption);
};

export const notifyWarning = (message = undefined) => {
	const showMessage = message ?? '問題が発生しました。';
	toast.warn(showMessage, notificationOption);
};

export const notifyError = (message = undefined) => {
	const showMessage = message ?? '問題が発生しました。';
	toast.error(showMessage, notificationOption);
};
