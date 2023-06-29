import './index.scss';

interface HorizonButtonsProps {
	children: React.ReactNode;
}

export default function HorizonButtons(props: HorizonButtonsProps) {
	return <div className="ystdb__horizon-buttons">{props.children}</div>;
}
