import { expect } from 'chai';
import { describe } from 'mocha';
import numeral from 'numeral';
import {
    Angle,
    AngleUnits,
    ArithmeticOperation,
    Length,
    LengthDto,
    LengthUnits,
    setOperatorOverride,
    unsetAllOperatorOverrides,
    unsetOperatorOverride
} from '../src';

import { BaseUnit, CompareOperation, } from '../src/base-unit';
import {
    forEachUnit,
    getRandomInt,
    getStaticFactoryMethodNamesOfUnitClass,
    getUnitEnumValueTypeFromFactoryMethodName,
    instantiateUnit,
    setAllArithmeticOverrides
} from './utils/general';
import { queryNonPublicGetter, BaseUnitNonPublicGetterNames } from './utils/invocations/getter-invocation';
import { invokeStaticMethod, BaseUnitStaticMethodNames } from './utils/invocations/static-method-invocation';
import { BaseUnitNonPublicMethodNames, invokeNonPublicMethod } from './utils/invocations/instance-method-invocation';
import { isEmptyAbbreviationValidInContext } from './utils/unit-abbreviation-exclusions';

describe('Unitsnet - tests', () => {
    beforeEach(() => {
        // Reset overrides between each test
        unsetAllOperatorOverrides();
    });

    describe('# Creations', () => {

        it(`Should be the same creating by ctor or by 'FromXXX'`, () => {
            const angleCtorDriven = new Angle(180, AngleUnits.Degrees);
            const angleFromDriven = Angle.FromDegrees(180);
            expect(angleCtorDriven.BaseValue).equal(angleFromDriven.BaseValue);
        });

        it("Should throw when providing 'undefined' to constructor", () => {
            forEachUnit((unit) => {
                expect(() => instantiateUnit(unit, (undefined as any))).to.throw(TypeError);
            });
        });

        it("Should throw when providing 'null' to constructor", () => {
            forEachUnit((unit) => {
                expect(() => instantiateUnit(unit, (null as any))).to.throw(TypeError);
            });
        });

        it("Should throw when providing 'NaN' to constructor", () => {
            forEachUnit((unit) => {
                expect(() => instantiateUnit(unit, (Number.NaN as any))).to.throw(TypeError);
            });
        });
    });

    describe('# Converters', () => {

        it(`Should convert from base value to any other unit`, () => {
            const angle = Angle.FromDegrees(180);
            expect(angle.Radians).equal(3.141592653589793);
        });

        it(`Should convert from base value to any other base-value prefix`, () => {
            const angle = Angle.FromDegrees(180);
            expect(angle.Microdegrees).equal(180000000);
        });

        it(`Should convert from base value to any other unit prefix`, () => {
            const angle = Angle.FromDegrees(180);
            expect(angle.Microradians).equal(3141592.6535897935);
        });

        it(`Should convert from any other unit to the base value`, () => {
            const angle = Angle.FromRadians(3.141592653589793);
            expect(angle.Degrees).above(179.9999).below(180.00001);
        });

        it(`Should convert from any base-value prefix to the base value`, () => {
            const angle = Angle.FromMicrodegrees(180000000);
            expect(angle.Degrees).equal(180);
        });

        it(`Should convert from any other unit prefix to the base value`, () => {
            const angle = Angle.FromMicroradians(3141592.65358979);
            expect(angle.Degrees).above(179.9999).below(180.00001);
        });

        it(`Should limit fractional digits to 1`, () => {
            const angle = Angle.FromDegrees(180);
            expect(angle.toString(AngleUnits.Radians, 1)).equal('3.1 rad');
        });

        it(`Should limit fractional digits to 2`, () => {
            const angle = Angle.FromDegrees(180);
            expect(angle.toString(AngleUnits.Radians, 2)).equal('3.14 rad');
        });

        it("Should return 'NaN' when passing an invalid value to convert", () => {
            forEachUnit((unit) => {
                const instance = instantiateUnit(unit, 10);
                const stdConvertedFromBase = (instance as any).convert('this-value-does-not-exist');
                expect(stdConvertedFromBase).to.be.NaN;

                setOperatorOverride(ArithmeticOperation.Add, (a, b) => a + b);
                const overriddenConvertedFromBase = (instance as any).convert('this-value-does-not-exist');
                expect(overriddenConvertedFromBase).to.be.NaN;

                unsetOperatorOverride(ArithmeticOperation.Add);
            });
        });

        it("Should return 'NaN' when passing an invalid value to convertFromBase", () => {
            forEachUnit((unit) => {
                const instance = instantiateUnit(unit, 10);
                const stdConvertedFromBase = (instance as any).convertFromBase('this-value-does-not-exist');
                expect(stdConvertedFromBase).to.be.NaN;

                setOperatorOverride(ArithmeticOperation.Add, (a, b) => a + b);
                const overriddenConvertedFromBase = (instance as any).convertFromBase('this-value-does-not-exist');
                expect(overriddenConvertedFromBase).to.be.NaN;

                unsetOperatorOverride(ArithmeticOperation.Add);
            });
        }).slow(500);

        it("Should return 'NaN' when passing an invalid value to convertToBase", () => {
            forEachUnit((unit) => {
                const instance = instantiateUnit(unit, 10);
                const stdConvertedFromBase = (instance as any).convertToBase('this-value-does-not-exist');
                expect(stdConvertedFromBase).to.be.NaN;

                setOperatorOverride(ArithmeticOperation.Add, (a, b) => a + b);
                const overriddenConvertedFromBase = (instance as any).convertToBase('this-value-does-not-exist');
                expect(overriddenConvertedFromBase).to.be.NaN;

                unsetOperatorOverride(ArithmeticOperation.Add);
            });
        }).slow(500);

        it('Should return non-zero length string for each toString unit type and exact', () => {
            forEachUnit((unitClass, unitsEnum) => {
                const instance: BaseUnit = instantiateUnit(unitClass, 10);
                for (const unitEnumValue of Object.values(unitsEnum)) {
                    expect(instance.toString(unitEnumValue)).to.be.a('string').and.have.length.greaterThan(0);
                }
            });
        }).slow(500);

        it('Should return raw unit as string when calling toString with an invalid unit', () => {
            forEachUnit((unitClass) => {
                const instance: BaseUnit = instantiateUnit(unitClass, 10);
                expect(instance.toString('this-valid-does-not-exist')).to.be.a('string').equal(instance.BaseValue.toString());
            });
        }).slow(500);

        it('Should return an empty string when calling getUnitAbbreviation with an invalid unit', () => {
            forEachUnit((unitClass) => {
                const instance: BaseUnit = instantiateUnit(unitClass, 10);
                expect(instance.getUnitAbbreviation('this-valid-does-not-exist')).to.equal('');
            });
        }).slow(500);

        it('Should return same response for cached and uncached internal values', () => {
            forEachUnit((unitClass, unitsEnum) => {
                const instance: BaseUnit = instantiateUnit(unitClass, 10);
                for (const unitEnumValue of Object.values(unitsEnum)) {
                    // First call caches the value, second retrieves the cached one.
                    // We expect them to be equal
                    expect(instance.convert(unitEnumValue)).to.equal(instance.convert(unitEnumValue));
                }
            });
        });
    });

    describe('# Converters with convert style', () => {

        it(`Should convert from base value to base using convert style`, () => {
            const angle = Angle.FromDegrees(180);
            expect(angle.convert(AngleUnits.Degrees)).equal(180);
        });

        it(`Should convert from base value to any other unit using convert style`, () => {
            const angle = Angle.FromDegrees(180);
            // Without lazy
            expect(angle.convert(AngleUnits.Radians)).equal(3.141592653589793);
            // After lazy
            expect(angle.convert(AngleUnits.Radians)).equal(3.141592653589793);
        });
    });

    describe('# String formatter', () => {

        it('Should format as the base value format', () => {
            const angle = Angle.FromDegrees(180);
            expect(angle.toString()).equal('180 °');
        });

        it('Should format as the unit parameter format', () => {
            const angle = Angle.FromDegrees(180);
            expect(angle.toString(AngleUnits.Degrees)).equal('180 °');
            expect(angle.toString(AngleUnits.Radians)).equal('3.141592653589793 rad');
        });

        it('Should limit fractional digits to 0', () => {
            const angle = Angle.FromDegrees(180);
            expect(angle.toString(AngleUnits.Radians, 0)).equal('3 rad');
        });

        it('Should limit fractional digits to 2', () => {
            const angle = Angle.FromDegrees(180);
            expect(angle.toString(AngleUnits.Radians, 2)).equal('3.14 rad');
        });

        it('Should not limit fractional digits if not specified', () => {
            const angle = Angle.FromDegrees(180);
            expect(angle.toString(AngleUnits.Radians)).equal('3.141592653589793 rad');
        });

        it('Should not activate fractional digits if there are not digits to truncate', () => {
            const angle = Angle.FromDegrees(180);
            expect(angle.toString(AngleUnits.Degrees, 2)).equal('180 °');
        });

        it('Should activate fractional digits even if digits length fewer then the number', () => {
            const angle = Angle.FromDegrees(180);
            expect(angle.toString(AngleUnits.Radians, 20)).equal('3.141592653589793 rad');
        });

        it('Should return a different string for each unit parameter provided to toString', () => {
            forEachUnit((unitClass, unitsEnum) => {
                const instance = instantiateUnit(unitClass, 0.2);
                const outputStrings = new Set<string>();

                // Go over each unit and make sure the 'toString' result is different for each unit enum value
                for (const enumValue of Object.values(unitsEnum)) {
                    const stringValue = instance.toString(enumValue);
                    expect(outputStrings.has(stringValue)).to.be.false;
                    outputStrings.add(stringValue);
                }
            });
        });

        it('Should return a non-empty string when calling toString with no arguments', () => {
            forEachUnit((unitClass) => {
                const instance = instantiateUnit(unitClass, 0.2);
                expect(instance.toString()).to.be.a('string').and.have.length.greaterThan(0);
            });
        });

        it('Should return non-zero length string for each getUnitAbbreviation unit type', () => {
            forEachUnit((unitClass, unitsEnum) => {
                const instance: BaseUnit = instantiateUnit(unitClass, 10);
                for (const unitEnumValue of Object.values(unitsEnum)) {
                    const abbreviation = instance.getUnitAbbreviation(unitEnumValue);
                    if (isEmptyAbbreviationValidInContext(instance, unitEnumValue)) {
                        expect(abbreviation).to.be.a('string').and.equal('');
                    } else {
                        expect(abbreviation).to.be.a('string').and.have.length.greaterThan(0);
                    }
                }
            });
        }).slow(500);

        it('Should return a non-empty string when calling getUnitAbbreviation with no arguments', () => {
            forEachUnit((unitClass) => {
                const instance = instantiateUnit(unitClass, 0.2);
                const abbreviation = instance.getUnitAbbreviation();
                const baseUnit = queryNonPublicGetter(instance, BaseUnitNonPublicGetterNames.BaseUnit);
                if (isEmptyAbbreviationValidInContext(instance, baseUnit)) {
                    expect(abbreviation).to.be.a('string').and.equal('');
                } else {
                    expect(abbreviation).to.be.a('string').and.have.length.greaterThan(0);
                }
            });
        });
    });

    describe('# Abbreviations', () => {

        it(`Should get the correct abbreviation for unit`, () => {
            let length = new Length(5, LengthUnits.Kilometers);
            expect(length.getUnitAbbreviation(LengthUnits.Meters)).equal('m');
            expect(length.getUnitAbbreviation(LengthUnits.Miles)).equal('mi');
        });

        it(`Should get the correct abbreviation for prefix unit`, () => {
            let length = new Length(5, LengthUnits.Kilometers);
            expect(length.getUnitAbbreviation(LengthUnits.Kilometers)).equal('km');
        });
    });

    describe('# Additional methods', () => {

        const length1 = Length.FromMeters(10);
        const length2 = Length.FromDecimeters(100);
        const length3 = Length.FromMeters(3);

        it('Should be equal values', () => {
            expect(length1.equals(length2)).equal(true);
        });

        it('Should be not equal values', () => {
            expect(length1.equals(length3)).equal(false);
        });

        it('Should compare results with the first greater', () => {
            expect(length1.compareTo(length3)).equal(1);
        });

        it('Should compare results with the first lower', () => {
            expect(length3.compareTo(length1)).equal(-1);
        });

        it('Should compare results with the same same', () => {
            expect(length2.compareTo(length1)).equal(0);
        });

        it('Should return -1 when comparing smaller to greater instance via compareTo', () => {
            forEachUnit((unitClass) => {
                const instanceA = instantiateUnit(unitClass, 0.1);
                const instanceB = instantiateUnit(unitClass, 0.2);
                expect(instanceA.compareTo(instanceB)).to.equal(-1);
            });
        });

        it('Should return 0 when comparing equivalent instances via compareTo', () => {
            forEachUnit((unitClass) => {
                const instanceA = instantiateUnit(unitClass, 0.2);
                const instanceB = instantiateUnit(unitClass, 0.2);
                expect(instanceA.compareTo(instanceB)).to.equal(0);
            });
        });

        it('Should return 1 when comparing greater to smaller instance via compareTo', () => {
            forEachUnit((unitClass) => {
                const instanceA = instantiateUnit(unitClass, 0.2);
                const instanceB = instantiateUnit(unitClass, 0.1);
                expect(instanceA.compareTo(instanceB)).to.equal(1);
            });
        });


        it('Should return false when comparing non-equivalent instances via equals', () => {
            forEachUnit((unitClass) => {
                const instanceA = instantiateUnit(unitClass, 0.1);
                const instanceB = instantiateUnit(unitClass, 0.2);
                expect(instanceA.equals(instanceB)).to.be.false;
            });
        });

        it('Should return true when comparing equivalent instances via equals', () => {
            forEachUnit((unitClass) => {
                const instanceA = instantiateUnit(unitClass, 0.2);
                const instanceB = instantiateUnit(unitClass, 0.2);
                expect(instanceA.equals(instanceB)).to.be.true;
            });
        });

        it("Should return a valid string when calling an instance's getBaseUnit method", () => {
            forEachUnit((unitClass, unitEnum) => {
                const enumValues = new Set(Object.values(unitEnum));
                const instance = instantiateUnit(unitClass, 0.1);
                const baseUnit = queryNonPublicGetter(instance, BaseUnitNonPublicGetterNames.BaseUnit);
                expect(enumValues.has(baseUnit)).to.be.true;
            });
        });
    });

    describe('# Static methods', () => {
        it('Should return correct instances from static factory methods', () => {
            forEachUnit((unitClass) => {
                // Some functions using asin pass the value directly through Math.asin
                // which yields NaN for > 1
                const testValue = 0.7;

                const factoryMethodNames = getStaticFactoryMethodNamesOfUnitClass(unitClass);
                for (const methodName of factoryMethodNames) {
                    // Call each factory method and compare the instance's value to a manually constructed one (using default unit enum)
                    const factoryInstance: BaseUnit = (unitClass as any)[methodName](testValue);

                    const unitEnumType = invokeStaticMethod(unitClass, BaseUnitStaticMethodNames.GetUnitEnum, undefined);
                    const enumValueToConstructWith = getUnitEnumValueTypeFromFactoryMethodName(unitEnumType, methodName);

                    const normalInstance = instantiateUnit(unitClass, testValue, enumValueToConstructWith);

                    expect(factoryInstance.BaseValue, 'Factory instance base value is NaN').to.not.be.NaN;
                    expect(normalInstance.BaseValue, 'Normal instance base value is NaN').to.not.be.NaN;

                    expect(factoryInstance.BaseValue).to.equal(normalInstance.BaseValue);
                }
            });
        }).slow(500);
    });

    describe('# External additional formulas', () => {

        it(`Should use default JS for operations`, () => {
            const length1 = Length.FromMeters(0.1);
            const length2 = Length.FromMeters(0.1);
            expect(length1.equals(length2)).equal(true);
        });

        it(`Should use external operations`, () => {
            const length1 = Length.FromMeters(0.1);
            const length2 = Length.FromMeters(0.2);

            setOperatorOverride(CompareOperation.Equals, ((a, b) => true));
            expect(length1.equals(length2)).equal(true);

            setOperatorOverride(CompareOperation.CompareTo, ((a, b) => 1));
            expect(length1.compareTo(length2)).equal(1);

        });

        it(`Should use external operations when it's false`, () => {
            const length1 = Length.FromMeters(0.1);
            const length2 = Length.FromMeters(0.1);

            setOperatorOverride(CompareOperation.Equals, ((a, b) => false));
            expect(length1.equals(length2)).equal(false);

        });

        it(`Should use external operations when it's false`, () => {
            const length1 = Length.FromMeters(0.1);
            const length2 = Length.FromMeters(0.1);

            setOperatorOverride(CompareOperation.CompareTo, ((a, b) => 0));
            expect(length1.compareTo(length2)).equal(0);
        });

        it('Should output same value after construction when operators are overridden', () => {
            const testValue = getRandomInt(1, 1000);

            const stdResults: number[] = [];
            const overriddenOperatorResults: number[] = [];

            forEachUnit((unitClass, unitsEnum) => {
                for (const unitEnumValue of Object.values(unitsEnum)) {
                    const stdInstance: BaseUnit = instantiateUnit(unitClass, testValue, unitEnumValue);
                    stdResults.push(stdInstance.BaseValue);
                }

                setAllArithmeticOverrides();

                for (const unitEnumValue of Object.values(unitsEnum)) {
                    const stdInstance: BaseUnit = instantiateUnit(unitClass, testValue, unitEnumValue);
                    overriddenOperatorResults.push(stdInstance.BaseValue);
                }

                expect(stdResults).to.deep.equal(overriddenOperatorResults);
            });
        }).slow(500);

        it('Should output same value after all base conversions when operators are overridden', () => {
            const testValue = getRandomInt(1, 1000);

            const stdResults: number[] = [];
            const overriddenOperatorResults: number[] = [];

            // Each unit type has a 'convert' method which we can use to output the base value in whatever unit we choose.
            // We call this iteratively with every enum value to cover all convertFromBase cases
            forEachUnit((unitClass, unitsEnum) => {
                const stdInstance = instantiateUnit(unitClass, testValue);
                for (const unitEnumValue of Object.values(unitsEnum)) {
                    const convertedValue = stdInstance.convert(unitEnumValue);
                    expect(convertedValue).to.not.be.null.and.not.be.undefined;
                    stdResults.push(convertedValue);
                }

                setAllArithmeticOverrides();

                const overriddenInstance = instantiateUnit(unitClass, testValue);
                for (const unitEnumValue of Object.values(unitsEnum)) {
                    const convertedValue = overriddenInstance.convert(unitEnumValue);
                    expect(convertedValue).to.not.be.null.and.not.be.undefined;
                    overriddenOperatorResults.push(convertedValue);
                }

                expect(stdResults).to.deep.equal(overriddenOperatorResults);
            });
        }).slow(1000);

        it('Should unset all operator overrides using unsetAllOperatorOverrides', () => {
            // Meter to Centimeters uses division instead of multiplication
            setOperatorOverride(ArithmeticOperation.Divide, (_a, _b) => 1234);
            expect(Length.FromMeters(1).Centimeters).to.equal(1234);

            unsetAllOperatorOverrides();
            expect(Length.FromMeters(1).Centimeters).to.equal(100);
        });

        it('Should unset specific operator override using unsetOperatorOverride', () => {
            // Meter to Centimeters uses division instead of multiplication
            setOperatorOverride(ArithmeticOperation.Divide, (_a, _b) => 1234);
            expect(Length.FromMeters(1).Centimeters).to.equal(1234);

            unsetOperatorOverride(ArithmeticOperation.Divide);
            expect(Length.FromMeters(1).Centimeters).to.equal(100);
        });

        it('Should not throw when removing a non-existent override', () => {
            // Meter to Centimeters uses division instead of multiplication
            expect(Length.FromMeters(1).Centimeters).to.equal(100);
            unsetOperatorOverride(ArithmeticOperation.Divide);
            expect(Length.FromMeters(1).Centimeters).to.equal(100);
        });

        it('Should not throw when internalSqrt is called directly while an override is not present', () => {
            expect(() =>
                invokeNonPublicMethod(Length.FromMeters(1), BaseUnitNonPublicMethodNames.InternalSqrt, [9])
            ).to.not.throw;
        });

        it('Should not throw when internalEquals is called directly while an override is not present', () => {
            expect(() =>
                invokeNonPublicMethod(Length.FromMeters(1), BaseUnitNonPublicMethodNames.InternalEquals, [1, 1])
            ).to.not.throw;
        });

        it('Should not throw when internalCompareTo is called directly while an override is not present', () => {
            expect(() =>
                invokeNonPublicMethod(Length.FromMeters(1), BaseUnitNonPublicMethodNames.InternalCompareTo, [1, 2])
            ).to.not.throw;
        });

        it('Should return correct value when internalSqrt is called directly while an override is not present', () => {
            const result = invokeNonPublicMethod(Length.FromMeters(1), BaseUnitNonPublicMethodNames.InternalSqrt, [9]);
            expect(result).to.equal(3);
        });
    });

    describe('# Arithmetics methods', () => {

        const length1 = Length.FromMeters(10);
        const length2 = Length.FromMeters(3);

        it(`Should add the values of the units`, () => {
            expect(length1.add(length2).Meters).equal(13);
        });

        it(`Should subtract the values of the units`, () => {
            expect(length1.subtract(length2).Meters).equal(7);
        });

        it(`Should multiply the values of the units`, () => {
            expect(length1.multiply(length2).Meters).equal(30);
        });

        it(`Should divide the values of the units`, () => {
            expect(length1.divide(length2).Meters).above(3.33333333333333).below(3.33333333333334);
        });

        it(`Should modulo the values of the units`, () => {
            expect(length1.modulo(length2).Meters).equal(1);
        });

        it(`Should pow the values of the units`, () => {
            expect(length1.pow(length2).Meters).equal(1000);
        });

        it('Should perform instance arithmetics and return correct result', () => {
            forEachUnit((unitClass) => {
                const measure = 10;

                const baseUnit = instantiateUnit(unitClass, measure);
                const operandUnit = instantiateUnit(unitClass, measure);

                expect(baseUnit.add(operandUnit).BaseValue).to.equal(instantiateUnit(unitClass, measure * 2).BaseValue);
                expect(baseUnit.subtract(operandUnit).BaseValue).to.equal(instantiateUnit(unitClass, measure - measure).BaseValue);
                expect(baseUnit.multiply(operandUnit).BaseValue).to.equal(instantiateUnit(unitClass, measure * measure).BaseValue);
                expect(baseUnit.divide(operandUnit).BaseValue).to.equal(instantiateUnit(unitClass, measure / measure).BaseValue);
                expect(baseUnit.modulo(operandUnit).BaseValue).to.equal(instantiateUnit(unitClass, measure % measure).BaseValue);
                expect(baseUnit.pow(operandUnit).BaseValue).to.equal(instantiateUnit(unitClass, measure ** measure).BaseValue);
            });
        });
    });

    describe('# External arithmetic formulas', () => {

        it(`Should use default JS for formula`, () => {
            const length1 = Length.FromMeters(0.1);
            const length2 = Length.FromMeters(0.2);
            // The expected behavior for JS defaults for + ... :( 
            expect(length1.add(length2).Meters).equal(0.30000000000000004);
        });

        it(`Should use external arithmetic formula`, () => {
            const length1 = Length.FromMeters(0.1);
            const length2 = Length.FromMeters(0.2);
            setOperatorOverride(ArithmeticOperation.Add, (a, b) => 10);
            expect(length1.add(length2).Meters).equal(10);
            setOperatorOverride(ArithmeticOperation.Subtract, (a, b) => 10);
            expect(length1.subtract(length2).Meters).equal(10);
            setOperatorOverride(ArithmeticOperation.Multiply, (a, b) => 10);
            expect(length1.multiply(length2).Meters).equal(10);
            setOperatorOverride(ArithmeticOperation.Divide, (a, b) => 10);
            expect(length1.divide(length2).Meters).equal(10);
            setOperatorOverride(ArithmeticOperation.Modulo, (a, b) => 10);
            expect(length1.modulo(length2).Meters).equal(10);
            setOperatorOverride(ArithmeticOperation.Pow, (a, b) => 10);
            expect(length1.pow(length2).Meters).equal(10);
        });

        it(`Should use external arithmetic formulas when it's 0`, () => {
            const length1 = Length.FromMeters(0.1);
            const length2 = Length.FromMeters(0.2);
            setOperatorOverride(ArithmeticOperation.Add, (a, b) => 0);
            expect(length1.add(length2).Meters).equal(0);
            setOperatorOverride(ArithmeticOperation.Subtract, (a, b) => 0);
            expect(length1.subtract(length2).Meters).equal(0);
            setOperatorOverride(ArithmeticOperation.Multiply, (a, b) => 0);
            expect(length1.multiply(length2).Meters).equal(0);
            setOperatorOverride(ArithmeticOperation.Divide, (a, b) => 0);
            expect(length1.divide(length2).Meters).equal(0);
            setOperatorOverride(ArithmeticOperation.Modulo, (a, b) => 0);
            expect(length1.modulo(length2).Meters).equal(0);
            setOperatorOverride(ArithmeticOperation.Pow, (a, b) => 0);
            expect(length1.pow(length2).Meters).equal(0);
        });

        it(`Should use external numeral library arithmetic formulas`, () => {
            const lengthA = Length.FromMeters(0.1);
            const lengthB = Length.FromMeters(0.2);
            setOperatorOverride(ArithmeticOperation.Add, (valueA: number, valueB: number) => {
                return numeral(valueA).add(valueB).value() as number;
            });
            expect(lengthA.add(lengthB).Meters).equal(0.3);
        });
    });

    describe('# Data Transfer Object', () => {

        const length1 = Length.FromMeters(100.01);

        it(`Should create DTO from default unit`, () => {
            expect(length1.toDto()).deep.equal({
                "value": 100.01,
                "unit": "Meter"
            });
        });

        it(`Should create DTO by specific unit`, () => {
            expect(length1.toDto(LengthUnits.Centimeters)).deep.equal({
                "value": 10001,
                "unit": "Centimeter"
            });
        });

        it(`Should load from default unit DTO`, () => {
            const dto = length1.toDto(LengthUnits.Meters);
            expect(Length.FromDto(dto).Meters).deep.equal(100.01);
        });

        it(`Should load from specific unit DTO`, () => {
            const dto = length1.toDto(LengthUnits.Centimeters);
            expect(Length.FromDto(dto).Meters).deep.equal(100.01);
            expect(Length.FromDto(dto).Decimeters).deep.equal(1000.1);
        });

        it(`Should be similar values from two DTO representations`, () => {
            // Create Length unit object
            const length = Length.FromMeters(100.01);

            // Obtain the DTO object, will be represented by the default - meter
            const lengthDto: LengthDto = length.toDto(); // {"value":100.01,"unit":"Meter"}

            // Obtain the same value but represent DTO in KM 
            const lengthDtoRepresentsInKM: LengthDto = length.toDto(LengthUnits.Kilometers); // {"value":0.10001,"unit":"Kilometer"}

            const lengthFromMetersDto = Length.FromDto(lengthDto);
            // Same value as
            const lengthFromKMDto = Length.FromDto(lengthDtoRepresentsInKM);

            expect(lengthFromKMDto.Meters).deep.equal(lengthFromMetersDto.Meters);
        });

        it("Constructs valid DTO's via toDto instance method with default params", () => {
            forEachUnit((unitClass) => {
                const sampleValue: number = 0.3;

                const instance = instantiateUnit(unitClass, sampleValue);
                const dto = instance.toDto();

                const baseUnit = invokeStaticMethod(unitClass, BaseUnitStaticMethodNames.GetBaseUnit, undefined);
                expect(dto.unit).to.equal(baseUnit);
                expect(dto.value).to.equal(sampleValue);
            });
        });

        it("Constructs a valid instance from DTO via FromDto static method", () => {
            forEachUnit((unitClass) => {
                const sampleValue: number = 0.4;

                const baseUnit = invokeStaticMethod(unitClass, BaseUnitStaticMethodNames.GetBaseUnit, undefined);
                const instance = invokeStaticMethod(unitClass, BaseUnitStaticMethodNames.FromDto, { value: sampleValue, unit: baseUnit });
                expect(instance.BaseValue).to.equal(sampleValue);
            });
        });
    });
});
