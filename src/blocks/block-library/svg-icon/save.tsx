import classnames from 'classnames';
/**
 * WordPress dependencies.
 */
import {
	useBlockProps,
	// @ts-expect-error
	__experimentalGetGradientClass as getGradientClass,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import { SvgIcon } from '@aktk/block-components/components/svg-icon';

// @ts-expect-error
function Save( { attributes } ) {
	const { icon } = attributes;

	const blockProps = useBlockProps.save( {
		className: classnames( '' ),
		style: {},
	} );

	return (
		<>
			<div { ...blockProps }>
				{ !! icon ? (
					<SvgIcon.Content name={ icon } />
				) : (
					<div className={ 'ystdb-icon__select--no-icon' }>
						<SvgIcon.Content name={ 'info' } />
						<p>
							「アイコン設定」から
							<br />
							アイコンを選択
						</p>
					</div>
				) }
			</div>
		</>
	);
}

export default Save;
