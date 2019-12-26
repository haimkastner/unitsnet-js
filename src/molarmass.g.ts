export enum MolarMassUnits {
    GramsPerMole,
    PoundsPerMole,
    Nanogramspermole,
    Microgramspermole,
    Centigramspermole,
    Decigramspermole,
    Decagramspermole,
    Hectogramspermole,
    Kilogramspermole,
    Kilopoundspermole,
    Megapoundspermole
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

    public get Nanogramspermole(): number {
        if(this.nanogramspermoleLazy !== null){
            return this.nanogramspermoleLazy;
        }
        return this.nanogramspermoleLazy = this.convertFromBase(MolarMassUnits.Nanogramspermole);
    }

    public get Microgramspermole(): number {
        if(this.microgramspermoleLazy !== null){
            return this.microgramspermoleLazy;
        }
        return this.microgramspermoleLazy = this.convertFromBase(MolarMassUnits.Microgramspermole);
    }

    public get Centigramspermole(): number {
        if(this.centigramspermoleLazy !== null){
            return this.centigramspermoleLazy;
        }
        return this.centigramspermoleLazy = this.convertFromBase(MolarMassUnits.Centigramspermole);
    }

    public get Decigramspermole(): number {
        if(this.decigramspermoleLazy !== null){
            return this.decigramspermoleLazy;
        }
        return this.decigramspermoleLazy = this.convertFromBase(MolarMassUnits.Decigramspermole);
    }

    public get Decagramspermole(): number {
        if(this.decagramspermoleLazy !== null){
            return this.decagramspermoleLazy;
        }
        return this.decagramspermoleLazy = this.convertFromBase(MolarMassUnits.Decagramspermole);
    }

    public get Hectogramspermole(): number {
        if(this.hectogramspermoleLazy !== null){
            return this.hectogramspermoleLazy;
        }
        return this.hectogramspermoleLazy = this.convertFromBase(MolarMassUnits.Hectogramspermole);
    }

    public get Kilogramspermole(): number {
        if(this.kilogramspermoleLazy !== null){
            return this.kilogramspermoleLazy;
        }
        return this.kilogramspermoleLazy = this.convertFromBase(MolarMassUnits.Kilogramspermole);
    }

    public get Kilopoundspermole(): number {
        if(this.kilopoundspermoleLazy !== null){
            return this.kilopoundspermoleLazy;
        }
        return this.kilopoundspermoleLazy = this.convertFromBase(MolarMassUnits.Kilopoundspermole);
    }

    public get Megapoundspermole(): number {
        if(this.megapoundspermoleLazy !== null){
            return this.megapoundspermoleLazy;
        }
        return this.megapoundspermoleLazy = this.convertFromBase(MolarMassUnits.Megapoundspermole);
    }

    public static FromGramsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.GramsPerMole);
    }

    public static FromPoundsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.PoundsPerMole);
    }

    public static FromNanogramspermole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.Nanogramspermole);
    }

    public static FromMicrogramspermole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.Microgramspermole);
    }

    public static FromCentigramspermole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.Centigramspermole);
    }

    public static FromDecigramspermole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.Decigramspermole);
    }

    public static FromDecagramspermole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.Decagramspermole);
    }

    public static FromHectogramspermole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.Hectogramspermole);
    }

    public static FromKilogramspermole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.Kilogramspermole);
    }

    public static FromKilopoundspermole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.Kilopoundspermole);
    }

    public static FromMegapoundspermole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.Megapoundspermole);
    }

    private convertFromBase(toUnit: MolarMassUnits): number {
        switch (toUnit) {
                
            case MolarMassUnits.GramsPerMole:
                return this.value*1e3;
            case MolarMassUnits.PoundsPerMole:
                return this.value/0.45359237;
            case MolarMassUnits.Nanogramspermole:
                return (this.value*1e3) / 1e-9;
            case MolarMassUnits.Microgramspermole:
                return (this.value*1e3) / 0.000001;
            case MolarMassUnits.Centigramspermole:
                return (this.value*1e3) / 0.01;
            case MolarMassUnits.Decigramspermole:
                return (this.value*1e3) / 0.1;
            case MolarMassUnits.Decagramspermole:
                return (this.value*1e3) / 10;
            case MolarMassUnits.Hectogramspermole:
                return (this.value*1e3) / 100;
            case MolarMassUnits.Kilogramspermole:
                return (this.value*1e3) / 1000;
            case MolarMassUnits.Kilopoundspermole:
                return (this.value/0.45359237) / 1000;
            case MolarMassUnits.Megapoundspermole:
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
            case MolarMassUnits.Nanogramspermole:
                return (value/1e3) * 1e-9;
            case MolarMassUnits.Microgramspermole:
                return (value/1e3) * 0.000001;
            case MolarMassUnits.Centigramspermole:
                return (value/1e3) * 0.01;
            case MolarMassUnits.Decigramspermole:
                return (value/1e3) * 0.1;
            case MolarMassUnits.Decagramspermole:
                return (value/1e3) * 10;
            case MolarMassUnits.Hectogramspermole:
                return (value/1e3) * 100;
            case MolarMassUnits.Kilogramspermole:
                return (value/1e3) * 1000;
            case MolarMassUnits.Kilopoundspermole:
                return (value*0.45359237) * 1000;
            case MolarMassUnits.Megapoundspermole:
                return (value*0.45359237) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
