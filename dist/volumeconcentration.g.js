"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VolumeConcentrationUnits;
(function (VolumeConcentrationUnits) {
    VolumeConcentrationUnits[VolumeConcentrationUnits["DecimalFractions"] = 0] = "DecimalFractions";
    VolumeConcentrationUnits[VolumeConcentrationUnits["LitersPerLiter"] = 1] = "LitersPerLiter";
    VolumeConcentrationUnits[VolumeConcentrationUnits["LitersPerMililiter"] = 2] = "LitersPerMililiter";
    VolumeConcentrationUnits[VolumeConcentrationUnits["Percent"] = 3] = "Percent";
    VolumeConcentrationUnits[VolumeConcentrationUnits["PartsPerThousand"] = 4] = "PartsPerThousand";
    VolumeConcentrationUnits[VolumeConcentrationUnits["PartsPerMillion"] = 5] = "PartsPerMillion";
    VolumeConcentrationUnits[VolumeConcentrationUnits["PartsPerBillion"] = 6] = "PartsPerBillion";
    VolumeConcentrationUnits[VolumeConcentrationUnits["PartsPerTrillion"] = 7] = "PartsPerTrillion";
    VolumeConcentrationUnits[VolumeConcentrationUnits["PicolitersPerLiter"] = 8] = "PicolitersPerLiter";
    VolumeConcentrationUnits[VolumeConcentrationUnits["NanolitersPerLiter"] = 9] = "NanolitersPerLiter";
    VolumeConcentrationUnits[VolumeConcentrationUnits["MicrolitersPerLiter"] = 10] = "MicrolitersPerLiter";
    VolumeConcentrationUnits[VolumeConcentrationUnits["CentilitersPerLiter"] = 11] = "CentilitersPerLiter";
    VolumeConcentrationUnits[VolumeConcentrationUnits["DecilitersPerLiter"] = 12] = "DecilitersPerLiter";
    VolumeConcentrationUnits[VolumeConcentrationUnits["PicolitersPerMililiter"] = 13] = "PicolitersPerMililiter";
    VolumeConcentrationUnits[VolumeConcentrationUnits["NanolitersPerMililiter"] = 14] = "NanolitersPerMililiter";
    VolumeConcentrationUnits[VolumeConcentrationUnits["MicrolitersPerMililiter"] = 15] = "MicrolitersPerMililiter";
    VolumeConcentrationUnits[VolumeConcentrationUnits["CentilitersPerMililiter"] = 16] = "CentilitersPerMililiter";
    VolumeConcentrationUnits[VolumeConcentrationUnits["DecilitersPerMililiter"] = 17] = "DecilitersPerMililiter";
})(VolumeConcentrationUnits = exports.VolumeConcentrationUnits || (exports.VolumeConcentrationUnits = {}));
class VolumeConcentration {
    constructor(value, fromUnit) {
        this.decimalfractionsLazy = null;
        this.litersperliterLazy = null;
        this.literspermililiterLazy = null;
        this.percentLazy = null;
        this.partsperthousandLazy = null;
        this.partspermillionLazy = null;
        this.partsperbillionLazy = null;
        this.partspertrillionLazy = null;
        this.picolitersperliterLazy = null;
        this.nanolitersperliterLazy = null;
        this.microlitersperliterLazy = null;
        this.centilitersperliterLazy = null;
        this.decilitersperliterLazy = null;
        this.picoliterspermililiterLazy = null;
        this.nanoliterspermililiterLazy = null;
        this.microliterspermililiterLazy = null;
        this.centiliterspermililiterLazy = null;
        this.deciliterspermililiterLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get DecimalFractions() {
        if (this.decimalfractionsLazy !== null) {
            return this.decimalfractionsLazy;
        }
        return this.decimalfractionsLazy = this.convertFromBase(VolumeConcentrationUnits.DecimalFractions);
    }
    get LitersPerLiter() {
        if (this.litersperliterLazy !== null) {
            return this.litersperliterLazy;
        }
        return this.litersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.LitersPerLiter);
    }
    get LitersPerMililiter() {
        if (this.literspermililiterLazy !== null) {
            return this.literspermililiterLazy;
        }
        return this.literspermililiterLazy = this.convertFromBase(VolumeConcentrationUnits.LitersPerMililiter);
    }
    get Percent() {
        if (this.percentLazy !== null) {
            return this.percentLazy;
        }
        return this.percentLazy = this.convertFromBase(VolumeConcentrationUnits.Percent);
    }
    get PartsPerThousand() {
        if (this.partsperthousandLazy !== null) {
            return this.partsperthousandLazy;
        }
        return this.partsperthousandLazy = this.convertFromBase(VolumeConcentrationUnits.PartsPerThousand);
    }
    get PartsPerMillion() {
        if (this.partspermillionLazy !== null) {
            return this.partspermillionLazy;
        }
        return this.partspermillionLazy = this.convertFromBase(VolumeConcentrationUnits.PartsPerMillion);
    }
    get PartsPerBillion() {
        if (this.partsperbillionLazy !== null) {
            return this.partsperbillionLazy;
        }
        return this.partsperbillionLazy = this.convertFromBase(VolumeConcentrationUnits.PartsPerBillion);
    }
    get PartsPerTrillion() {
        if (this.partspertrillionLazy !== null) {
            return this.partspertrillionLazy;
        }
        return this.partspertrillionLazy = this.convertFromBase(VolumeConcentrationUnits.PartsPerTrillion);
    }
    get PicolitersPerLiter() {
        if (this.picolitersperliterLazy !== null) {
            return this.picolitersperliterLazy;
        }
        return this.picolitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.PicolitersPerLiter);
    }
    get NanolitersPerLiter() {
        if (this.nanolitersperliterLazy !== null) {
            return this.nanolitersperliterLazy;
        }
        return this.nanolitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.NanolitersPerLiter);
    }
    get MicrolitersPerLiter() {
        if (this.microlitersperliterLazy !== null) {
            return this.microlitersperliterLazy;
        }
        return this.microlitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.MicrolitersPerLiter);
    }
    get CentilitersPerLiter() {
        if (this.centilitersperliterLazy !== null) {
            return this.centilitersperliterLazy;
        }
        return this.centilitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.CentilitersPerLiter);
    }
    get DecilitersPerLiter() {
        if (this.decilitersperliterLazy !== null) {
            return this.decilitersperliterLazy;
        }
        return this.decilitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.DecilitersPerLiter);
    }
    get PicolitersPerMililiter() {
        if (this.picoliterspermililiterLazy !== null) {
            return this.picoliterspermililiterLazy;
        }
        return this.picoliterspermililiterLazy = this.convertFromBase(VolumeConcentrationUnits.PicolitersPerMililiter);
    }
    get NanolitersPerMililiter() {
        if (this.nanoliterspermililiterLazy !== null) {
            return this.nanoliterspermililiterLazy;
        }
        return this.nanoliterspermililiterLazy = this.convertFromBase(VolumeConcentrationUnits.NanolitersPerMililiter);
    }
    get MicrolitersPerMililiter() {
        if (this.microliterspermililiterLazy !== null) {
            return this.microliterspermililiterLazy;
        }
        return this.microliterspermililiterLazy = this.convertFromBase(VolumeConcentrationUnits.MicrolitersPerMililiter);
    }
    get CentilitersPerMililiter() {
        if (this.centiliterspermililiterLazy !== null) {
            return this.centiliterspermililiterLazy;
        }
        return this.centiliterspermililiterLazy = this.convertFromBase(VolumeConcentrationUnits.CentilitersPerMililiter);
    }
    get DecilitersPerMililiter() {
        if (this.deciliterspermililiterLazy !== null) {
            return this.deciliterspermililiterLazy;
        }
        return this.deciliterspermililiterLazy = this.convertFromBase(VolumeConcentrationUnits.DecilitersPerMililiter);
    }
    static FromDecimalFractions(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.DecimalFractions);
    }
    static FromLitersPerLiter(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.LitersPerLiter);
    }
    static FromLitersPerMililiter(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.LitersPerMililiter);
    }
    static FromPercent(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.Percent);
    }
    static FromPartsPerThousand(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.PartsPerThousand);
    }
    static FromPartsPerMillion(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.PartsPerMillion);
    }
    static FromPartsPerBillion(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.PartsPerBillion);
    }
    static FromPartsPerTrillion(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.PartsPerTrillion);
    }
    static FromPicolitersPerLiter(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.PicolitersPerLiter);
    }
    static FromNanolitersPerLiter(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.NanolitersPerLiter);
    }
    static FromMicrolitersPerLiter(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.MicrolitersPerLiter);
    }
    static FromCentilitersPerLiter(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.CentilitersPerLiter);
    }
    static FromDecilitersPerLiter(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.DecilitersPerLiter);
    }
    static FromPicolitersPerMililiter(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.PicolitersPerMililiter);
    }
    static FromNanolitersPerMililiter(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.NanolitersPerMililiter);
    }
    static FromMicrolitersPerMililiter(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.MicrolitersPerMililiter);
    }
    static FromCentilitersPerMililiter(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.CentilitersPerMililiter);
    }
    static FromDecilitersPerMililiter(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.DecilitersPerMililiter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case VolumeConcentrationUnits.DecimalFractions:
                return this.value;
            case VolumeConcentrationUnits.LitersPerLiter:
                return this.value;
            case VolumeConcentrationUnits.LitersPerMililiter:
                return this.value * 1e-3;
            case VolumeConcentrationUnits.Percent:
                return this.value * 1e2;
            case VolumeConcentrationUnits.PartsPerThousand:
                return this.value * 1e3;
            case VolumeConcentrationUnits.PartsPerMillion:
                return this.value * 1e6;
            case VolumeConcentrationUnits.PartsPerBillion:
                return this.value * 1e9;
            case VolumeConcentrationUnits.PartsPerTrillion:
                return this.value * 1e12;
            case VolumeConcentrationUnits.PicolitersPerLiter:
                return (this.value) / 1e-12;
            case VolumeConcentrationUnits.NanolitersPerLiter:
                return (this.value) / 1e-9;
            case VolumeConcentrationUnits.MicrolitersPerLiter:
                return (this.value) / 0.000001;
            case VolumeConcentrationUnits.CentilitersPerLiter:
                return (this.value) / 0.01;
            case VolumeConcentrationUnits.DecilitersPerLiter:
                return (this.value) / 0.1;
            case VolumeConcentrationUnits.PicolitersPerMililiter:
                return (this.value * 1e-3) / 1e-12;
            case VolumeConcentrationUnits.NanolitersPerMililiter:
                return (this.value * 1e-3) / 1e-9;
            case VolumeConcentrationUnits.MicrolitersPerMililiter:
                return (this.value * 1e-3) / 0.000001;
            case VolumeConcentrationUnits.CentilitersPerMililiter:
                return (this.value * 1e-3) / 0.01;
            case VolumeConcentrationUnits.DecilitersPerMililiter:
                return (this.value * 1e-3) / 0.1;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case VolumeConcentrationUnits.DecimalFractions:
                return value;
            case VolumeConcentrationUnits.LitersPerLiter:
                return value;
            case VolumeConcentrationUnits.LitersPerMililiter:
                return value / 1e-3;
            case VolumeConcentrationUnits.Percent:
                return value / 1e2;
            case VolumeConcentrationUnits.PartsPerThousand:
                return value / 1e3;
            case VolumeConcentrationUnits.PartsPerMillion:
                return value / 1e6;
            case VolumeConcentrationUnits.PartsPerBillion:
                return value / 1e9;
            case VolumeConcentrationUnits.PartsPerTrillion:
                return value / 1e12;
            case VolumeConcentrationUnits.PicolitersPerLiter:
                return (value) * 1e-12;
            case VolumeConcentrationUnits.NanolitersPerLiter:
                return (value) * 1e-9;
            case VolumeConcentrationUnits.MicrolitersPerLiter:
                return (value) * 0.000001;
            case VolumeConcentrationUnits.CentilitersPerLiter:
                return (value) * 0.01;
            case VolumeConcentrationUnits.DecilitersPerLiter:
                return (value) * 0.1;
            case VolumeConcentrationUnits.PicolitersPerMililiter:
                return (value / 1e-3) * 1e-12;
            case VolumeConcentrationUnits.NanolitersPerMililiter:
                return (value / 1e-3) * 1e-9;
            case VolumeConcentrationUnits.MicrolitersPerMililiter:
                return (value / 1e-3) * 0.000001;
            case VolumeConcentrationUnits.CentilitersPerMililiter:
                return (value / 1e-3) * 0.01;
            case VolumeConcentrationUnits.DecilitersPerMililiter:
                return (value / 1e-3) * 0.1;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = VolumeConcentrationUnits.DecimalFractions) {
        switch (toUnit) {
            case VolumeConcentrationUnits.DecimalFractions:
                return this.DecimalFractions + ` `;
            case VolumeConcentrationUnits.LitersPerLiter:
                return this.LitersPerLiter + ` L/L`;
            case VolumeConcentrationUnits.LitersPerMililiter:
                return this.LitersPerMililiter + ` L/mL`;
            case VolumeConcentrationUnits.Percent:
                return this.Percent + ` %`;
            case VolumeConcentrationUnits.PartsPerThousand:
                return this.PartsPerThousand + ` ‰`;
            case VolumeConcentrationUnits.PartsPerMillion:
                return this.PartsPerMillion + ` ppm`;
            case VolumeConcentrationUnits.PartsPerBillion:
                return this.PartsPerBillion + ` ppb`;
            case VolumeConcentrationUnits.PartsPerTrillion:
                return this.PartsPerTrillion + ` ppt`;
            case VolumeConcentrationUnits.PicolitersPerLiter:
                return this.PicolitersPerLiter + ` L/L`;
            case VolumeConcentrationUnits.NanolitersPerLiter:
                return this.NanolitersPerLiter + ` L/L`;
            case VolumeConcentrationUnits.MicrolitersPerLiter:
                return this.MicrolitersPerLiter + ` L/L`;
            case VolumeConcentrationUnits.CentilitersPerLiter:
                return this.CentilitersPerLiter + ` L/L`;
            case VolumeConcentrationUnits.DecilitersPerLiter:
                return this.DecilitersPerLiter + ` L/L`;
            case VolumeConcentrationUnits.PicolitersPerMililiter:
                return this.PicolitersPerMililiter + ` L/mL`;
            case VolumeConcentrationUnits.NanolitersPerMililiter:
                return this.NanolitersPerMililiter + ` L/mL`;
            case VolumeConcentrationUnits.MicrolitersPerMililiter:
                return this.MicrolitersPerMililiter + ` L/mL`;
            case VolumeConcentrationUnits.CentilitersPerMililiter:
                return this.CentilitersPerMililiter + ` L/mL`;
            case VolumeConcentrationUnits.DecilitersPerMililiter:
                return this.DecilitersPerMililiter + ` L/mL`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.VolumeConcentration = VolumeConcentration;
//# sourceMappingURL=volumeconcentration.g.js.map