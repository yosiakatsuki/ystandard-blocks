export interface Icon {
	name: string;
	icon: string;
	category: string;
}

export type IconList = Icon[];

/**
 * アイコンのリストを取得
 *
 * @return {IconList} アイコン一覧.
 */
export function getIcons(): IconList {
	// @ts-expect-error
	return window?.ystdbIconList || [];
}

export function getFilteredIcons(name: string): IconList {
	const icons = getIcons();
	if (!icons) {
		return [];
	}
	return icons.filter((icon: Icon) => {
		return icon.name.indexOf(name) > -1;
	});
}

/**
 * アイコンSVG取得
 *
 * @param {string} iconName アイコン名.
 * @return {undefined|string} アイコンSVG.
 */
export function getIconSvg(iconName: string) {
	if (!iconName) {
		return undefined;
	}
	const targetIcon = getIcons().find((icon: Icon) => {
		return icon.name === iconName;
	});
	if (!targetIcon || !targetIcon.hasOwnProperty('icon')) {
		return undefined;
	}
	return targetIcon.icon;
}
