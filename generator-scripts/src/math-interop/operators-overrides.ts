export interface OperatorOverrides {
	add?: (a: number, b: number) => number;
	sub?: (a: number, b: number) => number;
	div?: (a: number, b: number) => number;
	mod?: (a: number, b: number) => number;
	mul?: (a: number, b: number) => number;
	pow?: (a: number, b: number) => number;
	sqrt?: (a: number) => number;
}
