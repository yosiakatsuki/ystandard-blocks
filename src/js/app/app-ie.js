document.addEventListener('DOMContentLoaded', () => {
	parseResponsiveClamp();
});

/**
 * data-responsive-clamp関連
 */
function parseResponsiveClamp() {
	const data = document.querySelectorAll('[data-responsive-clamp]');
	data.forEach((el) => {
		const attr = el.getAttribute('data-responsive-clamp');
		const styles = JSON.parse(attr);
		if (styles) {
			for (const key in styles) {
				el.style[key] = styles[key];
			}
		}
	});
}
