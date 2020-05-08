import { Component } from '@wordpress/element';
import classnames from 'classnames';
import { getSVGIconTag } from "../svg-icon-select";

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
					'sns-icon': ( -1 !== name.indexOf( 'sns-' ) ),
				} ) }
				dangerouslySetInnerHTML={ { __html: getSVGIconTag( name ) } }
			/>
		);
	}
}

export default SVGIcon;
