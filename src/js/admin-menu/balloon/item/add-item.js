import { Icon, plusCircle } from '@wordpress/icons';
import { useContext, useState } from '@wordpress/element';
import { Button, TextControl, Modal } from '@wordpress/components';

import './_add-item.scss';
import { BalloonContext } from '../index';
import AvatarMediaUpload from './avatar-media-upload';
import { CancelButton, UpdateButton } from '../../components/button/button';
import { ErrorMessage } from '../../components/message';
import { schema } from '../functions';

const AddItem = () => {
	const { balloons, setBalloons, updateOption, isUpdating } =
		useContext(BalloonContext);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const avatarDefaultValue = {
		image: '',
		imageId: 0,
		name: '',
	};

	const [avatar, setAvatar] = useState(avatarDefaultValue);
	const [hasError, setHasError] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const checkInput = () => {
		if (!avatar.image && !avatar.name) {
			setHasError(true);
			return false;
		}

		return true;
	};

	const addItem = () => {
		balloons.push({
			...schema,
			...avatar,
			...{
				index: balloons.length - 1,
			},
		});
		setBalloons([...balloons]);
		updateOption([...balloons]);
		setAvatar(avatarDefaultValue);
	};

	return (
		<div className="ystdb-menu-balloon__add-item">
			<Button isSecondary onClick={openModal} disabled={isUpdating}>
				<Icon className={'ystdb-button-icon'} icon={plusCircle} /> 追加
			</Button>
			{isModalOpen && (
				<Modal
					title="吹き出し設定の追加"
					onRequestClose={closeModal}
					shouldCloseOnClickOutside={false}
					isDismissible={false}
				>
					<div className="ystdb-menu-balloon__add-modal">
						<div className="ystdb-menu-balloon__add-modal-image">
							<AvatarMediaUpload
								onSelect={(media) => {
									setAvatar((old) => {
										return {
											...old,
											...{
												image: media.url,
												imageId: media.id,
											},
										};
									});
									setHasError(false);
								}}
								onClickAvatarDelete={() => {
									setAvatar((old) => {
										return {
											...old,
											...{
												image: '',
												imageId: 0,
											},
										};
									});
								}}
								type={['image']}
								imageId={avatar.imageId}
								imageUrl={avatar.image}
								name={avatar.name}
							/>
						</div>
						<div className="ystdb-menu-balloon__add-modal-name">
							<TextControl
								value={avatar.name}
								onChange={(value) => {
									setAvatar((old) => {
										return {
											...old,
											...{
												name: value,
											},
										};
									});
									setHasError(false);
								}}
							/>
						</div>
						<ErrorMessage isShow={hasError}>
							画像 または 名前を入力してください。
						</ErrorMessage>
						<div className="ystdb-components-section">
							<div className="ystdb-menu-component-columns">
								<div className="ystdb-menu-component-columns__item">
									<UpdateButton
										isPrimary
										onClick={() => {
											if (!checkInput()) {
												return;
											}
											addItem();
											closeModal();
										}}
										disabled={hasError}
									>
										追加
									</UpdateButton>
								</div>
								<div className="ystdb-menu-component-columns__item">
									<CancelButton
										isSecondary
										onClick={closeModal}
									>
										キャンセル
									</CancelButton>
								</div>
							</div>
						</div>
					</div>
				</Modal>
			)}
		</div>
	);
};
export default AddItem;
