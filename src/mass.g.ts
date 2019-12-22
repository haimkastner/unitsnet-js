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
    Hectograms,
    Kilograms,
    Kilotonnes,
    Megatonnes,
    Kilopounds,
    Megapounds
}

export class Mass {
    private value: number;

    public constructor(value: number, fromUnit: MassUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Grams(): number {
        return this.convertFromBase(MassUnits.Grams);
    }

    public get Tonnes(): number {
        return this.convertFromBase(MassUnits.Tonnes);
    }

    public get ShortTons(): number {
        return this.convertFromBase(MassUnits.ShortTons);
    }

    public get LongTons(): number {
        return this.convertFromBase(MassUnits.LongTons);
    }

    public get Pounds(): number {
        return this.convertFromBase(MassUnits.Pounds);
    }

    public get Ounces(): number {
        return this.convertFromBase(MassUnits.Ounces);
    }

    public get Slugs(): number {
        return this.convertFromBase(MassUnits.Slugs);
    }

    public get Stone(): number {
        return this.convertFromBase(MassUnits.Stone);
    }

    public get ShortHundredweight(): number {
        return this.convertFromBase(MassUnits.ShortHundredweight);
    }

    public get LongHundredweight(): number {
        return this.convertFromBase(MassUnits.LongHundredweight);
    }

    public get Grains(): number {
        return this.convertFromBase(MassUnits.Grains);
    }

    public get SolarMasses(): number {
        return this.convertFromBase(MassUnits.SolarMasses);
    }

    public get EarthMasses(): number {
        return this.convertFromBase(MassUnits.EarthMasses);
    }

    public get Nanograms(): number {
        return this.convertFromBase(MassUnits.Nanograms);
    }

    public get Micrograms(): number {
        return this.convertFromBase(MassUnits.Micrograms);
    }

    public get Centigrams(): number {
        return this.convertFromBase(MassUnits.Centigrams);
    }

    public get Decigrams(): number {
        return this.convertFromBase(MassUnits.Decigrams);
    }

    public get Hectograms(): number {
        return this.convertFromBase(MassUnits.Hectograms);
    }

    public get Kilograms(): number {
        return this.convertFromBase(MassUnits.Kilograms);
    }

    public get Kilotonnes(): number {
        return this.convertFromBase(MassUnits.Kilotonnes);
    }

    public get Megatonnes(): number {
        return this.convertFromBase(MassUnits.Megatonnes);
    }

    public get Kilopounds(): number {
        return this.convertFromBase(MassUnits.Kilopounds);
    }

    public get Megapounds(): number {
        return this.convertFromBase(MassUnits.Megapounds);
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
                    return this.value/1e3;
                
                case MassUnits.Tonnes:
                    return this.value*1e3;
                
                case MassUnits.ShortTons:
                    return this.value*9.0718474e2;
                
                case MassUnits.LongTons:
                    return this.value*1.0160469088e3;
                
                case MassUnits.Pounds:
                    return this.value*0.45359237;
                
                case MassUnits.Ounces:
                    return this.value/35.2739619;
                
                case MassUnits.Slugs:
                    return this.value/6.852176556196105e-2;
                
                case MassUnits.Stone:
                    return this.value/0.1574731728702698;
                
                case MassUnits.ShortHundredweight:
                    return this.value/0.022046226218487758;
                
                case MassUnits.LongHundredweight:
                    return this.value/0.01968413055222121;
                
                case MassUnits.Grains:
                    return this.value/15432.358352941431;
                
                case MassUnits.SolarMasses:
                    return this.value * 1.98947e30;
                
                case MassUnits.EarthMasses:
                    return this.value * 5.9722E+24;
                
                case MassUnits.Nanograms:
                    return (this.value*1e3) * 1e-9;
                
                case MassUnits.Micrograms:
                    return (this.value*1e3) * 0.000001;
                
                case MassUnits.Centigrams:
                    return (this.value*1e3) * 0.01;
                
                case MassUnits.Decigrams:
                    return (this.value*1e3) * 0.1;
                
                case MassUnits.Hectograms:
                    return (this.value*1e3) * 100;
                
                case MassUnits.Kilograms:
                    return (this.value*1e3) * 1000;
                
                case MassUnits.Kilotonnes:
                    return (this.value/1e3) * 1000;
                
                case MassUnits.Megatonnes:
                    return (this.value/1e3) * 1000000;
                
                case MassUnits.Kilopounds:
                    return (this.value/0.45359237) * 1000;
                
                case MassUnits.Megapounds:
                    return (this.value/0.45359237) * 1000000;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: MassUnits): number {

                switch (fromUnit) {
                    
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
                    return (this.value/1e3) / 1e-9;
                
                case MassUnits.Micrograms:
                    return (this.value/1e3) / 0.000001;
                
                case MassUnits.Centigrams:
                    return (this.value/1e3) / 0.01;
                
                case MassUnits.Decigrams:
                    return (this.value/1e3) / 0.1;
                
                case MassUnits.Hectograms:
                    return (this.value/1e3) / 100;
                
                case MassUnits.Kilograms:
                    return (this.value/1e3) / 1000;
                
                case MassUnits.Kilotonnes:
                    return (this.value*1e3) / 1000;
                
                case MassUnits.Megatonnes:
                    return (this.value*1e3) / 1000000;
                
                case MassUnits.Kilopounds:
                    return (this.value*0.45359237) / 1000;
                
                case MassUnits.Megapounds:
                    return (this.value*0.45359237) / 1000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
