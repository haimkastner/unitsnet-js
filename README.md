# unitsnet-js

The unitsnet-js package is a better way to hold unit variables and easily convert to the destination unit.

The library is based on the great [Units.NET](https://github.com/angularsen/UnitsNet) project, and used their [definitions sources](https://github.com/angularsen/UnitsNet/tree/master/Common/UnitDefinitions) to generate the JS/TS unit classes. 

## Install via NPM:

```bash 

npm install unitsnet-js

```

## Used example in TypeScript
```typescript
import { Angle, AngleUnits } from 'unitsnet-js';


let angle = Angle.FromDegrees(180);
// equals to
angle =  new Angle(180, AngleUnits.Degrees);

console.info(angle.Radians); // 3.141592653589793
console.info(angle.Microradians); // 3141592.65358979
console.info(angle.Gradians); // 200
console.info(angle.Microdegrees); // 180000000

```
