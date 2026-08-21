import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { ResponsiveLayoutControl } from '../index';

jest.mock( '@wordpress/components', () => {
	const actual = jest.requireActual( '@wordpress/components' );
	const mockReact = jest.requireActual( 'react' );

	return {
		...actual,
		TabPanel: ( {
			children,
			initialTabName,
			tabs,
		}: {
			children: ( tab: {
				icon: React.ReactNode;
				name: string;
				title: string;
			} ) => React.ReactNode;
			initialTabName?: string;
			tabs: Array< {
				icon: React.ReactNode;
				name: string;
				title: string;
			} >;
		} ) => {
			const [ activeTabName, setActiveTabName ] = mockReact.useState(
				initialTabName ?? tabs[ 0 ].name
			);
			const activeTab =
				tabs.find( ( tab ) => tab.name === activeTabName ) ?? tabs[ 0 ];

			return (
				<div>
					<div role="tablist">
						{ tabs.map( ( tab ) => (
							<button
								key={ tab.name }
								type="button"
								role="tab"
								aria-label={ tab.title }
								aria-selected={ tab.name === activeTabName }
								onClick={ () => setActiveTabName( tab.name ) }
							>
								{ tab.icon }
							</button>
						) ) }
					</div>
					{ children( activeTab ) }
				</div>
			);
		},
	};
} );

const defaultValues = {
	orientation: 'vertical' as const,
	alignItems: {
		vertical: 'flex-start' as const,
		horizontal: 'baseline' as const,
	},
	justifyContent: {
		vertical: 'flex-start' as const,
		horizontal: 'flex-start' as const,
	},
};

describe( 'ResponsiveLayoutControl', () => {
	it( '端末をアイコンタブとして表示する', () => {
		render(
			<ResponsiveLayoutControl
				defaultValues={ defaultValues }
				label="配置"
				value={ undefined }
				onChange={ jest.fn() }
			/>
		);

		expect(
			screen.getByRole( 'tab', { name: 'デスクトップ' } )
		).not.toBeNull();
		expect(
			screen.getByRole( 'tab', { name: 'タブレット' } )
		).not.toBeNull();
		expect(
			screen.getByRole( 'tab', { name: 'モバイル' } )
		).not.toBeNull();
	} );

	it( '縦並びでは横方向を左揃えにしてbaselineと縦方向を隠す', () => {
		render(
			<ResponsiveLayoutControl
				defaultValues={ defaultValues }
				label="配置"
				value={ undefined }
				onChange={ jest.fn() }
			/>
		);

		expect(
			screen
				.getByRole( 'radio', { name: '左揃え' } )
				.getAttribute( 'aria-checked' )
		).toBe( 'true' );
		expect(
			screen.queryByRole( 'radio', { name: 'ベースライン' } )
		).toBeNull();
		expect( screen.queryByText( '縦方向の配置' ) ).toBeNull();
	} );

	it( '横並びでは縦方向をbaseline、横方向を左揃えにする', () => {
		render(
			<ResponsiveLayoutControl
				defaultValues={ defaultValues }
				label="配置"
				value={ {
					desktop: { orientation: 'horizontal' },
				} }
				onChange={ jest.fn() }
			/>
		);

		expect(
			screen
				.getByRole( 'radio', { name: 'ベースライン' } )
				.getAttribute( 'aria-checked' )
		).toBe( 'true' );
		expect(
			screen
				.getByRole( 'radio', { name: '左揃え' } )
				.getAttribute( 'aria-checked' )
		).toBe( 'true' );
	} );

	it( '選択中の端末だけを更新する', () => {
		const onChange = jest.fn();
		render(
			<ResponsiveLayoutControl
				defaultValues={ defaultValues }
				label="配置"
				value={ undefined }
				onChange={ onChange }
			/>
		);

		fireEvent.click( screen.getByRole( 'tab', { name: 'タブレット' } ) );
		fireEvent.click( screen.getByRole( 'radio', { name: '横並び' } ) );

		expect( onChange ).toHaveBeenCalledWith( {
			tablet: {
				orientation: 'horizontal',
				alignItems: 'baseline',
				justifyContent: 'flex-start',
			},
		} );
	} );
} );
