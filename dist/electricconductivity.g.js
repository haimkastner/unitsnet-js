"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricConductivityUnits;
(function (ElectricConductivityUnits) {
    ElectricConductivityUnits[ElectricConductivityUnits["SiemensPerMeter"] = 0] = "SiemensPerMeter";
    ElectricConductivityUnits[ElectricConductivityUnits["SiemensPerInch"] = 1] = "SiemensPerInch";
    ElectricConductivityUnits[ElectricConductivityUnits["SiemensPerFoot"] = 2] = "SiemensPerFoot";
})(ElectricConductivityUnits = exports.ElectricConductivityUnits || (exports.ElectricConductivityUnits = {}));
class ElectricConductivity {
    constructor(value, fromUnit) {
        this.siemenspermeterLazy = null;
        this.siemensperinchLazy = null;
        this.siemensperfootLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get SiemensPerMeter() {
        if (this.siemenspermeterLazy !== null) {
            return this.siemenspermeterLazy;
        }
        return this.siemenspermeterLazy = this.convertFromBase(ElectricConductivityUnits.SiemensPerMeter);
    }
    get SiemensPerInch() {
        if (this.siemensperinchLazy !== null) {
            return this.siemensperinchLazy;
        }
        return this.siemensperinchLazy = this.convertFromBase(ElectricConductivityUnits.SiemensPerInch);
    }
    get SiemensPerFoot() {
        if (this.siemensperfootLazy !== null) {
            return this.siemensperfootLazy;
        }
        return this.siemensperfootLazy = this.convertFromBase(ElectricConductivityUnits.SiemensPerFoot);
    }
    static FromSiemensPerMeter(value) {
        return new ElectricConductivity(value, ElectricConductivityUnits.SiemensPerMeter);
    }
    static FromSiemensPerInch(value) {
        return new ElectricConductivity(value, ElectricConductivityUnits.SiemensPerInch);
    }
    static FromSiemensPerFoot(value) {
        return new ElectricConductivity(value, ElectricConductivityUnits.SiemensPerFoot);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricConductivityUnits.SiemensPerMeter:
                return this.value;
            case ElectricConductivityUnits.SiemensPerInch:
                return this.value / 3.937007874015748e1;
            case ElectricConductivityUnits.SiemensPerFoot:
                return this.value / 3.2808398950131234;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricConductivityUnits.SiemensPerMeter:
                return value;
            case ElectricConductivityUnits.SiemensPerInch:
                return value * 3.937007874015748e1;
            case ElectricConductivityUnits.SiemensPerFoot:
                return value * 3.2808398950131234;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = ElectricConductivityUnits.SiemensPerMeter) {
        switch (toUnit) {
            case ElectricConductivityUnits.SiemensPerMeter:
                return this.SiemensPerMeter + ` S/m`;
            case ElectricConductivityUnits.SiemensPerInch:
                return this.SiemensPerInch + ` S/in`;
            case ElectricConductivityUnits.SiemensPerFoot:
                return this.SiemensPerFoot + ` S/ft`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ElectricConductivity = ElectricConductivity;
//# sourceMappingURL=electricconductivity.g.js.map