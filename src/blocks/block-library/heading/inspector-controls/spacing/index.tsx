/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, BaseControl } from '@wordpress/components';

/**
 * Aktk dependencies
 */
import UnitControl from '@aktk/block-components/wp-controls/unit-control';

/**
 * Internal dependencies
 */
import type { AttributeType } from '../../type';
import { getSpacing } from './util';

// @ts-ignore
export function Spacing( props ) {
	const { attributes, setAttributes } = props;
	const {
		marginTop,
		marginTopUnit,
		marginRight,
		marginRightUnit,
		marginBottom,
		marginBottomUnit,
		marginLeft,
		marginLeftUnit,
	} = attributes as AttributeType;

	return (
		<PanelBody
			title={ __( '余白', 'ystandard-blocks' ) }
			initialOpen={ false }
		>
			<BaseControl className="pt-2">
				<SpacingControls
					spacing={ [
						{
							type: 'Top',
							label: '上',
							value: marginTop,
							unit: marginTopUnit,
						},
						{
							type: 'Right',
							label: '右',
							value: marginRight,
							unit: marginRightUnit,
						},
						{
							type: 'Bottom',
							label: '下',
							value: marginBottom,
							unit: marginBottomUnit,
						},
						{
							type: 'Left',
							label: '左',
							value: marginLeft,
							unit: marginLeftUnit,
						},
					] }
					setAttributes={ setAttributes }
				/>
			</BaseControl>
		</PanelBody>
	);
}

type SpacingControlsProps = {
	spacing: {
		type: 'Top' | 'Right' | 'Bottom' | 'Left';
		label: string;
		value?: string;
		unit?: string;
	}[];
	setAttributes: ( attributes: Record< string, any > ) => void;
};

function SpacingControls( props: SpacingControlsProps ) {
	return (
		<div className={ 'flex flex-col gap-2' }>
			{ props.spacing.map(
				( { type, label, value = '', unit = '' }, index ) => {
					const handleOnChange = ( newValue: string ) => {
						const newMargin = getSpacing( newValue );

						props.setAttributes( {
							[ `margin${ type }` ]: newMargin.value,
							[ `margin${ type }Unit` ]: newMargin.unit,
						} );
					};

					return (
						<div
							className="flex w-full items-center gap-2"
							key={ index }
						>
							<div>{ __( label, 'ystandard-blocks' ) }</div>
							<div className="grow">
								<UnitControl
									value={ `${ value }${ unit }` }
									unit={ unit }
									onChange={ handleOnChange }
								/>
							</div>
						</div>
					);
				}
			) }
		</div>
	);
}
