import { __deprecated } from './__deprecated';
import { deprecated2101 } from './2-10-1';
import { deprecated_wp6_0 } from './wp-6_0';

export const deprecated = [
	...deprecated_wp6_0,
	...deprecated2101,
	...__deprecated,
];
