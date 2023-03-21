import { Icon, chevronDown, chevronUp } from '@wordpress/icons';
import { useContext } from '@wordpress/element';
import { ToggleControl, Button, TextControl } from '@wordpress/components';

import { BalloonContext } from '../index';
import { sortOption } from '../functions';
import DeleteItemButton from './delete-item-button';
import classnames from 'classnames';
import AvatarMediaUpload from './avatar-media-upload';
import { toBool } from '@aktk/helper/boolean';

const BalloonItem = (props) => {
	const { index } = props;

	const { balloons, setBalloons } = useContext(BalloonContext);

	const itemsCount = balloons.length;
	const currentItem = balloons[index];

	const keyUpButton = `${currentItem.image}-${currentItem.name}-up`;
	const keyDownButton = `${currentItem.image}-${currentItem.name}-down`;

	const handleUp = () => {
		if (0 >= index) {
			return;
		}
		const newOption = [...balloons];
		newOption[index].index = index - 1;
		newOption[index - 1].index = index;
		setBalloons(sortOption(newOption));
	};

	const handleDown = () => {
		if (itemsCount <= index + 1) {
			return;
		}
		const newOption = [...balloons];
		newOption[index].index = index + 1;
		newOption[index + 1].index = index;
		setBalloons(sortOption(newOption));
	};

	const isEnable = () => {
		const enable =
			undefined === currentItem?.enable ? true : currentItem.enable;
		return toBool(enable);
	};

	const updateBalloon = (value) => {
		const newOption = [...balloons];
		newOption[index] = {
			...newOption[index],
			...value,
		};
		setBalloons(newOption);
	};

	return (
		<>
			<div
				className={classnames('ystdb-menu-balloon__item', {
					'is-disable': !currentItem.enable,
				})}
			>
				<div className="ystdb-menu-balloon__item-container">
					<div className="ystdb-menu-balloon__item-sort">
						<Button
							key={keyUpButton}
							className="ystdb-menu-balloon__item-sort-button"
							onClick={handleUp}
						>
							<Icon icon={chevronUp} />
						</Button>
						<Button
							key={keyDownButton}
							className="ystdb-menu-balloon__item-sort-button"
							onClick={handleDown}
						>
							<Icon icon={chevronDown} />
						</Button>
					</div>
					<div className="ystdb-menu-balloon__item-content">
						<div className="ystdb-menu-balloon__item-image">
							<AvatarMediaUpload
								onSelect={(media) => {
									updateBalloon({
										image: media.url,
										imageId: media.id,
									});
								}}
								onClickAvatarDelete={() => {
									updateBalloon({
										image: '',
										imageId: 0,
									});
								}}
								type={['image']}
								imageId={currentItem.imageId}
								imageUrl={currentItem.image}
								name={currentItem.name}
							/>
						</div>
						<div className="ystdb-menu-balloon__item-name">
							<TextControl
								value={currentItem.name}
								onChange={(value) => {
									updateBalloon({ name: value });
								}}
							/>
						</div>
						<div className="ystdb-menu-balloon__item-enable">
							<ToggleControl
								checked={isEnable()}
								onChange={(value) => {
									updateBalloon({
										enable: true === value ? 1 : 0,
									});
								}}
							/>
						</div>
						<DeleteItemButton index={index} item={currentItem} />
					</div>
				</div>
			</div>
		</>
	);
};

export default BalloonItem;
