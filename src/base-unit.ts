export enum AritmaticOperation {
    /** An plus artimatic operation (JS default "+") */
    Add = 'Add',
    /** An subtract artimatic operation (JS default "-") */
    Subtract = 'Subtract',
    /** An multiply artimatic operation (JS default "/") */
    Multiply = 'Multiply',
    /** An devide artimatic operation (JS default "*") */
    Divide = 'Divide',
    /** An modulo artimatic operation (JS default "%") */
    Modulo = 'Modulo',
    /** An power artimatic operation (JS default "**") */
    Pow = 'Pow',
}

/**
 * An binary artimatic formula.
 * e.g. (valueA, ValueB) => { valueA + valueB } 
 */
export type AritmaticFormula = (valueA: number, valueB: number) => number;

/**
 * An binary copmration values formula.
 */
export type CompareToFormula = (valueA: number, valueB: number) => number;

/**
 * An binary equals copmration values formula.
 * e.g. (valueA, ValueB) => { valueA === valueB } 
 */
export type EqualsFormula = (valueA: number, valueB: number) => boolean;

const externalAritmaticFurmulas: { [operation in AritmaticOperation]?: AritmaticFormula } = {};
let externalCompareToFurmula: AritmaticFormula | undefined;
let externalEqualsFurmula: EqualsFormula | undefined;

/**
 * Set aritmatic formula to be used while calling this operation on two units (e.g. Length + Length) 
 * Instead of the JS default operation (+, -, * etc.)
 * @param aritmaticOperation The formula's operation 
 * @param aritmaticFormula The formula to used.
 */
export function setArtimeticFormula(aritmaticOperation: AritmaticOperation, aritmaticFormula: AritmaticFormula) {
    externalAritmaticFurmulas[aritmaticOperation] = aritmaticFormula;
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
        return externalAritmaticFurmulas.Add?.(valueA, valueB) ?? (valueA + valueB)
    }

    protected internalSubtract(valueA: number, valueB: number): number {
        return externalAritmaticFurmulas.Subtract?.(valueA, valueB) ?? (valueA - valueB)
    }

    protected internalMultiply(valueA: number, valueB: number): number {
        return externalAritmaticFurmulas.Multiply?.(valueA, valueB) ?? (valueA * valueB)
    }

    protected internalDivide(valueA: number, valueB: number): number {
        return externalAritmaticFurmulas.Divide?.(valueA, valueB) ?? (valueA / valueB)
    }

    protected internalModulo(valueA: number, valueB: number): number {
        return externalAritmaticFurmulas.Modulo?.(valueA, valueB) ?? (valueA % valueB)
    }

    protected internalPow(valueA: number, valueB: number): number {
        return externalAritmaticFurmulas.Pow?.(valueA, valueB) ?? (valueA ** valueB)
    }
}