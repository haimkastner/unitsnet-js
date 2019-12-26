export enum RotationalStiffnessPerLengthUnits {
    NewtonMetersPerRadianPerMeter,
    Kilonewtonmetersperradianpermeter,
    Meganewtonmetersperradianpermeter
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

    public get Kilonewtonmetersperradianpermeter(): number {
        if(this.kilonewtonmetersperradianpermeterLazy !== null){
            return this.kilonewtonmetersperradianpermeterLazy;
        }
        return this.kilonewtonmetersperradianpermeterLazy = this.convertFromBase(RotationalStiffnessPerLengthUnits.Kilonewtonmetersperradianpermeter);
    }

    public get Meganewtonmetersperradianpermeter(): number {
        if(this.meganewtonmetersperradianpermeterLazy !== null){
            return this.meganewtonmetersperradianpermeterLazy;
        }
        return this.meganewtonmetersperradianpermeterLazy = this.convertFromBase(RotationalStiffnessPerLengthUnits.Meganewtonmetersperradianpermeter);
    }

    public static FromNewtonMetersPerRadianPerMeter(value: number): RotationalStiffnessPerLength {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter);
    }

    public static FromKilonewtonmetersperradianpermeter(value: number): RotationalStiffnessPerLength {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.Kilonewtonmetersperradianpermeter);
    }

    public static FromMeganewtonmetersperradianpermeter(value: number): RotationalStiffnessPerLength {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.Meganewtonmetersperradianpermeter);
    }

    private convertFromBase(toUnit: RotationalStiffnessPerLengthUnits): number {
        switch (toUnit) {
                
            case RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter:
                return this.value;
            case RotationalStiffnessPerLengthUnits.Kilonewtonmetersperradianpermeter:
                return (this.value) / 1000;
            case RotationalStiffnessPerLengthUnits.Meganewtonmetersperradianpermeter:
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
            case RotationalStiffnessPerLengthUnits.Kilonewtonmetersperradianpermeter:
                return (value) * 1000;
            case RotationalStiffnessPerLengthUnits.Meganewtonmetersperradianpermeter:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
