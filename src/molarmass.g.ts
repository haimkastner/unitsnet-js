export enum MolarMassUnits {
    GramsPerMole,
    PoundsPerMole,
    Nanogramspermole,
    Microgramspermole,
    Centigramspermole,
    Decigramspermole,
    Hectogramspermole,
    Kilogramspermole,
    Kilopoundspermole,
    Megapoundspermole
}

export class MolarMass {
    private value: number;

    public constructor(value: number, fromUnit: MolarMassUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get GramsPerMole(): number {
        return this.convertFromBase(MolarMassUnits.GramsPerMole);
    }

    public get PoundsPerMole(): number {
        return this.convertFromBase(MolarMassUnits.PoundsPerMole);
    }

    public get Nanogramspermole(): number {
        return this.convertFromBase(MolarMassUnits.Nanogramspermole);
    }

    public get Microgramspermole(): number {
        return this.convertFromBase(MolarMassUnits.Microgramspermole);
    }

    public get Centigramspermole(): number {
        return this.convertFromBase(MolarMassUnits.Centigramspermole);
    }

    public get Decigramspermole(): number {
        return this.convertFromBase(MolarMassUnits.Decigramspermole);
    }

    public get Hectogramspermole(): number {
        return this.convertFromBase(MolarMassUnits.Hectogramspermole);
    }

    public get Kilogramspermole(): number {
        return this.convertFromBase(MolarMassUnits.Kilogramspermole);
    }

    public get Kilopoundspermole(): number {
        return this.convertFromBase(MolarMassUnits.Kilopoundspermole);
    }

    public get Megapoundspermole(): number {
        return this.convertFromBase(MolarMassUnits.Megapoundspermole);
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
                    return (this.value/1e3) * 1e-9;
                
                case MolarMassUnits.Microgramspermole:
                    return (this.value/1e3) * 0.000001;
                
                case MolarMassUnits.Centigramspermole:
                    return (this.value/1e3) * 0.01;
                
                case MolarMassUnits.Decigramspermole:
                    return (this.value/1e3) * 0.1;
                
                case MolarMassUnits.Hectogramspermole:
                    return (this.value/1e3) * 100;
                
                case MolarMassUnits.Kilogramspermole:
                    return (this.value/1e3) * 1000;
                
                case MolarMassUnits.Kilopoundspermole:
                    return (this.value*0.45359237) * 1000;
                
                case MolarMassUnits.Megapoundspermole:
                    return (this.value*0.45359237) * 1000000;
                
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
                    return (value*1e3) / 1e-9;
                
                case MolarMassUnits.Microgramspermole:
                    return (value*1e3) / 0.000001;
                
                case MolarMassUnits.Centigramspermole:
                    return (value*1e3) / 0.01;
                
                case MolarMassUnits.Decigramspermole:
                    return (value*1e3) / 0.1;
                
                case MolarMassUnits.Hectogramspermole:
                    return (value*1e3) / 100;
                
                case MolarMassUnits.Kilogramspermole:
                    return (value*1e3) / 1000;
                
                case MolarMassUnits.Kilopoundspermole:
                    return (value/0.45359237) / 1000;
                
                case MolarMassUnits.Megapoundspermole:
                    return (value/0.45359237) / 1000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
