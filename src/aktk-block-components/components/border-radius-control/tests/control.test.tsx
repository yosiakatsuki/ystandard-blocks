import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BorderRadiusControl } from '../control';

describe( 'BorderRadiusControl', () => {
	it( 'handleOnChange: undefined を渡すと onChange(undefined) が呼ばれる', () => {
		const handleChange = jest.fn();
		const { getByText } = render(
			<BorderRadiusControl
				values={ undefined }
				onChange={ handleChange }
			/>
		);
		// モックのボタンをクリックして undefined を渡す
		fireEvent.click( getByText( 'change' ) );
		expect( handleChange ).toHaveBeenCalledWith( undefined );
	} );

	it( 'handleOnChange: string を渡すと { borderRadius: value } で onChange が呼ばれる', () => {
		const handleChange = jest.fn();
		const { getByText } = render(
			<BorderRadiusControl values={ '10px' } onChange={ handleChange } />
		);
		// モックのボタンをクリックして '10px' を渡す
		fireEvent.click( getByText( 'change' ) );
		expect( handleChange ).toHaveBeenCalledWith( { borderRadius: '10px' } );
	} );

	it( 'values で渡した値が onChange の引数にそのまま渡る', () => {
		const handleChange = jest.fn();
		const testValue = {
			topLeft: '8px',
			topRight: '12px',
			bottomLeft: '4px',
			bottomRight: '16px',
		};
		const { getByText } = render(
			<BorderRadiusControl
				values={ testValue }
				onChange={ handleChange }
			/>
		);
		// モックのボタンをクリック（valuesの値がonChangeに渡る想定）
		fireEvent.click( getByText( 'change' ) );
		expect( handleChange ).toHaveBeenCalledWith( testValue );
	} );
} );
