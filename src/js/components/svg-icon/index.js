import { Component } from '@wordpress/element';
import classnames from 'classnames';
import { getIconSvg } from '@ystd/util/icons';

/**
 * SVGIcon
 */
class SVGIcon extends Component {
	render() {
		const { name } = this.props;

		if ( ! name ) {
			return '';
		}

		return (
			<span
				className={ classnames( 'ys-icon', {
					'sns-icon': -1 !== name.indexOf( 'sns-' ),
				} ) }
				dangerouslySetInnerHTML={ { __html: getIconSvg( name ) } }
			/>
		);
	}
}

export default SVGIcon;
