export enum InformationUnits {
    Bytes,
    Bits,
    Kilobytes,
    Megabytes,
    Gigabytes,
    Terabytes,
    Petabytes,
    Exabytes,
    Kilobits,
    Megabits,
    Gigabits,
    Terabits,
    Petabits,
    Exabits
}

export class Information {
    private value: number;
    private bytesLazy: number | null = null;
    private bitsLazy: number | null = null;
    private kilobytesLazy: number | null = null;
    private megabytesLazy: number | null = null;
    private gigabytesLazy: number | null = null;
    private terabytesLazy: number | null = null;
    private petabytesLazy: number | null = null;
    private exabytesLazy: number | null = null;
    private kilobitsLazy: number | null = null;
    private megabitsLazy: number | null = null;
    private gigabitsLazy: number | null = null;
    private terabitsLazy: number | null = null;
    private petabitsLazy: number | null = null;
    private exabitsLazy: number | null = null;

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

    public get Kilobytes(): number {
        if(this.kilobytesLazy !== null){
            return this.kilobytesLazy;
        }
        return this.kilobytesLazy = this.convertFromBase(InformationUnits.Kilobytes);
    }

    public get Megabytes(): number {
        if(this.megabytesLazy !== null){
            return this.megabytesLazy;
        }
        return this.megabytesLazy = this.convertFromBase(InformationUnits.Megabytes);
    }

    public get Gigabytes(): number {
        if(this.gigabytesLazy !== null){
            return this.gigabytesLazy;
        }
        return this.gigabytesLazy = this.convertFromBase(InformationUnits.Gigabytes);
    }

    public get Terabytes(): number {
        if(this.terabytesLazy !== null){
            return this.terabytesLazy;
        }
        return this.terabytesLazy = this.convertFromBase(InformationUnits.Terabytes);
    }

    public get Petabytes(): number {
        if(this.petabytesLazy !== null){
            return this.petabytesLazy;
        }
        return this.petabytesLazy = this.convertFromBase(InformationUnits.Petabytes);
    }

    public get Exabytes(): number {
        if(this.exabytesLazy !== null){
            return this.exabytesLazy;
        }
        return this.exabytesLazy = this.convertFromBase(InformationUnits.Exabytes);
    }

    public get Kilobits(): number {
        if(this.kilobitsLazy !== null){
            return this.kilobitsLazy;
        }
        return this.kilobitsLazy = this.convertFromBase(InformationUnits.Kilobits);
    }

    public get Megabits(): number {
        if(this.megabitsLazy !== null){
            return this.megabitsLazy;
        }
        return this.megabitsLazy = this.convertFromBase(InformationUnits.Megabits);
    }

    public get Gigabits(): number {
        if(this.gigabitsLazy !== null){
            return this.gigabitsLazy;
        }
        return this.gigabitsLazy = this.convertFromBase(InformationUnits.Gigabits);
    }

    public get Terabits(): number {
        if(this.terabitsLazy !== null){
            return this.terabitsLazy;
        }
        return this.terabitsLazy = this.convertFromBase(InformationUnits.Terabits);
    }

    public get Petabits(): number {
        if(this.petabitsLazy !== null){
            return this.petabitsLazy;
        }
        return this.petabitsLazy = this.convertFromBase(InformationUnits.Petabits);
    }

    public get Exabits(): number {
        if(this.exabitsLazy !== null){
            return this.exabitsLazy;
        }
        return this.exabitsLazy = this.convertFromBase(InformationUnits.Exabits);
    }

    public static FromBytes(value: number): Information {
        return new Information(value, InformationUnits.Bytes);
    }

    public static FromBits(value: number): Information {
        return new Information(value, InformationUnits.Bits);
    }

    public static FromKilobytes(value: number): Information {
        return new Information(value, InformationUnits.Kilobytes);
    }

    public static FromMegabytes(value: number): Information {
        return new Information(value, InformationUnits.Megabytes);
    }

    public static FromGigabytes(value: number): Information {
        return new Information(value, InformationUnits.Gigabytes);
    }

    public static FromTerabytes(value: number): Information {
        return new Information(value, InformationUnits.Terabytes);
    }

    public static FromPetabytes(value: number): Information {
        return new Information(value, InformationUnits.Petabytes);
    }

    public static FromExabytes(value: number): Information {
        return new Information(value, InformationUnits.Exabytes);
    }

    public static FromKilobits(value: number): Information {
        return new Information(value, InformationUnits.Kilobits);
    }

    public static FromMegabits(value: number): Information {
        return new Information(value, InformationUnits.Megabits);
    }

    public static FromGigabits(value: number): Information {
        return new Information(value, InformationUnits.Gigabits);
    }

    public static FromTerabits(value: number): Information {
        return new Information(value, InformationUnits.Terabits);
    }

    public static FromPetabits(value: number): Information {
        return new Information(value, InformationUnits.Petabits);
    }

    public static FromExabits(value: number): Information {
        return new Information(value, InformationUnits.Exabits);
    }

    private convertFromBase(toUnit: InformationUnits): number {
        switch (toUnit) {
                
            case InformationUnits.Bytes:
                return this.value/8;
            case InformationUnits.Bits:
                return this.value;
            case InformationUnits.Kilobytes:
                return (this.value/8) / 1000;
            case InformationUnits.Megabytes:
                return (this.value/8) / 1000000;
            case InformationUnits.Gigabytes:
                return (this.value/8) / 1000000000;
            case InformationUnits.Terabytes:
                return (this.value/8) / 1000000000000;
            case InformationUnits.Petabytes:
                return (this.value/8) / 1000000000000000;
            case InformationUnits.Exabytes:
                return (this.value/8) / 1000000000000000000;
            case InformationUnits.Kilobits:
                return (this.value) / 1000;
            case InformationUnits.Megabits:
                return (this.value) / 1000000;
            case InformationUnits.Gigabits:
                return (this.value) / 1000000000;
            case InformationUnits.Terabits:
                return (this.value) / 1000000000000;
            case InformationUnits.Petabits:
                return (this.value) / 1000000000000000;
            case InformationUnits.Exabits:
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
            case InformationUnits.Kilobytes:
                return (value*8) * 1000;
            case InformationUnits.Megabytes:
                return (value*8) * 1000000;
            case InformationUnits.Gigabytes:
                return (value*8) * 1000000000;
            case InformationUnits.Terabytes:
                return (value*8) * 1000000000000;
            case InformationUnits.Petabytes:
                return (value*8) * 1000000000000000;
            case InformationUnits.Exabytes:
                return (value*8) * 1000000000000000000;
            case InformationUnits.Kilobits:
                return (value) * 1000;
            case InformationUnits.Megabits:
                return (value) * 1000000;
            case InformationUnits.Gigabits:
                return (value) * 1000000000;
            case InformationUnits.Terabits:
                return (value) * 1000000000000;
            case InformationUnits.Petabits:
                return (value) * 1000000000000000;
            case InformationUnits.Exabits:
                return (value) * 1000000000000000000;
            default:
                break;
        }
        return NaN;
    }
}
