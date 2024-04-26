import { expect } from 'chai';
import { describe } from 'mocha';
import numeral from 'numeral';
import { Angle, AngleUnits, ArithmeticOperation, Length, LengthUnits, setArithmeticFormula, setCompareToFurmula, setEqualsFormula } from '../src';

describe('Unitsnet - tests', () => {

    describe('# Creations', () => {

        it(`Should be the same creating by ctor or by 'FromXXX'`, () => {
            const angleCtorDriven = new Angle(180, AngleUnits.Degrees);
            const angleFromDriven = Angle.FromDegrees(180);
            expect(angleCtorDriven.BaseValue).equal(angleFromDriven.BaseValue);
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

        it(`Should format as the base value format`, () => {
            const angle = Angle.FromDegrees(180);
            expect(angle.toString()).equal('180 °');
        });

        it(`Should format as the unit paramter format`, () => {
            const angle = Angle.FromDegrees(180);
            expect(angle.toString(AngleUnits.Degrees)).equal('180 °');
            expect(angle.toString(AngleUnits.Radians)).equal('3.141592653589793 rad');
        });

        it(`Should limit fractional digits to 0`, () => {
            const angle = Angle.FromDegrees(180);
            expect(angle.toString(AngleUnits.Radians, 0)).equal('3 rad');
        });

        it(`Should limit fractional digits to 2`, () => {
            const angle = Angle.FromDegrees(180);
            expect(angle.toString(AngleUnits.Radians, 2)).equal('3.14 rad');
        });

        it(`Should not limit fractional digits if not specified`, () => {
            const angle = Angle.FromDegrees(180);
            expect(angle.toString(AngleUnits.Radians)).equal('3.141592653589793 rad');
        });

        it(`Should not activate fractional digits if there are not digits to truncate`, () => {
            const angle = Angle.FromDegrees(180);
            expect(angle.toString(AngleUnits.Degrees, 2)).equal('180 °');
        });

        it(`Should activate fractional digits even if digits length fewer then the number`, () => {
            const angle = Angle.FromDegrees(180);
            expect(angle.toString(AngleUnits.Radians, 20)).equal('3.141592653589793 rad');
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

        it(`Should be equal valus`, () => {
            expect(length1.equals(length2)).equal(true);
        });

        it(`Should be not equal valus`, () => {
            expect(length1.equals(length3)).equal(false);
        });

        it(`Should compare results with the first greater`, () => {
            expect(length1.compareTo(length3)).equal(1);
        });

        it(`Should compare results with the first lower`, () => {
            expect(length3.compareTo(length1)).equal(-1);
        });

        it(`Should compare results with the same same`, () => {
            expect(length2.compareTo(length1)).equal(0);
        });
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

            setEqualsFormula((a, b) => true);
            expect(length1.equals(length2)).equal(true);

            setCompareToFurmula((a, b) => 1);
            expect(length1.compareTo(length2)).equal(1);

        });

        it(`Should use external operations when it's false`, () => {
            const length1 = Length.FromMeters(0.1);
            const length2 = Length.FromMeters(0.1);

            setEqualsFormula((a, b) => false);
            expect(length1.equals(length2)).equal(false);

        });

        it(`Should use external operations when it's false`, () => {
            const length1 = Length.FromMeters(0.1);
            const length2 = Length.FromMeters(0.1);

            setCompareToFurmula((a, b) => 0);
            expect(length1.compareTo(length2)).equal(0);
        });
    });

    describe('# Arithmetics methods', () => {

        const length1 = Length.FromMeters(10);
        const length2 = Length.FromMeters(3);

        it(`Should add the valus of the units`, () => {
            expect(length1.add(length2).Meters).equal(13);
        });

        it(`Should subtract the valus of the units`, () => {
            expect(length1.subtract(length2).Meters).equal(7);
        });

        it(`Should multiply the valus of the units`, () => {
            expect(length1.multiply(length2).Meters).equal(30);
        });

        it(`Should divide the valus of the units`, () => {
            expect(length1.divide(length2).Meters).above(3.33333333333333).below(3.33333333333334);
        });

        it(`Should modulo the valus of the units`, () => {
            expect(length1.modulo(length2).Meters).equal(1);
        });

        it(`Should pow the valus of the units`, () => {
            expect(length1.pow(length2).Meters).equal(1000);
        });
    });

    describe('# External aritmatic formulas', () => {

        it(`Should use default JS for formula`, () => {
            const length1 = Length.FromMeters(0.1);
            const length2 = Length.FromMeters(0.2);
            // The expected behavior for JS defaults for + ... :( 
            expect(length1.add(length2).Meters).equal(0.30000000000000004);
        });

        it(`Should use external aritmatic formula`, () => {
            const length1 = Length.FromMeters(0.1);
            const length2 = Length.FromMeters(0.2);
            setArithmeticFormula(ArithmeticOperation.Add, (a, b) => 10);
            expect(length1.add(length2).Meters).equal(10);
            setArithmeticFormula(ArithmeticOperation.Subtract, (a, b) => 10);
            expect(length1.subtract(length2).Meters).equal(10);
            setArithmeticFormula(ArithmeticOperation.Multiply, (a, b) => 10);
            expect(length1.multiply(length2).Meters).equal(10);
            setArithmeticFormula(ArithmeticOperation.Divide, (a, b) => 10);
            expect(length1.divide(length2).Meters).equal(10);
            setArithmeticFormula(ArithmeticOperation.Modulo, (a, b) => 10);
            expect(length1.modulo(length2).Meters).equal(10);
            setArithmeticFormula(ArithmeticOperation.Pow, (a, b) => 10);
            expect(length1.pow(length2).Meters).equal(10);
        });

        it(`Should use external aritmatic formulas when it's 0`, () => {
            const length1 = Length.FromMeters(0.1);
            const length2 = Length.FromMeters(0.2);
            setArithmeticFormula(ArithmeticOperation.Add, (a, b) => 0);
            expect(length1.add(length2).Meters).equal(0);
            setArithmeticFormula(ArithmeticOperation.Subtract, (a, b) => 0);
            expect(length1.subtract(length2).Meters).equal(0);
            setArithmeticFormula(ArithmeticOperation.Multiply, (a, b) => 0);
            expect(length1.multiply(length2).Meters).equal(0);
            setArithmeticFormula(ArithmeticOperation.Divide, (a, b) => 0);
            expect(length1.divide(length2).Meters).equal(0);
            setArithmeticFormula(ArithmeticOperation.Modulo, (a, b) => 0);
            expect(length1.modulo(length2).Meters).equal(0);
            setArithmeticFormula(ArithmeticOperation.Pow, (a, b) => 0);
            expect(length1.pow(length2).Meters).equal(0);
        });

        it(`Should use external numeral library aritmatic formulas`, () => {
            const lengthA = Length.FromMeters(0.1);
            const lengthB = Length.FromMeters(0.2);
            setArithmeticFormula(ArithmeticOperation.Add, (valueA: number, valueB: number) => {
                return numeral(valueA).add(valueB).value() as number;
            });
            expect(lengthA.add(lengthB).Meters).equal(0.3);
        });
    });
});
