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
