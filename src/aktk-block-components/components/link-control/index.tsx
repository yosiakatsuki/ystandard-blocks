import classnames from 'classnames';
/**
 * WordPress dependencies
 */
// @ts-ignore
import { __experimentalLinkControl as WPLinkControl } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './style-editor.scss';

/**
 * 新しいタブで開くときに追加するrel属性
 */
const NEW_TAB_REL = 'noreferrer noopener';

type LinkControlValues = {
  url: string;
  linkTarget?: string;
  rel?: string;
}

interface LinkControlProps {
  value: LinkControlValues;
  onChange: ( newValue: { url?: string, linkTarget?: string, rel?: string } ) => void;
  isInspectorControls?: boolean;
}

interface WPLinkControlOnChangeProps {
  url?: string;
  opensInNewTab?: boolean;
}

export function LinkControl( props: LinkControlProps ) {
  const { value, onChange, isInspectorControls = false } = props;
  const { url, linkTarget, rel } = value;
  const opensInNewTab = linkTarget === '_blank';

  /**
   * リンク変更
   */
  const handleOnChange = ( newValue: WPLinkControlOnChangeProps ) => {
    const { url: newURL = '', opensInNewTab: newOpensInNewTab } = newValue;
    let updatedRel: string | undefined = rel;
    let newLinkTarget: string | undefined = linkTarget;
    // 新しいタブで開くかどうか.
    if ( opensInNewTab !== newOpensInNewTab ) {
      newLinkTarget = newOpensInNewTab ? '_blank' : undefined;
      if ( newLinkTarget && !rel ) {
        updatedRel = NEW_TAB_REL;
      } else if ( !newLinkTarget && rel === NEW_TAB_REL ) {
        updatedRel = undefined;
      }
    }

    onChange( {
      url: newURL,
      linkTarget: newLinkTarget,
      rel: updatedRel
    } );
  };

  // リンク解除
  const unlink = () => {
    onChange( {
      url: undefined,
      linkTarget: undefined,
      rel: undefined
    } );
  };


  const className = classnames( 'aktk-link-control', {
    'is-inspector-controls': isInspectorControls
  } );

  return (
    <div className={ className }>
      <WPLinkControl
        value={ { url, opensInNewTab } }
        // @ts-ignore
        onChange={ handleOnChange }
        onRemove={ unlink }
        settings={ [
          {
            id: 'opensInNewTab',
            title: __( '新しいタブで開く', 'ystandard-blocks' )
          }
        ] }
      />
    </div>
  );

}
