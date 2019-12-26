"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MassUnits;
(function (MassUnits) {
    MassUnits[MassUnits["Grams"] = 0] = "Grams";
    MassUnits[MassUnits["Tonnes"] = 1] = "Tonnes";
    MassUnits[MassUnits["ShortTons"] = 2] = "ShortTons";
    MassUnits[MassUnits["LongTons"] = 3] = "LongTons";
    MassUnits[MassUnits["Pounds"] = 4] = "Pounds";
    MassUnits[MassUnits["Ounces"] = 5] = "Ounces";
    MassUnits[MassUnits["Slugs"] = 6] = "Slugs";
    MassUnits[MassUnits["Stone"] = 7] = "Stone";
    MassUnits[MassUnits["ShortHundredweight"] = 8] = "ShortHundredweight";
    MassUnits[MassUnits["LongHundredweight"] = 9] = "LongHundredweight";
    MassUnits[MassUnits["Grains"] = 10] = "Grains";
    MassUnits[MassUnits["SolarMasses"] = 11] = "SolarMasses";
    MassUnits[MassUnits["EarthMasses"] = 12] = "EarthMasses";
    MassUnits[MassUnits["Nanogram"] = 13] = "Nanogram";
    MassUnits[MassUnits["Microgram"] = 14] = "Microgram";
    MassUnits[MassUnits["Centigram"] = 15] = "Centigram";
    MassUnits[MassUnits["Decigram"] = 16] = "Decigram";
    MassUnits[MassUnits["Decagram"] = 17] = "Decagram";
    MassUnits[MassUnits["Hectogram"] = 18] = "Hectogram";
    MassUnits[MassUnits["Kilogram"] = 19] = "Kilogram";
    MassUnits[MassUnits["Kilotonne"] = 20] = "Kilotonne";
    MassUnits[MassUnits["Megatonne"] = 21] = "Megatonne";
    MassUnits[MassUnits["Kilopound"] = 22] = "Kilopound";
    MassUnits[MassUnits["Megapound"] = 23] = "Megapound";
})(MassUnits = exports.MassUnits || (exports.MassUnits = {}));
class Mass {
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
        this.nanogramLazy = null;
        this.microgramLazy = null;
        this.centigramLazy = null;
        this.decigramLazy = null;
        this.decagramLazy = null;
        this.hectogramLazy = null;
        this.kilogramLazy = null;
        this.kilotonneLazy = null;
        this.megatonneLazy = null;
        this.kilopoundLazy = null;
        this.megapoundLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Grams() {
        if (this.gramsLazy !== null) {
            return this.gramsLazy;
        }
        return this.gramsLazy = this.convertFromBase(MassUnits.Grams);
    }
    get Tonnes() {
        if (this.tonnesLazy !== null) {
            return this.tonnesLazy;
        }
        return this.tonnesLazy = this.convertFromBase(MassUnits.Tonnes);
    }
    get ShortTons() {
        if (this.shorttonsLazy !== null) {
            return this.shorttonsLazy;
        }
        return this.shorttonsLazy = this.convertFromBase(MassUnits.ShortTons);
    }
    get LongTons() {
        if (this.longtonsLazy !== null) {
            return this.longtonsLazy;
        }
        return this.longtonsLazy = this.convertFromBase(MassUnits.LongTons);
    }
    get Pounds() {
        if (this.poundsLazy !== null) {
            return this.poundsLazy;
        }
        return this.poundsLazy = this.convertFromBase(MassUnits.Pounds);
    }
    get Ounces() {
        if (this.ouncesLazy !== null) {
            return this.ouncesLazy;
        }
        return this.ouncesLazy = this.convertFromBase(MassUnits.Ounces);
    }
    get Slugs() {
        if (this.slugsLazy !== null) {
            return this.slugsLazy;
        }
        return this.slugsLazy = this.convertFromBase(MassUnits.Slugs);
    }
    get Stone() {
        if (this.stoneLazy !== null) {
            return this.stoneLazy;
        }
        return this.stoneLazy = this.convertFromBase(MassUnits.Stone);
    }
    get ShortHundredweight() {
        if (this.shorthundredweightLazy !== null) {
            return this.shorthundredweightLazy;
        }
        return this.shorthundredweightLazy = this.convertFromBase(MassUnits.ShortHundredweight);
    }
    get LongHundredweight() {
        if (this.longhundredweightLazy !== null) {
            return this.longhundredweightLazy;
        }
        return this.longhundredweightLazy = this.convertFromBase(MassUnits.LongHundredweight);
    }
    get Grains() {
        if (this.grainsLazy !== null) {
            return this.grainsLazy;
        }
        return this.grainsLazy = this.convertFromBase(MassUnits.Grains);
    }
    get SolarMasses() {
        if (this.solarmassesLazy !== null) {
            return this.solarmassesLazy;
        }
        return this.solarmassesLazy = this.convertFromBase(MassUnits.SolarMasses);
    }
    get EarthMasses() {
        if (this.earthmassesLazy !== null) {
            return this.earthmassesLazy;
        }
        return this.earthmassesLazy = this.convertFromBase(MassUnits.EarthMasses);
    }
    get Nanogram() {
        if (this.nanogramLazy !== null) {
            return this.nanogramLazy;
        }
        return this.nanogramLazy = this.convertFromBase(MassUnits.Nanogram);
    }
    get Microgram() {
        if (this.microgramLazy !== null) {
            return this.microgramLazy;
        }
        return this.microgramLazy = this.convertFromBase(MassUnits.Microgram);
    }
    get Centigram() {
        if (this.centigramLazy !== null) {
            return this.centigramLazy;
        }
        return this.centigramLazy = this.convertFromBase(MassUnits.Centigram);
    }
    get Decigram() {
        if (this.decigramLazy !== null) {
            return this.decigramLazy;
        }
        return this.decigramLazy = this.convertFromBase(MassUnits.Decigram);
    }
    get Decagram() {
        if (this.decagramLazy !== null) {
            return this.decagramLazy;
        }
        return this.decagramLazy = this.convertFromBase(MassUnits.Decagram);
    }
    get Hectogram() {
        if (this.hectogramLazy !== null) {
            return this.hectogramLazy;
        }
        return this.hectogramLazy = this.convertFromBase(MassUnits.Hectogram);
    }
    get Kilogram() {
        if (this.kilogramLazy !== null) {
            return this.kilogramLazy;
        }
        return this.kilogramLazy = this.convertFromBase(MassUnits.Kilogram);
    }
    get Kilotonne() {
        if (this.kilotonneLazy !== null) {
            return this.kilotonneLazy;
        }
        return this.kilotonneLazy = this.convertFromBase(MassUnits.Kilotonne);
    }
    get Megatonne() {
        if (this.megatonneLazy !== null) {
            return this.megatonneLazy;
        }
        return this.megatonneLazy = this.convertFromBase(MassUnits.Megatonne);
    }
    get Kilopound() {
        if (this.kilopoundLazy !== null) {
            return this.kilopoundLazy;
        }
        return this.kilopoundLazy = this.convertFromBase(MassUnits.Kilopound);
    }
    get Megapound() {
        if (this.megapoundLazy !== null) {
            return this.megapoundLazy;
        }
        return this.megapoundLazy = this.convertFromBase(MassUnits.Megapound);
    }
    static FromGrams(value) {
        return new Mass(value, MassUnits.Grams);
    }
    static FromTonnes(value) {
        return new Mass(value, MassUnits.Tonnes);
    }
    static FromShortTons(value) {
        return new Mass(value, MassUnits.ShortTons);
    }
    static FromLongTons(value) {
        return new Mass(value, MassUnits.LongTons);
    }
    static FromPounds(value) {
        return new Mass(value, MassUnits.Pounds);
    }
    static FromOunces(value) {
        return new Mass(value, MassUnits.Ounces);
    }
    static FromSlugs(value) {
        return new Mass(value, MassUnits.Slugs);
    }
    static FromStone(value) {
        return new Mass(value, MassUnits.Stone);
    }
    static FromShortHundredweight(value) {
        return new Mass(value, MassUnits.ShortHundredweight);
    }
    static FromLongHundredweight(value) {
        return new Mass(value, MassUnits.LongHundredweight);
    }
    static FromGrains(value) {
        return new Mass(value, MassUnits.Grains);
    }
    static FromSolarMasses(value) {
        return new Mass(value, MassUnits.SolarMasses);
    }
    static FromEarthMasses(value) {
        return new Mass(value, MassUnits.EarthMasses);
    }
    static FromNanogram(value) {
        return new Mass(value, MassUnits.Nanogram);
    }
    static FromMicrogram(value) {
        return new Mass(value, MassUnits.Microgram);
    }
    static FromCentigram(value) {
        return new Mass(value, MassUnits.Centigram);
    }
    static FromDecigram(value) {
        return new Mass(value, MassUnits.Decigram);
    }
    static FromDecagram(value) {
        return new Mass(value, MassUnits.Decagram);
    }
    static FromHectogram(value) {
        return new Mass(value, MassUnits.Hectogram);
    }
    static FromKilogram(value) {
        return new Mass(value, MassUnits.Kilogram);
    }
    static FromKilotonne(value) {
        return new Mass(value, MassUnits.Kilotonne);
    }
    static FromMegatonne(value) {
        return new Mass(value, MassUnits.Megatonne);
    }
    static FromKilopound(value) {
        return new Mass(value, MassUnits.Kilopound);
    }
    static FromMegapound(value) {
        return new Mass(value, MassUnits.Megapound);
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
            case MassUnits.Nanogram:
                return (this.value * 1e3) / 1e-9;
            case MassUnits.Microgram:
                return (this.value * 1e3) / 0.000001;
            case MassUnits.Centigram:
                return (this.value * 1e3) / 0.01;
            case MassUnits.Decigram:
                return (this.value * 1e3) / 0.1;
            case MassUnits.Decagram:
                return (this.value * 1e3) / 10;
            case MassUnits.Hectogram:
                return (this.value * 1e3) / 100;
            case MassUnits.Kilogram:
                return (this.value * 1e3) / 1000;
            case MassUnits.Kilotonne:
                return (this.value / 1e3) / 1000;
            case MassUnits.Megatonne:
                return (this.value / 1e3) / 1000000;
            case MassUnits.Kilopound:
                return (this.value / 0.45359237) / 1000;
            case MassUnits.Megapound:
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
            case MassUnits.Nanogram:
                return (value / 1e3) * 1e-9;
            case MassUnits.Microgram:
                return (value / 1e3) * 0.000001;
            case MassUnits.Centigram:
                return (value / 1e3) * 0.01;
            case MassUnits.Decigram:
                return (value / 1e3) * 0.1;
            case MassUnits.Decagram:
                return (value / 1e3) * 10;
            case MassUnits.Hectogram:
                return (value / 1e3) * 100;
            case MassUnits.Kilogram:
                return (value / 1e3) * 1000;
            case MassUnits.Kilotonne:
                return (value * 1e3) * 1000;
            case MassUnits.Megatonne:
                return (value * 1e3) * 1000000;
            case MassUnits.Kilopound:
                return (value * 0.45359237) * 1000;
            case MassUnits.Megapound:
                return (value * 0.45359237) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = MassUnits.Kilogram) {
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
exports.Mass = Mass;
//# sourceMappingURL=mass.g.js.map