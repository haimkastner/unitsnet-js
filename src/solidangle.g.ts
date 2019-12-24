export enum SolidAngleUnits {
    Steradians
}

export class SolidAngle {
    private value: number;

    public constructor(value: number, fromUnit: SolidAngleUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Steradians(): number {
        return this.convertFromBase(SolidAngleUnits.Steradians);
    }

    public static FromSteradians(value: number): SolidAngle {
        return new SolidAngle(value, SolidAngleUnits.Steradians);
    }

    private convertFromBase(toUnit: SolidAngleUnits): number {

            switch (toUnit) {
                
                case SolidAngleUnits.Steradians:
                    return this.value;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: SolidAngleUnits): number {

                switch (fromUnit) {
                    
                case SolidAngleUnits.Steradians:
                    return value;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
