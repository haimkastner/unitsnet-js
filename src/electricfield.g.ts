export enum ElectricFieldUnits {
    VoltsPerMeter
}

export class ElectricField {
    private value: number;
    private voltspermeterLazy: number | null = null;

    public constructor(value: number, fromUnit: ElectricFieldUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get VoltsPerMeter(): number {
        if(this.voltspermeterLazy !== null){
            return this.voltspermeterLazy;
        }
        return this.voltspermeterLazy = this.convertFromBase(ElectricFieldUnits.VoltsPerMeter);
    }

    public static FromVoltsPerMeter(value: number): ElectricField {
        return new ElectricField(value, ElectricFieldUnits.VoltsPerMeter);
    }

    private convertFromBase(toUnit: ElectricFieldUnits): number {
        switch (toUnit) {
                
            case ElectricFieldUnits.VoltsPerMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricFieldUnits): number {
        switch (fromUnit) {
                
            case ElectricFieldUnits.VoltsPerMeter:
                return value;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: ElectricFieldUnits = ElectricFieldUnits.VoltsPerMeter): string {

        switch (toUnit) {
            
            case ElectricFieldUnits.VoltsPerMeter:
                return this.VoltsPerMeter + ` V/m`;
        default:
            break;
        }
        return this.value.toString();
    }
}
