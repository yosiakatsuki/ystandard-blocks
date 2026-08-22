import React from 'react';
import { render, screen } from '@testing-library/react';

import { ResponsiveSpacingControl } from '../index';

describe( 'ResponsiveSpacingControl', () => {
	it( 'ラベルと3端末のコントロールを縦に表示する', () => {
		const { container } = render(
			<ResponsiveSpacingControl
				label="マージン"
				value={ {
					desktop: { top: '1rem' },
				} }
				onChange={ jest.fn() }
				allowedSides={ [ 'top', 'bottom' ] }
			/>
		);

		expect( screen.getByText( 'マージン' ) ).toBeTruthy();
		expect(
			container.querySelector( '.aktk-responsive-spacing-control' )
				?.className
		).toBe( 'aktk-responsive-spacing-control' );
		const deviceControls = [
			screen.getByRole( 'group', { name: 'デスクトップ' } ),
			screen.getByRole( 'group', { name: 'タブレット' } ),
			screen.getByRole( 'group', { name: 'モバイル' } ),
		];

		deviceControls.forEach( ( control ) => {
			expect( control.className ).toBe(
				'aktk-responsive-spacing-control__device'
			);
			expect( control.querySelector( 'svg' ) ).toBeTruthy();
			expect(
				control.querySelector(
					'.aktk-responsive-spacing-control__input'
				)
			).toBeTruthy();
		} );

		screen
			.getAllByRole( 'button', { name: 'spacing' } )
			.forEach( ( control ) => {
				expect( control.getAttribute( 'data-sides' ) ).toBe(
					'top,bottom'
				);
			} );

		expect(
			screen.queryByRole( 'button', { name: 'リセット' } )
		).toBeNull();
	} );
} );
