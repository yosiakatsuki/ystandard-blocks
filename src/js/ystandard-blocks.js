import {registerBlockType} from '@wordpress/blocks';
//
import * as btnLink from "../../block/btn-link/index";
import * as section from "../../block/section/index";
import "../../block/extend-core/button";
import "../../block/format/inline-style/index";


/**
 * registerBlockType
 */
[
    btnLink,
    section
].forEach((block) => {
    if (!block) {
        return;
    }
    const {name, settings} = block;
    registerBlockType(name, settings);
});
