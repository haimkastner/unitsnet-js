export enum ElectricConductivityUnits {
    SiemensPerMeter,
    SiemensPerInch,
    SiemensPerFoot
}

export class ElectricConductivity {
    private value: number;

    public constructor(value: number, fromUnit: ElectricConductivityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get SiemensPerMeter(): number {
        return this.convertFromBase(ElectricConductivityUnits.SiemensPerMeter);
    }

    public get SiemensPerInch(): number {
        return this.convertFromBase(ElectricConductivityUnits.SiemensPerInch);
    }

    public get SiemensPerFoot(): number {
        return this.convertFromBase(ElectricConductivityUnits.SiemensPerFoot);
    }

    public static FromSiemensPerMeter(value: number): ElectricConductivity {
        return new ElectricConductivity(value, ElectricConductivityUnits.SiemensPerMeter);
    }

    public static FromSiemensPerInch(value: number): ElectricConductivity {
        return new ElectricConductivity(value, ElectricConductivityUnits.SiemensPerInch);
    }

    public static FromSiemensPerFoot(value: number): ElectricConductivity {
        return new ElectricConductivity(value, ElectricConductivityUnits.SiemensPerFoot);
    }

    private convertFromBase(toUnit: ElectricConductivityUnits): number {

                switch (toUnit) {
                    
                case ElectricConductivityUnits.SiemensPerMeter:
                    return this.value;
                
                case ElectricConductivityUnits.SiemensPerInch:
                    return this.value / 3.937007874015748e1;
                
                case ElectricConductivityUnits.SiemensPerFoot:
                    return this.value / 3.2808398950131234;
                
                    default:
                        break;
                }
                return NaN;
            
    }

    private convertToBase(value: number, fromUnit: ElectricConductivityUnits): number {

                switch (fromUnit) {
                    
                case ElectricConductivityUnits.SiemensPerMeter:
                    return value;
                
                case ElectricConductivityUnits.SiemensPerInch:
                    return value * 3.937007874015748e1;
                
                case ElectricConductivityUnits.SiemensPerFoot:
                    return value * 3.2808398950131234;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
