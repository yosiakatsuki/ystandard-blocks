const {__} = wp.i18n;

export const marginType = {
    margin: [
        {
            value: 'normal',
            label: __('リセット'),
            num: 2
        },
        {
            value: 'wide',
            label: __('大'),
            num: 4
        },
        {
            value: 'narrow',
            label: __('小'),
            num: 1
        },
        {
            value: 'none',
            label: __('なし'),
            num: 0
        }
    ],
    padding: [
        {
            value: 'normal',
            label: __('リセット'),
            num: 3
        },
        {
            value: 'wide',
            label: __('大'),
            num: 5
        },
        {
            value: 'narrow',
            label: __('小'),
            num: 1
        },
        {
            value: 'none',
            label: __('なし'),
            num: 0
        }
    ],
    innerWidth: [
        {
            value: 'wide',
            label: __('ワイド'),
            num: 1232
        },
        {
            value: 'narrow',
            label: __('スリム'),
            num: 560
        },
        {
            value: 'none',
            label: __('なし'),
            num: 0
        },
    ]
}