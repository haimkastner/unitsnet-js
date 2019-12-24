export enum LuminousIntensityUnits {
    Candela
}

export class LuminousIntensity {
    private value: number;

    public constructor(value: number, fromUnit: LuminousIntensityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Candela(): number {
        return this.convertFromBase(LuminousIntensityUnits.Candela);
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
}
