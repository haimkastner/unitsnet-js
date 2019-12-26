export enum VolumeConcentrationUnits {
    DecimalFractions,
    LitersPerLiter,
    LitersPerMililiter,
    Percent,
    PartsPerThousand,
    PartsPerMillion,
    PartsPerBillion,
    PartsPerTrillion,
    PicolitersPerLiter,
    NanolitersPerLiter,
    MicrolitersPerLiter,
    CentilitersPerLiter,
    DecilitersPerLiter,
    PicolitersPerMililiter,
    NanolitersPerMililiter,
    MicrolitersPerMililiter,
    CentilitersPerMililiter,
    DecilitersPerMililiter
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

    public get PicolitersPerLiter(): number {
        if(this.picolitersperliterLazy !== null){
            return this.picolitersperliterLazy;
        }
        return this.picolitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.PicolitersPerLiter);
    }

    public get NanolitersPerLiter(): number {
        if(this.nanolitersperliterLazy !== null){
            return this.nanolitersperliterLazy;
        }
        return this.nanolitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.NanolitersPerLiter);
    }

    public get MicrolitersPerLiter(): number {
        if(this.microlitersperliterLazy !== null){
            return this.microlitersperliterLazy;
        }
        return this.microlitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.MicrolitersPerLiter);
    }

    public get CentilitersPerLiter(): number {
        if(this.centilitersperliterLazy !== null){
            return this.centilitersperliterLazy;
        }
        return this.centilitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.CentilitersPerLiter);
    }

    public get DecilitersPerLiter(): number {
        if(this.decilitersperliterLazy !== null){
            return this.decilitersperliterLazy;
        }
        return this.decilitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.DecilitersPerLiter);
    }

    public get PicolitersPerMililiter(): number {
        if(this.picoliterspermililiterLazy !== null){
            return this.picoliterspermililiterLazy;
        }
        return this.picoliterspermililiterLazy = this.convertFromBase(VolumeConcentrationUnits.PicolitersPerMililiter);
    }

    public get NanolitersPerMililiter(): number {
        if(this.nanoliterspermililiterLazy !== null){
            return this.nanoliterspermililiterLazy;
        }
        return this.nanoliterspermililiterLazy = this.convertFromBase(VolumeConcentrationUnits.NanolitersPerMililiter);
    }

    public get MicrolitersPerMililiter(): number {
        if(this.microliterspermililiterLazy !== null){
            return this.microliterspermililiterLazy;
        }
        return this.microliterspermililiterLazy = this.convertFromBase(VolumeConcentrationUnits.MicrolitersPerMililiter);
    }

    public get CentilitersPerMililiter(): number {
        if(this.centiliterspermililiterLazy !== null){
            return this.centiliterspermililiterLazy;
        }
        return this.centiliterspermililiterLazy = this.convertFromBase(VolumeConcentrationUnits.CentilitersPerMililiter);
    }

    public get DecilitersPerMililiter(): number {
        if(this.deciliterspermililiterLazy !== null){
            return this.deciliterspermililiterLazy;
        }
        return this.deciliterspermililiterLazy = this.convertFromBase(VolumeConcentrationUnits.DecilitersPerMililiter);
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

    public static FromPicolitersPerLiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.PicolitersPerLiter);
    }

    public static FromNanolitersPerLiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.NanolitersPerLiter);
    }

    public static FromMicrolitersPerLiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.MicrolitersPerLiter);
    }

    public static FromCentilitersPerLiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.CentilitersPerLiter);
    }

    public static FromDecilitersPerLiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.DecilitersPerLiter);
    }

    public static FromPicolitersPerMililiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.PicolitersPerMililiter);
    }

    public static FromNanolitersPerMililiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.NanolitersPerMililiter);
    }

    public static FromMicrolitersPerMililiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.MicrolitersPerMililiter);
    }

    public static FromCentilitersPerMililiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.CentilitersPerMililiter);
    }

    public static FromDecilitersPerMililiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.DecilitersPerMililiter);
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
            case VolumeConcentrationUnits.PicolitersPerLiter:
                return (this.value) / 1e-12;
            case VolumeConcentrationUnits.NanolitersPerLiter:
                return (this.value) / 1e-9;
            case VolumeConcentrationUnits.MicrolitersPerLiter:
                return (this.value) / 0.000001;
            case VolumeConcentrationUnits.CentilitersPerLiter:
                return (this.value) / 0.01;
            case VolumeConcentrationUnits.DecilitersPerLiter:
                return (this.value) / 0.1;
            case VolumeConcentrationUnits.PicolitersPerMililiter:
                return (this.value*1e-3) / 1e-12;
            case VolumeConcentrationUnits.NanolitersPerMililiter:
                return (this.value*1e-3) / 1e-9;
            case VolumeConcentrationUnits.MicrolitersPerMililiter:
                return (this.value*1e-3) / 0.000001;
            case VolumeConcentrationUnits.CentilitersPerMililiter:
                return (this.value*1e-3) / 0.01;
            case VolumeConcentrationUnits.DecilitersPerMililiter:
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
            case VolumeConcentrationUnits.PicolitersPerLiter:
                return (value) * 1e-12;
            case VolumeConcentrationUnits.NanolitersPerLiter:
                return (value) * 1e-9;
            case VolumeConcentrationUnits.MicrolitersPerLiter:
                return (value) * 0.000001;
            case VolumeConcentrationUnits.CentilitersPerLiter:
                return (value) * 0.01;
            case VolumeConcentrationUnits.DecilitersPerLiter:
                return (value) * 0.1;
            case VolumeConcentrationUnits.PicolitersPerMililiter:
                return (value/1e-3) * 1e-12;
            case VolumeConcentrationUnits.NanolitersPerMililiter:
                return (value/1e-3) * 1e-9;
            case VolumeConcentrationUnits.MicrolitersPerMililiter:
                return (value/1e-3) * 0.000001;
            case VolumeConcentrationUnits.CentilitersPerMililiter:
                return (value/1e-3) * 0.01;
            case VolumeConcentrationUnits.DecilitersPerMililiter:
                return (value/1e-3) * 0.1;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: VolumeConcentrationUnits = VolumeConcentrationUnits.DecimalFractions): string {

        switch (toUnit) {
            
            case VolumeConcentrationUnits.DecimalFractions:
                return this.DecimalFractions + ` `;
            case VolumeConcentrationUnits.LitersPerLiter:
                return this.LitersPerLiter + ` L/L`;
            case VolumeConcentrationUnits.LitersPerMililiter:
                return this.LitersPerMililiter + ` L/mL`;
            case VolumeConcentrationUnits.Percent:
                return this.Percent + ` %`;
            case VolumeConcentrationUnits.PartsPerThousand:
                return this.PartsPerThousand + ` ‰`;
            case VolumeConcentrationUnits.PartsPerMillion:
                return this.PartsPerMillion + ` ppm`;
            case VolumeConcentrationUnits.PartsPerBillion:
                return this.PartsPerBillion + ` ppb`;
            case VolumeConcentrationUnits.PartsPerTrillion:
                return this.PartsPerTrillion + ` ppt`;
            case VolumeConcentrationUnits.PicolitersPerLiter:
                return this.PicolitersPerLiter + ` L/L`;
            case VolumeConcentrationUnits.NanolitersPerLiter:
                return this.NanolitersPerLiter + ` L/L`;
            case VolumeConcentrationUnits.MicrolitersPerLiter:
                return this.MicrolitersPerLiter + ` L/L`;
            case VolumeConcentrationUnits.CentilitersPerLiter:
                return this.CentilitersPerLiter + ` L/L`;
            case VolumeConcentrationUnits.DecilitersPerLiter:
                return this.DecilitersPerLiter + ` L/L`;
            case VolumeConcentrationUnits.PicolitersPerMililiter:
                return this.PicolitersPerMililiter + ` L/mL`;
            case VolumeConcentrationUnits.NanolitersPerMililiter:
                return this.NanolitersPerMililiter + ` L/mL`;
            case VolumeConcentrationUnits.MicrolitersPerMililiter:
                return this.MicrolitersPerMililiter + ` L/mL`;
            case VolumeConcentrationUnits.CentilitersPerMililiter:
                return this.CentilitersPerMililiter + ` L/mL`;
            case VolumeConcentrationUnits.DecilitersPerMililiter:
                return this.DecilitersPerMililiter + ` L/mL`;
        default:
            break;
        }
        return this.value.toString();
    }
}
