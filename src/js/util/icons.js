/**
 * アイコンのリストを取得
 *
 * @return {Array} アイコン一覧.
 */
export function getIcons() {
	return window.ystdbIconList;
}

/**
 * アイコンSVG取得
 *
 * @param {string} iconName アイコン名.
 * @return {undefined|string} アイコンSVG.
 */
export function getIconSvg( iconName ) {
	const name = migrateOldSNSIconName( iconName );
	const targetIcon = getIcons().find( ( icon ) => {
		return icon.name === name;
	} );
	if ( ! targetIcon || ! targetIcon.hasOwnProperty( 'icon' ) ) {
		return undefined;
	}
	return targetIcon.icon;
}

/**
 * 旧SNSアイコン名を新SNSアイコン名に変換
 *
 * @param {string} name SNSアイコン名
 * @return {string} アイコン名.
 */
export function migrateOldSNSIconName( name ) {
	if ( ! name ) {
		return name;
	}
	const snsIcons = [
		{
			old: 'sns-Twitter',
			new: 'sns-twitter',
		},
		{
			old: 'sns-Facebook',
			new: 'sns-facebook',
		},
		{
			old: 'sns-Hatena Bookmark',
			new: 'sns-hatenabookmark',
		},
		{
			old: 'sns-Pocket',
			new: 'sns-pocket',
		},
		{
			old: 'sns-Line',
			new: 'sns-line',
		},
		{
			old: 'sns-Feedly',
			new: 'sns-feedly',
		},
		{
			old: 'sns-RSS',
			new: 'sns-rss',
		},
		{
			old: 'sns-WordPress',
			new: 'sns-wordpress',
		},
		{
			old: 'sns-Pinterest',
			new: 'sns-pinterest',
		},
		{
			old: 'sns-Instagram',
			new: 'sns-instagram',
		},
		{
			old: 'sns-linkedIn',
			new: 'sns-linkedin',
		},
		{
			old: 'sns-YouTube',
			new: 'sns-youtube',
		},
		{
			old: 'sns-Twitch',
			new: 'sns-twitch',
		},
		{
			old: 'sns-Dribbble',
			new: 'sns-dribbble',
		},
		{
			old: 'sns-GitHub',
			new: 'sns-github',
		},
		{
			old: 'sns-Tumblr',
			new: 'sns-tumblr',
		},
		{
			old: 'sns-Amazon',
			new: 'sns-amazon',
		},
	];
	const migrate = snsIcons.find( ( icon ) => {
		return icon.old === name;
	} );
	if ( ! migrate ) {
		return name;
	}
	return migrate.new;
}
