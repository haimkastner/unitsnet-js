"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** InformationUnits enumeration */
var InformationUnits;
(function (InformationUnits) {
    /** */
    InformationUnits[InformationUnits["Bytes"] = 0] = "Bytes";
    /** */
    InformationUnits[InformationUnits["Bits"] = 1] = "Bits";
    /** */
    InformationUnits[InformationUnits["Kilobytes"] = 2] = "Kilobytes";
    /** */
    InformationUnits[InformationUnits["Megabytes"] = 3] = "Megabytes";
    /** */
    InformationUnits[InformationUnits["Gigabytes"] = 4] = "Gigabytes";
    /** */
    InformationUnits[InformationUnits["Terabytes"] = 5] = "Terabytes";
    /** */
    InformationUnits[InformationUnits["Petabytes"] = 6] = "Petabytes";
    /** */
    InformationUnits[InformationUnits["Exabytes"] = 7] = "Exabytes";
    /** */
    InformationUnits[InformationUnits["Kilobits"] = 8] = "Kilobits";
    /** */
    InformationUnits[InformationUnits["Megabits"] = 9] = "Megabits";
    /** */
    InformationUnits[InformationUnits["Gigabits"] = 10] = "Gigabits";
    /** */
    InformationUnits[InformationUnits["Terabits"] = 11] = "Terabits";
    /** */
    InformationUnits[InformationUnits["Petabits"] = 12] = "Petabits";
    /** */
    InformationUnits[InformationUnits["Exabits"] = 13] = "Exabits";
})(InformationUnits = exports.InformationUnits || (exports.InformationUnits = {}));
/** In computing and telecommunications, a unit of information is the capacity of some standard data storage system or communication channel, used to measure the capacities of other systems and channels. In information theory, units of information are also used to measure the information contents or entropy of random variables. */
class Information {
    /**
     * Create a new Information.
     * @param value The value.
     * @param fromUnit The ‘Information’ unit to create from.
     * The default unit is Bits
     */
    constructor(value, fromUnit = InformationUnits.Bits) {
        this.bytesLazy = null;
        this.bitsLazy = null;
        this.kilobytesLazy = null;
        this.megabytesLazy = null;
        this.gigabytesLazy = null;
        this.terabytesLazy = null;
        this.petabytesLazy = null;
        this.exabytesLazy = null;
        this.kilobitsLazy = null;
        this.megabitsLazy = null;
        this.gigabitsLazy = null;
        this.terabitsLazy = null;
        this.petabitsLazy = null;
        this.exabitsLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Information is Bits.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get Bytes() {
        if (this.bytesLazy !== null) {
            return this.bytesLazy;
        }
        return this.bytesLazy = this.convertFromBase(InformationUnits.Bytes);
    }
    /** */
    get Bits() {
        if (this.bitsLazy !== null) {
            return this.bitsLazy;
        }
        return this.bitsLazy = this.convertFromBase(InformationUnits.Bits);
    }
    /** */
    get Kilobytes() {
        if (this.kilobytesLazy !== null) {
            return this.kilobytesLazy;
        }
        return this.kilobytesLazy = this.convertFromBase(InformationUnits.Kilobytes);
    }
    /** */
    get Megabytes() {
        if (this.megabytesLazy !== null) {
            return this.megabytesLazy;
        }
        return this.megabytesLazy = this.convertFromBase(InformationUnits.Megabytes);
    }
    /** */
    get Gigabytes() {
        if (this.gigabytesLazy !== null) {
            return this.gigabytesLazy;
        }
        return this.gigabytesLazy = this.convertFromBase(InformationUnits.Gigabytes);
    }
    /** */
    get Terabytes() {
        if (this.terabytesLazy !== null) {
            return this.terabytesLazy;
        }
        return this.terabytesLazy = this.convertFromBase(InformationUnits.Terabytes);
    }
    /** */
    get Petabytes() {
        if (this.petabytesLazy !== null) {
            return this.petabytesLazy;
        }
        return this.petabytesLazy = this.convertFromBase(InformationUnits.Petabytes);
    }
    /** */
    get Exabytes() {
        if (this.exabytesLazy !== null) {
            return this.exabytesLazy;
        }
        return this.exabytesLazy = this.convertFromBase(InformationUnits.Exabytes);
    }
    /** */
    get Kilobits() {
        if (this.kilobitsLazy !== null) {
            return this.kilobitsLazy;
        }
        return this.kilobitsLazy = this.convertFromBase(InformationUnits.Kilobits);
    }
    /** */
    get Megabits() {
        if (this.megabitsLazy !== null) {
            return this.megabitsLazy;
        }
        return this.megabitsLazy = this.convertFromBase(InformationUnits.Megabits);
    }
    /** */
    get Gigabits() {
        if (this.gigabitsLazy !== null) {
            return this.gigabitsLazy;
        }
        return this.gigabitsLazy = this.convertFromBase(InformationUnits.Gigabits);
    }
    /** */
    get Terabits() {
        if (this.terabitsLazy !== null) {
            return this.terabitsLazy;
        }
        return this.terabitsLazy = this.convertFromBase(InformationUnits.Terabits);
    }
    /** */
    get Petabits() {
        if (this.petabitsLazy !== null) {
            return this.petabitsLazy;
        }
        return this.petabitsLazy = this.convertFromBase(InformationUnits.Petabits);
    }
    /** */
    get Exabits() {
        if (this.exabitsLazy !== null) {
            return this.exabitsLazy;
        }
        return this.exabitsLazy = this.convertFromBase(InformationUnits.Exabits);
    }
    /**
     * Create a new Information instance from a Bytes
     *
     * @param value The unit as Bytes to create a new Information from.
     * @returns The new Information instance.
     */
    static FromBytes(value) {
        return new Information(value, InformationUnits.Bytes);
    }
    /**
     * Create a new Information instance from a Bits
     *
     * @param value The unit as Bits to create a new Information from.
     * @returns The new Information instance.
     */
    static FromBits(value) {
        return new Information(value, InformationUnits.Bits);
    }
    /**
     * Create a new Information instance from a Kilobytes
     *
     * @param value The unit as Kilobytes to create a new Information from.
     * @returns The new Information instance.
     */
    static FromKilobytes(value) {
        return new Information(value, InformationUnits.Kilobytes);
    }
    /**
     * Create a new Information instance from a Megabytes
     *
     * @param value The unit as Megabytes to create a new Information from.
     * @returns The new Information instance.
     */
    static FromMegabytes(value) {
        return new Information(value, InformationUnits.Megabytes);
    }
    /**
     * Create a new Information instance from a Gigabytes
     *
     * @param value The unit as Gigabytes to create a new Information from.
     * @returns The new Information instance.
     */
    static FromGigabytes(value) {
        return new Information(value, InformationUnits.Gigabytes);
    }
    /**
     * Create a new Information instance from a Terabytes
     *
     * @param value The unit as Terabytes to create a new Information from.
     * @returns The new Information instance.
     */
    static FromTerabytes(value) {
        return new Information(value, InformationUnits.Terabytes);
    }
    /**
     * Create a new Information instance from a Petabytes
     *
     * @param value The unit as Petabytes to create a new Information from.
     * @returns The new Information instance.
     */
    static FromPetabytes(value) {
        return new Information(value, InformationUnits.Petabytes);
    }
    /**
     * Create a new Information instance from a Exabytes
     *
     * @param value The unit as Exabytes to create a new Information from.
     * @returns The new Information instance.
     */
    static FromExabytes(value) {
        return new Information(value, InformationUnits.Exabytes);
    }
    /**
     * Create a new Information instance from a Kilobits
     *
     * @param value The unit as Kilobits to create a new Information from.
     * @returns The new Information instance.
     */
    static FromKilobits(value) {
        return new Information(value, InformationUnits.Kilobits);
    }
    /**
     * Create a new Information instance from a Megabits
     *
     * @param value The unit as Megabits to create a new Information from.
     * @returns The new Information instance.
     */
    static FromMegabits(value) {
        return new Information(value, InformationUnits.Megabits);
    }
    /**
     * Create a new Information instance from a Gigabits
     *
     * @param value The unit as Gigabits to create a new Information from.
     * @returns The new Information instance.
     */
    static FromGigabits(value) {
        return new Information(value, InformationUnits.Gigabits);
    }
    /**
     * Create a new Information instance from a Terabits
     *
     * @param value The unit as Terabits to create a new Information from.
     * @returns The new Information instance.
     */
    static FromTerabits(value) {
        return new Information(value, InformationUnits.Terabits);
    }
    /**
     * Create a new Information instance from a Petabits
     *
     * @param value The unit as Petabits to create a new Information from.
     * @returns The new Information instance.
     */
    static FromPetabits(value) {
        return new Information(value, InformationUnits.Petabits);
    }
    /**
     * Create a new Information instance from a Exabits
     *
     * @param value The unit as Exabits to create a new Information from.
     * @returns The new Information instance.
     */
    static FromExabits(value) {
        return new Information(value, InformationUnits.Exabits);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case InformationUnits.Bytes:
                return this.value / 8;
            case InformationUnits.Bits:
                return this.value;
            case InformationUnits.Kilobytes:
                return (this.value / 8) / 1000;
            case InformationUnits.Megabytes:
                return (this.value / 8) / 1000000;
            case InformationUnits.Gigabytes:
                return (this.value / 8) / 1000000000;
            case InformationUnits.Terabytes:
                return (this.value / 8) / 1000000000000;
            case InformationUnits.Petabytes:
                return (this.value / 8) / 1000000000000000;
            case InformationUnits.Exabytes:
                return (this.value / 8) / 1000000000000000000;
            case InformationUnits.Kilobits:
                return (this.value) / 1000;
            case InformationUnits.Megabits:
                return (this.value) / 1000000;
            case InformationUnits.Gigabits:
                return (this.value) / 1000000000;
            case InformationUnits.Terabits:
                return (this.value) / 1000000000000;
            case InformationUnits.Petabits:
                return (this.value) / 1000000000000000;
            case InformationUnits.Exabits:
                return (this.value) / 1000000000000000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case InformationUnits.Bytes:
                return value * 8;
            case InformationUnits.Bits:
                return value;
            case InformationUnits.Kilobytes:
                return (value * 8) * 1000;
            case InformationUnits.Megabytes:
                return (value * 8) * 1000000;
            case InformationUnits.Gigabytes:
                return (value * 8) * 1000000000;
            case InformationUnits.Terabytes:
                return (value * 8) * 1000000000000;
            case InformationUnits.Petabytes:
                return (value * 8) * 1000000000000000;
            case InformationUnits.Exabytes:
                return (value * 8) * 1000000000000000000;
            case InformationUnits.Kilobits:
                return (value) * 1000;
            case InformationUnits.Megabits:
                return (value) * 1000000;
            case InformationUnits.Gigabits:
                return (value) * 1000000000;
            case InformationUnits.Terabits:
                return (value) * 1000000000000;
            case InformationUnits.Petabits:
                return (value) * 1000000000000000;
            case InformationUnits.Exabits:
                return (value) * 1000000000000000000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the Information to string.
     * Note! the default format for Information is Bits.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Information.
     * @returns The string format of the Information.
     */
    toString(toUnit = InformationUnits.Bits) {
        switch (toUnit) {
            case InformationUnits.Bytes:
                return this.Bytes + ` B`;
            case InformationUnits.Bits:
                return this.Bits + ` b`;
            case InformationUnits.Kilobytes:
                return this.Kilobytes + ` `;
            case InformationUnits.Megabytes:
                return this.Megabytes + ` `;
            case InformationUnits.Gigabytes:
                return this.Gigabytes + ` `;
            case InformationUnits.Terabytes:
                return this.Terabytes + ` `;
            case InformationUnits.Petabytes:
                return this.Petabytes + ` `;
            case InformationUnits.Exabytes:
                return this.Exabytes + ` `;
            case InformationUnits.Kilobits:
                return this.Kilobits + ` `;
            case InformationUnits.Megabits:
                return this.Megabits + ` `;
            case InformationUnits.Gigabits:
                return this.Gigabits + ` `;
            case InformationUnits.Terabits:
                return this.Terabits + ` `;
            case InformationUnits.Petabits:
                return this.Petabits + ` `;
            case InformationUnits.Exabits:
                return this.Exabits + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given Information are equals to the current Information.
     * @param information The other Information.
     * @returns True if the given Information are equal to the current Information.
     */
    equals(information) {
        return this.value === information.BaseValue;
    }
    /**
     * Compare the given Information against the current Information.
     * @param information The other Information.
     * @returns 0 if they are equal, -1 if the current Information is less then other, 1 if the current Information is greater then other.
     */
    compareTo(information) {
        if (this.value > information.BaseValue)
            return 1;
        if (this.value < information.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given Information with the current Information.
     * @param information The other Information.
     * @returns A new Information instance with the results.
     */
    add(information) {
        return new Information(this.value + information.BaseValue);
    }
    /**
     * Subtract the given Information with the current Information.
     * @param information The other Information.
     * @returns A new Information instance with the results.
     */
    subtract(information) {
        return new Information(this.value - information.BaseValue);
    }
    /**
     * Multiply the given Information with the current Information.
     * @param information The other Information.
     * @returns A new Information instance with the results.
     */
    multiply(information) {
        return new Information(this.value * information.BaseValue);
    }
    /**
     * Divide the given Information with the current Information.
     * @param information The other Information.
     * @returns A new Information instance with the results.
     */
    divide(information) {
        return new Information(this.value / information.BaseValue);
    }
    /**
     * Modulo the given Information with the current Information.
     * @param information The other Information.
     * @returns A new Information instance with the results.
     */
    modulo(information) {
        return new Information(this.value % information.BaseValue);
    }
    /**
     * Pow the given Information with the current Information.
     * @param information The other Information.
     * @returns A new Information instance with the results.
     */
    pow(information) {
        return new Information(this.value ** information.BaseValue);
    }
}
exports.Information = Information;
//# sourceMappingURL=information.g.js.map