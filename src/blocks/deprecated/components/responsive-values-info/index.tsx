import { Monitor, Smartphone, Tablet } from 'react-feather';
import './_edit.scss';

/**
 * @param      root0
 * @param      root0.desktop
 * @param      root0.tablet
 * @param      root0.mobile
 * @deprecated 置き換え予定
 */
// @ts-ignore
const ResponsiveValuesInfo = ( { desktop, tablet, mobile, ...props } ) => {
	if ( ! tablet && ! mobile ) {
		return null;
	}

	return (
		<div className={ 'ystd-responsive-values-info' } { ...props }>
			<div>
				<Monitor />
				{ desktop || '-' }
			</div>
			<div>
				<Tablet />
				{ tablet || '-' }
			</div>
			<div>
				<Smartphone />
				{ mobile || '-' }
			</div>
		</div>
	);
};

export default ResponsiveValuesInfo;
