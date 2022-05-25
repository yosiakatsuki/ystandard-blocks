import { __deprecated } from './__deprecated';
import { deprecated24 } from './deprecated_2-4';
import { deprecated25 } from './deprecated_2-5';
import { deprecated293 } from './deprecated_2-9-3';
import { deprecated294 } from './deprecated_2-9-4';
import { deprecated31 } from './deprecated_3-1';
import { deprecated_wp60 } from './deprecated_wp_6_0';

export const deprecated = [
	...deprecated_wp60,
	...deprecated31,
	...deprecated294,
	...deprecated293,
	...deprecated25,
	...deprecated24,
	...__deprecated,
];
