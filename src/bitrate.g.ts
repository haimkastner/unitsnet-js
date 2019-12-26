export enum BitRateUnits {
    BitsPerSecond,
    BytesPerSecond,
    Kilobitspersecond,
    Megabitspersecond,
    Gigabitspersecond,
    Terabitspersecond,
    Petabitspersecond,
    Exabitspersecond,
    Kilobytespersecond,
    Megabytespersecond,
    Gigabytespersecond,
    Terabytespersecond,
    Petabytespersecond,
    Exabytespersecond
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

    public get Kilobitspersecond(): number {
        if(this.kilobitspersecondLazy !== null){
            return this.kilobitspersecondLazy;
        }
        return this.kilobitspersecondLazy = this.convertFromBase(BitRateUnits.Kilobitspersecond);
    }

    public get Megabitspersecond(): number {
        if(this.megabitspersecondLazy !== null){
            return this.megabitspersecondLazy;
        }
        return this.megabitspersecondLazy = this.convertFromBase(BitRateUnits.Megabitspersecond);
    }

    public get Gigabitspersecond(): number {
        if(this.gigabitspersecondLazy !== null){
            return this.gigabitspersecondLazy;
        }
        return this.gigabitspersecondLazy = this.convertFromBase(BitRateUnits.Gigabitspersecond);
    }

    public get Terabitspersecond(): number {
        if(this.terabitspersecondLazy !== null){
            return this.terabitspersecondLazy;
        }
        return this.terabitspersecondLazy = this.convertFromBase(BitRateUnits.Terabitspersecond);
    }

    public get Petabitspersecond(): number {
        if(this.petabitspersecondLazy !== null){
            return this.petabitspersecondLazy;
        }
        return this.petabitspersecondLazy = this.convertFromBase(BitRateUnits.Petabitspersecond);
    }

    public get Exabitspersecond(): number {
        if(this.exabitspersecondLazy !== null){
            return this.exabitspersecondLazy;
        }
        return this.exabitspersecondLazy = this.convertFromBase(BitRateUnits.Exabitspersecond);
    }

    public get Kilobytespersecond(): number {
        if(this.kilobytespersecondLazy !== null){
            return this.kilobytespersecondLazy;
        }
        return this.kilobytespersecondLazy = this.convertFromBase(BitRateUnits.Kilobytespersecond);
    }

    public get Megabytespersecond(): number {
        if(this.megabytespersecondLazy !== null){
            return this.megabytespersecondLazy;
        }
        return this.megabytespersecondLazy = this.convertFromBase(BitRateUnits.Megabytespersecond);
    }

    public get Gigabytespersecond(): number {
        if(this.gigabytespersecondLazy !== null){
            return this.gigabytespersecondLazy;
        }
        return this.gigabytespersecondLazy = this.convertFromBase(BitRateUnits.Gigabytespersecond);
    }

    public get Terabytespersecond(): number {
        if(this.terabytespersecondLazy !== null){
            return this.terabytespersecondLazy;
        }
        return this.terabytespersecondLazy = this.convertFromBase(BitRateUnits.Terabytespersecond);
    }

    public get Petabytespersecond(): number {
        if(this.petabytespersecondLazy !== null){
            return this.petabytespersecondLazy;
        }
        return this.petabytespersecondLazy = this.convertFromBase(BitRateUnits.Petabytespersecond);
    }

    public get Exabytespersecond(): number {
        if(this.exabytespersecondLazy !== null){
            return this.exabytespersecondLazy;
        }
        return this.exabytespersecondLazy = this.convertFromBase(BitRateUnits.Exabytespersecond);
    }

    public static FromBitsPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.BitsPerSecond);
    }

    public static FromBytesPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.BytesPerSecond);
    }

    public static FromKilobitspersecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.Kilobitspersecond);
    }

    public static FromMegabitspersecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.Megabitspersecond);
    }

    public static FromGigabitspersecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.Gigabitspersecond);
    }

    public static FromTerabitspersecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.Terabitspersecond);
    }

    public static FromPetabitspersecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.Petabitspersecond);
    }

    public static FromExabitspersecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.Exabitspersecond);
    }

    public static FromKilobytespersecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.Kilobytespersecond);
    }

    public static FromMegabytespersecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.Megabytespersecond);
    }

    public static FromGigabytespersecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.Gigabytespersecond);
    }

    public static FromTerabytespersecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.Terabytespersecond);
    }

    public static FromPetabytespersecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.Petabytespersecond);
    }

    public static FromExabytespersecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.Exabytespersecond);
    }

    private convertFromBase(toUnit: BitRateUnits): number {
        switch (toUnit) {
                
            case BitRateUnits.BitsPerSecond:
                return this.value;
            case BitRateUnits.BytesPerSecond:
                return this.value/8;
            case BitRateUnits.Kilobitspersecond:
                return (this.value) / 1000;
            case BitRateUnits.Megabitspersecond:
                return (this.value) / 1000000;
            case BitRateUnits.Gigabitspersecond:
                return (this.value) / 1000000000;
            case BitRateUnits.Terabitspersecond:
                return (this.value) / 1000000000000;
            case BitRateUnits.Petabitspersecond:
                return (this.value) / 1000000000000000;
            case BitRateUnits.Exabitspersecond:
                return (this.value) / 1000000000000000000;
            case BitRateUnits.Kilobytespersecond:
                return (this.value/8) / 1000;
            case BitRateUnits.Megabytespersecond:
                return (this.value/8) / 1000000;
            case BitRateUnits.Gigabytespersecond:
                return (this.value/8) / 1000000000;
            case BitRateUnits.Terabytespersecond:
                return (this.value/8) / 1000000000000;
            case BitRateUnits.Petabytespersecond:
                return (this.value/8) / 1000000000000000;
            case BitRateUnits.Exabytespersecond:
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
            case BitRateUnits.Kilobitspersecond:
                return (value) * 1000;
            case BitRateUnits.Megabitspersecond:
                return (value) * 1000000;
            case BitRateUnits.Gigabitspersecond:
                return (value) * 1000000000;
            case BitRateUnits.Terabitspersecond:
                return (value) * 1000000000000;
            case BitRateUnits.Petabitspersecond:
                return (value) * 1000000000000000;
            case BitRateUnits.Exabitspersecond:
                return (value) * 1000000000000000000;
            case BitRateUnits.Kilobytespersecond:
                return (value*8) * 1000;
            case BitRateUnits.Megabytespersecond:
                return (value*8) * 1000000;
            case BitRateUnits.Gigabytespersecond:
                return (value*8) * 1000000000;
            case BitRateUnits.Terabytespersecond:
                return (value*8) * 1000000000000;
            case BitRateUnits.Petabytespersecond:
                return (value*8) * 1000000000000000;
            case BitRateUnits.Exabytespersecond:
                return (value*8) * 1000000000000000000;
            default:
                break;
        }
        return NaN;
    }
}
