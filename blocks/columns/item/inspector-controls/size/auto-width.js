/**
 * WordPress
 */
import { __ } from '@wordpress/i18n';
/**
 * yStandard.
 */
import ResponsiveToggle from '@ystd/components/responsive-toggle';
import Notice, { noticeType } from '@ystd/components/notice';
import { isObject } from '@ystd/helper/object.js';

const AutoWidth = ( { attributes, setAttributes } ) => {
	const { isAutoWidth, width } = attributes;
	const handleOnChange = ( value ) => {
		setAttributes( {
			isAutoWidth: value,
		} );
	};

	return (
		<>
			<ResponsiveToggle
				panelLabel={ __( '幅自動調整', 'ystandard-blocks' ) }
				toggleLabel={ __( '幅を自動で広げる', 'ystandard-blocks' ) }
				values={ isAutoWidth }
				onChange={ handleOnChange }
			/>
			{ isObject( isAutoWidth ) && isObject( width ) && (
				<Notice type={ noticeType.warning }>
					<div>
						{ __(
							'「カラム幅」と「幅を自動で広げる」を両方指定した場合、「カラム幅」が優先されます。',
							'ystandard-blocks'
						) }
					</div>
				</Notice>
			) }
		</>
	);
};

export default AutoWidth;
