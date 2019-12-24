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

    public constructor(value: number, fromUnit: ElectricCurrentUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Amperes(): number {
        return this.convertFromBase(ElectricCurrentUnits.Amperes);
    }

    public get Picoamperes(): number {
        return this.convertFromBase(ElectricCurrentUnits.Picoamperes);
    }

    public get Nanoamperes(): number {
        return this.convertFromBase(ElectricCurrentUnits.Nanoamperes);
    }

    public get Microamperes(): number {
        return this.convertFromBase(ElectricCurrentUnits.Microamperes);
    }

    public get Centiamperes(): number {
        return this.convertFromBase(ElectricCurrentUnits.Centiamperes);
    }

    public get Kiloamperes(): number {
        return this.convertFromBase(ElectricCurrentUnits.Kiloamperes);
    }

    public get Megaamperes(): number {
        return this.convertFromBase(ElectricCurrentUnits.Megaamperes);
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
                    return (this.value) * 1e-12;
                
                case ElectricCurrentUnits.Nanoamperes:
                    return (this.value) * 1e-9;
                
                case ElectricCurrentUnits.Microamperes:
                    return (this.value) * 0.000001;
                
                case ElectricCurrentUnits.Centiamperes:
                    return (this.value) * 0.01;
                
                case ElectricCurrentUnits.Kiloamperes:
                    return (this.value) * 1000;
                
                case ElectricCurrentUnits.Megaamperes:
                    return (this.value) * 1000000;
                
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
                    return (value) / 1e-12;
                
                case ElectricCurrentUnits.Nanoamperes:
                    return (value) / 1e-9;
                
                case ElectricCurrentUnits.Microamperes:
                    return (value) / 0.000001;
                
                case ElectricCurrentUnits.Centiamperes:
                    return (value) / 0.01;
                
                case ElectricCurrentUnits.Kiloamperes:
                    return (value) / 1000;
                
                case ElectricCurrentUnits.Megaamperes:
                    return (value) / 1000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
