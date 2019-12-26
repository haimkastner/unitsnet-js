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
    Nanograms,
    Micrograms,
    Centigrams,
    Decigrams,
    Decagrams,
    Hectograms,
    Kilograms,
    Kilotonnes,
    Megatonnes,
    Kilopounds,
    Megapounds
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
    private nanogramsLazy: number | null = null;
    private microgramsLazy: number | null = null;
    private centigramsLazy: number | null = null;
    private decigramsLazy: number | null = null;
    private decagramsLazy: number | null = null;
    private hectogramsLazy: number | null = null;
    private kilogramsLazy: number | null = null;
    private kilotonnesLazy: number | null = null;
    private megatonnesLazy: number | null = null;
    private kilopoundsLazy: number | null = null;
    private megapoundsLazy: number | null = null;

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

    public get Nanograms(): number {
        if(this.nanogramsLazy !== null){
            return this.nanogramsLazy;
        }
        return this.nanogramsLazy = this.convertFromBase(MassUnits.Nanograms);
    }

    public get Micrograms(): number {
        if(this.microgramsLazy !== null){
            return this.microgramsLazy;
        }
        return this.microgramsLazy = this.convertFromBase(MassUnits.Micrograms);
    }

    public get Centigrams(): number {
        if(this.centigramsLazy !== null){
            return this.centigramsLazy;
        }
        return this.centigramsLazy = this.convertFromBase(MassUnits.Centigrams);
    }

    public get Decigrams(): number {
        if(this.decigramsLazy !== null){
            return this.decigramsLazy;
        }
        return this.decigramsLazy = this.convertFromBase(MassUnits.Decigrams);
    }

    public get Decagrams(): number {
        if(this.decagramsLazy !== null){
            return this.decagramsLazy;
        }
        return this.decagramsLazy = this.convertFromBase(MassUnits.Decagrams);
    }

    public get Hectograms(): number {
        if(this.hectogramsLazy !== null){
            return this.hectogramsLazy;
        }
        return this.hectogramsLazy = this.convertFromBase(MassUnits.Hectograms);
    }

    public get Kilograms(): number {
        if(this.kilogramsLazy !== null){
            return this.kilogramsLazy;
        }
        return this.kilogramsLazy = this.convertFromBase(MassUnits.Kilograms);
    }

    public get Kilotonnes(): number {
        if(this.kilotonnesLazy !== null){
            return this.kilotonnesLazy;
        }
        return this.kilotonnesLazy = this.convertFromBase(MassUnits.Kilotonnes);
    }

    public get Megatonnes(): number {
        if(this.megatonnesLazy !== null){
            return this.megatonnesLazy;
        }
        return this.megatonnesLazy = this.convertFromBase(MassUnits.Megatonnes);
    }

    public get Kilopounds(): number {
        if(this.kilopoundsLazy !== null){
            return this.kilopoundsLazy;
        }
        return this.kilopoundsLazy = this.convertFromBase(MassUnits.Kilopounds);
    }

    public get Megapounds(): number {
        if(this.megapoundsLazy !== null){
            return this.megapoundsLazy;
        }
        return this.megapoundsLazy = this.convertFromBase(MassUnits.Megapounds);
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

    public static FromNanograms(value: number): Mass {
        return new Mass(value, MassUnits.Nanograms);
    }

    public static FromMicrograms(value: number): Mass {
        return new Mass(value, MassUnits.Micrograms);
    }

    public static FromCentigrams(value: number): Mass {
        return new Mass(value, MassUnits.Centigrams);
    }

    public static FromDecigrams(value: number): Mass {
        return new Mass(value, MassUnits.Decigrams);
    }

    public static FromDecagrams(value: number): Mass {
        return new Mass(value, MassUnits.Decagrams);
    }

    public static FromHectograms(value: number): Mass {
        return new Mass(value, MassUnits.Hectograms);
    }

    public static FromKilograms(value: number): Mass {
        return new Mass(value, MassUnits.Kilograms);
    }

    public static FromKilotonnes(value: number): Mass {
        return new Mass(value, MassUnits.Kilotonnes);
    }

    public static FromMegatonnes(value: number): Mass {
        return new Mass(value, MassUnits.Megatonnes);
    }

    public static FromKilopounds(value: number): Mass {
        return new Mass(value, MassUnits.Kilopounds);
    }

    public static FromMegapounds(value: number): Mass {
        return new Mass(value, MassUnits.Megapounds);
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
            case MassUnits.Nanograms:
                return (this.value*1e3) / 1e-9;
            case MassUnits.Micrograms:
                return (this.value*1e3) / 0.000001;
            case MassUnits.Centigrams:
                return (this.value*1e3) / 0.01;
            case MassUnits.Decigrams:
                return (this.value*1e3) / 0.1;
            case MassUnits.Decagrams:
                return (this.value*1e3) / 10;
            case MassUnits.Hectograms:
                return (this.value*1e3) / 100;
            case MassUnits.Kilograms:
                return (this.value*1e3) / 1000;
            case MassUnits.Kilotonnes:
                return (this.value/1e3) / 1000;
            case MassUnits.Megatonnes:
                return (this.value/1e3) / 1000000;
            case MassUnits.Kilopounds:
                return (this.value/0.45359237) / 1000;
            case MassUnits.Megapounds:
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
            case MassUnits.Nanograms:
                return (value/1e3) * 1e-9;
            case MassUnits.Micrograms:
                return (value/1e3) * 0.000001;
            case MassUnits.Centigrams:
                return (value/1e3) * 0.01;
            case MassUnits.Decigrams:
                return (value/1e3) * 0.1;
            case MassUnits.Decagrams:
                return (value/1e3) * 10;
            case MassUnits.Hectograms:
                return (value/1e3) * 100;
            case MassUnits.Kilograms:
                return (value/1e3) * 1000;
            case MassUnits.Kilotonnes:
                return (value*1e3) * 1000;
            case MassUnits.Megatonnes:
                return (value*1e3) * 1000000;
            case MassUnits.Kilopounds:
                return (value*0.45359237) * 1000;
            case MassUnits.Megapounds:
                return (value*0.45359237) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
