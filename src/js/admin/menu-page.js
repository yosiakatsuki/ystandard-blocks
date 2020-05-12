import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import { inlineStyle } from './tab/inline';
import { balloon } from "./tab/balloon";

UIkit.use( Icons );

document.addEventListener( 'DOMContentLoaded', () => {
	const nav = document.querySelectorAll( '[data-active]' );
	nav.forEach( ( el ) => {
		el.addEventListener( 'click', ( e ) => {
			const active = e.target.getAttribute( 'data-active' );
			const query = window.location.search.replace( /\&tab=\d/i, '' ) + '&tab=' + active;
			history.pushState( null, null, query );
		} );
	} );
} );

inlineStyle();
balloon();
