/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import SpacingSizesControl from '@aktk/block-components/wp-controls/spacing-size-control';
import {
	ToolsPanel,
	ToolsPanelItem,
} from '@aktk/block-components/wp-controls/tools-panel';

import type {
	Spacing,
	SpacingSide,
} from '@aktk/block-components/components/responsive-spacing-control';
import type { ElementStylePanelProps } from './types';
import { hasElementStyleValue, updateElementStyle } from './utils';

interface ElementSpacingPanelProps extends ElementStylePanelProps {
	marginSides: SpacingSide[];
	paddingSides: SpacingSide[];
	showBlockGap?: boolean;
}

/**
 * 要素の余白設定パネル.
 *
 * @param props コンポーネントプロパティ.
 * @return 余白設定パネル.
 */
export function ElementSpacingPanel( props: ElementSpacingPanelProps ) {
	const {
		label,
		panelId,
		value,
		onChange,
		marginSides,
		paddingSides,
		showBlockGap = false,
	} = props;
	const updateSpacing = (
		property: 'margin' | 'padding',
		spacingValue?: Spacing
	) => {
		onChange(
			updateElementStyle( value, 'spacing', {
				...value?.spacing,
				[ property ]: spacingValue,
			} )
		);
	};
	const updateBlockGap = ( blockGap?: string ) => {
		onChange(
			updateElementStyle( value, 'spacing', {
				...value?.spacing,
				blockGap,
			} )
		);
	};
	const resetAll = () =>
		onChange( updateElementStyle( value, 'spacing', undefined ) );

	return (
		<ToolsPanel label={ label } panelId={ panelId } resetAll={ resetAll }>
			{ showBlockGap && (
				<ToolsPanelItem
					className="single-column"
					panelId={ panelId }
					label={ __( 'ブロックの間隔', 'ystandard-blocks' ) }
					hasValue={ () =>
						hasElementStyleValue( value?.spacing?.blockGap )
					}
					onDeselect={ () => updateBlockGap( undefined ) }
					isShownByDefault
				>
					<SpacingSizesControl
						label={ __( 'ブロックの間隔', 'ystandard-blocks' ) }
						values={
							value?.spacing?.blockGap
								? { top: value.spacing.blockGap }
								: undefined
						}
						onChange={ ( blockGap ) =>
							updateBlockGap( blockGap?.top )
						}
						sides={ [ 'top' ] }
						showSideInLabel={ false }
					/>
				</ToolsPanelItem>
			) }
			<ToolsPanelItem
				className="single-column"
				panelId={ panelId }
				label={ __( 'パディング', 'ystandard-blocks' ) }
				hasValue={ () =>
					hasElementStyleValue( value?.spacing?.padding )
				}
				onDeselect={ () => updateSpacing( 'padding', undefined ) }
				isShownByDefault={ false }
			>
				<SpacingSizesControl
					label={ __( 'パディング', 'ystandard-blocks' ) }
					values={ value?.spacing?.padding }
					onChange={ ( padding ) =>
						updateSpacing( 'padding', padding )
					}
					sides={ paddingSides }
				/>
			</ToolsPanelItem>
			<ToolsPanelItem
				className="single-column"
				panelId={ panelId }
				label={ __( 'マージン', 'ystandard-blocks' ) }
				hasValue={ () =>
					hasElementStyleValue( value?.spacing?.margin )
				}
				onDeselect={ () => updateSpacing( 'margin', undefined ) }
				isShownByDefault={ false }
			>
				<SpacingSizesControl
					label={ __( 'マージン', 'ystandard-blocks' ) }
					values={ value?.spacing?.margin }
					onChange={ ( margin ) => updateSpacing( 'margin', margin ) }
					sides={ marginSides }
					minimumCustomValue={ -9999 }
				/>
			</ToolsPanelItem>
		</ToolsPanel>
	);
}
