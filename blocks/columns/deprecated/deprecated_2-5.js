import { InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';

export const deprecated25 = [
	{
		attributes: {
			colPc: {
				type: 'number',
				default: 3,
			},
			colTablet: {
				type: 'number',
				default: 3,
			},
			colMobile: {
				type: 'number',
				default: 1,
			},
			verticalAlignment: {
				type: 'string',
				default: undefined,
			},
			horizonAlignment: {
				type: 'string',
				default: undefined,
			},
			reverse: {
				type: 'bool',
				default: false,
			},
			removeMargin: {
				type: 'bool',
				default: false,
			},
		},
		supports: {
			align: ['wide', 'full'],
			className: false,
			lightBlockWrapper: true,
		},
		save({ attributes }) {
			const {
				colPc,
				colTablet,
				colMobile,
				verticalAlignment,
				horizonAlignment,
				reverse,
				removeMargin,
			} = attributes;

			const classes = classnames('ystdb-columns', {
				[`has-${colMobile}-columns`]: colMobile,
				[`has-${colTablet}-columns--tablet`]: colTablet,
				[`has-${colPc}-columns--pc`]: colPc,
				[`is-vertically-aligned-${verticalAlignment}`]:
					verticalAlignment,
				[`is-horizontally-aligned-${horizonAlignment}`]:
					horizonAlignment,
				'is-reverse': reverse,
				'is-no-margin': removeMargin,
			});

			return (
				<div className="ystdb-columns-wrap">
					<div className={classes}>
						<InnerBlocks.Content />
					</div>
				</div>
			);
		},
	},
];
