import classnames from 'classnames';

const {RichText, getColorClassName} = wp.editor;
const {__} = wp.i18n;

const blockAttributes = {
    url: {
        type: 'string',
        source: 'attribute',
        selector: 'a',
        attribute: 'href',
    },
    title: {
        type: 'string',
        source: 'attribute',
        selector: 'a',
        attribute: 'title',
    },
    text: {
        type: 'string',
        source: 'html',
        selector: 'a',
    },
};

const deprecated = [
    {
        attributes: {
            ...blockAttributes,
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
            buttonBlock: {
                type: 'boolean',
            },
            icon: {
                type: "string"
            },
        },
        migrate(attributes) {
            console.log(attributes);
            const iconStyle = `margin-left:.5rem;`;
            const iconHTML = `<i style="${iconStyle}" class="${attributes.icon}"></i>`;
            attributes.text = attributes.text.replace(/<i.*?class=".+?">.*?<\/i>/g, '') + iconHTML;
            return {
                ...attributes,
                iconPosition: 'right'
            };
        },
        save({attributes}) {
            const {
                url,
                text,
                title,
                backgroundColor,
                textColor,
                customBackgroundColor,
                customTextColor,
            } = attributes;

            let buttonText = text;//.replace(/<i.*?class=".+?">.*?<\/i>/g, '');
            let icon = '';
            if (attributes.icon) {
                icon = `<i class="${attributes.icon}"></i>`
            }
            buttonText = `${buttonText}${icon}`;

            const textClass = getColorClassName('color', textColor);
            const backgroundClass = getColorClassName('background-color', backgroundColor);

            const buttonClasses = classnames('wp-block-button__link', {
                'has-text-color': textColor || customTextColor,
                [textClass]: textClass,
                'has-background': backgroundColor || customBackgroundColor,
                [backgroundClass]: backgroundClass,
            });

            const buttonStyle = {
                backgroundColor: backgroundClass ? undefined : customBackgroundColor,
                color: textClass ? undefined : customTextColor,
            };
            return (
                <div>
                    <a
                        style={buttonStyle}
                        className={buttonClasses}
                        href={url}
                    >
                        {buttonText}
                    </a>
                </div>
            );
        }
    }
];

export default deprecated;