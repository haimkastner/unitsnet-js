export enum MolarMassUnits {
    GramsPerMole,
    PoundsPerMole,
    NanogramsPerMole,
    MicrogramsPerMole,
    CentigramsPerMole,
    DecigramsPerMole,
    DecagramsPerMole,
    HectogramsPerMole,
    KilogramsPerMole,
    KilopoundsPerMole,
    MegapoundsPerMole
}

export class MolarMass {
    private value: number;
    private gramspermoleLazy: number | null = null;
    private poundspermoleLazy: number | null = null;
    private nanogramspermoleLazy: number | null = null;
    private microgramspermoleLazy: number | null = null;
    private centigramspermoleLazy: number | null = null;
    private decigramspermoleLazy: number | null = null;
    private decagramspermoleLazy: number | null = null;
    private hectogramspermoleLazy: number | null = null;
    private kilogramspermoleLazy: number | null = null;
    private kilopoundspermoleLazy: number | null = null;
    private megapoundspermoleLazy: number | null = null;

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

    public get NanogramsPerMole(): number {
        if(this.nanogramspermoleLazy !== null){
            return this.nanogramspermoleLazy;
        }
        return this.nanogramspermoleLazy = this.convertFromBase(MolarMassUnits.NanogramsPerMole);
    }

    public get MicrogramsPerMole(): number {
        if(this.microgramspermoleLazy !== null){
            return this.microgramspermoleLazy;
        }
        return this.microgramspermoleLazy = this.convertFromBase(MolarMassUnits.MicrogramsPerMole);
    }

    public get CentigramsPerMole(): number {
        if(this.centigramspermoleLazy !== null){
            return this.centigramspermoleLazy;
        }
        return this.centigramspermoleLazy = this.convertFromBase(MolarMassUnits.CentigramsPerMole);
    }

    public get DecigramsPerMole(): number {
        if(this.decigramspermoleLazy !== null){
            return this.decigramspermoleLazy;
        }
        return this.decigramspermoleLazy = this.convertFromBase(MolarMassUnits.DecigramsPerMole);
    }

    public get DecagramsPerMole(): number {
        if(this.decagramspermoleLazy !== null){
            return this.decagramspermoleLazy;
        }
        return this.decagramspermoleLazy = this.convertFromBase(MolarMassUnits.DecagramsPerMole);
    }

    public get HectogramsPerMole(): number {
        if(this.hectogramspermoleLazy !== null){
            return this.hectogramspermoleLazy;
        }
        return this.hectogramspermoleLazy = this.convertFromBase(MolarMassUnits.HectogramsPerMole);
    }

    public get KilogramsPerMole(): number {
        if(this.kilogramspermoleLazy !== null){
            return this.kilogramspermoleLazy;
        }
        return this.kilogramspermoleLazy = this.convertFromBase(MolarMassUnits.KilogramsPerMole);
    }

    public get KilopoundsPerMole(): number {
        if(this.kilopoundspermoleLazy !== null){
            return this.kilopoundspermoleLazy;
        }
        return this.kilopoundspermoleLazy = this.convertFromBase(MolarMassUnits.KilopoundsPerMole);
    }

    public get MegapoundsPerMole(): number {
        if(this.megapoundspermoleLazy !== null){
            return this.megapoundspermoleLazy;
        }
        return this.megapoundspermoleLazy = this.convertFromBase(MolarMassUnits.MegapoundsPerMole);
    }

    public static FromGramsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.GramsPerMole);
    }

    public static FromPoundsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.PoundsPerMole);
    }

    public static FromNanogramsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.NanogramsPerMole);
    }

    public static FromMicrogramsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.MicrogramsPerMole);
    }

    public static FromCentigramsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.CentigramsPerMole);
    }

    public static FromDecigramsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.DecigramsPerMole);
    }

    public static FromDecagramsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.DecagramsPerMole);
    }

    public static FromHectogramsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.HectogramsPerMole);
    }

    public static FromKilogramsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.KilogramsPerMole);
    }

    public static FromKilopoundsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.KilopoundsPerMole);
    }

    public static FromMegapoundsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.MegapoundsPerMole);
    }

    private convertFromBase(toUnit: MolarMassUnits): number {
        switch (toUnit) {
                
            case MolarMassUnits.GramsPerMole:
                return this.value*1e3;
            case MolarMassUnits.PoundsPerMole:
                return this.value/0.45359237;
            case MolarMassUnits.NanogramsPerMole:
                return (this.value*1e3) / 1e-9;
            case MolarMassUnits.MicrogramsPerMole:
                return (this.value*1e3) / 0.000001;
            case MolarMassUnits.CentigramsPerMole:
                return (this.value*1e3) / 0.01;
            case MolarMassUnits.DecigramsPerMole:
                return (this.value*1e3) / 0.1;
            case MolarMassUnits.DecagramsPerMole:
                return (this.value*1e3) / 10;
            case MolarMassUnits.HectogramsPerMole:
                return (this.value*1e3) / 100;
            case MolarMassUnits.KilogramsPerMole:
                return (this.value*1e3) / 1000;
            case MolarMassUnits.KilopoundsPerMole:
                return (this.value/0.45359237) / 1000;
            case MolarMassUnits.MegapoundsPerMole:
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
            case MolarMassUnits.NanogramsPerMole:
                return (value/1e3) * 1e-9;
            case MolarMassUnits.MicrogramsPerMole:
                return (value/1e3) * 0.000001;
            case MolarMassUnits.CentigramsPerMole:
                return (value/1e3) * 0.01;
            case MolarMassUnits.DecigramsPerMole:
                return (value/1e3) * 0.1;
            case MolarMassUnits.DecagramsPerMole:
                return (value/1e3) * 10;
            case MolarMassUnits.HectogramsPerMole:
                return (value/1e3) * 100;
            case MolarMassUnits.KilogramsPerMole:
                return (value/1e3) * 1000;
            case MolarMassUnits.KilopoundsPerMole:
                return (value*0.45359237) * 1000;
            case MolarMassUnits.MegapoundsPerMole:
                return (value*0.45359237) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: MolarMassUnits = MolarMassUnits.KilogramsPerMole): string {

        switch (toUnit) {
            
            case MolarMassUnits.GramsPerMole:
                return this.GramsPerMole + ` g/mol`;
            case MolarMassUnits.PoundsPerMole:
                return this.PoundsPerMole + ` lb/mol`;
            case MolarMassUnits.NanogramsPerMole:
                return this.NanogramsPerMole + ` g/mol`;
            case MolarMassUnits.MicrogramsPerMole:
                return this.MicrogramsPerMole + ` g/mol`;
            case MolarMassUnits.CentigramsPerMole:
                return this.CentigramsPerMole + ` g/mol`;
            case MolarMassUnits.DecigramsPerMole:
                return this.DecigramsPerMole + ` g/mol`;
            case MolarMassUnits.DecagramsPerMole:
                return this.DecagramsPerMole + ` g/mol`;
            case MolarMassUnits.HectogramsPerMole:
                return this.HectogramsPerMole + ` g/mol`;
            case MolarMassUnits.KilogramsPerMole:
                return this.KilogramsPerMole + ` g/mol`;
            case MolarMassUnits.KilopoundsPerMole:
                return this.KilopoundsPerMole + ` lb/mol`;
            case MolarMassUnits.MegapoundsPerMole:
                return this.MegapoundsPerMole + ` lb/mol`;
        default:
            break;
        }
        return this.value.toString();
    }
}
