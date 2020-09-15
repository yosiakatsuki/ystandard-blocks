const deprecated = [
	{
		attributes: {
			content: {
				type: 'string',
			},
			backgroundColor: {
				type: 'string',
			},
			textColor: {
				type: 'string',
			},
			customBackgroundColor: {
				type: 'string',
			},
			customTextColor: {
				type: 'string',
			},
			icon: {
				type: 'string',
			},
			align: {
				type: 'string',
			},
			buttonType: {
				type: 'string',
			},
			customIcon: {
				type: 'string',
			},
			iconPosition: {
				type: 'string',
				default: 'right',
			},
			buttonSize: {
				type: 'string',
				default: '',
			},
			fontSize: {
				type: 'string',
			},
			customFontSize: {
				type: 'integer',
			},
		},
		migrate(attributes) {
			const newIconLeft =
				attributes.iconPosition === 'left' && !!attributes.icon
					? attributes.icon
					: undefined;
			const newIconRight =
				attributes.iconPosition === 'right' && !!attributes.icon
					? attributes.icon
					: undefined;
			const size = {
				lg: 'is-large',
				sm: 'is-small',
			};
			return {
				...attributes,
				align: attributes.align,
				customBackgroundColor: attributes.customBackgroundColor,
				textColor: attributes.textColor,
				customTextColor: attributes.customTextColor,
				iconLeft: newIconLeft,
				iconRight: newIconRight,
				buttonType:
					attributes.buttonType === 'full' ? 'is-block' : undefined,
				paddingType: !!attributes.buttonSize
					? size[attributes.buttonSize]
					: undefined,
			};
		},
		save() {
			return null;
		},
	},
	{
		attributes: {
			content: {
				type: 'string',
			},
			backgroundColor: {
				type: 'string',
			},
			textColor: {
				type: 'string',
			},
			customBackgroundColor: {
				type: 'string',
			},
			customTextColor: {
				type: 'string',
			},
			icon: {
				type: 'string',
			},
			align: {
				type: 'string',
			},
			buttonType: {
				type: 'string',
			},
			customIcon: {
				type: 'string',
			},
			iconPosition: {
				type: 'string',
				default: 'right',
			},
			buttonSize: {
				type: 'string',
				default: '',
			},
			fontSize: {
				type: 'string',
			},
			customFontSize: {
				type: 'integer',
			},
		},
		migrate(attributes) {
			const newIcon =
				!!attributes.customIcon && 'custom' === attributes.icon
					? attributes.customIcon
					: attributes.icon;
			return {
				...attributes,
				icon: newIcon,
			};
		},
		save() {
			return null;
		},
	},
];

export default deprecated;
