import classnames from "classnames";
import IconSelect from "../../../src/js/components/icon-select";
import {__} from '@wordpress/i18n';

import {
    Fragment
} from '@wordpress/element';
import {addFilter} from '@wordpress/hooks';
import {
    InspectorControls,
    FontSizePicker,
    getFontSizeClass
} from '@wordpress/block-editor';
import {createHigherOrderComponent} from '@wordpress/compose';
import {
    PanelBody,
    ToggleControl,
    BaseControl,
    RadioControl
} from '@wordpress/components';
import {select} from '@wordpress/data';
import {
    allowedBlocks
} from './config';
/**
 * 設定コントロール追加
 */
const addBtnCustomControls = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        if (allowedBlocks.includes(props.name)) {
            const {
                attributes,
                setAttributes
            } = props;
            const {
                buttonBlock,
                icon,
                customIcon,
                iconPosition,
                fontSize,
                buttonSize
            } = attributes;
            const {fontSizes} = select('core/block-editor').getSettings();
            const selectedFontSize = fontSizes.find(item => item.size === fontSize);
            const fontSizeClass = selectedFontSize ? getFontSizeClass(selectedFontSize.slug) : '';
            /**
             * クラスの反映
             */
            const attrClassName = attributes.className ? attributes.className : '';
            /**
             * クラス初期化
             */
            const initClassName = (className) => {
                return className
                    .replace(/\s?\-full\s?/g, '')
                    .replace(/has-.+-font-size/g, '')
                    .replace(/\s?\-sm\s?/g, '')
                    .replace(/\s?\-lg\s?/g, '');
            };

            attributes.className = classnames(
                initClassName(attrClassName),
                {
                    '-full': buttonBlock,
                    [fontSizeClass]: fontSizeClass,
                    'has-custom-font-size': fontSizeClass,
                    ['-' + buttonSize]: buttonSize
                }
            );
            /**
             * アイコンの反映
             */
            const text = attributes.text ? attributes.text.replace(/<i.*class=".*?">.*?<\/i>/g, '') : '';
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
                const iconHTML = `<i style="${iconStyle}" class="${iconClass}"> </i>`;
                leftIcon = 'left' === iconPosition ? iconHTML : '';
                rightIcon = 'right' === iconPosition ? iconHTML : '';
            }
            attributes.text = `${leftIcon}${text}${rightIcon}`;

            if (props.isSelected) {
                return (
                    <Fragment>
                        <BlockEdit {...props} />
                        <InspectorControls>
                            <PanelBody title={__('[ys]テキスト設定', 'ystandard-blocks')}>
                                <div className={'ystdb-inspectorcontrols__disablecustomfont'}>
                                    <FontSizePicker
                                        label={__('文字サイズ', 'ystandard-blocks')}
                                        disableCustomFontSizes={true}
                                        value={fontSize}
                                        onChange={(newFontSize) => {
                                            setAttributes({fontSize: newFontSize})
                                        }}
                                    />
                                </div>
                            </PanelBody>
                            <IconSelect
                                iconPosition={iconPosition}
                                onChangePosition={(option) => {
                                    setAttributes({iconPosition: option});
                                }}
                                selectedIcon={iconClass}
                                onClickIcon={(value) => {
                                    setAttributes({icon: value});
                                }}
                                onClickClear={() => {
                                    setAttributes({icon: ''});
                                }}
                                onChangeCustomIcon={(content) => {
                                    setAttributes({customIcon: content});
                                    if (content) {
                                        setAttributes({icon: 'custom'});
                                    } else {
                                        setAttributes({icon: ''});
                                    }
                                }}
                                customIcon={customIcon}
                                customInfo={`※ボタンテキストを編集する際は一度アイコンをクリアしてください。`}
                            />

                            <PanelBody
                                title={__('[ys]表示タイプ', 'ystandard-blocks')}
                                initialOpen={false}
                            >
                                <BaseControl>
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
                                <div className={`ystdb-inspectorcontrols__horizontal-radio`}>
                                    <RadioControl
                                        label={__('ボタンサイズ', 'ystandard-blocks')}
                                        selected={buttonSize}
                                        options={[
                                            {label: __('通常', 'ystandard-blocks'), value: ''},
                                            {label: __('大', 'ystandard-blocks'), value: 'lg'},
                                            {label: __('小', 'ystandard-blocks'), value: 'sm'},
                                        ]}
                                        onChange={(option) => {
                                            setAttributes({buttonSize: option});
                                        }}
                                    />
                                </div>
                            </PanelBody>
                        </InspectorControls>
                    </Fragment>
                );
            }
        }
        return <BlockEdit {...props} />;
    };
}, 'addBtnCustomControls');

/**
 * コントロール追加
 */
addFilter(
    'editor.BlockEdit',
    'ystdb/ex-btn-edit',
    addBtnCustomControls
);
