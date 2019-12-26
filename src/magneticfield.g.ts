export enum MagneticFieldUnits {
    Teslas,
    Nanotesla,
    Microtesla
}

export class MagneticField {
    private value: number;
    private teslasLazy: number | null = null;
    private nanoteslaLazy: number | null = null;
    private microteslaLazy: number | null = null;

    public constructor(value: number, fromUnit: MagneticFieldUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Teslas(): number {
        if(this.teslasLazy !== null){
            return this.teslasLazy;
        }
        return this.teslasLazy = this.convertFromBase(MagneticFieldUnits.Teslas);
    }

    public get Nanotesla(): number {
        if(this.nanoteslaLazy !== null){
            return this.nanoteslaLazy;
        }
        return this.nanoteslaLazy = this.convertFromBase(MagneticFieldUnits.Nanotesla);
    }

    public get Microtesla(): number {
        if(this.microteslaLazy !== null){
            return this.microteslaLazy;
        }
        return this.microteslaLazy = this.convertFromBase(MagneticFieldUnits.Microtesla);
    }

    public static FromTeslas(value: number): MagneticField {
        return new MagneticField(value, MagneticFieldUnits.Teslas);
    }

    public static FromNanotesla(value: number): MagneticField {
        return new MagneticField(value, MagneticFieldUnits.Nanotesla);
    }

    public static FromMicrotesla(value: number): MagneticField {
        return new MagneticField(value, MagneticFieldUnits.Microtesla);
    }

    private convertFromBase(toUnit: MagneticFieldUnits): number {
        switch (toUnit) {
                
            case MagneticFieldUnits.Teslas:
                return this.value;
            case MagneticFieldUnits.Nanotesla:
                return (this.value) / 1e-9;
            case MagneticFieldUnits.Microtesla:
                return (this.value) / 0.000001;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: MagneticFieldUnits): number {
        switch (fromUnit) {
                
            case MagneticFieldUnits.Teslas:
                return value;
            case MagneticFieldUnits.Nanotesla:
                return (value) * 1e-9;
            case MagneticFieldUnits.Microtesla:
                return (value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: MagneticFieldUnits = MagneticFieldUnits.Teslas): string {

        switch (toUnit) {
            
            case MagneticFieldUnits.Teslas:
                return this.Teslas + ` T`;
            case MagneticFieldUnits.Nanotesla:
                return this.Nanotesla + ` T`;
            case MagneticFieldUnits.Microtesla:
                return this.Microtesla + ` T`;
        default:
            break;
        }
        return this.value.toString();
    }
}
