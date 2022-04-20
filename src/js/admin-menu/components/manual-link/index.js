import { Book } from 'react-feather';
import './_manual-link.scss';
import classnames from 'classnames';

const ManualLink = ( props ) => {
	const { url, target, text, topRight } = props;

	const linkText = text || 'マニュアルを見る';
	const linkTarget = target || '_blank';

	return (
		<div
			className={ classnames( 'ystdb-component-manual-link', {
				'is-top-right': topRight,
			} ) }
		>
			<a href={ url } target={ linkTarget }>
				<span className="ystdb-component-manual-link__icon">
					<Book size={ 12 } />
				</span>
				<span className="ystdb-component-manual-link__text">
					{ linkText }
				</span>
			</a>
		</div>
	);
};

export default ManualLink;
