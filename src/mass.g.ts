export enum MassUnits {
    Grams,
    Tonnes,
    ShortTons,
    LongTons,
    Pounds,
    Ounces,
    Slugs,
    Stone,
    ShortHundredweight,
    LongHundredweight,
    Grains,
    SolarMasses,
    EarthMasses,
    Nanogram,
    Microgram,
    Centigram,
    Decigram,
    Decagram,
    Hectogram,
    Kilogram,
    Kilotonne,
    Megatonne,
    Kilopound,
    Megapound
}

export class Mass {
    private value: number;
    private gramsLazy: number | null = null;
    private tonnesLazy: number | null = null;
    private shorttonsLazy: number | null = null;
    private longtonsLazy: number | null = null;
    private poundsLazy: number | null = null;
    private ouncesLazy: number | null = null;
    private slugsLazy: number | null = null;
    private stoneLazy: number | null = null;
    private shorthundredweightLazy: number | null = null;
    private longhundredweightLazy: number | null = null;
    private grainsLazy: number | null = null;
    private solarmassesLazy: number | null = null;
    private earthmassesLazy: number | null = null;
    private nanogramLazy: number | null = null;
    private microgramLazy: number | null = null;
    private centigramLazy: number | null = null;
    private decigramLazy: number | null = null;
    private decagramLazy: number | null = null;
    private hectogramLazy: number | null = null;
    private kilogramLazy: number | null = null;
    private kilotonneLazy: number | null = null;
    private megatonneLazy: number | null = null;
    private kilopoundLazy: number | null = null;
    private megapoundLazy: number | null = null;

    public constructor(value: number, fromUnit: MassUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Grams(): number {
        if(this.gramsLazy !== null){
            return this.gramsLazy;
        }
        return this.gramsLazy = this.convertFromBase(MassUnits.Grams);
    }

    public get Tonnes(): number {
        if(this.tonnesLazy !== null){
            return this.tonnesLazy;
        }
        return this.tonnesLazy = this.convertFromBase(MassUnits.Tonnes);
    }

    public get ShortTons(): number {
        if(this.shorttonsLazy !== null){
            return this.shorttonsLazy;
        }
        return this.shorttonsLazy = this.convertFromBase(MassUnits.ShortTons);
    }

    public get LongTons(): number {
        if(this.longtonsLazy !== null){
            return this.longtonsLazy;
        }
        return this.longtonsLazy = this.convertFromBase(MassUnits.LongTons);
    }

    public get Pounds(): number {
        if(this.poundsLazy !== null){
            return this.poundsLazy;
        }
        return this.poundsLazy = this.convertFromBase(MassUnits.Pounds);
    }

    public get Ounces(): number {
        if(this.ouncesLazy !== null){
            return this.ouncesLazy;
        }
        return this.ouncesLazy = this.convertFromBase(MassUnits.Ounces);
    }

    public get Slugs(): number {
        if(this.slugsLazy !== null){
            return this.slugsLazy;
        }
        return this.slugsLazy = this.convertFromBase(MassUnits.Slugs);
    }

    public get Stone(): number {
        if(this.stoneLazy !== null){
            return this.stoneLazy;
        }
        return this.stoneLazy = this.convertFromBase(MassUnits.Stone);
    }

    public get ShortHundredweight(): number {
        if(this.shorthundredweightLazy !== null){
            return this.shorthundredweightLazy;
        }
        return this.shorthundredweightLazy = this.convertFromBase(MassUnits.ShortHundredweight);
    }

    public get LongHundredweight(): number {
        if(this.longhundredweightLazy !== null){
            return this.longhundredweightLazy;
        }
        return this.longhundredweightLazy = this.convertFromBase(MassUnits.LongHundredweight);
    }

    public get Grains(): number {
        if(this.grainsLazy !== null){
            return this.grainsLazy;
        }
        return this.grainsLazy = this.convertFromBase(MassUnits.Grains);
    }

    public get SolarMasses(): number {
        if(this.solarmassesLazy !== null){
            return this.solarmassesLazy;
        }
        return this.solarmassesLazy = this.convertFromBase(MassUnits.SolarMasses);
    }

    public get EarthMasses(): number {
        if(this.earthmassesLazy !== null){
            return this.earthmassesLazy;
        }
        return this.earthmassesLazy = this.convertFromBase(MassUnits.EarthMasses);
    }

    public get Nanogram(): number {
        if(this.nanogramLazy !== null){
            return this.nanogramLazy;
        }
        return this.nanogramLazy = this.convertFromBase(MassUnits.Nanogram);
    }

    public get Microgram(): number {
        if(this.microgramLazy !== null){
            return this.microgramLazy;
        }
        return this.microgramLazy = this.convertFromBase(MassUnits.Microgram);
    }

    public get Centigram(): number {
        if(this.centigramLazy !== null){
            return this.centigramLazy;
        }
        return this.centigramLazy = this.convertFromBase(MassUnits.Centigram);
    }

    public get Decigram(): number {
        if(this.decigramLazy !== null){
            return this.decigramLazy;
        }
        return this.decigramLazy = this.convertFromBase(MassUnits.Decigram);
    }

    public get Decagram(): number {
        if(this.decagramLazy !== null){
            return this.decagramLazy;
        }
        return this.decagramLazy = this.convertFromBase(MassUnits.Decagram);
    }

    public get Hectogram(): number {
        if(this.hectogramLazy !== null){
            return this.hectogramLazy;
        }
        return this.hectogramLazy = this.convertFromBase(MassUnits.Hectogram);
    }

    public get Kilogram(): number {
        if(this.kilogramLazy !== null){
            return this.kilogramLazy;
        }
        return this.kilogramLazy = this.convertFromBase(MassUnits.Kilogram);
    }

    public get Kilotonne(): number {
        if(this.kilotonneLazy !== null){
            return this.kilotonneLazy;
        }
        return this.kilotonneLazy = this.convertFromBase(MassUnits.Kilotonne);
    }

    public get Megatonne(): number {
        if(this.megatonneLazy !== null){
            return this.megatonneLazy;
        }
        return this.megatonneLazy = this.convertFromBase(MassUnits.Megatonne);
    }

    public get Kilopound(): number {
        if(this.kilopoundLazy !== null){
            return this.kilopoundLazy;
        }
        return this.kilopoundLazy = this.convertFromBase(MassUnits.Kilopound);
    }

    public get Megapound(): number {
        if(this.megapoundLazy !== null){
            return this.megapoundLazy;
        }
        return this.megapoundLazy = this.convertFromBase(MassUnits.Megapound);
    }

    public static FromGrams(value: number): Mass {
        return new Mass(value, MassUnits.Grams);
    }

    public static FromTonnes(value: number): Mass {
        return new Mass(value, MassUnits.Tonnes);
    }

    public static FromShortTons(value: number): Mass {
        return new Mass(value, MassUnits.ShortTons);
    }

    public static FromLongTons(value: number): Mass {
        return new Mass(value, MassUnits.LongTons);
    }

    public static FromPounds(value: number): Mass {
        return new Mass(value, MassUnits.Pounds);
    }

    public static FromOunces(value: number): Mass {
        return new Mass(value, MassUnits.Ounces);
    }

    public static FromSlugs(value: number): Mass {
        return new Mass(value, MassUnits.Slugs);
    }

    public static FromStone(value: number): Mass {
        return new Mass(value, MassUnits.Stone);
    }

    public static FromShortHundredweight(value: number): Mass {
        return new Mass(value, MassUnits.ShortHundredweight);
    }

    public static FromLongHundredweight(value: number): Mass {
        return new Mass(value, MassUnits.LongHundredweight);
    }

    public static FromGrains(value: number): Mass {
        return new Mass(value, MassUnits.Grains);
    }

    public static FromSolarMasses(value: number): Mass {
        return new Mass(value, MassUnits.SolarMasses);
    }

    public static FromEarthMasses(value: number): Mass {
        return new Mass(value, MassUnits.EarthMasses);
    }

    public static FromNanogram(value: number): Mass {
        return new Mass(value, MassUnits.Nanogram);
    }

    public static FromMicrogram(value: number): Mass {
        return new Mass(value, MassUnits.Microgram);
    }

    public static FromCentigram(value: number): Mass {
        return new Mass(value, MassUnits.Centigram);
    }

    public static FromDecigram(value: number): Mass {
        return new Mass(value, MassUnits.Decigram);
    }

    public static FromDecagram(value: number): Mass {
        return new Mass(value, MassUnits.Decagram);
    }

    public static FromHectogram(value: number): Mass {
        return new Mass(value, MassUnits.Hectogram);
    }

    public static FromKilogram(value: number): Mass {
        return new Mass(value, MassUnits.Kilogram);
    }

    public static FromKilotonne(value: number): Mass {
        return new Mass(value, MassUnits.Kilotonne);
    }

    public static FromMegatonne(value: number): Mass {
        return new Mass(value, MassUnits.Megatonne);
    }

    public static FromKilopound(value: number): Mass {
        return new Mass(value, MassUnits.Kilopound);
    }

    public static FromMegapound(value: number): Mass {
        return new Mass(value, MassUnits.Megapound);
    }

    private convertFromBase(toUnit: MassUnits): number {
        switch (toUnit) {
                
            case MassUnits.Grams:
                return this.value*1e3;
            case MassUnits.Tonnes:
                return this.value/1e3;
            case MassUnits.ShortTons:
                return this.value/9.0718474e2;
            case MassUnits.LongTons:
                return this.value/1.0160469088e3;
            case MassUnits.Pounds:
                return this.value/0.45359237;
            case MassUnits.Ounces:
                return this.value*35.2739619;
            case MassUnits.Slugs:
                return this.value*6.852176556196105e-2;
            case MassUnits.Stone:
                return this.value*0.1574731728702698;
            case MassUnits.ShortHundredweight:
                return this.value*0.022046226218487758;
            case MassUnits.LongHundredweight:
                return this.value*0.01968413055222121;
            case MassUnits.Grains:
                return this.value*15432.358352941431;
            case MassUnits.SolarMasses:
                return this.value / 1.98947e30;
            case MassUnits.EarthMasses:
                return this.value / 5.9722E+24;
            case MassUnits.Nanogram:
                return (this.value*1e3) / 1e-9;
            case MassUnits.Microgram:
                return (this.value*1e3) / 0.000001;
            case MassUnits.Centigram:
                return (this.value*1e3) / 0.01;
            case MassUnits.Decigram:
                return (this.value*1e3) / 0.1;
            case MassUnits.Decagram:
                return (this.value*1e3) / 10;
            case MassUnits.Hectogram:
                return (this.value*1e3) / 100;
            case MassUnits.Kilogram:
                return (this.value*1e3) / 1000;
            case MassUnits.Kilotonne:
                return (this.value/1e3) / 1000;
            case MassUnits.Megatonne:
                return (this.value/1e3) / 1000000;
            case MassUnits.Kilopound:
                return (this.value/0.45359237) / 1000;
            case MassUnits.Megapound:
                return (this.value/0.45359237) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: MassUnits): number {
        switch (fromUnit) {
                
            case MassUnits.Grams:
                return value/1e3;
            case MassUnits.Tonnes:
                return value*1e3;
            case MassUnits.ShortTons:
                return value*9.0718474e2;
            case MassUnits.LongTons:
                return value*1.0160469088e3;
            case MassUnits.Pounds:
                return value*0.45359237;
            case MassUnits.Ounces:
                return value/35.2739619;
            case MassUnits.Slugs:
                return value/6.852176556196105e-2;
            case MassUnits.Stone:
                return value/0.1574731728702698;
            case MassUnits.ShortHundredweight:
                return value/0.022046226218487758;
            case MassUnits.LongHundredweight:
                return value/0.01968413055222121;
            case MassUnits.Grains:
                return value/15432.358352941431;
            case MassUnits.SolarMasses:
                return value * 1.98947e30;
            case MassUnits.EarthMasses:
                return value * 5.9722E+24;
            case MassUnits.Nanogram:
                return (value/1e3) * 1e-9;
            case MassUnits.Microgram:
                return (value/1e3) * 0.000001;
            case MassUnits.Centigram:
                return (value/1e3) * 0.01;
            case MassUnits.Decigram:
                return (value/1e3) * 0.1;
            case MassUnits.Decagram:
                return (value/1e3) * 10;
            case MassUnits.Hectogram:
                return (value/1e3) * 100;
            case MassUnits.Kilogram:
                return (value/1e3) * 1000;
            case MassUnits.Kilotonne:
                return (value*1e3) * 1000;
            case MassUnits.Megatonne:
                return (value*1e3) * 1000000;
            case MassUnits.Kilopound:
                return (value*0.45359237) * 1000;
            case MassUnits.Megapound:
                return (value*0.45359237) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: MassUnits = MassUnits.Kilogram): string {

        switch (toUnit) {
            
            case MassUnits.Grams:
                return this.Grams + ` g`;
            case MassUnits.Tonnes:
                return this.Tonnes + ` t`;
            case MassUnits.ShortTons:
                return this.ShortTons + ` short tn`;
            case MassUnits.LongTons:
                return this.LongTons + ` long tn`;
            case MassUnits.Pounds:
                return this.Pounds + ` lb`;
            case MassUnits.Ounces:
                return this.Ounces + ` oz`;
            case MassUnits.Slugs:
                return this.Slugs + ` slug`;
            case MassUnits.Stone:
                return this.Stone + ` st`;
            case MassUnits.ShortHundredweight:
                return this.ShortHundredweight + ` cwt`;
            case MassUnits.LongHundredweight:
                return this.LongHundredweight + ` cwt`;
            case MassUnits.Grains:
                return this.Grains + ` gr`;
            case MassUnits.SolarMasses:
                return this.SolarMasses + ` M⊙`;
            case MassUnits.EarthMasses:
                return this.EarthMasses + ` em`;
            case MassUnits.Nanogram:
                return this.Nanogram + ` g`;
            case MassUnits.Microgram:
                return this.Microgram + ` g`;
            case MassUnits.Centigram:
                return this.Centigram + ` g`;
            case MassUnits.Decigram:
                return this.Decigram + ` g`;
            case MassUnits.Decagram:
                return this.Decagram + ` g`;
            case MassUnits.Hectogram:
                return this.Hectogram + ` g`;
            case MassUnits.Kilogram:
                return this.Kilogram + ` g`;
            case MassUnits.Kilotonne:
                return this.Kilotonne + ` t`;
            case MassUnits.Megatonne:
                return this.Megatonne + ` t`;
            case MassUnits.Kilopound:
                return this.Kilopound + ` lb`;
            case MassUnits.Megapound:
                return this.Megapound + ` lb`;
        default:
            break;
        }
        return this.value.toString();
    }
}
