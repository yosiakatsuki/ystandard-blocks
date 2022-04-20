import twitter from 'simple-icons/icons/twitter';
import facebook from 'simple-icons/icons/facebook';
import hatenabookmark from 'simple-icons/icons/hatenabookmark';
import pocket from 'simple-icons/icons/pocket';
import line from 'simple-icons/icons/line';
import feedly from 'simple-icons/icons/feedly';
import rss from 'simple-icons/icons/rss';
import wordpress from 'simple-icons/icons/wordpress';
import pinterest from 'simple-icons/icons/pinterest';
import instagram from 'simple-icons/icons/instagram';
import linkedin from 'simple-icons/icons/linkedin';
import youtube from 'simple-icons/icons/youtube';
import twitch from 'simple-icons/icons/twitch';
import dribbble from 'simple-icons/icons/dribbble';
import github from 'simple-icons/icons/github';
import tumblr from 'simple-icons/icons/tumblr';
import amazon from 'simple-icons/icons/amazon';

export const getSimpleIcons = ( name ) => {
	switch ( name ) {
		case 'sns-Twitter':
			return twitter.svg;
		case 'sns-Facebook':
			return facebook.svg;
		case 'sns-Hatena Bookmark':
			return hatenabookmark.svg;
		case 'sns-Pocket':
			return pocket.svg;
		case 'sns-Line':
			return line.svg;
		case 'sns-Feedly':
			return feedly.svg;
		case 'sns-RSS':
			return rss.svg;
		case 'sns-WordPress':
			return wordpress.svg;
		case 'sns-Pinterest':
			return pinterest.svg;
		case 'sns-Instagram':
			return instagram.svg;
		case 'sns-linkedIn':
			return linkedin.svg;
		case 'sns-YouTube':
			return youtube.svg;
		case 'sns-Twitch':
			return twitch.svg;
		case 'sns-Dribbble':
			return dribbble.svg;
		case 'sns-GitHub':
			return github.svg;
		case 'sns-Tumblr':
			return tumblr.svg;
		case 'sns-Amazon':
			return amazon.svg;
		default:
			return '';
	}
};
