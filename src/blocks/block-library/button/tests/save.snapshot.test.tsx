import React from 'react';
import { render } from '@testing-library/react';
import Save from '../save';

// スナップショットテスト
describe( 'Button Block <Save /> snapshot', () => {
	it( 'matches snapshot with minimal attributes', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'Button',
					url: 'https://example.com',
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( 'matches snapshot with icons and all attributes', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'Button',
					url: 'https://example.com',
					iconLeft: 'left',
					iconRight: 'right',
					iconLeftBlank: true,
					iconRightBlank: true,
					iconSizeLeft: 16,
					iconSizeRight: 20,
					fontSize: 'large',
					customFontSize: 24,
					gradient: 'gradient',
					linkTarget: '_blank',
					rel: 'noopener',
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( 'matches snapshot with borderRadius 0', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'Button',
					url: 'https://example.com',
					borderRadius: '0px',
				} }
			/>
		);
		// スナップショットでHTML全体を確認
		expect( asFragment() ).toMatchSnapshot();
	} );
} );
