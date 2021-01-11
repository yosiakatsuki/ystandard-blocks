document.addEventListener('DOMContentLoaded', () => {
	parseResponsiveClamp();
});

/**
 * data-responsive-clamp関連
 */
function parseResponsiveClamp() {
	const dataList = document.querySelectorAll('[data-responsive-clamp]');
	const data = Array.prototype.slice.call(dataList, 0);
	data.forEach((el) => {
		const attr = el.getAttribute('data-responsive-clamp');
		const styles = JSON.parse(attr);
		if (styles) {
			for (const key in styles) {
				el.style[key] = styles[key];
			}
		}
	});
	const propertyList = document.querySelectorAll(
		'[data-ystdb-responsive-property]'
	);
	const property = Array.prototype.slice.call(propertyList, 0);
	property.forEach((el) => {
		const attr = el.getAttribute('data-ystdb-responsive-property');
		const styles = JSON.parse(attr);
		if (styles) {
			for (const key in styles) {
				el.style[key] = styles[key];
			}
		}
	});
}
