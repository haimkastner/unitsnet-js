export enum MagneticFieldUnits {
    Teslas,
    Nanoteslas,
    Microteslas
}

export class MagneticField {
    private value: number;
    private teslasLazy: number | null = null;
    private nanoteslasLazy: number | null = null;
    private microteslasLazy: number | null = null;

    public constructor(value: number, fromUnit: MagneticFieldUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Teslas(): number {
        if(this.teslasLazy !== null){
            return this.teslasLazy;
        }
        return this.teslasLazy = this.convertFromBase(MagneticFieldUnits.Teslas);
    }

    public get Nanoteslas(): number {
        if(this.nanoteslasLazy !== null){
            return this.nanoteslasLazy;
        }
        return this.nanoteslasLazy = this.convertFromBase(MagneticFieldUnits.Nanoteslas);
    }

    public get Microteslas(): number {
        if(this.microteslasLazy !== null){
            return this.microteslasLazy;
        }
        return this.microteslasLazy = this.convertFromBase(MagneticFieldUnits.Microteslas);
    }

    public static FromTeslas(value: number): MagneticField {
        return new MagneticField(value, MagneticFieldUnits.Teslas);
    }

    public static FromNanoteslas(value: number): MagneticField {
        return new MagneticField(value, MagneticFieldUnits.Nanoteslas);
    }

    public static FromMicroteslas(value: number): MagneticField {
        return new MagneticField(value, MagneticFieldUnits.Microteslas);
    }

    private convertFromBase(toUnit: MagneticFieldUnits): number {
        switch (toUnit) {
                
            case MagneticFieldUnits.Teslas:
                return this.value;
            case MagneticFieldUnits.Nanoteslas:
                return (this.value) / 1e-9;
            case MagneticFieldUnits.Microteslas:
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
            case MagneticFieldUnits.Nanoteslas:
                return (value) * 1e-9;
            case MagneticFieldUnits.Microteslas:
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
            case MagneticFieldUnits.Nanoteslas:
                return this.Nanoteslas + ` T`;
            case MagneticFieldUnits.Microteslas:
                return this.Microteslas + ` T`;
        default:
            break;
        }
        return this.value.toString();
    }
}
