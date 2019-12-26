export enum BitRateUnits {
    BitsPerSecond,
    BytesPerSecond,
    KilobitsPerSecond,
    MegabitsPerSecond,
    GigabitsPerSecond,
    TerabitsPerSecond,
    PetabitsPerSecond,
    ExabitsPerSecond,
    KilobytesPerSecond,
    MegabytesPerSecond,
    GigabytesPerSecond,
    TerabytesPerSecond,
    PetabytesPerSecond,
    ExabytesPerSecond
}

export class BitRate {
    private value: number;
    private bitspersecondLazy: number | null = null;
    private bytespersecondLazy: number | null = null;
    private kilobitspersecondLazy: number | null = null;
    private megabitspersecondLazy: number | null = null;
    private gigabitspersecondLazy: number | null = null;
    private terabitspersecondLazy: number | null = null;
    private petabitspersecondLazy: number | null = null;
    private exabitspersecondLazy: number | null = null;
    private kilobytespersecondLazy: number | null = null;
    private megabytespersecondLazy: number | null = null;
    private gigabytespersecondLazy: number | null = null;
    private terabytespersecondLazy: number | null = null;
    private petabytespersecondLazy: number | null = null;
    private exabytespersecondLazy: number | null = null;

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

    public get KilobitsPerSecond(): number {
        if(this.kilobitspersecondLazy !== null){
            return this.kilobitspersecondLazy;
        }
        return this.kilobitspersecondLazy = this.convertFromBase(BitRateUnits.KilobitsPerSecond);
    }

    public get MegabitsPerSecond(): number {
        if(this.megabitspersecondLazy !== null){
            return this.megabitspersecondLazy;
        }
        return this.megabitspersecondLazy = this.convertFromBase(BitRateUnits.MegabitsPerSecond);
    }

    public get GigabitsPerSecond(): number {
        if(this.gigabitspersecondLazy !== null){
            return this.gigabitspersecondLazy;
        }
        return this.gigabitspersecondLazy = this.convertFromBase(BitRateUnits.GigabitsPerSecond);
    }

    public get TerabitsPerSecond(): number {
        if(this.terabitspersecondLazy !== null){
            return this.terabitspersecondLazy;
        }
        return this.terabitspersecondLazy = this.convertFromBase(BitRateUnits.TerabitsPerSecond);
    }

    public get PetabitsPerSecond(): number {
        if(this.petabitspersecondLazy !== null){
            return this.petabitspersecondLazy;
        }
        return this.petabitspersecondLazy = this.convertFromBase(BitRateUnits.PetabitsPerSecond);
    }

    public get ExabitsPerSecond(): number {
        if(this.exabitspersecondLazy !== null){
            return this.exabitspersecondLazy;
        }
        return this.exabitspersecondLazy = this.convertFromBase(BitRateUnits.ExabitsPerSecond);
    }

    public get KilobytesPerSecond(): number {
        if(this.kilobytespersecondLazy !== null){
            return this.kilobytespersecondLazy;
        }
        return this.kilobytespersecondLazy = this.convertFromBase(BitRateUnits.KilobytesPerSecond);
    }

    public get MegabytesPerSecond(): number {
        if(this.megabytespersecondLazy !== null){
            return this.megabytespersecondLazy;
        }
        return this.megabytespersecondLazy = this.convertFromBase(BitRateUnits.MegabytesPerSecond);
    }

    public get GigabytesPerSecond(): number {
        if(this.gigabytespersecondLazy !== null){
            return this.gigabytespersecondLazy;
        }
        return this.gigabytespersecondLazy = this.convertFromBase(BitRateUnits.GigabytesPerSecond);
    }

    public get TerabytesPerSecond(): number {
        if(this.terabytespersecondLazy !== null){
            return this.terabytespersecondLazy;
        }
        return this.terabytespersecondLazy = this.convertFromBase(BitRateUnits.TerabytesPerSecond);
    }

    public get PetabytesPerSecond(): number {
        if(this.petabytespersecondLazy !== null){
            return this.petabytespersecondLazy;
        }
        return this.petabytespersecondLazy = this.convertFromBase(BitRateUnits.PetabytesPerSecond);
    }

    public get ExabytesPerSecond(): number {
        if(this.exabytespersecondLazy !== null){
            return this.exabytespersecondLazy;
        }
        return this.exabytespersecondLazy = this.convertFromBase(BitRateUnits.ExabytesPerSecond);
    }

    public static FromBitsPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.BitsPerSecond);
    }

    public static FromBytesPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.BytesPerSecond);
    }

    public static FromKilobitsPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.KilobitsPerSecond);
    }

    public static FromMegabitsPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.MegabitsPerSecond);
    }

    public static FromGigabitsPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.GigabitsPerSecond);
    }

    public static FromTerabitsPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.TerabitsPerSecond);
    }

    public static FromPetabitsPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.PetabitsPerSecond);
    }

    public static FromExabitsPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.ExabitsPerSecond);
    }

    public static FromKilobytesPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.KilobytesPerSecond);
    }

    public static FromMegabytesPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.MegabytesPerSecond);
    }

    public static FromGigabytesPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.GigabytesPerSecond);
    }

    public static FromTerabytesPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.TerabytesPerSecond);
    }

    public static FromPetabytesPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.PetabytesPerSecond);
    }

    public static FromExabytesPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.ExabytesPerSecond);
    }

    private convertFromBase(toUnit: BitRateUnits): number {
        switch (toUnit) {
                
            case BitRateUnits.BitsPerSecond:
                return this.value;
            case BitRateUnits.BytesPerSecond:
                return this.value/8;
            case BitRateUnits.KilobitsPerSecond:
                return (this.value) / 1000;
            case BitRateUnits.MegabitsPerSecond:
                return (this.value) / 1000000;
            case BitRateUnits.GigabitsPerSecond:
                return (this.value) / 1000000000;
            case BitRateUnits.TerabitsPerSecond:
                return (this.value) / 1000000000000;
            case BitRateUnits.PetabitsPerSecond:
                return (this.value) / 1000000000000000;
            case BitRateUnits.ExabitsPerSecond:
                return (this.value) / 1000000000000000000;
            case BitRateUnits.KilobytesPerSecond:
                return (this.value/8) / 1000;
            case BitRateUnits.MegabytesPerSecond:
                return (this.value/8) / 1000000;
            case BitRateUnits.GigabytesPerSecond:
                return (this.value/8) / 1000000000;
            case BitRateUnits.TerabytesPerSecond:
                return (this.value/8) / 1000000000000;
            case BitRateUnits.PetabytesPerSecond:
                return (this.value/8) / 1000000000000000;
            case BitRateUnits.ExabytesPerSecond:
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
            case BitRateUnits.KilobitsPerSecond:
                return (value) * 1000;
            case BitRateUnits.MegabitsPerSecond:
                return (value) * 1000000;
            case BitRateUnits.GigabitsPerSecond:
                return (value) * 1000000000;
            case BitRateUnits.TerabitsPerSecond:
                return (value) * 1000000000000;
            case BitRateUnits.PetabitsPerSecond:
                return (value) * 1000000000000000;
            case BitRateUnits.ExabitsPerSecond:
                return (value) * 1000000000000000000;
            case BitRateUnits.KilobytesPerSecond:
                return (value*8) * 1000;
            case BitRateUnits.MegabytesPerSecond:
                return (value*8) * 1000000;
            case BitRateUnits.GigabytesPerSecond:
                return (value*8) * 1000000000;
            case BitRateUnits.TerabytesPerSecond:
                return (value*8) * 1000000000000;
            case BitRateUnits.PetabytesPerSecond:
                return (value*8) * 1000000000000000;
            case BitRateUnits.ExabytesPerSecond:
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
            case BitRateUnits.KilobitsPerSecond:
                return this.KilobitsPerSecond + ` bit/s`;
            case BitRateUnits.MegabitsPerSecond:
                return this.MegabitsPerSecond + ` bit/s`;
            case BitRateUnits.GigabitsPerSecond:
                return this.GigabitsPerSecond + ` bit/s`;
            case BitRateUnits.TerabitsPerSecond:
                return this.TerabitsPerSecond + ` bit/s`;
            case BitRateUnits.PetabitsPerSecond:
                return this.PetabitsPerSecond + ` bit/s`;
            case BitRateUnits.ExabitsPerSecond:
                return this.ExabitsPerSecond + ` bit/s`;
            case BitRateUnits.KilobytesPerSecond:
                return this.KilobytesPerSecond + ` B/s`;
            case BitRateUnits.MegabytesPerSecond:
                return this.MegabytesPerSecond + ` B/s`;
            case BitRateUnits.GigabytesPerSecond:
                return this.GigabytesPerSecond + ` B/s`;
            case BitRateUnits.TerabytesPerSecond:
                return this.TerabytesPerSecond + ` B/s`;
            case BitRateUnits.PetabytesPerSecond:
                return this.PetabytesPerSecond + ` B/s`;
            case BitRateUnits.ExabytesPerSecond:
                return this.ExabytesPerSecond + ` B/s`;
        default:
            break;
        }
        return this.value.toString();
    }
}
