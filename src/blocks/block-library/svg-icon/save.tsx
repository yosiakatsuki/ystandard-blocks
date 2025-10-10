/**
 * WordPress dependencies.
 */
import {
	useBlockProps,
	// @ts-expect-error
	__experimentalGetGradientClass as getGradientClass,
} from '@wordpress/block-editor';

/**
 * Aktk dependencies.
 */
import { SvgIcon } from '@aktk/block-components/components/svg-icon';

/**
 * Block dependencies.
 */
import { getBlockClasses, getWrapClasses, getWrapStyles } from './utils';

// @ts-expect-error
function Save( { attributes } ) {
	const { icon, url, linkTarget, rel } = attributes;

	const blockProps = useBlockProps.save( {
		className: getBlockClasses( attributes ),
	} );

	const wrapProps = {
		className: getWrapClasses( attributes ),
		style: getWrapStyles( attributes ),
	};

	return (
		<>
			<div { ...blockProps }>
				{ url ? (
					<>
						{ /* URLあり */ }
						<a
							href={ url }
							target={ linkTarget }
							rel={ rel }
							{ ...wrapProps }
						>
							<SvgIcon.Content name={ icon || 'info' } />
						</a>
					</>
				) : (
					<>
						{ /* URLなし */ }
						<div { ...wrapProps }>
							<SvgIcon.Content name={ icon || 'info' } />
						</div>
					</>
				) }
			</div>
		</>
	);
}

export default Save;
