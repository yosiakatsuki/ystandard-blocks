import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { inlineStyles } from './config';

inlineStyles.map((style) => {
	registerFormatType(style.name, {
		title: style.title,
		tagName: 'span',
		className: style.class,
		edit(props) {
			return (
				<RichTextToolbarButton
					icon={style.icon}
					title={style.title}
					onClick={() => {
						props.onChange(
							toggleFormat(props.value, {
								type: style.name,
							})
						);
					}}
					isActive={props.isActive}
				/>
			);
		},
	});
	return true;
});
