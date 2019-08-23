const {Fragment} = wp.element;
const {__} = wp.i18n;
const {registerFormatType, toggleFormat} = wp.richText;
const {Toolbar, ToolbarButton} = wp.components;
const {BlockFormatControls} = wp.editor;

const inlineStyleList = [
    {
        name: 'ystdb/inline-style-1',
        title: __('ユーザースタイル 1', 'ystandard-blocks'),
        class: 'ystdb-inline--1',
        icon: 'admin-customizer'
    }
    // ,
    // {
    //     name: 'ystdb/inline-style-2',
    //     title: __('ユーザースタイル 2', 'ystandard-blocks'),
    //     class: 'ystdb-inline--2',
    //     icon: 'admin-customizer'
    // },
    // {
    //     name: 'ystdb/inline-style-3',
    //     title: __('ユーザースタイル 3', 'ystandard-blocks'),
    //     class: 'ystdb-inline--3',
    //     icon: 'admin-customizer'
    // }
];

inlineStyleList.map((list) => {
    console.log(list);
    registerFormatType(list.name, {
        title: list.title,
        tagName: 'span',
        className: list.class,
        edit(props) {
            const {value, isActive, onChange} = props;
            const onToggle = () => onChange(toggleFormat(value, {type: list.name}));
            return (
                <Fragment>
                    <BlockFormatControls>
                        <div className="editor-format-toolbar block-editor-format-toolbar">
                            <Toolbar>
                                <ToolbarButton
                                    icon={list.icon}
                                    title={list.title}
                                    onClick={onToggle}
                                    isActive={isActive}
                                />
                            </Toolbar>
                        </div>
                    </BlockFormatControls>
                </Fragment>
            );
        },
    });
});