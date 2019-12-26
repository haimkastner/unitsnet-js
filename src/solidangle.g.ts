export enum SolidAngleUnits {
    Steradians
}

export class SolidAngle {
    private value: number;
    private steradiansLazy: number | null = null;

    public constructor(value: number, fromUnit: SolidAngleUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Steradians(): number {
        if(this.steradiansLazy !== null){
            return this.steradiansLazy;
        }
        return this.steradiansLazy = this.convertFromBase(SolidAngleUnits.Steradians);
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

    public toString(toUnit: SolidAngleUnits = SolidAngleUnits.Steradians): string {

        switch (toUnit) {
            
            case SolidAngleUnits.Steradians:
                return this.Steradians + ` sr`;
        default:
            break;
        }
        return this.value.toString();
    }
}
