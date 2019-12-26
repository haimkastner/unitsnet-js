export enum ElectricCurrentUnits {
    Amperes,
    Picoamperes,
    Nanoamperes,
    Microamperes,
    Centiamperes,
    Kiloamperes,
    Megaamperes
}

export class ElectricCurrent {
    private value: number;
    private amperesLazy: number | null = null;
    private picoamperesLazy: number | null = null;
    private nanoamperesLazy: number | null = null;
    private microamperesLazy: number | null = null;
    private centiamperesLazy: number | null = null;
    private kiloamperesLazy: number | null = null;
    private megaamperesLazy: number | null = null;

    public constructor(value: number, fromUnit: ElectricCurrentUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Amperes(): number {
        if(this.amperesLazy !== null){
            return this.amperesLazy;
        }
        return this.amperesLazy = this.convertFromBase(ElectricCurrentUnits.Amperes);
    }

    public get Picoamperes(): number {
        if(this.picoamperesLazy !== null){
            return this.picoamperesLazy;
        }
        return this.picoamperesLazy = this.convertFromBase(ElectricCurrentUnits.Picoamperes);
    }

    public get Nanoamperes(): number {
        if(this.nanoamperesLazy !== null){
            return this.nanoamperesLazy;
        }
        return this.nanoamperesLazy = this.convertFromBase(ElectricCurrentUnits.Nanoamperes);
    }

    public get Microamperes(): number {
        if(this.microamperesLazy !== null){
            return this.microamperesLazy;
        }
        return this.microamperesLazy = this.convertFromBase(ElectricCurrentUnits.Microamperes);
    }

    public get Centiamperes(): number {
        if(this.centiamperesLazy !== null){
            return this.centiamperesLazy;
        }
        return this.centiamperesLazy = this.convertFromBase(ElectricCurrentUnits.Centiamperes);
    }

    public get Kiloamperes(): number {
        if(this.kiloamperesLazy !== null){
            return this.kiloamperesLazy;
        }
        return this.kiloamperesLazy = this.convertFromBase(ElectricCurrentUnits.Kiloamperes);
    }

    public get Megaamperes(): number {
        if(this.megaamperesLazy !== null){
            return this.megaamperesLazy;
        }
        return this.megaamperesLazy = this.convertFromBase(ElectricCurrentUnits.Megaamperes);
    }

    public static FromAmperes(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Amperes);
    }

    public static FromPicoamperes(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Picoamperes);
    }

    public static FromNanoamperes(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Nanoamperes);
    }

    public static FromMicroamperes(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Microamperes);
    }

    public static FromCentiamperes(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Centiamperes);
    }

    public static FromKiloamperes(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Kiloamperes);
    }

    public static FromMegaamperes(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Megaamperes);
    }

    private convertFromBase(toUnit: ElectricCurrentUnits): number {
        switch (toUnit) {
                
            case ElectricCurrentUnits.Amperes:
                return this.value;
            case ElectricCurrentUnits.Picoamperes:
                return (this.value) / 1e-12;
            case ElectricCurrentUnits.Nanoamperes:
                return (this.value) / 1e-9;
            case ElectricCurrentUnits.Microamperes:
                return (this.value) / 0.000001;
            case ElectricCurrentUnits.Centiamperes:
                return (this.value) / 0.01;
            case ElectricCurrentUnits.Kiloamperes:
                return (this.value) / 1000;
            case ElectricCurrentUnits.Megaamperes:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricCurrentUnits): number {
        switch (fromUnit) {
                
            case ElectricCurrentUnits.Amperes:
                return value;
            case ElectricCurrentUnits.Picoamperes:
                return (value) * 1e-12;
            case ElectricCurrentUnits.Nanoamperes:
                return (value) * 1e-9;
            case ElectricCurrentUnits.Microamperes:
                return (value) * 0.000001;
            case ElectricCurrentUnits.Centiamperes:
                return (value) * 0.01;
            case ElectricCurrentUnits.Kiloamperes:
                return (value) * 1000;
            case ElectricCurrentUnits.Megaamperes:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
