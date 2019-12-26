export enum ElectricAdmittanceUnits {
    Siemens,
    Nanosiemens,
    Microsiemens
}

export class ElectricAdmittance {
    private value: number;
    private siemensLazy: number | null = null;
    private nanosiemensLazy: number | null = null;
    private microsiemensLazy: number | null = null;

    public constructor(value: number, fromUnit: ElectricAdmittanceUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Siemens(): number {
        if(this.siemensLazy !== null){
            return this.siemensLazy;
        }
        return this.siemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Siemens);
    }

    public get Nanosiemens(): number {
        if(this.nanosiemensLazy !== null){
            return this.nanosiemensLazy;
        }
        return this.nanosiemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Nanosiemens);
    }

    public get Microsiemens(): number {
        if(this.microsiemensLazy !== null){
            return this.microsiemensLazy;
        }
        return this.microsiemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Microsiemens);
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
                return (this.value) / 1e-9;
            case ElectricAdmittanceUnits.Microsiemens:
                return (this.value) / 0.000001;
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
                return (value) * 1e-9;
            case ElectricAdmittanceUnits.Microsiemens:
                return (value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: ElectricAdmittanceUnits = ElectricAdmittanceUnits.Siemens): string {

        switch (toUnit) {
            
            case ElectricAdmittanceUnits.Siemens:
                return this.Siemens + ` S`;
            case ElectricAdmittanceUnits.Nanosiemens:
                return this.Nanosiemens + ` S`;
            case ElectricAdmittanceUnits.Microsiemens:
                return this.Microsiemens + ` S`;
        default:
            break;
        }
        return this.value.toString();
    }
}
