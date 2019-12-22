export enum MagnetizationUnits {
    AmperesPerMeter
}

export class Magnetization {
    private value: number;

    public constructor(value: number, fromUnit: MagnetizationUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get AmperesPerMeter(): number {
        return this.convertFromBase(MagnetizationUnits.AmperesPerMeter);
    }

    public static FromAmperesPerMeter(value: number): Magnetization {
        return new Magnetization(value, MagnetizationUnits.AmperesPerMeter);
    }

    private convertFromBase(toUnit: MagnetizationUnits): number {

            switch (toUnit) {
                
                case MagnetizationUnits.AmperesPerMeter:
                    return this.value;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: MagnetizationUnits): number {

                switch (fromUnit) {
                    
                case MagnetizationUnits.AmperesPerMeter:
                    return this.value;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
