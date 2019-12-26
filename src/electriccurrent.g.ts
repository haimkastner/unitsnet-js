export enum ElectricCurrentUnits {
    Amperes,
    Picoampere,
    Nanoampere,
    Microampere,
    Centiampere,
    Kiloampere,
    Megaampere
}

export class ElectricCurrent {
    private value: number;
    private amperesLazy: number | null = null;
    private picoampereLazy: number | null = null;
    private nanoampereLazy: number | null = null;
    private microampereLazy: number | null = null;
    private centiampereLazy: number | null = null;
    private kiloampereLazy: number | null = null;
    private megaampereLazy: number | null = null;

    public constructor(value: number, fromUnit: ElectricCurrentUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Amperes(): number {
        if(this.amperesLazy !== null){
            return this.amperesLazy;
        }
        return this.amperesLazy = this.convertFromBase(ElectricCurrentUnits.Amperes);
    }

    public get Picoampere(): number {
        if(this.picoampereLazy !== null){
            return this.picoampereLazy;
        }
        return this.picoampereLazy = this.convertFromBase(ElectricCurrentUnits.Picoampere);
    }

    public get Nanoampere(): number {
        if(this.nanoampereLazy !== null){
            return this.nanoampereLazy;
        }
        return this.nanoampereLazy = this.convertFromBase(ElectricCurrentUnits.Nanoampere);
    }

    public get Microampere(): number {
        if(this.microampereLazy !== null){
            return this.microampereLazy;
        }
        return this.microampereLazy = this.convertFromBase(ElectricCurrentUnits.Microampere);
    }

    public get Centiampere(): number {
        if(this.centiampereLazy !== null){
            return this.centiampereLazy;
        }
        return this.centiampereLazy = this.convertFromBase(ElectricCurrentUnits.Centiampere);
    }

    public get Kiloampere(): number {
        if(this.kiloampereLazy !== null){
            return this.kiloampereLazy;
        }
        return this.kiloampereLazy = this.convertFromBase(ElectricCurrentUnits.Kiloampere);
    }

    public get Megaampere(): number {
        if(this.megaampereLazy !== null){
            return this.megaampereLazy;
        }
        return this.megaampereLazy = this.convertFromBase(ElectricCurrentUnits.Megaampere);
    }

    public static FromAmperes(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Amperes);
    }

    public static FromPicoampere(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Picoampere);
    }

    public static FromNanoampere(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Nanoampere);
    }

    public static FromMicroampere(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Microampere);
    }

    public static FromCentiampere(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Centiampere);
    }

    public static FromKiloampere(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Kiloampere);
    }

    public static FromMegaampere(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Megaampere);
    }

    private convertFromBase(toUnit: ElectricCurrentUnits): number {
        switch (toUnit) {
                
            case ElectricCurrentUnits.Amperes:
                return this.value;
            case ElectricCurrentUnits.Picoampere:
                return (this.value) / 1e-12;
            case ElectricCurrentUnits.Nanoampere:
                return (this.value) / 1e-9;
            case ElectricCurrentUnits.Microampere:
                return (this.value) / 0.000001;
            case ElectricCurrentUnits.Centiampere:
                return (this.value) / 0.01;
            case ElectricCurrentUnits.Kiloampere:
                return (this.value) / 1000;
            case ElectricCurrentUnits.Megaampere:
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
            case ElectricCurrentUnits.Picoampere:
                return (value) * 1e-12;
            case ElectricCurrentUnits.Nanoampere:
                return (value) * 1e-9;
            case ElectricCurrentUnits.Microampere:
                return (value) * 0.000001;
            case ElectricCurrentUnits.Centiampere:
                return (value) * 0.01;
            case ElectricCurrentUnits.Kiloampere:
                return (value) * 1000;
            case ElectricCurrentUnits.Megaampere:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: ElectricCurrentUnits = ElectricCurrentUnits.Amperes): string {

        switch (toUnit) {
            
            case ElectricCurrentUnits.Amperes:
                return this.Amperes + ` A`;
            case ElectricCurrentUnits.Picoampere:
                return this.Picoampere + ` A`;
            case ElectricCurrentUnits.Nanoampere:
                return this.Nanoampere + ` A`;
            case ElectricCurrentUnits.Microampere:
                return this.Microampere + ` A`;
            case ElectricCurrentUnits.Centiampere:
                return this.Centiampere + ` A`;
            case ElectricCurrentUnits.Kiloampere:
                return this.Kiloampere + ` A`;
            case ElectricCurrentUnits.Megaampere:
                return this.Megaampere + ` A`;
        default:
            break;
        }
        return this.value.toString();
    }
}
