addEventListener( 'DOMContentLoaded', () => {
	const animateSection = document.querySelectorAll( '.has-animation' );
	const options = {
		rootMargin: '-10% 0px',
		threshold: 0,
	};
	const observer = new IntersectionObserver( doWhenIntersect, options );
	const node = Array.prototype.slice.call( animateSection, 0 );
	node.forEach( ( section ) => {
		observer.observe( section );
	} );
} );

function doWhenIntersect( entries ) {
	entries.forEach( ( entry ) => {
		if ( entry.isIntersecting ) {
			runAnimation( entry.target );
		}
	} );
}

function runAnimation( element ) {
	const animationAttr = element.getAttribute( 'data-animation' );
	if ( animationAttr ) {
		element.classList.add(
			`animation--${ animationAttr }`,
			'do-animation'
		);
	}
}
