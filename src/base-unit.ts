export interface ToStringOptions {
    /**
     * The maximum number of fractional digits to include in the output string.
     * 
     * @example
     * // With fractionalDigits: 2, "1.23456" becomes "1.23"
     * // With fractionalDigits: 4, "1.23456" becomes "1.2346"
     */
    fractionalDigits?: number;

    /**
     * When true, displays digits up to the first non-zero decimal place, even if it 
     * exceeds the specified `fractionalDigits` limit.
     * 
     * This option only has an effect when `fractionalDigits` is also provided.
     * 
     * @example
     * // For number 1.000012:
     * // With fractionalDigits: 2 and extendDigitsToFirstFraction: false → "1.00"
     * // With fractionalDigits: 2 and extendDigitsToFirstFraction: true → "1.00001"
     */
    extendDigitsToFirstFraction?: boolean;
}

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
     * @param options - The options to use when truncating the number.
     * @returns The truncated number.
     */
    protected truncateFractionDigits(num: number, options?: ToStringOptions): number {
        if (typeof options?.fractionalDigits !== "number") {
            return num;
        }
    
        // If we need to extend to first non-zero fraction and fractionalDigits is provided
        if (options.extendDigitsToFirstFraction) {
            // Convert to string to analyze the decimal part
            const numStr = num.toString();
            const decimalIndex = numStr.indexOf('.');
            
            // If we have a decimal part
            if (decimalIndex !== -1) {
                // Find the first non-zero digit after decimal
                let firstNonZeroIndex = -1;
                for (let i = decimalIndex + 1; i < numStr.length; i++) {
                    if (numStr[i] !== '0') {
                        firstNonZeroIndex = i;
                        break;
                    }
                }
                
                // If we found a non-zero digit and it's beyond fractionalDigits
                if (firstNonZeroIndex !== -1) {
                    const digitsAfterDecimal = firstNonZeroIndex - decimalIndex;
                    if (digitsAfterDecimal > options.fractionalDigits) {
                        // Extend precision to include the first non-zero digit
                        return parseFloat(num.toFixed(digitsAfterDecimal));
                    }
                }
            }
        }
        
        // Default behavior - use the specified precision
        const numString = num.toFixed(options.fractionalDigits);
        return parseFloat(numString);
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
