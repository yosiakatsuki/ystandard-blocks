/**
 * SVGアイコンのリストを作成するスクリプト
 */
const fs = require( 'fs' );
const feather = require( 'feather-icons' );
const jsonPath = './src/js/components/svg-icon-select/icons-sample.json';
const featherIcons = [];
for ( let iconName in feather.icons ) {
	featherIcons.push( iconName );
}
const snsIcons = [
	'sns-Twitter',
	'sns-Facebook',
	'sns-Hatena Bookmark',
	'sns-Pocket',
	'sns-Line',
	'sns-Feedly',
	'sns-RSS',
	'sns-WordPress',
	'sns-Pinterest',
	'sns-Instagram',
	'sns-linkedIn',
	'sns-YouTube',
	'sns-Twitch',
	'sns-Dribbble',
	'sns-GitHub',
	'sns-Tumblr',
	'sns-Amazon',
];

const icons = {
	icons: featherIcons,
	sns: snsIcons,
};
/**
 * JSONファイルの作成
 */
fs.writeFile( jsonPath, JSON.stringify( icons ), ( err ) => {
	/* eslint-disable no-console */
	if ( err ) {
		console.log( err );
	} else {
		console.log( 'write end' );
	}
	/* eslint-enable */
} );
