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
    VolumeConcentrationUnits[VolumeConcentrationUnits["Picolitersperliter"] = 8] = "Picolitersperliter";
    VolumeConcentrationUnits[VolumeConcentrationUnits["Nanolitersperliter"] = 9] = "Nanolitersperliter";
    VolumeConcentrationUnits[VolumeConcentrationUnits["Microlitersperliter"] = 10] = "Microlitersperliter";
    VolumeConcentrationUnits[VolumeConcentrationUnits["Centilitersperliter"] = 11] = "Centilitersperliter";
    VolumeConcentrationUnits[VolumeConcentrationUnits["Decilitersperliter"] = 12] = "Decilitersperliter";
    VolumeConcentrationUnits[VolumeConcentrationUnits["Picoliterspermililiter"] = 13] = "Picoliterspermililiter";
    VolumeConcentrationUnits[VolumeConcentrationUnits["Nanoliterspermililiter"] = 14] = "Nanoliterspermililiter";
    VolumeConcentrationUnits[VolumeConcentrationUnits["Microliterspermililiter"] = 15] = "Microliterspermililiter";
    VolumeConcentrationUnits[VolumeConcentrationUnits["Centiliterspermililiter"] = 16] = "Centiliterspermililiter";
    VolumeConcentrationUnits[VolumeConcentrationUnits["Deciliterspermililiter"] = 17] = "Deciliterspermililiter";
})(VolumeConcentrationUnits = exports.VolumeConcentrationUnits || (exports.VolumeConcentrationUnits = {}));
class VolumeConcentration {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get DecimalFractions() {
        return this.convertFromBase(VolumeConcentrationUnits.DecimalFractions);
    }
    get LitersPerLiter() {
        return this.convertFromBase(VolumeConcentrationUnits.LitersPerLiter);
    }
    get LitersPerMililiter() {
        return this.convertFromBase(VolumeConcentrationUnits.LitersPerMililiter);
    }
    get Percent() {
        return this.convertFromBase(VolumeConcentrationUnits.Percent);
    }
    get PartsPerThousand() {
        return this.convertFromBase(VolumeConcentrationUnits.PartsPerThousand);
    }
    get PartsPerMillion() {
        return this.convertFromBase(VolumeConcentrationUnits.PartsPerMillion);
    }
    get PartsPerBillion() {
        return this.convertFromBase(VolumeConcentrationUnits.PartsPerBillion);
    }
    get PartsPerTrillion() {
        return this.convertFromBase(VolumeConcentrationUnits.PartsPerTrillion);
    }
    get Picolitersperliter() {
        return this.convertFromBase(VolumeConcentrationUnits.Picolitersperliter);
    }
    get Nanolitersperliter() {
        return this.convertFromBase(VolumeConcentrationUnits.Nanolitersperliter);
    }
    get Microlitersperliter() {
        return this.convertFromBase(VolumeConcentrationUnits.Microlitersperliter);
    }
    get Centilitersperliter() {
        return this.convertFromBase(VolumeConcentrationUnits.Centilitersperliter);
    }
    get Decilitersperliter() {
        return this.convertFromBase(VolumeConcentrationUnits.Decilitersperliter);
    }
    get Picoliterspermililiter() {
        return this.convertFromBase(VolumeConcentrationUnits.Picoliterspermililiter);
    }
    get Nanoliterspermililiter() {
        return this.convertFromBase(VolumeConcentrationUnits.Nanoliterspermililiter);
    }
    get Microliterspermililiter() {
        return this.convertFromBase(VolumeConcentrationUnits.Microliterspermililiter);
    }
    get Centiliterspermililiter() {
        return this.convertFromBase(VolumeConcentrationUnits.Centiliterspermililiter);
    }
    get Deciliterspermililiter() {
        return this.convertFromBase(VolumeConcentrationUnits.Deciliterspermililiter);
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
    static FromPicolitersperliter(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.Picolitersperliter);
    }
    static FromNanolitersperliter(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.Nanolitersperliter);
    }
    static FromMicrolitersperliter(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.Microlitersperliter);
    }
    static FromCentilitersperliter(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.Centilitersperliter);
    }
    static FromDecilitersperliter(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.Decilitersperliter);
    }
    static FromPicoliterspermililiter(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.Picoliterspermililiter);
    }
    static FromNanoliterspermililiter(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.Nanoliterspermililiter);
    }
    static FromMicroliterspermililiter(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.Microliterspermililiter);
    }
    static FromCentiliterspermililiter(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.Centiliterspermililiter);
    }
    static FromDeciliterspermililiter(value) {
        return new VolumeConcentration(value, VolumeConcentrationUnits.Deciliterspermililiter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case VolumeConcentrationUnits.DecimalFractions:
                return this.value;
            case VolumeConcentrationUnits.LitersPerLiter:
                return this.value;
            case VolumeConcentrationUnits.LitersPerMililiter:
                return this.value / 1e-3;
            case VolumeConcentrationUnits.Percent:
                return this.value / 1e2;
            case VolumeConcentrationUnits.PartsPerThousand:
                return this.value / 1e3;
            case VolumeConcentrationUnits.PartsPerMillion:
                return this.value / 1e6;
            case VolumeConcentrationUnits.PartsPerBillion:
                return this.value / 1e9;
            case VolumeConcentrationUnits.PartsPerTrillion:
                return this.value / 1e12;
            case VolumeConcentrationUnits.Picolitersperliter:
                return (this.value) * 1e-12;
            case VolumeConcentrationUnits.Nanolitersperliter:
                return (this.value) * 1e-9;
            case VolumeConcentrationUnits.Microlitersperliter:
                return (this.value) * 0.000001;
            case VolumeConcentrationUnits.Centilitersperliter:
                return (this.value) * 0.01;
            case VolumeConcentrationUnits.Decilitersperliter:
                return (this.value) * 0.1;
            case VolumeConcentrationUnits.Picoliterspermililiter:
                return (this.value * 1e-3) * 1e-12;
            case VolumeConcentrationUnits.Nanoliterspermililiter:
                return (this.value * 1e-3) * 1e-9;
            case VolumeConcentrationUnits.Microliterspermililiter:
                return (this.value * 1e-3) * 0.000001;
            case VolumeConcentrationUnits.Centiliterspermililiter:
                return (this.value * 1e-3) * 0.01;
            case VolumeConcentrationUnits.Deciliterspermililiter:
                return (this.value * 1e-3) * 0.1;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
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
            case VolumeConcentrationUnits.Picolitersperliter:
                return (this.value) / 1e-12;
            case VolumeConcentrationUnits.Nanolitersperliter:
                return (this.value) / 1e-9;
            case VolumeConcentrationUnits.Microlitersperliter:
                return (this.value) / 0.000001;
            case VolumeConcentrationUnits.Centilitersperliter:
                return (this.value) / 0.01;
            case VolumeConcentrationUnits.Decilitersperliter:
                return (this.value) / 0.1;
            case VolumeConcentrationUnits.Picoliterspermililiter:
                return (this.value / 1e-3) / 1e-12;
            case VolumeConcentrationUnits.Nanoliterspermililiter:
                return (this.value / 1e-3) / 1e-9;
            case VolumeConcentrationUnits.Microliterspermililiter:
                return (this.value / 1e-3) / 0.000001;
            case VolumeConcentrationUnits.Centiliterspermililiter:
                return (this.value / 1e-3) / 0.01;
            case VolumeConcentrationUnits.Deciliterspermililiter:
                return (this.value / 1e-3) / 0.1;
            default:
                break;
        }
        return NaN;
    }
}
exports.VolumeConcentration = VolumeConcentration;
//# sourceMappingURL=volumeconcentration.g.js.map