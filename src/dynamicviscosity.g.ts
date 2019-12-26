export enum DynamicViscosityUnits {
    NewtonSecondsPerMeterSquared,
    PascalSeconds,
    Poise,
    Reyns,
    PoundsForceSecondPerSquareInch,
    PoundsForceSecondPerSquareFoot,
    MicropascalSeconds,
    Centipoise
}

export class DynamicViscosity {
    private value: number;
    private newtonsecondspermetersquaredLazy: number | null = null;
    private pascalsecondsLazy: number | null = null;
    private poiseLazy: number | null = null;
    private reynsLazy: number | null = null;
    private poundsforcesecondpersquareinchLazy: number | null = null;
    private poundsforcesecondpersquarefootLazy: number | null = null;
    private micropascalsecondsLazy: number | null = null;
    private centipoiseLazy: number | null = null;

    public constructor(value: number, fromUnit: DynamicViscosityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get NewtonSecondsPerMeterSquared(): number {
        if(this.newtonsecondspermetersquaredLazy !== null){
            return this.newtonsecondspermetersquaredLazy;
        }
        return this.newtonsecondspermetersquaredLazy = this.convertFromBase(DynamicViscosityUnits.NewtonSecondsPerMeterSquared);
    }

    public get PascalSeconds(): number {
        if(this.pascalsecondsLazy !== null){
            return this.pascalsecondsLazy;
        }
        return this.pascalsecondsLazy = this.convertFromBase(DynamicViscosityUnits.PascalSeconds);
    }

    public get Poise(): number {
        if(this.poiseLazy !== null){
            return this.poiseLazy;
        }
        return this.poiseLazy = this.convertFromBase(DynamicViscosityUnits.Poise);
    }

    public get Reyns(): number {
        if(this.reynsLazy !== null){
            return this.reynsLazy;
        }
        return this.reynsLazy = this.convertFromBase(DynamicViscosityUnits.Reyns);
    }

    public get PoundsForceSecondPerSquareInch(): number {
        if(this.poundsforcesecondpersquareinchLazy !== null){
            return this.poundsforcesecondpersquareinchLazy;
        }
        return this.poundsforcesecondpersquareinchLazy = this.convertFromBase(DynamicViscosityUnits.PoundsForceSecondPerSquareInch);
    }

    public get PoundsForceSecondPerSquareFoot(): number {
        if(this.poundsforcesecondpersquarefootLazy !== null){
            return this.poundsforcesecondpersquarefootLazy;
        }
        return this.poundsforcesecondpersquarefootLazy = this.convertFromBase(DynamicViscosityUnits.PoundsForceSecondPerSquareFoot);
    }

    public get MicropascalSeconds(): number {
        if(this.micropascalsecondsLazy !== null){
            return this.micropascalsecondsLazy;
        }
        return this.micropascalsecondsLazy = this.convertFromBase(DynamicViscosityUnits.MicropascalSeconds);
    }

    public get Centipoise(): number {
        if(this.centipoiseLazy !== null){
            return this.centipoiseLazy;
        }
        return this.centipoiseLazy = this.convertFromBase(DynamicViscosityUnits.Centipoise);
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

    public static FromMicropascalSeconds(value: number): DynamicViscosity {
        return new DynamicViscosity(value, DynamicViscosityUnits.MicropascalSeconds);
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
                return this.value*10;
            case DynamicViscosityUnits.Reyns:
                return this.value / 6.8947572931683613e3;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareInch:
                return this.value / 6.8947572931683613e3;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareFoot:
                return this.value / 4.7880258980335843e1;
            case DynamicViscosityUnits.MicropascalSeconds:
                return (this.value) / 0.000001;
            case DynamicViscosityUnits.Centipoise:
                return (this.value*10) / 0.01;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: DynamicViscosityUnits): number {
        switch (fromUnit) {
                
            case DynamicViscosityUnits.NewtonSecondsPerMeterSquared:
                return value;
            case DynamicViscosityUnits.PascalSeconds:
                return value;
            case DynamicViscosityUnits.Poise:
                return value/10;
            case DynamicViscosityUnits.Reyns:
                return value * 6.8947572931683613e3;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareInch:
                return value * 6.8947572931683613e3;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareFoot:
                return value * 4.7880258980335843e1;
            case DynamicViscosityUnits.MicropascalSeconds:
                return (value) * 0.000001;
            case DynamicViscosityUnits.Centipoise:
                return (value/10) * 0.01;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: DynamicViscosityUnits = DynamicViscosityUnits.NewtonSecondsPerMeterSquared): string {

        switch (toUnit) {
            
            case DynamicViscosityUnits.NewtonSecondsPerMeterSquared:
                return this.NewtonSecondsPerMeterSquared + ` Ns/m²`;
            case DynamicViscosityUnits.PascalSeconds:
                return this.PascalSeconds + ` Pa·s`;
            case DynamicViscosityUnits.Poise:
                return this.Poise + ` P`;
            case DynamicViscosityUnits.Reyns:
                return this.Reyns + ` reyn`;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareInch:
                return this.PoundsForceSecondPerSquareInch + ` lbf·s/in²`;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareFoot:
                return this.PoundsForceSecondPerSquareFoot + ` lbf·s/ft²`;
            case DynamicViscosityUnits.MicropascalSeconds:
                return this.MicropascalSeconds + ` Pa·s`;
            case DynamicViscosityUnits.Centipoise:
                return this.Centipoise + ` P`;
        default:
            break;
        }
        return this.value.toString();
    }
}
