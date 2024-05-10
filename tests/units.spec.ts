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
	setCompareToFormula,
	setEqualsFormula,
	setOperatorOverride,
	unsetAllOperatorOverrides,
	unsetOperatorOverride
} from '../src';

import { BaseUnit, } from '../src/base-unit';
import { forEachUnit, getRandomInt, instantiateUnit, setAllArithmeticOverrides } from './utils';

describe('Unitsnet - tests', () => {
	beforeEach(() => unsetAllOperatorOverrides())

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

		it("Should return 'NaN' when passing an invalid value to convert", () => {
			forEachUnit((unit) => {
				const instance = instantiateUnit(unit, 10);
				const stdConvertedFromBase = (instance as any).convert('this-value-does-not-exist');
				expect(stdConvertedFromBase).to.be.NaN;

				setOperatorOverride(ArithmeticOperation.Add, (a, b) => a + b);
				const overriddenConvertedFromBase = (instance as any).convert('this-value-does-not-exist');
				expect(overriddenConvertedFromBase).to.be.NaN;
			});
		}).slow(500);

		it("Should return 'NaN' when passing an invalid value to convertFromBase", () => {
			forEachUnit((unit) => {
				const instance = instantiateUnit(unit, 10);
				const stdConvertedFromBase = (instance as any).convertFromBase('this-value-does-not-exist');
				expect(stdConvertedFromBase).to.be.NaN;

				setOperatorOverride(ArithmeticOperation.Add, (a, b) => a + b);
				const overriddenConvertedFromBase = (instance as any).convertFromBase('this-value-does-not-exist');
				expect(overriddenConvertedFromBase).to.be.NaN;
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
			});
		}).slow(500);

		it('Should return non-zero length strings for each toString unit type', () => {
			forEachUnit((unitClass, unitsEnum) => {
				const instance: BaseUnit = instantiateUnit(unitClass, 10);
				for (const unitEnumValue of Object.values(unitsEnum)) {
					expect(instance.toString(unitEnumValue)).to.be.a('string').and.have.length.greaterThan(0);
				}
			});
		}).slow(500);
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

			setCompareToFormula((a, b) => 1);
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

			setCompareToFormula((a, b) => 0);
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
	});
});
