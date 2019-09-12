const {__} = wp.i18n;

export const marginType = {
    margin: [
        {
            value: 'normal',
            label: __('通常'),
            num: 24
        },
        {
            value: 'wide',
            label: __('余白 大'),
            num: 48
        },
        {
            value: 'narrow',
            label: __('余白 小'),
            num: 8
        },
        {
            value: 'none',
            label: __('余白 なし'),
            num: 0
        }
    ],
    padding: [
        {
            value: 'normal',
            label: __('通常'),
            num: 32
        },
        {
            value: 'wide',
            label: __('余白 大'),
            num: 64
        },
        {
            value: 'narrow',
            label: __('余白 小'),
            num: 16
        },
        {
            value: 'none',
            label: __('余白 なし'),
            num: 0
        }
    ],
    innerWidth: [
        {
            value: 'none',
            label: __('最大幅指定なし'),
            num: 0
        },
        {
            value: 'wide',
            label: __('幅広'),
            num: 1232
        },
        {
            value: 'narrow',
            label: __('スリム'),
            num: 560
        }
    ]
}