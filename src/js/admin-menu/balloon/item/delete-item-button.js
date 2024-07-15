import { Icon, closeSmall } from '@wordpress/icons';
import { useContext, useState } from '@wordpress/element';
import { Button, Modal } from '@wordpress/components';

import './_item-delete.scss';
import { BalloonContext } from '../index';
import { getComponentConfig } from '@aktk/helper/config';
import { CancelButton, DeleteButton } from '../../components/button/button';

const DeleteItemButton = ( props ) => {
	const { index, item } = props;

	const { balloons, setBalloons, isUpdating, updateOption } =
		useContext( BalloonContext );

	const avatar = ! item?.image
		? getComponentConfig( 'defaultAvatar' ).url
		: item.image;

	const [ isModalOpen, setIsModalOpen ] = useState( false );

	const openModal = () => setIsModalOpen( true );
	const closeModal = () => setIsModalOpen( false );

	const deleteItem = () => {
		let newValue = [ ...balloons ];
		newValue.splice( index, 1 );
		newValue = newValue.map( ( value, newIndex ) => {
			return {
				...value,
				...{
					newIndex,
				},
			};
		} );
		setBalloons( newValue );
		updateOption( newValue, {
			success: '吹き出し設定を削除しました。',
			error: '吹き出設定の削除に失敗しました。',
		} );
	};

	return (
		<>
			<div className="ystdb-menu-balloon__item-delete">
				<Button
					className="ystdb-menu-balloon__item-delete-button"
					onClick={ openModal }
					disabled={ isUpdating }
				>
					<Icon icon={ closeSmall } />
				</Button>
				{ isModalOpen && (
					<Modal
						title="吹き出し設定を削除しますか？"
						onRequestClose={ closeModal }
						shouldCloseOnClickOutside={ false }
						isDismissible={ false }
					>
						<div className="ystdb-menu-balloon__delete-modal">
							<figure className="ystdb-menu-balloon__delete-modal-image">
								<img src={ avatar } alt="" />
							</figure>
							<p className="ystdb-menu-balloon__delete-modal-name">
								{ item?.name }
							</p>
							<div className="ystdb-components-section">
								<div className="ystdb-menu-component-columns">
									<div className="ystdb-menu-component-columns__item">
										<DeleteButton
											isPrimary
											onClick={ () => {
												deleteItem();
												closeModal();
											} }
											disabled={ isUpdating }
										>
											削除
										</DeleteButton>
									</div>
									<div className="ystdb-menu-component-columns__item">
										<CancelButton
											isSecondary
											onClick={ closeModal }
										>
											キャンセル
										</CancelButton>
									</div>
								</div>
							</div>
						</div>
					</Modal>
				) }
			</div>
		</>
	);
};

export default DeleteItemButton;
