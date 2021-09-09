import { ystdbConfig } from '@ystdb/config/config';

export const getConfig = (name) => {
	return ystdbConfig[name];
};

export const getComponentConfig = (name) => {
	return ystdbConfig.component[name];
};
