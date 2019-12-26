export enum RotationalStiffnessPerLengthUnits {
    NewtonMetersPerRadianPerMeter,
    KilonewtonMeterPerRadianPerMeter,
    MeganewtonMeterPerRadianPerMeter
}

export class RotationalStiffnessPerLength {
    private value: number;
    private newtonmetersperradianpermeterLazy: number | null = null;
    private kilonewtonmeterperradianpermeterLazy: number | null = null;
    private meganewtonmeterperradianpermeterLazy: number | null = null;

    public constructor(value: number, fromUnit: RotationalStiffnessPerLengthUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get NewtonMetersPerRadianPerMeter(): number {
        if(this.newtonmetersperradianpermeterLazy !== null){
            return this.newtonmetersperradianpermeterLazy;
        }
        return this.newtonmetersperradianpermeterLazy = this.convertFromBase(RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter);
    }

    public get KilonewtonMeterPerRadianPerMeter(): number {
        if(this.kilonewtonmeterperradianpermeterLazy !== null){
            return this.kilonewtonmeterperradianpermeterLazy;
        }
        return this.kilonewtonmeterperradianpermeterLazy = this.convertFromBase(RotationalStiffnessPerLengthUnits.KilonewtonMeterPerRadianPerMeter);
    }

    public get MeganewtonMeterPerRadianPerMeter(): number {
        if(this.meganewtonmeterperradianpermeterLazy !== null){
            return this.meganewtonmeterperradianpermeterLazy;
        }
        return this.meganewtonmeterperradianpermeterLazy = this.convertFromBase(RotationalStiffnessPerLengthUnits.MeganewtonMeterPerRadianPerMeter);
    }

    public static FromNewtonMetersPerRadianPerMeter(value: number): RotationalStiffnessPerLength {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter);
    }

    public static FromKilonewtonMeterPerRadianPerMeter(value: number): RotationalStiffnessPerLength {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.KilonewtonMeterPerRadianPerMeter);
    }

    public static FromMeganewtonMeterPerRadianPerMeter(value: number): RotationalStiffnessPerLength {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.MeganewtonMeterPerRadianPerMeter);
    }

    private convertFromBase(toUnit: RotationalStiffnessPerLengthUnits): number {
        switch (toUnit) {
                
            case RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter:
                return this.value;
            case RotationalStiffnessPerLengthUnits.KilonewtonMeterPerRadianPerMeter:
                return (this.value) / 1000;
            case RotationalStiffnessPerLengthUnits.MeganewtonMeterPerRadianPerMeter:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: RotationalStiffnessPerLengthUnits): number {
        switch (fromUnit) {
                
            case RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter:
                return value;
            case RotationalStiffnessPerLengthUnits.KilonewtonMeterPerRadianPerMeter:
                return (value) * 1000;
            case RotationalStiffnessPerLengthUnits.MeganewtonMeterPerRadianPerMeter:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: RotationalStiffnessPerLengthUnits = RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter): string {

        switch (toUnit) {
            
            case RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter:
                return this.NewtonMetersPerRadianPerMeter + ` N·m/rad/m`;
            case RotationalStiffnessPerLengthUnits.KilonewtonMeterPerRadianPerMeter:
                return this.KilonewtonMeterPerRadianPerMeter + ` N·m/rad/m`;
            case RotationalStiffnessPerLengthUnits.MeganewtonMeterPerRadianPerMeter:
                return this.MeganewtonMeterPerRadianPerMeter + ` N·m/rad/m`;
        default:
            break;
        }
        return this.value.toString();
    }
}
