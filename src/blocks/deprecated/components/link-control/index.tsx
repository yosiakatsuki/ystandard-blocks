// @ts-ignore
import { __experimentalLinkControl as WPLinkControl } from '@wordpress/block-editor';
import './_editor.scss';

const NEW_TAB_REL = 'noreferrer noopener';

/**
 * リンクコントロール
 * @function
 * @param      value.value
 * @param      value
 * @param      onChange
 * @param      props
 * @param      value.onChange
 * @deprecated 置き換え予定
 */
// @ts-ignore
const LinkControl = ({ value, onChange, ...props }) => {
	const { linkTarget, rel, url } = value;
	const opensInNewTab = linkTarget === '_blank';

	const handleOnChange = ({
		url: newURL = '',
		// @ts-ignore
		opensInNewTab: newOpensInNewTab,
	}) => {
		let updatedRel = rel;
		let newLinkTarget = linkTarget;
		if (opensInNewTab !== newOpensInNewTab) {
			newLinkTarget = newOpensInNewTab ? '_blank' : undefined;
			if (newLinkTarget && !rel) {
				updatedRel = NEW_TAB_REL;
			} else if (!newLinkTarget && rel === NEW_TAB_REL) {
				updatedRel = undefined;
			}
		}
		onChange({
			url: newURL,
			linkTarget: newLinkTarget,
			rel: updatedRel,
		});
	};

	function unlink() {
		onChange({
			url: undefined,
			linkTarget: undefined,
			rel: undefined,
		});
	}

	return (
		<div className={'aktk-link-control'}>
			<WPLinkControl
				value={{ url, opensInNewTab }}
				onChange={handleOnChange}
				onRemove={() => {
					unlink();
				}}
				{...props}
			/>
		</div>
	);
};
export default LinkControl;
