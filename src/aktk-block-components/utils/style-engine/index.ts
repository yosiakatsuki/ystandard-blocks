/**
 * var:preset 形式を展開する関数はあるが、WP6.7+
 * しばらくは自前実装する.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/style-engine/src/styles/utils.ts
 */

export function presetTokenToCssVar(
	token: string | undefined,
	withWrapper: boolean = true
) {
	const _token = token ? token : '';
	if ( _token.startsWith( 'var:preset|' ) ) {
		const [ , feature, slug ] = _token.split( '|' );
		const varName = `--wp--preset--${ feature }--${ slug }`;
		return withWrapper ? `var(${ varName })` : varName;
	}
	return token;
}

type ResponsiveDevice = 'desktop' | 'tablet' | 'mobile';
type ResponsiveStyleValue = string | number;
type ResponsiveStyleValues = Partial<
	Record< ResponsiveDevice, ResponsiveStyleValue >
>;

const RESPONSIVE_DEVICES: ResponsiveDevice[] = [
	'desktop',
	'tablet',
	'mobile',
];

/**
 * レスポンシブ値をCSSカスタムプロパティへ変換.
 *
 * @param name      カスタムプロパティ名.
 * @param values    デバイス別の値.
 * @param transform 値の変換処理.
 * @return CSSカスタムプロパティ.
 */
export function getResponsiveCustomProperties(
	name: string,
	values?: ResponsiveStyleValues,
	transform: (
		value: ResponsiveStyleValue
	) => ResponsiveStyleValue | undefined = ( value ) => value
) {
	return RESPONSIVE_DEVICES.reduce(
		( properties, device ) => {
			const rawValue = values?.[ device ];

			// 未設定のデバイスはCSSカスタムプロパティを出力しない.
			if (
				undefined === rawValue ||
				null === rawValue ||
				'' === rawValue
			) {
				return properties;
			}

			const value = transform( rawValue );

			// 変換処理で無効になった値はCSSへ出力しない.
			if ( undefined === value || '' === value ) {
				return properties;
			}

			properties[ `--ystdb--${ device }--${ name }` ] = value;
			return properties;
		},
		{} as Record< string, ResponsiveStyleValue >
	);
}
