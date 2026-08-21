import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';

import { ElementLayoutPanel } from '../layout-panel';

jest.mock( '@aktk/block-components/wp-controls/tools-panel', () => ( {
	ToolsPanel: ( { children }: { children: React.ReactNode } ) => children,
	ToolsPanelItem: ( {
		children,
		label,
	}: {
		children: React.ReactNode;
		label: string;
	} ) => <section aria-label={ label }>{ children }</section>,
} ) );

describe( 'ElementLayoutPanel', () => {
	it( '縦並びの軸に対応する既定値とヘルプを表示する', () => {
		render(
			<ElementLayoutPanel
				label="見出しグループ（配置）"
				panelId="layout-panel"
				value={ undefined }
				onChange={ jest.fn() }
			/>
		);

		const horizontalAlignment = screen.getByRole( 'region', {
			name: '横方向の配置',
		} );
		const verticalAlignment = screen.getByRole( 'region', {
			name: '縦方向の配置',
		} );

		expect(
			within( horizontalAlignment )
				.getByRole( 'radio', {
					name: '幅を揃える',
				} )
				.getAttribute( 'aria-checked' )
		).toBe( 'true' );
		expect(
			within( verticalAlignment )
				.getByRole( 'radio', {
					name: '上揃え',
				} )
				.getAttribute( 'aria-checked' )
		).toBe( 'true' );
		expect(
			screen.getByText(
				'見出しグループの高さが内容より大きい場合に反映されます。'
			)
		).not.toBeNull();
	} );

	it( '横並びでは軸のラベルを入れ替えてbaselineを既定にする', () => {
		render(
			<ElementLayoutPanel
				label="見出しグループ（配置）"
				panelId="layout-panel"
				value={ { layout: { orientation: 'horizontal' } } }
				onChange={ jest.fn() }
			/>
		);

		const verticalAlignment = screen.getByRole( 'region', {
			name: '縦方向の配置',
		} );

		expect(
			within( verticalAlignment )
				.getByRole( 'radio', {
					name: 'ベースライン',
				} )
				.getAttribute( 'aria-checked' )
		).toBe( 'true' );
		expect(
			screen.queryByText(
				'見出しグループの高さが内容より大きい場合に反映されます。'
			)
		).toBeNull();
	} );

	it( '並び方向を戻しても保存済みの配置値を維持する', () => {
		const onChange = jest.fn();
		render(
			<ElementLayoutPanel
				label="見出しグループ（配置）"
				panelId="layout-panel"
				value={ {
					layout: {
						orientation: 'horizontal',
						alignItems: 'center',
						justifyContent: 'space-between',
					},
				} }
				onChange={ onChange }
			/>
		);

		fireEvent.click( screen.getByRole( 'radio', { name: '縦並び' } ) );

		expect( onChange ).toHaveBeenCalledWith( {
			layout: {
				alignItems: 'center',
				justifyContent: 'space-between',
			},
		} );
	} );

	it( '既定値を選び直した場合は保存値を削除する', () => {
		const onChange = jest.fn();
		render(
			<ElementLayoutPanel
				label="見出しグループ（配置）"
				panelId="layout-panel"
				value={ { layout: { alignItems: 'center' } } }
				onChange={ onChange }
			/>
		);

		const horizontalAlignment = screen.getByRole( 'region', {
			name: '横方向の配置',
		} );
		fireEvent.click(
			within( horizontalAlignment ).getByRole( 'radio', {
				name: '幅を揃える',
			} )
		);

		expect( onChange ).toHaveBeenCalledWith( undefined );
	} );
} );
