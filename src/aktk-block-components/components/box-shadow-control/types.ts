export interface BoxShadowValue {
	offsetX?: string; // X方向のオフセット（例: "0", "2px", "-4px"）
	offsetY?: string; // Y方向のオフセット（例: "2px", "4px", "8px"）
	blurRadius?: string; // ぼかし半径（例: "8px", "16px", "24px"）
	color?: string; // 影の色（例: "#bdc3c7", "#000000"）
	opacity?: number; // 不透明度（0-1の範囲、例: 0.7, 0.5, 1.0）
}

export interface BoxShadowControlProps {
	value?: BoxShadowValue;
	onChange: ( value?: BoxShadowValue ) => void;
	label?: string;
}

export interface BoxShadowPreset {
	label: string;
	value: BoxShadowValue;
}