export enum MassFluxUnits {
    GramsPerSecondPerSquareMeter,
    KilogramPerSecondPerSquareMeter
}

export class MassFlux {
    private value: number;
    private gramspersecondpersquaremeterLazy: number | null = null;
    private kilogrampersecondpersquaremeterLazy: number | null = null;

    public constructor(value: number, fromUnit: MassFluxUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get GramsPerSecondPerSquareMeter(): number {
        if(this.gramspersecondpersquaremeterLazy !== null){
            return this.gramspersecondpersquaremeterLazy;
        }
        return this.gramspersecondpersquaremeterLazy = this.convertFromBase(MassFluxUnits.GramsPerSecondPerSquareMeter);
    }

    public get KilogramPerSecondPerSquareMeter(): number {
        if(this.kilogrampersecondpersquaremeterLazy !== null){
            return this.kilogrampersecondpersquaremeterLazy;
        }
        return this.kilogrampersecondpersquaremeterLazy = this.convertFromBase(MassFluxUnits.KilogramPerSecondPerSquareMeter);
    }

    public static FromGramsPerSecondPerSquareMeter(value: number): MassFlux {
        return new MassFlux(value, MassFluxUnits.GramsPerSecondPerSquareMeter);
    }

    public static FromKilogramPerSecondPerSquareMeter(value: number): MassFlux {
        return new MassFlux(value, MassFluxUnits.KilogramPerSecondPerSquareMeter);
    }

    private convertFromBase(toUnit: MassFluxUnits): number {
        switch (toUnit) {
                
            case MassFluxUnits.GramsPerSecondPerSquareMeter:
                return this.value*1e3;
            case MassFluxUnits.KilogramPerSecondPerSquareMeter:
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
            case MassFluxUnits.KilogramPerSecondPerSquareMeter:
                return (value/1e3) * 1000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: MassFluxUnits = MassFluxUnits.KilogramPerSecondPerSquareMeter): string {

        switch (toUnit) {
            
            case MassFluxUnits.GramsPerSecondPerSquareMeter:
                return this.GramsPerSecondPerSquareMeter + ` g·s⁻¹·m⁻²`;
            case MassFluxUnits.KilogramPerSecondPerSquareMeter:
                return this.KilogramPerSecondPerSquareMeter + ` g·s⁻¹·m⁻²`;
        default:
            break;
        }
        return this.value.toString();
    }
}
