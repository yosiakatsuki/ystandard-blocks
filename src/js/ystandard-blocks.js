import {registerBlockType} from '@wordpress/blocks';
//
import * as btnLink from "../../block/button-link/index";
import * as section from "../../block/section/index";
import * as faIcon from "../../block/fa-icon/index";
import * as customButton from "../../block/button/index";
import "../../block/extend-core/button";
import "../../block/format/inline-style/index";


/**
 * registerBlockType
 */
[
    btnLink,
    section,
    faIcon,
    customButton
].forEach((block) => {
    if (!block) {
        return;
    }
    const {name, settings} = block;
    registerBlockType(name, settings);
});
