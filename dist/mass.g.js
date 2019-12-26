"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** MassUnits enumeration */
var MassUnits;
(function (MassUnits) {
    /** */
    MassUnits[MassUnits["Grams"] = 0] = "Grams";
    /** */
    MassUnits[MassUnits["Tonnes"] = 1] = "Tonnes";
    /** The short ton is a unit of mass equal to 2,000 pounds (907.18474 kg), that is most commonly used in the United States – known there simply as the ton. */
    MassUnits[MassUnits["ShortTons"] = 2] = "ShortTons";
    /** Long ton (weight ton or Imperial ton) is a unit of mass equal to 2,240 pounds (1,016 kg) and is the name for the unit called the "ton" in the avoirdupois or Imperial system of measurements that was used in the United Kingdom and several other Commonwealth countries before metrication. */
    MassUnits[MassUnits["LongTons"] = 3] = "LongTons";
    /** The pound or pound-mass (abbreviations: lb, lbm) is a unit of mass used in the imperial, United States customary and other systems of measurement. A number of different definitions have been used, the most common today being the international avoirdupois pound which is legally defined as exactly 0.45359237 kilograms, and which is divided into 16 avoirdupois ounces. */
    MassUnits[MassUnits["Pounds"] = 4] = "Pounds";
    /** An ounce (abbreviated oz) is usually the international avoirdupois ounce as used in the United States customary and British imperial systems, which is equal to one-sixteenth of a pound or approximately 28 grams. The abbreviation 'oz' derives from the Italian word onza (now spelled oncia). */
    MassUnits[MassUnits["Ounces"] = 5] = "Ounces";
    /** The slug (abbreviation slug) is a unit of mass that is accelerated by 1 ft/s² when a force of one pound (lbf) is exerted on it. */
    MassUnits[MassUnits["Slugs"] = 6] = "Slugs";
    /** The stone (abbreviation st) is a unit of mass equal to 14 pounds avoirdupois (about 6.35 kilograms) used in Great Britain and Ireland for measuring human body weight. */
    MassUnits[MassUnits["Stone"] = 7] = "Stone";
    /** The short hundredweight (abbreviation cwt) is a unit of mass equal to 100 pounds in US and Canada. In British English, the short hundredweight is referred to as the "cental". */
    MassUnits[MassUnits["ShortHundredweight"] = 8] = "ShortHundredweight";
    /** The long or imperial hundredweight (abbreviation cwt) is a unit of mass equal to 112 pounds in US and Canada. */
    MassUnits[MassUnits["LongHundredweight"] = 9] = "LongHundredweight";
    /** A grain is a unit of measurement of mass, and in the troy weight, avoirdupois, and Apothecaries' system, equal to exactly 64.79891 milligrams. */
    MassUnits[MassUnits["Grains"] = 10] = "Grains";
    /** Solar mass is a ratio unit to the mass of the solar system star, the sun. */
    MassUnits[MassUnits["SolarMasses"] = 11] = "SolarMasses";
    /** Earth mass is a ratio unit to the mass of planet Earth. */
    MassUnits[MassUnits["EarthMasses"] = 12] = "EarthMasses";
    /** */
    MassUnits[MassUnits["Nanograms"] = 13] = "Nanograms";
    /** */
    MassUnits[MassUnits["Micrograms"] = 14] = "Micrograms";
    /** */
    MassUnits[MassUnits["Centigrams"] = 15] = "Centigrams";
    /** */
    MassUnits[MassUnits["Decigrams"] = 16] = "Decigrams";
    /** */
    MassUnits[MassUnits["Decagrams"] = 17] = "Decagrams";
    /** */
    MassUnits[MassUnits["Hectograms"] = 18] = "Hectograms";
    /** */
    MassUnits[MassUnits["Kilograms"] = 19] = "Kilograms";
    /** */
    MassUnits[MassUnits["Kilotonnes"] = 20] = "Kilotonnes";
    /** */
    MassUnits[MassUnits["Megatonnes"] = 21] = "Megatonnes";
    /** */
    MassUnits[MassUnits["Kilopounds"] = 22] = "Kilopounds";
    /** */
    MassUnits[MassUnits["Megapounds"] = 23] = "Megapounds";
})(MassUnits = exports.MassUnits || (exports.MassUnits = {}));
/** In physics, mass (from Greek μᾶζα "barley cake, lump [of dough]") is a property of a physical system or body, giving rise to the phenomena of the body's resistance to being accelerated by a force and the strength of its mutual gravitational attraction with other bodies. Instruments such as mass balances or scales use those phenomena to measure mass. The SI unit of mass is the kilogram (kg). */
class Mass {
    /**
     * Create a new Mass.
     * @param value The value.
     * @param fromUnit The ‘Mass’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.gramsLazy = null;
        this.tonnesLazy = null;
        this.shorttonsLazy = null;
        this.longtonsLazy = null;
        this.poundsLazy = null;
        this.ouncesLazy = null;
        this.slugsLazy = null;
        this.stoneLazy = null;
        this.shorthundredweightLazy = null;
        this.longhundredweightLazy = null;
        this.grainsLazy = null;
        this.solarmassesLazy = null;
        this.earthmassesLazy = null;
        this.nanogramsLazy = null;
        this.microgramsLazy = null;
        this.centigramsLazy = null;
        this.decigramsLazy = null;
        this.decagramsLazy = null;
        this.hectogramsLazy = null;
        this.kilogramsLazy = null;
        this.kilotonnesLazy = null;
        this.megatonnesLazy = null;
        this.kilopoundsLazy = null;
        this.megapoundsLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Mass is Kilogram.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get Grams() {
        if (this.gramsLazy !== null) {
            return this.gramsLazy;
        }
        return this.gramsLazy = this.convertFromBase(MassUnits.Grams);
    }
    /** */
    get Tonnes() {
        if (this.tonnesLazy !== null) {
            return this.tonnesLazy;
        }
        return this.tonnesLazy = this.convertFromBase(MassUnits.Tonnes);
    }
    /** The short ton is a unit of mass equal to 2,000 pounds (907.18474 kg), that is most commonly used in the United States – known there simply as the ton. */
    get ShortTons() {
        if (this.shorttonsLazy !== null) {
            return this.shorttonsLazy;
        }
        return this.shorttonsLazy = this.convertFromBase(MassUnits.ShortTons);
    }
    /** Long ton (weight ton or Imperial ton) is a unit of mass equal to 2,240 pounds (1,016 kg) and is the name for the unit called the "ton" in the avoirdupois or Imperial system of measurements that was used in the United Kingdom and several other Commonwealth countries before metrication. */
    get LongTons() {
        if (this.longtonsLazy !== null) {
            return this.longtonsLazy;
        }
        return this.longtonsLazy = this.convertFromBase(MassUnits.LongTons);
    }
    /** The pound or pound-mass (abbreviations: lb, lbm) is a unit of mass used in the imperial, United States customary and other systems of measurement. A number of different definitions have been used, the most common today being the international avoirdupois pound which is legally defined as exactly 0.45359237 kilograms, and which is divided into 16 avoirdupois ounces. */
    get Pounds() {
        if (this.poundsLazy !== null) {
            return this.poundsLazy;
        }
        return this.poundsLazy = this.convertFromBase(MassUnits.Pounds);
    }
    /** An ounce (abbreviated oz) is usually the international avoirdupois ounce as used in the United States customary and British imperial systems, which is equal to one-sixteenth of a pound or approximately 28 grams. The abbreviation 'oz' derives from the Italian word onza (now spelled oncia). */
    get Ounces() {
        if (this.ouncesLazy !== null) {
            return this.ouncesLazy;
        }
        return this.ouncesLazy = this.convertFromBase(MassUnits.Ounces);
    }
    /** The slug (abbreviation slug) is a unit of mass that is accelerated by 1 ft/s² when a force of one pound (lbf) is exerted on it. */
    get Slugs() {
        if (this.slugsLazy !== null) {
            return this.slugsLazy;
        }
        return this.slugsLazy = this.convertFromBase(MassUnits.Slugs);
    }
    /** The stone (abbreviation st) is a unit of mass equal to 14 pounds avoirdupois (about 6.35 kilograms) used in Great Britain and Ireland for measuring human body weight. */
    get Stone() {
        if (this.stoneLazy !== null) {
            return this.stoneLazy;
        }
        return this.stoneLazy = this.convertFromBase(MassUnits.Stone);
    }
    /** The short hundredweight (abbreviation cwt) is a unit of mass equal to 100 pounds in US and Canada. In British English, the short hundredweight is referred to as the "cental". */
    get ShortHundredweight() {
        if (this.shorthundredweightLazy !== null) {
            return this.shorthundredweightLazy;
        }
        return this.shorthundredweightLazy = this.convertFromBase(MassUnits.ShortHundredweight);
    }
    /** The long or imperial hundredweight (abbreviation cwt) is a unit of mass equal to 112 pounds in US and Canada. */
    get LongHundredweight() {
        if (this.longhundredweightLazy !== null) {
            return this.longhundredweightLazy;
        }
        return this.longhundredweightLazy = this.convertFromBase(MassUnits.LongHundredweight);
    }
    /** A grain is a unit of measurement of mass, and in the troy weight, avoirdupois, and Apothecaries' system, equal to exactly 64.79891 milligrams. */
    get Grains() {
        if (this.grainsLazy !== null) {
            return this.grainsLazy;
        }
        return this.grainsLazy = this.convertFromBase(MassUnits.Grains);
    }
    /** Solar mass is a ratio unit to the mass of the solar system star, the sun. */
    get SolarMasses() {
        if (this.solarmassesLazy !== null) {
            return this.solarmassesLazy;
        }
        return this.solarmassesLazy = this.convertFromBase(MassUnits.SolarMasses);
    }
    /** Earth mass is a ratio unit to the mass of planet Earth. */
    get EarthMasses() {
        if (this.earthmassesLazy !== null) {
            return this.earthmassesLazy;
        }
        return this.earthmassesLazy = this.convertFromBase(MassUnits.EarthMasses);
    }
    /** */
    get Nanograms() {
        if (this.nanogramsLazy !== null) {
            return this.nanogramsLazy;
        }
        return this.nanogramsLazy = this.convertFromBase(MassUnits.Nanograms);
    }
    /** */
    get Micrograms() {
        if (this.microgramsLazy !== null) {
            return this.microgramsLazy;
        }
        return this.microgramsLazy = this.convertFromBase(MassUnits.Micrograms);
    }
    /** */
    get Centigrams() {
        if (this.centigramsLazy !== null) {
            return this.centigramsLazy;
        }
        return this.centigramsLazy = this.convertFromBase(MassUnits.Centigrams);
    }
    /** */
    get Decigrams() {
        if (this.decigramsLazy !== null) {
            return this.decigramsLazy;
        }
        return this.decigramsLazy = this.convertFromBase(MassUnits.Decigrams);
    }
    /** */
    get Decagrams() {
        if (this.decagramsLazy !== null) {
            return this.decagramsLazy;
        }
        return this.decagramsLazy = this.convertFromBase(MassUnits.Decagrams);
    }
    /** */
    get Hectograms() {
        if (this.hectogramsLazy !== null) {
            return this.hectogramsLazy;
        }
        return this.hectogramsLazy = this.convertFromBase(MassUnits.Hectograms);
    }
    /** */
    get Kilograms() {
        if (this.kilogramsLazy !== null) {
            return this.kilogramsLazy;
        }
        return this.kilogramsLazy = this.convertFromBase(MassUnits.Kilograms);
    }
    /** */
    get Kilotonnes() {
        if (this.kilotonnesLazy !== null) {
            return this.kilotonnesLazy;
        }
        return this.kilotonnesLazy = this.convertFromBase(MassUnits.Kilotonnes);
    }
    /** */
    get Megatonnes() {
        if (this.megatonnesLazy !== null) {
            return this.megatonnesLazy;
        }
        return this.megatonnesLazy = this.convertFromBase(MassUnits.Megatonnes);
    }
    /** */
    get Kilopounds() {
        if (this.kilopoundsLazy !== null) {
            return this.kilopoundsLazy;
        }
        return this.kilopoundsLazy = this.convertFromBase(MassUnits.Kilopounds);
    }
    /** */
    get Megapounds() {
        if (this.megapoundsLazy !== null) {
            return this.megapoundsLazy;
        }
        return this.megapoundsLazy = this.convertFromBase(MassUnits.Megapounds);
    }
    /**
     * Create a new Mass instance from a Grams
     *
     * @param value The unit as Grams to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromGrams(value) {
        return new Mass(value, MassUnits.Grams);
    }
    /**
     * Create a new Mass instance from a Tonnes
     *
     * @param value The unit as Tonnes to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromTonnes(value) {
        return new Mass(value, MassUnits.Tonnes);
    }
    /**
     * Create a new Mass instance from a ShortTons
     * The short ton is a unit of mass equal to 2,000 pounds (907.18474 kg), that is most commonly used in the United States – known there simply as the ton.
     * @param value The unit as ShortTons to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromShortTons(value) {
        return new Mass(value, MassUnits.ShortTons);
    }
    /**
     * Create a new Mass instance from a LongTons
     * Long ton (weight ton or Imperial ton) is a unit of mass equal to 2,240 pounds (1,016 kg) and is the name for the unit called the "ton" in the avoirdupois or Imperial system of measurements that was used in the United Kingdom and several other Commonwealth countries before metrication.
     * @param value The unit as LongTons to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromLongTons(value) {
        return new Mass(value, MassUnits.LongTons);
    }
    /**
     * Create a new Mass instance from a Pounds
     * The pound or pound-mass (abbreviations: lb, lbm) is a unit of mass used in the imperial, United States customary and other systems of measurement. A number of different definitions have been used, the most common today being the international avoirdupois pound which is legally defined as exactly 0.45359237 kilograms, and which is divided into 16 avoirdupois ounces.
     * @param value The unit as Pounds to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromPounds(value) {
        return new Mass(value, MassUnits.Pounds);
    }
    /**
     * Create a new Mass instance from a Ounces
     * An ounce (abbreviated oz) is usually the international avoirdupois ounce as used in the United States customary and British imperial systems, which is equal to one-sixteenth of a pound or approximately 28 grams. The abbreviation 'oz' derives from the Italian word onza (now spelled oncia).
     * @param value The unit as Ounces to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromOunces(value) {
        return new Mass(value, MassUnits.Ounces);
    }
    /**
     * Create a new Mass instance from a Slugs
     * The slug (abbreviation slug) is a unit of mass that is accelerated by 1 ft/s² when a force of one pound (lbf) is exerted on it.
     * @param value The unit as Slugs to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromSlugs(value) {
        return new Mass(value, MassUnits.Slugs);
    }
    /**
     * Create a new Mass instance from a Stone
     * The stone (abbreviation st) is a unit of mass equal to 14 pounds avoirdupois (about 6.35 kilograms) used in Great Britain and Ireland for measuring human body weight.
     * @param value The unit as Stone to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromStone(value) {
        return new Mass(value, MassUnits.Stone);
    }
    /**
     * Create a new Mass instance from a ShortHundredweight
     * The short hundredweight (abbreviation cwt) is a unit of mass equal to 100 pounds in US and Canada. In British English, the short hundredweight is referred to as the "cental".
     * @param value The unit as ShortHundredweight to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromShortHundredweight(value) {
        return new Mass(value, MassUnits.ShortHundredweight);
    }
    /**
     * Create a new Mass instance from a LongHundredweight
     * The long or imperial hundredweight (abbreviation cwt) is a unit of mass equal to 112 pounds in US and Canada.
     * @param value The unit as LongHundredweight to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromLongHundredweight(value) {
        return new Mass(value, MassUnits.LongHundredweight);
    }
    /**
     * Create a new Mass instance from a Grains
     * A grain is a unit of measurement of mass, and in the troy weight, avoirdupois, and Apothecaries' system, equal to exactly 64.79891 milligrams.
     * @param value The unit as Grains to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromGrains(value) {
        return new Mass(value, MassUnits.Grains);
    }
    /**
     * Create a new Mass instance from a SolarMasses
     * Solar mass is a ratio unit to the mass of the solar system star, the sun.
     * @param value The unit as SolarMasses to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromSolarMasses(value) {
        return new Mass(value, MassUnits.SolarMasses);
    }
    /**
     * Create a new Mass instance from a EarthMasses
     * Earth mass is a ratio unit to the mass of planet Earth.
     * @param value The unit as EarthMasses to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromEarthMasses(value) {
        return new Mass(value, MassUnits.EarthMasses);
    }
    /**
     * Create a new Mass instance from a Nanograms
     *
     * @param value The unit as Nanograms to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromNanograms(value) {
        return new Mass(value, MassUnits.Nanograms);
    }
    /**
     * Create a new Mass instance from a Micrograms
     *
     * @param value The unit as Micrograms to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromMicrograms(value) {
        return new Mass(value, MassUnits.Micrograms);
    }
    /**
     * Create a new Mass instance from a Centigrams
     *
     * @param value The unit as Centigrams to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromCentigrams(value) {
        return new Mass(value, MassUnits.Centigrams);
    }
    /**
     * Create a new Mass instance from a Decigrams
     *
     * @param value The unit as Decigrams to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromDecigrams(value) {
        return new Mass(value, MassUnits.Decigrams);
    }
    /**
     * Create a new Mass instance from a Decagrams
     *
     * @param value The unit as Decagrams to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromDecagrams(value) {
        return new Mass(value, MassUnits.Decagrams);
    }
    /**
     * Create a new Mass instance from a Hectograms
     *
     * @param value The unit as Hectograms to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromHectograms(value) {
        return new Mass(value, MassUnits.Hectograms);
    }
    /**
     * Create a new Mass instance from a Kilograms
     *
     * @param value The unit as Kilograms to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromKilograms(value) {
        return new Mass(value, MassUnits.Kilograms);
    }
    /**
     * Create a new Mass instance from a Kilotonnes
     *
     * @param value The unit as Kilotonnes to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromKilotonnes(value) {
        return new Mass(value, MassUnits.Kilotonnes);
    }
    /**
     * Create a new Mass instance from a Megatonnes
     *
     * @param value The unit as Megatonnes to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromMegatonnes(value) {
        return new Mass(value, MassUnits.Megatonnes);
    }
    /**
     * Create a new Mass instance from a Kilopounds
     *
     * @param value The unit as Kilopounds to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromKilopounds(value) {
        return new Mass(value, MassUnits.Kilopounds);
    }
    /**
     * Create a new Mass instance from a Megapounds
     *
     * @param value The unit as Megapounds to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromMegapounds(value) {
        return new Mass(value, MassUnits.Megapounds);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MassUnits.Grams:
                return this.value * 1e3;
            case MassUnits.Tonnes:
                return this.value / 1e3;
            case MassUnits.ShortTons:
                return this.value / 9.0718474e2;
            case MassUnits.LongTons:
                return this.value / 1.0160469088e3;
            case MassUnits.Pounds:
                return this.value / 0.45359237;
            case MassUnits.Ounces:
                return this.value * 35.2739619;
            case MassUnits.Slugs:
                return this.value * 6.852176556196105e-2;
            case MassUnits.Stone:
                return this.value * 0.1574731728702698;
            case MassUnits.ShortHundredweight:
                return this.value * 0.022046226218487758;
            case MassUnits.LongHundredweight:
                return this.value * 0.01968413055222121;
            case MassUnits.Grains:
                return this.value * 15432.358352941431;
            case MassUnits.SolarMasses:
                return this.value / 1.98947e30;
            case MassUnits.EarthMasses:
                return this.value / 5.9722E+24;
            case MassUnits.Nanograms:
                return (this.value * 1e3) / 1e-9;
            case MassUnits.Micrograms:
                return (this.value * 1e3) / 0.000001;
            case MassUnits.Centigrams:
                return (this.value * 1e3) / 0.01;
            case MassUnits.Decigrams:
                return (this.value * 1e3) / 0.1;
            case MassUnits.Decagrams:
                return (this.value * 1e3) / 10;
            case MassUnits.Hectograms:
                return (this.value * 1e3) / 100;
            case MassUnits.Kilograms:
                return (this.value * 1e3) / 1000;
            case MassUnits.Kilotonnes:
                return (this.value / 1e3) / 1000;
            case MassUnits.Megatonnes:
                return (this.value / 1e3) / 1000000;
            case MassUnits.Kilopounds:
                return (this.value / 0.45359237) / 1000;
            case MassUnits.Megapounds:
                return (this.value / 0.45359237) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case MassUnits.Grams:
                return value / 1e3;
            case MassUnits.Tonnes:
                return value * 1e3;
            case MassUnits.ShortTons:
                return value * 9.0718474e2;
            case MassUnits.LongTons:
                return value * 1.0160469088e3;
            case MassUnits.Pounds:
                return value * 0.45359237;
            case MassUnits.Ounces:
                return value / 35.2739619;
            case MassUnits.Slugs:
                return value / 6.852176556196105e-2;
            case MassUnits.Stone:
                return value / 0.1574731728702698;
            case MassUnits.ShortHundredweight:
                return value / 0.022046226218487758;
            case MassUnits.LongHundredweight:
                return value / 0.01968413055222121;
            case MassUnits.Grains:
                return value / 15432.358352941431;
            case MassUnits.SolarMasses:
                return value * 1.98947e30;
            case MassUnits.EarthMasses:
                return value * 5.9722E+24;
            case MassUnits.Nanograms:
                return (value / 1e3) * 1e-9;
            case MassUnits.Micrograms:
                return (value / 1e3) * 0.000001;
            case MassUnits.Centigrams:
                return (value / 1e3) * 0.01;
            case MassUnits.Decigrams:
                return (value / 1e3) * 0.1;
            case MassUnits.Decagrams:
                return (value / 1e3) * 10;
            case MassUnits.Hectograms:
                return (value / 1e3) * 100;
            case MassUnits.Kilograms:
                return (value / 1e3) * 1000;
            case MassUnits.Kilotonnes:
                return (value * 1e3) * 1000;
            case MassUnits.Megatonnes:
                return (value * 1e3) * 1000000;
            case MassUnits.Kilopounds:
                return (value * 0.45359237) * 1000;
            case MassUnits.Megapounds:
                return (value * 0.45359237) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the Mass to string.
     * Note! the default format for Mass is Kilograms.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Mass.
     * @returns The string format of the Mass.
     */
    toString(toUnit = MassUnits.Kilograms) {
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
            case MassUnits.Nanograms:
                return this.Nanograms + ` g`;
            case MassUnits.Micrograms:
                return this.Micrograms + ` g`;
            case MassUnits.Centigrams:
                return this.Centigrams + ` g`;
            case MassUnits.Decigrams:
                return this.Decigrams + ` g`;
            case MassUnits.Decagrams:
                return this.Decagrams + ` g`;
            case MassUnits.Hectograms:
                return this.Hectograms + ` g`;
            case MassUnits.Kilograms:
                return this.Kilograms + ` g`;
            case MassUnits.Kilotonnes:
                return this.Kilotonnes + ` t`;
            case MassUnits.Megatonnes:
                return this.Megatonnes + ` t`;
            case MassUnits.Kilopounds:
                return this.Kilopounds + ` lb`;
            case MassUnits.Megapounds:
                return this.Megapounds + ` lb`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Mass = Mass;
//# sourceMappingURL=mass.g.js.map