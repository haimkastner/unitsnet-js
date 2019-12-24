export enum CapacitanceUnits {
    Farads,
    Picofarads,
    Nanofarads,
    Microfarads,
    Kilofarads,
    Megafarads
}

export class Capacitance {
    private value: number;

    public constructor(value: number, fromUnit: CapacitanceUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Farads(): number {
        return this.convertFromBase(CapacitanceUnits.Farads);
    }

    public get Picofarads(): number {
        return this.convertFromBase(CapacitanceUnits.Picofarads);
    }

    public get Nanofarads(): number {
        return this.convertFromBase(CapacitanceUnits.Nanofarads);
    }

    public get Microfarads(): number {
        return this.convertFromBase(CapacitanceUnits.Microfarads);
    }

    public get Kilofarads(): number {
        return this.convertFromBase(CapacitanceUnits.Kilofarads);
    }

    public get Megafarads(): number {
        return this.convertFromBase(CapacitanceUnits.Megafarads);
    }

    public static FromFarads(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Farads);
    }

    public static FromPicofarads(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Picofarads);
    }

    public static FromNanofarads(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Nanofarads);
    }

    public static FromMicrofarads(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Microfarads);
    }

    public static FromKilofarads(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Kilofarads);
    }

    public static FromMegafarads(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Megafarads);
    }

    private convertFromBase(toUnit: CapacitanceUnits): number {

            switch (toUnit) {
                
                case CapacitanceUnits.Farads:
                    return this.value;
                
                case CapacitanceUnits.Picofarads:
                    return (this.value) * 1e-12;
                
                case CapacitanceUnits.Nanofarads:
                    return (this.value) * 1e-9;
                
                case CapacitanceUnits.Microfarads:
                    return (this.value) * 0.000001;
                
                case CapacitanceUnits.Kilofarads:
                    return (this.value) * 1000;
                
                case CapacitanceUnits.Megafarads:
                    return (this.value) * 1000000;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: CapacitanceUnits): number {

                switch (fromUnit) {
                    
                case CapacitanceUnits.Farads:
                    return value;
                
                case CapacitanceUnits.Picofarads:
                    return (value) / 1e-12;
                
                case CapacitanceUnits.Nanofarads:
                    return (value) / 1e-9;
                
                case CapacitanceUnits.Microfarads:
                    return (value) / 0.000001;
                
                case CapacitanceUnits.Kilofarads:
                    return (value) / 1000;
                
                case CapacitanceUnits.Megafarads:
                    return (value) / 1000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
