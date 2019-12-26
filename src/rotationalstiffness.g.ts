export enum RotationalStiffnessUnits {
    NewtonMetersPerRadian,
    KilonewtonMeterPerRadian,
    MeganewtonMeterPerRadian
}

export class RotationalStiffness {
    private value: number;
    private newtonmetersperradianLazy: number | null = null;
    private kilonewtonmeterperradianLazy: number | null = null;
    private meganewtonmeterperradianLazy: number | null = null;

    public constructor(value: number, fromUnit: RotationalStiffnessUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get NewtonMetersPerRadian(): number {
        if(this.newtonmetersperradianLazy !== null){
            return this.newtonmetersperradianLazy;
        }
        return this.newtonmetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.NewtonMetersPerRadian);
    }

    public get KilonewtonMeterPerRadian(): number {
        if(this.kilonewtonmeterperradianLazy !== null){
            return this.kilonewtonmeterperradianLazy;
        }
        return this.kilonewtonmeterperradianLazy = this.convertFromBase(RotationalStiffnessUnits.KilonewtonMeterPerRadian);
    }

    public get MeganewtonMeterPerRadian(): number {
        if(this.meganewtonmeterperradianLazy !== null){
            return this.meganewtonmeterperradianLazy;
        }
        return this.meganewtonmeterperradianLazy = this.convertFromBase(RotationalStiffnessUnits.MeganewtonMeterPerRadian);
    }

    public static FromNewtonMetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.NewtonMetersPerRadian);
    }

    public static FromKilonewtonMeterPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.KilonewtonMeterPerRadian);
    }

    public static FromMeganewtonMeterPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MeganewtonMeterPerRadian);
    }

    private convertFromBase(toUnit: RotationalStiffnessUnits): number {
        switch (toUnit) {
                
            case RotationalStiffnessUnits.NewtonMetersPerRadian:
                return this.value;
            case RotationalStiffnessUnits.KilonewtonMeterPerRadian:
                return (this.value) / 1000;
            case RotationalStiffnessUnits.MeganewtonMeterPerRadian:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: RotationalStiffnessUnits): number {
        switch (fromUnit) {
                
            case RotationalStiffnessUnits.NewtonMetersPerRadian:
                return value;
            case RotationalStiffnessUnits.KilonewtonMeterPerRadian:
                return (value) * 1000;
            case RotationalStiffnessUnits.MeganewtonMeterPerRadian:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: RotationalStiffnessUnits = RotationalStiffnessUnits.NewtonMetersPerRadian): string {

        switch (toUnit) {
            
            case RotationalStiffnessUnits.NewtonMetersPerRadian:
                return this.NewtonMetersPerRadian + ` N·m/rad`;
            case RotationalStiffnessUnits.KilonewtonMeterPerRadian:
                return this.KilonewtonMeterPerRadian + ` N·m/rad`;
            case RotationalStiffnessUnits.MeganewtonMeterPerRadian:
                return this.MeganewtonMeterPerRadian + ` N·m/rad`;
        default:
            break;
        }
        return this.value.toString();
    }
}
