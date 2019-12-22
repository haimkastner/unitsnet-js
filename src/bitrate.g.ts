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

    public constructor(value: number, fromUnit: BitRateUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get BitsPerSecond(): number {
        return this.convertFromBase(BitRateUnits.BitsPerSecond);
    }

    public get BytesPerSecond(): number {
        return this.convertFromBase(BitRateUnits.BytesPerSecond);
    }

    public get Kilobitspersecond(): number {
        return this.convertFromBase(BitRateUnits.Kilobitspersecond);
    }

    public get Megabitspersecond(): number {
        return this.convertFromBase(BitRateUnits.Megabitspersecond);
    }

    public get Gigabitspersecond(): number {
        return this.convertFromBase(BitRateUnits.Gigabitspersecond);
    }

    public get Terabitspersecond(): number {
        return this.convertFromBase(BitRateUnits.Terabitspersecond);
    }

    public get Petabitspersecond(): number {
        return this.convertFromBase(BitRateUnits.Petabitspersecond);
    }

    public get Exabitspersecond(): number {
        return this.convertFromBase(BitRateUnits.Exabitspersecond);
    }

    public get Kilobytespersecond(): number {
        return this.convertFromBase(BitRateUnits.Kilobytespersecond);
    }

    public get Megabytespersecond(): number {
        return this.convertFromBase(BitRateUnits.Megabytespersecond);
    }

    public get Gigabytespersecond(): number {
        return this.convertFromBase(BitRateUnits.Gigabytespersecond);
    }

    public get Terabytespersecond(): number {
        return this.convertFromBase(BitRateUnits.Terabytespersecond);
    }

    public get Petabytespersecond(): number {
        return this.convertFromBase(BitRateUnits.Petabytespersecond);
    }

    public get Exabytespersecond(): number {
        return this.convertFromBase(BitRateUnits.Exabytespersecond);
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
                    return this.value*8;
                
                case BitRateUnits.Kilobitspersecond:
                    return (this.value) * 1000;
                
                case BitRateUnits.Megabitspersecond:
                    return (this.value) * 1000000;
                
                case BitRateUnits.Gigabitspersecond:
                    return (this.value) * 1000000000;
                
                case BitRateUnits.Terabitspersecond:
                    return (this.value) * 1000000000000;
                
                case BitRateUnits.Petabitspersecond:
                    return (this.value) * 1000000000000000;
                
                case BitRateUnits.Exabitspersecond:
                    return (this.value) * 1000000000000000000;
                
                case BitRateUnits.Kilobytespersecond:
                    return (this.value/8) * 1000;
                
                case BitRateUnits.Megabytespersecond:
                    return (this.value/8) * 1000000;
                
                case BitRateUnits.Gigabytespersecond:
                    return (this.value/8) * 1000000000;
                
                case BitRateUnits.Terabytespersecond:
                    return (this.value/8) * 1000000000000;
                
                case BitRateUnits.Petabytespersecond:
                    return (this.value/8) * 1000000000000000;
                
                case BitRateUnits.Exabytespersecond:
                    return (this.value/8) * 1000000000000000000;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: BitRateUnits): number {

                switch (fromUnit) {
                    
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
                    return (this.value*8) / 1000;
                
                case BitRateUnits.Megabytespersecond:
                    return (this.value*8) / 1000000;
                
                case BitRateUnits.Gigabytespersecond:
                    return (this.value*8) / 1000000000;
                
                case BitRateUnits.Terabytespersecond:
                    return (this.value*8) / 1000000000000;
                
                case BitRateUnits.Petabytespersecond:
                    return (this.value*8) / 1000000000000000;
                
                case BitRateUnits.Exabytespersecond:
                    return (this.value*8) / 1000000000000000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
