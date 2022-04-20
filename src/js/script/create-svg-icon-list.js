/**
 * SVGアイコンのリストを作成するスクリプト
 */
const fs = require( 'fs' );
const feather = require( 'feather-icons' );
const outputPath = './library/svg-icons/svg-icons.php';
const icons = [];
const snsIcons = [
	'twitter',
	'facebook',
	'hatenabookmark',
	'pocket',
	'line',
	'feedly',
	'rss',
	'wordpress',
	'pinterest',
	'instagram',
	'linkedin',
	'youtube',
	'twitch',
	'dribbble',
	'github',
	'tumblr',
	'amazon',
];
for ( const icon in feather.icons ) {
	icons.push( {
		name: icon,
		icon: feather.icons[ icon ].toSvg(),
		category: 'feather',
	} );
}
for ( const iconSlug of snsIcons ) {
	const icon = require( 'simple-icons/icons/' + iconSlug );
	icons.push( {
		name: 'sns-' + icon.slug,
		icon: icon.svg,
		category: 'sns',
	} );
}

/**
 * JSONファイルの作成
 */
const content = "<?php return json_decode('" + JSON.stringify( icons ) + "');";
fs.writeFile( outputPath, content, ( err ) => {
	/* eslint-disable no-console */
	if ( err ) {
		console.log( err );
	} else {
		console.log( 'write end' );
	}
	/* eslint-enable */
} );
