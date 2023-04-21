import './index.scss';

export default function HorizonButtons({
	children,
}: {
	children: React.ReactNode,
}) {
	return <div className="ystdb__horizon-buttons">{children}</div>;
}
