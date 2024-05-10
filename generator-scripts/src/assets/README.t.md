# unitsnet-js

[![Build & Test Status](https://github.com/haimkastner/unitsnet-js/workflows/unitsnet-js/badge.svg?branch=master)](https://github.com/haimkastner/unitsnet-js/actions)

 [![Latest Release](https://img.shields.io/github/v/release/haimkastner/unitsnet-js?style=plastic)](https://github.com/haimkastner/unitsnet-js/releases) 
 [![npm version](https://img.shields.io/npm/v/unitsnet-js.svg?style=plastic&label=npm)](https://www.npmjs.com/package/unitsnet-js)

[![GitHub stars](https://img.shields.io/github/stars/haimkastner/unitsnet-js.svg?style=social&label=Stars)](https://github.com/haimkastner/unitsnet-js/stargazers) 
[![npm downloads](https://img.shields.io/npm/dt/unitsnet-js.svg?style=social)](https://www.npmjs.com/package/unitsnet-js)
[![License](https://img.shields.io/github/license/haimkastner/unitsnet-js.svg?style=social)](https://github.com/haimkastner/unitsnet-js/blob/master/LICENSE) 

The unitsnet-js package provides an efficient way to store unit variables and perform easy conversions to different units when it required. 

It offers support for more than 100 unit types across various unit categories, including pretty-printing, comparison, and arithmetic methods. 

The API is designed to be user-friendly and straightforward to use.

The library is built on top of the [Units.NET](https://github.com/angularsen/UnitsNet) project and leverages their [definitions sources](https://github.com/angularsen/UnitsNet/tree/master/Common/UnitDefinitions) to generate the JavaScript unit classes.


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

// Specify fraction digits max length
console.info(angle.toString(AngleUnits.Radians, 2)); // 3.14 rad
```

## Additional methods

Check, compare, calculate etc. with unitsnet:

```typescript
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

// Example of loading https://www.npmjs.com/package/numeral library as the arithmetic formula
import numeral from 'numeral';
import { Length, setArithmeticFormula, ArithmeticOperation } from 'unitsnet-js';

const lengthA = Length.FromMeters(0.1);
const lengthB = Length.FromMeters(0.2);

// The default formula results
console.log(lengthA.add(lengthB).Meters); // 0.30000000000000004

setArithmeticFormula(ArithmeticOperation.Add, (valueA: number, valueB: number) => {
    return numeral(valueA).add(valueB).value() as number;
});

// The numeral formula results
console.log(lengthA.add(lengthB).Meters); // 0.3
```

## DTO - Data Transfer Object

As UnitsNet provides a convenient way to work within a running service, there are occasions where the data needs to be exposed outside of the service, typically through an API containing the unit value or consumed from an API.

To support this with a clear API schema and make it easy to convert to and from this schema to the specific format, it's recommended to use DTOs and the UnitsNet flavor converters.

```typescript
import { Length, LengthDto, LengthUnits } from 'unitsnet-js';

// Create a Length unit object
const length = Length.FromMeters(100.01);
           
// Obtain the DTO object, represented by the default unit - meter
const lengthDto: LengthDto = length.toDto(); // {"value":100.01,"unit":"Meter"}

// Obtain the same value but represent DTO in KM 
const lengthDtoRepresentsInKM: LengthDto = length.toDto(LengthUnits.Kilometers); // {"value":0.10001,"unit":"Kilometer"}

// Obtain Length object from lengthDto

const lengthFromMetersDto = Length.FromDto(lengthDto);
// The exact same value as
const lengthFromKMDto = Length.FromDto(lengthDtoRepresentsInKM);
```


Check out the OpenAPI [unitsnet-openapi-spec](https://haimkastner.github.io/unitsnet-openapi-spec-example/) example schema.

Also, refer to the detailed discussions on GitHub: [haimkastner/unitsnet-js#31](https://github.com/haimkastner/unitsnet-js/issues/31) & [angularsen/UnitsNet#1378](https://github.com/angularsen/UnitsNet/issues/1378).


### Supported units

The package provides support for the following units:

~SUPPORTED_UNITS~

### Units.NET on other platforms

Get the same strongly typed units on other platforms, based on the same [unit definitions](/Common/UnitDefinitions).

| Language                   | Name        | Package                                           | Repository                                           | Maintainers  |
|----------------------------|-------------|---------------------------------------------------|------------------------------------------------------|--------------|
| C#                         | UnitsNet    | [nuget](https://www.nuget.org/packages/UnitsNet/) | [github](https://github.com/angularsen/UnitsNet)     | @angularsen  |
| JavaScript /<br>TypeScript | unitsnet-js | [npm](https://www.npmjs.com/package/unitsnet-js)  | [github](https://github.com/haimkastner/unitsnet-js) | @haimkastner |
| Python                     | unitsnet-py | [pypi](https://pypi.org/project/unitsnet-py)      | [github](https://github.com/haimkastner/unitsnet-py) | @haimkastner |
