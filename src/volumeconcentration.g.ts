export enum VolumeConcentrationUnits {
    DecimalFractions,
    LitersPerLiter,
    LitersPerMililiter,
    Percent,
    PartsPerThousand,
    PartsPerMillion,
    PartsPerBillion,
    PartsPerTrillion,
    Picolitersperliter,
    Nanolitersperliter,
    Microlitersperliter,
    Centilitersperliter,
    Decilitersperliter,
    Picoliterspermililiter,
    Nanoliterspermililiter,
    Microliterspermililiter,
    Centiliterspermililiter,
    Deciliterspermililiter
}

export class VolumeConcentration {
    private value: number;

    public constructor(value: number, fromUnit: VolumeConcentrationUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get DecimalFractions(): number {
        return this.convertFromBase(VolumeConcentrationUnits.DecimalFractions);
    }

    public get LitersPerLiter(): number {
        return this.convertFromBase(VolumeConcentrationUnits.LitersPerLiter);
    }

    public get LitersPerMililiter(): number {
        return this.convertFromBase(VolumeConcentrationUnits.LitersPerMililiter);
    }

    public get Percent(): number {
        return this.convertFromBase(VolumeConcentrationUnits.Percent);
    }

    public get PartsPerThousand(): number {
        return this.convertFromBase(VolumeConcentrationUnits.PartsPerThousand);
    }

    public get PartsPerMillion(): number {
        return this.convertFromBase(VolumeConcentrationUnits.PartsPerMillion);
    }

    public get PartsPerBillion(): number {
        return this.convertFromBase(VolumeConcentrationUnits.PartsPerBillion);
    }

    public get PartsPerTrillion(): number {
        return this.convertFromBase(VolumeConcentrationUnits.PartsPerTrillion);
    }

    public get Picolitersperliter(): number {
        return this.convertFromBase(VolumeConcentrationUnits.Picolitersperliter);
    }

    public get Nanolitersperliter(): number {
        return this.convertFromBase(VolumeConcentrationUnits.Nanolitersperliter);
    }

    public get Microlitersperliter(): number {
        return this.convertFromBase(VolumeConcentrationUnits.Microlitersperliter);
    }

    public get Centilitersperliter(): number {
        return this.convertFromBase(VolumeConcentrationUnits.Centilitersperliter);
    }

    public get Decilitersperliter(): number {
        return this.convertFromBase(VolumeConcentrationUnits.Decilitersperliter);
    }

    public get Picoliterspermililiter(): number {
        return this.convertFromBase(VolumeConcentrationUnits.Picoliterspermililiter);
    }

    public get Nanoliterspermililiter(): number {
        return this.convertFromBase(VolumeConcentrationUnits.Nanoliterspermililiter);
    }

    public get Microliterspermililiter(): number {
        return this.convertFromBase(VolumeConcentrationUnits.Microliterspermililiter);
    }

    public get Centiliterspermililiter(): number {
        return this.convertFromBase(VolumeConcentrationUnits.Centiliterspermililiter);
    }

    public get Deciliterspermililiter(): number {
        return this.convertFromBase(VolumeConcentrationUnits.Deciliterspermililiter);
    }

    public static FromDecimalFractions(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.DecimalFractions);
    }

    public static FromLitersPerLiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.LitersPerLiter);
    }

    public static FromLitersPerMililiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.LitersPerMililiter);
    }

    public static FromPercent(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.Percent);
    }

    public static FromPartsPerThousand(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.PartsPerThousand);
    }

    public static FromPartsPerMillion(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.PartsPerMillion);
    }

    public static FromPartsPerBillion(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.PartsPerBillion);
    }

    public static FromPartsPerTrillion(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.PartsPerTrillion);
    }

    public static FromPicolitersperliter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.Picolitersperliter);
    }

    public static FromNanolitersperliter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.Nanolitersperliter);
    }

    public static FromMicrolitersperliter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.Microlitersperliter);
    }

    public static FromCentilitersperliter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.Centilitersperliter);
    }

    public static FromDecilitersperliter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.Decilitersperliter);
    }

    public static FromPicoliterspermililiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.Picoliterspermililiter);
    }

    public static FromNanoliterspermililiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.Nanoliterspermililiter);
    }

    public static FromMicroliterspermililiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.Microliterspermililiter);
    }

    public static FromCentiliterspermililiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.Centiliterspermililiter);
    }

    public static FromDeciliterspermililiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.Deciliterspermililiter);
    }

    private convertFromBase(toUnit: VolumeConcentrationUnits): number {

            switch (toUnit) {
                
                case VolumeConcentrationUnits.DecimalFractions:
                    return this.value;
                
                case VolumeConcentrationUnits.LitersPerLiter:
                    return this.value;
                
                case VolumeConcentrationUnits.LitersPerMililiter:
                    return this.value/1e-3;
                
                case VolumeConcentrationUnits.Percent:
                    return this.value/1e2;
                
                case VolumeConcentrationUnits.PartsPerThousand:
                    return this.value/1e3;
                
                case VolumeConcentrationUnits.PartsPerMillion:
                    return this.value/1e6;
                
                case VolumeConcentrationUnits.PartsPerBillion:
                    return this.value/1e9;
                
                case VolumeConcentrationUnits.PartsPerTrillion:
                    return this.value/1e12;
                
                case VolumeConcentrationUnits.Picolitersperliter:
                    return (this.value) * 1e-12;
                
                case VolumeConcentrationUnits.Nanolitersperliter:
                    return (this.value) * 1e-9;
                
                case VolumeConcentrationUnits.Microlitersperliter:
                    return (this.value) * 0.000001;
                
                case VolumeConcentrationUnits.Centilitersperliter:
                    return (this.value) * 0.01;
                
                case VolumeConcentrationUnits.Decilitersperliter:
                    return (this.value) * 0.1;
                
                case VolumeConcentrationUnits.Picoliterspermililiter:
                    return (this.value*1e-3) * 1e-12;
                
                case VolumeConcentrationUnits.Nanoliterspermililiter:
                    return (this.value*1e-3) * 1e-9;
                
                case VolumeConcentrationUnits.Microliterspermililiter:
                    return (this.value*1e-3) * 0.000001;
                
                case VolumeConcentrationUnits.Centiliterspermililiter:
                    return (this.value*1e-3) * 0.01;
                
                case VolumeConcentrationUnits.Deciliterspermililiter:
                    return (this.value*1e-3) * 0.1;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: VolumeConcentrationUnits): number {

                switch (fromUnit) {
                    
                case VolumeConcentrationUnits.DecimalFractions:
                    return this.value;
                
                case VolumeConcentrationUnits.LitersPerLiter:
                    return this.value;
                
                case VolumeConcentrationUnits.LitersPerMililiter:
                    return this.value*1e-3;
                
                case VolumeConcentrationUnits.Percent:
                    return this.value*1e2;
                
                case VolumeConcentrationUnits.PartsPerThousand:
                    return this.value*1e3;
                
                case VolumeConcentrationUnits.PartsPerMillion:
                    return this.value*1e6;
                
                case VolumeConcentrationUnits.PartsPerBillion:
                    return this.value*1e9;
                
                case VolumeConcentrationUnits.PartsPerTrillion:
                    return this.value*1e12;
                
                case VolumeConcentrationUnits.Picolitersperliter:
                    return (this.value) / 1e-12;
                
                case VolumeConcentrationUnits.Nanolitersperliter:
                    return (this.value) / 1e-9;
                
                case VolumeConcentrationUnits.Microlitersperliter:
                    return (this.value) / 0.000001;
                
                case VolumeConcentrationUnits.Centilitersperliter:
                    return (this.value) / 0.01;
                
                case VolumeConcentrationUnits.Decilitersperliter:
                    return (this.value) / 0.1;
                
                case VolumeConcentrationUnits.Picoliterspermililiter:
                    return (this.value/1e-3) / 1e-12;
                
                case VolumeConcentrationUnits.Nanoliterspermililiter:
                    return (this.value/1e-3) / 1e-9;
                
                case VolumeConcentrationUnits.Microliterspermililiter:
                    return (this.value/1e-3) / 0.000001;
                
                case VolumeConcentrationUnits.Centiliterspermililiter:
                    return (this.value/1e-3) / 0.01;
                
                case VolumeConcentrationUnits.Deciliterspermililiter:
                    return (this.value/1e-3) / 0.1;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
