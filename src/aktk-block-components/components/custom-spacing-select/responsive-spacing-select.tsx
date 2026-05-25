import classnames from 'classnames';
/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk Dependencies.
 */
import { ResponsiveSelectTab } from '@aktk/block-components/components/tab-panel';
import { CustomSpacingSelectControl } from '@aktk/block-components/components/custom-spacing-select/custom-spacing-select';
import type { SpacingSizeValues } from '@aktk/block-components/wp-controls/spacing-size-control';
import {
	DesktopControl,
	MobileControl,
	TabletControl,
} from '@aktk/block-components/components/icon-control';
import {
	stripUndefined,
	isResponsive,
} from '@aktk/block-components/utils/object';
import Button from '@aktk/block-components/wp-controls/button';

/**
 * Component Imports.
 */
import type {
	ResponsiveSpacingSelectProps,
	ResponsiveSpacingSelectControlProps,
	Spacing,
	ResponsiveSpacing,
} from './types';

// レスポンシブ余白設定コンポーネント.
export function ResponsiveSpacingSelect( props: ResponsiveSpacingSelectProps ) {
	const {
		value,
		responsiveValue,
		onChange,
		responsiveControlStyle = 'vertical',
		useResponsive = true,
		showResetButton = true,
		sides,
		minimumCustomValue = 0,
	} = props;

	// デフォルトの値変更.
	const handleOnChange = ( newValue?: Spacing ) => {
		onChange( {
			spacing: newValue,
			responsiveSpacing: undefined,
		} );
	};

	// レスポンシブ値変更.
	const handleOnResponsiveChange = ( newValue?: ResponsiveSpacing ) => {
		onChange( {
			spacing: undefined,
			responsiveSpacing: stripUndefined(
				newValue as object
			) as ResponsiveSpacing,
		} );
	};

	const isResponsive = () => {
		return !! responsiveValue?.desktop || !! responsiveValue?.tablet || !! responsiveValue?.mobile;
	};

	return (
		<>
			{ useResponsive ? (
				<ResponsiveSelectTab
					isResponsive={ isResponsive() }
					defaultTabContent={
						<>
							<CustomSpacingSelectControl
								sides={ sides }
								values={ value }
								onChange={ handleOnChange }
								minimumCustomValue={ minimumCustomValue }
							/>
							{ showResetButton && (
								<Button
									onClick={ () =>
										handleOnChange( undefined )
									}
									size={ 'small' }
									variant={ 'secondary' }
									isDestructive
									className={
										'mt-2 w-full justify-center text-center'
									}
								>
									リセット
								</Button>
							) }
						</>
					}
					responsiveTabContent={
						<ResponsiveSpacingSelectControl
							value={ responsiveValue }
							onChange={ handleOnResponsiveChange }
							responsiveControlStyle={ responsiveControlStyle }
							sides={ sides }
							minimumCustomValue={ minimumCustomValue }
							showResetButton={ showResetButton }
						/>
					}
				/>
			) : (
				<CustomSpacingSelectControl
					sides={ sides }
					values={ value }
					onChange={ handleOnChange }
					minimumCustomValue={ minimumCustomValue }
				/>
			) }
		</>
	);
}

function ResponsiveSpacingSelectControl(
	props: ResponsiveSpacingSelectControlProps
) {
	const {
		value,
		onChange,
		responsiveControlStyle = 'vertical',
		showResetButton = true,
		sides,
		minimumCustomValue = 0,
	} = props;

	const handleOnDesktopChange = ( newValue: SpacingSizeValues ) => {
		onChange( {
			...value,
			desktop: newValue,
		} );
	};
	const handleOnTabletChange = ( newValue: SpacingSizeValues ) => {
		onChange( {
			...value,
			tablet: newValue,
		} );
	};
	const handleOnMobileChange = ( newValue: SpacingSizeValues ) => {
		onChange( {
			...value,
			mobile: newValue,
		} );
	};

	const handleOnReset = () => {
		onChange( {
			desktop: undefined,
			tablet: undefined,
			mobile: undefined,
		} );
	};

	const gridClassName = classnames( 'grid grid-cols-1 gap-4', {
		'gap-4 md:grid-cols-3': 'horizontal' === responsiveControlStyle,
	} );

	const labelClassName = classnames(
		'text-fz-xs max-w-[calc(100%-24px)] -mb-[1.4em]'
	);

	return (
		<div>
			<div className={ gridClassName }>
				<div>
					<DesktopControl className={ labelClassName }>
						{ __( 'テスクトップ', 'ystandard-blocks' ) }
					</DesktopControl>
					<CustomSpacingSelectControl
						sides={ sides }
						values={ value?.desktop }
						onChange={ handleOnDesktopChange }
						minimumCustomValue={ minimumCustomValue }
					/>
				</div>
				<div>
					<TabletControl className={ labelClassName }>
						{ __( 'タブレット', 'ystandard-blocks' ) }
					</TabletControl>
					<CustomSpacingSelectControl
						sides={ sides }
						values={ value?.tablet }
						onChange={ handleOnTabletChange }
						minimumCustomValue={ minimumCustomValue }
					/>
				</div>
				<div>
					<MobileControl className={ labelClassName }>
						{ __( 'モバイル', 'ystandard-blocks' ) }
					</MobileControl>
					<CustomSpacingSelectControl
						sides={ sides }
						values={ value?.mobile }
						onChange={ handleOnMobileChange }
						minimumCustomValue={ minimumCustomValue }
					/>
				</div>
			</div>
			{ showResetButton && (
				<Button
					onClick={ handleOnReset }
					size={ 'small' }
					variant={ 'secondary' }
					isDestructive
					className={ 'mt-2 w-full justify-center text-center' }
				>
					リセット
				</Button>
			) }
		</div>
	);
}
