import classnames from 'classnames';

import {
    InnerBlocks,
    InspectorControls,
    withColors,
    PanelColorSettings,
} from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import {
    Fragment
} from '@wordpress/element';

function ColumnEdit( {
                         attributes,
                         setAttributes,
                         setBackgroundColor,
                         backgroundColor,
                         hasChildBlocks,
                     } ) {
    const {
        shadow
    } = attributes;

    const classes = classnames(
        'ystdb-column',
        {
            'has-background': backgroundColor.color,
            [backgroundColor.class]: backgroundColor.class,
            'has-shadow': shadow
        }
    );

    return (
        <Fragment>
            <InspectorControls>
                <PanelColorSettings
                    title={ __( 'Color Settings' ) }
                    colorSettings={ [
                        {
                            value: backgroundColor.color,
                            onChange: ( color ) => {
                                setBackgroundColor( color );
                            },
                            label: __( 'Background Color' ),
                        },
                    ] }
                >
                </PanelColorSettings>
                <PanelBody title={ __( 'ボックス設定', 'ystandard-blocks' ) }>
                    <ToggleControl
                        label={ __( '影をつける', 'ystandard-blocks' ) }
                        checked={ shadow }
                        onChange={ () => {
                            setAttributes( {
                                shadow: !shadow
                            } );
                        } }
                    />
                </PanelBody>
            </InspectorControls>

            <div className={ classes }>
                <div className="ystdb-column-block-container">
                    <InnerBlocks
                        templateLock={ false }
                        renderAppender={ (
                            hasChildBlocks ?
                                undefined :
                                () => <InnerBlocks.ButtonBlockAppender/>
                        ) }
                    />
                </div>
            </div>
        </Fragment>
    );
}

export default compose( [
    withColors( 'backgroundColor' ),
    withSelect( ( select, ownProps ) => {
        const { clientId } = ownProps;
        const { getBlockOrder } = select( 'core/block-editor' );

        return {
            hasChildBlocks: getBlockOrder( clientId ).length > 0,
        };
    } )
] )( ColumnEdit );
