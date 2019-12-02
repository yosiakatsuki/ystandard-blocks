const blockAttributes = {
    content: {
        type: "string"
    },
    backgroundColor: {
        type: "string"
    },
    textColor: {
        type: "string"
    },
    customBackgroundColor: {
        type: "string"
    },
    customTextColor: {
        type: "string"
    },
    icon: {
        type: "string"
    },
    align: {
        type: "string"
    },
    buttonType: {
        type: "string"
    },
    customIcon: {
        type: "string"
    },
    iconPosition: {
        type: "string",
        default: "right"
    },
    buttonSize: {
        type: "string",
        default: ""
    },
    fontSize: {
        type: "string",
    },
    customFontSize: {
        type: "integer",
    }
};

const deprecated = [
    {
        attributes: {
            ...blockAttributes,
        },
        migrate(attributes) {
            const newIcon = (!!attributes.customIcon && 'custom' === attributes.icon) ? attributes.customIcon : attributes.icon;
            return {
                ...attributes,
                icon: newIcon,
            };
        },
        save() {
            return null;
        }
    }
];

export default deprecated;
