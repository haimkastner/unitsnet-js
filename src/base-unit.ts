export enum ArithmeticOperation {
    /** An plus arithmetic operation (JS default "+") */
    Add = 'Add',
    /** An subtract arithmetic operation (JS default "-") */
    Subtract = 'Subtract',
    /** An multiply arithmetic operation (JS default "/") */
    Multiply = 'Multiply',
    /** An devide arithmetic operation (JS default "*") */
    Divide = 'Divide',
    /** An modulo arithmetic operation (JS default "%") */
    Modulo = 'Modulo',
    /** An power arithmetic operation (JS default "**") */
    Pow = 'Pow',
}

/**
 * An binary arithmetic formula.
 * e.g. (valueA, ValueB) => { valueA + valueB } 
 */
export type ArithmeticFormula = (valueA: number, valueB: number) => number;

/**
 * An binary copmration values formula.
 */
export type CompareToFormula = (valueA: number, valueB: number) => number;

/**
 * An binary equals copmration values formula.
 * e.g. (valueA, ValueB) => { valueA === valueB } 
 */
export type EqualsFormula = (valueA: number, valueB: number) => boolean;

const externalArithmeticFurmulas: { [operation in ArithmeticOperation]?: ArithmeticFormula } = {};
let externalCompareToFurmula: ArithmeticFormula | undefined;
let externalEqualsFurmula: EqualsFormula | undefined;

/**
 * Set arithmetic formula to be used while calling this operation on two units (e.g. Length + Length) 
 * Instead of the JS default operation (+, -, * etc.)
 * @param arithmeticOperation The formula's operation 
 * @param arithmeticFormula The formula to used.
 */
export function setArithmeticFormula(arithmeticOperation: ArithmeticOperation, arithmeticFormula: ArithmeticFormula) {
    externalArithmeticFurmulas[arithmeticOperation] = arithmeticFormula;
}

/**
 * Set formula to be used while checking is equals on two units (e.g. Length === Length) 
 * @param equalsFormula The equals formula to used.
 */
export function setEqualsFormula(equalsFormula: EqualsFormula) {
    externalEqualsFurmula = equalsFormula;
}

/**
 * Set formula to be used while compering two units (e.g. Length > Length) 
 * @param compareToFurmula The compration formula to used.
 */
export function setCompareToFurmula(compareToFurmula: CompareToFormula) {
    externalCompareToFurmula = compareToFurmula;
}

export abstract class BaseUnit {

    /**
     * Truncates a number to a specified number of fractional digits.
     * @param num - The number to truncate.
     * @param fractionalDigits - The number of fractional digits to keep.
     * @returns The truncated number.
     */
    protected truncateFractionDigits(num: number, fractionalDigits?: number): number {
        if (typeof fractionalDigits !== "number") {
            return num;
        }
        // Convert the number to a string with the desired precision
        const numString = num.toFixed(fractionalDigits);

        // Parse the string back to a number
        const truncatedNum = parseFloat(numString);

        return truncatedNum;
    }

    protected internalEquals(valueA: number, valueB: number): boolean {
        return externalEqualsFurmula?.(valueA, valueB) ?? valueA === valueB;
    }

    protected internalCompareTo(valueA: number, valueB: number): number {
        if (externalCompareToFurmula) {
            return externalCompareToFurmula(valueA, valueB);
        }
        if (valueA > valueB)
            return 1;
        if (valueA < valueB)
            return -1;
        return 0;
    }

    protected internalAdd(valueA: number, valueB: number): number {
        return externalArithmeticFurmulas.Add?.(valueA, valueB) ?? (valueA + valueB)
    }

    protected internalSubtract(valueA: number, valueB: number): number {
        return externalArithmeticFurmulas.Subtract?.(valueA, valueB) ?? (valueA - valueB)
    }

    protected internalMultiply(valueA: number, valueB: number): number {
        return externalArithmeticFurmulas.Multiply?.(valueA, valueB) ?? (valueA * valueB)
    }

    protected internalDivide(valueA: number, valueB: number): number {
        return externalArithmeticFurmulas.Divide?.(valueA, valueB) ?? (valueA / valueB)
    }

    protected internalModulo(valueA: number, valueB: number): number {
        return externalArithmeticFurmulas.Modulo?.(valueA, valueB) ?? (valueA % valueB)
    }

    protected internalPow(valueA: number, valueB: number): number {
        return externalArithmeticFurmulas.Pow?.(valueA, valueB) ?? (valueA ** valueB)
    }
}

export interface OperatorOverrides {
	add?: (a: number, b: number) => number;
	sub?: (a: number, b: number) => number;
	div?: (a: number, b: number) => number;
	mod?: (a: number, b: number) => number;
	mul?: (a: number, b: number) => number;
	pow?: (a: number, b: number) => number;
	sqrt?: (a: number) => number;
}