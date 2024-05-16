export enum ArithmeticOperation {
    /** An plus arithmetic operation (JS default "+") */
    Add = 'Add',
    /** An subtract arithmetic operation (JS default "-") */
    Subtract = 'Subtract',
    /** An multiply arithmetic operation (JS default "/") */
    Multiply = 'Multiply',
    /** An divide arithmetic operation (JS default "*") */
    Divide = 'Divide',
    /** An modulo arithmetic operation (JS default "%") */
    Modulo = 'Modulo',
    /** An power arithmetic operation (JS default "**") */
    Pow = 'Pow',
    /** A Square root operation (JS Default "Math.sqrt") */
    Sqrt = 'Sqrt'
}

export enum CompareOperation {
    Equals = 'Equals',
    CompareTo = 'CompareTo'
}

export interface OperatorOverrides {
    [ArithmeticOperation.Add]?: (a: number, b: number) => number;
    [ArithmeticOperation.Subtract]?: (a: number, b: number) => number;
    [ArithmeticOperation.Multiply]?: (a: number, b: number) => number;
    [ArithmeticOperation.Divide]?: (a: number, b: number) => number;
    [ArithmeticOperation.Modulo]?: (a: number, b: number) => number;
    [ArithmeticOperation.Pow]?: (a: number, b: number) => number;
    [ArithmeticOperation.Sqrt]?: (a: number) => number;
    [CompareOperation.Equals]?: (valueA: number, valueB: number) => boolean;
    [CompareOperation.CompareTo]?: (valueA: number, valueB: number) => number;
}

let operatorOverrides: OperatorOverrides = {};

let numberOfOverwrittenOperators: number = 0;

/**
 * Set arithmetic formula to be used while calling this operation on two units (e.g. Length + Length) 
 * Instead of the JS default operation (+, -, * etc.)
 * @param arithmeticOperation The formula's operation 
 * @param replacementFunction The formula to used.
 */
/**
 * Sets an arithmetic operator to use the given function.
 * @description Certain use-cases require the use of high precision mathematics beyond what's defined in the ECMA specification.
 * This function allows overriding of operators to to facilitate usage of specialized mathematic libraries.
 * @example
 * ```
 * import NP from 'number-precision'
 * 
 * setOperatorOverride(ArithmeticOperation.Add, (a, b) => NP.plus(a, b))
 * ```
 *
 * @export
 * @template TOperator
 * @param {TOperator} arithmeticOperation
 * @param {(OperatorOverrides[TOperator] | undefined)} replacementFunction
 */
export function setOperatorOverride<TOperator extends ArithmeticOperation | CompareOperation>(
    arithmeticOperation: TOperator,
    replacementFunction: OperatorOverrides[TOperator] | undefined
) {
    operatorOverrides[arithmeticOperation] = replacementFunction;
    numberOfOverwrittenOperators = Object.values(operatorOverrides).filter((value) => !!value).length;
}

/**
 * Removes the given operator override (i.e., returns operator behavior to default JavaScript implementation)
 *
 * @export
 * @template TOperator The operator to unset
 * @param {TOperator} arithmeticOperation The operator to unset
 */
export function unsetOperatorOverride<TOperator extends ArithmeticOperation | CompareOperation>(
    arithmeticOperation: TOperator
): void {
    if (operatorOverrides[arithmeticOperation]) {
        numberOfOverwrittenOperators--;
        operatorOverrides[arithmeticOperation] = undefined;
    }
}

/**
 * Removes all operator overrides (i.e., return all operator behaviors to default JavaScript implementation)
 *
 * @export
 */
export function unsetAllOperatorOverrides(): void {
    operatorOverrides = {};
    numberOfOverwrittenOperators = 0;
}

/**
 * Gets a boolean indicating whether any operators are currently overridden
 *
 * @export
 * @return {boolean}
 */
export function areAnyOperatorsOverridden(): boolean {
    return numberOfOverwrittenOperators > 0;
}

export abstract class BaseUnit {
    protected abstract value: number;

    public abstract get BaseValue(): number;

    protected abstract get baseUnit(): string;

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

    public abstract convert(toUnit: string): number;

    public abstract toString(unit?: string, fractionalDigits?: number): string;

    public abstract getUnitAbbreviation(unitAbbreviation?: string): string;

    public abstract equals(other: BaseUnit): boolean;

    public abstract compareTo(other: BaseUnit): number;

    public abstract add(other: BaseUnit): BaseUnit;

    public abstract subtract(other: BaseUnit): BaseUnit;

    public abstract multiply(other: BaseUnit): BaseUnit;

    public abstract divide(other: BaseUnit): BaseUnit;

    public abstract modulo(other: BaseUnit): BaseUnit;

    public abstract pow(other: BaseUnit): BaseUnit;

    public abstract toDto(holdInUnit?: string): { value: number, unit: string };

    protected internalEquals(valueA: number, valueB: number): boolean {
        return operatorOverrides.Equals?.(valueA, valueB) ?? valueA === valueB;
    }

    protected internalCompareTo(valueA: number, valueB: number): number {
        if (operatorOverrides.CompareTo) {
            return operatorOverrides.CompareTo(valueA, valueB);
        }

        if (valueA > valueB)
            return 1;
        if (valueA < valueB)
            return -1;
        return 0;
    }

    protected internalAdd(valueA: number, valueB: number): number {
        return operatorOverrides.Add?.(valueA, valueB) ?? (valueA + valueB)
    }

    protected internalSubtract(valueA: number, valueB: number): number {
        return operatorOverrides.Subtract?.(valueA, valueB) ?? (valueA - valueB)
    }

    protected internalMultiply(valueA: number, valueB: number): number {
        return operatorOverrides.Multiply?.(valueA, valueB) ?? (valueA * valueB)
    }

    protected internalDivide(valueA: number, valueB: number): number {
        return operatorOverrides.Divide?.(valueA, valueB) ?? (valueA / valueB)
    }

    protected internalModulo(valueA: number, valueB: number): number {
        return operatorOverrides.Modulo?.(valueA, valueB) ?? (valueA % valueB)
    }

    protected internalPow(valueA: number, valueB: number): number {
        return operatorOverrides.Pow?.(valueA, valueB) ?? (valueA ** valueB)
    }

    protected internalSqrt(value: number): number {
        return operatorOverrides.Sqrt?.(value) ?? Math.sqrt(value);
    }
}
