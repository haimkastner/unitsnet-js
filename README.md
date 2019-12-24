# units-js



## Install via NPM:

```bash 

npm install unitsnet-js

```

## Used example in TypeScript
```typescript
import { Angle, AngleUnits } from 'unitsnet-js';


let angle = Angle.FromDegrees(180);
// Equal to  
angle =  new Angle(180, AngleUnits.Degrees);

console.info(angle.Radians);
console.info(angle.Microradians);
console.info(angle.Gradians);
console.info(angle.Microdegrees);

```
