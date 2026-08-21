import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { ResponsiveSpacingControl } from '../index';

describe( 'ResponsiveSpacingControl', () => {
	it( 'ラベルと3端末のコントロールを縦に表示する', () => {
		render(
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
			screen.getByRole( 'group', { name: 'デスクトップ' } )
		).toBeTruthy();
		expect(
			screen.getByRole( 'group', { name: 'タブレット' } )
		).toBeTruthy();
		expect(
			screen.getByRole( 'group', { name: 'モバイル' } )
		).toBeTruthy();

		screen
			.getAllByRole( 'button', { name: 'spacing' } )
			.forEach( ( control ) => {
				expect( control.getAttribute( 'data-sides' ) ).toBe(
					'top,bottom'
				);
			} );
	} );

	it( 'リセット時にレスポンシブ値だけを未設定にする', () => {
		const onChange = jest.fn();
		render(
			<ResponsiveSpacingControl
				label="パディング"
				value={ {
					desktop: { top: '1rem' },
				} }
				onChange={ onChange }
				allowedSides={ [ 'top', 'right', 'bottom', 'left' ] }
			/>
		);

		fireEvent.click( screen.getByRole( 'button', { name: 'リセット' } ) );

		expect( onChange ).toHaveBeenCalledWith( undefined );
	} );
} );
