export enum MagneticFieldUnits {
    Teslas,
    Nanoteslas,
    Microteslas
}

export class MagneticField {
    private value: number;

    public constructor(value: number, fromUnit: MagneticFieldUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Teslas(): number {
        return this.convertFromBase(MagneticFieldUnits.Teslas);
    }

    public get Nanoteslas(): number {
        return this.convertFromBase(MagneticFieldUnits.Nanoteslas);
    }

    public get Microteslas(): number {
        return this.convertFromBase(MagneticFieldUnits.Microteslas);
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
                    return (this.value) * 1e-9;
                
                case MagneticFieldUnits.Microteslas:
                    return (this.value) * 0.000001;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: MagneticFieldUnits): number {

                switch (fromUnit) {
                    
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
}
