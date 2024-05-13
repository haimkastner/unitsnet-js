import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a TorquePerLength */
export interface TorquePerLengthDto {
    /** The value of the TorquePerLength */
    value: number;
    /**  The specific unit that the TorquePerLength value is representing */
    unit: TorquePerLengthUnits;
}

/** TorquePerLengthUnits enumeration */
export enum TorquePerLengthUnits {
    /** */
    NewtonMillimetersPerMeter = "NewtonMillimeterPerMeter",
    /** */
    NewtonCentimetersPerMeter = "NewtonCentimeterPerMeter",
    /** */
    NewtonMetersPerMeter = "NewtonMeterPerMeter",
    /** */
    PoundForceInchesPerFoot = "PoundForceInchPerFoot",
    /** */
    PoundForceFeetPerFoot = "PoundForceFootPerFoot",
    /** */
    KilogramForceMillimetersPerMeter = "KilogramForceMillimeterPerMeter",
    /** */
    KilogramForceCentimetersPerMeter = "KilogramForceCentimeterPerMeter",
    /** */
    KilogramForceMetersPerMeter = "KilogramForceMeterPerMeter",
    /** */
    TonneForceMillimetersPerMeter = "TonneForceMillimeterPerMeter",
    /** */
    TonneForceCentimetersPerMeter = "TonneForceCentimeterPerMeter",
    /** */
    TonneForceMetersPerMeter = "TonneForceMeterPerMeter",
    /** */
    KilonewtonMillimetersPerMeter = "KilonewtonMillimeterPerMeter",
    /** */
    MeganewtonMillimetersPerMeter = "MeganewtonMillimeterPerMeter",
    /** */
    KilonewtonCentimetersPerMeter = "KilonewtonCentimeterPerMeter",
    /** */
    MeganewtonCentimetersPerMeter = "MeganewtonCentimeterPerMeter",
    /** */
    KilonewtonMetersPerMeter = "KilonewtonMeterPerMeter",
    /** */
    MeganewtonMetersPerMeter = "MeganewtonMeterPerMeter",
    /** */
    KilopoundForceInchesPerFoot = "KilopoundForceInchPerFoot",
    /** */
    MegapoundForceInchesPerFoot = "MegapoundForceInchPerFoot",
    /** */
    KilopoundForceFeetPerFoot = "KilopoundForceFootPerFoot",
    /** */
    MegapoundForceFeetPerFoot = "MegapoundForceFootPerFoot"
}

/** The magnitude of torque per unit length. */
export class TorquePerLength extends BaseUnit {
    protected value: number;
    private newtonmillimeterspermeterLazy: number | null = null;
    private newtoncentimeterspermeterLazy: number | null = null;
    private newtonmeterspermeterLazy: number | null = null;
    private poundforceinchesperfootLazy: number | null = null;
    private poundforcefeetperfootLazy: number | null = null;
    private kilogramforcemillimeterspermeterLazy: number | null = null;
    private kilogramforcecentimeterspermeterLazy: number | null = null;
    private kilogramforcemeterspermeterLazy: number | null = null;
    private tonneforcemillimeterspermeterLazy: number | null = null;
    private tonneforcecentimeterspermeterLazy: number | null = null;
    private tonneforcemeterspermeterLazy: number | null = null;
    private kilonewtonmillimeterspermeterLazy: number | null = null;
    private meganewtonmillimeterspermeterLazy: number | null = null;
    private kilonewtoncentimeterspermeterLazy: number | null = null;
    private meganewtoncentimeterspermeterLazy: number | null = null;
    private kilonewtonmeterspermeterLazy: number | null = null;
    private meganewtonmeterspermeterLazy: number | null = null;
    private kilopoundforceinchesperfootLazy: number | null = null;
    private megapoundforceinchesperfootLazy: number | null = null;
    private kilopoundforcefeetperfootLazy: number | null = null;
    private megapoundforcefeetperfootLazy: number | null = null;

    /**
     * Create a new TorquePerLength.
     * @param value The value.
     * @param fromUnit The ‘TorquePerLength’ unit to create from.
     * The default unit is NewtonMetersPerMeter
     */
    public constructor(value: number, fromUnit: TorquePerLengthUnits = TorquePerLengthUnits.NewtonMetersPerMeter) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of TorquePerLength is NewtonMetersPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): TorquePerLengthUnits.NewtonMetersPerMeter {
        return TorquePerLengthUnits.NewtonMetersPerMeter
    }

    /** */
    public get NewtonMillimetersPerMeter(): number {
        if(this.newtonmillimeterspermeterLazy !== null){
            return this.newtonmillimeterspermeterLazy;
        }
        return this.newtonmillimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.NewtonMillimetersPerMeter);
    }

    /** */
    public get NewtonCentimetersPerMeter(): number {
        if(this.newtoncentimeterspermeterLazy !== null){
            return this.newtoncentimeterspermeterLazy;
        }
        return this.newtoncentimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.NewtonCentimetersPerMeter);
    }

    /** */
    public get NewtonMetersPerMeter(): number {
        if(this.newtonmeterspermeterLazy !== null){
            return this.newtonmeterspermeterLazy;
        }
        return this.newtonmeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.NewtonMetersPerMeter);
    }

    /** */
    public get PoundForceInchesPerFoot(): number {
        if(this.poundforceinchesperfootLazy !== null){
            return this.poundforceinchesperfootLazy;
        }
        return this.poundforceinchesperfootLazy = this.convertFromBase(TorquePerLengthUnits.PoundForceInchesPerFoot);
    }

    /** */
    public get PoundForceFeetPerFoot(): number {
        if(this.poundforcefeetperfootLazy !== null){
            return this.poundforcefeetperfootLazy;
        }
        return this.poundforcefeetperfootLazy = this.convertFromBase(TorquePerLengthUnits.PoundForceFeetPerFoot);
    }

    /** */
    public get KilogramForceMillimetersPerMeter(): number {
        if(this.kilogramforcemillimeterspermeterLazy !== null){
            return this.kilogramforcemillimeterspermeterLazy;
        }
        return this.kilogramforcemillimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilogramForceMillimetersPerMeter);
    }

    /** */
    public get KilogramForceCentimetersPerMeter(): number {
        if(this.kilogramforcecentimeterspermeterLazy !== null){
            return this.kilogramforcecentimeterspermeterLazy;
        }
        return this.kilogramforcecentimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilogramForceCentimetersPerMeter);
    }

    /** */
    public get KilogramForceMetersPerMeter(): number {
        if(this.kilogramforcemeterspermeterLazy !== null){
            return this.kilogramforcemeterspermeterLazy;
        }
        return this.kilogramforcemeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilogramForceMetersPerMeter);
    }

    /** */
    public get TonneForceMillimetersPerMeter(): number {
        if(this.tonneforcemillimeterspermeterLazy !== null){
            return this.tonneforcemillimeterspermeterLazy;
        }
        return this.tonneforcemillimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.TonneForceMillimetersPerMeter);
    }

    /** */
    public get TonneForceCentimetersPerMeter(): number {
        if(this.tonneforcecentimeterspermeterLazy !== null){
            return this.tonneforcecentimeterspermeterLazy;
        }
        return this.tonneforcecentimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.TonneForceCentimetersPerMeter);
    }

    /** */
    public get TonneForceMetersPerMeter(): number {
        if(this.tonneforcemeterspermeterLazy !== null){
            return this.tonneforcemeterspermeterLazy;
        }
        return this.tonneforcemeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.TonneForceMetersPerMeter);
    }

    /** */
    public get KilonewtonMillimetersPerMeter(): number {
        if(this.kilonewtonmillimeterspermeterLazy !== null){
            return this.kilonewtonmillimeterspermeterLazy;
        }
        return this.kilonewtonmillimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilonewtonMillimetersPerMeter);
    }

    /** */
    public get MeganewtonMillimetersPerMeter(): number {
        if(this.meganewtonmillimeterspermeterLazy !== null){
            return this.meganewtonmillimeterspermeterLazy;
        }
        return this.meganewtonmillimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.MeganewtonMillimetersPerMeter);
    }

    /** */
    public get KilonewtonCentimetersPerMeter(): number {
        if(this.kilonewtoncentimeterspermeterLazy !== null){
            return this.kilonewtoncentimeterspermeterLazy;
        }
        return this.kilonewtoncentimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilonewtonCentimetersPerMeter);
    }

    /** */
    public get MeganewtonCentimetersPerMeter(): number {
        if(this.meganewtoncentimeterspermeterLazy !== null){
            return this.meganewtoncentimeterspermeterLazy;
        }
        return this.meganewtoncentimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.MeganewtonCentimetersPerMeter);
    }

    /** */
    public get KilonewtonMetersPerMeter(): number {
        if(this.kilonewtonmeterspermeterLazy !== null){
            return this.kilonewtonmeterspermeterLazy;
        }
        return this.kilonewtonmeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilonewtonMetersPerMeter);
    }

    /** */
    public get MeganewtonMetersPerMeter(): number {
        if(this.meganewtonmeterspermeterLazy !== null){
            return this.meganewtonmeterspermeterLazy;
        }
        return this.meganewtonmeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.MeganewtonMetersPerMeter);
    }

    /** */
    public get KilopoundForceInchesPerFoot(): number {
        if(this.kilopoundforceinchesperfootLazy !== null){
            return this.kilopoundforceinchesperfootLazy;
        }
        return this.kilopoundforceinchesperfootLazy = this.convertFromBase(TorquePerLengthUnits.KilopoundForceInchesPerFoot);
    }

    /** */
    public get MegapoundForceInchesPerFoot(): number {
        if(this.megapoundforceinchesperfootLazy !== null){
            return this.megapoundforceinchesperfootLazy;
        }
        return this.megapoundforceinchesperfootLazy = this.convertFromBase(TorquePerLengthUnits.MegapoundForceInchesPerFoot);
    }

    /** */
    public get KilopoundForceFeetPerFoot(): number {
        if(this.kilopoundforcefeetperfootLazy !== null){
            return this.kilopoundforcefeetperfootLazy;
        }
        return this.kilopoundforcefeetperfootLazy = this.convertFromBase(TorquePerLengthUnits.KilopoundForceFeetPerFoot);
    }

    /** */
    public get MegapoundForceFeetPerFoot(): number {
        if(this.megapoundforcefeetperfootLazy !== null){
            return this.megapoundforcefeetperfootLazy;
        }
        return this.megapoundforcefeetperfootLazy = this.convertFromBase(TorquePerLengthUnits.MegapoundForceFeetPerFoot);
    }

    /**
     * Create a new TorquePerLength instance from a NewtonMillimetersPerMeter
     *
     * @param value The unit as NewtonMillimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    public static FromNewtonMillimetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.NewtonMillimetersPerMeter);
    }

    /**
     * Create a new TorquePerLength instance from a NewtonCentimetersPerMeter
     *
     * @param value The unit as NewtonCentimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    public static FromNewtonCentimetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.NewtonCentimetersPerMeter);
    }

    /**
     * Create a new TorquePerLength instance from a NewtonMetersPerMeter
     *
     * @param value The unit as NewtonMetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    public static FromNewtonMetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.NewtonMetersPerMeter);
    }

    /**
     * Create a new TorquePerLength instance from a PoundForceInchesPerFoot
     *
     * @param value The unit as PoundForceInchesPerFoot to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    public static FromPoundForceInchesPerFoot(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.PoundForceInchesPerFoot);
    }

    /**
     * Create a new TorquePerLength instance from a PoundForceFeetPerFoot
     *
     * @param value The unit as PoundForceFeetPerFoot to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    public static FromPoundForceFeetPerFoot(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.PoundForceFeetPerFoot);
    }

    /**
     * Create a new TorquePerLength instance from a KilogramForceMillimetersPerMeter
     *
     * @param value The unit as KilogramForceMillimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    public static FromKilogramForceMillimetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.KilogramForceMillimetersPerMeter);
    }

    /**
     * Create a new TorquePerLength instance from a KilogramForceCentimetersPerMeter
     *
     * @param value The unit as KilogramForceCentimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    public static FromKilogramForceCentimetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.KilogramForceCentimetersPerMeter);
    }

    /**
     * Create a new TorquePerLength instance from a KilogramForceMetersPerMeter
     *
     * @param value The unit as KilogramForceMetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    public static FromKilogramForceMetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.KilogramForceMetersPerMeter);
    }

    /**
     * Create a new TorquePerLength instance from a TonneForceMillimetersPerMeter
     *
     * @param value The unit as TonneForceMillimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    public static FromTonneForceMillimetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.TonneForceMillimetersPerMeter);
    }

    /**
     * Create a new TorquePerLength instance from a TonneForceCentimetersPerMeter
     *
     * @param value The unit as TonneForceCentimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    public static FromTonneForceCentimetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.TonneForceCentimetersPerMeter);
    }

    /**
     * Create a new TorquePerLength instance from a TonneForceMetersPerMeter
     *
     * @param value The unit as TonneForceMetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    public static FromTonneForceMetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.TonneForceMetersPerMeter);
    }

    /**
     * Create a new TorquePerLength instance from a KilonewtonMillimetersPerMeter
     *
     * @param value The unit as KilonewtonMillimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    public static FromKilonewtonMillimetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.KilonewtonMillimetersPerMeter);
    }

    /**
     * Create a new TorquePerLength instance from a MeganewtonMillimetersPerMeter
     *
     * @param value The unit as MeganewtonMillimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    public static FromMeganewtonMillimetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.MeganewtonMillimetersPerMeter);
    }

    /**
     * Create a new TorquePerLength instance from a KilonewtonCentimetersPerMeter
     *
     * @param value The unit as KilonewtonCentimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    public static FromKilonewtonCentimetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.KilonewtonCentimetersPerMeter);
    }

    /**
     * Create a new TorquePerLength instance from a MeganewtonCentimetersPerMeter
     *
     * @param value The unit as MeganewtonCentimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    public static FromMeganewtonCentimetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.MeganewtonCentimetersPerMeter);
    }

    /**
     * Create a new TorquePerLength instance from a KilonewtonMetersPerMeter
     *
     * @param value The unit as KilonewtonMetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    public static FromKilonewtonMetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.KilonewtonMetersPerMeter);
    }

    /**
     * Create a new TorquePerLength instance from a MeganewtonMetersPerMeter
     *
     * @param value The unit as MeganewtonMetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    public static FromMeganewtonMetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.MeganewtonMetersPerMeter);
    }

    /**
     * Create a new TorquePerLength instance from a KilopoundForceInchesPerFoot
     *
     * @param value The unit as KilopoundForceInchesPerFoot to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    public static FromKilopoundForceInchesPerFoot(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.KilopoundForceInchesPerFoot);
    }

    /**
     * Create a new TorquePerLength instance from a MegapoundForceInchesPerFoot
     *
     * @param value The unit as MegapoundForceInchesPerFoot to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    public static FromMegapoundForceInchesPerFoot(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.MegapoundForceInchesPerFoot);
    }

    /**
     * Create a new TorquePerLength instance from a KilopoundForceFeetPerFoot
     *
     * @param value The unit as KilopoundForceFeetPerFoot to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    public static FromKilopoundForceFeetPerFoot(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.KilopoundForceFeetPerFoot);
    }

    /**
     * Create a new TorquePerLength instance from a MegapoundForceFeetPerFoot
     *
     * @param value The unit as MegapoundForceFeetPerFoot to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    public static FromMegapoundForceFeetPerFoot(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.MegapoundForceFeetPerFoot);
    }

    /**
     * Gets the base unit enumeration associated with TorquePerLength
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof TorquePerLengthUnits {
        return TorquePerLengthUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): TorquePerLengthUnits.NewtonMetersPerMeter {
        return TorquePerLengthUnits.NewtonMetersPerMeter;
    }

    /**
     * Create API DTO represent a TorquePerLength unit.
     * @param holdInUnit The specific TorquePerLength unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: TorquePerLengthUnits = TorquePerLengthUnits.NewtonMetersPerMeter): TorquePerLengthDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a TorquePerLength unit from an API DTO representation.
     * @param dtoTorquePerLength The TorquePerLength API DTO representation
     */
    public static FromDto(dtoTorquePerLength: TorquePerLengthDto): TorquePerLength {
        return new TorquePerLength(dtoTorquePerLength.value, dtoTorquePerLength.unit);
    }

    /**
     * Convert TorquePerLength to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: TorquePerLengthUnits): number {
        switch (toUnit) {
            case TorquePerLengthUnits.NewtonMillimetersPerMeter: return this.NewtonMillimetersPerMeter;
            case TorquePerLengthUnits.NewtonCentimetersPerMeter: return this.NewtonCentimetersPerMeter;
            case TorquePerLengthUnits.NewtonMetersPerMeter: return this.NewtonMetersPerMeter;
            case TorquePerLengthUnits.PoundForceInchesPerFoot: return this.PoundForceInchesPerFoot;
            case TorquePerLengthUnits.PoundForceFeetPerFoot: return this.PoundForceFeetPerFoot;
            case TorquePerLengthUnits.KilogramForceMillimetersPerMeter: return this.KilogramForceMillimetersPerMeter;
            case TorquePerLengthUnits.KilogramForceCentimetersPerMeter: return this.KilogramForceCentimetersPerMeter;
            case TorquePerLengthUnits.KilogramForceMetersPerMeter: return this.KilogramForceMetersPerMeter;
            case TorquePerLengthUnits.TonneForceMillimetersPerMeter: return this.TonneForceMillimetersPerMeter;
            case TorquePerLengthUnits.TonneForceCentimetersPerMeter: return this.TonneForceCentimetersPerMeter;
            case TorquePerLengthUnits.TonneForceMetersPerMeter: return this.TonneForceMetersPerMeter;
            case TorquePerLengthUnits.KilonewtonMillimetersPerMeter: return this.KilonewtonMillimetersPerMeter;
            case TorquePerLengthUnits.MeganewtonMillimetersPerMeter: return this.MeganewtonMillimetersPerMeter;
            case TorquePerLengthUnits.KilonewtonCentimetersPerMeter: return this.KilonewtonCentimetersPerMeter;
            case TorquePerLengthUnits.MeganewtonCentimetersPerMeter: return this.MeganewtonCentimetersPerMeter;
            case TorquePerLengthUnits.KilonewtonMetersPerMeter: return this.KilonewtonMetersPerMeter;
            case TorquePerLengthUnits.MeganewtonMetersPerMeter: return this.MeganewtonMetersPerMeter;
            case TorquePerLengthUnits.KilopoundForceInchesPerFoot: return this.KilopoundForceInchesPerFoot;
            case TorquePerLengthUnits.MegapoundForceInchesPerFoot: return this.MegapoundForceInchesPerFoot;
            case TorquePerLengthUnits.KilopoundForceFeetPerFoot: return this.KilopoundForceFeetPerFoot;
            case TorquePerLengthUnits.MegapoundForceFeetPerFoot: return this.MegapoundForceFeetPerFoot;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: TorquePerLengthUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case TorquePerLengthUnits.NewtonMillimetersPerMeter: return super.internalMultiply(this.value, 1000);
                case TorquePerLengthUnits.NewtonCentimetersPerMeter: return super.internalMultiply(this.value, 100);
                case TorquePerLengthUnits.NewtonMetersPerMeter: return this.value;
                case TorquePerLengthUnits.PoundForceInchesPerFoot: return super.internalDivide(this.value, 0.370685147638);
                case TorquePerLengthUnits.PoundForceFeetPerFoot: return super.internalDivide(this.value, 4.44822161526);
                case TorquePerLengthUnits.KilogramForceMillimetersPerMeter: return super.internalMultiply(this.value, 101.971619222242);
                case TorquePerLengthUnits.KilogramForceCentimetersPerMeter: return super.internalMultiply(this.value, 10.1971619222242);
                case TorquePerLengthUnits.KilogramForceMetersPerMeter: return super.internalMultiply(this.value, 0.101971619222242);
                case TorquePerLengthUnits.TonneForceMillimetersPerMeter: return super.internalMultiply(this.value, 0.101971619222242);
                case TorquePerLengthUnits.TonneForceCentimetersPerMeter: return super.internalMultiply(this.value, 0.0101971619222242);
                case TorquePerLengthUnits.TonneForceMetersPerMeter: return super.internalMultiply(this.value, 0.000101971619222242);
                case TorquePerLengthUnits.KilonewtonMillimetersPerMeter: {
                    const v3 = super.internalMultiply(this.value, 1000);
                    return super.internalDivide(v3, 1000);
                }
                case TorquePerLengthUnits.MeganewtonMillimetersPerMeter: {
                    const v3 = super.internalMultiply(this.value, 1000);
                    return super.internalDivide(v3, 1000000);
                }
                case TorquePerLengthUnits.KilonewtonCentimetersPerMeter: {
                    const v3 = super.internalMultiply(this.value, 100);
                    return super.internalDivide(v3, 1000);
                }
                case TorquePerLengthUnits.MeganewtonCentimetersPerMeter: {
                    const v3 = super.internalMultiply(this.value, 100);
                    return super.internalDivide(v3, 1000000);
                }
                case TorquePerLengthUnits.KilonewtonMetersPerMeter: return super.internalDivide(this.value, 1000);
                case TorquePerLengthUnits.MeganewtonMetersPerMeter: return super.internalDivide(this.value, 1000000);
                case TorquePerLengthUnits.KilopoundForceInchesPerFoot: {
                    const v3 = super.internalDivide(this.value, 0.370685147638);
                    return super.internalDivide(v3, 1000);
                }
                case TorquePerLengthUnits.MegapoundForceInchesPerFoot: {
                    const v3 = super.internalDivide(this.value, 0.370685147638);
                    return super.internalDivide(v3, 1000000);
                }
                case TorquePerLengthUnits.KilopoundForceFeetPerFoot: {
                    const v3 = super.internalDivide(this.value, 4.44822161526);
                    return super.internalDivide(v3, 1000);
                }
                case TorquePerLengthUnits.MegapoundForceFeetPerFoot: {
                    const v3 = super.internalDivide(this.value, 4.44822161526);
                    return super.internalDivide(v3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case TorquePerLengthUnits.NewtonMillimetersPerMeter: return this.value * 1000;
            case TorquePerLengthUnits.NewtonCentimetersPerMeter: return this.value * 100;
            case TorquePerLengthUnits.NewtonMetersPerMeter: return this.value;
            case TorquePerLengthUnits.PoundForceInchesPerFoot: return this.value / 0.370685147638;
            case TorquePerLengthUnits.PoundForceFeetPerFoot: return this.value / 4.44822161526;
            case TorquePerLengthUnits.KilogramForceMillimetersPerMeter: return this.value * 101.971619222242;
            case TorquePerLengthUnits.KilogramForceCentimetersPerMeter: return this.value * 10.1971619222242;
            case TorquePerLengthUnits.KilogramForceMetersPerMeter: return this.value * 0.101971619222242;
            case TorquePerLengthUnits.TonneForceMillimetersPerMeter: return this.value * 0.101971619222242;
            case TorquePerLengthUnits.TonneForceCentimetersPerMeter: return this.value * 0.0101971619222242;
            case TorquePerLengthUnits.TonneForceMetersPerMeter: return this.value * 0.000101971619222242;
            case TorquePerLengthUnits.KilonewtonMillimetersPerMeter: return (this.value * 1000) / 1000;
            case TorquePerLengthUnits.MeganewtonMillimetersPerMeter: return (this.value * 1000) / 1000000;
            case TorquePerLengthUnits.KilonewtonCentimetersPerMeter: return (this.value * 100) / 1000;
            case TorquePerLengthUnits.MeganewtonCentimetersPerMeter: return (this.value * 100) / 1000000;
            case TorquePerLengthUnits.KilonewtonMetersPerMeter: return (this.value) / 1000;
            case TorquePerLengthUnits.MeganewtonMetersPerMeter: return (this.value) / 1000000;
            case TorquePerLengthUnits.KilopoundForceInchesPerFoot: return (this.value / 0.370685147638) / 1000;
            case TorquePerLengthUnits.MegapoundForceInchesPerFoot: return (this.value / 0.370685147638) / 1000000;
            case TorquePerLengthUnits.KilopoundForceFeetPerFoot: return (this.value / 4.44822161526) / 1000;
            case TorquePerLengthUnits.MegapoundForceFeetPerFoot: return (this.value / 4.44822161526) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: TorquePerLengthUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case TorquePerLengthUnits.NewtonMillimetersPerMeter: return super.internalMultiply(value, 0.001);
                case TorquePerLengthUnits.NewtonCentimetersPerMeter: return super.internalMultiply(value, 0.01);
                case TorquePerLengthUnits.NewtonMetersPerMeter: return value;
                case TorquePerLengthUnits.PoundForceInchesPerFoot: return super.internalMultiply(value, 0.370685147638);
                case TorquePerLengthUnits.PoundForceFeetPerFoot: return super.internalMultiply(value, 4.44822161526);
                case TorquePerLengthUnits.KilogramForceMillimetersPerMeter: return super.internalMultiply(value, 0.00980665019960652);
                case TorquePerLengthUnits.KilogramForceCentimetersPerMeter: return super.internalMultiply(value, 0.0980665019960652);
                case TorquePerLengthUnits.KilogramForceMetersPerMeter: return super.internalMultiply(value, 9.80665019960652);
                case TorquePerLengthUnits.TonneForceMillimetersPerMeter: return super.internalMultiply(value, 9.80665019960652);
                case TorquePerLengthUnits.TonneForceCentimetersPerMeter: return super.internalMultiply(value, 98.0665019960652);
                case TorquePerLengthUnits.TonneForceMetersPerMeter: return super.internalMultiply(value, 9806.65019960653);
                case TorquePerLengthUnits.KilonewtonMillimetersPerMeter: {
                    const v3 = super.internalMultiply(value, 0.001);
                    return super.internalMultiply(v3, 1000);
                }
                case TorquePerLengthUnits.MeganewtonMillimetersPerMeter: {
                    const v3 = super.internalMultiply(value, 0.001);
                    return super.internalMultiply(v3, 1000000);
                }
                case TorquePerLengthUnits.KilonewtonCentimetersPerMeter: {
                    const v3 = super.internalMultiply(value, 0.01);
                    return super.internalMultiply(v3, 1000);
                }
                case TorquePerLengthUnits.MeganewtonCentimetersPerMeter: {
                    const v3 = super.internalMultiply(value, 0.01);
                    return super.internalMultiply(v3, 1000000);
                }
                case TorquePerLengthUnits.KilonewtonMetersPerMeter: return super.internalMultiply(value, 1000);
                case TorquePerLengthUnits.MeganewtonMetersPerMeter: return super.internalMultiply(value, 1000000);
                case TorquePerLengthUnits.KilopoundForceInchesPerFoot: {
                    const v3 = super.internalMultiply(value, 0.370685147638);
                    return super.internalMultiply(v3, 1000);
                }
                case TorquePerLengthUnits.MegapoundForceInchesPerFoot: {
                    const v3 = super.internalMultiply(value, 0.370685147638);
                    return super.internalMultiply(v3, 1000000);
                }
                case TorquePerLengthUnits.KilopoundForceFeetPerFoot: {
                    const v3 = super.internalMultiply(value, 4.44822161526);
                    return super.internalMultiply(v3, 1000);
                }
                case TorquePerLengthUnits.MegapoundForceFeetPerFoot: {
                    const v3 = super.internalMultiply(value, 4.44822161526);
                    return super.internalMultiply(v3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case TorquePerLengthUnits.NewtonMillimetersPerMeter: return value * 0.001;
            case TorquePerLengthUnits.NewtonCentimetersPerMeter: return value * 0.01;
            case TorquePerLengthUnits.NewtonMetersPerMeter: return value;
            case TorquePerLengthUnits.PoundForceInchesPerFoot: return value * 0.370685147638;
            case TorquePerLengthUnits.PoundForceFeetPerFoot: return value * 4.44822161526;
            case TorquePerLengthUnits.KilogramForceMillimetersPerMeter: return value * 0.00980665019960652;
            case TorquePerLengthUnits.KilogramForceCentimetersPerMeter: return value * 0.0980665019960652;
            case TorquePerLengthUnits.KilogramForceMetersPerMeter: return value * 9.80665019960652;
            case TorquePerLengthUnits.TonneForceMillimetersPerMeter: return value * 9.80665019960652;
            case TorquePerLengthUnits.TonneForceCentimetersPerMeter: return value * 98.0665019960652;
            case TorquePerLengthUnits.TonneForceMetersPerMeter: return value * 9806.65019960653;
            case TorquePerLengthUnits.KilonewtonMillimetersPerMeter: return (value * 0.001) * 1000;
            case TorquePerLengthUnits.MeganewtonMillimetersPerMeter: return (value * 0.001) * 1000000;
            case TorquePerLengthUnits.KilonewtonCentimetersPerMeter: return (value * 0.01) * 1000;
            case TorquePerLengthUnits.MeganewtonCentimetersPerMeter: return (value * 0.01) * 1000000;
            case TorquePerLengthUnits.KilonewtonMetersPerMeter: return (value) * 1000;
            case TorquePerLengthUnits.MeganewtonMetersPerMeter: return (value) * 1000000;
            case TorquePerLengthUnits.KilopoundForceInchesPerFoot: return (value * 0.370685147638) * 1000;
            case TorquePerLengthUnits.MegapoundForceInchesPerFoot: return (value * 0.370685147638) * 1000000;
            case TorquePerLengthUnits.KilopoundForceFeetPerFoot: return (value * 4.44822161526) * 1000;
            case TorquePerLengthUnits.MegapoundForceFeetPerFoot: return (value * 4.44822161526) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the TorquePerLength to string.
     * Note! the default format for TorquePerLength is NewtonMetersPerMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the TorquePerLength.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the TorquePerLength.
     */
    public toString(unit: TorquePerLengthUnits = TorquePerLengthUnits.NewtonMetersPerMeter, fractionalDigits?: number): string {

        switch (unit) {
            
            case TorquePerLengthUnits.NewtonMillimetersPerMeter:
                return super.truncateFractionDigits(this.NewtonMillimetersPerMeter, fractionalDigits) + ` N·mm/m`;
            case TorquePerLengthUnits.NewtonCentimetersPerMeter:
                return super.truncateFractionDigits(this.NewtonCentimetersPerMeter, fractionalDigits) + ` N·cm/m`;
            case TorquePerLengthUnits.NewtonMetersPerMeter:
                return super.truncateFractionDigits(this.NewtonMetersPerMeter, fractionalDigits) + ` N·m/m`;
            case TorquePerLengthUnits.PoundForceInchesPerFoot:
                return super.truncateFractionDigits(this.PoundForceInchesPerFoot, fractionalDigits) + ` lbf·in/ft`;
            case TorquePerLengthUnits.PoundForceFeetPerFoot:
                return super.truncateFractionDigits(this.PoundForceFeetPerFoot, fractionalDigits) + ` lbf·ft/ft`;
            case TorquePerLengthUnits.KilogramForceMillimetersPerMeter:
                return super.truncateFractionDigits(this.KilogramForceMillimetersPerMeter, fractionalDigits) + ` kgf·mm/m`;
            case TorquePerLengthUnits.KilogramForceCentimetersPerMeter:
                return super.truncateFractionDigits(this.KilogramForceCentimetersPerMeter, fractionalDigits) + ` kgf·cm/m`;
            case TorquePerLengthUnits.KilogramForceMetersPerMeter:
                return super.truncateFractionDigits(this.KilogramForceMetersPerMeter, fractionalDigits) + ` kgf·m/m`;
            case TorquePerLengthUnits.TonneForceMillimetersPerMeter:
                return super.truncateFractionDigits(this.TonneForceMillimetersPerMeter, fractionalDigits) + ` tf·mm/m`;
            case TorquePerLengthUnits.TonneForceCentimetersPerMeter:
                return super.truncateFractionDigits(this.TonneForceCentimetersPerMeter, fractionalDigits) + ` tf·cm/m`;
            case TorquePerLengthUnits.TonneForceMetersPerMeter:
                return super.truncateFractionDigits(this.TonneForceMetersPerMeter, fractionalDigits) + ` tf·m/m`;
            case TorquePerLengthUnits.KilonewtonMillimetersPerMeter:
                return super.truncateFractionDigits(this.KilonewtonMillimetersPerMeter, fractionalDigits) + ` kN·mm/m`;
            case TorquePerLengthUnits.MeganewtonMillimetersPerMeter:
                return super.truncateFractionDigits(this.MeganewtonMillimetersPerMeter, fractionalDigits) + ` MN·mm/m`;
            case TorquePerLengthUnits.KilonewtonCentimetersPerMeter:
                return super.truncateFractionDigits(this.KilonewtonCentimetersPerMeter, fractionalDigits) + ` kN·cm/m`;
            case TorquePerLengthUnits.MeganewtonCentimetersPerMeter:
                return super.truncateFractionDigits(this.MeganewtonCentimetersPerMeter, fractionalDigits) + ` MN·cm/m`;
            case TorquePerLengthUnits.KilonewtonMetersPerMeter:
                return super.truncateFractionDigits(this.KilonewtonMetersPerMeter, fractionalDigits) + ` kN·m/m`;
            case TorquePerLengthUnits.MeganewtonMetersPerMeter:
                return super.truncateFractionDigits(this.MeganewtonMetersPerMeter, fractionalDigits) + ` MN·m/m`;
            case TorquePerLengthUnits.KilopoundForceInchesPerFoot:
                return super.truncateFractionDigits(this.KilopoundForceInchesPerFoot, fractionalDigits) + ` klbf·in/ft`;
            case TorquePerLengthUnits.MegapoundForceInchesPerFoot:
                return super.truncateFractionDigits(this.MegapoundForceInchesPerFoot, fractionalDigits) + ` Mlbf·in/ft`;
            case TorquePerLengthUnits.KilopoundForceFeetPerFoot:
                return super.truncateFractionDigits(this.KilopoundForceFeetPerFoot, fractionalDigits) + ` klbf·ft/ft`;
            case TorquePerLengthUnits.MegapoundForceFeetPerFoot:
                return super.truncateFractionDigits(this.MegapoundForceFeetPerFoot, fractionalDigits) + ` Mlbf·ft/ft`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get TorquePerLength unit abbreviation.
     * Note! the default abbreviation for TorquePerLength is NewtonMetersPerMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the TorquePerLength.
     * @returns The abbreviation string of TorquePerLength.
     */
    public getUnitAbbreviation(unitAbbreviation: TorquePerLengthUnits = TorquePerLengthUnits.NewtonMetersPerMeter): string {

        switch (unitAbbreviation) {
            
            case TorquePerLengthUnits.NewtonMillimetersPerMeter:
                return `N·mm/m`;
            case TorquePerLengthUnits.NewtonCentimetersPerMeter:
                return `N·cm/m`;
            case TorquePerLengthUnits.NewtonMetersPerMeter:
                return `N·m/m`;
            case TorquePerLengthUnits.PoundForceInchesPerFoot:
                return `lbf·in/ft`;
            case TorquePerLengthUnits.PoundForceFeetPerFoot:
                return `lbf·ft/ft`;
            case TorquePerLengthUnits.KilogramForceMillimetersPerMeter:
                return `kgf·mm/m`;
            case TorquePerLengthUnits.KilogramForceCentimetersPerMeter:
                return `kgf·cm/m`;
            case TorquePerLengthUnits.KilogramForceMetersPerMeter:
                return `kgf·m/m`;
            case TorquePerLengthUnits.TonneForceMillimetersPerMeter:
                return `tf·mm/m`;
            case TorquePerLengthUnits.TonneForceCentimetersPerMeter:
                return `tf·cm/m`;
            case TorquePerLengthUnits.TonneForceMetersPerMeter:
                return `tf·m/m`;
            case TorquePerLengthUnits.KilonewtonMillimetersPerMeter:
                return `kN·mm/m`;
            case TorquePerLengthUnits.MeganewtonMillimetersPerMeter:
                return `MN·mm/m`;
            case TorquePerLengthUnits.KilonewtonCentimetersPerMeter:
                return `kN·cm/m`;
            case TorquePerLengthUnits.MeganewtonCentimetersPerMeter:
                return `MN·cm/m`;
            case TorquePerLengthUnits.KilonewtonMetersPerMeter:
                return `kN·m/m`;
            case TorquePerLengthUnits.MeganewtonMetersPerMeter:
                return `MN·m/m`;
            case TorquePerLengthUnits.KilopoundForceInchesPerFoot:
                return `klbf·in/ft`;
            case TorquePerLengthUnits.MegapoundForceInchesPerFoot:
                return `Mlbf·in/ft`;
            case TorquePerLengthUnits.KilopoundForceFeetPerFoot:
                return `klbf·ft/ft`;
            case TorquePerLengthUnits.MegapoundForceFeetPerFoot:
                return `Mlbf·ft/ft`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given TorquePerLength are equals to the current TorquePerLength.
     * @param torquePerLength The other TorquePerLength.
     * @returns True if the given TorquePerLength are equal to the current TorquePerLength.
     */
    public equals(torquePerLength: TorquePerLength): boolean {
        return super.internalEquals(this.value, torquePerLength.BaseValue);
    }

    /**
     * Compare the given TorquePerLength against the current TorquePerLength.
     * @param torquePerLength The other TorquePerLength.
     * @returns 0 if they are equal, -1 if the current TorquePerLength is less then other, 1 if the current TorquePerLength is greater then other.
     */
    public compareTo(torquePerLength: TorquePerLength): number {
        return super.internalCompareTo(this.value, torquePerLength.BaseValue);
    }

    /**
     * Add the given TorquePerLength with the current TorquePerLength.
     * @param torquePerLength The other TorquePerLength.
     * @returns A new TorquePerLength instance with the results.
     */
    public add(torquePerLength: TorquePerLength): TorquePerLength {
        return new TorquePerLength(super.internalAdd(this.value, torquePerLength.BaseValue))
    }

    /**
     * Subtract the given TorquePerLength with the current TorquePerLength.
     * @param torquePerLength The other TorquePerLength.
     * @returns A new TorquePerLength instance with the results.
     */
    public subtract(torquePerLength: TorquePerLength): TorquePerLength {
        return new TorquePerLength(super.internalSubtract(this.value, torquePerLength.BaseValue))
    }

    /**
     * Multiply the given TorquePerLength with the current TorquePerLength.
     * @param torquePerLength The other TorquePerLength.
     * @returns A new TorquePerLength instance with the results.
     */
    public multiply(torquePerLength: TorquePerLength): TorquePerLength {
        return new TorquePerLength(super.internalMultiply(this.value, torquePerLength.BaseValue))
    }

    /**
     * Divide the given TorquePerLength with the current TorquePerLength.
     * @param torquePerLength The other TorquePerLength.
     * @returns A new TorquePerLength instance with the results.
     */
    public divide(torquePerLength: TorquePerLength): TorquePerLength {
        return new TorquePerLength(super.internalDivide(this.value, torquePerLength.BaseValue))
    }

    /**
     * Modulo the given TorquePerLength with the current TorquePerLength.
     * @param torquePerLength The other TorquePerLength.
     * @returns A new TorquePerLength instance with the results.
     */
    public modulo(torquePerLength: TorquePerLength): TorquePerLength {
        return new TorquePerLength(super.internalModulo(this.value, torquePerLength.BaseValue))
    }

    /**
     * Pow the given TorquePerLength with the current TorquePerLength.
     * @param torquePerLength The other TorquePerLength.
     * @returns A new TorquePerLength instance with the results.
     */
    public pow(torquePerLength: TorquePerLength): TorquePerLength {
        return new TorquePerLength(super.internalPow(this.value, torquePerLength.BaseValue))
    }
}
