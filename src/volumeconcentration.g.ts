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
    private decimalfractionsLazy: number | null = null;
    private litersperliterLazy: number | null = null;
    private literspermililiterLazy: number | null = null;
    private percentLazy: number | null = null;
    private partsperthousandLazy: number | null = null;
    private partspermillionLazy: number | null = null;
    private partsperbillionLazy: number | null = null;
    private partspertrillionLazy: number | null = null;
    private picolitersperliterLazy: number | null = null;
    private nanolitersperliterLazy: number | null = null;
    private microlitersperliterLazy: number | null = null;
    private centilitersperliterLazy: number | null = null;
    private decilitersperliterLazy: number | null = null;
    private picoliterspermililiterLazy: number | null = null;
    private nanoliterspermililiterLazy: number | null = null;
    private microliterspermililiterLazy: number | null = null;
    private centiliterspermililiterLazy: number | null = null;
    private deciliterspermililiterLazy: number | null = null;

    public constructor(value: number, fromUnit: VolumeConcentrationUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get DecimalFractions(): number {
        if(this.decimalfractionsLazy !== null){
            return this.decimalfractionsLazy;
        }
        return this.decimalfractionsLazy = this.convertFromBase(VolumeConcentrationUnits.DecimalFractions);
    }

    public get LitersPerLiter(): number {
        if(this.litersperliterLazy !== null){
            return this.litersperliterLazy;
        }
        return this.litersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.LitersPerLiter);
    }

    public get LitersPerMililiter(): number {
        if(this.literspermililiterLazy !== null){
            return this.literspermililiterLazy;
        }
        return this.literspermililiterLazy = this.convertFromBase(VolumeConcentrationUnits.LitersPerMililiter);
    }

    public get Percent(): number {
        if(this.percentLazy !== null){
            return this.percentLazy;
        }
        return this.percentLazy = this.convertFromBase(VolumeConcentrationUnits.Percent);
    }

    public get PartsPerThousand(): number {
        if(this.partsperthousandLazy !== null){
            return this.partsperthousandLazy;
        }
        return this.partsperthousandLazy = this.convertFromBase(VolumeConcentrationUnits.PartsPerThousand);
    }

    public get PartsPerMillion(): number {
        if(this.partspermillionLazy !== null){
            return this.partspermillionLazy;
        }
        return this.partspermillionLazy = this.convertFromBase(VolumeConcentrationUnits.PartsPerMillion);
    }

    public get PartsPerBillion(): number {
        if(this.partsperbillionLazy !== null){
            return this.partsperbillionLazy;
        }
        return this.partsperbillionLazy = this.convertFromBase(VolumeConcentrationUnits.PartsPerBillion);
    }

    public get PartsPerTrillion(): number {
        if(this.partspertrillionLazy !== null){
            return this.partspertrillionLazy;
        }
        return this.partspertrillionLazy = this.convertFromBase(VolumeConcentrationUnits.PartsPerTrillion);
    }

    public get Picolitersperliter(): number {
        if(this.picolitersperliterLazy !== null){
            return this.picolitersperliterLazy;
        }
        return this.picolitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.Picolitersperliter);
    }

    public get Nanolitersperliter(): number {
        if(this.nanolitersperliterLazy !== null){
            return this.nanolitersperliterLazy;
        }
        return this.nanolitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.Nanolitersperliter);
    }

    public get Microlitersperliter(): number {
        if(this.microlitersperliterLazy !== null){
            return this.microlitersperliterLazy;
        }
        return this.microlitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.Microlitersperliter);
    }

    public get Centilitersperliter(): number {
        if(this.centilitersperliterLazy !== null){
            return this.centilitersperliterLazy;
        }
        return this.centilitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.Centilitersperliter);
    }

    public get Decilitersperliter(): number {
        if(this.decilitersperliterLazy !== null){
            return this.decilitersperliterLazy;
        }
        return this.decilitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.Decilitersperliter);
    }

    public get Picoliterspermililiter(): number {
        if(this.picoliterspermililiterLazy !== null){
            return this.picoliterspermililiterLazy;
        }
        return this.picoliterspermililiterLazy = this.convertFromBase(VolumeConcentrationUnits.Picoliterspermililiter);
    }

    public get Nanoliterspermililiter(): number {
        if(this.nanoliterspermililiterLazy !== null){
            return this.nanoliterspermililiterLazy;
        }
        return this.nanoliterspermililiterLazy = this.convertFromBase(VolumeConcentrationUnits.Nanoliterspermililiter);
    }

    public get Microliterspermililiter(): number {
        if(this.microliterspermililiterLazy !== null){
            return this.microliterspermililiterLazy;
        }
        return this.microliterspermililiterLazy = this.convertFromBase(VolumeConcentrationUnits.Microliterspermililiter);
    }

    public get Centiliterspermililiter(): number {
        if(this.centiliterspermililiterLazy !== null){
            return this.centiliterspermililiterLazy;
        }
        return this.centiliterspermililiterLazy = this.convertFromBase(VolumeConcentrationUnits.Centiliterspermililiter);
    }

    public get Deciliterspermililiter(): number {
        if(this.deciliterspermililiterLazy !== null){
            return this.deciliterspermililiterLazy;
        }
        return this.deciliterspermililiterLazy = this.convertFromBase(VolumeConcentrationUnits.Deciliterspermililiter);
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
                return (this.value*1e-3) / 1e-12;
            case VolumeConcentrationUnits.Nanoliterspermililiter:
                return (this.value*1e-3) / 1e-9;
            case VolumeConcentrationUnits.Microliterspermililiter:
                return (this.value*1e-3) / 0.000001;
            case VolumeConcentrationUnits.Centiliterspermililiter:
                return (this.value*1e-3) / 0.01;
            case VolumeConcentrationUnits.Deciliterspermililiter:
                return (this.value*1e-3) / 0.1;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: VolumeConcentrationUnits): number {
        switch (fromUnit) {
                
            case VolumeConcentrationUnits.DecimalFractions:
                return value;
            case VolumeConcentrationUnits.LitersPerLiter:
                return value;
            case VolumeConcentrationUnits.LitersPerMililiter:
                return value/1e-3;
            case VolumeConcentrationUnits.Percent:
                return value/1e2;
            case VolumeConcentrationUnits.PartsPerThousand:
                return value/1e3;
            case VolumeConcentrationUnits.PartsPerMillion:
                return value/1e6;
            case VolumeConcentrationUnits.PartsPerBillion:
                return value/1e9;
            case VolumeConcentrationUnits.PartsPerTrillion:
                return value/1e12;
            case VolumeConcentrationUnits.Picolitersperliter:
                return (value) * 1e-12;
            case VolumeConcentrationUnits.Nanolitersperliter:
                return (value) * 1e-9;
            case VolumeConcentrationUnits.Microlitersperliter:
                return (value) * 0.000001;
            case VolumeConcentrationUnits.Centilitersperliter:
                return (value) * 0.01;
            case VolumeConcentrationUnits.Decilitersperliter:
                return (value) * 0.1;
            case VolumeConcentrationUnits.Picoliterspermililiter:
                return (value/1e-3) * 1e-12;
            case VolumeConcentrationUnits.Nanoliterspermililiter:
                return (value/1e-3) * 1e-9;
            case VolumeConcentrationUnits.Microliterspermililiter:
                return (value/1e-3) * 0.000001;
            case VolumeConcentrationUnits.Centiliterspermililiter:
                return (value/1e-3) * 0.01;
            case VolumeConcentrationUnits.Deciliterspermililiter:
                return (value/1e-3) * 0.1;
            default:
                break;
        }
        return NaN;
    }
}
