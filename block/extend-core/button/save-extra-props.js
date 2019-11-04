import {
    allowedBlocks
} from './config';
import {addFilter} from '@wordpress/hooks';
/**
 * 設定保存機能追加
 */
function addCoreBtnSaveProps(extraProps, blockType, attributes) {
    if (allowedBlocks.includes(blockType.name)) {
        let value = extraProps.children.props.value ? extraProps.children.props.value : '';
        value = value.replace(/<i.+class=".+?">.*?<\/i>/g, '');
        const {
            icon,
            customIcon,
            iconPosition
        } = attributes;

        let leftIcon = '';
        let rightIcon = '';
        let iconClass = icon;
        if (iconClass) {
            if ('custom' === iconClass) {
                if (customIcon) {
                    iconClass = customIcon;
                } else {
                    iconClass = '';
                }
            }
        }
        const iconStyle = `margin-${('right' === iconPosition ? 'left' : 'right')}:.5rem;`;
        if (iconClass) {
            const iconHTML = `<i style="${iconStyle}" class="${iconClass}">&thinsp;</i>`;
            leftIcon = 'left' === iconPosition ? iconHTML : '';
            rightIcon = 'right' === iconPosition ? iconHTML : '';
        }
        extraProps.children.props.value = `${leftIcon}${value}${rightIcon}`;
    }
    return extraProps;
}

/**
 * 設定保存
 */
addFilter(
    'blocks.getSaveContent.extraProps',
    'ystdb/ex-btn-save',
    addCoreBtnSaveProps
);
