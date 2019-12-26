"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VolumeUnits;
(function (VolumeUnits) {
    VolumeUnits[VolumeUnits["Liters"] = 0] = "Liters";
    VolumeUnits[VolumeUnits["CubicMeters"] = 1] = "CubicMeters";
    VolumeUnits[VolumeUnits["CubicKilometers"] = 2] = "CubicKilometers";
    VolumeUnits[VolumeUnits["CubicHectometers"] = 3] = "CubicHectometers";
    VolumeUnits[VolumeUnits["CubicDecimeters"] = 4] = "CubicDecimeters";
    VolumeUnits[VolumeUnits["CubicCentimeters"] = 5] = "CubicCentimeters";
    VolumeUnits[VolumeUnits["CubicMillimeters"] = 6] = "CubicMillimeters";
    VolumeUnits[VolumeUnits["CubicMicrometers"] = 7] = "CubicMicrometers";
    VolumeUnits[VolumeUnits["CubicMiles"] = 8] = "CubicMiles";
    VolumeUnits[VolumeUnits["CubicYards"] = 9] = "CubicYards";
    VolumeUnits[VolumeUnits["CubicFeet"] = 10] = "CubicFeet";
    VolumeUnits[VolumeUnits["CubicInches"] = 11] = "CubicInches";
    VolumeUnits[VolumeUnits["ImperialGallons"] = 12] = "ImperialGallons";
    VolumeUnits[VolumeUnits["ImperialOunces"] = 13] = "ImperialOunces";
    VolumeUnits[VolumeUnits["UsGallons"] = 14] = "UsGallons";
    VolumeUnits[VolumeUnits["UsOunces"] = 15] = "UsOunces";
    VolumeUnits[VolumeUnits["UsTablespoons"] = 16] = "UsTablespoons";
    VolumeUnits[VolumeUnits["AuTablespoons"] = 17] = "AuTablespoons";
    VolumeUnits[VolumeUnits["UkTablespoons"] = 18] = "UkTablespoons";
    VolumeUnits[VolumeUnits["MetricTeaspoons"] = 19] = "MetricTeaspoons";
    VolumeUnits[VolumeUnits["UsTeaspoons"] = 20] = "UsTeaspoons";
    VolumeUnits[VolumeUnits["MetricCups"] = 21] = "MetricCups";
    VolumeUnits[VolumeUnits["UsCustomaryCups"] = 22] = "UsCustomaryCups";
    VolumeUnits[VolumeUnits["UsLegalCups"] = 23] = "UsLegalCups";
    VolumeUnits[VolumeUnits["OilBarrels"] = 24] = "OilBarrels";
    VolumeUnits[VolumeUnits["UsBeerBarrels"] = 25] = "UsBeerBarrels";
    VolumeUnits[VolumeUnits["ImperialBeerBarrels"] = 26] = "ImperialBeerBarrels";
    VolumeUnits[VolumeUnits["UsQuarts"] = 27] = "UsQuarts";
    VolumeUnits[VolumeUnits["UsPints"] = 28] = "UsPints";
    VolumeUnits[VolumeUnits["AcreFeet"] = 29] = "AcreFeet";
    VolumeUnits[VolumeUnits["ImperialPints"] = 30] = "ImperialPints";
    VolumeUnits[VolumeUnits["Microliters"] = 31] = "Microliters";
    VolumeUnits[VolumeUnits["Centiliters"] = 32] = "Centiliters";
    VolumeUnits[VolumeUnits["Deciliters"] = 33] = "Deciliters";
    VolumeUnits[VolumeUnits["Hectoliters"] = 34] = "Hectoliters";
    VolumeUnits[VolumeUnits["Kiloliters"] = 35] = "Kiloliters";
    VolumeUnits[VolumeUnits["Megaliters"] = 36] = "Megaliters";
    VolumeUnits[VolumeUnits["HectocubicMeters"] = 37] = "HectocubicMeters";
    VolumeUnits[VolumeUnits["KilocubicMeters"] = 38] = "KilocubicMeters";
    VolumeUnits[VolumeUnits["HectocubicFeet"] = 39] = "HectocubicFeet";
    VolumeUnits[VolumeUnits["KilocubicFeet"] = 40] = "KilocubicFeet";
    VolumeUnits[VolumeUnits["MegacubicFeet"] = 41] = "MegacubicFeet";
    VolumeUnits[VolumeUnits["KiloimperialGallons"] = 42] = "KiloimperialGallons";
    VolumeUnits[VolumeUnits["MegaimperialGallons"] = 43] = "MegaimperialGallons";
    VolumeUnits[VolumeUnits["KilousGallons"] = 44] = "KilousGallons";
    VolumeUnits[VolumeUnits["MegausGallons"] = 45] = "MegausGallons";
})(VolumeUnits = exports.VolumeUnits || (exports.VolumeUnits = {}));
class Volume {
    constructor(value, fromUnit) {
        this.litersLazy = null;
        this.cubicmetersLazy = null;
        this.cubickilometersLazy = null;
        this.cubichectometersLazy = null;
        this.cubicdecimetersLazy = null;
        this.cubiccentimetersLazy = null;
        this.cubicmillimetersLazy = null;
        this.cubicmicrometersLazy = null;
        this.cubicmilesLazy = null;
        this.cubicyardsLazy = null;
        this.cubicfeetLazy = null;
        this.cubicinchesLazy = null;
        this.imperialgallonsLazy = null;
        this.imperialouncesLazy = null;
        this.usgallonsLazy = null;
        this.usouncesLazy = null;
        this.ustablespoonsLazy = null;
        this.autablespoonsLazy = null;
        this.uktablespoonsLazy = null;
        this.metricteaspoonsLazy = null;
        this.usteaspoonsLazy = null;
        this.metriccupsLazy = null;
        this.uscustomarycupsLazy = null;
        this.uslegalcupsLazy = null;
        this.oilbarrelsLazy = null;
        this.usbeerbarrelsLazy = null;
        this.imperialbeerbarrelsLazy = null;
        this.usquartsLazy = null;
        this.uspintsLazy = null;
        this.acrefeetLazy = null;
        this.imperialpintsLazy = null;
        this.microlitersLazy = null;
        this.centilitersLazy = null;
        this.decilitersLazy = null;
        this.hectolitersLazy = null;
        this.kilolitersLazy = null;
        this.megalitersLazy = null;
        this.hectocubicmetersLazy = null;
        this.kilocubicmetersLazy = null;
        this.hectocubicfeetLazy = null;
        this.kilocubicfeetLazy = null;
        this.megacubicfeetLazy = null;
        this.kiloimperialgallonsLazy = null;
        this.megaimperialgallonsLazy = null;
        this.kilousgallonsLazy = null;
        this.megausgallonsLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Liters() {
        if (this.litersLazy !== null) {
            return this.litersLazy;
        }
        return this.litersLazy = this.convertFromBase(VolumeUnits.Liters);
    }
    get CubicMeters() {
        if (this.cubicmetersLazy !== null) {
            return this.cubicmetersLazy;
        }
        return this.cubicmetersLazy = this.convertFromBase(VolumeUnits.CubicMeters);
    }
    get CubicKilometers() {
        if (this.cubickilometersLazy !== null) {
            return this.cubickilometersLazy;
        }
        return this.cubickilometersLazy = this.convertFromBase(VolumeUnits.CubicKilometers);
    }
    get CubicHectometers() {
        if (this.cubichectometersLazy !== null) {
            return this.cubichectometersLazy;
        }
        return this.cubichectometersLazy = this.convertFromBase(VolumeUnits.CubicHectometers);
    }
    get CubicDecimeters() {
        if (this.cubicdecimetersLazy !== null) {
            return this.cubicdecimetersLazy;
        }
        return this.cubicdecimetersLazy = this.convertFromBase(VolumeUnits.CubicDecimeters);
    }
    get CubicCentimeters() {
        if (this.cubiccentimetersLazy !== null) {
            return this.cubiccentimetersLazy;
        }
        return this.cubiccentimetersLazy = this.convertFromBase(VolumeUnits.CubicCentimeters);
    }
    get CubicMillimeters() {
        if (this.cubicmillimetersLazy !== null) {
            return this.cubicmillimetersLazy;
        }
        return this.cubicmillimetersLazy = this.convertFromBase(VolumeUnits.CubicMillimeters);
    }
    get CubicMicrometers() {
        if (this.cubicmicrometersLazy !== null) {
            return this.cubicmicrometersLazy;
        }
        return this.cubicmicrometersLazy = this.convertFromBase(VolumeUnits.CubicMicrometers);
    }
    get CubicMiles() {
        if (this.cubicmilesLazy !== null) {
            return this.cubicmilesLazy;
        }
        return this.cubicmilesLazy = this.convertFromBase(VolumeUnits.CubicMiles);
    }
    get CubicYards() {
        if (this.cubicyardsLazy !== null) {
            return this.cubicyardsLazy;
        }
        return this.cubicyardsLazy = this.convertFromBase(VolumeUnits.CubicYards);
    }
    get CubicFeet() {
        if (this.cubicfeetLazy !== null) {
            return this.cubicfeetLazy;
        }
        return this.cubicfeetLazy = this.convertFromBase(VolumeUnits.CubicFeet);
    }
    get CubicInches() {
        if (this.cubicinchesLazy !== null) {
            return this.cubicinchesLazy;
        }
        return this.cubicinchesLazy = this.convertFromBase(VolumeUnits.CubicInches);
    }
    get ImperialGallons() {
        if (this.imperialgallonsLazy !== null) {
            return this.imperialgallonsLazy;
        }
        return this.imperialgallonsLazy = this.convertFromBase(VolumeUnits.ImperialGallons);
    }
    get ImperialOunces() {
        if (this.imperialouncesLazy !== null) {
            return this.imperialouncesLazy;
        }
        return this.imperialouncesLazy = this.convertFromBase(VolumeUnits.ImperialOunces);
    }
    get UsGallons() {
        if (this.usgallonsLazy !== null) {
            return this.usgallonsLazy;
        }
        return this.usgallonsLazy = this.convertFromBase(VolumeUnits.UsGallons);
    }
    get UsOunces() {
        if (this.usouncesLazy !== null) {
            return this.usouncesLazy;
        }
        return this.usouncesLazy = this.convertFromBase(VolumeUnits.UsOunces);
    }
    get UsTablespoons() {
        if (this.ustablespoonsLazy !== null) {
            return this.ustablespoonsLazy;
        }
        return this.ustablespoonsLazy = this.convertFromBase(VolumeUnits.UsTablespoons);
    }
    get AuTablespoons() {
        if (this.autablespoonsLazy !== null) {
            return this.autablespoonsLazy;
        }
        return this.autablespoonsLazy = this.convertFromBase(VolumeUnits.AuTablespoons);
    }
    get UkTablespoons() {
        if (this.uktablespoonsLazy !== null) {
            return this.uktablespoonsLazy;
        }
        return this.uktablespoonsLazy = this.convertFromBase(VolumeUnits.UkTablespoons);
    }
    get MetricTeaspoons() {
        if (this.metricteaspoonsLazy !== null) {
            return this.metricteaspoonsLazy;
        }
        return this.metricteaspoonsLazy = this.convertFromBase(VolumeUnits.MetricTeaspoons);
    }
    get UsTeaspoons() {
        if (this.usteaspoonsLazy !== null) {
            return this.usteaspoonsLazy;
        }
        return this.usteaspoonsLazy = this.convertFromBase(VolumeUnits.UsTeaspoons);
    }
    get MetricCups() {
        if (this.metriccupsLazy !== null) {
            return this.metriccupsLazy;
        }
        return this.metriccupsLazy = this.convertFromBase(VolumeUnits.MetricCups);
    }
    get UsCustomaryCups() {
        if (this.uscustomarycupsLazy !== null) {
            return this.uscustomarycupsLazy;
        }
        return this.uscustomarycupsLazy = this.convertFromBase(VolumeUnits.UsCustomaryCups);
    }
    get UsLegalCups() {
        if (this.uslegalcupsLazy !== null) {
            return this.uslegalcupsLazy;
        }
        return this.uslegalcupsLazy = this.convertFromBase(VolumeUnits.UsLegalCups);
    }
    get OilBarrels() {
        if (this.oilbarrelsLazy !== null) {
            return this.oilbarrelsLazy;
        }
        return this.oilbarrelsLazy = this.convertFromBase(VolumeUnits.OilBarrels);
    }
    get UsBeerBarrels() {
        if (this.usbeerbarrelsLazy !== null) {
            return this.usbeerbarrelsLazy;
        }
        return this.usbeerbarrelsLazy = this.convertFromBase(VolumeUnits.UsBeerBarrels);
    }
    get ImperialBeerBarrels() {
        if (this.imperialbeerbarrelsLazy !== null) {
            return this.imperialbeerbarrelsLazy;
        }
        return this.imperialbeerbarrelsLazy = this.convertFromBase(VolumeUnits.ImperialBeerBarrels);
    }
    get UsQuarts() {
        if (this.usquartsLazy !== null) {
            return this.usquartsLazy;
        }
        return this.usquartsLazy = this.convertFromBase(VolumeUnits.UsQuarts);
    }
    get UsPints() {
        if (this.uspintsLazy !== null) {
            return this.uspintsLazy;
        }
        return this.uspintsLazy = this.convertFromBase(VolumeUnits.UsPints);
    }
    get AcreFeet() {
        if (this.acrefeetLazy !== null) {
            return this.acrefeetLazy;
        }
        return this.acrefeetLazy = this.convertFromBase(VolumeUnits.AcreFeet);
    }
    get ImperialPints() {
        if (this.imperialpintsLazy !== null) {
            return this.imperialpintsLazy;
        }
        return this.imperialpintsLazy = this.convertFromBase(VolumeUnits.ImperialPints);
    }
    get Microliters() {
        if (this.microlitersLazy !== null) {
            return this.microlitersLazy;
        }
        return this.microlitersLazy = this.convertFromBase(VolumeUnits.Microliters);
    }
    get Centiliters() {
        if (this.centilitersLazy !== null) {
            return this.centilitersLazy;
        }
        return this.centilitersLazy = this.convertFromBase(VolumeUnits.Centiliters);
    }
    get Deciliters() {
        if (this.decilitersLazy !== null) {
            return this.decilitersLazy;
        }
        return this.decilitersLazy = this.convertFromBase(VolumeUnits.Deciliters);
    }
    get Hectoliters() {
        if (this.hectolitersLazy !== null) {
            return this.hectolitersLazy;
        }
        return this.hectolitersLazy = this.convertFromBase(VolumeUnits.Hectoliters);
    }
    get Kiloliters() {
        if (this.kilolitersLazy !== null) {
            return this.kilolitersLazy;
        }
        return this.kilolitersLazy = this.convertFromBase(VolumeUnits.Kiloliters);
    }
    get Megaliters() {
        if (this.megalitersLazy !== null) {
            return this.megalitersLazy;
        }
        return this.megalitersLazy = this.convertFromBase(VolumeUnits.Megaliters);
    }
    get HectocubicMeters() {
        if (this.hectocubicmetersLazy !== null) {
            return this.hectocubicmetersLazy;
        }
        return this.hectocubicmetersLazy = this.convertFromBase(VolumeUnits.HectocubicMeters);
    }
    get KilocubicMeters() {
        if (this.kilocubicmetersLazy !== null) {
            return this.kilocubicmetersLazy;
        }
        return this.kilocubicmetersLazy = this.convertFromBase(VolumeUnits.KilocubicMeters);
    }
    get HectocubicFeet() {
        if (this.hectocubicfeetLazy !== null) {
            return this.hectocubicfeetLazy;
        }
        return this.hectocubicfeetLazy = this.convertFromBase(VolumeUnits.HectocubicFeet);
    }
    get KilocubicFeet() {
        if (this.kilocubicfeetLazy !== null) {
            return this.kilocubicfeetLazy;
        }
        return this.kilocubicfeetLazy = this.convertFromBase(VolumeUnits.KilocubicFeet);
    }
    get MegacubicFeet() {
        if (this.megacubicfeetLazy !== null) {
            return this.megacubicfeetLazy;
        }
        return this.megacubicfeetLazy = this.convertFromBase(VolumeUnits.MegacubicFeet);
    }
    get KiloimperialGallons() {
        if (this.kiloimperialgallonsLazy !== null) {
            return this.kiloimperialgallonsLazy;
        }
        return this.kiloimperialgallonsLazy = this.convertFromBase(VolumeUnits.KiloimperialGallons);
    }
    get MegaimperialGallons() {
        if (this.megaimperialgallonsLazy !== null) {
            return this.megaimperialgallonsLazy;
        }
        return this.megaimperialgallonsLazy = this.convertFromBase(VolumeUnits.MegaimperialGallons);
    }
    get KilousGallons() {
        if (this.kilousgallonsLazy !== null) {
            return this.kilousgallonsLazy;
        }
        return this.kilousgallonsLazy = this.convertFromBase(VolumeUnits.KilousGallons);
    }
    get MegausGallons() {
        if (this.megausgallonsLazy !== null) {
            return this.megausgallonsLazy;
        }
        return this.megausgallonsLazy = this.convertFromBase(VolumeUnits.MegausGallons);
    }
    static FromLiters(value) {
        return new Volume(value, VolumeUnits.Liters);
    }
    static FromCubicMeters(value) {
        return new Volume(value, VolumeUnits.CubicMeters);
    }
    static FromCubicKilometers(value) {
        return new Volume(value, VolumeUnits.CubicKilometers);
    }
    static FromCubicHectometers(value) {
        return new Volume(value, VolumeUnits.CubicHectometers);
    }
    static FromCubicDecimeters(value) {
        return new Volume(value, VolumeUnits.CubicDecimeters);
    }
    static FromCubicCentimeters(value) {
        return new Volume(value, VolumeUnits.CubicCentimeters);
    }
    static FromCubicMillimeters(value) {
        return new Volume(value, VolumeUnits.CubicMillimeters);
    }
    static FromCubicMicrometers(value) {
        return new Volume(value, VolumeUnits.CubicMicrometers);
    }
    static FromCubicMiles(value) {
        return new Volume(value, VolumeUnits.CubicMiles);
    }
    static FromCubicYards(value) {
        return new Volume(value, VolumeUnits.CubicYards);
    }
    static FromCubicFeet(value) {
        return new Volume(value, VolumeUnits.CubicFeet);
    }
    static FromCubicInches(value) {
        return new Volume(value, VolumeUnits.CubicInches);
    }
    static FromImperialGallons(value) {
        return new Volume(value, VolumeUnits.ImperialGallons);
    }
    static FromImperialOunces(value) {
        return new Volume(value, VolumeUnits.ImperialOunces);
    }
    static FromUsGallons(value) {
        return new Volume(value, VolumeUnits.UsGallons);
    }
    static FromUsOunces(value) {
        return new Volume(value, VolumeUnits.UsOunces);
    }
    static FromUsTablespoons(value) {
        return new Volume(value, VolumeUnits.UsTablespoons);
    }
    static FromAuTablespoons(value) {
        return new Volume(value, VolumeUnits.AuTablespoons);
    }
    static FromUkTablespoons(value) {
        return new Volume(value, VolumeUnits.UkTablespoons);
    }
    static FromMetricTeaspoons(value) {
        return new Volume(value, VolumeUnits.MetricTeaspoons);
    }
    static FromUsTeaspoons(value) {
        return new Volume(value, VolumeUnits.UsTeaspoons);
    }
    static FromMetricCups(value) {
        return new Volume(value, VolumeUnits.MetricCups);
    }
    static FromUsCustomaryCups(value) {
        return new Volume(value, VolumeUnits.UsCustomaryCups);
    }
    static FromUsLegalCups(value) {
        return new Volume(value, VolumeUnits.UsLegalCups);
    }
    static FromOilBarrels(value) {
        return new Volume(value, VolumeUnits.OilBarrels);
    }
    static FromUsBeerBarrels(value) {
        return new Volume(value, VolumeUnits.UsBeerBarrels);
    }
    static FromImperialBeerBarrels(value) {
        return new Volume(value, VolumeUnits.ImperialBeerBarrels);
    }
    static FromUsQuarts(value) {
        return new Volume(value, VolumeUnits.UsQuarts);
    }
    static FromUsPints(value) {
        return new Volume(value, VolumeUnits.UsPints);
    }
    static FromAcreFeet(value) {
        return new Volume(value, VolumeUnits.AcreFeet);
    }
    static FromImperialPints(value) {
        return new Volume(value, VolumeUnits.ImperialPints);
    }
    static FromMicroliters(value) {
        return new Volume(value, VolumeUnits.Microliters);
    }
    static FromCentiliters(value) {
        return new Volume(value, VolumeUnits.Centiliters);
    }
    static FromDeciliters(value) {
        return new Volume(value, VolumeUnits.Deciliters);
    }
    static FromHectoliters(value) {
        return new Volume(value, VolumeUnits.Hectoliters);
    }
    static FromKiloliters(value) {
        return new Volume(value, VolumeUnits.Kiloliters);
    }
    static FromMegaliters(value) {
        return new Volume(value, VolumeUnits.Megaliters);
    }
    static FromHectocubicMeters(value) {
        return new Volume(value, VolumeUnits.HectocubicMeters);
    }
    static FromKilocubicMeters(value) {
        return new Volume(value, VolumeUnits.KilocubicMeters);
    }
    static FromHectocubicFeet(value) {
        return new Volume(value, VolumeUnits.HectocubicFeet);
    }
    static FromKilocubicFeet(value) {
        return new Volume(value, VolumeUnits.KilocubicFeet);
    }
    static FromMegacubicFeet(value) {
        return new Volume(value, VolumeUnits.MegacubicFeet);
    }
    static FromKiloimperialGallons(value) {
        return new Volume(value, VolumeUnits.KiloimperialGallons);
    }
    static FromMegaimperialGallons(value) {
        return new Volume(value, VolumeUnits.MegaimperialGallons);
    }
    static FromKilousGallons(value) {
        return new Volume(value, VolumeUnits.KilousGallons);
    }
    static FromMegausGallons(value) {
        return new Volume(value, VolumeUnits.MegausGallons);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case VolumeUnits.Liters:
                return this.value * 1e3;
            case VolumeUnits.CubicMeters:
                return this.value;
            case VolumeUnits.CubicKilometers:
                return this.value / 1e9;
            case VolumeUnits.CubicHectometers:
                return this.value / 1e6;
            case VolumeUnits.CubicDecimeters:
                return this.value * 1e3;
            case VolumeUnits.CubicCentimeters:
                return this.value * 1e6;
            case VolumeUnits.CubicMillimeters:
                return this.value * 1e9;
            case VolumeUnits.CubicMicrometers:
                return this.value * 1e18;
            case VolumeUnits.CubicMiles:
                return this.value / 4.16818182544058e9;
            case VolumeUnits.CubicYards:
                return this.value / 0.764554858;
            case VolumeUnits.CubicFeet:
                return this.value / 0.0283168;
            case VolumeUnits.CubicInches:
                return this.value / (1.6387 * 1e-5);
            case VolumeUnits.ImperialGallons:
                return this.value / 0.00454609000000181429905810072407;
            case VolumeUnits.ImperialOunces:
                return this.value / 2.8413062499962901241875439064617e-5;
            case VolumeUnits.UsGallons:
                return this.value / 0.00378541;
            case VolumeUnits.UsOunces:
                return this.value / 2.957352956253760505068307980135e-5;
            case VolumeUnits.UsTablespoons:
                return this.value / 1.478676478125e-5;
            case VolumeUnits.AuTablespoons:
                return this.value / 2e-5;
            case VolumeUnits.UkTablespoons:
                return this.value / 1.5e-5;
            case VolumeUnits.MetricTeaspoons:
                return this.value / 0.5e-5;
            case VolumeUnits.UsTeaspoons:
                return this.value / 4.92892159375e-6;
            case VolumeUnits.MetricCups:
                return this.value / 0.00025;
            case VolumeUnits.UsCustomaryCups:
                return this.value / 0.0002365882365;
            case VolumeUnits.UsLegalCups:
                return this.value / 0.00024;
            case VolumeUnits.OilBarrels:
                return this.value / 0.158987294928;
            case VolumeUnits.UsBeerBarrels:
                return this.value / 0.1173477658;
            case VolumeUnits.ImperialBeerBarrels:
                return this.value / 0.16365924;
            case VolumeUnits.UsQuarts:
                return this.value / 9.46352946e-4;
            case VolumeUnits.UsPints:
                return this.value / 4.73176473e-4;
            case VolumeUnits.AcreFeet:
                return this.value * 0.000810714;
            case VolumeUnits.ImperialPints:
                return this.value / 5.6826125e-4;
            case VolumeUnits.Microliters:
                return (this.value * 1e3) / 0.000001;
            case VolumeUnits.Centiliters:
                return (this.value * 1e3) / 0.01;
            case VolumeUnits.Deciliters:
                return (this.value * 1e3) / 0.1;
            case VolumeUnits.Hectoliters:
                return (this.value * 1e3) / 100;
            case VolumeUnits.Kiloliters:
                return (this.value * 1e3) / 1000;
            case VolumeUnits.Megaliters:
                return (this.value * 1e3) / 1000000;
            case VolumeUnits.HectocubicMeters:
                return (this.value) / 100;
            case VolumeUnits.KilocubicMeters:
                return (this.value) / 1000;
            case VolumeUnits.HectocubicFeet:
                return (this.value / 0.0283168) / 100;
            case VolumeUnits.KilocubicFeet:
                return (this.value / 0.0283168) / 1000;
            case VolumeUnits.MegacubicFeet:
                return (this.value / 0.0283168) / 1000000;
            case VolumeUnits.KiloimperialGallons:
                return (this.value / 0.00454609000000181429905810072407) / 1000;
            case VolumeUnits.MegaimperialGallons:
                return (this.value / 0.00454609000000181429905810072407) / 1000000;
            case VolumeUnits.KilousGallons:
                return (this.value / 0.00378541) / 1000;
            case VolumeUnits.MegausGallons:
                return (this.value / 0.00378541) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case VolumeUnits.Liters:
                return value / 1e3;
            case VolumeUnits.CubicMeters:
                return value;
            case VolumeUnits.CubicKilometers:
                return value * 1e9;
            case VolumeUnits.CubicHectometers:
                return value * 1e6;
            case VolumeUnits.CubicDecimeters:
                return value / 1e3;
            case VolumeUnits.CubicCentimeters:
                return value / 1e6;
            case VolumeUnits.CubicMillimeters:
                return value / 1e9;
            case VolumeUnits.CubicMicrometers:
                return value / 1e18;
            case VolumeUnits.CubicMiles:
                return value * 4.16818182544058e9;
            case VolumeUnits.CubicYards:
                return value * 0.764554858;
            case VolumeUnits.CubicFeet:
                return value * 0.0283168;
            case VolumeUnits.CubicInches:
                return value * 1.6387 * 1e-5;
            case VolumeUnits.ImperialGallons:
                return value * 0.00454609000000181429905810072407;
            case VolumeUnits.ImperialOunces:
                return value * 2.8413062499962901241875439064617e-5;
            case VolumeUnits.UsGallons:
                return value * 0.00378541;
            case VolumeUnits.UsOunces:
                return value * 2.957352956253760505068307980135e-5;
            case VolumeUnits.UsTablespoons:
                return value * 1.478676478125e-5;
            case VolumeUnits.AuTablespoons:
                return value * 2e-5;
            case VolumeUnits.UkTablespoons:
                return value * 1.5e-5;
            case VolumeUnits.MetricTeaspoons:
                return value * 0.5e-5;
            case VolumeUnits.UsTeaspoons:
                return value * 4.92892159375e-6;
            case VolumeUnits.MetricCups:
                return value * 0.00025;
            case VolumeUnits.UsCustomaryCups:
                return value * 0.0002365882365;
            case VolumeUnits.UsLegalCups:
                return value * 0.00024;
            case VolumeUnits.OilBarrels:
                return value * 0.158987294928;
            case VolumeUnits.UsBeerBarrels:
                return value * 0.1173477658;
            case VolumeUnits.ImperialBeerBarrels:
                return value * 0.16365924;
            case VolumeUnits.UsQuarts:
                return value * 9.46352946e-4;
            case VolumeUnits.UsPints:
                return value * 4.73176473e-4;
            case VolumeUnits.AcreFeet:
                return value / 0.000810714;
            case VolumeUnits.ImperialPints:
                return value * 5.6826125e-4;
            case VolumeUnits.Microliters:
                return (value / 1e3) * 0.000001;
            case VolumeUnits.Centiliters:
                return (value / 1e3) * 0.01;
            case VolumeUnits.Deciliters:
                return (value / 1e3) * 0.1;
            case VolumeUnits.Hectoliters:
                return (value / 1e3) * 100;
            case VolumeUnits.Kiloliters:
                return (value / 1e3) * 1000;
            case VolumeUnits.Megaliters:
                return (value / 1e3) * 1000000;
            case VolumeUnits.HectocubicMeters:
                return (value) * 100;
            case VolumeUnits.KilocubicMeters:
                return (value) * 1000;
            case VolumeUnits.HectocubicFeet:
                return (value * 0.0283168) * 100;
            case VolumeUnits.KilocubicFeet:
                return (value * 0.0283168) * 1000;
            case VolumeUnits.MegacubicFeet:
                return (value * 0.0283168) * 1000000;
            case VolumeUnits.KiloimperialGallons:
                return (value * 0.00454609000000181429905810072407) * 1000;
            case VolumeUnits.MegaimperialGallons:
                return (value * 0.00454609000000181429905810072407) * 1000000;
            case VolumeUnits.KilousGallons:
                return (value * 0.00378541) * 1000;
            case VolumeUnits.MegausGallons:
                return (value * 0.00378541) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = VolumeUnits.CubicMeters) {
        switch (toUnit) {
            case VolumeUnits.Liters:
                return this.Liters + ` l`;
            case VolumeUnits.CubicMeters:
                return this.CubicMeters + ` m³`;
            case VolumeUnits.CubicKilometers:
                return this.CubicKilometers + ` km³`;
            case VolumeUnits.CubicHectometers:
                return this.CubicHectometers + ` hm³`;
            case VolumeUnits.CubicDecimeters:
                return this.CubicDecimeters + ` dm³`;
            case VolumeUnits.CubicCentimeters:
                return this.CubicCentimeters + ` cm³`;
            case VolumeUnits.CubicMillimeters:
                return this.CubicMillimeters + ` mm³`;
            case VolumeUnits.CubicMicrometers:
                return this.CubicMicrometers + ` µm³`;
            case VolumeUnits.CubicMiles:
                return this.CubicMiles + ` mi³`;
            case VolumeUnits.CubicYards:
                return this.CubicYards + ` yd³`;
            case VolumeUnits.CubicFeet:
                return this.CubicFeet + ` ft³`;
            case VolumeUnits.CubicInches:
                return this.CubicInches + ` in³`;
            case VolumeUnits.ImperialGallons:
                return this.ImperialGallons + ` gal (imp.)`;
            case VolumeUnits.ImperialOunces:
                return this.ImperialOunces + ` oz (imp.)`;
            case VolumeUnits.UsGallons:
                return this.UsGallons + ` gal (U.S.)`;
            case VolumeUnits.UsOunces:
                return this.UsOunces + ` oz (U.S.)`;
            case VolumeUnits.UsTablespoons:
                return this.UsTablespoons + ` undefined`;
            case VolumeUnits.AuTablespoons:
                return this.AuTablespoons + ` undefined`;
            case VolumeUnits.UkTablespoons:
                return this.UkTablespoons + ` undefined`;
            case VolumeUnits.MetricTeaspoons:
                return this.MetricTeaspoons + ` tsp`;
            case VolumeUnits.UsTeaspoons:
                return this.UsTeaspoons + ` undefined`;
            case VolumeUnits.MetricCups:
                return this.MetricCups + ` undefined`;
            case VolumeUnits.UsCustomaryCups:
                return this.UsCustomaryCups + ` undefined`;
            case VolumeUnits.UsLegalCups:
                return this.UsLegalCups + ` undefined`;
            case VolumeUnits.OilBarrels:
                return this.OilBarrels + ` bbl`;
            case VolumeUnits.UsBeerBarrels:
                return this.UsBeerBarrels + ` bl (U.S.)`;
            case VolumeUnits.ImperialBeerBarrels:
                return this.ImperialBeerBarrels + ` bl (imp.)`;
            case VolumeUnits.UsQuarts:
                return this.UsQuarts + ` qt (U.S.)`;
            case VolumeUnits.UsPints:
                return this.UsPints + ` pt (U.S.)`;
            case VolumeUnits.AcreFeet:
                return this.AcreFeet + ` ac-ft`;
            case VolumeUnits.ImperialPints:
                return this.ImperialPints + ` pt (imp.)`;
            case VolumeUnits.Microliters:
                return this.Microliters + ` l`;
            case VolumeUnits.Centiliters:
                return this.Centiliters + ` l`;
            case VolumeUnits.Deciliters:
                return this.Deciliters + ` l`;
            case VolumeUnits.Hectoliters:
                return this.Hectoliters + ` l`;
            case VolumeUnits.Kiloliters:
                return this.Kiloliters + ` l`;
            case VolumeUnits.Megaliters:
                return this.Megaliters + ` l`;
            case VolumeUnits.HectocubicMeters:
                return this.HectocubicMeters + ` m³`;
            case VolumeUnits.KilocubicMeters:
                return this.KilocubicMeters + ` m³`;
            case VolumeUnits.HectocubicFeet:
                return this.HectocubicFeet + ` ft³`;
            case VolumeUnits.KilocubicFeet:
                return this.KilocubicFeet + ` ft³`;
            case VolumeUnits.MegacubicFeet:
                return this.MegacubicFeet + ` ft³`;
            case VolumeUnits.KiloimperialGallons:
                return this.KiloimperialGallons + ` gal (imp.)`;
            case VolumeUnits.MegaimperialGallons:
                return this.MegaimperialGallons + ` gal (imp.)`;
            case VolumeUnits.KilousGallons:
                return this.KilousGallons + ` gal (U.S.)`;
            case VolumeUnits.MegausGallons:
                return this.MegausGallons + ` gal (U.S.)`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Volume = Volume;
//# sourceMappingURL=volume.g.js.map