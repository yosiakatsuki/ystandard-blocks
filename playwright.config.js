import { defineConfig } from '@playwright/test';

// @ts-ignore
const baseConfig = require( '@wordpress/scripts/config/playwright.config.js' );

const config = defineConfig( {
	...baseConfig,
	testDir: './tests/e2e',
	webServer: {
		...baseConfig.webServer,
		port: 10010,
	},
} );

export default config;
