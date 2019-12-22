export enum DynamicViscosityUnits {
    NewtonSecondsPerMeterSquared,
    PascalSeconds,
    Poise,
    Reyns,
    PoundsForceSecondPerSquareInch,
    PoundsForceSecondPerSquareFoot,
    Micropascalseconds,
    Centipoise
}

export class DynamicViscosity {
    private value: number;

    public constructor(value: number, fromUnit: DynamicViscosityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get NewtonSecondsPerMeterSquared(): number {
        return this.convertFromBase(DynamicViscosityUnits.NewtonSecondsPerMeterSquared);
    }

    public get PascalSeconds(): number {
        return this.convertFromBase(DynamicViscosityUnits.PascalSeconds);
    }

    public get Poise(): number {
        return this.convertFromBase(DynamicViscosityUnits.Poise);
    }

    public get Reyns(): number {
        return this.convertFromBase(DynamicViscosityUnits.Reyns);
    }

    public get PoundsForceSecondPerSquareInch(): number {
        return this.convertFromBase(DynamicViscosityUnits.PoundsForceSecondPerSquareInch);
    }

    public get PoundsForceSecondPerSquareFoot(): number {
        return this.convertFromBase(DynamicViscosityUnits.PoundsForceSecondPerSquareFoot);
    }

    public get Micropascalseconds(): number {
        return this.convertFromBase(DynamicViscosityUnits.Micropascalseconds);
    }

    public get Centipoise(): number {
        return this.convertFromBase(DynamicViscosityUnits.Centipoise);
    }

    public static FromNewtonSecondsPerMeterSquared(value: number): DynamicViscosity {
        return new DynamicViscosity(value, DynamicViscosityUnits.NewtonSecondsPerMeterSquared);
    }

    public static FromPascalSeconds(value: number): DynamicViscosity {
        return new DynamicViscosity(value, DynamicViscosityUnits.PascalSeconds);
    }

    public static FromPoise(value: number): DynamicViscosity {
        return new DynamicViscosity(value, DynamicViscosityUnits.Poise);
    }

    public static FromReyns(value: number): DynamicViscosity {
        return new DynamicViscosity(value, DynamicViscosityUnits.Reyns);
    }

    public static FromPoundsForceSecondPerSquareInch(value: number): DynamicViscosity {
        return new DynamicViscosity(value, DynamicViscosityUnits.PoundsForceSecondPerSquareInch);
    }

    public static FromPoundsForceSecondPerSquareFoot(value: number): DynamicViscosity {
        return new DynamicViscosity(value, DynamicViscosityUnits.PoundsForceSecondPerSquareFoot);
    }

    public static FromMicropascalseconds(value: number): DynamicViscosity {
        return new DynamicViscosity(value, DynamicViscosityUnits.Micropascalseconds);
    }

    public static FromCentipoise(value: number): DynamicViscosity {
        return new DynamicViscosity(value, DynamicViscosityUnits.Centipoise);
    }

    private convertFromBase(toUnit: DynamicViscosityUnits): number {

            switch (toUnit) {
                
                case DynamicViscosityUnits.NewtonSecondsPerMeterSquared:
                    return this.value;
                
                case DynamicViscosityUnits.PascalSeconds:
                    return this.value;
                
                case DynamicViscosityUnits.Poise:
                    return this.value/10;
                
                case DynamicViscosityUnits.Reyns:
                    return this.value * 6.8947572931683613e3;
                
                case DynamicViscosityUnits.PoundsForceSecondPerSquareInch:
                    return this.value * 6.8947572931683613e3;
                
                case DynamicViscosityUnits.PoundsForceSecondPerSquareFoot:
                    return this.value * 4.7880258980335843e1;
                
                case DynamicViscosityUnits.Micropascalseconds:
                    return (this.value) * 0.000001;
                
                case DynamicViscosityUnits.Centipoise:
                    return (this.value*10) * 0.01;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: DynamicViscosityUnits): number {

                switch (fromUnit) {
                    
                case DynamicViscosityUnits.NewtonSecondsPerMeterSquared:
                    return this.value;
                
                case DynamicViscosityUnits.PascalSeconds:
                    return this.value;
                
                case DynamicViscosityUnits.Poise:
                    return this.value*10;
                
                case DynamicViscosityUnits.Reyns:
                    return this.value / 6.8947572931683613e3;
                
                case DynamicViscosityUnits.PoundsForceSecondPerSquareInch:
                    return this.value / 6.8947572931683613e3;
                
                case DynamicViscosityUnits.PoundsForceSecondPerSquareFoot:
                    return this.value / 4.7880258980335843e1;
                
                case DynamicViscosityUnits.Micropascalseconds:
                    return (this.value) / 0.000001;
                
                case DynamicViscosityUnits.Centipoise:
                    return (this.value/10) / 0.01;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
