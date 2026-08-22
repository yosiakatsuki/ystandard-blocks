import React from 'react';
import { render, screen } from '@testing-library/react';

import { ResponsiveGroupPanel } from '../inspector-controls/styles/responsive-group';
import { ResponsiveMainPanel } from '../inspector-controls/styles/responsive-main';
import { ResponsiveSubPanel } from '../inspector-controls/styles/responsive-sub';

jest.mock( '@aktk/block-components/wp-controls/tools-panel', () => ( {
	ToolsPanel: ( {
		children,
		label,
	}: {
		children: React.ReactNode;
		label: string;
	} ) => <div data-panel-label={ label }>{ children }</div>,
	ToolsPanelItem: ( {
		children,
		isShownByDefault,
		label,
	}: {
		children: React.ReactNode;
		isShownByDefault?: boolean;
		label: string;
	} ) => (
		<section
			aria-label={ label }
			data-shown-by-default={ String( isShownByDefault ) }
		>
			{ children }
		</section>
	),
} ) );

jest.mock(
	'@aktk/block-components/components/responsive-font-size-control',
	() => ( {
		ResponsiveFontSizeControl: () => <div />,
	} )
);

jest.mock(
	'@aktk/block-components/components/responsive-spacing-control',
	() => ( {
		hasResponsiveSpacingSizeValue: () => false,
		hasResponsiveSpacingValue: () => false,
		ResponsiveSpacingControl: () => <div />,
		ResponsiveSpacingSizeControl: () => <div />,
	} )
);

jest.mock(
	'@aktk/block-components/components/responsive-layout-control',
	() => ( {
		hasResponsiveLayoutValue: () => false,
		ResponsiveLayoutControl: () => <div />,
	} )
);

jest.mock(
	'@aktk/block-components/components/responsive-text-align-control',
	() => ( {
		hasResponsiveTextAlignValue: () => false,
		ResponsiveTextAlignControl: () => <div />,
	} )
);

jest.mock( '@aktk/block-components/components/ystandard-icon', () => ( {
	PanelIcon: () => <span />,
} ) );

const getItemLabels = () =>
	screen
		.getAllByRole( 'region' )
		.map( ( item ) => item.getAttribute( 'aria-label' ) );

const expectAllItemsHiddenByDefault = () => {
	screen.getAllByRole( 'region' ).forEach( ( item ) => {
		expect( item.getAttribute( 'data-shown-by-default' ) ).toBe( 'false' );
	} );
};

describe( 'カスタム見出しのレスポンシブパネル', () => {
	it( '見出しのみではフォントサイズの次に文字揃えを表示する', () => {
		render(
			<ResponsiveMainPanel
				attributes={ { content: '', level: 2 } }
				setAttributes={ jest.fn() }
			/>
		);

		expect(
			document.querySelector(
				'[data-panel-label="レスポンシブ（見出し）"]'
			)
		).not.toBeNull();
		expect( getItemLabels() ).toEqual( [
			'フォントサイズ',
			'文字揃え',
			'パディング',
			'マージン',
		] );
		expectAllItemsHiddenByDefault();
	} );

	it( 'サブテキストありでは見出しパネルの文字揃えを隠す', () => {
		render(
			<ResponsiveMainPanel
				attributes={ { content: '', level: 2, hasSubText: true } }
				setAttributes={ jest.fn() }
			/>
		);

		expect( getItemLabels() ).toEqual( [
			'フォントサイズ',
			'パディング',
			'マージン',
		] );
	} );

	it( 'サブテキスト使用時だけサブと見出しグループを表示する', () => {
		const { rerender } = render(
			<>
				<ResponsiveSubPanel
					attributes={ { content: '', level: 2 } }
					setAttributes={ jest.fn() }
				/>
				<ResponsiveGroupPanel
					attributes={ { content: '', level: 2 } }
					setAttributes={ jest.fn() }
				/>
			</>
		);

		expect( screen.queryAllByRole( 'region' ) ).toHaveLength( 0 );

		rerender(
			<>
				<ResponsiveSubPanel
					attributes={ {
						content: '',
						level: 2,
						hasSubText: true,
					} }
					setAttributes={ jest.fn() }
				/>
				<ResponsiveGroupPanel
					attributes={ {
						content: '',
						level: 2,
						hasSubText: true,
					} }
					setAttributes={ jest.fn() }
				/>
			</>
		);

		expect( getItemLabels() ).toEqual( [
			'フォントサイズ',
			'パディング',
			'マージン',
			'文字揃え',
			'ブロックの間隔',
			'パディング',
			'マージン',
			'配置',
		] );
		expectAllItemsHiddenByDefault();
	} );
} );
