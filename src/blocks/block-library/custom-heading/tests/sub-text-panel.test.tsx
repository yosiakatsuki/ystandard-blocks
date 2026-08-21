import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { SubTextPanel } from '../inspector-controls/sub-text';

jest.mock( '@aktk/block-components/components/panel', () => ( {
	Panel: ( { children }: { children: React.ReactNode } ) => children,
} ) );

describe( 'Custom Heading Block <SubTextPanel />', () => {
	it( '見出し構成を2択のセグメント型ラジオボタンで表示する', () => {
		render(
			<SubTextPanel
				attributes={ { hasSubText: false } }
				setAttributes={ jest.fn() }
			/>
		);

		expect(
			screen
				.getByRole( 'radio', { name: '見出しのみ' } )
				.getAttribute( 'aria-checked' )
		).toBe( 'true' );
		expect(
			screen
				.getByRole( 'radio', {
					name: /サブテキスト\s+あり/,
				} )
				.getAttribute( 'aria-checked' )
		).toBe( 'false' );
	} );

	it( 'サブテキストありを選ぶとhasSubTextを有効化する', () => {
		const setAttributes = jest.fn();
		render(
			<SubTextPanel
				attributes={ { hasSubText: false } }
				setAttributes={ setAttributes }
			/>
		);

		fireEvent.click(
			screen.getByRole( 'radio', {
				name: /サブテキスト\s+あり/,
			} )
		);

		expect( setAttributes ).toHaveBeenCalledWith( {
			hasSubText: true,
		} );
	} );
} );
