"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** MassFlowUnits enumeration */
var MassFlowUnits;
(function (MassFlowUnits) {
    /** */
    MassFlowUnits[MassFlowUnits["GramsPerSecond"] = 0] = "GramsPerSecond";
    /** */
    MassFlowUnits[MassFlowUnits["GramsPerDay"] = 1] = "GramsPerDay";
    /** */
    MassFlowUnits[MassFlowUnits["GramsPerHour"] = 2] = "GramsPerHour";
    /** */
    MassFlowUnits[MassFlowUnits["KilogramsPerHour"] = 3] = "KilogramsPerHour";
    /** */
    MassFlowUnits[MassFlowUnits["KilogramsPerMinute"] = 4] = "KilogramsPerMinute";
    /** */
    MassFlowUnits[MassFlowUnits["TonnesPerHour"] = 5] = "TonnesPerHour";
    /** */
    MassFlowUnits[MassFlowUnits["PoundsPerDay"] = 6] = "PoundsPerDay";
    /** */
    MassFlowUnits[MassFlowUnits["PoundsPerHour"] = 7] = "PoundsPerHour";
    /** */
    MassFlowUnits[MassFlowUnits["PoundsPerMinute"] = 8] = "PoundsPerMinute";
    /** */
    MassFlowUnits[MassFlowUnits["PoundsPerSecond"] = 9] = "PoundsPerSecond";
    /** */
    MassFlowUnits[MassFlowUnits["TonnesPerDay"] = 10] = "TonnesPerDay";
    /** */
    MassFlowUnits[MassFlowUnits["ShortTonsPerHour"] = 11] = "ShortTonsPerHour";
    /** */
    MassFlowUnits[MassFlowUnits["NanogramsPerSecond"] = 12] = "NanogramsPerSecond";
    /** */
    MassFlowUnits[MassFlowUnits["MicrogramsPerSecond"] = 13] = "MicrogramsPerSecond";
    /** */
    MassFlowUnits[MassFlowUnits["CentigramsPerSecond"] = 14] = "CentigramsPerSecond";
    /** */
    MassFlowUnits[MassFlowUnits["DecigramsPerSecond"] = 15] = "DecigramsPerSecond";
    /** */
    MassFlowUnits[MassFlowUnits["DecagramsPerSecond"] = 16] = "DecagramsPerSecond";
    /** */
    MassFlowUnits[MassFlowUnits["HectogramsPerSecond"] = 17] = "HectogramsPerSecond";
    /** */
    MassFlowUnits[MassFlowUnits["KilogramsPerSecond"] = 18] = "KilogramsPerSecond";
    /** */
    MassFlowUnits[MassFlowUnits["NanogramsPerDay"] = 19] = "NanogramsPerDay";
    /** */
    MassFlowUnits[MassFlowUnits["MicrogramsPerDay"] = 20] = "MicrogramsPerDay";
    /** */
    MassFlowUnits[MassFlowUnits["CentigramsPerDay"] = 21] = "CentigramsPerDay";
    /** */
    MassFlowUnits[MassFlowUnits["DecigramsPerDay"] = 22] = "DecigramsPerDay";
    /** */
    MassFlowUnits[MassFlowUnits["DecagramsPerDay"] = 23] = "DecagramsPerDay";
    /** */
    MassFlowUnits[MassFlowUnits["HectogramsPerDay"] = 24] = "HectogramsPerDay";
    /** */
    MassFlowUnits[MassFlowUnits["KilogramsPerDay"] = 25] = "KilogramsPerDay";
    /** */
    MassFlowUnits[MassFlowUnits["MegagramsPerDay"] = 26] = "MegagramsPerDay";
    /** */
    MassFlowUnits[MassFlowUnits["MegapoundsPerDay"] = 27] = "MegapoundsPerDay";
    /** */
    MassFlowUnits[MassFlowUnits["MegapoundsPerHour"] = 28] = "MegapoundsPerHour";
    /** */
    MassFlowUnits[MassFlowUnits["MegapoundsPerMinute"] = 29] = "MegapoundsPerMinute";
    /** */
    MassFlowUnits[MassFlowUnits["MegapoundsPerSecond"] = 30] = "MegapoundsPerSecond";
})(MassFlowUnits = exports.MassFlowUnits || (exports.MassFlowUnits = {}));
/** Mass flow is the ratio of the mass change to the time during which the change occurred (value of mass changes per unit time). */
class MassFlow {
    /**
     * Create a new MassFlow.
     * @param value The value.
     * @param fromUnit The ‘MassFlow’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.gramspersecondLazy = null;
        this.gramsperdayLazy = null;
        this.gramsperhourLazy = null;
        this.kilogramsperhourLazy = null;
        this.kilogramsperminuteLazy = null;
        this.tonnesperhourLazy = null;
        this.poundsperdayLazy = null;
        this.poundsperhourLazy = null;
        this.poundsperminuteLazy = null;
        this.poundspersecondLazy = null;
        this.tonnesperdayLazy = null;
        this.shorttonsperhourLazy = null;
        this.nanogramspersecondLazy = null;
        this.microgramspersecondLazy = null;
        this.centigramspersecondLazy = null;
        this.decigramspersecondLazy = null;
        this.decagramspersecondLazy = null;
        this.hectogramspersecondLazy = null;
        this.kilogramspersecondLazy = null;
        this.nanogramsperdayLazy = null;
        this.microgramsperdayLazy = null;
        this.centigramsperdayLazy = null;
        this.decigramsperdayLazy = null;
        this.decagramsperdayLazy = null;
        this.hectogramsperdayLazy = null;
        this.kilogramsperdayLazy = null;
        this.megagramsperdayLazy = null;
        this.megapoundsperdayLazy = null;
        this.megapoundsperhourLazy = null;
        this.megapoundsperminuteLazy = null;
        this.megapoundspersecondLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of MassFlow is GramPerSecond.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get GramsPerSecond() {
        if (this.gramspersecondLazy !== null) {
            return this.gramspersecondLazy;
        }
        return this.gramspersecondLazy = this.convertFromBase(MassFlowUnits.GramsPerSecond);
    }
    /** */
    get GramsPerDay() {
        if (this.gramsperdayLazy !== null) {
            return this.gramsperdayLazy;
        }
        return this.gramsperdayLazy = this.convertFromBase(MassFlowUnits.GramsPerDay);
    }
    /** */
    get GramsPerHour() {
        if (this.gramsperhourLazy !== null) {
            return this.gramsperhourLazy;
        }
        return this.gramsperhourLazy = this.convertFromBase(MassFlowUnits.GramsPerHour);
    }
    /** */
    get KilogramsPerHour() {
        if (this.kilogramsperhourLazy !== null) {
            return this.kilogramsperhourLazy;
        }
        return this.kilogramsperhourLazy = this.convertFromBase(MassFlowUnits.KilogramsPerHour);
    }
    /** */
    get KilogramsPerMinute() {
        if (this.kilogramsperminuteLazy !== null) {
            return this.kilogramsperminuteLazy;
        }
        return this.kilogramsperminuteLazy = this.convertFromBase(MassFlowUnits.KilogramsPerMinute);
    }
    /** */
    get TonnesPerHour() {
        if (this.tonnesperhourLazy !== null) {
            return this.tonnesperhourLazy;
        }
        return this.tonnesperhourLazy = this.convertFromBase(MassFlowUnits.TonnesPerHour);
    }
    /** */
    get PoundsPerDay() {
        if (this.poundsperdayLazy !== null) {
            return this.poundsperdayLazy;
        }
        return this.poundsperdayLazy = this.convertFromBase(MassFlowUnits.PoundsPerDay);
    }
    /** */
    get PoundsPerHour() {
        if (this.poundsperhourLazy !== null) {
            return this.poundsperhourLazy;
        }
        return this.poundsperhourLazy = this.convertFromBase(MassFlowUnits.PoundsPerHour);
    }
    /** */
    get PoundsPerMinute() {
        if (this.poundsperminuteLazy !== null) {
            return this.poundsperminuteLazy;
        }
        return this.poundsperminuteLazy = this.convertFromBase(MassFlowUnits.PoundsPerMinute);
    }
    /** */
    get PoundsPerSecond() {
        if (this.poundspersecondLazy !== null) {
            return this.poundspersecondLazy;
        }
        return this.poundspersecondLazy = this.convertFromBase(MassFlowUnits.PoundsPerSecond);
    }
    /** */
    get TonnesPerDay() {
        if (this.tonnesperdayLazy !== null) {
            return this.tonnesperdayLazy;
        }
        return this.tonnesperdayLazy = this.convertFromBase(MassFlowUnits.TonnesPerDay);
    }
    /** */
    get ShortTonsPerHour() {
        if (this.shorttonsperhourLazy !== null) {
            return this.shorttonsperhourLazy;
        }
        return this.shorttonsperhourLazy = this.convertFromBase(MassFlowUnits.ShortTonsPerHour);
    }
    /** */
    get NanogramsPerSecond() {
        if (this.nanogramspersecondLazy !== null) {
            return this.nanogramspersecondLazy;
        }
        return this.nanogramspersecondLazy = this.convertFromBase(MassFlowUnits.NanogramsPerSecond);
    }
    /** */
    get MicrogramsPerSecond() {
        if (this.microgramspersecondLazy !== null) {
            return this.microgramspersecondLazy;
        }
        return this.microgramspersecondLazy = this.convertFromBase(MassFlowUnits.MicrogramsPerSecond);
    }
    /** */
    get CentigramsPerSecond() {
        if (this.centigramspersecondLazy !== null) {
            return this.centigramspersecondLazy;
        }
        return this.centigramspersecondLazy = this.convertFromBase(MassFlowUnits.CentigramsPerSecond);
    }
    /** */
    get DecigramsPerSecond() {
        if (this.decigramspersecondLazy !== null) {
            return this.decigramspersecondLazy;
        }
        return this.decigramspersecondLazy = this.convertFromBase(MassFlowUnits.DecigramsPerSecond);
    }
    /** */
    get DecagramsPerSecond() {
        if (this.decagramspersecondLazy !== null) {
            return this.decagramspersecondLazy;
        }
        return this.decagramspersecondLazy = this.convertFromBase(MassFlowUnits.DecagramsPerSecond);
    }
    /** */
    get HectogramsPerSecond() {
        if (this.hectogramspersecondLazy !== null) {
            return this.hectogramspersecondLazy;
        }
        return this.hectogramspersecondLazy = this.convertFromBase(MassFlowUnits.HectogramsPerSecond);
    }
    /** */
    get KilogramsPerSecond() {
        if (this.kilogramspersecondLazy !== null) {
            return this.kilogramspersecondLazy;
        }
        return this.kilogramspersecondLazy = this.convertFromBase(MassFlowUnits.KilogramsPerSecond);
    }
    /** */
    get NanogramsPerDay() {
        if (this.nanogramsperdayLazy !== null) {
            return this.nanogramsperdayLazy;
        }
        return this.nanogramsperdayLazy = this.convertFromBase(MassFlowUnits.NanogramsPerDay);
    }
    /** */
    get MicrogramsPerDay() {
        if (this.microgramsperdayLazy !== null) {
            return this.microgramsperdayLazy;
        }
        return this.microgramsperdayLazy = this.convertFromBase(MassFlowUnits.MicrogramsPerDay);
    }
    /** */
    get CentigramsPerDay() {
        if (this.centigramsperdayLazy !== null) {
            return this.centigramsperdayLazy;
        }
        return this.centigramsperdayLazy = this.convertFromBase(MassFlowUnits.CentigramsPerDay);
    }
    /** */
    get DecigramsPerDay() {
        if (this.decigramsperdayLazy !== null) {
            return this.decigramsperdayLazy;
        }
        return this.decigramsperdayLazy = this.convertFromBase(MassFlowUnits.DecigramsPerDay);
    }
    /** */
    get DecagramsPerDay() {
        if (this.decagramsperdayLazy !== null) {
            return this.decagramsperdayLazy;
        }
        return this.decagramsperdayLazy = this.convertFromBase(MassFlowUnits.DecagramsPerDay);
    }
    /** */
    get HectogramsPerDay() {
        if (this.hectogramsperdayLazy !== null) {
            return this.hectogramsperdayLazy;
        }
        return this.hectogramsperdayLazy = this.convertFromBase(MassFlowUnits.HectogramsPerDay);
    }
    /** */
    get KilogramsPerDay() {
        if (this.kilogramsperdayLazy !== null) {
            return this.kilogramsperdayLazy;
        }
        return this.kilogramsperdayLazy = this.convertFromBase(MassFlowUnits.KilogramsPerDay);
    }
    /** */
    get MegagramsPerDay() {
        if (this.megagramsperdayLazy !== null) {
            return this.megagramsperdayLazy;
        }
        return this.megagramsperdayLazy = this.convertFromBase(MassFlowUnits.MegagramsPerDay);
    }
    /** */
    get MegapoundsPerDay() {
        if (this.megapoundsperdayLazy !== null) {
            return this.megapoundsperdayLazy;
        }
        return this.megapoundsperdayLazy = this.convertFromBase(MassFlowUnits.MegapoundsPerDay);
    }
    /** */
    get MegapoundsPerHour() {
        if (this.megapoundsperhourLazy !== null) {
            return this.megapoundsperhourLazy;
        }
        return this.megapoundsperhourLazy = this.convertFromBase(MassFlowUnits.MegapoundsPerHour);
    }
    /** */
    get MegapoundsPerMinute() {
        if (this.megapoundsperminuteLazy !== null) {
            return this.megapoundsperminuteLazy;
        }
        return this.megapoundsperminuteLazy = this.convertFromBase(MassFlowUnits.MegapoundsPerMinute);
    }
    /** */
    get MegapoundsPerSecond() {
        if (this.megapoundspersecondLazy !== null) {
            return this.megapoundspersecondLazy;
        }
        return this.megapoundspersecondLazy = this.convertFromBase(MassFlowUnits.MegapoundsPerSecond);
    }
    /**
     * Create a new MassFlow instance from a GramsPerSecond
     *
     * @param value The unit as GramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromGramsPerSecond(value) {
        return new MassFlow(value, MassFlowUnits.GramsPerSecond);
    }
    /**
     * Create a new MassFlow instance from a GramsPerDay
     *
     * @param value The unit as GramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromGramsPerDay(value) {
        return new MassFlow(value, MassFlowUnits.GramsPerDay);
    }
    /**
     * Create a new MassFlow instance from a GramsPerHour
     *
     * @param value The unit as GramsPerHour to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromGramsPerHour(value) {
        return new MassFlow(value, MassFlowUnits.GramsPerHour);
    }
    /**
     * Create a new MassFlow instance from a KilogramsPerHour
     *
     * @param value The unit as KilogramsPerHour to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromKilogramsPerHour(value) {
        return new MassFlow(value, MassFlowUnits.KilogramsPerHour);
    }
    /**
     * Create a new MassFlow instance from a KilogramsPerMinute
     *
     * @param value The unit as KilogramsPerMinute to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromKilogramsPerMinute(value) {
        return new MassFlow(value, MassFlowUnits.KilogramsPerMinute);
    }
    /**
     * Create a new MassFlow instance from a TonnesPerHour
     *
     * @param value The unit as TonnesPerHour to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromTonnesPerHour(value) {
        return new MassFlow(value, MassFlowUnits.TonnesPerHour);
    }
    /**
     * Create a new MassFlow instance from a PoundsPerDay
     *
     * @param value The unit as PoundsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromPoundsPerDay(value) {
        return new MassFlow(value, MassFlowUnits.PoundsPerDay);
    }
    /**
     * Create a new MassFlow instance from a PoundsPerHour
     *
     * @param value The unit as PoundsPerHour to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromPoundsPerHour(value) {
        return new MassFlow(value, MassFlowUnits.PoundsPerHour);
    }
    /**
     * Create a new MassFlow instance from a PoundsPerMinute
     *
     * @param value The unit as PoundsPerMinute to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromPoundsPerMinute(value) {
        return new MassFlow(value, MassFlowUnits.PoundsPerMinute);
    }
    /**
     * Create a new MassFlow instance from a PoundsPerSecond
     *
     * @param value The unit as PoundsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromPoundsPerSecond(value) {
        return new MassFlow(value, MassFlowUnits.PoundsPerSecond);
    }
    /**
     * Create a new MassFlow instance from a TonnesPerDay
     *
     * @param value The unit as TonnesPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromTonnesPerDay(value) {
        return new MassFlow(value, MassFlowUnits.TonnesPerDay);
    }
    /**
     * Create a new MassFlow instance from a ShortTonsPerHour
     *
     * @param value The unit as ShortTonsPerHour to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromShortTonsPerHour(value) {
        return new MassFlow(value, MassFlowUnits.ShortTonsPerHour);
    }
    /**
     * Create a new MassFlow instance from a NanogramsPerSecond
     *
     * @param value The unit as NanogramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromNanogramsPerSecond(value) {
        return new MassFlow(value, MassFlowUnits.NanogramsPerSecond);
    }
    /**
     * Create a new MassFlow instance from a MicrogramsPerSecond
     *
     * @param value The unit as MicrogramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromMicrogramsPerSecond(value) {
        return new MassFlow(value, MassFlowUnits.MicrogramsPerSecond);
    }
    /**
     * Create a new MassFlow instance from a CentigramsPerSecond
     *
     * @param value The unit as CentigramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromCentigramsPerSecond(value) {
        return new MassFlow(value, MassFlowUnits.CentigramsPerSecond);
    }
    /**
     * Create a new MassFlow instance from a DecigramsPerSecond
     *
     * @param value The unit as DecigramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromDecigramsPerSecond(value) {
        return new MassFlow(value, MassFlowUnits.DecigramsPerSecond);
    }
    /**
     * Create a new MassFlow instance from a DecagramsPerSecond
     *
     * @param value The unit as DecagramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromDecagramsPerSecond(value) {
        return new MassFlow(value, MassFlowUnits.DecagramsPerSecond);
    }
    /**
     * Create a new MassFlow instance from a HectogramsPerSecond
     *
     * @param value The unit as HectogramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromHectogramsPerSecond(value) {
        return new MassFlow(value, MassFlowUnits.HectogramsPerSecond);
    }
    /**
     * Create a new MassFlow instance from a KilogramsPerSecond
     *
     * @param value The unit as KilogramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromKilogramsPerSecond(value) {
        return new MassFlow(value, MassFlowUnits.KilogramsPerSecond);
    }
    /**
     * Create a new MassFlow instance from a NanogramsPerDay
     *
     * @param value The unit as NanogramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromNanogramsPerDay(value) {
        return new MassFlow(value, MassFlowUnits.NanogramsPerDay);
    }
    /**
     * Create a new MassFlow instance from a MicrogramsPerDay
     *
     * @param value The unit as MicrogramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromMicrogramsPerDay(value) {
        return new MassFlow(value, MassFlowUnits.MicrogramsPerDay);
    }
    /**
     * Create a new MassFlow instance from a CentigramsPerDay
     *
     * @param value The unit as CentigramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromCentigramsPerDay(value) {
        return new MassFlow(value, MassFlowUnits.CentigramsPerDay);
    }
    /**
     * Create a new MassFlow instance from a DecigramsPerDay
     *
     * @param value The unit as DecigramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromDecigramsPerDay(value) {
        return new MassFlow(value, MassFlowUnits.DecigramsPerDay);
    }
    /**
     * Create a new MassFlow instance from a DecagramsPerDay
     *
     * @param value The unit as DecagramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromDecagramsPerDay(value) {
        return new MassFlow(value, MassFlowUnits.DecagramsPerDay);
    }
    /**
     * Create a new MassFlow instance from a HectogramsPerDay
     *
     * @param value The unit as HectogramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromHectogramsPerDay(value) {
        return new MassFlow(value, MassFlowUnits.HectogramsPerDay);
    }
    /**
     * Create a new MassFlow instance from a KilogramsPerDay
     *
     * @param value The unit as KilogramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromKilogramsPerDay(value) {
        return new MassFlow(value, MassFlowUnits.KilogramsPerDay);
    }
    /**
     * Create a new MassFlow instance from a MegagramsPerDay
     *
     * @param value The unit as MegagramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromMegagramsPerDay(value) {
        return new MassFlow(value, MassFlowUnits.MegagramsPerDay);
    }
    /**
     * Create a new MassFlow instance from a MegapoundsPerDay
     *
     * @param value The unit as MegapoundsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromMegapoundsPerDay(value) {
        return new MassFlow(value, MassFlowUnits.MegapoundsPerDay);
    }
    /**
     * Create a new MassFlow instance from a MegapoundsPerHour
     *
     * @param value The unit as MegapoundsPerHour to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromMegapoundsPerHour(value) {
        return new MassFlow(value, MassFlowUnits.MegapoundsPerHour);
    }
    /**
     * Create a new MassFlow instance from a MegapoundsPerMinute
     *
     * @param value The unit as MegapoundsPerMinute to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromMegapoundsPerMinute(value) {
        return new MassFlow(value, MassFlowUnits.MegapoundsPerMinute);
    }
    /**
     * Create a new MassFlow instance from a MegapoundsPerSecond
     *
     * @param value The unit as MegapoundsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromMegapoundsPerSecond(value) {
        return new MassFlow(value, MassFlowUnits.MegapoundsPerSecond);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MassFlowUnits.GramsPerSecond:
                return this.value;
            case MassFlowUnits.GramsPerDay:
                return this.value * 86400;
            case MassFlowUnits.GramsPerHour:
                return this.value * 3600;
            case MassFlowUnits.KilogramsPerHour:
                return this.value * 3.6;
            case MassFlowUnits.KilogramsPerMinute:
                return this.value * 0.06;
            case MassFlowUnits.TonnesPerHour:
                return this.value * 3.6 / 1000;
            case MassFlowUnits.PoundsPerDay:
                return this.value * 190.47936;
            case MassFlowUnits.PoundsPerHour:
                return this.value * 7.93664;
            case MassFlowUnits.PoundsPerMinute:
                return this.value * 0.132277;
            case MassFlowUnits.PoundsPerSecond:
                return this.value / 453.59237;
            case MassFlowUnits.TonnesPerDay:
                return this.value * 0.0864000;
            case MassFlowUnits.ShortTonsPerHour:
                return this.value / 251.9957611;
            case MassFlowUnits.NanogramsPerSecond:
                return (this.value) / 1e-9;
            case MassFlowUnits.MicrogramsPerSecond:
                return (this.value) / 0.000001;
            case MassFlowUnits.CentigramsPerSecond:
                return (this.value) / 0.01;
            case MassFlowUnits.DecigramsPerSecond:
                return (this.value) / 0.1;
            case MassFlowUnits.DecagramsPerSecond:
                return (this.value) / 10;
            case MassFlowUnits.HectogramsPerSecond:
                return (this.value) / 100;
            case MassFlowUnits.KilogramsPerSecond:
                return (this.value) / 1000;
            case MassFlowUnits.NanogramsPerDay:
                return (this.value * 86400) / 1e-9;
            case MassFlowUnits.MicrogramsPerDay:
                return (this.value * 86400) / 0.000001;
            case MassFlowUnits.CentigramsPerDay:
                return (this.value * 86400) / 0.01;
            case MassFlowUnits.DecigramsPerDay:
                return (this.value * 86400) / 0.1;
            case MassFlowUnits.DecagramsPerDay:
                return (this.value * 86400) / 10;
            case MassFlowUnits.HectogramsPerDay:
                return (this.value * 86400) / 100;
            case MassFlowUnits.KilogramsPerDay:
                return (this.value * 86400) / 1000;
            case MassFlowUnits.MegagramsPerDay:
                return (this.value * 86400) / 1000000;
            case MassFlowUnits.MegapoundsPerDay:
                return (this.value * 190.47936) / 1000000;
            case MassFlowUnits.MegapoundsPerHour:
                return (this.value * 7.93664) / 1000000;
            case MassFlowUnits.MegapoundsPerMinute:
                return (this.value * 0.132277) / 1000000;
            case MassFlowUnits.MegapoundsPerSecond:
                return (this.value / 453.59237) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case MassFlowUnits.GramsPerSecond:
                return value;
            case MassFlowUnits.GramsPerDay:
                return value / 86400;
            case MassFlowUnits.GramsPerHour:
                return value / 3600;
            case MassFlowUnits.KilogramsPerHour:
                return value / 3.6;
            case MassFlowUnits.KilogramsPerMinute:
                return value / 0.06;
            case MassFlowUnits.TonnesPerHour:
                return 1000 * value / 3.6;
            case MassFlowUnits.PoundsPerDay:
                return value / 190.47936;
            case MassFlowUnits.PoundsPerHour:
                return value / 7.93664;
            case MassFlowUnits.PoundsPerMinute:
                return value / 0.132277;
            case MassFlowUnits.PoundsPerSecond:
                return value * 453.59237;
            case MassFlowUnits.TonnesPerDay:
                return value / 0.0864000;
            case MassFlowUnits.ShortTonsPerHour:
                return value * 251.9957611;
            case MassFlowUnits.NanogramsPerSecond:
                return (value) * 1e-9;
            case MassFlowUnits.MicrogramsPerSecond:
                return (value) * 0.000001;
            case MassFlowUnits.CentigramsPerSecond:
                return (value) * 0.01;
            case MassFlowUnits.DecigramsPerSecond:
                return (value) * 0.1;
            case MassFlowUnits.DecagramsPerSecond:
                return (value) * 10;
            case MassFlowUnits.HectogramsPerSecond:
                return (value) * 100;
            case MassFlowUnits.KilogramsPerSecond:
                return (value) * 1000;
            case MassFlowUnits.NanogramsPerDay:
                return (value / 86400) * 1e-9;
            case MassFlowUnits.MicrogramsPerDay:
                return (value / 86400) * 0.000001;
            case MassFlowUnits.CentigramsPerDay:
                return (value / 86400) * 0.01;
            case MassFlowUnits.DecigramsPerDay:
                return (value / 86400) * 0.1;
            case MassFlowUnits.DecagramsPerDay:
                return (value / 86400) * 10;
            case MassFlowUnits.HectogramsPerDay:
                return (value / 86400) * 100;
            case MassFlowUnits.KilogramsPerDay:
                return (value / 86400) * 1000;
            case MassFlowUnits.MegagramsPerDay:
                return (value / 86400) * 1000000;
            case MassFlowUnits.MegapoundsPerDay:
                return (value / 190.47936) * 1000000;
            case MassFlowUnits.MegapoundsPerHour:
                return (value / 7.93664) * 1000000;
            case MassFlowUnits.MegapoundsPerMinute:
                return (value / 0.132277) * 1000000;
            case MassFlowUnits.MegapoundsPerSecond:
                return (value * 453.59237) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the MassFlow to string.
     * Note! the default format for MassFlow is GramsPerSecond.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MassFlow.
     * @returns The string format of the MassFlow.
     */
    toString(toUnit = MassFlowUnits.GramsPerSecond) {
        switch (toUnit) {
            case MassFlowUnits.GramsPerSecond:
                return this.GramsPerSecond + ` g/s`;
            case MassFlowUnits.GramsPerDay:
                return this.GramsPerDay + ` g/d`;
            case MassFlowUnits.GramsPerHour:
                return this.GramsPerHour + ` g/h`;
            case MassFlowUnits.KilogramsPerHour:
                return this.KilogramsPerHour + ` kg/h`;
            case MassFlowUnits.KilogramsPerMinute:
                return this.KilogramsPerMinute + ` kg/min`;
            case MassFlowUnits.TonnesPerHour:
                return this.TonnesPerHour + ` t/h`;
            case MassFlowUnits.PoundsPerDay:
                return this.PoundsPerDay + ` lb/d`;
            case MassFlowUnits.PoundsPerHour:
                return this.PoundsPerHour + ` lb/h`;
            case MassFlowUnits.PoundsPerMinute:
                return this.PoundsPerMinute + ` lb/min`;
            case MassFlowUnits.PoundsPerSecond:
                return this.PoundsPerSecond + ` lb/s`;
            case MassFlowUnits.TonnesPerDay:
                return this.TonnesPerDay + ` t/d`;
            case MassFlowUnits.ShortTonsPerHour:
                return this.ShortTonsPerHour + ` short tn/h`;
            case MassFlowUnits.NanogramsPerSecond:
                return this.NanogramsPerSecond + ` g/s`;
            case MassFlowUnits.MicrogramsPerSecond:
                return this.MicrogramsPerSecond + ` g/s`;
            case MassFlowUnits.CentigramsPerSecond:
                return this.CentigramsPerSecond + ` g/s`;
            case MassFlowUnits.DecigramsPerSecond:
                return this.DecigramsPerSecond + ` g/s`;
            case MassFlowUnits.DecagramsPerSecond:
                return this.DecagramsPerSecond + ` g/s`;
            case MassFlowUnits.HectogramsPerSecond:
                return this.HectogramsPerSecond + ` g/s`;
            case MassFlowUnits.KilogramsPerSecond:
                return this.KilogramsPerSecond + ` g/s`;
            case MassFlowUnits.NanogramsPerDay:
                return this.NanogramsPerDay + ` g/d`;
            case MassFlowUnits.MicrogramsPerDay:
                return this.MicrogramsPerDay + ` g/d`;
            case MassFlowUnits.CentigramsPerDay:
                return this.CentigramsPerDay + ` g/d`;
            case MassFlowUnits.DecigramsPerDay:
                return this.DecigramsPerDay + ` g/d`;
            case MassFlowUnits.DecagramsPerDay:
                return this.DecagramsPerDay + ` g/d`;
            case MassFlowUnits.HectogramsPerDay:
                return this.HectogramsPerDay + ` g/d`;
            case MassFlowUnits.KilogramsPerDay:
                return this.KilogramsPerDay + ` g/d`;
            case MassFlowUnits.MegagramsPerDay:
                return this.MegagramsPerDay + ` g/d`;
            case MassFlowUnits.MegapoundsPerDay:
                return this.MegapoundsPerDay + ` lb/d`;
            case MassFlowUnits.MegapoundsPerHour:
                return this.MegapoundsPerHour + ` lb/h`;
            case MassFlowUnits.MegapoundsPerMinute:
                return this.MegapoundsPerMinute + ` lb/min`;
            case MassFlowUnits.MegapoundsPerSecond:
                return this.MegapoundsPerSecond + ` lb/s`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.MassFlow = MassFlow;
//# sourceMappingURL=massflow.g.js.map