import React from 'react';
import { render, screen } from '@testing-library/react';

import { ElementBackgroundPanel } from '../color-panel';

jest.mock( '@aktk/block-components/hooks/useThemeColors', () => ( {
	__esModule: true,
	default: () => [],
} ) );

jest.mock( '@aktk/block-components/hooks/useThemeGradient', () => ( {
	__esModule: true,
	default: () => [],
} ) );

jest.mock(
	'@aktk/block-components/wp-controls/color-gradient-settings-dropdown',
	() => ( {
		__esModule: true,
		default: ( {
			settings,
		}: {
			settings: Array< { clearable?: boolean; label: string } >;
		} ) => (
			<>
				{ settings.map( ( setting ) => (
					<section
						key={ setting.label }
						aria-label={ setting.label }
						data-clearable={ String( setting.clearable ) }
					/>
				) ) }
			</>
		),
	} )
);

jest.mock( '@aktk/block-components/wp-controls/tools-panel', () => ( {
	ToolsPanel: ( {
		children,
		className,
	}: {
		children: React.ReactNode;
		className?: string;
	} ) => <div className={ className }>{ children }</div>,
} ) );

describe( 'ElementBackgroundPanel', () => {
	it( '背景色とグラデーションを別々に表示してクリアを許可する', () => {
		render(
			<ElementBackgroundPanel
				label="背景"
				panelId="background-panel"
				value={ undefined }
				onChange={ jest.fn() }
			/>
		);

		const controls = screen.getAllByRole( 'region' );

		expect(
			controls[ 0 ].closest( '.aktk-element-background-panel' )
		).not.toBeNull();
		expect( controls.map( ( control ) => control.ariaLabel ) ).toEqual( [
			'色',
			'グラデーション',
		] );
		controls.forEach( ( control ) => {
			expect( control.getAttribute( 'data-clearable' ) ).toBe( 'true' );
		} );
	} );
} );
