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
```

### Supported units

The package provides support for the following units:

- **AbsorbedDoseOfIonizingRadiation**
    -   *Absorbed dose is a dose quantity which is the measure of the energy deposited in matter by ionizing radiation per unit mass.*
- **Acceleration**
    -   *Acceleration, in physics, is the rate at which the velocity of an object changes over time. An object's acceleration is the net result of any and all forces acting on the object, as described by Newton's Second Law. The SI unit for acceleration is the Meter per second squared (m/s²). Accelerations are vector quantities (they have magnitude and direction) and add according to the parallelogram law. As a vector, the calculated net force is equal to the product of the object's mass (a scalar quantity) and the acceleration.*
- **AmountOfSubstance**
    -   *Mole is the amount of substance containing Avagadro's Number (6.02 x 10 ^ 23) of real particles such as molecules,atoms, ions or radicals.*
- **AmplitudeRatio**
    -   *The strength of a signal expressed in decibels (dB) relative to one volt RMS.*
- **Angle**
    -   *In geometry, an angle is the figure formed by two rays, called the sides of the angle, sharing a common endpoint, called the vertex of the angle.*
- **ApparentEnergy**
    -   *A unit for expressing the integral of apparent power over time, equal to the product of 1 volt-ampere and 1 hour, or to 3600 joules.*
- **ApparentPower**
    -   *Power engineers measure apparent power as the magnitude of the vector sum of active and reactive power. Apparent power is the product of the root-mean-square of voltage and current.*
- **Area**
    -   *Area is a quantity that expresses the extent of a two-dimensional surface or shape, or planar lamina, in the plane. Area can be understood as the amount of material with a given thickness that would be necessary to fashion a model of the shape, or the amount of paint necessary to cover the surface with a single coat.[1] It is the two-dimensional analog of the length of a curve (a one-dimensional concept) or the volume of a solid (a three-dimensional concept).*
- **AreaDensity**
    -   *The area density of a two-dimensional object is calculated as the mass per unit area. For paper this is also called grammage.*
- **AreaMomentOfInertia**
    -   *A geometric property of an area that reflects how its points are distributed with regard to an axis.*
- **BitRate**
    -   *In telecommunications and computing, bit rate is the number of bits that are conveyed or processed per unit of time.*
- **BrakeSpecificFuelConsumption**
    -   *Brake specific fuel consumption (BSFC) is a measure of the fuel efficiency of any prime mover that burns fuel and produces rotational, or shaft, power. It is typically used for comparing the efficiency of internal combustion engines with a shaft output.*
- **Capacitance**
    -   *Capacitance is the ability of a body to store an electric charge.*
- **CoefficientOfThermalExpansion**
    -   *A unit that represents a fractional change in size in response to a change in temperature.*
- **Compressibility**
    -   *Compressibility is the measure of the relative volume change of a fluid or solid in response to pressure changes.*
- **Density**
    -   *The density, or more precisely, the volumetric mass density, of a substance is its mass per unit volume.*
- **Duration**
    -   *Time is a dimension in which events can be ordered from the past through the present into the future, and also the measure of durations of events and the intervals between them.*
- **DynamicViscosity**
    -   *The dynamic (shear) viscosity of a fluid expresses its resistance to shearing flows, where adjacent layers move parallel to each other with different speeds*
- **ElectricAdmittance**
    -   *Electric admittance is a measure of how easily a circuit or device will allow a current to flow. It is defined as the inverse of impedance. The SI unit of admittance is the siemens (symbol S).*
- **ElectricCharge**
    -   *Electric charge is the physical property of matter that causes it to experience a force when placed in an electromagnetic field.*
- **ElectricChargeDensity**
    -   *In electromagnetism, charge density is a measure of the amount of electric charge per volume.*
- **ElectricConductance**
    -   *The electrical conductance of an electrical conductor is a measure of the easeness to pass an electric current through that conductor.*
- **ElectricConductivity**
    -   *Electrical conductivity or specific conductance is the reciprocal of electrical resistivity, and measures a material's ability to conduct an electric current.*
- **ElectricCurrent**
    -   *An electric current is a flow of electric charge. In electric circuits this charge is often carried by moving electrons in a wire. It can also be carried by ions in an electrolyte, or by both ions and electrons such as in a plasma.*
- **ElectricCurrentDensity**
    -   *In electromagnetism, current density is the electric current per unit area of cross section.*
- **ElectricCurrentGradient**
    -   *In electromagnetism, the current gradient describes how the current changes in time.*
- **ElectricField**
    -   *An electric field is a force field that surrounds electric charges that attracts or repels other electric charges.*
- **ElectricInductance**
    -   *Inductance is a property of an electrical conductor which opposes a change in current.*
- **ElectricPotential**
    -   *In classical electromagnetism, the electric potential (a scalar quantity denoted by Φ, ΦE or V and also called the electric field potential or the electrostatic potential) at a point is the amount of electric potential energy that a unitary point charge would have when located at that point.*
- **ElectricPotentialAc**
    -   *The Electric Potential of a system known to use Alternating Current.*
- **ElectricPotentialChangeRate**
    -   *ElectricPotential change rate is the ratio of the electric potential change to the time during which the change occurred (value of electric potential changes per unit time).*
- **ElectricPotentialDc**
    -   *The Electric Potential of a system known to use Direct Current.*
- **ElectricResistance**
    -   *The electrical resistance of an electrical conductor is the opposition to the passage of an electric current through that conductor.*
- **ElectricResistivity**
    -   *Electrical resistivity (also known as resistivity, specific electrical resistance, or volume resistivity) is a fundamental property that quantifies how strongly a given material opposes the flow of electric current.*
- **ElectricSurfaceChargeDensity**
    -   *In electromagnetism, surface charge density is a measure of the amount of electric charge per surface area.*
- **Energy**
    -   *The joule, symbol J, is a derived unit of energy, work, or amount of heat in the International System of Units. It is equal to the energy transferred (or work done) when applying a force of one newton through a distance of one metre (1 newton metre or N·m), or in passing an electric current of one ampere through a resistance of one ohm for one second. Many other units of energy are included. Please do not confuse this definition of the calorie with the one colloquially used by the food industry, the large calorie, which is equivalent to 1 kcal. Thermochemical definition of the calorie is used. For BTU, the IT definition is used.*
- **EnergyDensity**
    -   *Energy density is the amount of energy stored in a substance per unit volume and is measured in J/m³. It is sometimes confused with energy per unit mass which is properly called specific energy.*
- **Entropy**
    -   *Entropy is an important concept in the branch of science known as thermodynamics. The idea of "irreversibility" is central to the understanding of entropy.  It is often said that entropy is an expression of the disorder, or randomness of a system, or of our lack of information about it. Entropy is an extensive property. It has the dimension of energy divided by temperature, which has a unit of joules per kelvin (J/K) in the International System of Units*
- **Force**
    -   *In physics, a force is any influence that causes an object to undergo a certain change, either concerning its movement, direction, or geometrical construction. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate, or a flexible object to deform, or both. Force can also be described by intuitive concepts such as a push or a pull. A force has both magnitude and direction, making it a vector quantity. It is measured in the SI unit of newtons and represented by the symbol F.*
- **ForceChangeRate**
    -   *Force change rate is the ratio of the force change to the time during which the change occurred (value of force changes per unit time).*
- **ForcePerLength**
    -   *The magnitude of force per unit length.*
- **Frequency**
    -   *The number of occurrences of a repeating event per unit time.*
- **FuelEfficiency**
    -   *Fuel efficiency is a form of thermal efficiency, meaning the ratio from effort to result of a process that converts chemical potential energy contained in a carrier (fuel) into kinetic energy or work. Fuel economy is stated as "fuel consumption" in liters per 100 kilometers (L/100 km). In countries using non-metric system, fuel economy is expressed in miles per gallon (mpg) (imperial galon or US galon).*
- **HeatFlux**
    -   *Heat flux is the flow of energy per unit of area per unit of time*
- **HeatTransferCoefficient**
    -   *The heat transfer coefficient or film coefficient, or film effectiveness, in thermodynamics and in mechanics is the proportionality constant between the heat flux and the thermodynamic driving force for the flow of heat (i.e., the temperature difference, ΔT)*
- **Illuminance**
    -   *In photometry, illuminance is the total luminous flux incident on a surface, per unit area.*
- **Impulse**
    -   *In classical mechanics, impulse is the integral of a force, F, over the time interval, t, for which it acts. Impulse applied to an object produces an equivalent vector change in its linear momentum, also in the resultant direction.*
- **Information**
    -   *In computing and telecommunications, a unit of information is the capacity of some standard data storage system or communication channel, used to measure the capacities of other systems and channels. In information theory, units of information are also used to measure the information contents or entropy of random variables.*
- **Irradiance**
    -   *Irradiance is the intensity of ultraviolet (UV) or visible light incident on a surface.*
- **Irradiation**
    -   *Irradiation is the process by which an object is exposed to radiation. The exposure can originate from various sources, including natural sources.*
- **Jerk**
    -   *Jerk or Jolt, in physics, is the rate at which the acceleration of an object changes over time. The SI unit for jerk is the Meter per second cubed (m/s³). Jerks are vector quantities (they have magnitude and direction) and add according to the parallelogram law.*
- **KinematicViscosity**
    -   *The viscosity of a fluid is a measure of its resistance to gradual deformation by shear stress or tensile stress.*
- **LeakRate**
    -   *A leakage rate of QL = 1 Pa-m³/s is given when the pressure in a closed, evacuated container with a volume of 1 m³ rises by 1 Pa per second or when the pressure in the container drops by 1 Pa in the event of overpressure.*
- **Length**
    -   *Many different units of length have been used around the world. The main units in modern use are U.S. customary units in the United States and the Metric system elsewhere. British Imperial units are still used for some purposes in the United Kingdom and some other countries. The metric system is sub-divided into SI and non-SI units.*
- **Level**
    -   *Level is the logarithm of the ratio of a quantity Q to a reference value of that quantity, Q₀, expressed in dimensionless units.*
- **LinearDensity**
    -   *The Linear Density, or more precisely, the linear mass density, of a substance is its mass per unit length.  The term linear density is most often used when describing the characteristics of one-dimensional objects, although linear density can also be used to describe the density of a three-dimensional quantity along one particular dimension.*
- **LinearPowerDensity**
    -   *The Linear Power Density of a substance is its power per unit length.  The term linear density is most often used when describing the characteristics of one-dimensional objects, although linear density can also be used to describe the density of a three-dimensional quantity along one particular dimension.*
- **Luminance**
    -   *Luminance is a photometric measure of the luminous intensity per unit area of light travelling in a given direction.*
- **Luminosity**
    -   *Luminosity is an absolute measure of radiated electromagnetic power (light), the radiant power emitted by a light-emitting object.*
- **LuminousFlux**
    -   *In photometry, luminous flux or luminous power is the measure of the perceived power of light.*
- **LuminousIntensity**
    -   *In photometry, luminous intensity is a measure of the wavelength-weighted power emitted by a light source in a particular direction per unit solid angle, based on the luminosity function, a standardized model of the sensitivity of the human eye.*
- **MagneticField**
    -   *A magnetic field is a force field that is created by moving electric charges (electric currents) and magnetic dipoles, and exerts a force on other nearby moving charges and magnetic dipoles.*
- **MagneticFlux**
    -   *In physics, specifically electromagnetism, the magnetic flux through a surface is the surface integral of the normal component of the magnetic field B passing through that surface.*
- **Magnetization**
    -   *In classical electromagnetism, magnetization is the vector field that expresses the density of permanent or induced magnetic dipole moments in a magnetic material.*
- **Mass**
    -   *In physics, mass (from Greek μᾶζα "barley cake, lump [of dough]") is a property of a physical system or body, giving rise to the phenomena of the body's resistance to being accelerated by a force and the strength of its mutual gravitational attraction with other bodies. Instruments such as mass balances or scales use those phenomena to measure mass. The SI unit of mass is the kilogram (kg).*
- **MassConcentration**
    -   *In chemistry, the mass concentration ρi (or γi) is defined as the mass of a constituent mi divided by the volume of the mixture V*
- **MassFlow**
    -   *Mass flow is the ratio of the mass change to the time during which the change occurred (value of mass changes per unit time).*
- **MassFlux**
    -   *Mass flux is the mass flow rate per unit area.*
- **MassFraction**
    -   *The mass fraction is defined as the mass of a constituent divided by the total mass of the mixture.*
- **MassMomentOfInertia**
    -   *A property of body reflects how its mass is distributed with regard to an axis.*
- **Molality**
    -   *Molality is a measure of the amount of solute in a solution relative to a given mass of solvent.*
- **MolarEnergy**
    -   *Molar energy is the amount of energy stored in 1 mole of a substance.*
- **MolarEntropy**
    -   *Molar entropy is amount of energy required to increase temperature of 1 mole substance by 1 Kelvin.*
- **MolarFlow**
    -   *Molar flow is the ratio of the amount of substance change to the time during which the change occurred (value of amount of substance changes per unit time).*
- **MolarMass**
    -   *In chemistry, the molar mass M is a physical property defined as the mass of a given substance (chemical element or chemical compound) divided by the amount of substance.*
- **Molarity**
    -   *Molar concentration, also called molarity, amount concentration or substance concentration, is a measure of the concentration of a solute in a solution, or of any chemical species, in terms of amount of substance in a given volume.*
- **Permeability**
    -   *In electromagnetism, permeability is the measure of the ability of a material to support the formation of a magnetic field within itself.*
- **Permittivity**
    -   *In electromagnetism, permittivity is the measure of resistance that is encountered when forming an electric field in a particular medium.*
- **PorousMediumPermeability**
    -   *In fluid mechanics, permeability is the measure of the ability of a porous material to allow fluids to pass through it.*
- **Power**
    -   *In physics, power is the rate of doing work. It is equivalent to an amount of energy consumed per unit time.*
- **PowerDensity**
    -   *The amount of power in a volume.*
- **PowerRatio**
    -   *The strength of a signal expressed in decibels (dB) relative to one watt.*
- **Pressure**
    -   *Pressure (symbol: P or p) is the ratio of force to the area over which that force is distributed. Pressure is force per unit area applied in a direction perpendicular to the surface of an object. Gauge pressure (also spelled gage pressure)[a] is the pressure relative to the local atmospheric or ambient pressure. Pressure is measured in any unit of force divided by any unit of area. The SI unit of pressure is the newton per square metre, which is called the pascal (Pa) after the seventeenth-century philosopher and scientist Blaise Pascal. A pressure of 1 Pa is small; it approximately equals the pressure exerted by a dollar bill resting flat on a table. Everyday pressures are often stated in kilopascals (1 kPa = 1000 Pa).*
- **PressureChangeRate**
    -   *Pressure change rate is the ratio of the pressure change to the time during which the change occurred (value of pressure changes per unit time).*
- **RadiationEquivalentDose**
    -   *Equivalent dose is a dose quantity representing the stochastic health effects of low levels of ionizing radiation on the human body which represents the probability of radiation-induced cancer and genetic damage.*
- **RadiationExposure**
    -   *Radiation exposure is a measure of the ionization of air due to ionizing radiation from photons.*
- **Radioactivity**
    -   *Amount of ionizing radiation released when an element spontaneously emits energy as a result of the radioactive decay of an unstable atom per unit time.*
- **Ratio**
    -   *In mathematics, a ratio is a relationship between two numbers of the same kind (e.g., objects, persons, students, spoonfuls, units of whatever identical dimension), usually expressed as "a to b" or a:b, sometimes expressed arithmetically as a dimensionless quotient of the two that explicitly indicates how many times the first number contains the second (not necessarily an integer).*
- **RatioChangeRate**
    -   *The change in ratio per unit of time.*
- **ReactiveEnergy**
    -   *The Volt-ampere reactive hour (expressed as varh) is the reactive power of one Volt-ampere reactive produced in one hour.*
- **ReactivePower**
    -   *Volt-ampere reactive (var) is a unit by which reactive power is expressed in an AC electric power system. Reactive power exists in an AC circuit when the current and voltage are not in phase.*
- **ReciprocalArea**
    -   *Reciprocal area (Inverse-square) quantity is used to specify a physical quantity inversely proportional to the square of the distance.*
- **ReciprocalLength**
    -   *Reciprocal (Inverse) Length is used in various fields of science and mathematics. It is defined as the inverse value of a length unit.*
- **RelativeHumidity**
    -   *Relative humidity is a ratio of the actual water vapor present in the air to the maximum water vapor in the air at the given temperature.*
- **RotationalAcceleration**
    -   *Angular acceleration is the rate of change of rotational speed.*
- **RotationalSpeed**
    -   *Rotational speed (sometimes called speed of revolution) is the number of complete rotations, revolutions, cycles, or turns per time unit. Rotational speed is a cyclic frequency, measured in radians per second or in hertz in the SI System by scientists, or in revolutions per minute (rpm or min-1) or revolutions per second in everyday life. The symbol for rotational speed is ω (the Greek lowercase letter "omega").*
- **RotationalStiffness**
    -   *https://en.wikipedia.org/wiki/Stiffness#Rotational_stiffness*
- **RotationalStiffnessPerLength**
    -   *https://en.wikipedia.org/wiki/Stiffness#Rotational_stiffness*
- **Scalar**
    -   *A way of representing a number of items.*
- **SolidAngle**
    -   *In geometry, a solid angle is the two-dimensional angle in three-dimensional space that an object subtends at a point.*
- **SpecificEnergy**
    -   *The SpecificEnergy*
- **SpecificEntropy**
    -   *Specific entropy is an amount of energy required to raise temperature of a substance by 1 Kelvin per unit mass.*
- **SpecificFuelConsumption**
    -   *SFC is the fuel efficiency of an engine design with respect to thrust output*
- **SpecificVolume**
    -   *In thermodynamics, the specific volume of a substance is the ratio of the substance's volume to its mass. It is the reciprocal of density and an intrinsic property of matter as well.*
- **SpecificWeight**
    -   *The SpecificWeight, or more precisely, the volumetric weight density, of a substance is its weight per unit volume.*
- **Speed**
    -   *In everyday use and in kinematics, the speed of an object is the magnitude of its velocity (the rate of change of its position); it is thus a scalar quantity.[1] The average speed of an object in an interval of time is the distance travelled by the object divided by the duration of the interval;[2] the instantaneous speed is the limit of the average speed as the duration of the time interval approaches zero.*
- **StandardVolumeFlow**
    -   *The molar flow rate of a gas corrected to standardized conditions of temperature and pressure thus representing a fixed number of moles of gas regardless of composition and actual flow conditions.*
- **Temperature**
    -   *A temperature is a numerical measure of hot or cold. Its measurement is by detection of heat radiation or particle velocity or kinetic energy, or by the bulk behavior of a thermometric material. It may be calibrated in any of various temperature scales, Celsius, Fahrenheit, Kelvin, etc. The fundamental physical definition of temperature is provided by thermodynamics.*
- **TemperatureChangeRate**
    -   *Temperature change rate is the ratio of the temperature change to the time during which the change occurred (value of temperature changes per unit time).*
- **TemperatureDelta**
    -   *Difference between two temperatures. The conversions are different than for Temperature.*
- **TemperatureGradient**
    -   *The rate of change of temperature with displacement in a given direction (as with increase of height)*
- **ThermalConductivity**
    -   *Thermal conductivity is the property of a material to conduct heat.*
- **ThermalResistance**
    -   *Heat Transfer Coefficient or Thermal conductivity - indicates a materials ability to conduct heat.*
- **Torque**
    -   *Torque, moment or moment of force (see the terminology below), is the tendency of a force to rotate an object about an axis,[1] fulcrum, or pivot. Just as a force is a push or a pull, a torque can be thought of as a twist to an object. Mathematically, torque is defined as the cross product of the lever-arm distance and force, which tends to produce rotation. Loosely speaking, torque is a measure of the turning force on an object such as a bolt or a flywheel. For example, pushing or pulling the handle of a wrench connected to a nut or bolt produces a torque (turning force) that loosens or tightens the nut or bolt.*
- **TorquePerLength**
    -   *The magnitude of torque per unit length.*
- **Turbidity**
    -   *Turbidity is the cloudiness or haziness of a fluid caused by large numbers of individual particles that are generally invisible to the naked eye, similar to smoke in air. The measurement of turbidity is a key test of water quality.*
- **VitaminA**
    -   *Vitamin A: 1 IU is the biological equivalent of 0.3 µg retinol, or of 0.6 µg beta-carotene.*
- **Volume**
    -   *Volume is the quantity of three-dimensional space enclosed by some closed boundary, for example, the space that a substance (solid, liquid, gas, or plasma) or shape occupies or contains.[1] Volume is often quantified numerically using the SI derived unit, the cubic metre. The volume of a container is generally understood to be the capacity of the container, i. e. the amount of fluid (gas or liquid) that the container could hold, rather than the amount of space the container itself displaces.*
- **VolumeConcentration**
    -   *The volume concentration (not to be confused with volume fraction) is defined as the volume of a constituent divided by the total volume of the mixture.*
- **VolumeFlow**
    -   *In physics and engineering, in particular fluid dynamics and hydrometry, the volumetric flow rate, (also known as volume flow rate, rate of fluid flow or volume velocity) is the volume of fluid which passes through a given surface per unit time. The SI unit is m³/s (cubic meters per second). In US Customary Units and British Imperial Units, volumetric flow rate is often expressed as ft³/s (cubic feet per second). It is usually represented by the symbol Q.*
- **VolumeFlowPerArea**
    -   *The volumetric flow rate per area is the volume of fluid which passes through a given unit surface area per unit time.*
- **VolumePerLength**
    -   *Volume, typically of fluid, that a container can hold within a unit of length.*
- **VolumetricHeatCapacity**
    -   *The volumetric heat capacity is the amount of energy that must be added, in the form of heat, to one unit of volume of the material in order to cause an increase of one unit in its temperature.*
- **WarpingMomentOfInertia**
    -   *A geometric property of an area that is used to determine the warping stress.*


### Units.NET on other platforms

Get the same strongly typed units on other platforms, based on the same [unit definitions](/Common/UnitDefinitions).

| Language  | Name        | Package                                           | Repository                                           | Maintainers  |
|-----------|-------------|---------------------------------------------------|------------------------------------------------------|--------------|
| C#        | UnitsNet    | [nuget](https://www.nuget.org/packages/UnitsNet/) | [github](https://github.com/angularsen/UnitsNet)     | @angularsen  |
| Python    | unitsnet-py | [pypi](https://pypi.org/project/unitsnet-py)      | [github](https://github.com/haimkastner/unitsnet-py) | @haimkastner |
