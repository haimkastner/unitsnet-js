export enum MolarMassUnits {
    GramsPerMole,
    PoundsPerMole,
    NanogramPerMole,
    MicrogramPerMole,
    CentigramPerMole,
    DecigramPerMole,
    DecagramPerMole,
    HectogramPerMole,
    KilogramPerMole,
    KilopoundPerMole,
    MegapoundPerMole
}

export class MolarMass {
    private value: number;
    private gramspermoleLazy: number | null = null;
    private poundspermoleLazy: number | null = null;
    private nanogrampermoleLazy: number | null = null;
    private microgrampermoleLazy: number | null = null;
    private centigrampermoleLazy: number | null = null;
    private decigrampermoleLazy: number | null = null;
    private decagrampermoleLazy: number | null = null;
    private hectogrampermoleLazy: number | null = null;
    private kilogrampermoleLazy: number | null = null;
    private kilopoundpermoleLazy: number | null = null;
    private megapoundpermoleLazy: number | null = null;

    public constructor(value: number, fromUnit: MolarMassUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get GramsPerMole(): number {
        if(this.gramspermoleLazy !== null){
            return this.gramspermoleLazy;
        }
        return this.gramspermoleLazy = this.convertFromBase(MolarMassUnits.GramsPerMole);
    }

    public get PoundsPerMole(): number {
        if(this.poundspermoleLazy !== null){
            return this.poundspermoleLazy;
        }
        return this.poundspermoleLazy = this.convertFromBase(MolarMassUnits.PoundsPerMole);
    }

    public get NanogramPerMole(): number {
        if(this.nanogrampermoleLazy !== null){
            return this.nanogrampermoleLazy;
        }
        return this.nanogrampermoleLazy = this.convertFromBase(MolarMassUnits.NanogramPerMole);
    }

    public get MicrogramPerMole(): number {
        if(this.microgrampermoleLazy !== null){
            return this.microgrampermoleLazy;
        }
        return this.microgrampermoleLazy = this.convertFromBase(MolarMassUnits.MicrogramPerMole);
    }

    public get CentigramPerMole(): number {
        if(this.centigrampermoleLazy !== null){
            return this.centigrampermoleLazy;
        }
        return this.centigrampermoleLazy = this.convertFromBase(MolarMassUnits.CentigramPerMole);
    }

    public get DecigramPerMole(): number {
        if(this.decigrampermoleLazy !== null){
            return this.decigrampermoleLazy;
        }
        return this.decigrampermoleLazy = this.convertFromBase(MolarMassUnits.DecigramPerMole);
    }

    public get DecagramPerMole(): number {
        if(this.decagrampermoleLazy !== null){
            return this.decagrampermoleLazy;
        }
        return this.decagrampermoleLazy = this.convertFromBase(MolarMassUnits.DecagramPerMole);
    }

    public get HectogramPerMole(): number {
        if(this.hectogrampermoleLazy !== null){
            return this.hectogrampermoleLazy;
        }
        return this.hectogrampermoleLazy = this.convertFromBase(MolarMassUnits.HectogramPerMole);
    }

    public get KilogramPerMole(): number {
        if(this.kilogrampermoleLazy !== null){
            return this.kilogrampermoleLazy;
        }
        return this.kilogrampermoleLazy = this.convertFromBase(MolarMassUnits.KilogramPerMole);
    }

    public get KilopoundPerMole(): number {
        if(this.kilopoundpermoleLazy !== null){
            return this.kilopoundpermoleLazy;
        }
        return this.kilopoundpermoleLazy = this.convertFromBase(MolarMassUnits.KilopoundPerMole);
    }

    public get MegapoundPerMole(): number {
        if(this.megapoundpermoleLazy !== null){
            return this.megapoundpermoleLazy;
        }
        return this.megapoundpermoleLazy = this.convertFromBase(MolarMassUnits.MegapoundPerMole);
    }

    public static FromGramsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.GramsPerMole);
    }

    public static FromPoundsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.PoundsPerMole);
    }

    public static FromNanogramPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.NanogramPerMole);
    }

    public static FromMicrogramPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.MicrogramPerMole);
    }

    public static FromCentigramPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.CentigramPerMole);
    }

    public static FromDecigramPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.DecigramPerMole);
    }

    public static FromDecagramPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.DecagramPerMole);
    }

    public static FromHectogramPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.HectogramPerMole);
    }

    public static FromKilogramPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.KilogramPerMole);
    }

    public static FromKilopoundPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.KilopoundPerMole);
    }

    public static FromMegapoundPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.MegapoundPerMole);
    }

    private convertFromBase(toUnit: MolarMassUnits): number {
        switch (toUnit) {
                
            case MolarMassUnits.GramsPerMole:
                return this.value*1e3;
            case MolarMassUnits.PoundsPerMole:
                return this.value/0.45359237;
            case MolarMassUnits.NanogramPerMole:
                return (this.value*1e3) / 1e-9;
            case MolarMassUnits.MicrogramPerMole:
                return (this.value*1e3) / 0.000001;
            case MolarMassUnits.CentigramPerMole:
                return (this.value*1e3) / 0.01;
            case MolarMassUnits.DecigramPerMole:
                return (this.value*1e3) / 0.1;
            case MolarMassUnits.DecagramPerMole:
                return (this.value*1e3) / 10;
            case MolarMassUnits.HectogramPerMole:
                return (this.value*1e3) / 100;
            case MolarMassUnits.KilogramPerMole:
                return (this.value*1e3) / 1000;
            case MolarMassUnits.KilopoundPerMole:
                return (this.value/0.45359237) / 1000;
            case MolarMassUnits.MegapoundPerMole:
                return (this.value/0.45359237) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: MolarMassUnits): number {
        switch (fromUnit) {
                
            case MolarMassUnits.GramsPerMole:
                return value/1e3;
            case MolarMassUnits.PoundsPerMole:
                return value*0.45359237;
            case MolarMassUnits.NanogramPerMole:
                return (value/1e3) * 1e-9;
            case MolarMassUnits.MicrogramPerMole:
                return (value/1e3) * 0.000001;
            case MolarMassUnits.CentigramPerMole:
                return (value/1e3) * 0.01;
            case MolarMassUnits.DecigramPerMole:
                return (value/1e3) * 0.1;
            case MolarMassUnits.DecagramPerMole:
                return (value/1e3) * 10;
            case MolarMassUnits.HectogramPerMole:
                return (value/1e3) * 100;
            case MolarMassUnits.KilogramPerMole:
                return (value/1e3) * 1000;
            case MolarMassUnits.KilopoundPerMole:
                return (value*0.45359237) * 1000;
            case MolarMassUnits.MegapoundPerMole:
                return (value*0.45359237) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: MolarMassUnits = MolarMassUnits.KilogramPerMole): string {

        switch (toUnit) {
            
            case MolarMassUnits.GramsPerMole:
                return this.GramsPerMole + ` g/mol`;
            case MolarMassUnits.PoundsPerMole:
                return this.PoundsPerMole + ` lb/mol`;
            case MolarMassUnits.NanogramPerMole:
                return this.NanogramPerMole + ` g/mol`;
            case MolarMassUnits.MicrogramPerMole:
                return this.MicrogramPerMole + ` g/mol`;
            case MolarMassUnits.CentigramPerMole:
                return this.CentigramPerMole + ` g/mol`;
            case MolarMassUnits.DecigramPerMole:
                return this.DecigramPerMole + ` g/mol`;
            case MolarMassUnits.DecagramPerMole:
                return this.DecagramPerMole + ` g/mol`;
            case MolarMassUnits.HectogramPerMole:
                return this.HectogramPerMole + ` g/mol`;
            case MolarMassUnits.KilogramPerMole:
                return this.KilogramPerMole + ` g/mol`;
            case MolarMassUnits.KilopoundPerMole:
                return this.KilopoundPerMole + ` lb/mol`;
            case MolarMassUnits.MegapoundPerMole:
                return this.MegapoundPerMole + ` lb/mol`;
        default:
            break;
        }
        return this.value.toString();
    }
}
