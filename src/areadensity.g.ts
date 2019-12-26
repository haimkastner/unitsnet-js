export enum AreaDensityUnits {
    KilogramsPerSquareMeter
}

export class AreaDensity {
    private value: number;
    private kilogramspersquaremeterLazy: number | null = null;

    public constructor(value: number, fromUnit: AreaDensityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get KilogramsPerSquareMeter(): number {
        if(this.kilogramspersquaremeterLazy !== null){
            return this.kilogramspersquaremeterLazy;
        }
        return this.kilogramspersquaremeterLazy = this.convertFromBase(AreaDensityUnits.KilogramsPerSquareMeter);
    }

    public static FromKilogramsPerSquareMeter(value: number): AreaDensity {
        return new AreaDensity(value, AreaDensityUnits.KilogramsPerSquareMeter);
    }

    private convertFromBase(toUnit: AreaDensityUnits): number {
        switch (toUnit) {
                
            case AreaDensityUnits.KilogramsPerSquareMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: AreaDensityUnits): number {
        switch (fromUnit) {
                
            case AreaDensityUnits.KilogramsPerSquareMeter:
                return value;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: AreaDensityUnits = AreaDensityUnits.KilogramsPerSquareMeter): string {

        switch (toUnit) {
            
            case AreaDensityUnits.KilogramsPerSquareMeter:
                return this.KilogramsPerSquareMeter + ` kg/m²`;
        default:
            break;
        }
        return this.value.toString();
    }
}
