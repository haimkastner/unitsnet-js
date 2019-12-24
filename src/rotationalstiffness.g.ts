export enum RotationalStiffnessUnits {
    NewtonMetersPerRadian,
    Kilonewtonmetersperradian,
    Meganewtonmetersperradian
}

export class RotationalStiffness {
    private value: number;

    public constructor(value: number, fromUnit: RotationalStiffnessUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get NewtonMetersPerRadian(): number {
        return this.convertFromBase(RotationalStiffnessUnits.NewtonMetersPerRadian);
    }

    public get Kilonewtonmetersperradian(): number {
        return this.convertFromBase(RotationalStiffnessUnits.Kilonewtonmetersperradian);
    }

    public get Meganewtonmetersperradian(): number {
        return this.convertFromBase(RotationalStiffnessUnits.Meganewtonmetersperradian);
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
                    return (this.value) * 1000;
                
                case RotationalStiffnessUnits.Meganewtonmetersperradian:
                    return (this.value) * 1000000;
                
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
                    return (value) / 1000;
                
                case RotationalStiffnessUnits.Meganewtonmetersperradian:
                    return (value) / 1000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
