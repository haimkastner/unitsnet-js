# unitsnet-js

The unitsnet-js package provides an efficient way to store unit variables and perform easy conversions to different units when it required. 

It offers support for more than 100 unit types across various unit categories, including pretty-printing, comparison, and arithmetic methods. 

The API is designed to be user-friendly and straightforward to use.

The library is built on top of the [Units.NET](https://github.com/angularsen/UnitsNet) project and leverages their [definitions sources](https://github.com/angularsen/UnitsNet/tree/master/Common/UnitDefinitions) to generate the JavaScript unit classes.

[![Build & Test Status](https://github.com/haimkastner/unitsnet-js/workflows/unitsnet-js/badge.svg?branch=master)](https://github.com/haimkastner/unitsnet-js/actions)

###### The unitsnet-js package does not require any external dependencies or packages to function.

Package is available on NPM at https://www.npmjs.com/package/unitsnet-js

[Units.NET on other platforms](#unitsnet-on-other-platforms)

## Install via NPM:

```bash 

npm install unitsnet-js

```

## Example Usage in TypeScript

```typescript
import { Angle, AngleUnits, Length, LengthUnits } from 'unitsnet-js';


let angle = Angle.FromDegrees(180);
// equals to
angle =  new Angle(180, AngleUnits.Degrees);

console.info(angle.Radians); // 3.141592653589793
console.info(angle.Microradians); // 3141592.65358979
console.info(angle.Gradians); // 200
console.info(angle.Microdegrees); // 180000000

// As an alternative, a convert style method are also available
console.info(angle.convert(AngleUnits.Radians)); // 3.141592653589793
console.info(angle.convert(AngleUnits.Microradians)); // 3141592.65358979
console.info(angle.convert(AngleUnits.Gradians)); // 200
console.info(angle.convert(AngleUnits.Microdegrees)); // 180000000

// Print the default unit toString (The default for angle is degrees)
console.info(angle.toString()); // 180 °

console.info(angle.toString(AngleUnits.Degrees)); // 180 °
console.info(angle.toString(AngleUnits.Radians)); // 3.141592653589793 rad

// Additional methods

const length1 = Length.FromMeters(10);
const length2 = Length.FromDecimeters(100);
const length3 = Length.FromMeters(3);

// 'equals' method
console.log(length1.equals(length2)) // true;
console.log(length1.equals(length3)) // false;

// 'compareTo' method
console.log(length1.compareTo(length3)) // 1;
console.log(length3.compareTo(length1)) // -1;
console.log(length2.compareTo(length1)) // 0;

// Arithmetics methods
const results1 = length1.add(length3);
const results2 = length1.subtract(length3);
const results3 = length1.multiply(length3);
const results4 = length1.divide(length3);
const results5 = length1.modulo(length3);
const results6 = length1.pow(length3);
console.log(results1.toString(LengthUnits.Meters)) // 13 m
console.log(results2.toString(LengthUnits.Meters)) // 7 m
console.log(results3.toString(LengthUnits.Meters)) // 30 m
console.log(results4.toString(LengthUnits.Meters)) // 3.3333333333333335 m
console.log(results5.toString(LengthUnits.Meters)) // 1 m
console.log(results6.toString(LengthUnits.Meters)) // 1000 m

// External arithmetics methods

// As a default, the arithmetic formula uses JavaScript default operations (e.g., +, -, etc.). 
// However, JavaScript operations use floating-point math, which is not mathematically accurate in some cases. 
// For instance, operating 0.1 + 0.2 results in 0.30000000000000004 instead of 0.3. 
// You can read more about this issue at https://stackoverflow.com/q/1458633/8281649. 
// UnitNet library allows you to replace the arithmetic formulas with your own, better formulas.

// Example of loading https://www.npmjs.com/package/numeral library as the artimatic formula
import numeral from 'numeral';
import { Length, setArtimeticFormula, AritmaticOperation } from 'unitsnet-js';

const lengthA = Length.FromMeters(0.1);
const lengthB = Length.FromMeters(0.2);

// The default formula results
console.log(lengthA.add(lengthB).Meters); // 0.30000000000000004

setArtimeticFormula(AritmaticOperation.Add, (valueA: number, valueB: number) => {
    return numeral(valueA).add(valueB).value() as number;
});

// The numeral formula results
console.log(lengthA.add(lengthB).Meters); // 0.3

```

### Supported units

The package provides support for the following units:

~SUPPORTED_UNITS~

### Units.NET on other platforms

Get the same strongly typed units on other platforms, based on the same [unit definitions](/Common/UnitDefinitions).

| Language  | Name        | Package                                           | Repository                                           | Maintainers  |
|-----------|-------------|---------------------------------------------------|------------------------------------------------------|--------------|
| C#        | UnitsNet    | [nuget](https://www.nuget.org/packages/UnitsNet/) | [github](https://github.com/angularsen/UnitsNet)     | @angularsen  |
| Python    | unitsnet-py | [pypi](https://pypi.org/project/unitsnet-py)      | [github](https://github.com/haimkastner/unitsnet-py) | @haimkastner |
