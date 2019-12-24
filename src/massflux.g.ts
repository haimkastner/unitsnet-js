export enum MassFluxUnits {
    GramsPerSecondPerSquareMeter,
    Kilogramspersecondpersquaremeter
}

export class MassFlux {
    private value: number;

    public constructor(value: number, fromUnit: MassFluxUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get GramsPerSecondPerSquareMeter(): number {
        return this.convertFromBase(MassFluxUnits.GramsPerSecondPerSquareMeter);
    }

    public get Kilogramspersecondpersquaremeter(): number {
        return this.convertFromBase(MassFluxUnits.Kilogramspersecondpersquaremeter);
    }

    public static FromGramsPerSecondPerSquareMeter(value: number): MassFlux {
        return new MassFlux(value, MassFluxUnits.GramsPerSecondPerSquareMeter);
    }

    public static FromKilogramspersecondpersquaremeter(value: number): MassFlux {
        return new MassFlux(value, MassFluxUnits.Kilogramspersecondpersquaremeter);
    }

    private convertFromBase(toUnit: MassFluxUnits): number {

                switch (toUnit) {
                    
                case MassFluxUnits.GramsPerSecondPerSquareMeter:
                    return this.value*1e3;
                
                case MassFluxUnits.Kilogramspersecondpersquaremeter:
                    return (this.value*1e3) / 1000;
                
                    default:
                        break;
                }
                return NaN;
            
    }

    private convertToBase(value: number, fromUnit: MassFluxUnits): number {

                switch (fromUnit) {
                    
                case MassFluxUnits.GramsPerSecondPerSquareMeter:
                    return value/1e3;
                
                case MassFluxUnits.Kilogramspersecondpersquaremeter:
                    return (value/1e3) * 1000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
