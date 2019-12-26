export enum BitRateUnits {
    BitsPerSecond,
    BytesPerSecond,
    KilobitPerSecond,
    MegabitPerSecond,
    GigabitPerSecond,
    TerabitPerSecond,
    PetabitPerSecond,
    ExabitPerSecond,
    KilobytePerSecond,
    MegabytePerSecond,
    GigabytePerSecond,
    TerabytePerSecond,
    PetabytePerSecond,
    ExabytePerSecond
}

export class BitRate {
    private value: number;
    private bitspersecondLazy: number | null = null;
    private bytespersecondLazy: number | null = null;
    private kilobitpersecondLazy: number | null = null;
    private megabitpersecondLazy: number | null = null;
    private gigabitpersecondLazy: number | null = null;
    private terabitpersecondLazy: number | null = null;
    private petabitpersecondLazy: number | null = null;
    private exabitpersecondLazy: number | null = null;
    private kilobytepersecondLazy: number | null = null;
    private megabytepersecondLazy: number | null = null;
    private gigabytepersecondLazy: number | null = null;
    private terabytepersecondLazy: number | null = null;
    private petabytepersecondLazy: number | null = null;
    private exabytepersecondLazy: number | null = null;

    public constructor(value: number, fromUnit: BitRateUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get BitsPerSecond(): number {
        if(this.bitspersecondLazy !== null){
            return this.bitspersecondLazy;
        }
        return this.bitspersecondLazy = this.convertFromBase(BitRateUnits.BitsPerSecond);
    }

    public get BytesPerSecond(): number {
        if(this.bytespersecondLazy !== null){
            return this.bytespersecondLazy;
        }
        return this.bytespersecondLazy = this.convertFromBase(BitRateUnits.BytesPerSecond);
    }

    public get KilobitPerSecond(): number {
        if(this.kilobitpersecondLazy !== null){
            return this.kilobitpersecondLazy;
        }
        return this.kilobitpersecondLazy = this.convertFromBase(BitRateUnits.KilobitPerSecond);
    }

    public get MegabitPerSecond(): number {
        if(this.megabitpersecondLazy !== null){
            return this.megabitpersecondLazy;
        }
        return this.megabitpersecondLazy = this.convertFromBase(BitRateUnits.MegabitPerSecond);
    }

    public get GigabitPerSecond(): number {
        if(this.gigabitpersecondLazy !== null){
            return this.gigabitpersecondLazy;
        }
        return this.gigabitpersecondLazy = this.convertFromBase(BitRateUnits.GigabitPerSecond);
    }

    public get TerabitPerSecond(): number {
        if(this.terabitpersecondLazy !== null){
            return this.terabitpersecondLazy;
        }
        return this.terabitpersecondLazy = this.convertFromBase(BitRateUnits.TerabitPerSecond);
    }

    public get PetabitPerSecond(): number {
        if(this.petabitpersecondLazy !== null){
            return this.petabitpersecondLazy;
        }
        return this.petabitpersecondLazy = this.convertFromBase(BitRateUnits.PetabitPerSecond);
    }

    public get ExabitPerSecond(): number {
        if(this.exabitpersecondLazy !== null){
            return this.exabitpersecondLazy;
        }
        return this.exabitpersecondLazy = this.convertFromBase(BitRateUnits.ExabitPerSecond);
    }

    public get KilobytePerSecond(): number {
        if(this.kilobytepersecondLazy !== null){
            return this.kilobytepersecondLazy;
        }
        return this.kilobytepersecondLazy = this.convertFromBase(BitRateUnits.KilobytePerSecond);
    }

    public get MegabytePerSecond(): number {
        if(this.megabytepersecondLazy !== null){
            return this.megabytepersecondLazy;
        }
        return this.megabytepersecondLazy = this.convertFromBase(BitRateUnits.MegabytePerSecond);
    }

    public get GigabytePerSecond(): number {
        if(this.gigabytepersecondLazy !== null){
            return this.gigabytepersecondLazy;
        }
        return this.gigabytepersecondLazy = this.convertFromBase(BitRateUnits.GigabytePerSecond);
    }

    public get TerabytePerSecond(): number {
        if(this.terabytepersecondLazy !== null){
            return this.terabytepersecondLazy;
        }
        return this.terabytepersecondLazy = this.convertFromBase(BitRateUnits.TerabytePerSecond);
    }

    public get PetabytePerSecond(): number {
        if(this.petabytepersecondLazy !== null){
            return this.petabytepersecondLazy;
        }
        return this.petabytepersecondLazy = this.convertFromBase(BitRateUnits.PetabytePerSecond);
    }

    public get ExabytePerSecond(): number {
        if(this.exabytepersecondLazy !== null){
            return this.exabytepersecondLazy;
        }
        return this.exabytepersecondLazy = this.convertFromBase(BitRateUnits.ExabytePerSecond);
    }

    public static FromBitsPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.BitsPerSecond);
    }

    public static FromBytesPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.BytesPerSecond);
    }

    public static FromKilobitPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.KilobitPerSecond);
    }

    public static FromMegabitPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.MegabitPerSecond);
    }

    public static FromGigabitPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.GigabitPerSecond);
    }

    public static FromTerabitPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.TerabitPerSecond);
    }

    public static FromPetabitPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.PetabitPerSecond);
    }

    public static FromExabitPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.ExabitPerSecond);
    }

    public static FromKilobytePerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.KilobytePerSecond);
    }

    public static FromMegabytePerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.MegabytePerSecond);
    }

    public static FromGigabytePerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.GigabytePerSecond);
    }

    public static FromTerabytePerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.TerabytePerSecond);
    }

    public static FromPetabytePerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.PetabytePerSecond);
    }

    public static FromExabytePerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.ExabytePerSecond);
    }

    private convertFromBase(toUnit: BitRateUnits): number {
        switch (toUnit) {
                
            case BitRateUnits.BitsPerSecond:
                return this.value;
            case BitRateUnits.BytesPerSecond:
                return this.value/8;
            case BitRateUnits.KilobitPerSecond:
                return (this.value) / 1000;
            case BitRateUnits.MegabitPerSecond:
                return (this.value) / 1000000;
            case BitRateUnits.GigabitPerSecond:
                return (this.value) / 1000000000;
            case BitRateUnits.TerabitPerSecond:
                return (this.value) / 1000000000000;
            case BitRateUnits.PetabitPerSecond:
                return (this.value) / 1000000000000000;
            case BitRateUnits.ExabitPerSecond:
                return (this.value) / 1000000000000000000;
            case BitRateUnits.KilobytePerSecond:
                return (this.value/8) / 1000;
            case BitRateUnits.MegabytePerSecond:
                return (this.value/8) / 1000000;
            case BitRateUnits.GigabytePerSecond:
                return (this.value/8) / 1000000000;
            case BitRateUnits.TerabytePerSecond:
                return (this.value/8) / 1000000000000;
            case BitRateUnits.PetabytePerSecond:
                return (this.value/8) / 1000000000000000;
            case BitRateUnits.ExabytePerSecond:
                return (this.value/8) / 1000000000000000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: BitRateUnits): number {
        switch (fromUnit) {
                
            case BitRateUnits.BitsPerSecond:
                return value;
            case BitRateUnits.BytesPerSecond:
                return value*8;
            case BitRateUnits.KilobitPerSecond:
                return (value) * 1000;
            case BitRateUnits.MegabitPerSecond:
                return (value) * 1000000;
            case BitRateUnits.GigabitPerSecond:
                return (value) * 1000000000;
            case BitRateUnits.TerabitPerSecond:
                return (value) * 1000000000000;
            case BitRateUnits.PetabitPerSecond:
                return (value) * 1000000000000000;
            case BitRateUnits.ExabitPerSecond:
                return (value) * 1000000000000000000;
            case BitRateUnits.KilobytePerSecond:
                return (value*8) * 1000;
            case BitRateUnits.MegabytePerSecond:
                return (value*8) * 1000000;
            case BitRateUnits.GigabytePerSecond:
                return (value*8) * 1000000000;
            case BitRateUnits.TerabytePerSecond:
                return (value*8) * 1000000000000;
            case BitRateUnits.PetabytePerSecond:
                return (value*8) * 1000000000000000;
            case BitRateUnits.ExabytePerSecond:
                return (value*8) * 1000000000000000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: BitRateUnits = BitRateUnits.BitsPerSecond): string {

        switch (toUnit) {
            
            case BitRateUnits.BitsPerSecond:
                return this.BitsPerSecond + ` bit/s`;
            case BitRateUnits.BytesPerSecond:
                return this.BytesPerSecond + ` B/s`;
            case BitRateUnits.KilobitPerSecond:
                return this.KilobitPerSecond + ` bit/s`;
            case BitRateUnits.MegabitPerSecond:
                return this.MegabitPerSecond + ` bit/s`;
            case BitRateUnits.GigabitPerSecond:
                return this.GigabitPerSecond + ` bit/s`;
            case BitRateUnits.TerabitPerSecond:
                return this.TerabitPerSecond + ` bit/s`;
            case BitRateUnits.PetabitPerSecond:
                return this.PetabitPerSecond + ` bit/s`;
            case BitRateUnits.ExabitPerSecond:
                return this.ExabitPerSecond + ` bit/s`;
            case BitRateUnits.KilobytePerSecond:
                return this.KilobytePerSecond + ` B/s`;
            case BitRateUnits.MegabytePerSecond:
                return this.MegabytePerSecond + ` B/s`;
            case BitRateUnits.GigabytePerSecond:
                return this.GigabytePerSecond + ` B/s`;
            case BitRateUnits.TerabytePerSecond:
                return this.TerabytePerSecond + ` B/s`;
            case BitRateUnits.PetabytePerSecond:
                return this.PetabytePerSecond + ` B/s`;
            case BitRateUnits.ExabytePerSecond:
                return this.ExabytePerSecond + ` B/s`;
        default:
            break;
        }
        return this.value.toString();
    }
}
