import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a RotationalStiffness */
export interface RotationalStiffnessDto {
    /** The value of the RotationalStiffness */
    value: number;
    /**  The specific unit that the RotationalStiffness value is representing */
    unit: RotationalStiffnessUnits;
}

/** RotationalStiffnessUnits enumeration */
export enum RotationalStiffnessUnits {
    /** */
    NewtonMetersPerRadian = "NewtonMeterPerRadian",
    /** */
    PoundForceFeetPerDegrees = "PoundForceFootPerDegrees",
    /** */
    KilopoundForceFeetPerDegrees = "KilopoundForceFootPerDegrees",
    /** */
    NewtonMillimetersPerDegree = "NewtonMillimeterPerDegree",
    /** */
    NewtonMetersPerDegree = "NewtonMeterPerDegree",
    /** */
    NewtonMillimetersPerRadian = "NewtonMillimeterPerRadian",
    /** */
    PoundForceFeetPerRadian = "PoundForceFeetPerRadian",
    /** */
    KilonewtonMetersPerRadian = "KilonewtonMeterPerRadian",
    /** */
    MeganewtonMetersPerRadian = "MeganewtonMeterPerRadian",
    /** */
    NanonewtonMillimetersPerDegree = "NanonewtonMillimeterPerDegree",
    /** */
    MicronewtonMillimetersPerDegree = "MicronewtonMillimeterPerDegree",
    /** */
    MillinewtonMillimetersPerDegree = "MillinewtonMillimeterPerDegree",
    /** */
    CentinewtonMillimetersPerDegree = "CentinewtonMillimeterPerDegree",
    /** */
    DecinewtonMillimetersPerDegree = "DecinewtonMillimeterPerDegree",
    /** */
    DecanewtonMillimetersPerDegree = "DecanewtonMillimeterPerDegree",
    /** */
    KilonewtonMillimetersPerDegree = "KilonewtonMillimeterPerDegree",
    /** */
    MeganewtonMillimetersPerDegree = "MeganewtonMillimeterPerDegree",
    /** */
    NanonewtonMetersPerDegree = "NanonewtonMeterPerDegree",
    /** */
    MicronewtonMetersPerDegree = "MicronewtonMeterPerDegree",
    /** */
    MillinewtonMetersPerDegree = "MillinewtonMeterPerDegree",
    /** */
    CentinewtonMetersPerDegree = "CentinewtonMeterPerDegree",
    /** */
    DecinewtonMetersPerDegree = "DecinewtonMeterPerDegree",
    /** */
    DecanewtonMetersPerDegree = "DecanewtonMeterPerDegree",
    /** */
    KilonewtonMetersPerDegree = "KilonewtonMeterPerDegree",
    /** */
    MeganewtonMetersPerDegree = "MeganewtonMeterPerDegree",
    /** */
    NanonewtonMillimetersPerRadian = "NanonewtonMillimeterPerRadian",
    /** */
    MicronewtonMillimetersPerRadian = "MicronewtonMillimeterPerRadian",
    /** */
    MillinewtonMillimetersPerRadian = "MillinewtonMillimeterPerRadian",
    /** */
    CentinewtonMillimetersPerRadian = "CentinewtonMillimeterPerRadian",
    /** */
    DecinewtonMillimetersPerRadian = "DecinewtonMillimeterPerRadian",
    /** */
    DecanewtonMillimetersPerRadian = "DecanewtonMillimeterPerRadian",
    /** */
    KilonewtonMillimetersPerRadian = "KilonewtonMillimeterPerRadian",
    /** */
    MeganewtonMillimetersPerRadian = "MeganewtonMillimeterPerRadian"
}

/** https://en.wikipedia.org/wiki/Stiffness#Rotational_stiffness */
export class RotationalStiffness extends BaseUnit {
    protected value: number;
    private newtonmetersperradianLazy: number | null = null;
    private poundforcefeetperdegreesLazy: number | null = null;
    private kilopoundforcefeetperdegreesLazy: number | null = null;
    private newtonmillimetersperdegreeLazy: number | null = null;
    private newtonmetersperdegreeLazy: number | null = null;
    private newtonmillimetersperradianLazy: number | null = null;
    private poundforcefeetperradianLazy: number | null = null;
    private kilonewtonmetersperradianLazy: number | null = null;
    private meganewtonmetersperradianLazy: number | null = null;
    private nanonewtonmillimetersperdegreeLazy: number | null = null;
    private micronewtonmillimetersperdegreeLazy: number | null = null;
    private millinewtonmillimetersperdegreeLazy: number | null = null;
    private centinewtonmillimetersperdegreeLazy: number | null = null;
    private decinewtonmillimetersperdegreeLazy: number | null = null;
    private decanewtonmillimetersperdegreeLazy: number | null = null;
    private kilonewtonmillimetersperdegreeLazy: number | null = null;
    private meganewtonmillimetersperdegreeLazy: number | null = null;
    private nanonewtonmetersperdegreeLazy: number | null = null;
    private micronewtonmetersperdegreeLazy: number | null = null;
    private millinewtonmetersperdegreeLazy: number | null = null;
    private centinewtonmetersperdegreeLazy: number | null = null;
    private decinewtonmetersperdegreeLazy: number | null = null;
    private decanewtonmetersperdegreeLazy: number | null = null;
    private kilonewtonmetersperdegreeLazy: number | null = null;
    private meganewtonmetersperdegreeLazy: number | null = null;
    private nanonewtonmillimetersperradianLazy: number | null = null;
    private micronewtonmillimetersperradianLazy: number | null = null;
    private millinewtonmillimetersperradianLazy: number | null = null;
    private centinewtonmillimetersperradianLazy: number | null = null;
    private decinewtonmillimetersperradianLazy: number | null = null;
    private decanewtonmillimetersperradianLazy: number | null = null;
    private kilonewtonmillimetersperradianLazy: number | null = null;
    private meganewtonmillimetersperradianLazy: number | null = null;

    /**
     * Create a new RotationalStiffness.
     * @param value The value.
     * @param fromUnit The ‘RotationalStiffness’ unit to create from.
     * The default unit is NewtonMetersPerRadian
     */
    public constructor(value: number, fromUnit: RotationalStiffnessUnits = RotationalStiffnessUnits.NewtonMetersPerRadian) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of RotationalStiffness is NewtonMetersPerRadian.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): RotationalStiffnessUnits.NewtonMetersPerRadian {
        return RotationalStiffnessUnits.NewtonMetersPerRadian
    }

    /** */
    public get NewtonMetersPerRadian(): number {
        if(this.newtonmetersperradianLazy !== null){
            return this.newtonmetersperradianLazy;
        }
        return this.newtonmetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.NewtonMetersPerRadian);
    }

    /** */
    public get PoundForceFeetPerDegrees(): number {
        if(this.poundforcefeetperdegreesLazy !== null){
            return this.poundforcefeetperdegreesLazy;
        }
        return this.poundforcefeetperdegreesLazy = this.convertFromBase(RotationalStiffnessUnits.PoundForceFeetPerDegrees);
    }

    /** */
    public get KilopoundForceFeetPerDegrees(): number {
        if(this.kilopoundforcefeetperdegreesLazy !== null){
            return this.kilopoundforcefeetperdegreesLazy;
        }
        return this.kilopoundforcefeetperdegreesLazy = this.convertFromBase(RotationalStiffnessUnits.KilopoundForceFeetPerDegrees);
    }

    /** */
    public get NewtonMillimetersPerDegree(): number {
        if(this.newtonmillimetersperdegreeLazy !== null){
            return this.newtonmillimetersperdegreeLazy;
        }
        return this.newtonmillimetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.NewtonMillimetersPerDegree);
    }

    /** */
    public get NewtonMetersPerDegree(): number {
        if(this.newtonmetersperdegreeLazy !== null){
            return this.newtonmetersperdegreeLazy;
        }
        return this.newtonmetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.NewtonMetersPerDegree);
    }

    /** */
    public get NewtonMillimetersPerRadian(): number {
        if(this.newtonmillimetersperradianLazy !== null){
            return this.newtonmillimetersperradianLazy;
        }
        return this.newtonmillimetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.NewtonMillimetersPerRadian);
    }

    /** */
    public get PoundForceFeetPerRadian(): number {
        if(this.poundforcefeetperradianLazy !== null){
            return this.poundforcefeetperradianLazy;
        }
        return this.poundforcefeetperradianLazy = this.convertFromBase(RotationalStiffnessUnits.PoundForceFeetPerRadian);
    }

    /** */
    public get KilonewtonMetersPerRadian(): number {
        if(this.kilonewtonmetersperradianLazy !== null){
            return this.kilonewtonmetersperradianLazy;
        }
        return this.kilonewtonmetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.KilonewtonMetersPerRadian);
    }

    /** */
    public get MeganewtonMetersPerRadian(): number {
        if(this.meganewtonmetersperradianLazy !== null){
            return this.meganewtonmetersperradianLazy;
        }
        return this.meganewtonmetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.MeganewtonMetersPerRadian);
    }

    /** */
    public get NanonewtonMillimetersPerDegree(): number {
        if(this.nanonewtonmillimetersperdegreeLazy !== null){
            return this.nanonewtonmillimetersperdegreeLazy;
        }
        return this.nanonewtonmillimetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.NanonewtonMillimetersPerDegree);
    }

    /** */
    public get MicronewtonMillimetersPerDegree(): number {
        if(this.micronewtonmillimetersperdegreeLazy !== null){
            return this.micronewtonmillimetersperdegreeLazy;
        }
        return this.micronewtonmillimetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.MicronewtonMillimetersPerDegree);
    }

    /** */
    public get MillinewtonMillimetersPerDegree(): number {
        if(this.millinewtonmillimetersperdegreeLazy !== null){
            return this.millinewtonmillimetersperdegreeLazy;
        }
        return this.millinewtonmillimetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.MillinewtonMillimetersPerDegree);
    }

    /** */
    public get CentinewtonMillimetersPerDegree(): number {
        if(this.centinewtonmillimetersperdegreeLazy !== null){
            return this.centinewtonmillimetersperdegreeLazy;
        }
        return this.centinewtonmillimetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.CentinewtonMillimetersPerDegree);
    }

    /** */
    public get DecinewtonMillimetersPerDegree(): number {
        if(this.decinewtonmillimetersperdegreeLazy !== null){
            return this.decinewtonmillimetersperdegreeLazy;
        }
        return this.decinewtonmillimetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.DecinewtonMillimetersPerDegree);
    }

    /** */
    public get DecanewtonMillimetersPerDegree(): number {
        if(this.decanewtonmillimetersperdegreeLazy !== null){
            return this.decanewtonmillimetersperdegreeLazy;
        }
        return this.decanewtonmillimetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.DecanewtonMillimetersPerDegree);
    }

    /** */
    public get KilonewtonMillimetersPerDegree(): number {
        if(this.kilonewtonmillimetersperdegreeLazy !== null){
            return this.kilonewtonmillimetersperdegreeLazy;
        }
        return this.kilonewtonmillimetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.KilonewtonMillimetersPerDegree);
    }

    /** */
    public get MeganewtonMillimetersPerDegree(): number {
        if(this.meganewtonmillimetersperdegreeLazy !== null){
            return this.meganewtonmillimetersperdegreeLazy;
        }
        return this.meganewtonmillimetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.MeganewtonMillimetersPerDegree);
    }

    /** */
    public get NanonewtonMetersPerDegree(): number {
        if(this.nanonewtonmetersperdegreeLazy !== null){
            return this.nanonewtonmetersperdegreeLazy;
        }
        return this.nanonewtonmetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.NanonewtonMetersPerDegree);
    }

    /** */
    public get MicronewtonMetersPerDegree(): number {
        if(this.micronewtonmetersperdegreeLazy !== null){
            return this.micronewtonmetersperdegreeLazy;
        }
        return this.micronewtonmetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.MicronewtonMetersPerDegree);
    }

    /** */
    public get MillinewtonMetersPerDegree(): number {
        if(this.millinewtonmetersperdegreeLazy !== null){
            return this.millinewtonmetersperdegreeLazy;
        }
        return this.millinewtonmetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.MillinewtonMetersPerDegree);
    }

    /** */
    public get CentinewtonMetersPerDegree(): number {
        if(this.centinewtonmetersperdegreeLazy !== null){
            return this.centinewtonmetersperdegreeLazy;
        }
        return this.centinewtonmetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.CentinewtonMetersPerDegree);
    }

    /** */
    public get DecinewtonMetersPerDegree(): number {
        if(this.decinewtonmetersperdegreeLazy !== null){
            return this.decinewtonmetersperdegreeLazy;
        }
        return this.decinewtonmetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.DecinewtonMetersPerDegree);
    }

    /** */
    public get DecanewtonMetersPerDegree(): number {
        if(this.decanewtonmetersperdegreeLazy !== null){
            return this.decanewtonmetersperdegreeLazy;
        }
        return this.decanewtonmetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.DecanewtonMetersPerDegree);
    }

    /** */
    public get KilonewtonMetersPerDegree(): number {
        if(this.kilonewtonmetersperdegreeLazy !== null){
            return this.kilonewtonmetersperdegreeLazy;
        }
        return this.kilonewtonmetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.KilonewtonMetersPerDegree);
    }

    /** */
    public get MeganewtonMetersPerDegree(): number {
        if(this.meganewtonmetersperdegreeLazy !== null){
            return this.meganewtonmetersperdegreeLazy;
        }
        return this.meganewtonmetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.MeganewtonMetersPerDegree);
    }

    /** */
    public get NanonewtonMillimetersPerRadian(): number {
        if(this.nanonewtonmillimetersperradianLazy !== null){
            return this.nanonewtonmillimetersperradianLazy;
        }
        return this.nanonewtonmillimetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.NanonewtonMillimetersPerRadian);
    }

    /** */
    public get MicronewtonMillimetersPerRadian(): number {
        if(this.micronewtonmillimetersperradianLazy !== null){
            return this.micronewtonmillimetersperradianLazy;
        }
        return this.micronewtonmillimetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.MicronewtonMillimetersPerRadian);
    }

    /** */
    public get MillinewtonMillimetersPerRadian(): number {
        if(this.millinewtonmillimetersperradianLazy !== null){
            return this.millinewtonmillimetersperradianLazy;
        }
        return this.millinewtonmillimetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.MillinewtonMillimetersPerRadian);
    }

    /** */
    public get CentinewtonMillimetersPerRadian(): number {
        if(this.centinewtonmillimetersperradianLazy !== null){
            return this.centinewtonmillimetersperradianLazy;
        }
        return this.centinewtonmillimetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.CentinewtonMillimetersPerRadian);
    }

    /** */
    public get DecinewtonMillimetersPerRadian(): number {
        if(this.decinewtonmillimetersperradianLazy !== null){
            return this.decinewtonmillimetersperradianLazy;
        }
        return this.decinewtonmillimetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.DecinewtonMillimetersPerRadian);
    }

    /** */
    public get DecanewtonMillimetersPerRadian(): number {
        if(this.decanewtonmillimetersperradianLazy !== null){
            return this.decanewtonmillimetersperradianLazy;
        }
        return this.decanewtonmillimetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.DecanewtonMillimetersPerRadian);
    }

    /** */
    public get KilonewtonMillimetersPerRadian(): number {
        if(this.kilonewtonmillimetersperradianLazy !== null){
            return this.kilonewtonmillimetersperradianLazy;
        }
        return this.kilonewtonmillimetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.KilonewtonMillimetersPerRadian);
    }

    /** */
    public get MeganewtonMillimetersPerRadian(): number {
        if(this.meganewtonmillimetersperradianLazy !== null){
            return this.meganewtonmillimetersperradianLazy;
        }
        return this.meganewtonmillimetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.MeganewtonMillimetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a NewtonMetersPerRadian
     *
     * @param value The unit as NewtonMetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromNewtonMetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.NewtonMetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a PoundForceFeetPerDegrees
     *
     * @param value The unit as PoundForceFeetPerDegrees to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromPoundForceFeetPerDegrees(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.PoundForceFeetPerDegrees);
    }

    /**
     * Create a new RotationalStiffness instance from a KilopoundForceFeetPerDegrees
     *
     * @param value The unit as KilopoundForceFeetPerDegrees to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromKilopoundForceFeetPerDegrees(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.KilopoundForceFeetPerDegrees);
    }

    /**
     * Create a new RotationalStiffness instance from a NewtonMillimetersPerDegree
     *
     * @param value The unit as NewtonMillimetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromNewtonMillimetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.NewtonMillimetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a NewtonMetersPerDegree
     *
     * @param value The unit as NewtonMetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromNewtonMetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.NewtonMetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a NewtonMillimetersPerRadian
     *
     * @param value The unit as NewtonMillimetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromNewtonMillimetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.NewtonMillimetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a PoundForceFeetPerRadian
     *
     * @param value The unit as PoundForceFeetPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromPoundForceFeetPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.PoundForceFeetPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a KilonewtonMetersPerRadian
     *
     * @param value The unit as KilonewtonMetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromKilonewtonMetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.KilonewtonMetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a MeganewtonMetersPerRadian
     *
     * @param value The unit as MeganewtonMetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromMeganewtonMetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MeganewtonMetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a NanonewtonMillimetersPerDegree
     *
     * @param value The unit as NanonewtonMillimetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromNanonewtonMillimetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.NanonewtonMillimetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a MicronewtonMillimetersPerDegree
     *
     * @param value The unit as MicronewtonMillimetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromMicronewtonMillimetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MicronewtonMillimetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a MillinewtonMillimetersPerDegree
     *
     * @param value The unit as MillinewtonMillimetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromMillinewtonMillimetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MillinewtonMillimetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a CentinewtonMillimetersPerDegree
     *
     * @param value The unit as CentinewtonMillimetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromCentinewtonMillimetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.CentinewtonMillimetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a DecinewtonMillimetersPerDegree
     *
     * @param value The unit as DecinewtonMillimetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromDecinewtonMillimetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.DecinewtonMillimetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a DecanewtonMillimetersPerDegree
     *
     * @param value The unit as DecanewtonMillimetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromDecanewtonMillimetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.DecanewtonMillimetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a KilonewtonMillimetersPerDegree
     *
     * @param value The unit as KilonewtonMillimetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromKilonewtonMillimetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.KilonewtonMillimetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a MeganewtonMillimetersPerDegree
     *
     * @param value The unit as MeganewtonMillimetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromMeganewtonMillimetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MeganewtonMillimetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a NanonewtonMetersPerDegree
     *
     * @param value The unit as NanonewtonMetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromNanonewtonMetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.NanonewtonMetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a MicronewtonMetersPerDegree
     *
     * @param value The unit as MicronewtonMetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromMicronewtonMetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MicronewtonMetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a MillinewtonMetersPerDegree
     *
     * @param value The unit as MillinewtonMetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromMillinewtonMetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MillinewtonMetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a CentinewtonMetersPerDegree
     *
     * @param value The unit as CentinewtonMetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromCentinewtonMetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.CentinewtonMetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a DecinewtonMetersPerDegree
     *
     * @param value The unit as DecinewtonMetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromDecinewtonMetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.DecinewtonMetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a DecanewtonMetersPerDegree
     *
     * @param value The unit as DecanewtonMetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromDecanewtonMetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.DecanewtonMetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a KilonewtonMetersPerDegree
     *
     * @param value The unit as KilonewtonMetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromKilonewtonMetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.KilonewtonMetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a MeganewtonMetersPerDegree
     *
     * @param value The unit as MeganewtonMetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromMeganewtonMetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MeganewtonMetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a NanonewtonMillimetersPerRadian
     *
     * @param value The unit as NanonewtonMillimetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromNanonewtonMillimetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.NanonewtonMillimetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a MicronewtonMillimetersPerRadian
     *
     * @param value The unit as MicronewtonMillimetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromMicronewtonMillimetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MicronewtonMillimetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a MillinewtonMillimetersPerRadian
     *
     * @param value The unit as MillinewtonMillimetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromMillinewtonMillimetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MillinewtonMillimetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a CentinewtonMillimetersPerRadian
     *
     * @param value The unit as CentinewtonMillimetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromCentinewtonMillimetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.CentinewtonMillimetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a DecinewtonMillimetersPerRadian
     *
     * @param value The unit as DecinewtonMillimetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromDecinewtonMillimetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.DecinewtonMillimetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a DecanewtonMillimetersPerRadian
     *
     * @param value The unit as DecanewtonMillimetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromDecanewtonMillimetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.DecanewtonMillimetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a KilonewtonMillimetersPerRadian
     *
     * @param value The unit as KilonewtonMillimetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromKilonewtonMillimetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.KilonewtonMillimetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a MeganewtonMillimetersPerRadian
     *
     * @param value The unit as MeganewtonMillimetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromMeganewtonMillimetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MeganewtonMillimetersPerRadian);
    }

    /**
     * Gets the base unit enumeration associated with RotationalStiffness
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof RotationalStiffnessUnits {
        return RotationalStiffnessUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): RotationalStiffnessUnits.NewtonMetersPerRadian {
        return RotationalStiffnessUnits.NewtonMetersPerRadian;
    }

    /**
     * Create API DTO represent a RotationalStiffness unit.
     * @param holdInUnit The specific RotationalStiffness unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: RotationalStiffnessUnits = RotationalStiffnessUnits.NewtonMetersPerRadian): RotationalStiffnessDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a RotationalStiffness unit from an API DTO representation.
     * @param dtoRotationalStiffness The RotationalStiffness API DTO representation
     */
    public static FromDto(dtoRotationalStiffness: RotationalStiffnessDto): RotationalStiffness {
        return new RotationalStiffness(dtoRotationalStiffness.value, dtoRotationalStiffness.unit);
    }

    /**
     * Convert RotationalStiffness to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: RotationalStiffnessUnits): number {
        switch (toUnit) {
            case RotationalStiffnessUnits.NewtonMetersPerRadian: return this.NewtonMetersPerRadian;
            case RotationalStiffnessUnits.PoundForceFeetPerDegrees: return this.PoundForceFeetPerDegrees;
            case RotationalStiffnessUnits.KilopoundForceFeetPerDegrees: return this.KilopoundForceFeetPerDegrees;
            case RotationalStiffnessUnits.NewtonMillimetersPerDegree: return this.NewtonMillimetersPerDegree;
            case RotationalStiffnessUnits.NewtonMetersPerDegree: return this.NewtonMetersPerDegree;
            case RotationalStiffnessUnits.NewtonMillimetersPerRadian: return this.NewtonMillimetersPerRadian;
            case RotationalStiffnessUnits.PoundForceFeetPerRadian: return this.PoundForceFeetPerRadian;
            case RotationalStiffnessUnits.KilonewtonMetersPerRadian: return this.KilonewtonMetersPerRadian;
            case RotationalStiffnessUnits.MeganewtonMetersPerRadian: return this.MeganewtonMetersPerRadian;
            case RotationalStiffnessUnits.NanonewtonMillimetersPerDegree: return this.NanonewtonMillimetersPerDegree;
            case RotationalStiffnessUnits.MicronewtonMillimetersPerDegree: return this.MicronewtonMillimetersPerDegree;
            case RotationalStiffnessUnits.MillinewtonMillimetersPerDegree: return this.MillinewtonMillimetersPerDegree;
            case RotationalStiffnessUnits.CentinewtonMillimetersPerDegree: return this.CentinewtonMillimetersPerDegree;
            case RotationalStiffnessUnits.DecinewtonMillimetersPerDegree: return this.DecinewtonMillimetersPerDegree;
            case RotationalStiffnessUnits.DecanewtonMillimetersPerDegree: return this.DecanewtonMillimetersPerDegree;
            case RotationalStiffnessUnits.KilonewtonMillimetersPerDegree: return this.KilonewtonMillimetersPerDegree;
            case RotationalStiffnessUnits.MeganewtonMillimetersPerDegree: return this.MeganewtonMillimetersPerDegree;
            case RotationalStiffnessUnits.NanonewtonMetersPerDegree: return this.NanonewtonMetersPerDegree;
            case RotationalStiffnessUnits.MicronewtonMetersPerDegree: return this.MicronewtonMetersPerDegree;
            case RotationalStiffnessUnits.MillinewtonMetersPerDegree: return this.MillinewtonMetersPerDegree;
            case RotationalStiffnessUnits.CentinewtonMetersPerDegree: return this.CentinewtonMetersPerDegree;
            case RotationalStiffnessUnits.DecinewtonMetersPerDegree: return this.DecinewtonMetersPerDegree;
            case RotationalStiffnessUnits.DecanewtonMetersPerDegree: return this.DecanewtonMetersPerDegree;
            case RotationalStiffnessUnits.KilonewtonMetersPerDegree: return this.KilonewtonMetersPerDegree;
            case RotationalStiffnessUnits.MeganewtonMetersPerDegree: return this.MeganewtonMetersPerDegree;
            case RotationalStiffnessUnits.NanonewtonMillimetersPerRadian: return this.NanonewtonMillimetersPerRadian;
            case RotationalStiffnessUnits.MicronewtonMillimetersPerRadian: return this.MicronewtonMillimetersPerRadian;
            case RotationalStiffnessUnits.MillinewtonMillimetersPerRadian: return this.MillinewtonMillimetersPerRadian;
            case RotationalStiffnessUnits.CentinewtonMillimetersPerRadian: return this.CentinewtonMillimetersPerRadian;
            case RotationalStiffnessUnits.DecinewtonMillimetersPerRadian: return this.DecinewtonMillimetersPerRadian;
            case RotationalStiffnessUnits.DecanewtonMillimetersPerRadian: return this.DecanewtonMillimetersPerRadian;
            case RotationalStiffnessUnits.KilonewtonMillimetersPerRadian: return this.KilonewtonMillimetersPerRadian;
            case RotationalStiffnessUnits.MeganewtonMillimetersPerRadian: return this.MeganewtonMillimetersPerRadian;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: RotationalStiffnessUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case RotationalStiffnessUnits.NewtonMetersPerRadian: return this.value;
                case RotationalStiffnessUnits.PoundForceFeetPerDegrees: {
                    const v4 = super.internalMultiply(4.4482216152605, 0.3048);
                    const v7 = super.internalDivide(180, Math.PI);
                    const v8 = super.internalMultiply(v4, v7);
                    return super.internalDivide(this.value, v8);
                }
                case RotationalStiffnessUnits.KilopoundForceFeetPerDegrees: {
                    const v4 = super.internalMultiply(4.4482216152605e3, 0.3048);
                    const v7 = super.internalDivide(180, Math.PI);
                    const v8 = super.internalMultiply(v4, v7);
                    return super.internalDivide(this.value, v8);
                }
                case RotationalStiffnessUnits.NewtonMillimetersPerDegree: {
                    const v3 = super.internalDivide(this.value, 180);
                    const v5 = super.internalMultiply(v3, Math.PI);
                    return super.internalMultiply(v5, 1000);
                }
                case RotationalStiffnessUnits.NewtonMetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    return super.internalDivide(this.value, v4);
                }
                case RotationalStiffnessUnits.NewtonMillimetersPerRadian: return super.internalMultiply(this.value, 1000);
                case RotationalStiffnessUnits.PoundForceFeetPerRadian: {
                    const v4 = super.internalMultiply(4.4482216152605, 0.3048);
                    return super.internalDivide(this.value, v4);
                }
                case RotationalStiffnessUnits.KilonewtonMetersPerRadian: return super.internalDivide(this.value, 1000);
                case RotationalStiffnessUnits.MeganewtonMetersPerRadian: return super.internalDivide(this.value, 1000000);
                case RotationalStiffnessUnits.NanonewtonMillimetersPerDegree: {
                    const v3 = super.internalDivide(this.value, 180);
                    const v5 = super.internalMultiply(v3, Math.PI);
                    const v7 = super.internalMultiply(v5, 1000);
                    return super.internalDivide(v7, 1e-9);
                }
                case RotationalStiffnessUnits.MicronewtonMillimetersPerDegree: {
                    const v3 = super.internalDivide(this.value, 180);
                    const v5 = super.internalMultiply(v3, Math.PI);
                    const v7 = super.internalMultiply(v5, 1000);
                    return super.internalDivide(v7, 0.000001);
                }
                case RotationalStiffnessUnits.MillinewtonMillimetersPerDegree: {
                    const v3 = super.internalDivide(this.value, 180);
                    const v5 = super.internalMultiply(v3, Math.PI);
                    const v7 = super.internalMultiply(v5, 1000);
                    return super.internalDivide(v7, 0.001);
                }
                case RotationalStiffnessUnits.CentinewtonMillimetersPerDegree: {
                    const v3 = super.internalDivide(this.value, 180);
                    const v5 = super.internalMultiply(v3, Math.PI);
                    const v7 = super.internalMultiply(v5, 1000);
                    return super.internalDivide(v7, 0.01);
                }
                case RotationalStiffnessUnits.DecinewtonMillimetersPerDegree: {
                    const v3 = super.internalDivide(this.value, 180);
                    const v5 = super.internalMultiply(v3, Math.PI);
                    const v7 = super.internalMultiply(v5, 1000);
                    return super.internalDivide(v7, 0.1);
                }
                case RotationalStiffnessUnits.DecanewtonMillimetersPerDegree: {
                    const v3 = super.internalDivide(this.value, 180);
                    const v5 = super.internalMultiply(v3, Math.PI);
                    const v7 = super.internalMultiply(v5, 1000);
                    return super.internalDivide(v7, 10);
                }
                case RotationalStiffnessUnits.KilonewtonMillimetersPerDegree: {
                    const v3 = super.internalDivide(this.value, 180);
                    const v5 = super.internalMultiply(v3, Math.PI);
                    const v7 = super.internalMultiply(v5, 1000);
                    return super.internalDivide(v7, 1000);
                }
                case RotationalStiffnessUnits.MeganewtonMillimetersPerDegree: {
                    const v3 = super.internalDivide(this.value, 180);
                    const v5 = super.internalMultiply(v3, Math.PI);
                    const v7 = super.internalMultiply(v5, 1000);
                    return super.internalDivide(v7, 1000000);
                }
                case RotationalStiffnessUnits.NanonewtonMetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalDivide(this.value, v4);
                    return super.internalDivide(v5, 1e-9);
                }
                case RotationalStiffnessUnits.MicronewtonMetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalDivide(this.value, v4);
                    return super.internalDivide(v5, 0.000001);
                }
                case RotationalStiffnessUnits.MillinewtonMetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalDivide(this.value, v4);
                    return super.internalDivide(v5, 0.001);
                }
                case RotationalStiffnessUnits.CentinewtonMetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalDivide(this.value, v4);
                    return super.internalDivide(v5, 0.01);
                }
                case RotationalStiffnessUnits.DecinewtonMetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalDivide(this.value, v4);
                    return super.internalDivide(v5, 0.1);
                }
                case RotationalStiffnessUnits.DecanewtonMetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalDivide(this.value, v4);
                    return super.internalDivide(v5, 10);
                }
                case RotationalStiffnessUnits.KilonewtonMetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalDivide(this.value, v4);
                    return super.internalDivide(v5, 1000);
                }
                case RotationalStiffnessUnits.MeganewtonMetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalDivide(this.value, v4);
                    return super.internalDivide(v5, 1000000);
                }
                case RotationalStiffnessUnits.NanonewtonMillimetersPerRadian: {
                    const v3 = super.internalMultiply(this.value, 1000);
                    return super.internalDivide(v3, 1e-9);
                }
                case RotationalStiffnessUnits.MicronewtonMillimetersPerRadian: {
                    const v3 = super.internalMultiply(this.value, 1000);
                    return super.internalDivide(v3, 0.000001);
                }
                case RotationalStiffnessUnits.MillinewtonMillimetersPerRadian: {
                    const v3 = super.internalMultiply(this.value, 1000);
                    return super.internalDivide(v3, 0.001);
                }
                case RotationalStiffnessUnits.CentinewtonMillimetersPerRadian: {
                    const v3 = super.internalMultiply(this.value, 1000);
                    return super.internalDivide(v3, 0.01);
                }
                case RotationalStiffnessUnits.DecinewtonMillimetersPerRadian: {
                    const v3 = super.internalMultiply(this.value, 1000);
                    return super.internalDivide(v3, 0.1);
                }
                case RotationalStiffnessUnits.DecanewtonMillimetersPerRadian: {
                    const v3 = super.internalMultiply(this.value, 1000);
                    return super.internalDivide(v3, 10);
                }
                case RotationalStiffnessUnits.KilonewtonMillimetersPerRadian: {
                    const v3 = super.internalMultiply(this.value, 1000);
                    return super.internalDivide(v3, 1000);
                }
                case RotationalStiffnessUnits.MeganewtonMillimetersPerRadian: {
                    const v3 = super.internalMultiply(this.value, 1000);
                    return super.internalDivide(v3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case RotationalStiffnessUnits.NewtonMetersPerRadian: return this.value;
            case RotationalStiffnessUnits.PoundForceFeetPerDegrees: return this.value / (4.4482216152605 * 0.3048 * 180 / Math.PI);
            case RotationalStiffnessUnits.KilopoundForceFeetPerDegrees: return this.value / (4.4482216152605e3 * 0.3048 * 180 / Math.PI);
            case RotationalStiffnessUnits.NewtonMillimetersPerDegree: return this.value / 180 * Math.PI * 1000;
            case RotationalStiffnessUnits.NewtonMetersPerDegree: return this.value / (180 / Math.PI);
            case RotationalStiffnessUnits.NewtonMillimetersPerRadian: return this.value * 1000;
            case RotationalStiffnessUnits.PoundForceFeetPerRadian: return this.value / (4.4482216152605 * 0.3048);
            case RotationalStiffnessUnits.KilonewtonMetersPerRadian: return (this.value) / 1000;
            case RotationalStiffnessUnits.MeganewtonMetersPerRadian: return (this.value) / 1000000;
            case RotationalStiffnessUnits.NanonewtonMillimetersPerDegree: return (this.value / 180 * Math.PI * 1000) / 1e-9;
            case RotationalStiffnessUnits.MicronewtonMillimetersPerDegree: return (this.value / 180 * Math.PI * 1000) / 0.000001;
            case RotationalStiffnessUnits.MillinewtonMillimetersPerDegree: return (this.value / 180 * Math.PI * 1000) / 0.001;
            case RotationalStiffnessUnits.CentinewtonMillimetersPerDegree: return (this.value / 180 * Math.PI * 1000) / 0.01;
            case RotationalStiffnessUnits.DecinewtonMillimetersPerDegree: return (this.value / 180 * Math.PI * 1000) / 0.1;
            case RotationalStiffnessUnits.DecanewtonMillimetersPerDegree: return (this.value / 180 * Math.PI * 1000) / 10;
            case RotationalStiffnessUnits.KilonewtonMillimetersPerDegree: return (this.value / 180 * Math.PI * 1000) / 1000;
            case RotationalStiffnessUnits.MeganewtonMillimetersPerDegree: return (this.value / 180 * Math.PI * 1000) / 1000000;
            case RotationalStiffnessUnits.NanonewtonMetersPerDegree: return (this.value / (180 / Math.PI)) / 1e-9;
            case RotationalStiffnessUnits.MicronewtonMetersPerDegree: return (this.value / (180 / Math.PI)) / 0.000001;
            case RotationalStiffnessUnits.MillinewtonMetersPerDegree: return (this.value / (180 / Math.PI)) / 0.001;
            case RotationalStiffnessUnits.CentinewtonMetersPerDegree: return (this.value / (180 / Math.PI)) / 0.01;
            case RotationalStiffnessUnits.DecinewtonMetersPerDegree: return (this.value / (180 / Math.PI)) / 0.1;
            case RotationalStiffnessUnits.DecanewtonMetersPerDegree: return (this.value / (180 / Math.PI)) / 10;
            case RotationalStiffnessUnits.KilonewtonMetersPerDegree: return (this.value / (180 / Math.PI)) / 1000;
            case RotationalStiffnessUnits.MeganewtonMetersPerDegree: return (this.value / (180 / Math.PI)) / 1000000;
            case RotationalStiffnessUnits.NanonewtonMillimetersPerRadian: return (this.value * 1000) / 1e-9;
            case RotationalStiffnessUnits.MicronewtonMillimetersPerRadian: return (this.value * 1000) / 0.000001;
            case RotationalStiffnessUnits.MillinewtonMillimetersPerRadian: return (this.value * 1000) / 0.001;
            case RotationalStiffnessUnits.CentinewtonMillimetersPerRadian: return (this.value * 1000) / 0.01;
            case RotationalStiffnessUnits.DecinewtonMillimetersPerRadian: return (this.value * 1000) / 0.1;
            case RotationalStiffnessUnits.DecanewtonMillimetersPerRadian: return (this.value * 1000) / 10;
            case RotationalStiffnessUnits.KilonewtonMillimetersPerRadian: return (this.value * 1000) / 1000;
            case RotationalStiffnessUnits.MeganewtonMillimetersPerRadian: return (this.value * 1000) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: RotationalStiffnessUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case RotationalStiffnessUnits.NewtonMetersPerRadian: return value;
                case RotationalStiffnessUnits.PoundForceFeetPerDegrees: {
                    const v4 = super.internalMultiply(4.4482216152605, 0.3048);
                    const v7 = super.internalDivide(180, Math.PI);
                    const v8 = super.internalMultiply(v4, v7);
                    return super.internalMultiply(value, v8);
                }
                case RotationalStiffnessUnits.KilopoundForceFeetPerDegrees: {
                    const v4 = super.internalMultiply(4.4482216152605e3, 0.3048);
                    const v7 = super.internalDivide(180, Math.PI);
                    const v8 = super.internalMultiply(v4, v7);
                    return super.internalMultiply(value, v8);
                }
                case RotationalStiffnessUnits.NewtonMillimetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 0.001);
                }
                case RotationalStiffnessUnits.NewtonMetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    return super.internalMultiply(value, v4);
                }
                case RotationalStiffnessUnits.NewtonMillimetersPerRadian: return super.internalMultiply(value, 0.001);
                case RotationalStiffnessUnits.PoundForceFeetPerRadian: {
                    const v3 = super.internalMultiply(value, 4.4482216152605);
                    return super.internalMultiply(v3, 0.3048);
                }
                case RotationalStiffnessUnits.KilonewtonMetersPerRadian: return super.internalMultiply(value, 1000);
                case RotationalStiffnessUnits.MeganewtonMetersPerRadian: return super.internalMultiply(value, 1000000);
                case RotationalStiffnessUnits.NanonewtonMillimetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(value, v4);
                    const v7 = super.internalMultiply(v5, 0.001);
                    return super.internalMultiply(v7, 1e-9);
                }
                case RotationalStiffnessUnits.MicronewtonMillimetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(value, v4);
                    const v7 = super.internalMultiply(v5, 0.001);
                    return super.internalMultiply(v7, 0.000001);
                }
                case RotationalStiffnessUnits.MillinewtonMillimetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(value, v4);
                    const v7 = super.internalMultiply(v5, 0.001);
                    return super.internalMultiply(v7, 0.001);
                }
                case RotationalStiffnessUnits.CentinewtonMillimetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(value, v4);
                    const v7 = super.internalMultiply(v5, 0.001);
                    return super.internalMultiply(v7, 0.01);
                }
                case RotationalStiffnessUnits.DecinewtonMillimetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(value, v4);
                    const v7 = super.internalMultiply(v5, 0.001);
                    return super.internalMultiply(v7, 0.1);
                }
                case RotationalStiffnessUnits.DecanewtonMillimetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(value, v4);
                    const v7 = super.internalMultiply(v5, 0.001);
                    return super.internalMultiply(v7, 10);
                }
                case RotationalStiffnessUnits.KilonewtonMillimetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(value, v4);
                    const v7 = super.internalMultiply(v5, 0.001);
                    return super.internalMultiply(v7, 1000);
                }
                case RotationalStiffnessUnits.MeganewtonMillimetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(value, v4);
                    const v7 = super.internalMultiply(v5, 0.001);
                    return super.internalMultiply(v7, 1000000);
                }
                case RotationalStiffnessUnits.NanonewtonMetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 1e-9);
                }
                case RotationalStiffnessUnits.MicronewtonMetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 0.000001);
                }
                case RotationalStiffnessUnits.MillinewtonMetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 0.001);
                }
                case RotationalStiffnessUnits.CentinewtonMetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 0.01);
                }
                case RotationalStiffnessUnits.DecinewtonMetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 0.1);
                }
                case RotationalStiffnessUnits.DecanewtonMetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 10);
                }
                case RotationalStiffnessUnits.KilonewtonMetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 1000);
                }
                case RotationalStiffnessUnits.MeganewtonMetersPerDegree: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 1000000);
                }
                case RotationalStiffnessUnits.NanonewtonMillimetersPerRadian: {
                    const v3 = super.internalMultiply(value, 0.001);
                    return super.internalMultiply(v3, 1e-9);
                }
                case RotationalStiffnessUnits.MicronewtonMillimetersPerRadian: {
                    const v3 = super.internalMultiply(value, 0.001);
                    return super.internalMultiply(v3, 0.000001);
                }
                case RotationalStiffnessUnits.MillinewtonMillimetersPerRadian: {
                    const v3 = super.internalMultiply(value, 0.001);
                    return super.internalMultiply(v3, 0.001);
                }
                case RotationalStiffnessUnits.CentinewtonMillimetersPerRadian: {
                    const v3 = super.internalMultiply(value, 0.001);
                    return super.internalMultiply(v3, 0.01);
                }
                case RotationalStiffnessUnits.DecinewtonMillimetersPerRadian: {
                    const v3 = super.internalMultiply(value, 0.001);
                    return super.internalMultiply(v3, 0.1);
                }
                case RotationalStiffnessUnits.DecanewtonMillimetersPerRadian: {
                    const v3 = super.internalMultiply(value, 0.001);
                    return super.internalMultiply(v3, 10);
                }
                case RotationalStiffnessUnits.KilonewtonMillimetersPerRadian: {
                    const v3 = super.internalMultiply(value, 0.001);
                    return super.internalMultiply(v3, 1000);
                }
                case RotationalStiffnessUnits.MeganewtonMillimetersPerRadian: {
                    const v3 = super.internalMultiply(value, 0.001);
                    return super.internalMultiply(v3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case RotationalStiffnessUnits.NewtonMetersPerRadian: return value;
            case RotationalStiffnessUnits.PoundForceFeetPerDegrees: return value * (4.4482216152605 * 0.3048 * 180 / Math.PI);
            case RotationalStiffnessUnits.KilopoundForceFeetPerDegrees: return value * (4.4482216152605e3 * 0.3048 * 180 / Math.PI);
            case RotationalStiffnessUnits.NewtonMillimetersPerDegree: return value * 180 / Math.PI * 0.001;
            case RotationalStiffnessUnits.NewtonMetersPerDegree: return value * (180 / Math.PI);
            case RotationalStiffnessUnits.NewtonMillimetersPerRadian: return value * 0.001;
            case RotationalStiffnessUnits.PoundForceFeetPerRadian: return value * 4.4482216152605 * 0.3048;
            case RotationalStiffnessUnits.KilonewtonMetersPerRadian: return (value) * 1000;
            case RotationalStiffnessUnits.MeganewtonMetersPerRadian: return (value) * 1000000;
            case RotationalStiffnessUnits.NanonewtonMillimetersPerDegree: return (value * 180 / Math.PI * 0.001) * 1e-9;
            case RotationalStiffnessUnits.MicronewtonMillimetersPerDegree: return (value * 180 / Math.PI * 0.001) * 0.000001;
            case RotationalStiffnessUnits.MillinewtonMillimetersPerDegree: return (value * 180 / Math.PI * 0.001) * 0.001;
            case RotationalStiffnessUnits.CentinewtonMillimetersPerDegree: return (value * 180 / Math.PI * 0.001) * 0.01;
            case RotationalStiffnessUnits.DecinewtonMillimetersPerDegree: return (value * 180 / Math.PI * 0.001) * 0.1;
            case RotationalStiffnessUnits.DecanewtonMillimetersPerDegree: return (value * 180 / Math.PI * 0.001) * 10;
            case RotationalStiffnessUnits.KilonewtonMillimetersPerDegree: return (value * 180 / Math.PI * 0.001) * 1000;
            case RotationalStiffnessUnits.MeganewtonMillimetersPerDegree: return (value * 180 / Math.PI * 0.001) * 1000000;
            case RotationalStiffnessUnits.NanonewtonMetersPerDegree: return (value * (180 / Math.PI)) * 1e-9;
            case RotationalStiffnessUnits.MicronewtonMetersPerDegree: return (value * (180 / Math.PI)) * 0.000001;
            case RotationalStiffnessUnits.MillinewtonMetersPerDegree: return (value * (180 / Math.PI)) * 0.001;
            case RotationalStiffnessUnits.CentinewtonMetersPerDegree: return (value * (180 / Math.PI)) * 0.01;
            case RotationalStiffnessUnits.DecinewtonMetersPerDegree: return (value * (180 / Math.PI)) * 0.1;
            case RotationalStiffnessUnits.DecanewtonMetersPerDegree: return (value * (180 / Math.PI)) * 10;
            case RotationalStiffnessUnits.KilonewtonMetersPerDegree: return (value * (180 / Math.PI)) * 1000;
            case RotationalStiffnessUnits.MeganewtonMetersPerDegree: return (value * (180 / Math.PI)) * 1000000;
            case RotationalStiffnessUnits.NanonewtonMillimetersPerRadian: return (value * 0.001) * 1e-9;
            case RotationalStiffnessUnits.MicronewtonMillimetersPerRadian: return (value * 0.001) * 0.000001;
            case RotationalStiffnessUnits.MillinewtonMillimetersPerRadian: return (value * 0.001) * 0.001;
            case RotationalStiffnessUnits.CentinewtonMillimetersPerRadian: return (value * 0.001) * 0.01;
            case RotationalStiffnessUnits.DecinewtonMillimetersPerRadian: return (value * 0.001) * 0.1;
            case RotationalStiffnessUnits.DecanewtonMillimetersPerRadian: return (value * 0.001) * 10;
            case RotationalStiffnessUnits.KilonewtonMillimetersPerRadian: return (value * 0.001) * 1000;
            case RotationalStiffnessUnits.MeganewtonMillimetersPerRadian: return (value * 0.001) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the RotationalStiffness to string.
     * Note! the default format for RotationalStiffness is NewtonMetersPerRadian.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the RotationalStiffness.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the RotationalStiffness.
     */
    public toString(unit: RotationalStiffnessUnits = RotationalStiffnessUnits.NewtonMetersPerRadian, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case RotationalStiffnessUnits.NewtonMetersPerRadian:
                return super.truncateFractionDigits(this.NewtonMetersPerRadian, options as ToStringOptions) + ` N·m/rad`;
            case RotationalStiffnessUnits.PoundForceFeetPerDegrees:
                return super.truncateFractionDigits(this.PoundForceFeetPerDegrees, options as ToStringOptions) + ` lbf·ft/deg`;
            case RotationalStiffnessUnits.KilopoundForceFeetPerDegrees:
                return super.truncateFractionDigits(this.KilopoundForceFeetPerDegrees, options as ToStringOptions) + ` kipf·ft/°`;
            case RotationalStiffnessUnits.NewtonMillimetersPerDegree:
                return super.truncateFractionDigits(this.NewtonMillimetersPerDegree, options as ToStringOptions) + ` N·mm/deg`;
            case RotationalStiffnessUnits.NewtonMetersPerDegree:
                return super.truncateFractionDigits(this.NewtonMetersPerDegree, options as ToStringOptions) + ` N·m/deg`;
            case RotationalStiffnessUnits.NewtonMillimetersPerRadian:
                return super.truncateFractionDigits(this.NewtonMillimetersPerRadian, options as ToStringOptions) + ` N·mm/rad`;
            case RotationalStiffnessUnits.PoundForceFeetPerRadian:
                return super.truncateFractionDigits(this.PoundForceFeetPerRadian, options as ToStringOptions) + ` lbf·ft/rad`;
            case RotationalStiffnessUnits.KilonewtonMetersPerRadian:
                return super.truncateFractionDigits(this.KilonewtonMetersPerRadian, options as ToStringOptions) + ` kN·m/rad`;
            case RotationalStiffnessUnits.MeganewtonMetersPerRadian:
                return super.truncateFractionDigits(this.MeganewtonMetersPerRadian, options as ToStringOptions) + ` MN·m/rad`;
            case RotationalStiffnessUnits.NanonewtonMillimetersPerDegree:
                return super.truncateFractionDigits(this.NanonewtonMillimetersPerDegree, options as ToStringOptions) + ` nN·mm/deg`;
            case RotationalStiffnessUnits.MicronewtonMillimetersPerDegree:
                return super.truncateFractionDigits(this.MicronewtonMillimetersPerDegree, options as ToStringOptions) + ` μN·mm/deg`;
            case RotationalStiffnessUnits.MillinewtonMillimetersPerDegree:
                return super.truncateFractionDigits(this.MillinewtonMillimetersPerDegree, options as ToStringOptions) + ` mN·mm/deg`;
            case RotationalStiffnessUnits.CentinewtonMillimetersPerDegree:
                return super.truncateFractionDigits(this.CentinewtonMillimetersPerDegree, options as ToStringOptions) + ` cN·mm/deg`;
            case RotationalStiffnessUnits.DecinewtonMillimetersPerDegree:
                return super.truncateFractionDigits(this.DecinewtonMillimetersPerDegree, options as ToStringOptions) + ` dN·mm/deg`;
            case RotationalStiffnessUnits.DecanewtonMillimetersPerDegree:
                return super.truncateFractionDigits(this.DecanewtonMillimetersPerDegree, options as ToStringOptions) + ` daN·mm/deg`;
            case RotationalStiffnessUnits.KilonewtonMillimetersPerDegree:
                return super.truncateFractionDigits(this.KilonewtonMillimetersPerDegree, options as ToStringOptions) + ` kN·mm/deg`;
            case RotationalStiffnessUnits.MeganewtonMillimetersPerDegree:
                return super.truncateFractionDigits(this.MeganewtonMillimetersPerDegree, options as ToStringOptions) + ` MN·mm/deg`;
            case RotationalStiffnessUnits.NanonewtonMetersPerDegree:
                return super.truncateFractionDigits(this.NanonewtonMetersPerDegree, options as ToStringOptions) + ` nN·m/deg`;
            case RotationalStiffnessUnits.MicronewtonMetersPerDegree:
                return super.truncateFractionDigits(this.MicronewtonMetersPerDegree, options as ToStringOptions) + ` μN·m/deg`;
            case RotationalStiffnessUnits.MillinewtonMetersPerDegree:
                return super.truncateFractionDigits(this.MillinewtonMetersPerDegree, options as ToStringOptions) + ` mN·m/deg`;
            case RotationalStiffnessUnits.CentinewtonMetersPerDegree:
                return super.truncateFractionDigits(this.CentinewtonMetersPerDegree, options as ToStringOptions) + ` cN·m/deg`;
            case RotationalStiffnessUnits.DecinewtonMetersPerDegree:
                return super.truncateFractionDigits(this.DecinewtonMetersPerDegree, options as ToStringOptions) + ` dN·m/deg`;
            case RotationalStiffnessUnits.DecanewtonMetersPerDegree:
                return super.truncateFractionDigits(this.DecanewtonMetersPerDegree, options as ToStringOptions) + ` daN·m/deg`;
            case RotationalStiffnessUnits.KilonewtonMetersPerDegree:
                return super.truncateFractionDigits(this.KilonewtonMetersPerDegree, options as ToStringOptions) + ` kN·m/deg`;
            case RotationalStiffnessUnits.MeganewtonMetersPerDegree:
                return super.truncateFractionDigits(this.MeganewtonMetersPerDegree, options as ToStringOptions) + ` MN·m/deg`;
            case RotationalStiffnessUnits.NanonewtonMillimetersPerRadian:
                return super.truncateFractionDigits(this.NanonewtonMillimetersPerRadian, options as ToStringOptions) + ` nN·mm/rad`;
            case RotationalStiffnessUnits.MicronewtonMillimetersPerRadian:
                return super.truncateFractionDigits(this.MicronewtonMillimetersPerRadian, options as ToStringOptions) + ` μN·mm/rad`;
            case RotationalStiffnessUnits.MillinewtonMillimetersPerRadian:
                return super.truncateFractionDigits(this.MillinewtonMillimetersPerRadian, options as ToStringOptions) + ` mN·mm/rad`;
            case RotationalStiffnessUnits.CentinewtonMillimetersPerRadian:
                return super.truncateFractionDigits(this.CentinewtonMillimetersPerRadian, options as ToStringOptions) + ` cN·mm/rad`;
            case RotationalStiffnessUnits.DecinewtonMillimetersPerRadian:
                return super.truncateFractionDigits(this.DecinewtonMillimetersPerRadian, options as ToStringOptions) + ` dN·mm/rad`;
            case RotationalStiffnessUnits.DecanewtonMillimetersPerRadian:
                return super.truncateFractionDigits(this.DecanewtonMillimetersPerRadian, options as ToStringOptions) + ` daN·mm/rad`;
            case RotationalStiffnessUnits.KilonewtonMillimetersPerRadian:
                return super.truncateFractionDigits(this.KilonewtonMillimetersPerRadian, options as ToStringOptions) + ` kN·mm/rad`;
            case RotationalStiffnessUnits.MeganewtonMillimetersPerRadian:
                return super.truncateFractionDigits(this.MeganewtonMillimetersPerRadian, options as ToStringOptions) + ` MN·mm/rad`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get RotationalStiffness unit abbreviation.
     * Note! the default abbreviation for RotationalStiffness is NewtonMetersPerRadian.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the RotationalStiffness.
     * @returns The abbreviation string of RotationalStiffness.
     */
    public getUnitAbbreviation(unitAbbreviation: RotationalStiffnessUnits = RotationalStiffnessUnits.NewtonMetersPerRadian): string {

        switch (unitAbbreviation) {
            
            case RotationalStiffnessUnits.NewtonMetersPerRadian:
                return `N·m/rad`;
            case RotationalStiffnessUnits.PoundForceFeetPerDegrees:
                return `lbf·ft/deg`;
            case RotationalStiffnessUnits.KilopoundForceFeetPerDegrees:
                return `kipf·ft/°`;
            case RotationalStiffnessUnits.NewtonMillimetersPerDegree:
                return `N·mm/deg`;
            case RotationalStiffnessUnits.NewtonMetersPerDegree:
                return `N·m/deg`;
            case RotationalStiffnessUnits.NewtonMillimetersPerRadian:
                return `N·mm/rad`;
            case RotationalStiffnessUnits.PoundForceFeetPerRadian:
                return `lbf·ft/rad`;
            case RotationalStiffnessUnits.KilonewtonMetersPerRadian:
                return `kN·m/rad`;
            case RotationalStiffnessUnits.MeganewtonMetersPerRadian:
                return `MN·m/rad`;
            case RotationalStiffnessUnits.NanonewtonMillimetersPerDegree:
                return `nN·mm/deg`;
            case RotationalStiffnessUnits.MicronewtonMillimetersPerDegree:
                return `μN·mm/deg`;
            case RotationalStiffnessUnits.MillinewtonMillimetersPerDegree:
                return `mN·mm/deg`;
            case RotationalStiffnessUnits.CentinewtonMillimetersPerDegree:
                return `cN·mm/deg`;
            case RotationalStiffnessUnits.DecinewtonMillimetersPerDegree:
                return `dN·mm/deg`;
            case RotationalStiffnessUnits.DecanewtonMillimetersPerDegree:
                return `daN·mm/deg`;
            case RotationalStiffnessUnits.KilonewtonMillimetersPerDegree:
                return `kN·mm/deg`;
            case RotationalStiffnessUnits.MeganewtonMillimetersPerDegree:
                return `MN·mm/deg`;
            case RotationalStiffnessUnits.NanonewtonMetersPerDegree:
                return `nN·m/deg`;
            case RotationalStiffnessUnits.MicronewtonMetersPerDegree:
                return `μN·m/deg`;
            case RotationalStiffnessUnits.MillinewtonMetersPerDegree:
                return `mN·m/deg`;
            case RotationalStiffnessUnits.CentinewtonMetersPerDegree:
                return `cN·m/deg`;
            case RotationalStiffnessUnits.DecinewtonMetersPerDegree:
                return `dN·m/deg`;
            case RotationalStiffnessUnits.DecanewtonMetersPerDegree:
                return `daN·m/deg`;
            case RotationalStiffnessUnits.KilonewtonMetersPerDegree:
                return `kN·m/deg`;
            case RotationalStiffnessUnits.MeganewtonMetersPerDegree:
                return `MN·m/deg`;
            case RotationalStiffnessUnits.NanonewtonMillimetersPerRadian:
                return `nN·mm/rad`;
            case RotationalStiffnessUnits.MicronewtonMillimetersPerRadian:
                return `μN·mm/rad`;
            case RotationalStiffnessUnits.MillinewtonMillimetersPerRadian:
                return `mN·mm/rad`;
            case RotationalStiffnessUnits.CentinewtonMillimetersPerRadian:
                return `cN·mm/rad`;
            case RotationalStiffnessUnits.DecinewtonMillimetersPerRadian:
                return `dN·mm/rad`;
            case RotationalStiffnessUnits.DecanewtonMillimetersPerRadian:
                return `daN·mm/rad`;
            case RotationalStiffnessUnits.KilonewtonMillimetersPerRadian:
                return `kN·mm/rad`;
            case RotationalStiffnessUnits.MeganewtonMillimetersPerRadian:
                return `MN·mm/rad`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given RotationalStiffness are equals to the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns True if the given RotationalStiffness are equal to the current RotationalStiffness.
     */
    public equals(rotationalStiffness: RotationalStiffness): boolean {
        return super.internalEquals(this.value, rotationalStiffness.BaseValue);
    }

    /**
     * Compare the given RotationalStiffness against the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns 0 if they are equal, -1 if the current RotationalStiffness is less then other, 1 if the current RotationalStiffness is greater then other.
     */
    public compareTo(rotationalStiffness: RotationalStiffness): number {
        return super.internalCompareTo(this.value, rotationalStiffness.BaseValue);
    }

    /**
     * Add the given RotationalStiffness with the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns A new RotationalStiffness instance with the results.
     */
    public add(rotationalStiffness: RotationalStiffness): RotationalStiffness {
        return new RotationalStiffness(super.internalAdd(this.value, rotationalStiffness.BaseValue))
    }

    /**
     * Subtract the given RotationalStiffness with the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns A new RotationalStiffness instance with the results.
     */
    public subtract(rotationalStiffness: RotationalStiffness): RotationalStiffness {
        return new RotationalStiffness(super.internalSubtract(this.value, rotationalStiffness.BaseValue))
    }

    /**
     * Multiply the given RotationalStiffness with the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns A new RotationalStiffness instance with the results.
     */
    public multiply(rotationalStiffness: RotationalStiffness): RotationalStiffness {
        return new RotationalStiffness(super.internalMultiply(this.value, rotationalStiffness.BaseValue))
    }

    /**
     * Divide the given RotationalStiffness with the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns A new RotationalStiffness instance with the results.
     */
    public divide(rotationalStiffness: RotationalStiffness): RotationalStiffness {
        return new RotationalStiffness(super.internalDivide(this.value, rotationalStiffness.BaseValue))
    }

    /**
     * Modulo the given RotationalStiffness with the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns A new RotationalStiffness instance with the results.
     */
    public modulo(rotationalStiffness: RotationalStiffness): RotationalStiffness {
        return new RotationalStiffness(super.internalModulo(this.value, rotationalStiffness.BaseValue))
    }

    /**
     * Pow the given RotationalStiffness with the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns A new RotationalStiffness instance with the results.
     */
    public pow(rotationalStiffness: RotationalStiffness): RotationalStiffness {
        return new RotationalStiffness(super.internalPow(this.value, rotationalStiffness.BaseValue))
    }
}
