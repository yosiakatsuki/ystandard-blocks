import classnames from 'classnames';
import getNum from "../../src/js/util/_getNum";
import { allowedBlocks, template, alignmentsControls } from "./config";

import {
    BlockControls,
    InspectorControls,
    InnerBlocks,
} from '@wordpress/block-editor';

import {
    Fragment,
} from '@wordpress/element';

import {
    PanelBody,
    BaseControl,
    RangeControl,
    Toolbar
} from '@wordpress/components';

import { __, _x } from '@wordpress/i18n';

function columns( {
                      attributes,
                      setAttributes
                  } ) {
    const {
        col_pc,
        col_tablet,
        col_mobile,
        verticalAlignment
    } = attributes;

    const classes = classnames(
        'ystdb-columns',
        {
            [`has-${ col_mobile }-columns`]: col_mobile,
            [`has-${ col_tablet }-columns--tablet`]: col_tablet,
            [`has-${ col_pc }-columns--pc`]: col_pc,
            [`is-vertically-aligned-${ verticalAlignment }`]: verticalAlignment,
        }
    );

    const DEFAULT_CONTROLS = [ 'top', 'center', 'bottom', 'last' ];
    const DEFAULT_CONTROL = 'top';

    const activeAlignment = alignmentsControls[verticalAlignment];
    const defaultAlignmentControl = alignmentsControls[DEFAULT_CONTROL];

    return (
        <Fragment>
            <BlockControls>
                <Toolbar
                    isCollapsed={ true }
                    icon={ activeAlignment ? activeAlignment.icon : defaultAlignmentControl.icon }
                    label={ _x( 'Change vertical alignment', 'Block vertical alignment setting label' ) }
                    controls={
                        DEFAULT_CONTROLS.map( ( control ) => {
                            return {
                                ...alignmentsControls[control],
                                isActive: verticalAlignment === control,
                                onClick: () => setAttributes( { verticalAlignment: verticalAlignment === control ? undefined : control } ),
                            };
                        } )
                    }
                />
            </BlockControls>
            <InspectorControls>
                <PanelBody title={ __( 'カラム設定', 'ystandard-blocks' ) }>
                    <BaseControl>
                        <RangeControl
                            label={ __( 'PC', 'ystandard-blocks' ) }
                            beforeIcon={ 'desktop' }
                            value={ col_pc }
                            onChange={ ( value ) => {
                                setAttributes( { col_pc: getNum( value, 1, 6, 3 ) } )
                            } }
                            min={ 1 }
                            max={ 6 }
                        />
                        <RangeControl
                            label={ __( 'タブレット', 'ystandard-blocks' ) }
                            beforeIcon={ 'tablet' }
                            value={ col_tablet }
                            onChange={ ( value ) => {
                                setAttributes( { col_tablet: getNum( value, 1, 6, 3 ) } )
                            } }
                            min={ 1 }
                            max={ 6 }
                        />
                        <RangeControl
                            label={ __( 'タブレット', 'ystandard-blocks' ) }
                            beforeIcon={ 'smartphone' }
                            value={ col_mobile }
                            onChange={ ( value ) => {
                                setAttributes( { col_mobile: getNum( value, 1, 6, 1 ) } )
                            } }
                            min={ 1 }
                            max={ 6 }
                        />
                    </BaseControl>
                </PanelBody>
            </InspectorControls>

            <div className={ classes }>
                <InnerBlocks
                    allowedBlocks={ allowedBlocks }
                    template={ template }
                    templateLock={ false }
                />
            </div>
        </Fragment>
    );
}

export default columns;
