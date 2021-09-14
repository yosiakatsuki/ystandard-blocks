import './_balloon-item-header.scss';

const BalloonItemHeader = () => {
	return (
		<div className="ystdb-menu-balloon__list-header">
			<div className="ystdb-menu-balloon__item">
				<div className="ystdb-menu-balloon__item-container">
					<div className="ystdb-menu-balloon__item-sort">&nbsp;</div>
					<div className="ystdb-menu-balloon__item-content">
						<div className="ystdb-menu-balloon__item-image">
							画像
						</div>
						<div className="ystdb-menu-balloon__item-name">
							名前
						</div>
						<div className="ystdb-menu-balloon__item-enable">
							有効/無効
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default BalloonItemHeader;
