export enum ElectricAdmittanceUnits {
    Siemens,
    Nanosiemens,
    Microsiemens
}

export class ElectricAdmittance {
    private value: number;

    public constructor(value: number, fromUnit: ElectricAdmittanceUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Siemens(): number {
        return this.convertFromBase(ElectricAdmittanceUnits.Siemens);
    }

    public get Nanosiemens(): number {
        return this.convertFromBase(ElectricAdmittanceUnits.Nanosiemens);
    }

    public get Microsiemens(): number {
        return this.convertFromBase(ElectricAdmittanceUnits.Microsiemens);
    }

    public static FromSiemens(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Siemens);
    }

    public static FromNanosiemens(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Nanosiemens);
    }

    public static FromMicrosiemens(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Microsiemens);
    }

    private convertFromBase(toUnit: ElectricAdmittanceUnits): number {

            switch (toUnit) {
                
                case ElectricAdmittanceUnits.Siemens:
                    return this.value;
                
                case ElectricAdmittanceUnits.Nanosiemens:
                    return (this.value) * 1e-9;
                
                case ElectricAdmittanceUnits.Microsiemens:
                    return (this.value) * 0.000001;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: ElectricAdmittanceUnits): number {

                switch (fromUnit) {
                    
                case ElectricAdmittanceUnits.Siemens:
                    return value;
                
                case ElectricAdmittanceUnits.Nanosiemens:
                    return (value) / 1e-9;
                
                case ElectricAdmittanceUnits.Microsiemens:
                    return (value) / 0.000001;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
