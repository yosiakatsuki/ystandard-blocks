import './_inline-style.scss';
import '../components/_index.scss';
import {
	render,
	useState,
	useEffect,
	createContext,
} from '@wordpress/element';
import {
	TabPanel,
	Disabled
} from '@wordpress/components';
import schema from './schema.json';
import ToolbarButtons from './toolbar-buttons';

import {
	getConfig,
	getOption,
} from '@ystdb/helper/admin-menu';

import Notice from '@ystdb/components/notice/index';

export const InlineStyleContext = createContext();

const InlineStyle = () => {

		const tabs = {
			toolbarButtons: {
				name: 'toolbar-buttons',
				title: 'ツールバーボタン'
			},
			toolbarItems: {
				name: 'toolbar-items',
				title: 'その他スタイル'
			},
		};

		const options = getOption( 'inlineStyle', false, schema.inlineStyle );
		const needMigration = getConfig( 'needMigration', false );
		const migrationPage = getConfig( 'migrationPage', '#' );
		const [ buttons, setButtons ] = useState( {} );
		const [ items, setItems ] = useState( {} );

		useEffect( () => {
			setButtons( { ...options.buttons } );
			setItems( { ...options.items } );
		}, [] );

		const TabContent = () => {
			return (
				<TabPanel
					className="ystdb-menu-component__tab"
					tabs={ [
						tabs.toolbarButtons,
						tabs.toolbarItems,
					] }
				>
					{ ( tab ) => (
						<div className="ystdb-menu-inline-style__tab-container">
							<InlineStyleContext.Provider
								value={ {
									options,
									buttons,
									setButtons,
									items,
									setItems
								} }
							>
								{ tabs.toolbarButtons.name === tab.name && (
									<ToolbarButtons/>
								) }
								{ tabs.toolbarItems.name === tab.name && (
									<>アイテム</>
								) }
							</InlineStyleContext.Provider>
						</div>
					) }
				</TabPanel>
			);
		};

		return (
			<>
				<div className="ystdb-menu__wrap">
					<h1 className="ystdb-menu__content-title">インラインスタイル</h1>
					{ ( needMigration && <Notice type="warning">
						<p>旧設定が見つかりました。「<a href={migrationPage}>v2 -&gt; v3 設定移行</a>」画面から設定を移行してください。</p>
					</Notice> ) }
					{ needMigration ? (
						<Disabled className={ "ystdb-menu-inline-style__disable" }>
							<div className={ "ystdb-menu-inline-style__cover" }>
								<div>
									<p>旧設定から新設定へ設定を移行してください。</p>
								</div>
							</div>
							<TabContent/>
						</Disabled>
					) : (
						<TabContent/>
					) }
				</div>
			</>
		);
	}
;

render(
	<InlineStyle/>
	,
	document.getElementById( getConfig( 'pageId' ) )
);
