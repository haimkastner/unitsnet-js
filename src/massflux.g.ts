export enum MassFluxUnits {
    GramsPerSecondPerSquareMeter,
    KilogramsPerSecondPerSquareMeter
}

export class MassFlux {
    private value: number;
    private gramspersecondpersquaremeterLazy: number | null = null;
    private kilogramspersecondpersquaremeterLazy: number | null = null;

    public constructor(value: number, fromUnit: MassFluxUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get GramsPerSecondPerSquareMeter(): number {
        if(this.gramspersecondpersquaremeterLazy !== null){
            return this.gramspersecondpersquaremeterLazy;
        }
        return this.gramspersecondpersquaremeterLazy = this.convertFromBase(MassFluxUnits.GramsPerSecondPerSquareMeter);
    }

    public get KilogramsPerSecondPerSquareMeter(): number {
        if(this.kilogramspersecondpersquaremeterLazy !== null){
            return this.kilogramspersecondpersquaremeterLazy;
        }
        return this.kilogramspersecondpersquaremeterLazy = this.convertFromBase(MassFluxUnits.KilogramsPerSecondPerSquareMeter);
    }

    public static FromGramsPerSecondPerSquareMeter(value: number): MassFlux {
        return new MassFlux(value, MassFluxUnits.GramsPerSecondPerSquareMeter);
    }

    public static FromKilogramsPerSecondPerSquareMeter(value: number): MassFlux {
        return new MassFlux(value, MassFluxUnits.KilogramsPerSecondPerSquareMeter);
    }

    private convertFromBase(toUnit: MassFluxUnits): number {
        switch (toUnit) {
                
            case MassFluxUnits.GramsPerSecondPerSquareMeter:
                return this.value*1e3;
            case MassFluxUnits.KilogramsPerSecondPerSquareMeter:
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
            case MassFluxUnits.KilogramsPerSecondPerSquareMeter:
                return (value/1e3) * 1000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: MassFluxUnits = MassFluxUnits.KilogramsPerSecondPerSquareMeter): string {

        switch (toUnit) {
            
            case MassFluxUnits.GramsPerSecondPerSquareMeter:
                return this.GramsPerSecondPerSquareMeter + ` g·s⁻¹·m⁻²`;
            case MassFluxUnits.KilogramsPerSecondPerSquareMeter:
                return this.KilogramsPerSecondPerSquareMeter + ` g·s⁻¹·m⁻²`;
        default:
            break;
        }
        return this.value.toString();
    }
}
