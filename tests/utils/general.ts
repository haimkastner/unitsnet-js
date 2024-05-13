import { setOperatorOverride, ArithmeticOperation } from '../../src';
import { BaseUnit } from '../../src/base-unit';
import { inspect } from 'util';
import { BaseUnitClass } from './common';
import { invokeStaticMethod, BaseUnitStaticMethodNames } from './invocations/static-method-invocation';

import fs from 'fs';
import path from 'path';
import ts from 'typescript';

import * as AllUnits from '../../src';

/**
 * A minimal cache to hold the enumerated unit classes list
 */
let unitCache: BaseUnitClass[] = [];

/**
 * Sets all the arithmetic overrides to functions that use the correct operator for each type.
 * Used to test equity between overridden/non-overridden operators when the actual override logic is the default JS one
 *
 * @export
 */
export function setAllArithmeticOverrides(): void {
	setOperatorOverride(ArithmeticOperation.Add, (a, b) => a + b);
	setOperatorOverride(ArithmeticOperation.Subtract, (a, b) => a - b);
	setOperatorOverride(ArithmeticOperation.Multiply, (a, b) => a * b);
	setOperatorOverride(ArithmeticOperation.Divide, (a, b) => a / b);
	setOperatorOverride(ArithmeticOperation.Modulo, (a, b) => a % b);
	setOperatorOverride(ArithmeticOperation.Pow, (a, b) => a ** b);
	setOperatorOverride(ArithmeticOperation.Sqrt, (a) => Math.sqrt(a));
}

/**
 * Gets all BaseUnit-derived generated classes
 *
 * @export
 * @return {*} {BaseUnitClass[]}
 */
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

/**
 * Instantiates a unit from the given BaseUnit derived class
 *
 * @export
 * @template TUnitsEnum The unit enum value (e.g. `RadiationEquivalentDoseUnits.Sieverts`)
 * @param {BaseUnitClass} unitClass The BaseUnit-derived class to instantiate
 * @param {number} value The value to instantiate with
 * @param {TUnitsEnum} [fromUnit] The unit enum value (e.g. `RadiationEquivalentDoseUnits.Sieverts`)
 * @return {*} {BaseUnit} The instantiated unit
 */
export function instantiateUnit<TUnitsEnum extends string = string>(
	unitClass: BaseUnitClass,
	value: number,
	fromUnit?: TUnitsEnum
): BaseUnit {
	return new (unitClass as any)(value, fromUnit);
}

/**
 * Gets a random integer between the given minimum and maximum
 *
 * @export
 * @param {number} min The minimum value (inclusive)
 * @param {number} max The maximum value (exclusive)
 * @return {number}
 */
export function getRandomInt(min: number, max: number): number {
	const ceilMin = Math.ceil(min);
	return Math.floor(Math.random() * (Math.floor(max) - ceilMin + 1)) + ceilMin;
}

/**
 * Iterates over all generated units and executes a lambda, returning the results
 *
 * @export
 * @template T The type of result
 * @param {(unit: BaseUnitClass, unitsEnum: { [Key: string]: string }) => T} lambda
 * @return {*}  {T[]}
 */
export function forEachUnit<T = any>(lambda: (unit: BaseUnitClass, unitsEnum: { [Key: string]: string }) => T): T[] {
	const unitClasses = getAllUnitClasses();

	const results: T[] = [];

	for (const unitClass of unitClasses) {
		const unitsEnum = invokeStaticMethod(unitClass, BaseUnitStaticMethodNames.GetUnitEnum, undefined);
		results.push(lambda(unitClass, unitsEnum));
	}

	return results;
}

/**
 * Find a class by name in a given TS AST
 *
 * @param {ts.Node} entry The AST head, usually a Source File
 * @param {string} className The class to find
 * @return {*} {(ts.ClassDeclaration | undefined)} The class declaration, if one was found, otherwise undefined
 */
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

/**
 * Gets a list of static methods from the given BaseUnit-derived class
 *
 * @export
 * @param {BaseUnitClass} classToEnumerate The class to get the static methods of
 * @return {ts.MethodDeclaration[]}
 */
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

/**
 * Gets a method name from its declaration
 * 
 * @throws An error if a method's name could not be extracted
 *
 * @param {ts.MethodDeclaration} method The method to get the name of
 * @return {*} {string} The method's name
 */
function getMethodName(method: ts.MethodDeclaration): string {
	const nameNode = method.name;

	if (ts.isIdentifier(nameNode) || ts.isStringLiteralLike(nameNode)) {
		return nameNode.text;
	}

	throw new Error(`Could not get method name from declaration ${inspect(method)}`);
}

/**
 * Gets a class's static factory methods (e.g. FromSieverts)
 *
 * @export
 * @param {BaseUnitClass} classToEnumerate The class to get the factory methods of
 * @return {ts.MethodDeclaration[]} A list of the class's factory methods
 */
export function getStaticFactoryMethodsOfUnitClass(classToEnumerate: BaseUnitClass): ts.MethodDeclaration[] {
	const methods = getStaticMethodsOfUnitClass(classToEnumerate);
	const ignoredMethods = new Set(['getUnitEnum', 'FromDto']);

	return methods.filter((method) => {
		const methodName = getMethodName(method);
		if (!methodName) {
			throw new Error("Could not get a method's name. This implies either the method is anonymous or there's a bug in the code");
		}

		return methodName.startsWith('From') && !ignoredMethods.has(methodName);
	});
}

/**
 * Gets a list of factory method names from a given class
 *
 * @export
 * @param {BaseUnitClass} classToEnumerate
 * @return {string[]}
 */
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
