export enum RotationalStiffnessPerLengthUnits {
    NewtonMetersPerRadianPerMeter,
    KilonewtonMetersPerRadianPerMeter,
    MeganewtonMetersPerRadianPerMeter
}

export class RotationalStiffnessPerLength {
    private value: number;
    private newtonmetersperradianpermeterLazy: number | null = null;
    private kilonewtonmetersperradianpermeterLazy: number | null = null;
    private meganewtonmetersperradianpermeterLazy: number | null = null;

    public constructor(value: number, fromUnit: RotationalStiffnessPerLengthUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get NewtonMetersPerRadianPerMeter(): number {
        if(this.newtonmetersperradianpermeterLazy !== null){
            return this.newtonmetersperradianpermeterLazy;
        }
        return this.newtonmetersperradianpermeterLazy = this.convertFromBase(RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter);
    }

    public get KilonewtonMetersPerRadianPerMeter(): number {
        if(this.kilonewtonmetersperradianpermeterLazy !== null){
            return this.kilonewtonmetersperradianpermeterLazy;
        }
        return this.kilonewtonmetersperradianpermeterLazy = this.convertFromBase(RotationalStiffnessPerLengthUnits.KilonewtonMetersPerRadianPerMeter);
    }

    public get MeganewtonMetersPerRadianPerMeter(): number {
        if(this.meganewtonmetersperradianpermeterLazy !== null){
            return this.meganewtonmetersperradianpermeterLazy;
        }
        return this.meganewtonmetersperradianpermeterLazy = this.convertFromBase(RotationalStiffnessPerLengthUnits.MeganewtonMetersPerRadianPerMeter);
    }

    public static FromNewtonMetersPerRadianPerMeter(value: number): RotationalStiffnessPerLength {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter);
    }

    public static FromKilonewtonMetersPerRadianPerMeter(value: number): RotationalStiffnessPerLength {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.KilonewtonMetersPerRadianPerMeter);
    }

    public static FromMeganewtonMetersPerRadianPerMeter(value: number): RotationalStiffnessPerLength {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.MeganewtonMetersPerRadianPerMeter);
    }

    private convertFromBase(toUnit: RotationalStiffnessPerLengthUnits): number {
        switch (toUnit) {
                
            case RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter:
                return this.value;
            case RotationalStiffnessPerLengthUnits.KilonewtonMetersPerRadianPerMeter:
                return (this.value) / 1000;
            case RotationalStiffnessPerLengthUnits.MeganewtonMetersPerRadianPerMeter:
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
            case RotationalStiffnessPerLengthUnits.KilonewtonMetersPerRadianPerMeter:
                return (value) * 1000;
            case RotationalStiffnessPerLengthUnits.MeganewtonMetersPerRadianPerMeter:
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
            case RotationalStiffnessPerLengthUnits.KilonewtonMetersPerRadianPerMeter:
                return this.KilonewtonMetersPerRadianPerMeter + ` N·m/rad/m`;
            case RotationalStiffnessPerLengthUnits.MeganewtonMetersPerRadianPerMeter:
                return this.MeganewtonMetersPerRadianPerMeter + ` N·m/rad/m`;
        default:
            break;
        }
        return this.value.toString();
    }
}
