import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a Torque */
export interface TorqueDto {
    /** The value of the Torque */
    value: number;
    /**  The specific unit that the Torque value is representing */
    unit: TorqueUnits;
}

/** TorqueUnits enumeration */
export enum TorqueUnits {
    /** */
    NewtonMillimeters = "NewtonMillimeter",
    /** */
    NewtonCentimeters = "NewtonCentimeter",
    /** */
    NewtonMeters = "NewtonMeter",
    /** */
    PoundalFeet = "PoundalFoot",
    /** */
    PoundForceInches = "PoundForceInch",
    /** */
    PoundForceFeet = "PoundForceFoot",
    /** */
    GramForceMillimeters = "GramForceMillimeter",
    /** */
    GramForceCentimeters = "GramForceCentimeter",
    /** */
    GramForceMeters = "GramForceMeter",
    /** */
    KilogramForceMillimeters = "KilogramForceMillimeter",
    /** */
    KilogramForceCentimeters = "KilogramForceCentimeter",
    /** */
    KilogramForceMeters = "KilogramForceMeter",
    /** */
    TonneForceMillimeters = "TonneForceMillimeter",
    /** */
    TonneForceCentimeters = "TonneForceCentimeter",
    /** */
    TonneForceMeters = "TonneForceMeter",
    /** */
    KilonewtonMillimeters = "KilonewtonMillimeter",
    /** */
    MeganewtonMillimeters = "MeganewtonMillimeter",
    /** */
    KilonewtonCentimeters = "KilonewtonCentimeter",
    /** */
    MeganewtonCentimeters = "MeganewtonCentimeter",
    /** */
    KilonewtonMeters = "KilonewtonMeter",
    /** */
    MeganewtonMeters = "MeganewtonMeter",
    /** */
    KilopoundForceInches = "KilopoundForceInch",
    /** */
    MegapoundForceInches = "MegapoundForceInch",
    /** */
    KilopoundForceFeet = "KilopoundForceFoot",
    /** */
    MegapoundForceFeet = "MegapoundForceFoot"
}

/** Torque, moment or moment of force (see the terminology below), is the tendency of a force to rotate an object about an axis,[1] fulcrum, or pivot. Just as a force is a push or a pull, a torque can be thought of as a twist to an object. Mathematically, torque is defined as the cross product of the lever-arm distance and force, which tends to produce rotation. Loosely speaking, torque is a measure of the turning force on an object such as a bolt or a flywheel. For example, pushing or pulling the handle of a wrench connected to a nut or bolt produces a torque (turning force) that loosens or tightens the nut or bolt. */
export class Torque extends BaseUnit {
    protected value: number;
    private newtonmillimetersLazy: number | null = null;
    private newtoncentimetersLazy: number | null = null;
    private newtonmetersLazy: number | null = null;
    private poundalfeetLazy: number | null = null;
    private poundforceinchesLazy: number | null = null;
    private poundforcefeetLazy: number | null = null;
    private gramforcemillimetersLazy: number | null = null;
    private gramforcecentimetersLazy: number | null = null;
    private gramforcemetersLazy: number | null = null;
    private kilogramforcemillimetersLazy: number | null = null;
    private kilogramforcecentimetersLazy: number | null = null;
    private kilogramforcemetersLazy: number | null = null;
    private tonneforcemillimetersLazy: number | null = null;
    private tonneforcecentimetersLazy: number | null = null;
    private tonneforcemetersLazy: number | null = null;
    private kilonewtonmillimetersLazy: number | null = null;
    private meganewtonmillimetersLazy: number | null = null;
    private kilonewtoncentimetersLazy: number | null = null;
    private meganewtoncentimetersLazy: number | null = null;
    private kilonewtonmetersLazy: number | null = null;
    private meganewtonmetersLazy: number | null = null;
    private kilopoundforceinchesLazy: number | null = null;
    private megapoundforceinchesLazy: number | null = null;
    private kilopoundforcefeetLazy: number | null = null;
    private megapoundforcefeetLazy: number | null = null;

    /**
     * Create a new Torque.
     * @param value The value.
     * @param fromUnit The ‘Torque’ unit to create from.
     * The default unit is NewtonMeters
     */
    public constructor(value: number, fromUnit: TorqueUnits = TorqueUnits.NewtonMeters) {

        super();
        if (Number.isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Torque is NewtonMeters.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get NewtonMillimeters(): number {
        if(this.newtonmillimetersLazy !== null){
            return this.newtonmillimetersLazy;
        }
        return this.newtonmillimetersLazy = this.convertFromBase(TorqueUnits.NewtonMillimeters);
    }

    /** */
    public get NewtonCentimeters(): number {
        if(this.newtoncentimetersLazy !== null){
            return this.newtoncentimetersLazy;
        }
        return this.newtoncentimetersLazy = this.convertFromBase(TorqueUnits.NewtonCentimeters);
    }

    /** */
    public get NewtonMeters(): number {
        if(this.newtonmetersLazy !== null){
            return this.newtonmetersLazy;
        }
        return this.newtonmetersLazy = this.convertFromBase(TorqueUnits.NewtonMeters);
    }

    /** */
    public get PoundalFeet(): number {
        if(this.poundalfeetLazy !== null){
            return this.poundalfeetLazy;
        }
        return this.poundalfeetLazy = this.convertFromBase(TorqueUnits.PoundalFeet);
    }

    /** */
    public get PoundForceInches(): number {
        if(this.poundforceinchesLazy !== null){
            return this.poundforceinchesLazy;
        }
        return this.poundforceinchesLazy = this.convertFromBase(TorqueUnits.PoundForceInches);
    }

    /** */
    public get PoundForceFeet(): number {
        if(this.poundforcefeetLazy !== null){
            return this.poundforcefeetLazy;
        }
        return this.poundforcefeetLazy = this.convertFromBase(TorqueUnits.PoundForceFeet);
    }

    /** */
    public get GramForceMillimeters(): number {
        if(this.gramforcemillimetersLazy !== null){
            return this.gramforcemillimetersLazy;
        }
        return this.gramforcemillimetersLazy = this.convertFromBase(TorqueUnits.GramForceMillimeters);
    }

    /** */
    public get GramForceCentimeters(): number {
        if(this.gramforcecentimetersLazy !== null){
            return this.gramforcecentimetersLazy;
        }
        return this.gramforcecentimetersLazy = this.convertFromBase(TorqueUnits.GramForceCentimeters);
    }

    /** */
    public get GramForceMeters(): number {
        if(this.gramforcemetersLazy !== null){
            return this.gramforcemetersLazy;
        }
        return this.gramforcemetersLazy = this.convertFromBase(TorqueUnits.GramForceMeters);
    }

    /** */
    public get KilogramForceMillimeters(): number {
        if(this.kilogramforcemillimetersLazy !== null){
            return this.kilogramforcemillimetersLazy;
        }
        return this.kilogramforcemillimetersLazy = this.convertFromBase(TorqueUnits.KilogramForceMillimeters);
    }

    /** */
    public get KilogramForceCentimeters(): number {
        if(this.kilogramforcecentimetersLazy !== null){
            return this.kilogramforcecentimetersLazy;
        }
        return this.kilogramforcecentimetersLazy = this.convertFromBase(TorqueUnits.KilogramForceCentimeters);
    }

    /** */
    public get KilogramForceMeters(): number {
        if(this.kilogramforcemetersLazy !== null){
            return this.kilogramforcemetersLazy;
        }
        return this.kilogramforcemetersLazy = this.convertFromBase(TorqueUnits.KilogramForceMeters);
    }

    /** */
    public get TonneForceMillimeters(): number {
        if(this.tonneforcemillimetersLazy !== null){
            return this.tonneforcemillimetersLazy;
        }
        return this.tonneforcemillimetersLazy = this.convertFromBase(TorqueUnits.TonneForceMillimeters);
    }

    /** */
    public get TonneForceCentimeters(): number {
        if(this.tonneforcecentimetersLazy !== null){
            return this.tonneforcecentimetersLazy;
        }
        return this.tonneforcecentimetersLazy = this.convertFromBase(TorqueUnits.TonneForceCentimeters);
    }

    /** */
    public get TonneForceMeters(): number {
        if(this.tonneforcemetersLazy !== null){
            return this.tonneforcemetersLazy;
        }
        return this.tonneforcemetersLazy = this.convertFromBase(TorqueUnits.TonneForceMeters);
    }

    /** */
    public get KilonewtonMillimeters(): number {
        if(this.kilonewtonmillimetersLazy !== null){
            return this.kilonewtonmillimetersLazy;
        }
        return this.kilonewtonmillimetersLazy = this.convertFromBase(TorqueUnits.KilonewtonMillimeters);
    }

    /** */
    public get MeganewtonMillimeters(): number {
        if(this.meganewtonmillimetersLazy !== null){
            return this.meganewtonmillimetersLazy;
        }
        return this.meganewtonmillimetersLazy = this.convertFromBase(TorqueUnits.MeganewtonMillimeters);
    }

    /** */
    public get KilonewtonCentimeters(): number {
        if(this.kilonewtoncentimetersLazy !== null){
            return this.kilonewtoncentimetersLazy;
        }
        return this.kilonewtoncentimetersLazy = this.convertFromBase(TorqueUnits.KilonewtonCentimeters);
    }

    /** */
    public get MeganewtonCentimeters(): number {
        if(this.meganewtoncentimetersLazy !== null){
            return this.meganewtoncentimetersLazy;
        }
        return this.meganewtoncentimetersLazy = this.convertFromBase(TorqueUnits.MeganewtonCentimeters);
    }

    /** */
    public get KilonewtonMeters(): number {
        if(this.kilonewtonmetersLazy !== null){
            return this.kilonewtonmetersLazy;
        }
        return this.kilonewtonmetersLazy = this.convertFromBase(TorqueUnits.KilonewtonMeters);
    }

    /** */
    public get MeganewtonMeters(): number {
        if(this.meganewtonmetersLazy !== null){
            return this.meganewtonmetersLazy;
        }
        return this.meganewtonmetersLazy = this.convertFromBase(TorqueUnits.MeganewtonMeters);
    }

    /** */
    public get KilopoundForceInches(): number {
        if(this.kilopoundforceinchesLazy !== null){
            return this.kilopoundforceinchesLazy;
        }
        return this.kilopoundforceinchesLazy = this.convertFromBase(TorqueUnits.KilopoundForceInches);
    }

    /** */
    public get MegapoundForceInches(): number {
        if(this.megapoundforceinchesLazy !== null){
            return this.megapoundforceinchesLazy;
        }
        return this.megapoundforceinchesLazy = this.convertFromBase(TorqueUnits.MegapoundForceInches);
    }

    /** */
    public get KilopoundForceFeet(): number {
        if(this.kilopoundforcefeetLazy !== null){
            return this.kilopoundforcefeetLazy;
        }
        return this.kilopoundforcefeetLazy = this.convertFromBase(TorqueUnits.KilopoundForceFeet);
    }

    /** */
    public get MegapoundForceFeet(): number {
        if(this.megapoundforcefeetLazy !== null){
            return this.megapoundforcefeetLazy;
        }
        return this.megapoundforcefeetLazy = this.convertFromBase(TorqueUnits.MegapoundForceFeet);
    }

    /**
     * Create a new Torque instance from a NewtonMillimeters
     *
     * @param value The unit as NewtonMillimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromNewtonMillimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.NewtonMillimeters);
    }

    /**
     * Create a new Torque instance from a NewtonCentimeters
     *
     * @param value The unit as NewtonCentimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromNewtonCentimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.NewtonCentimeters);
    }

    /**
     * Create a new Torque instance from a NewtonMeters
     *
     * @param value The unit as NewtonMeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromNewtonMeters(value: number): Torque {
        return new Torque(value, TorqueUnits.NewtonMeters);
    }

    /**
     * Create a new Torque instance from a PoundalFeet
     *
     * @param value The unit as PoundalFeet to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromPoundalFeet(value: number): Torque {
        return new Torque(value, TorqueUnits.PoundalFeet);
    }

    /**
     * Create a new Torque instance from a PoundForceInches
     *
     * @param value The unit as PoundForceInches to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromPoundForceInches(value: number): Torque {
        return new Torque(value, TorqueUnits.PoundForceInches);
    }

    /**
     * Create a new Torque instance from a PoundForceFeet
     *
     * @param value The unit as PoundForceFeet to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromPoundForceFeet(value: number): Torque {
        return new Torque(value, TorqueUnits.PoundForceFeet);
    }

    /**
     * Create a new Torque instance from a GramForceMillimeters
     *
     * @param value The unit as GramForceMillimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromGramForceMillimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.GramForceMillimeters);
    }

    /**
     * Create a new Torque instance from a GramForceCentimeters
     *
     * @param value The unit as GramForceCentimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromGramForceCentimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.GramForceCentimeters);
    }

    /**
     * Create a new Torque instance from a GramForceMeters
     *
     * @param value The unit as GramForceMeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromGramForceMeters(value: number): Torque {
        return new Torque(value, TorqueUnits.GramForceMeters);
    }

    /**
     * Create a new Torque instance from a KilogramForceMillimeters
     *
     * @param value The unit as KilogramForceMillimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromKilogramForceMillimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.KilogramForceMillimeters);
    }

    /**
     * Create a new Torque instance from a KilogramForceCentimeters
     *
     * @param value The unit as KilogramForceCentimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromKilogramForceCentimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.KilogramForceCentimeters);
    }

    /**
     * Create a new Torque instance from a KilogramForceMeters
     *
     * @param value The unit as KilogramForceMeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromKilogramForceMeters(value: number): Torque {
        return new Torque(value, TorqueUnits.KilogramForceMeters);
    }

    /**
     * Create a new Torque instance from a TonneForceMillimeters
     *
     * @param value The unit as TonneForceMillimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromTonneForceMillimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.TonneForceMillimeters);
    }

    /**
     * Create a new Torque instance from a TonneForceCentimeters
     *
     * @param value The unit as TonneForceCentimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromTonneForceCentimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.TonneForceCentimeters);
    }

    /**
     * Create a new Torque instance from a TonneForceMeters
     *
     * @param value The unit as TonneForceMeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromTonneForceMeters(value: number): Torque {
        return new Torque(value, TorqueUnits.TonneForceMeters);
    }

    /**
     * Create a new Torque instance from a KilonewtonMillimeters
     *
     * @param value The unit as KilonewtonMillimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromKilonewtonMillimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.KilonewtonMillimeters);
    }

    /**
     * Create a new Torque instance from a MeganewtonMillimeters
     *
     * @param value The unit as MeganewtonMillimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromMeganewtonMillimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.MeganewtonMillimeters);
    }

    /**
     * Create a new Torque instance from a KilonewtonCentimeters
     *
     * @param value The unit as KilonewtonCentimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromKilonewtonCentimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.KilonewtonCentimeters);
    }

    /**
     * Create a new Torque instance from a MeganewtonCentimeters
     *
     * @param value The unit as MeganewtonCentimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromMeganewtonCentimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.MeganewtonCentimeters);
    }

    /**
     * Create a new Torque instance from a KilonewtonMeters
     *
     * @param value The unit as KilonewtonMeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromKilonewtonMeters(value: number): Torque {
        return new Torque(value, TorqueUnits.KilonewtonMeters);
    }

    /**
     * Create a new Torque instance from a MeganewtonMeters
     *
     * @param value The unit as MeganewtonMeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromMeganewtonMeters(value: number): Torque {
        return new Torque(value, TorqueUnits.MeganewtonMeters);
    }

    /**
     * Create a new Torque instance from a KilopoundForceInches
     *
     * @param value The unit as KilopoundForceInches to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromKilopoundForceInches(value: number): Torque {
        return new Torque(value, TorqueUnits.KilopoundForceInches);
    }

    /**
     * Create a new Torque instance from a MegapoundForceInches
     *
     * @param value The unit as MegapoundForceInches to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromMegapoundForceInches(value: number): Torque {
        return new Torque(value, TorqueUnits.MegapoundForceInches);
    }

    /**
     * Create a new Torque instance from a KilopoundForceFeet
     *
     * @param value The unit as KilopoundForceFeet to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromKilopoundForceFeet(value: number): Torque {
        return new Torque(value, TorqueUnits.KilopoundForceFeet);
    }

    /**
     * Create a new Torque instance from a MegapoundForceFeet
     *
     * @param value The unit as MegapoundForceFeet to create a new Torque from.
     * @returns The new Torque instance.
     */
    public static FromMegapoundForceFeet(value: number): Torque {
        return new Torque(value, TorqueUnits.MegapoundForceFeet);
    }

    /**
     * Gets the base unit enumeration associated with Torque
     * @returns The unit enumeration that can be used to interact with this type
     */
    public static getUnitEnum(): typeof TorqueUnits {
        return TorqueUnits;
    }

    /**
     * Create API DTO represent a Torque unit.
     * @param holdInUnit The specific Torque unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: TorqueUnits = TorqueUnits.NewtonMeters): TorqueDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Torque unit from an API DTO representation.
     * @param dtoTorque The Torque API DTO representation
     */
    public static FromDto(dtoTorque: TorqueDto): Torque {
        return new Torque(dtoTorque.value, dtoTorque.unit);
    }

    /**
     * Convert Torque to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: TorqueUnits): number {
        switch (toUnit) {
            case TorqueUnits.NewtonMillimeters: return this.NewtonMillimeters;
            case TorqueUnits.NewtonCentimeters: return this.NewtonCentimeters;
            case TorqueUnits.NewtonMeters: return this.NewtonMeters;
            case TorqueUnits.PoundalFeet: return this.PoundalFeet;
            case TorqueUnits.PoundForceInches: return this.PoundForceInches;
            case TorqueUnits.PoundForceFeet: return this.PoundForceFeet;
            case TorqueUnits.GramForceMillimeters: return this.GramForceMillimeters;
            case TorqueUnits.GramForceCentimeters: return this.GramForceCentimeters;
            case TorqueUnits.GramForceMeters: return this.GramForceMeters;
            case TorqueUnits.KilogramForceMillimeters: return this.KilogramForceMillimeters;
            case TorqueUnits.KilogramForceCentimeters: return this.KilogramForceCentimeters;
            case TorqueUnits.KilogramForceMeters: return this.KilogramForceMeters;
            case TorqueUnits.TonneForceMillimeters: return this.TonneForceMillimeters;
            case TorqueUnits.TonneForceCentimeters: return this.TonneForceCentimeters;
            case TorqueUnits.TonneForceMeters: return this.TonneForceMeters;
            case TorqueUnits.KilonewtonMillimeters: return this.KilonewtonMillimeters;
            case TorqueUnits.MeganewtonMillimeters: return this.MeganewtonMillimeters;
            case TorqueUnits.KilonewtonCentimeters: return this.KilonewtonCentimeters;
            case TorqueUnits.MeganewtonCentimeters: return this.MeganewtonCentimeters;
            case TorqueUnits.KilonewtonMeters: return this.KilonewtonMeters;
            case TorqueUnits.MeganewtonMeters: return this.MeganewtonMeters;
            case TorqueUnits.KilopoundForceInches: return this.KilopoundForceInches;
            case TorqueUnits.MegapoundForceInches: return this.MegapoundForceInches;
            case TorqueUnits.KilopoundForceFeet: return this.KilopoundForceFeet;
            case TorqueUnits.MegapoundForceFeet: return this.MegapoundForceFeet;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: TorqueUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case TorqueUnits.NewtonMillimeters: return super.internalMultiply(this.value, 1000);
                case TorqueUnits.NewtonCentimeters: return super.internalMultiply(this.value, 100);
                case TorqueUnits.NewtonMeters: return this.value;
                case TorqueUnits.PoundalFeet: return super.internalDivide(this.value, 4.21401100938048e-2);
                case TorqueUnits.PoundForceInches: return super.internalDivide(this.value, 1.129848290276167e-1);
                case TorqueUnits.PoundForceFeet: return super.internalDivide(this.value, 1.3558179483314);
                case TorqueUnits.GramForceMillimeters: return super.internalDivide(this.value, 9.80665e-6);
                case TorqueUnits.GramForceCentimeters: return super.internalDivide(this.value, 9.80665e-5);
                case TorqueUnits.GramForceMeters: return super.internalDivide(this.value, 9.80665e-3);
                case TorqueUnits.KilogramForceMillimeters: return super.internalDivide(this.value, 9.80665e-3);
                case TorqueUnits.KilogramForceCentimeters: return super.internalDivide(this.value, 9.80665e-2);
                case TorqueUnits.KilogramForceMeters: return super.internalDivide(this.value, 9.80665);
                case TorqueUnits.TonneForceMillimeters: return super.internalDivide(this.value, 9.80665);
                case TorqueUnits.TonneForceCentimeters: return super.internalDivide(this.value, 9.80665e1);
                case TorqueUnits.TonneForceMeters: return super.internalDivide(this.value, 9.80665e3);
                case TorqueUnits.KilonewtonMillimeters: {
                    const v3 = super.internalMultiply(this.value, 1000);
                    return super.internalDivide(v3, 1000);
                }
                case TorqueUnits.MeganewtonMillimeters: {
                    const v3 = super.internalMultiply(this.value, 1000);
                    return super.internalDivide(v3, 1000000);
                }
                case TorqueUnits.KilonewtonCentimeters: {
                    const v3 = super.internalMultiply(this.value, 100);
                    return super.internalDivide(v3, 1000);
                }
                case TorqueUnits.MeganewtonCentimeters: {
                    const v3 = super.internalMultiply(this.value, 100);
                    return super.internalDivide(v3, 1000000);
                }
                case TorqueUnits.KilonewtonMeters: return super.internalDivide(this.value, 1000);
                case TorqueUnits.MeganewtonMeters: return super.internalDivide(this.value, 1000000);
                case TorqueUnits.KilopoundForceInches: {
                    const v3 = super.internalDivide(this.value, 1.129848290276167e-1);
                    return super.internalDivide(v3, 1000);
                }
                case TorqueUnits.MegapoundForceInches: {
                    const v3 = super.internalDivide(this.value, 1.129848290276167e-1);
                    return super.internalDivide(v3, 1000000);
                }
                case TorqueUnits.KilopoundForceFeet: {
                    const v3 = super.internalDivide(this.value, 1.3558179483314);
                    return super.internalDivide(v3, 1000);
                }
                case TorqueUnits.MegapoundForceFeet: {
                    const v3 = super.internalDivide(this.value, 1.3558179483314);
                    return super.internalDivide(v3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case TorqueUnits.NewtonMillimeters: return this.value * 1000;
            case TorqueUnits.NewtonCentimeters: return this.value * 100;
            case TorqueUnits.NewtonMeters: return this.value;
            case TorqueUnits.PoundalFeet: return this.value / 4.21401100938048e-2;
            case TorqueUnits.PoundForceInches: return this.value / 1.129848290276167e-1;
            case TorqueUnits.PoundForceFeet: return this.value / 1.3558179483314;
            case TorqueUnits.GramForceMillimeters: return this.value / 9.80665e-6;
            case TorqueUnits.GramForceCentimeters: return this.value / 9.80665e-5;
            case TorqueUnits.GramForceMeters: return this.value / 9.80665e-3;
            case TorqueUnits.KilogramForceMillimeters: return this.value / 9.80665e-3;
            case TorqueUnits.KilogramForceCentimeters: return this.value / 9.80665e-2;
            case TorqueUnits.KilogramForceMeters: return this.value / 9.80665;
            case TorqueUnits.TonneForceMillimeters: return this.value / 9.80665;
            case TorqueUnits.TonneForceCentimeters: return this.value / 9.80665e1;
            case TorqueUnits.TonneForceMeters: return this.value / 9.80665e3;
            case TorqueUnits.KilonewtonMillimeters: return (this.value * 1000) / 1000;
            case TorqueUnits.MeganewtonMillimeters: return (this.value * 1000) / 1000000;
            case TorqueUnits.KilonewtonCentimeters: return (this.value * 100) / 1000;
            case TorqueUnits.MeganewtonCentimeters: return (this.value * 100) / 1000000;
            case TorqueUnits.KilonewtonMeters: return (this.value) / 1000;
            case TorqueUnits.MeganewtonMeters: return (this.value) / 1000000;
            case TorqueUnits.KilopoundForceInches: return (this.value / 1.129848290276167e-1) / 1000;
            case TorqueUnits.MegapoundForceInches: return (this.value / 1.129848290276167e-1) / 1000000;
            case TorqueUnits.KilopoundForceFeet: return (this.value / 1.3558179483314) / 1000;
            case TorqueUnits.MegapoundForceFeet: return (this.value / 1.3558179483314) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: TorqueUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case TorqueUnits.NewtonMillimeters: return super.internalMultiply(value, 0.001);
                case TorqueUnits.NewtonCentimeters: return super.internalMultiply(value, 0.01);
                case TorqueUnits.NewtonMeters: return value;
                case TorqueUnits.PoundalFeet: return super.internalMultiply(value, 4.21401100938048e-2);
                case TorqueUnits.PoundForceInches: return super.internalMultiply(value, 1.129848290276167e-1);
                case TorqueUnits.PoundForceFeet: return super.internalMultiply(value, 1.3558179483314);
                case TorqueUnits.GramForceMillimeters: return super.internalMultiply(value, 9.80665e-6);
                case TorqueUnits.GramForceCentimeters: return super.internalMultiply(value, 9.80665e-5);
                case TorqueUnits.GramForceMeters: return super.internalMultiply(value, 9.80665e-3);
                case TorqueUnits.KilogramForceMillimeters: return super.internalMultiply(value, 9.80665e-3);
                case TorqueUnits.KilogramForceCentimeters: return super.internalMultiply(value, 9.80665e-2);
                case TorqueUnits.KilogramForceMeters: return super.internalMultiply(value, 9.80665);
                case TorqueUnits.TonneForceMillimeters: return super.internalMultiply(value, 9.80665);
                case TorqueUnits.TonneForceCentimeters: return super.internalMultiply(value, 9.80665e1);
                case TorqueUnits.TonneForceMeters: return super.internalMultiply(value, 9.80665e3);
                case TorqueUnits.KilonewtonMillimeters: {
                    const v3 = super.internalMultiply(value, 0.001);
                    return super.internalMultiply(v3, 1000);
                }
                case TorqueUnits.MeganewtonMillimeters: {
                    const v3 = super.internalMultiply(value, 0.001);
                    return super.internalMultiply(v3, 1000000);
                }
                case TorqueUnits.KilonewtonCentimeters: {
                    const v3 = super.internalMultiply(value, 0.01);
                    return super.internalMultiply(v3, 1000);
                }
                case TorqueUnits.MeganewtonCentimeters: {
                    const v3 = super.internalMultiply(value, 0.01);
                    return super.internalMultiply(v3, 1000000);
                }
                case TorqueUnits.KilonewtonMeters: return super.internalMultiply(value, 1000);
                case TorqueUnits.MeganewtonMeters: return super.internalMultiply(value, 1000000);
                case TorqueUnits.KilopoundForceInches: {
                    const v3 = super.internalMultiply(value, 1.129848290276167e-1);
                    return super.internalMultiply(v3, 1000);
                }
                case TorqueUnits.MegapoundForceInches: {
                    const v3 = super.internalMultiply(value, 1.129848290276167e-1);
                    return super.internalMultiply(v3, 1000000);
                }
                case TorqueUnits.KilopoundForceFeet: {
                    const v3 = super.internalMultiply(value, 1.3558179483314);
                    return super.internalMultiply(v3, 1000);
                }
                case TorqueUnits.MegapoundForceFeet: {
                    const v3 = super.internalMultiply(value, 1.3558179483314);
                    return super.internalMultiply(v3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case TorqueUnits.NewtonMillimeters: return value * 0.001;
            case TorqueUnits.NewtonCentimeters: return value * 0.01;
            case TorqueUnits.NewtonMeters: return value;
            case TorqueUnits.PoundalFeet: return value * 4.21401100938048e-2;
            case TorqueUnits.PoundForceInches: return value * 1.129848290276167e-1;
            case TorqueUnits.PoundForceFeet: return value * 1.3558179483314;
            case TorqueUnits.GramForceMillimeters: return value * 9.80665e-6;
            case TorqueUnits.GramForceCentimeters: return value * 9.80665e-5;
            case TorqueUnits.GramForceMeters: return value * 9.80665e-3;
            case TorqueUnits.KilogramForceMillimeters: return value * 9.80665e-3;
            case TorqueUnits.KilogramForceCentimeters: return value * 9.80665e-2;
            case TorqueUnits.KilogramForceMeters: return value * 9.80665;
            case TorqueUnits.TonneForceMillimeters: return value * 9.80665;
            case TorqueUnits.TonneForceCentimeters: return value * 9.80665e1;
            case TorqueUnits.TonneForceMeters: return value * 9.80665e3;
            case TorqueUnits.KilonewtonMillimeters: return (value * 0.001) * 1000;
            case TorqueUnits.MeganewtonMillimeters: return (value * 0.001) * 1000000;
            case TorqueUnits.KilonewtonCentimeters: return (value * 0.01) * 1000;
            case TorqueUnits.MeganewtonCentimeters: return (value * 0.01) * 1000000;
            case TorqueUnits.KilonewtonMeters: return (value) * 1000;
            case TorqueUnits.MeganewtonMeters: return (value) * 1000000;
            case TorqueUnits.KilopoundForceInches: return (value * 1.129848290276167e-1) * 1000;
            case TorqueUnits.MegapoundForceInches: return (value * 1.129848290276167e-1) * 1000000;
            case TorqueUnits.KilopoundForceFeet: return (value * 1.3558179483314) * 1000;
            case TorqueUnits.MegapoundForceFeet: return (value * 1.3558179483314) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the Torque to string.
     * Note! the default format for Torque is NewtonMeters.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Torque.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the Torque.
     */
    public toString(unit: TorqueUnits = TorqueUnits.NewtonMeters, fractionalDigits?: number): string {

        switch (unit) {
            
            case TorqueUnits.NewtonMillimeters:
                return super.truncateFractionDigits(this.NewtonMillimeters, fractionalDigits) + ` N·mm`;
            case TorqueUnits.NewtonCentimeters:
                return super.truncateFractionDigits(this.NewtonCentimeters, fractionalDigits) + ` N·cm`;
            case TorqueUnits.NewtonMeters:
                return super.truncateFractionDigits(this.NewtonMeters, fractionalDigits) + ` N·m`;
            case TorqueUnits.PoundalFeet:
                return super.truncateFractionDigits(this.PoundalFeet, fractionalDigits) + ` pdl·ft`;
            case TorqueUnits.PoundForceInches:
                return super.truncateFractionDigits(this.PoundForceInches, fractionalDigits) + ` lbf·in`;
            case TorqueUnits.PoundForceFeet:
                return super.truncateFractionDigits(this.PoundForceFeet, fractionalDigits) + ` lbf·ft`;
            case TorqueUnits.GramForceMillimeters:
                return super.truncateFractionDigits(this.GramForceMillimeters, fractionalDigits) + ` gf·mm`;
            case TorqueUnits.GramForceCentimeters:
                return super.truncateFractionDigits(this.GramForceCentimeters, fractionalDigits) + ` gf·cm`;
            case TorqueUnits.GramForceMeters:
                return super.truncateFractionDigits(this.GramForceMeters, fractionalDigits) + ` gf·m`;
            case TorqueUnits.KilogramForceMillimeters:
                return super.truncateFractionDigits(this.KilogramForceMillimeters, fractionalDigits) + ` kgf·mm`;
            case TorqueUnits.KilogramForceCentimeters:
                return super.truncateFractionDigits(this.KilogramForceCentimeters, fractionalDigits) + ` kgf·cm`;
            case TorqueUnits.KilogramForceMeters:
                return super.truncateFractionDigits(this.KilogramForceMeters, fractionalDigits) + ` kgf·m`;
            case TorqueUnits.TonneForceMillimeters:
                return super.truncateFractionDigits(this.TonneForceMillimeters, fractionalDigits) + ` tf·mm`;
            case TorqueUnits.TonneForceCentimeters:
                return super.truncateFractionDigits(this.TonneForceCentimeters, fractionalDigits) + ` tf·cm`;
            case TorqueUnits.TonneForceMeters:
                return super.truncateFractionDigits(this.TonneForceMeters, fractionalDigits) + ` tf·m`;
            case TorqueUnits.KilonewtonMillimeters:
                return super.truncateFractionDigits(this.KilonewtonMillimeters, fractionalDigits) + ` kN·mm`;
            case TorqueUnits.MeganewtonMillimeters:
                return super.truncateFractionDigits(this.MeganewtonMillimeters, fractionalDigits) + ` MN·mm`;
            case TorqueUnits.KilonewtonCentimeters:
                return super.truncateFractionDigits(this.KilonewtonCentimeters, fractionalDigits) + ` kN·cm`;
            case TorqueUnits.MeganewtonCentimeters:
                return super.truncateFractionDigits(this.MeganewtonCentimeters, fractionalDigits) + ` MN·cm`;
            case TorqueUnits.KilonewtonMeters:
                return super.truncateFractionDigits(this.KilonewtonMeters, fractionalDigits) + ` kN·m`;
            case TorqueUnits.MeganewtonMeters:
                return super.truncateFractionDigits(this.MeganewtonMeters, fractionalDigits) + ` MN·m`;
            case TorqueUnits.KilopoundForceInches:
                return super.truncateFractionDigits(this.KilopoundForceInches, fractionalDigits) + ` klbf·in`;
            case TorqueUnits.MegapoundForceInches:
                return super.truncateFractionDigits(this.MegapoundForceInches, fractionalDigits) + ` Mlbf·in`;
            case TorqueUnits.KilopoundForceFeet:
                return super.truncateFractionDigits(this.KilopoundForceFeet, fractionalDigits) + ` klbf·ft`;
            case TorqueUnits.MegapoundForceFeet:
                return super.truncateFractionDigits(this.MegapoundForceFeet, fractionalDigits) + ` Mlbf·ft`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Torque unit abbreviation.
     * Note! the default abbreviation for Torque is NewtonMeters.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Torque.
     * @returns The abbreviation string of Torque.
     */
    public getUnitAbbreviation(unitAbbreviation: TorqueUnits = TorqueUnits.NewtonMeters): string {

        switch (unitAbbreviation) {
            
            case TorqueUnits.NewtonMillimeters:
                return `N·mm`;
            case TorqueUnits.NewtonCentimeters:
                return `N·cm`;
            case TorqueUnits.NewtonMeters:
                return `N·m`;
            case TorqueUnits.PoundalFeet:
                return `pdl·ft`;
            case TorqueUnits.PoundForceInches:
                return `lbf·in`;
            case TorqueUnits.PoundForceFeet:
                return `lbf·ft`;
            case TorqueUnits.GramForceMillimeters:
                return `gf·mm`;
            case TorqueUnits.GramForceCentimeters:
                return `gf·cm`;
            case TorqueUnits.GramForceMeters:
                return `gf·m`;
            case TorqueUnits.KilogramForceMillimeters:
                return `kgf·mm`;
            case TorqueUnits.KilogramForceCentimeters:
                return `kgf·cm`;
            case TorqueUnits.KilogramForceMeters:
                return `kgf·m`;
            case TorqueUnits.TonneForceMillimeters:
                return `tf·mm`;
            case TorqueUnits.TonneForceCentimeters:
                return `tf·cm`;
            case TorqueUnits.TonneForceMeters:
                return `tf·m`;
            case TorqueUnits.KilonewtonMillimeters:
                return `kN·mm`;
            case TorqueUnits.MeganewtonMillimeters:
                return `MN·mm`;
            case TorqueUnits.KilonewtonCentimeters:
                return `kN·cm`;
            case TorqueUnits.MeganewtonCentimeters:
                return `MN·cm`;
            case TorqueUnits.KilonewtonMeters:
                return `kN·m`;
            case TorqueUnits.MeganewtonMeters:
                return `MN·m`;
            case TorqueUnits.KilopoundForceInches:
                return `klbf·in`;
            case TorqueUnits.MegapoundForceInches:
                return `Mlbf·in`;
            case TorqueUnits.KilopoundForceFeet:
                return `klbf·ft`;
            case TorqueUnits.MegapoundForceFeet:
                return `Mlbf·ft`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Torque are equals to the current Torque.
     * @param torque The other Torque.
     * @returns True if the given Torque are equal to the current Torque.
     */
    public equals(torque: Torque): boolean {
        return super.internalEquals(this.value, torque.BaseValue);
    }

    /**
     * Compare the given Torque against the current Torque.
     * @param torque The other Torque.
     * @returns 0 if they are equal, -1 if the current Torque is less then other, 1 if the current Torque is greater then other.
     */
    public compareTo(torque: Torque): number {
        return super.internalCompareTo(this.value, torque.BaseValue);
    }

    /**
     * Add the given Torque with the current Torque.
     * @param torque The other Torque.
     * @returns A new Torque instance with the results.
     */
    public add(torque: Torque): Torque {
        return new Torque(super.internalAdd(this.value, torque.BaseValue))
    }

    /**
     * Subtract the given Torque with the current Torque.
     * @param torque The other Torque.
     * @returns A new Torque instance with the results.
     */
    public subtract(torque: Torque): Torque {
        return new Torque(super.internalSubtract(this.value, torque.BaseValue))
    }

    /**
     * Multiply the given Torque with the current Torque.
     * @param torque The other Torque.
     * @returns A new Torque instance with the results.
     */
    public multiply(torque: Torque): Torque {
        return new Torque(super.internalMultiply(this.value, torque.BaseValue))
    }

    /**
     * Divide the given Torque with the current Torque.
     * @param torque The other Torque.
     * @returns A new Torque instance with the results.
     */
    public divide(torque: Torque): Torque {
        return new Torque(super.internalDivide(this.value, torque.BaseValue))
    }

    /**
     * Modulo the given Torque with the current Torque.
     * @param torque The other Torque.
     * @returns A new Torque instance with the results.
     */
    public modulo(torque: Torque): Torque {
        return new Torque(super.internalModulo(this.value, torque.BaseValue))
    }

    /**
     * Pow the given Torque with the current Torque.
     * @param torque The other Torque.
     * @returns A new Torque instance with the results.
     */
    public pow(torque: Torque): Torque {
        return new Torque(super.internalPow(this.value, torque.BaseValue))
    }
}
