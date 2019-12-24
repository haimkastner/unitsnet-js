"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PermittivityUnits;
(function (PermittivityUnits) {
    PermittivityUnits[PermittivityUnits["FaradsPerMeter"] = 0] = "FaradsPerMeter";
})(PermittivityUnits = exports.PermittivityUnits || (exports.PermittivityUnits = {}));
class Permittivity {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get FaradsPerMeter() {
        return this.convertFromBase(PermittivityUnits.FaradsPerMeter);
    }
    static FromFaradsPerMeter(value) {
        return new Permittivity(value, PermittivityUnits.FaradsPerMeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case PermittivityUnits.FaradsPerMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case PermittivityUnits.FaradsPerMeter:
                return value;
            default:
                break;
        }
        return NaN;
    }
}
exports.Permittivity = Permittivity;
//# sourceMappingURL=permittivity.g.js.map