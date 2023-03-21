import { Monitor, Smartphone, Tablet } from 'react-feather';

const ResponsiveValuesInfo = ({ desktop, tablet, mobile, ...props }) => {
	if (!tablet && !mobile) {
		return null;
	}

	return (
		<div className={'ystd-responsive-values-info'} {...props}>
			<div>
				<Monitor />
				{desktop || '-'}
			</div>
			<div>
				<Tablet />
				{tablet || '-'}
			</div>
			<div>
				<Smartphone />
				{mobile || '-'}
			</div>
		</div>
	);
};

export default ResponsiveValuesInfo;
