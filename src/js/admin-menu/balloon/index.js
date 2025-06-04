import { Save } from 'react-feather';
import { render, useState, createContext } from '@wordpress/element';
import { Button } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';

import {
	getConfig,
	getEndpoint,
	getOption,
	isApiSuccess,
} from '@aktk/helper/admin-menu';
import {
	NotificationContainer,
	notifyError,
	notifySuccess,
} from '../components/notification/notification';

import './_balloon.scss';
import '../components/_index.scss';
import { initOption } from './functions';
import BalloonItem from './item/item';
import BalloonItemHeader from './item/balloon-item-header';
import StartBalloonSetting from './item/start-balloon-setting';
import AddItem from './item/add-item';
import ManualLink from '../components/manual-link';

export const BalloonContext = createContext();

const Balloon = () => {
	const options = getOption( 'balloon', false, [] );
	const [ balloons, setBalloons ] = useState( initOption( options ) );
	const [ isUpdating, setIsUpdating ] = useState( false );

	const updateOption = ( data, message = undefined ) => {
		if ( isUpdating ) {
			return;
		}
		setIsUpdating( true );
		apiFetch( {
			path: getEndpoint( 'update' ),
			method: 'POST',
			data,
		} )
			.then( ( response ) => {
				if ( isApiSuccess( response.status ) ) {
					notifySuccess( message?.success );
				} else {
					/* eslint-disable no-console */
					console.error( '設定の更新に失敗しました。' );
					console.log( response );
					/* eslint-enable */
					notifyError( message?.error );
				}
			} )
			.catch( ( error ) => {
				/* eslint-disable no-console */
				console.error( 'エラーが発生しました。' );
				console.log( error );
				/* eslint-enable */
				notifyError( message?.error );
			} );
		setTimeout( () => {
			setIsUpdating( false );
		}, 500 );
	};

	return (
		<>
			<div className="ystdb-menu__wrap">
				<ManualLink
					url={
						'https://wp-ystandard.com/manual/ystdb-balloon-avatar-setting/'
					}
					topRight
				/>
				<h1 className="ystdb-menu__content-title">吹き出し登録</h1>
				<NotificationContainer />
				<div className="ystdb-menu-balloon">
					<BalloonContext.Provider
						value={ {
							balloons,
							setBalloons,
							isUpdating,
							setIsUpdating,
							updateOption,
						} }
					>
						<div className="ystdb-menu-balloon__list">
							{ 0 < balloons.length && (
								<>
									<BalloonItemHeader />

									{ balloons.map( ( value, index ) => {
										return (
											<BalloonItem
												key={ index }
												index={ index }
											/>
										);
									} ) }
								</>
							) }
							{ 0 >= balloons.length && (
								<>
									<StartBalloonSetting />
								</>
							) }
						</div>
						<div className="ystdb-menu-balloon__update">
							<Button
								isPrimary
								onClick={ () => {
									updateOption( balloons );
								} }
								disabled={ isUpdating }
							>
								<Save
									className={ 'ystdb-button-icon' }
									style={ { fill: 'none' } }
								/>{ ' ' }
								設定を保存
							</Button>
							<AddItem />
						</div>
					</BalloonContext.Provider>
				</div>
			</div>
		</>
	);
};

render( <Balloon />, document.getElementById( getConfig( 'pageId' ) ) );
