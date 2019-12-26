export enum LuminousIntensityUnits {
    Candela
}

export class LuminousIntensity {
    private value: number;
    private candelaLazy: number | null = null;

    public constructor(value: number, fromUnit: LuminousIntensityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Candela(): number {
        if(this.candelaLazy !== null){
            return this.candelaLazy;
        }
        return this.candelaLazy = this.convertFromBase(LuminousIntensityUnits.Candela);
    }

    public static FromCandela(value: number): LuminousIntensity {
        return new LuminousIntensity(value, LuminousIntensityUnits.Candela);
    }

    private convertFromBase(toUnit: LuminousIntensityUnits): number {
        switch (toUnit) {
                
            case LuminousIntensityUnits.Candela:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: LuminousIntensityUnits): number {
        switch (fromUnit) {
                
            case LuminousIntensityUnits.Candela:
                return value;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: LuminousIntensityUnits = LuminousIntensityUnits.Candela): string {

        switch (toUnit) {
            
            case LuminousIntensityUnits.Candela:
                return this.Candela + ` cd`;
        default:
            break;
        }
        return this.value.toString();
    }
}
