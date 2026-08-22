import type {
	ElementAlignItems,
	ElementLayoutDefaultValues,
	ElementLayoutOrientation,
	ElementJustifyContent,
} from './types';

type ResolvedElementLayoutDefaultValues = {
	orientation: ElementLayoutOrientation;
	alignItems: ElementAlignItems;
	justifyContent: ElementJustifyContent;
};

const FALLBACK_DEFAULT_VALUES: {
	orientation: ElementLayoutOrientation;
	alignItems: Record< ElementLayoutOrientation, ElementAlignItems >;
	justifyContent: Record< ElementLayoutOrientation, ElementJustifyContent >;
} = {
	orientation: 'vertical',
	alignItems: {
		vertical: 'stretch',
		horizontal: 'baseline',
	},
	justifyContent: {
		vertical: 'flex-start',
		horizontal: 'flex-start',
	},
};

/**
 * 並び方向に対応する配置の初期値を取得.
 *
 * @param defaultValues 呼び出し側が指定した初期値.
 * @param orientation   現在の並び方向.
 * @return 配置の初期値.
 */
export function getElementLayoutDefaultValues(
	defaultValues: ElementLayoutDefaultValues | undefined,
	orientation?: ElementLayoutOrientation
): ResolvedElementLayoutDefaultValues {
	const defaultOrientation =
		defaultValues?.orientation ?? FALLBACK_DEFAULT_VALUES.orientation;
	const currentOrientation = orientation ?? defaultOrientation;

	return {
		orientation: defaultOrientation,
		alignItems:
			defaultValues?.alignItems?.[ currentOrientation ] ??
			FALLBACK_DEFAULT_VALUES.alignItems[ currentOrientation ],
		justifyContent:
			defaultValues?.justifyContent?.[ currentOrientation ] ??
			FALLBACK_DEFAULT_VALUES.justifyContent[ currentOrientation ],
	};
}
