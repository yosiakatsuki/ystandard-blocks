# yStnadard Blocks

無料WordPressテーマ「yStandard」用 ブロックエディター(Gutenberg)ブロック追加プラグイン

## 「yStandard」用 ブロックエディター(Gutenberg)ブロック追加・拡張プラグイン

### 追加ブロック

* セクションブロック
	* ブロックを入れ子にしてひとまとめにするブロック
* カスタムボタンブロック
	* アイコンの設定や横幅いっぱいに表示できるボタン
* カードブロック
	* カード型のリンクを作成できるブロック
* カスタムカラムブロック
	* 2行以上の表示が可能、スマホ・タブレット・PCで列数の設定が可能なカラムブロック
* アイコンブロック
	* アイコンを表示できるブロック
* カスタム見出しブロック
	* 文字サイズやサブテキストが表示可能な見出しブロック
* 吹き出しブロック
	* 会話形式のコンテンツが作成できるブロック
* 条件付きグループブロック
	* 条件により表示・非表示を切り替えできるグループブロック

### インライン装飾

* 3種類のインライン装飾ボタンを追加。カスタマイザーから装飾内容をカスタマイズ可能
* 文字サイズを少し大きく・少し小さくする装飾

## 更新履歴

### v3.16.1 :
- [修正] 見出しブロック：編集画面でサブテキスト入力欄に背景色がついている問題の対処

### v3.16.0 : 2024/12/17
- [修正] 見出しブロック：編集画面でのサブテキスト文字サイズ不具合対処
- [修正] ボタンブロック：アイコン設定のラベル不具合対処
- [調整] 見出しブロック：ブロック構成ファイルのアップデート（WP6.3以上必須）

### v3.15.0 : 2024/11/13
- [調整] WordPress 6.7に向けた調整
- [調整] ブロック設定コントロールのスタイル調整
- [修正] カラムブロック：幅自動調整をデスクトップのみ設定した場合、画面サイズに関わらず自動調整で動作するように修正

### v3.14.0 : 2024/07/17
- [調整] WordPress 6.6に向けた調整
- [調整] 吹き出しブロック：設定画面調整

### v3.13.0 : 2024/04/05
- [調整] WordPress 6.5に向けた調整
- [修正] インラインスタイル：マーカー色設定不具合修正
- [調整] カスタム見出しブロック：編集画面スタイル調整

### v3.12.0 : 2023/11/27
- [修正] カラムブロック：カラム間余白を0にした場合、編集画面でカラムが表示されなくなる場合がある点の修正
- [調整] カラムブロック：過去に非推奨になった構造からの変換廃止

### v3.11.1 : 2023/11/10
- [修正] 管理画面内でPHPのエラーメッセージが発生する事がある点の対処
-
### v3.11.0 : 2023/11/09
- [調整] WordPress 6.4 向け調整
- [調整] PHP 8.2 向け調整
- [追加] ブロックカテゴリーの順序を調整するフック追加（ystdb_block_category_top）
- [調整] カスタムボタンブロック調整
- [修正] ボタン型リンクブロックの非推奨化

### v3.10.1 : 2023/05/19
- [修正] 編集画面内のリンクの色が変わらない点の修正

### v3.10.0 : 2023/04/24
- [追加] 条件付きグループブロック：子孫カテゴリーにも条件を適用する設定追加

### v3.9.0 : 2023/03/30
- [調整] WordPress 6.2向け調整
- [調整] 動作要件変更 : WordPress 6.1以上、PHP 7.4以上
- [調整] インラインスタイル編集機能：設定画面スタイル調整
- [修正] 吹き出しブロック : 吹き出しの揃え位置を下にした場合のスタイル調整

### v3.8.1
- [修正] セクションブロック : 「画面幅まで広げる」設定が有効にならない点の修正

### v3.8.0
- [調整] WordPress 6.1向け調整
- [修正] 吹き出しブロック : 設定項目の整理
- [修正] 吹き出しブロック : 吹き出しタイプを枠線に変更すると背景色や枠線の色が変わる点の修正
- [調整] アイコンブロック : アイコン・リンク設定位置調整
- [調整] ボタン型リンク : 設定項目の調整

### v3.7.1
- [調整] カードブロック : キャプション入力方法変更

### v3.7.0
- [追加] カードブロック:キャプション設定機能追加

### v3.6.1
- [調整] yStandard ブログカード機能連携調整

### v3.6.0
- [追加] カラムブロック : カラムにリンクを設定する機能(β)追加
- [修正] カラムブロック : タブレット横方向gap不具合修正
- [修正] カラムブロック : 外側余白不具合修正

### v3.5.1
- [修正] カラムブロック : カラム間の余白を無くす設定だったカラムが最新版で横並びにならない点の修正

### v3.5.0
- [追加] 条件付きグループブロック : カテゴリー・タグによる表示制御設定を追加
- [調整] パッケージアップデート

### v3.4.2
- [修正] 必要WordPressバージョンを5.9以上に引き上げ

### v3.4.1
- [修正] カラムブロック : カラム内にカラムを配置した際にカラム数設定が無視される恐れがある点の修正

### v3.4.0
- [追加] WordPress 6.0対応
- [追加] カラムブロック : カラム間余白設定追加
- [追加] カラムブロック : カラム外側余白追加
- [追加] カラムブロック : カラム内側余白追加
- [追加] カラムブロック : カラム幅設定追加
- [追加] カラムブロック : カラム幅を自動で広げる設定追加
- [修正] カスタム見出しブロック : プレースホルダー修正
- [調整] セクションブロック : 編集画面 ブロック追加ボタン調整
- [調整] セクションブロック : コンテンツ幅設定調整

### v3.3.0
- [追加] セクションブロック : アニメーション種類追加
- [修正] 吹き出しブロック : 吹き出し内にリンクの設定ができない問題の修正

### v3.2.0
- [調整] WordPress 5.9 向け調整
- [修正] 吹き出しブロック : 編集画面スタイル調整

### v3.1.4
- [修正] カードブロック : 外部サイトのキャッシュ作成不具合修正

### v3.1.3
- [修正] 見出しブロック : サブテキスト使用で編集画面に横スクロールが発生する点の修正
- [調整] 見出しブロック : 親ブロックの文字色指定がある場合、サブテキストのデフォルトカラーに引き継ぐ

### v3.1.2
- [修正] カラムブロック：逆順指定時の余白不具合修正

### v3.1.1
- [修正] IE向け不具合の修正

### v3.1.0
- [追加] セクションブロック:全幅の時にコンテンツを画面幅いっぱいまで引き伸ばすオプション追加
- [追加] セクションブロック:枠線設定追加
- [修正] カラムブロック:カラム部分のCSS修正

### v3.0.2
- [修正] カラムブロック:カラムブロックの中にテーブルブロックを挿入すると、テーブルの編集ができない点の修正

### v3.0.1
- [追加] yStandard Toolbox v1.15.0向け調整

### v3.0.0
- [追加] yStandard Blocks 設定画面リニューアル
- [追加] 吹き出しブロック：「会話(枠線)」タイプの追加
- [追加] yStandard以外のテーマを使っている場合の機能制限を廃止
- [調整] Dart Sass対応
- [調整] カスタム見出しブロック：編集画面レイアウト調整

### v2.10.3
- [修正] カラムブロック : 編集画面でカラム背景色が表示されない不具合修正

### v2.10.2
- [修正] 文字サイズ設定不具合対処

### v2.10.1
- [調整] カラムブロック : 編集画面レイアウト調整
- [調整] セクションブロック : 設定ラベル調整
- [調整] ブロック内翻訳修正

### v2.10.0
- [追加] カスタムアイコン機能追加（PHPカスタマイズ）
- [調整] WordPress 5.8対応
- [調整] アイコン選択機能調整
- [削除] Font Awesome関連機能削除
- [削除] 非推奨ブロックの削除（Font Awesome利用のボタン、ボタンリンク、アイコンブロック）

### v2.9.5
- [修正] セクションブロック：背景動画がiPhoneでも自動再生されるよう調整

### v2.9.4
- [修正] セクションブロック：背景画像指定不具合修正
- [修正] カスタムボタンブロック：rel指定不具合修正

### v2.9.3
- [調整] アイコンブロック：リンク色調整
- [調整] サポート用システム情報にプラグインバージョン出力
- [修正] セクションブロック：iPad Safariで背景固定画像が拡大表示される不具合の修正
- [修正] カラムブロック：カラムを入れ子にした場合の縦位置不具合修正

### v2.9.2

- [調整] 編集画面でカラムブロック、セクションブロック内に空の段落が発生したときにブロックが表示されなくなる点の対処

### v2.9.1

- [調整] カードブロック編集画面スタイル調整

### v2.9.0

- [調整] WorPress 5.7向け調整

### v2.8.0

- [追加] カスタムボタンブロック 画面サイズ別 ブロックタイプ設定追加
- [追加] カスタムボタンブロック 画面サイズ別 フォントサイズ・余白設定追加

### v2.7.0

- [追加] カスタム見出しブロック 文字サイズ レスポンシブ機能追加
- [追加] カスタム見出しブロック 文字太さ・letter-spacing設定追加
- [調整] セクションブロック 編集画面 全幅の時に区切り線表示

### v2.6.0

- [追加] WordPress 5.6向け対応
- [調整] 必要WordPressバージョン引き上げ(最低要件 WordPress 5.6以上)

### v2.5.0

- [追加] セクションブロック 余白 モバイル・デスクトップでサイズ切り替え可能な設定を追加
- [追加] セクションブロック 区切り線 モバイル・デスクトップでサイズ切り替え可能な設定を追加
- [追加] セクションブロック オーバーレイにグラデーション設定追加
- [追加] セクションブロック オーバーレイのサイズ設定・位置設定追加
- [追加] セクションブロック 背景画像の焦点位置、サイズ、繰り返し設定追加
- [追加] セクションブロック アニメーション遅延時間設定追加
- [追加] セクションブロック アニメーション確認機能追加
- [調整] セクションブロック アニメーション速度設定で小数点第1位までの設定を可能に調整
- [調整] セクションブロック 背景色設定をオーバーレイ設定に名称変更・設定整理
- [修正] カスタム見出しブロック スタイル調整

### v2.4.1

- [修正] カードブロック使用時にWordPressの警告が表示される点の修正

### v2.4.0

- [追加] カラムブロック 逆順設定追加
- [追加] カラムブロック 余白削除設定追加
- [調整] カラムブロック 入れ子にした場合の編集画面スタイル調整

### v2.3.2

- [修正] カードブロック不具合修正
- [調整] カードブロック WordPressブロック(埋め込み)からの変換追加

### v2.3.1

- [修正] セクションブロック HTMLタグ選択ボタン不具合修正
- [調整] セクションブロック 内部ブロックの余白調整
- [調整] カラムブロック 内部ブロックの余白調整

### v2.3.0

- [追加] カスタム見出しブロック 余白設定追加
- [追加] カスタムカラムブロック 横揃え位置設定追加
- [追加] カスタムカラムブロック 余白・影一括設定追加
- [修正] カスタム見出しブロック テキスト色設定が反映されない不具合対処
- [調整] カスタム見出しブロック yStandard Toolbox向け調整
- [調整] セクションブロック 余白・コンテンツ幅のプリセット値の変更
- [調整] 必要WordPressバージョンを5.5以上に引き上げ
- [調整] WordPress 5.5向け 翻訳調整

### v2.2.1

- [修正] プラグイン更新機能の不具合修正

### v2.2.0

- [調整] WordPress 5.5向け調整

### v2.1.0

- [追加] カスタム見出しブロックリニューアル
- [修正] yStandard以外のテーマでのSVGアイコン表示不具合対処
- [修正] メニューアイコン修正
- [調整] プラグインバージョン情報取得用フック追加（yStandard Toolbox向け調整）
- [調整] ブロック名から「[ys]」を削除

### v2.0.4

- [修正] yStandardでアイコンフォントを読み込まない設定にしているとアイコンサイズ設定が正しく機能しない点を修正

### v2.0.3

- [調整] yStandard 文字色調整機能（v4.2.0）がブロックにも反映されるように調整

### v2.0.2

- [調整] 吹き出しブロック登録画面に順番を表示
- [修正] カードブロックのURL入力欄ラベルの重複削除

### v2.0.1

- [修正] セクションブロックの区切り線色不具合修正

### v2.0.0

- [追加] 設定機能刷新
- [追加] SVGアイコンを使ったボタンブロック・アイコンブロックの追加
- [追加] 設定移行ツールの追加
- [修正] Font Awesome アイコンを使ったボタンブロック・アイコンブロックを非推奨に変更

### v1.1.3

- [修正] yStandard v4 対応

### v1.1.2

- [修正] マーカー色不具合修正

### v1.1.1

- [調整] WP 5.4 調整 - ボタン型アイコンブロック編集画面調整
- [調整] WP 5.4 調整 - カスタム絡むブロック編集画面調整
- [調整] 吹き出しブロックの登録可能アバター数を30に増加

### v1.1.0

- [追加] インライン文字サイズ変更機能追加
- [追加] 条件付きグループブロック追加
- [追加] カードブロックに画像設定追加
- [調整] WordPress 5.4に向けた微調整
- [修正] 吹き出しブロックの背景色ありの調整

### v1.0.2

- [修正] Androidで太字指定が太字にならない点の修正

### v1.0.1

- [修正] 背景色指定クラス不具合修正

### v1.0.0

- [追加] 吹き出しブロック追加
- [調整] コア ボタンブロックの拡張設定の削除

### v0.8.2

- [修正] カスタムボタンブロック : 編集画面でボックス型指定・余白サイズ指定が反映されない点の修正
- [調整] カードブロックの使用画像サイズの優先順位を調整

### v0.8.1

- [修正] カードブロック:外部URLのリンクを作成するとき、タイトルが上書きできない点の修正
- [調整] カードブロック:ショートコード登録機能調整

### v0.8.0

- [追加] カードブロック追加
- [調整] カスタム見出しブロック編集画面改善
- [調整] AMP連携機能調整
- [調整] セクションブロック編集画面スタイル調整

### v0.7.2

- [修正] Font Awesome 軽量版 アイコン種類調整

### v0.7.1

- [修正] Font Awesome 軽量版モードの yStandard連携不具合修正・調整

### v0.7.0

- [追加] カスタム見出しブロック追加
- [追加] Font Awesome 使うアイコンを絞り軽量化、すべてのアイコンを読み込むオプション追加
- [追加] マーカー色 不透明度設定追加
- [修正] カスタムフォントサイズが保存されない問題の修正
- [修正] 編集画面に高度な設定の追加CSSやスタイルのが反映されない問題の修正
- [調整] カスタムカラムブロック左右余白調整
- [調整] セクションブロック余白単位変更、余白デフォルト値変更
- [調整] マーカー色調整

### v0.6.0

- [追加] セクションブロックに区切り線、高さ、アニメーション設定を追加
- [変更] ボタン型リンクブロックの動作変更
- [調整] yStandard以外のテーマでも使用できるように調整
- [修正] カスタムボタンブロックの不具合修正
- [修正] カラムブロック：IEでの不具合修正

### v0.5.2

- [修正] カラムブロック 子供ブロック不具合修正

### v0.5.1

- [修正] カラムブロックの設定誤字修正

### v0.5.0

- [追加] カスタムボタンブロック追加
- [追加] カスタムカラムブロック追加
- [修正] WordPress標準ボタンブロックの拡張設定を非推奨に変更

### v0.4.0

- [調整] yStandard v3.6.0対応

### v0.3.0

- [調整] アイコン選択機能強化
- [追加] アイコンブロック追加

### v0.2.0

- [追加] ボタンブロック・リンク型ボタンブロックの機能強化
	- アイコン種類追加
	- カスタムアイコン欄追加
	- アイコン位置選択オプション追加
	- アイコンサイズ選択オプション追加

### v0.1.1

- [追加] セクションブロックの機能強化
	- 傾きあり背景の太さ設定追加

### v0.1.0

- [追加] セクションブロックの機能強化
	- 余白設定の追加
	- 背景画像の設定追加
	- 斜めの背景を設定出来る機能を追加

### v0.0.5

- [修正] 設定画面の不具合修正
- [追加] β配布開始

### v0.0.4

- [追加] セクションブロック追加

### v0.0.3

- [調整] プラグイン更新情報の調整

### v0.0.2

- [修正] 拡張プラグインを複数有効化しているとエラーが発生する恐れのある点を修正

### v0.0.1

- [追加] β版作成
- [追加] 「ボタン型リンク」ブロック追加
- [追加] コアのボタンブロックにアイコンとブロック型表示オプションを追加

## yStandardシリーズ共通フック

### `ys_get_custom_icon`

カスタムアイコン追加用フック

### `ys_block_default_attributes`

ブロック初期値カスタマイズ用フック

### `ys_get_break_points`

ブレークポイント定義のカスタマイズ用フック

### `ys_is_enqueue_color_pallet`

カラーパレット用CSSが追加されたか(フロント)

### `ys_is_enqueue_block_editor_color_pallet`

カラーパレット用CSSが追加されたか(ブロックエディター)

### `ys_is_enqueue_font_size`

フォント用CSSが追加されたか(フロント)

### `ys_is_enqueue_block_editor_font_size`

フォント用CSSが追加されたか(ブロックエディター)

## Third-party resources

### Plugin Update Checker

License: MIT Source : <https://github.com/YahnisElsts/plugin-update-checker>

### React FontIconPicker

License: MIT Source : <https://github.com/fontIconPicker/react-fonticonpicker>

### IntersectionObserver

License: W3C Software and Document License Source : <https://github.com/w3c/IntersectionObserver>

### Feather

License: MIT
Source : <https://github.com/feathericons/feather>

### React Feather Icons

License: MIT
Source : <https://github.com/feathericons/react-feather>

### Simple Icons

License: CC0 - 1.0
Source : <https://github.com/simple-icons/simple-icons>

### React-Toastify

License: MIT
Source : <https://github.com/fkhadra/react-toastify>

### \_decimal.scss

License: MIT License
Source : <https://gist.github.com/terkel/4373420>
