import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';

import { ResponsiveTextAlignControl } from '../index';

describe( 'ResponsiveTextAlignControl', () => {
	it( '3端末を縦に表示して選択した端末だけを更新する', () => {
		const onChange = jest.fn();
		render(
			<ResponsiveTextAlignControl
				label="文字揃え"
				value={ { desktop: 'left' } }
				onChange={ onChange }
			/>
		);

		expect(
			screen.getByRole( 'group', { name: 'デスクトップ' } )
		).not.toBeNull();
		const tablet = screen.getByRole( 'group', { name: 'タブレット' } );
		expect(
			screen.getByRole( 'group', { name: 'モバイル' } )
		).not.toBeNull();

		fireEvent.click( within( tablet ).getByTitle( '中央揃え' ) );

		expect( onChange ).toHaveBeenCalledWith( {
			desktop: 'left',
			tablet: 'center',
		} );
	} );
} );
