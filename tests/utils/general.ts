import { setOperatorOverride, ArithmeticOperation } from '../../src';
import { BaseUnit } from '../../src/base-unit';

import fs from 'fs';
import path from 'path';
import ts from 'typescript';

import * as AllUnits from '../../src';
import { inspect } from 'util';
import { BaseUnitClass } from './common';
import { invokeStaticMethod, BaseUnitStaticMethodNames } from './invocations/static-method-invocation';

let unitCache: BaseUnitClass[] = [];

export function setAllArithmeticOverrides(): void {
	setOperatorOverride(ArithmeticOperation.Add, (a, b) => a + b);
	setOperatorOverride(ArithmeticOperation.Subtract, (a, b) => a - b);
	setOperatorOverride(ArithmeticOperation.Multiply, (a, b) => a * b);
	setOperatorOverride(ArithmeticOperation.Divide, (a, b) => a / b);
	setOperatorOverride(ArithmeticOperation.Modulo, (a, b) => a % b);
	setOperatorOverride(ArithmeticOperation.Pow, (a, b) => a ** b);
	setOperatorOverride(ArithmeticOperation.Sqrt, (a) => Math.sqrt(a));
}

export function getAllUnitClasses(): BaseUnitClass[] {
	if (unitCache.length > 0) {
		return unitCache;
	}

	const units: BaseUnitClass[] = Object.values(AllUnits).filter((
		(obj) => typeof obj === 'function' && typeof (obj as any).getUnitEnum === 'function'
	)) as unknown[] as BaseUnitClass[];

	unitCache = units;

	return Object.assign([], units);
}

export function instantiateUnit<TUnitsEnum extends string = string>(
	unitClass: BaseUnitClass,
	value: number,
	fromUnit?: TUnitsEnum
): BaseUnit {
	return new (unitClass as any)(value, fromUnit);
}

export function getRandomInt(min: number, max: number): number {
	const ceilMin = Math.ceil(min);
	return Math.floor(Math.random() * (Math.floor(max) - ceilMin + 1)) + ceilMin;
}

export function forEachUnit<T = any>(lambda: (unit: BaseUnitClass, unitsEnum: { [Key: string]: string }) => T): T[] {
	const unitClasses = getAllUnitClasses();

	const results: T[] = [];

	for (const unitClass of unitClasses) {
		const unitsEnum = invokeStaticMethod(unitClass, BaseUnitStaticMethodNames.GetUnitEnum, undefined);
		results.push(lambda(unitClass, unitsEnum));
	}

	return results;
}

function findClassInFile(entry: ts.Node, className: string): ts.ClassDeclaration | undefined {
	function recurseFindClass(node: ts.Node): ts.ClassDeclaration | undefined {
		if (!node) {
			throw new Error('No node was provided to findClassInFile');
		}

		if (ts.isClassDeclaration(node) && node.name?.text === className) {
			return node;
		}

	}

	return ts.forEachChild(entry, recurseFindClass);
}

export function getStaticMethodsOfUnitClass(classToEnumerate: BaseUnitClass): ts.MethodDeclaration[] {
	const className: string = (classToEnumerate as any).name;

	const modulePath = path.join(__dirname, '..', '..', 'src', 'gen-units', `${className.toLowerCase()}.g.ts`);
	const sourceCode = fs.readFileSync(modulePath, 'utf-8');
	const sourceFile = ts.createSourceFile('dummy.ts', sourceCode, ts.ScriptTarget.Latest);

	const classDeclaration = findClassInFile(sourceFile, className);
	if (!classDeclaration) {
		throw new Error(`Could not find declaration for class ${className}`);
	}


	const methods: ts.MethodDeclaration[] = [];
	for (const member of classDeclaration.members) {
		if (ts.isMethodDeclaration(member) && ts.getCombinedModifierFlags(member) & ts.ModifierFlags.Static) {
			methods.push(member);
		}
	}

	return methods;
}

function getMethodName(method: ts.MethodDeclaration): string {
	const nameNode = method.name;

	if (ts.isIdentifier(nameNode) || ts.isStringLiteralLike(nameNode)) {
		return nameNode.text;
	}

	throw new Error(`Could not get method name from declaration ${inspect(method)}`);
}

export function getStaticFactoryMethodsOfUnitClass(classToEnumerate: BaseUnitClass): ts.MethodDeclaration[] {
	const methods = getStaticMethodsOfUnitClass(classToEnumerate);
	const ignoredMethods = new Set(['getUnitEnum', 'FromDto']);

	return methods.filter((method) => {
		const methodName = getMethodName(method);
		if (!methodName) {
			throw new Error("Could not get a method's name. This implies either the method is anonyms or there's a bug in the code");
		}

		return methodName.startsWith('From') && !ignoredMethods.has(methodName);
	});
}

export function getStaticFactoryMethodNamesOfUnitClass(classToEnumerate: BaseUnitClass): string[] {
	const declarations = getStaticFactoryMethodsOfUnitClass(classToEnumerate);
	return declarations.map(getMethodName);
}

export function getUnitEnumValueTypeFromFactoryMethodName(
	unitsEnum: { [Key: string]: string },
	methodName: string): string {

	const [_, enumKey] = methodName.split('From');
	const enumValue = unitsEnum[enumKey];
	if (enumValue === undefined || enumValue === null) {
		throw new Error(`Could not get an enum value from method name '${methodName}'`);
	}

	return enumValue;
}
