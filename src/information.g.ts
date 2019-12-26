export enum InformationUnits {
    Bytes,
    Bits,
    Kilobyte,
    Megabyte,
    Gigabyte,
    Terabyte,
    Petabyte,
    Exabyte,
    Kilobit,
    Megabit,
    Gigabit,
    Terabit,
    Petabit,
    Exabit
}

export class Information {
    private value: number;
    private bytesLazy: number | null = null;
    private bitsLazy: number | null = null;
    private kilobyteLazy: number | null = null;
    private megabyteLazy: number | null = null;
    private gigabyteLazy: number | null = null;
    private terabyteLazy: number | null = null;
    private petabyteLazy: number | null = null;
    private exabyteLazy: number | null = null;
    private kilobitLazy: number | null = null;
    private megabitLazy: number | null = null;
    private gigabitLazy: number | null = null;
    private terabitLazy: number | null = null;
    private petabitLazy: number | null = null;
    private exabitLazy: number | null = null;

    public constructor(value: number, fromUnit: InformationUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Bytes(): number {
        if(this.bytesLazy !== null){
            return this.bytesLazy;
        }
        return this.bytesLazy = this.convertFromBase(InformationUnits.Bytes);
    }

    public get Bits(): number {
        if(this.bitsLazy !== null){
            return this.bitsLazy;
        }
        return this.bitsLazy = this.convertFromBase(InformationUnits.Bits);
    }

    public get Kilobyte(): number {
        if(this.kilobyteLazy !== null){
            return this.kilobyteLazy;
        }
        return this.kilobyteLazy = this.convertFromBase(InformationUnits.Kilobyte);
    }

    public get Megabyte(): number {
        if(this.megabyteLazy !== null){
            return this.megabyteLazy;
        }
        return this.megabyteLazy = this.convertFromBase(InformationUnits.Megabyte);
    }

    public get Gigabyte(): number {
        if(this.gigabyteLazy !== null){
            return this.gigabyteLazy;
        }
        return this.gigabyteLazy = this.convertFromBase(InformationUnits.Gigabyte);
    }

    public get Terabyte(): number {
        if(this.terabyteLazy !== null){
            return this.terabyteLazy;
        }
        return this.terabyteLazy = this.convertFromBase(InformationUnits.Terabyte);
    }

    public get Petabyte(): number {
        if(this.petabyteLazy !== null){
            return this.petabyteLazy;
        }
        return this.petabyteLazy = this.convertFromBase(InformationUnits.Petabyte);
    }

    public get Exabyte(): number {
        if(this.exabyteLazy !== null){
            return this.exabyteLazy;
        }
        return this.exabyteLazy = this.convertFromBase(InformationUnits.Exabyte);
    }

    public get Kilobit(): number {
        if(this.kilobitLazy !== null){
            return this.kilobitLazy;
        }
        return this.kilobitLazy = this.convertFromBase(InformationUnits.Kilobit);
    }

    public get Megabit(): number {
        if(this.megabitLazy !== null){
            return this.megabitLazy;
        }
        return this.megabitLazy = this.convertFromBase(InformationUnits.Megabit);
    }

    public get Gigabit(): number {
        if(this.gigabitLazy !== null){
            return this.gigabitLazy;
        }
        return this.gigabitLazy = this.convertFromBase(InformationUnits.Gigabit);
    }

    public get Terabit(): number {
        if(this.terabitLazy !== null){
            return this.terabitLazy;
        }
        return this.terabitLazy = this.convertFromBase(InformationUnits.Terabit);
    }

    public get Petabit(): number {
        if(this.petabitLazy !== null){
            return this.petabitLazy;
        }
        return this.petabitLazy = this.convertFromBase(InformationUnits.Petabit);
    }

    public get Exabit(): number {
        if(this.exabitLazy !== null){
            return this.exabitLazy;
        }
        return this.exabitLazy = this.convertFromBase(InformationUnits.Exabit);
    }

    public static FromBytes(value: number): Information {
        return new Information(value, InformationUnits.Bytes);
    }

    public static FromBits(value: number): Information {
        return new Information(value, InformationUnits.Bits);
    }

    public static FromKilobyte(value: number): Information {
        return new Information(value, InformationUnits.Kilobyte);
    }

    public static FromMegabyte(value: number): Information {
        return new Information(value, InformationUnits.Megabyte);
    }

    public static FromGigabyte(value: number): Information {
        return new Information(value, InformationUnits.Gigabyte);
    }

    public static FromTerabyte(value: number): Information {
        return new Information(value, InformationUnits.Terabyte);
    }

    public static FromPetabyte(value: number): Information {
        return new Information(value, InformationUnits.Petabyte);
    }

    public static FromExabyte(value: number): Information {
        return new Information(value, InformationUnits.Exabyte);
    }

    public static FromKilobit(value: number): Information {
        return new Information(value, InformationUnits.Kilobit);
    }

    public static FromMegabit(value: number): Information {
        return new Information(value, InformationUnits.Megabit);
    }

    public static FromGigabit(value: number): Information {
        return new Information(value, InformationUnits.Gigabit);
    }

    public static FromTerabit(value: number): Information {
        return new Information(value, InformationUnits.Terabit);
    }

    public static FromPetabit(value: number): Information {
        return new Information(value, InformationUnits.Petabit);
    }

    public static FromExabit(value: number): Information {
        return new Information(value, InformationUnits.Exabit);
    }

    private convertFromBase(toUnit: InformationUnits): number {
        switch (toUnit) {
                
            case InformationUnits.Bytes:
                return this.value/8;
            case InformationUnits.Bits:
                return this.value;
            case InformationUnits.Kilobyte:
                return (this.value/8) / 1000;
            case InformationUnits.Megabyte:
                return (this.value/8) / 1000000;
            case InformationUnits.Gigabyte:
                return (this.value/8) / 1000000000;
            case InformationUnits.Terabyte:
                return (this.value/8) / 1000000000000;
            case InformationUnits.Petabyte:
                return (this.value/8) / 1000000000000000;
            case InformationUnits.Exabyte:
                return (this.value/8) / 1000000000000000000;
            case InformationUnits.Kilobit:
                return (this.value) / 1000;
            case InformationUnits.Megabit:
                return (this.value) / 1000000;
            case InformationUnits.Gigabit:
                return (this.value) / 1000000000;
            case InformationUnits.Terabit:
                return (this.value) / 1000000000000;
            case InformationUnits.Petabit:
                return (this.value) / 1000000000000000;
            case InformationUnits.Exabit:
                return (this.value) / 1000000000000000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: InformationUnits): number {
        switch (fromUnit) {
                
            case InformationUnits.Bytes:
                return value*8;
            case InformationUnits.Bits:
                return value;
            case InformationUnits.Kilobyte:
                return (value*8) * 1000;
            case InformationUnits.Megabyte:
                return (value*8) * 1000000;
            case InformationUnits.Gigabyte:
                return (value*8) * 1000000000;
            case InformationUnits.Terabyte:
                return (value*8) * 1000000000000;
            case InformationUnits.Petabyte:
                return (value*8) * 1000000000000000;
            case InformationUnits.Exabyte:
                return (value*8) * 1000000000000000000;
            case InformationUnits.Kilobit:
                return (value) * 1000;
            case InformationUnits.Megabit:
                return (value) * 1000000;
            case InformationUnits.Gigabit:
                return (value) * 1000000000;
            case InformationUnits.Terabit:
                return (value) * 1000000000000;
            case InformationUnits.Petabit:
                return (value) * 1000000000000000;
            case InformationUnits.Exabit:
                return (value) * 1000000000000000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: InformationUnits = InformationUnits.Bits): string {

        switch (toUnit) {
            
            case InformationUnits.Bytes:
                return this.Bytes + ` B`;
            case InformationUnits.Bits:
                return this.Bits + ` b`;
            case InformationUnits.Kilobyte:
                return this.Kilobyte + ` B`;
            case InformationUnits.Megabyte:
                return this.Megabyte + ` B`;
            case InformationUnits.Gigabyte:
                return this.Gigabyte + ` B`;
            case InformationUnits.Terabyte:
                return this.Terabyte + ` B`;
            case InformationUnits.Petabyte:
                return this.Petabyte + ` B`;
            case InformationUnits.Exabyte:
                return this.Exabyte + ` B`;
            case InformationUnits.Kilobit:
                return this.Kilobit + ` b`;
            case InformationUnits.Megabit:
                return this.Megabit + ` b`;
            case InformationUnits.Gigabit:
                return this.Gigabit + ` b`;
            case InformationUnits.Terabit:
                return this.Terabit + ` b`;
            case InformationUnits.Petabit:
                return this.Petabit + ` b`;
            case InformationUnits.Exabit:
                return this.Exabit + ` b`;
        default:
            break;
        }
        return this.value.toString();
    }
}
