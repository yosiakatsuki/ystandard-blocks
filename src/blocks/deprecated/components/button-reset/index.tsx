import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * @deprecated 置き換え予定
 */
// @ts-ignore
const ButtonReset = ( { onClick, label, isDisable, ...props } ) => {
  const _label = label ?? __( 'リセット', 'ystandard-blocks' );
  return (
    <>
      <Button
        variant={ 'secondary' }
        isSmall
        disabled={ !!isDisable }
        onClick={ onClick }
        { ...props }
      >
        { _label }
      </Button>
    </>
  );
};
export default ButtonReset;
