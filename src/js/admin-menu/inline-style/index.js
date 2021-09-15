import './_inline-style.scss';
import '../components/_index.scss';
import { render, useState, createContext } from '@wordpress/element';
import { TabPanel, Disabled } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import {
	NotificationContainer,
	notifyError,
	notifySuccess,
} from '../components/notification/notification';

import schema from './schema.json';
import ToolbarButtons from './toolbar-buttons';
import ButtonItems from './button-items';

import {
	getConfig,
	getEndpoint,
	getOption,
	isApiSuccess,
} from '@ystdb/helper/admin-menu';

import Notice from '@ystdb/components/notice/index';
import ManualLink from '../components/manual-link';

export const InlineStyleContext = createContext();

const InlineStyle = () => {
	const tabs = {
		toolbarButtons: {
			name: 'toolbar-buttons',
			title: 'ツールバーボタン',
		},
		toolbarItems: {
			name: 'toolbar-items',
			title: 'その他スタイル',
		},
	};

	const options = getOption('inlineStyle', false, schema.inlineStyle);
	const needMigration = getConfig('needMigration', false);
	const migrationPage = getConfig('migrationPage', '#');
	const [buttons, setButtons] = useState(options.buttons);
	const [items, setItems] = useState(options.items);
	const [isUpdating, setIsUpdating] = useState(false);
	const [selectedItem, setSelectedItem] = useState('');
	const [activeTabName, setActiveTabName] = useState('toolbar-buttons');

	const updateOption = (updateData = undefined, message = undefined) => {
		if (isUpdating) {
			return;
		}
		setIsUpdating(true);
		setTimeout(() => {
			const data = {
				...options,
				...{
					buttons,
					items,
				},
				...updateData,
			};
			apiFetch({
				path: getEndpoint('update'),
				method: 'POST',
				data,
			})
				.then((response) => {
					if (isApiSuccess(response.status)) {
						notifySuccess(message);
					} else {
						/* eslint-disable no-console */
						console.error('設定の更新に失敗しました。');
						console.log(response);
						/* eslint-enable */
						notifyError('設定の更新に失敗しました。');
					}
				})
				.catch((error) => {
					/* eslint-disable no-console */
					console.error('エラーが発生しました。');
					console.log(error);
					/* eslint-enable */
					notifyError('設定の更新に失敗しました。');
				});
			setIsUpdating(false);
		}, 500);
	};

	return (
		<>
			<div className="ystdb-menu__wrap">
				<ManualLink
					url={'https://wp-ystandard.com/manual/ystdb-inline-style/'}
					topRight
				/>
				<h1 className="ystdb-menu__content-title">
					インラインスタイル
				</h1>
				{needMigration && (
					<Notice type="warning">
						<p>
							旧設定が見つかりました。「
							<a href={migrationPage}>v2 -&gt; v3 設定移行</a>
							」画面から設定を移行してください。
						</p>
					</Notice>
				)}
				{needMigration ? (
					<Disabled className={'ystdb-menu-inline-style__disable'}>
						<div className={'ystdb-menu-inline-style__cover'}>
							<div>
								<p>
									旧設定から新設定へ設定を移行してください。
								</p>
							</div>
						</div>
					</Disabled>
				) : (
					<TabPanel
						className="ystdb-menu-component__tab"
						tabs={[tabs.toolbarButtons, tabs.toolbarItems]}
						onSelect={(tabName) => {
							setActiveTabName(tabName);
						}}
						initialTabName={activeTabName}
					>
						{(tab) => (
							<div className="ystdb-menu-inline-style__tab-container">
								<NotificationContainer />
								<InlineStyleContext.Provider
									value={{
										options,
										buttons,
										setButtons,
										items,
										setItems,
										selectedItem,
										setSelectedItem,
										isUpdating,
										setIsUpdating,
										updateOption,
									}}
								>
									{tabs.toolbarButtons.name === tab.name && (
										<ToolbarButtons />
									)}
									{tabs.toolbarItems.name === tab.name && (
										<ButtonItems />
									)}
								</InlineStyleContext.Provider>
							</div>
						)}
					</TabPanel>
				)}
			</div>
		</>
	);
};
render(<InlineStyle />, document.getElementById(getConfig('pageId')));
