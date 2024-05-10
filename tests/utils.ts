import { setOperatorOverride, ArithmeticOperation } from '../src';
import * as AllUnits from '../src';
import { BaseUnit } from '../src/base-unit';

export function setAllArithmeticOverrides(): void {
	setOperatorOverride(ArithmeticOperation.Add, (a, b) => a + b);
	setOperatorOverride(ArithmeticOperation.Subtract, (a, b) => a - b);
	setOperatorOverride(ArithmeticOperation.Multiply, (a, b) => a * b);
	setOperatorOverride(ArithmeticOperation.Divide, (a, b) => a / b);
	setOperatorOverride(ArithmeticOperation.Modulo, (a, b) => a % b);
	setOperatorOverride(ArithmeticOperation.Pow, (a, b) => a ** b);
	setOperatorOverride(ArithmeticOperation.Sqrt, (a) => Math.sqrt(a));
}

export function getAllUnitClasses(): BaseUnit[] {
	return Object.values(AllUnits).filter((
		(obj) => typeof obj === 'function' && typeof (obj as any).getUnitEnum === 'function'
	)) as unknown[] as BaseUnit[];
}

export function instantiateUnit<TUnitsEnum extends string = string>(unitClass: BaseUnit, value: number, fromUnit?: TUnitsEnum): BaseUnit {
	return new (unitClass as any)(value, fromUnit);
}

export function getRandomInt(min: number, max: number): number {
	const ceilMin = Math.ceil(min);
	return Math.floor(Math.random() * (Math.floor(max) - ceilMin + 1)) + ceilMin;
}

export function forEachUnit<T = any>(lambda: (unit: BaseUnit, unitsEnum: { [Key: string]: string }) => T): T[] {
	const unitClasses = getAllUnitClasses();

	const results: T[] = [];

	for (const unitClass of unitClasses) {
		const unitsEnum = (unitClass as any).getUnitEnum() as { [Key: string]: string };
		results.push(lambda(unitClass, unitsEnum));
	}

	return results;
}