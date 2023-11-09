/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { TextControl, ToggleControl } from '@wordpress/components';
/**
 * Plugin dependencies.
 */
import Panel from '@aktk/blocks/components/panel';
import { BUTTON_NEW_TAB_REL } from '@aktk/blocks/config';
// @ts-expect-error
export function Link(props) {
	const { attributes, setAttributes } = props;
	const { linkTarget, rel } = attributes;

	const handleLinkTargetChange = (value: boolean) => {
		const newLinkTarget = value ? '_blank' : undefined;
		let updatedRel = rel;
		if (newLinkTarget && !rel) {
			updatedRel = BUTTON_NEW_TAB_REL;
		} else if (!newLinkTarget && rel === BUTTON_NEW_TAB_REL) {
			updatedRel = undefined;
		}
		setAttributes({
			linkTarget: newLinkTarget,
			rel: updatedRel,
		});
	};
	return (
		<Panel title={__('リンク設定', 'ystandard-blocks')}>
			<ToggleControl
				label={__('Open in new tab')}
				onChange={handleLinkTargetChange}
				checked={linkTarget === '_blank'}
			/>
			<TextControl
				label={__('リンクrel属性', 'ystandard-blocks')}
				value={rel || ''}
				onChange={(value) => {
					setAttributes({ rel: value });
				}}
			/>
		</Panel>
	);
}
