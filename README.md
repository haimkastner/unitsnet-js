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

### Supported units

Currently, the package supports the following units:

- Acceleration
- AmountOfSubstance
- AmplitudeRatio
- Angle
- ApparentEnergy
- ApparentPower
- Area
- AreaDensity
- AreaMomentOfInertia
- BitRate
- BrakeSpecificFuelConsumption
- Capacitance
- CoefficientOfThermalExpansion
- Density
- Duration
- DynamicViscosity
- ElectricAdmittance
- ElectricCharge
- ElectricChargeDensity
- ElectricConductance
- ElectricConductivity
- ElectricCurrent
- ElectricCurrentDensity
- ElectricCurrentGradient
- ElectricField
- ElectricInductance
- ElectricPotential
- ElectricPotentialAc
- ElectricPotentialDc
- ElectricResistance
- ElectricResistivity
- ElectricSurfaceChargeDensity
- Energy
- Entropy
- Force
- ForceChangeRate
- ForcePerLength
- Frequency
- FuelEfficiency
- HeatFlux
- HeatTransferCoefficient
- Illuminance
- Information
- Irradiance
- Irradiation
- KinematicViscosity
- LapseRate
- Length
- Level
- LinearDensity
- Luminosity
- LuminousFlux
- LuminousIntensity
- MagneticField
- MagneticFlux
- Magnetization
- Mass
- MassConcentration
- MassFlow
- MassFlux
- MassFraction
- MassMomentOfInertia
- MolarEnergy
- MolarEntropy
- Molarity
- MolarMass
- Permeability
- Permittivity
- Power
- PowerDensity
- PowerRatio
- Pressure
- PressureChangeRate
- Ratio
- RatioChangeRate
- ReactiveEnergy
- ReactivePower
- RotationalAcceleration
- RotationalSpeed
- RotationalStiffness
- RotationalStiffnessPerLength
- SolidAngle
- SpecificEnergy
- SpecificEntropy
- SpecificVolume
- SpecificWeight
- Speed
- Temperature
- TemperatureChangeRate
- TemperatureDelta
- ThermalConductivity
- ThermalResistance
- Torque
- TorquePerLength
- VitaminA
- Volume
- VolumeConcentration
- VolumeFlow
- VolumePerLength


(This file generated from [README.t.md](./generator-scripts/src/assets/README.t.md) template file)
