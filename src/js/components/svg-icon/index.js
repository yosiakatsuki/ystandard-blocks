import feather from 'feather-icons';
import simpleIcons from 'simple-icons';

import { Component } from '@wordpress/element';
import classnames from 'classnames';

/**
 * SVGIcon
 */
class SVGIcon extends Component {
	render() {
		const { name } = this.props;

		if ( ! name ) {
			return '';
		}
		let svg = '';
		const isSNSIcon = -1 !== name.indexOf( 'sns-' );

		if ( isSNSIcon ) {
			const snsIcon = simpleIcons.get( name.replace( 'sns-', '' ) );
			svg = snsIcon.svg;
		} else if ( feather.icons[ name ] ) {
			svg = feather.icons[ name ].toSvg();
		}

		return (
			<span
				className={ classnames( 'ys-icon', {
					'sns-icon': isSNSIcon,
				} ) }
				dangerouslySetInnerHTML={ { __html: svg } }
			/>
		);
	}
}

export default SVGIcon;
