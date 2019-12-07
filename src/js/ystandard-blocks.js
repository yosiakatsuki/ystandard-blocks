import { registerBlockType } from '@wordpress/blocks';
//
import * as btnLink from "../../block/button-link/index";
import * as section from "../../block/section/index";
import * as faIcon from "../../block/fa-icon/index";
import * as customButton from "../../block/button/index";
import * as customColumns from "../../block/columns/index";
import * as customColumn from "../../block/columns/item/index";
import "../../block/extend-core/button";
import "../../block/format/inline-style/index";


/**
 * registerBlockType
 */
[
    btnLink,
    section,
    faIcon,
    customButton,
    customColumns,
    customColumn
].forEach( ( block ) => {
    if ( !block ) {
        return;
    }
    const { name, settings } = block;
    registerBlockType( name, settings );
} );
