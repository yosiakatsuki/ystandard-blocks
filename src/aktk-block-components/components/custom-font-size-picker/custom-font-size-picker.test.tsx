import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomFontSizePicker, {
	WPFontSizePicker,
	CustomSizeInputPanel,
} from './index';
import useThemeFontSizes from '@aktk/block-components/hooks/useThemeFontSizes';

jest.mock( '@aktk/block-components/hooks/useThemeFontSizes', () => jest.fn() );

jest.mock( '@aktk/block-components/components/icon-control', () => ( {
	IconUnitControl: {
		// @ts-ignore
		Desktop: ( { value, onChange } ) => (
			<input
				aria-label={ 'desktop' }
				type={ 'text' }
				value={ value }
				onChange={ ( e ) => onChange( e.target.value ) }
			/>
		),
		// @ts-ignore
		Tablet: ( { value, onChange } ) => (
			<input
				aria-label={ 'tablet' }
				type={ 'text' }
				value={ value }
				onChange={ ( e ) => onChange( e.target.value ) }
			/>
		),
		// @ts-ignore
		Mobile: ( { value, onChange } ) => (
			<input
				aria-label={ 'mobile' }
				type={ 'text' }
				value={ value }
				onChange={ ( e ) => onChange( e.target.value ) }
			/>
		),
	},
} ) );

const mockFontSizes = [
	{ name: 'Small', slug: 'small', size: 12 },
	{ name: 'Medium', slug: 'medium', size: 16 },
	{ name: 'Large', slug: 'large', size: 20 },
];

// @ts-ignore
useThemeFontSizes.mockReturnValue( mockFontSizes );

describe( 'CustomFontSizePicker', () => {
	test( 'デフォルトのプロパティでレンダリングされる', () => {
		const onChange = jest.fn();
		render(
			<CustomFontSizePicker fontSize={ {} } onChange={ onChange } />
		);

		expect( screen.getByText( '標準' ) ).toBeInTheDocument();
		expect( screen.getByText( 'デバイス別' ) ).toBeInTheDocument();
	} );

	test( 'FontSizePicker が正しくレンダリングされ、変更が処理される', () => {
		const onChange = jest.fn();
		render(
			<CustomFontSizePicker fontSize={ {} } onChange={ onChange } />
		);

		fireEvent.click( screen.getByText( '標準' ) );
		fireEvent.change( screen.getByRole( 'combobox' ), {
			target: { value: 16 },
		} );

		expect( onChange ).toHaveBeenCalledWith( {
			fontSize: { size: 16, slug: 'medium', className: 'medium' },
			desktop: '16px',
		} );
	} );

	test( 'CustomSizeInputPanel が正しくレンダリングされ、変更が処理される', () => {
		const onChange = jest.fn();
		render(
			<CustomFontSizePicker fontSize={ {} } onChange={ onChange } />
		);

		fireEvent.click( screen.getByText( 'デバイス別' ) );
		fireEvent.change( screen.getByRole( 'textbox', { name: 'desktop' } ), {
			target: { value: '2em' },
		} );

		expect( onChange ).toHaveBeenCalledWith( {
			desktop: '2em',
			fontSize: { size: '2em' },
		} );
	} );

	test( 'デスクトップ入力済み、タブレットの入力がある場合', async () => {
		let fontSize = { desktop: '5px', fontSize: { size: '5px' } };
		const onChange = jest.fn( ( newValue ) => {
			fontSize = newValue;
		} );
		render(
			<CustomFontSizePicker fontSize={ fontSize } onChange={ onChange } />
		);

		fireEvent.click( screen.getByText( 'デバイス別' ) );
		fireEvent.change( screen.getByRole( 'textbox', { name: /tablet/i } ), {
			target: { value: '6em' },
		} );

		expect( fontSize ).toEqual( {
			desktop: '5px',
			fontSize: { size: '5px' },
			tablet: '6em',
		} );
	} );
	test( 'デスクトップ入力済み、モバイルの入力がある場合', async () => {
		let fontSize = { desktop: '5px', fontSize: { size: '5px' } };
		const onChange = jest.fn( ( newValue ) => {
			fontSize = newValue;
		} );
		render(
			<CustomFontSizePicker fontSize={ fontSize } onChange={ onChange } />
		);

		fireEvent.click( screen.getByText( 'デバイス別' ) );
		fireEvent.change( screen.getByRole( 'textbox', { name: /mobile/i } ), {
			target: { value: '7em' },
		} );

		expect( fontSize ).toEqual( {
			desktop: '5px',
			fontSize: { size: '5px' },
			mobile: '7em',
		} );
	} );
	test( 'タブレット入力済み、デスクトップの入力がある場合', async () => {
		let fontSize = { tablet: '5px' };
		const onChange = jest.fn( ( newValue ) => {
			fontSize = newValue;
		} );
		render(
			<CustomFontSizePicker fontSize={ fontSize } onChange={ onChange } />
		);

		fireEvent.click( screen.getByText( 'デバイス別' ) );
		fireEvent.change( screen.getByRole( 'textbox', { name: /desktop/i } ), {
			target: { value: '8em' },
		} );

		expect( fontSize ).toEqual( {
			desktop: '8em',
			fontSize: { size: '8em' },
			tablet: '5px',
		} );
	} );
	test( 'タブレット入力済み、モバイルの入力がある場合', async () => {
		let fontSize = { tablet: '5px' };
		const onChange = jest.fn( ( newValue ) => {
			fontSize = newValue;
		} );
		render(
			<CustomFontSizePicker fontSize={ fontSize } onChange={ onChange } />
		);

		fireEvent.click( screen.getByText( 'デバイス別' ) );
		fireEvent.change( screen.getByRole( 'textbox', { name: /mobile/i } ), {
			target: { value: '9em' },
		} );

		expect( fontSize ).toEqual( {
			tablet: '5px',
			mobile: '9em',
		} );
	} );
	test( 'モバイル入力済み、デスクトップの入力がある場合', async () => {
		let fontSize = { mobile: '5px' };
		const onChange = jest.fn( ( newValue ) => {
			fontSize = newValue;
		} );
		render(
			<CustomFontSizePicker fontSize={ fontSize } onChange={ onChange } />
		);

		fireEvent.click( screen.getByText( 'デバイス別' ) );
		fireEvent.change( screen.getByRole( 'textbox', { name: /desktop/i } ), {
			target: { value: '10em' },
		} );

		expect( fontSize ).toEqual( {
			desktop: '10em',
			fontSize: { size: '10em' },
			mobile: '5px',
		} );
	} );
	test( 'モバイル入力済み、タブレットの入力がある場合', async () => {
		let fontSize = { mobile: '5px' };
		const onChange = jest.fn( ( newValue ) => {
			fontSize = newValue;
		} );
		render(
			<CustomFontSizePicker fontSize={ fontSize } onChange={ onChange } />
		);

		fireEvent.click( screen.getByText( 'デバイス別' ) );
		fireEvent.change( screen.getByRole( 'textbox', { name: /tablet/i } ), {
			target: { value: '11em' },
		} );

		expect( fontSize ).toEqual( {
			tablet: '11em',
			mobile: '5px',
		} );
	} );
} );

describe( 'WPFontSizePicker', () => {
	test( 'クラッシュせずにレンダリングされる', () => {
		const { container } = render(
			<WPFontSizePicker
				onChange={ () => {} }
				value={ 16 }
				fontSizes={ mockFontSizes }
			/>
		);
		expect( container ).toBeInTheDocument();
	} );
} );

describe( 'CustomSizeInputPanel', () => {
	test( 'デスクトップサイズの変更が正しく処理される', () => {
		const onChange = jest.fn();
		render(
			<CustomSizeInputPanel fontSize={ {} } onChange={ onChange } />
		);

		fireEvent.change( screen.getByRole( 'textbox', { name: /desktop/i } ), {
			target: { value: '2em' },
		} );
		expect( onChange ).toHaveBeenCalledWith( {
			desktop: '2em',
		} );
	} );
	test( 'タブレットの入力がある場合', () => {
		const onChange = jest.fn();
		render(
			<CustomSizeInputPanel fontSize={ {} } onChange={ onChange } />
		);

		fireEvent.change( screen.getByRole( 'textbox', { name: /tablet/i } ), {
			target: { value: '3rem' },
		} );

		expect( onChange ).toHaveBeenCalledWith( {
			tablet: '3rem',
		} );
	} );
	test( 'モバイルの入力がある場合', () => {
		const onChange = jest.fn();
		render(
			<CustomSizeInputPanel fontSize={ {} } onChange={ onChange } />
		);

		fireEvent.change( screen.getByRole( 'textbox', { name: /mobile/i } ), {
			target: { value: '16px' },
		} );

		expect( onChange ).toHaveBeenCalledWith( {
			mobile: '16px',
		} );
	} );
} );
