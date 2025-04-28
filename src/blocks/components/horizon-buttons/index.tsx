import './index.scss';

interface HorizonButtonsProps {
	children: React.ReactNode;
}

/**
 *
 * @param props
 * @deprecated
 */
export default function HorizonButtons( props: HorizonButtonsProps ) {
	return <div className="ystdb__horizon-buttons">{ props.children }</div>;
}
