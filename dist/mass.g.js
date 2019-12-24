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
    MassUnits[MassUnits["Nanograms"] = 13] = "Nanograms";
    MassUnits[MassUnits["Micrograms"] = 14] = "Micrograms";
    MassUnits[MassUnits["Centigrams"] = 15] = "Centigrams";
    MassUnits[MassUnits["Decigrams"] = 16] = "Decigrams";
    MassUnits[MassUnits["Decagrams"] = 17] = "Decagrams";
    MassUnits[MassUnits["Hectograms"] = 18] = "Hectograms";
    MassUnits[MassUnits["Kilograms"] = 19] = "Kilograms";
    MassUnits[MassUnits["Kilotonnes"] = 20] = "Kilotonnes";
    MassUnits[MassUnits["Megatonnes"] = 21] = "Megatonnes";
    MassUnits[MassUnits["Kilopounds"] = 22] = "Kilopounds";
    MassUnits[MassUnits["Megapounds"] = 23] = "Megapounds";
})(MassUnits = exports.MassUnits || (exports.MassUnits = {}));
class Mass {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get Grams() {
        return this.convertFromBase(MassUnits.Grams);
    }
    get Tonnes() {
        return this.convertFromBase(MassUnits.Tonnes);
    }
    get ShortTons() {
        return this.convertFromBase(MassUnits.ShortTons);
    }
    get LongTons() {
        return this.convertFromBase(MassUnits.LongTons);
    }
    get Pounds() {
        return this.convertFromBase(MassUnits.Pounds);
    }
    get Ounces() {
        return this.convertFromBase(MassUnits.Ounces);
    }
    get Slugs() {
        return this.convertFromBase(MassUnits.Slugs);
    }
    get Stone() {
        return this.convertFromBase(MassUnits.Stone);
    }
    get ShortHundredweight() {
        return this.convertFromBase(MassUnits.ShortHundredweight);
    }
    get LongHundredweight() {
        return this.convertFromBase(MassUnits.LongHundredweight);
    }
    get Grains() {
        return this.convertFromBase(MassUnits.Grains);
    }
    get SolarMasses() {
        return this.convertFromBase(MassUnits.SolarMasses);
    }
    get EarthMasses() {
        return this.convertFromBase(MassUnits.EarthMasses);
    }
    get Nanograms() {
        return this.convertFromBase(MassUnits.Nanograms);
    }
    get Micrograms() {
        return this.convertFromBase(MassUnits.Micrograms);
    }
    get Centigrams() {
        return this.convertFromBase(MassUnits.Centigrams);
    }
    get Decigrams() {
        return this.convertFromBase(MassUnits.Decigrams);
    }
    get Decagrams() {
        return this.convertFromBase(MassUnits.Decagrams);
    }
    get Hectograms() {
        return this.convertFromBase(MassUnits.Hectograms);
    }
    get Kilograms() {
        return this.convertFromBase(MassUnits.Kilograms);
    }
    get Kilotonnes() {
        return this.convertFromBase(MassUnits.Kilotonnes);
    }
    get Megatonnes() {
        return this.convertFromBase(MassUnits.Megatonnes);
    }
    get Kilopounds() {
        return this.convertFromBase(MassUnits.Kilopounds);
    }
    get Megapounds() {
        return this.convertFromBase(MassUnits.Megapounds);
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
    static FromNanograms(value) {
        return new Mass(value, MassUnits.Nanograms);
    }
    static FromMicrograms(value) {
        return new Mass(value, MassUnits.Micrograms);
    }
    static FromCentigrams(value) {
        return new Mass(value, MassUnits.Centigrams);
    }
    static FromDecigrams(value) {
        return new Mass(value, MassUnits.Decigrams);
    }
    static FromDecagrams(value) {
        return new Mass(value, MassUnits.Decagrams);
    }
    static FromHectograms(value) {
        return new Mass(value, MassUnits.Hectograms);
    }
    static FromKilograms(value) {
        return new Mass(value, MassUnits.Kilograms);
    }
    static FromKilotonnes(value) {
        return new Mass(value, MassUnits.Kilotonnes);
    }
    static FromMegatonnes(value) {
        return new Mass(value, MassUnits.Megatonnes);
    }
    static FromKilopounds(value) {
        return new Mass(value, MassUnits.Kilopounds);
    }
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
                return (this.value / 1e3) * 1e-9;
            case MassUnits.Micrograms:
                return (this.value / 1e3) * 0.000001;
            case MassUnits.Centigrams:
                return (this.value / 1e3) * 0.01;
            case MassUnits.Decigrams:
                return (this.value / 1e3) * 0.1;
            case MassUnits.Decagrams:
                return (this.value / 1e3) * 10;
            case MassUnits.Hectograms:
                return (this.value / 1e3) * 100;
            case MassUnits.Kilograms:
                return (this.value / 1e3) * 1000;
            case MassUnits.Kilotonnes:
                return (this.value * 1e3) * 1000;
            case MassUnits.Megatonnes:
                return (this.value * 1e3) * 1000000;
            case MassUnits.Kilopounds:
                return (this.value * 0.45359237) * 1000;
            case MassUnits.Megapounds:
                return (this.value * 0.45359237) * 1000000;
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
                return (value * 1e3) / 1e-9;
            case MassUnits.Micrograms:
                return (value * 1e3) / 0.000001;
            case MassUnits.Centigrams:
                return (value * 1e3) / 0.01;
            case MassUnits.Decigrams:
                return (value * 1e3) / 0.1;
            case MassUnits.Decagrams:
                return (value * 1e3) / 10;
            case MassUnits.Hectograms:
                return (value * 1e3) / 100;
            case MassUnits.Kilograms:
                return (value * 1e3) / 1000;
            case MassUnits.Kilotonnes:
                return (value / 1e3) / 1000;
            case MassUnits.Megatonnes:
                return (value / 1e3) / 1000000;
            case MassUnits.Kilopounds:
                return (value / 0.45359237) / 1000;
            case MassUnits.Megapounds:
                return (value / 0.45359237) / 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.Mass = Mass;
//# sourceMappingURL=mass.g.js.map