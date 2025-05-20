export type BorderRadiusValue = {
	borderRadius?: string;
	topLeft?: string;
	topRight?: string;
	bottomLeft?: string;
	bottomRight?: string;
};

export interface BorderRadiusControlProps {
	onChange: ( value: BorderRadiusValue | string | undefined ) => void;
	values?: BorderRadiusValue | string;
}
