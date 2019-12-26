export enum RotationalStiffnessUnits {
    NewtonMetersPerRadian,
    KilonewtonMetersPerRadian,
    MeganewtonMetersPerRadian
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

    public get KilonewtonMetersPerRadian(): number {
        if(this.kilonewtonmetersperradianLazy !== null){
            return this.kilonewtonmetersperradianLazy;
        }
        return this.kilonewtonmetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.KilonewtonMetersPerRadian);
    }

    public get MeganewtonMetersPerRadian(): number {
        if(this.meganewtonmetersperradianLazy !== null){
            return this.meganewtonmetersperradianLazy;
        }
        return this.meganewtonmetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.MeganewtonMetersPerRadian);
    }

    public static FromNewtonMetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.NewtonMetersPerRadian);
    }

    public static FromKilonewtonMetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.KilonewtonMetersPerRadian);
    }

    public static FromMeganewtonMetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MeganewtonMetersPerRadian);
    }

    private convertFromBase(toUnit: RotationalStiffnessUnits): number {
        switch (toUnit) {
                
            case RotationalStiffnessUnits.NewtonMetersPerRadian:
                return this.value;
            case RotationalStiffnessUnits.KilonewtonMetersPerRadian:
                return (this.value) / 1000;
            case RotationalStiffnessUnits.MeganewtonMetersPerRadian:
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
            case RotationalStiffnessUnits.KilonewtonMetersPerRadian:
                return (value) * 1000;
            case RotationalStiffnessUnits.MeganewtonMetersPerRadian:
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
            case RotationalStiffnessUnits.KilonewtonMetersPerRadian:
                return this.KilonewtonMetersPerRadian + ` N·m/rad`;
            case RotationalStiffnessUnits.MeganewtonMetersPerRadian:
                return this.MeganewtonMetersPerRadian + ` N·m/rad`;
        default:
            break;
        }
        return this.value.toString();
    }
}
