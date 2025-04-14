/**
 * WordPress
 */
import { Button } from '@wordpress/components';
import { __, _x } from '@wordpress/i18n';
/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import RangeControl from '@aktk/block-components/wp-controls/range-control';
/**
 * yStandard
 */
import ControlLabel from '@aktk/components/control-label';
import HorizonButtons from '@aktk/components/horizon-buttons';
/**
 * Block
 */
import { getNumber } from '@aktk/helper/number.js';

const PRESET = [
	{
		value: 'container',
		label: _x( '1200', 'section block content width', 'ystandard-blocks' ),
		num: 1200,
	},
	{
		value: 'wide',
		label: _x( '800', 'section block content width', 'ystandard-blocks' ),
		num: 800,
	},
	{
		value: 'narrow',
		label: _x( '500', 'section block content width', 'ystandard-blocks' ),
		num: 500,
	},
];

const ContentWidth = ( { attributes, setAttributes } ) => {
	const { innerCustomWidth } = attributes;
	const handleOnChange = ( newValue ) => {
		setAttributes( {
			innerCustomWidth: getNumber( newValue, 0, 0, 1920 ),
		} );
	};
	return (
		<BaseControl
			label={ __( 'コンテンツ幅', 'ystandard-blocks' ) }
			id={ 'content-width' }
		>
			<BaseControl>
				<ControlLabel>
					{ __( 'かんたん設定', 'ystandard-blocks' ) }
				</ControlLabel>
				<HorizonButtons>
					{ PRESET.map( ( item ) => {
						return (
							<Button
								key={ item.value }
								isSecondary
								onClick={ () => {
									setAttributes( {
										innerCustomWidth: item.num,
									} );
								} }
							>
								<span>{ item.label }</span>
							</Button>
						);
					} ) }
				</HorizonButtons>
			</BaseControl>
			<BaseControl>
				<RangeControl
					label={ __( 'コンテンツ部分の最大幅', 'ystandard-blocks' ) }
					value={ innerCustomWidth }
					onChange={ handleOnChange }
					min={ 0 }
					max={ 1920 }
					step={ 1 }
					allowReset={ true }
				/>
				<ControlLabel isSmall>
					{ __(
						'※最大幅の指定をしない場合は0にしてください。',
						'ystandard-blocks'
					) }
				</ControlLabel>
			</BaseControl>
		</BaseControl>
	);
};
export default ContentWidth;
