/**
 * WordPress.
 */
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
/**
 * yStandard
 */
import ContentWidth from './content-width';

const PanelContentWidth = (props) => {
	return (
		<PanelBody
			title={__('コンテンツ幅設定', 'ystandard-blocks')}
			initialOpen={false}
		>
			<ContentWidth {...props} />
		</PanelBody>
	);
};
export default PanelContentWidth;
