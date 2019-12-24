export enum LapseRateUnits {
    DegreesCelciusPerKilometer
}

export class LapseRate {
    private value: number;

    public constructor(value: number, fromUnit: LapseRateUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get DegreesCelciusPerKilometer(): number {
        return this.convertFromBase(LapseRateUnits.DegreesCelciusPerKilometer);
    }

    public static FromDegreesCelciusPerKilometer(value: number): LapseRate {
        return new LapseRate(value, LapseRateUnits.DegreesCelciusPerKilometer);
    }

    private convertFromBase(toUnit: LapseRateUnits): number {

                switch (toUnit) {
                    
                case LapseRateUnits.DegreesCelciusPerKilometer:
                    return this.value;
                
                    default:
                        break;
                }
                return NaN;
            
    }

    private convertToBase(value: number, fromUnit: LapseRateUnits): number {

                switch (fromUnit) {
                    
                case LapseRateUnits.DegreesCelciusPerKilometer:
                    return value;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
