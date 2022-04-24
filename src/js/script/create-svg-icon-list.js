/**
 * SVGアイコンのリストを作成するスクリプト
 */
const fs = require( 'fs' );
const feather = require( 'feather-icons' );
const outputPath = './library/svg-icons/svg-icons.php';
const icons = [];
const {
	siTwitter,
	siFacebook,
	siHatenabookmark,
	siPocket,
	siLine,
	siFeedly,
	siRss,
	siWordpress,
	siPinterest,
	siInstagram,
	siLinkedin,
	siYoutube,
	siTwitch,
	siDribbble,
	siGithub,
	siTumblr,
	siAmazon,
	siDiscord,
} = require( 'simple-icons/icons' );
const snsIcons = [
	siTwitter,
	siFacebook,
	siHatenabookmark,
	siPocket,
	siLine,
	siFeedly,
	siRss,
	siWordpress,
	siPinterest,
	siInstagram,
	siLinkedin,
	siYoutube,
	siTwitch,
	siDribbble,
	siGithub,
	siTumblr,
	siAmazon,
	siDiscord,
];
for ( const icon in feather.icons ) {
	icons.push( {
		name: icon,
		icon: feather.icons[ icon ].toSvg(),
		category: 'feather',
	} );
}
for ( const icon of snsIcons ) {
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
