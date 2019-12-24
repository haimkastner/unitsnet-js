export enum ElectricResistivityUnits {
    OhmMeters,
    OhmsCentimeter,
    Picoohmmeters,
    Nanoohmmeters,
    Microohmmeters,
    Kiloohmmeters,
    Megaohmmeters,
    Picoohmscentimeter,
    Nanoohmscentimeter,
    Microohmscentimeter,
    Kiloohmscentimeter,
    Megaohmscentimeter
}

export class ElectricResistivity {
    private value: number;

    public constructor(value: number, fromUnit: ElectricResistivityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get OhmMeters(): number {
        return this.convertFromBase(ElectricResistivityUnits.OhmMeters);
    }

    public get OhmsCentimeter(): number {
        return this.convertFromBase(ElectricResistivityUnits.OhmsCentimeter);
    }

    public get Picoohmmeters(): number {
        return this.convertFromBase(ElectricResistivityUnits.Picoohmmeters);
    }

    public get Nanoohmmeters(): number {
        return this.convertFromBase(ElectricResistivityUnits.Nanoohmmeters);
    }

    public get Microohmmeters(): number {
        return this.convertFromBase(ElectricResistivityUnits.Microohmmeters);
    }

    public get Kiloohmmeters(): number {
        return this.convertFromBase(ElectricResistivityUnits.Kiloohmmeters);
    }

    public get Megaohmmeters(): number {
        return this.convertFromBase(ElectricResistivityUnits.Megaohmmeters);
    }

    public get Picoohmscentimeter(): number {
        return this.convertFromBase(ElectricResistivityUnits.Picoohmscentimeter);
    }

    public get Nanoohmscentimeter(): number {
        return this.convertFromBase(ElectricResistivityUnits.Nanoohmscentimeter);
    }

    public get Microohmscentimeter(): number {
        return this.convertFromBase(ElectricResistivityUnits.Microohmscentimeter);
    }

    public get Kiloohmscentimeter(): number {
        return this.convertFromBase(ElectricResistivityUnits.Kiloohmscentimeter);
    }

    public get Megaohmscentimeter(): number {
        return this.convertFromBase(ElectricResistivityUnits.Megaohmscentimeter);
    }

    public static FromOhmMeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.OhmMeters);
    }

    public static FromOhmsCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.OhmsCentimeter);
    }

    public static FromPicoohmmeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.Picoohmmeters);
    }

    public static FromNanoohmmeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.Nanoohmmeters);
    }

    public static FromMicroohmmeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.Microohmmeters);
    }

    public static FromKiloohmmeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.Kiloohmmeters);
    }

    public static FromMegaohmmeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.Megaohmmeters);
    }

    public static FromPicoohmscentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.Picoohmscentimeter);
    }

    public static FromNanoohmscentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.Nanoohmscentimeter);
    }

    public static FromMicroohmscentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.Microohmscentimeter);
    }

    public static FromKiloohmscentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.Kiloohmscentimeter);
    }

    public static FromMegaohmscentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.Megaohmscentimeter);
    }

    private convertFromBase(toUnit: ElectricResistivityUnits): number {

                switch (toUnit) {
                    
                case ElectricResistivityUnits.OhmMeters:
                    return this.value;
                
                case ElectricResistivityUnits.OhmsCentimeter:
                    return this.value*100;
                
                case ElectricResistivityUnits.Picoohmmeters:
                    return (this.value) / 1e-12;
                
                case ElectricResistivityUnits.Nanoohmmeters:
                    return (this.value) / 1e-9;
                
                case ElectricResistivityUnits.Microohmmeters:
                    return (this.value) / 0.000001;
                
                case ElectricResistivityUnits.Kiloohmmeters:
                    return (this.value) / 1000;
                
                case ElectricResistivityUnits.Megaohmmeters:
                    return (this.value) / 1000000;
                
                case ElectricResistivityUnits.Picoohmscentimeter:
                    return (this.value*100) / 1e-12;
                
                case ElectricResistivityUnits.Nanoohmscentimeter:
                    return (this.value*100) / 1e-9;
                
                case ElectricResistivityUnits.Microohmscentimeter:
                    return (this.value*100) / 0.000001;
                
                case ElectricResistivityUnits.Kiloohmscentimeter:
                    return (this.value*100) / 1000;
                
                case ElectricResistivityUnits.Megaohmscentimeter:
                    return (this.value*100) / 1000000;
                
                    default:
                        break;
                }
                return NaN;
            
    }

    private convertToBase(value: number, fromUnit: ElectricResistivityUnits): number {

                switch (fromUnit) {
                    
                case ElectricResistivityUnits.OhmMeters:
                    return value;
                
                case ElectricResistivityUnits.OhmsCentimeter:
                    return value/100;
                
                case ElectricResistivityUnits.Picoohmmeters:
                    return (value) * 1e-12;
                
                case ElectricResistivityUnits.Nanoohmmeters:
                    return (value) * 1e-9;
                
                case ElectricResistivityUnits.Microohmmeters:
                    return (value) * 0.000001;
                
                case ElectricResistivityUnits.Kiloohmmeters:
                    return (value) * 1000;
                
                case ElectricResistivityUnits.Megaohmmeters:
                    return (value) * 1000000;
                
                case ElectricResistivityUnits.Picoohmscentimeter:
                    return (value/100) * 1e-12;
                
                case ElectricResistivityUnits.Nanoohmscentimeter:
                    return (value/100) * 1e-9;
                
                case ElectricResistivityUnits.Microohmscentimeter:
                    return (value/100) * 0.000001;
                
                case ElectricResistivityUnits.Kiloohmscentimeter:
                    return (value/100) * 1000;
                
                case ElectricResistivityUnits.Megaohmscentimeter:
                    return (value/100) * 1000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
