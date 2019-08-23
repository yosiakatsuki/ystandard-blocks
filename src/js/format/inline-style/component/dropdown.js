const {BlockFormatControls} = wp.editor;
const {Toolbar, DropdownMenu} = wp.components;
import ystdbInlineStyleDropdownControls from './dropdown-controls';

const {__} = wp.i18n;

const ystdbInlineStyleDropdown = () => <BlockFormatControls>
    <div className="editor-format-toolbar block-editor-format-toolbar">
        <Toolbar>
            <ystdbInlineStyleDropdownControls.Slot>
                {fills => <DropdownMenu
                    icon='admin-appearance'
                    position="bottom left"
                    label={__('[ys]インラインスタイル', 'ystandard-blocks')}
                    controls={fills.map(([{props}]) => props)}
                />}
            </ystdbInlineStyleDropdownControls.Slot>
        </Toolbar>
    </div>
</BlockFormatControls>;

export default ystdbInlineStyleDropdown;