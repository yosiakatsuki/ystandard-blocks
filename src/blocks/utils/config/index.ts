export function getBlockEditorConfig(
	name: string,
	defaultValue: unknown = undefined
) {
	if (!window.ystdb || 'object' !== typeof window.ystdb) {
		return defaultValue;
	}
	if (!window.ystdb.hasOwnProperty(name)) {
		return defaultValue;
	}
	return window.ystdb[name];
}
