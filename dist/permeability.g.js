"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PermeabilityUnits;
(function (PermeabilityUnits) {
    PermeabilityUnits[PermeabilityUnits["HenriesPerMeter"] = 0] = "HenriesPerMeter";
})(PermeabilityUnits = exports.PermeabilityUnits || (exports.PermeabilityUnits = {}));
class Permeability {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get HenriesPerMeter() {
        return this.convertFromBase(PermeabilityUnits.HenriesPerMeter);
    }
    static FromHenriesPerMeter(value) {
        return new Permeability(value, PermeabilityUnits.HenriesPerMeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case PermeabilityUnits.HenriesPerMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case PermeabilityUnits.HenriesPerMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
}
exports.Permeability = Permeability;
//# sourceMappingURL=permeability.g.js.map