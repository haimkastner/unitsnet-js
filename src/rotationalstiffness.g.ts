export enum RotationalStiffnessUnits {
    NewtonMetersPerRadian,
    Kilonewtonmetersperradian,
    Meganewtonmetersperradian
}

export class RotationalStiffness {
    private value: number;
    private newtonmetersperradianLazy: number | null = null;
    private kilonewtonmetersperradianLazy: number | null = null;
    private meganewtonmetersperradianLazy: number | null = null;

    public constructor(value: number, fromUnit: RotationalStiffnessUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get NewtonMetersPerRadian(): number {
        if(this.newtonmetersperradianLazy !== null){
            return this.newtonmetersperradianLazy;
        }
        return this.newtonmetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.NewtonMetersPerRadian);
    }

    public get Kilonewtonmetersperradian(): number {
        if(this.kilonewtonmetersperradianLazy !== null){
            return this.kilonewtonmetersperradianLazy;
        }
        return this.kilonewtonmetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.Kilonewtonmetersperradian);
    }

    public get Meganewtonmetersperradian(): number {
        if(this.meganewtonmetersperradianLazy !== null){
            return this.meganewtonmetersperradianLazy;
        }
        return this.meganewtonmetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.Meganewtonmetersperradian);
    }

    public static FromNewtonMetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.NewtonMetersPerRadian);
    }

    public static FromKilonewtonmetersperradian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.Kilonewtonmetersperradian);
    }

    public static FromMeganewtonmetersperradian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.Meganewtonmetersperradian);
    }

    private convertFromBase(toUnit: RotationalStiffnessUnits): number {
        switch (toUnit) {
                
            case RotationalStiffnessUnits.NewtonMetersPerRadian:
                return this.value;
            case RotationalStiffnessUnits.Kilonewtonmetersperradian:
                return (this.value) / 1000;
            case RotationalStiffnessUnits.Meganewtonmetersperradian:
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
            case RotationalStiffnessUnits.Kilonewtonmetersperradian:
                return (value) * 1000;
            case RotationalStiffnessUnits.Meganewtonmetersperradian:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
