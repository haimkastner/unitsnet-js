export enum CapacitanceUnits {
    Farads,
    Picofarad,
    Nanofarad,
    Microfarad,
    Kilofarad,
    Megafarad
}

export class Capacitance {
    private value: number;
    private faradsLazy: number | null = null;
    private picofaradLazy: number | null = null;
    private nanofaradLazy: number | null = null;
    private microfaradLazy: number | null = null;
    private kilofaradLazy: number | null = null;
    private megafaradLazy: number | null = null;

    public constructor(value: number, fromUnit: CapacitanceUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Farads(): number {
        if(this.faradsLazy !== null){
            return this.faradsLazy;
        }
        return this.faradsLazy = this.convertFromBase(CapacitanceUnits.Farads);
    }

    public get Picofarad(): number {
        if(this.picofaradLazy !== null){
            return this.picofaradLazy;
        }
        return this.picofaradLazy = this.convertFromBase(CapacitanceUnits.Picofarad);
    }

    public get Nanofarad(): number {
        if(this.nanofaradLazy !== null){
            return this.nanofaradLazy;
        }
        return this.nanofaradLazy = this.convertFromBase(CapacitanceUnits.Nanofarad);
    }

    public get Microfarad(): number {
        if(this.microfaradLazy !== null){
            return this.microfaradLazy;
        }
        return this.microfaradLazy = this.convertFromBase(CapacitanceUnits.Microfarad);
    }

    public get Kilofarad(): number {
        if(this.kilofaradLazy !== null){
            return this.kilofaradLazy;
        }
        return this.kilofaradLazy = this.convertFromBase(CapacitanceUnits.Kilofarad);
    }

    public get Megafarad(): number {
        if(this.megafaradLazy !== null){
            return this.megafaradLazy;
        }
        return this.megafaradLazy = this.convertFromBase(CapacitanceUnits.Megafarad);
    }

    public static FromFarads(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Farads);
    }

    public static FromPicofarad(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Picofarad);
    }

    public static FromNanofarad(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Nanofarad);
    }

    public static FromMicrofarad(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Microfarad);
    }

    public static FromKilofarad(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Kilofarad);
    }

    public static FromMegafarad(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Megafarad);
    }

    private convertFromBase(toUnit: CapacitanceUnits): number {
        switch (toUnit) {
                
            case CapacitanceUnits.Farads:
                return this.value;
            case CapacitanceUnits.Picofarad:
                return (this.value) / 1e-12;
            case CapacitanceUnits.Nanofarad:
                return (this.value) / 1e-9;
            case CapacitanceUnits.Microfarad:
                return (this.value) / 0.000001;
            case CapacitanceUnits.Kilofarad:
                return (this.value) / 1000;
            case CapacitanceUnits.Megafarad:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: CapacitanceUnits): number {
        switch (fromUnit) {
                
            case CapacitanceUnits.Farads:
                return value;
            case CapacitanceUnits.Picofarad:
                return (value) * 1e-12;
            case CapacitanceUnits.Nanofarad:
                return (value) * 1e-9;
            case CapacitanceUnits.Microfarad:
                return (value) * 0.000001;
            case CapacitanceUnits.Kilofarad:
                return (value) * 1000;
            case CapacitanceUnits.Megafarad:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: CapacitanceUnits = CapacitanceUnits.Farads): string {

        switch (toUnit) {
            
            case CapacitanceUnits.Farads:
                return this.Farads + ` F`;
            case CapacitanceUnits.Picofarad:
                return this.Picofarad + ` F`;
            case CapacitanceUnits.Nanofarad:
                return this.Nanofarad + ` F`;
            case CapacitanceUnits.Microfarad:
                return this.Microfarad + ` F`;
            case CapacitanceUnits.Kilofarad:
                return this.Kilofarad + ` F`;
            case CapacitanceUnits.Megafarad:
                return this.Megafarad + ` F`;
        default:
            break;
        }
        return this.value.toString();
    }
}
