import classnames from 'classnames';
import {IconSelect} from "../../../src/js/components/icon-select/index";

const {__} = wp.i18n;
const {addFilter} = wp.hooks;
const {Fragment} = wp.element;
const {InspectorControls} = wp.editor;
const {createHigherOrderComponent} = wp.compose;
const {PanelBody, ToggleControl, BaseControl} = wp.components;

const allowedBlocks = ['core/button'];

/**
 * Attribute追加
 */
export function addAttribute(settings) {
    if (typeof settings.attributes !== 'undefined' && allowedBlocks.includes(settings.name)) {
        settings.attributes = Object.assign(settings.attributes, {
            buttonBlock: {
                type: 'boolean',
            },
            icon: {
                type: "string"
            },
            customIcon: {
                type: "string"
            },
        });
    }
    return settings;
}

addFilter(
    'blocks.registerBlockType',
    'ystdb/exblock-add-attr',
    addAttribute
);
/**
 * 設定コントロール追加
 */
export const addBlockControls = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        if (allowedBlocks.includes(props.name)) {
            const {
                attributes,
                setAttributes
            } = props;
            const {
                buttonBlock,
                icon,
                customIcon
            } = attributes;
            console.log(attributes);
            /**
             * クラスの反映
             */
            const attrClassName = attributes.className ? attributes.className : '';
            attributes.className = classnames(
                attrClassName.replace(/\s?\-full\s?/g, ''),
                {'-full': buttonBlock}
            );
            /**
             * アイコンの反映
             */
            const text = attributes.text ? attributes.text.replace(/<i.+?>/g, '').replace(/<\/i>/g, '') : '';
            let previewIcon = '';
            if (icon) {
                previewIcon = `<i class="${icon}"></i>`;
            }
            attributes.text = `${text}${previewIcon}`;

            if (props.isSelected) {
                return (
                    <Fragment>
                        <BlockEdit {...props} />
                        <InspectorControls>
                            <IconSelect
                                selectIcon={(value) => {
                                    setAttributes({icon: value});
                                }}
                                clearIcon={() => {
                                    setAttributes({icon: ''});
                                }}
                                inputIcon={(content) => {
                                    setAttributes({customIcon: content});
                                }}
                                customIcon={customIcon}
                                customInfo={`<div class="ystdb-btn-selector -notice">※ボタンテキストを編集する際は一度アイコンをクリアしてください。</div>`}
                            />

                            <PanelBody
                                title={__('[ys]ブロック表示', 'ystandard-blocks')}
                                initialOpen={false}
                            >
                                <BaseControl label={__('表示タイプ', 'ystandard-blocks')}>
                                    <ToggleControl
                                        label={__('ブロック表示にする', 'ystandard-blocks')}
                                        checked={buttonBlock}
                                        onChange={() => {
                                            setAttributes({
                                                buttonBlock: !buttonBlock
                                            });
                                        }}
                                    />
                                </BaseControl>
                            </PanelBody>
                        </InspectorControls>
                    </Fragment>
                );
            }
        }
        return <BlockEdit {...props} />;
    };
}, 'addBlockControls');

addFilter(
    'editor.BlockEdit',
    'ystdb/ex-block-edit',
    addBlockControls
);

/**
 * 設定保存機能追加
 */
export function addSaveProps(extraProps, blockType, attributes) {
    if (allowedBlocks.includes(blockType.name)) {
        const value = extraProps.children.props.value.replace(/<i class=".+?"><\/i>/g, '');
        let icon = '';
        if (attributes.icon) {
            icon = `<i class="${attributes.icon}"></i>`
        }
        extraProps.children.props.value = `${value}${icon}`;
    }
    return extraProps;
}

addFilter(
    'blocks.getSaveContent.extraProps',
    'ystdb/ex-block-save-props',
    addSaveProps
);