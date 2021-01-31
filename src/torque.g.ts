/** TorqueUnits enumeration */
export enum TorqueUnits {
    /** */
    NewtonMillimeters,
    /** */
    NewtonCentimeters,
    /** */
    NewtonMeters,
    /** */
    PoundalFeet,
    /** */
    PoundForceInches,
    /** */
    PoundForceFeet,
    /** */
    KilogramForceMillimeters,
    /** */
    KilogramForceCentimeters,
    /** */
    KilogramForceMeters,
    /** */
    TonneForceMillimeters,
    /** */
    TonneForceCentimeters,
    /** */
    TonneForceMeters,
    /** */
    KilonewtonMillimeters,
    /** */
    MeganewtonMillimeters,
    /** */
    KilonewtonCentimeters,
    /** */
    MeganewtonCentimeters,
    /** */
    KilonewtonMeters,
    /** */
    MeganewtonMeters,
    /** */
    KilopoundForceInches,
    /** */
    MegapoundForceInches,
    /** */
    KilopoundForceFeet,
    /** */
    MegapoundForceFeet
}

/** Torque, moment or moment of force (see the terminology below), is the tendency of a force to rotate an object about an axis,[1] fulcrum, or pivot. Just as a force is a push or a pull, a torque can be thought of as a twist to an object. Mathematically, torque is defined as the cross product of the lever-arm distance and force, which tends to produce rotation. Loosely speaking, torque is a measure of the turning force on an object such as a bolt or a flywheel. For example, pushing or pulling the handle of a wrench connected to a nut or bolt produces a torque (turning force) that loosens or tightens the nut or bolt. */
export class Torque {
    private value: number;
    private newtonmillimetersLazy: number | null = null;
    private newtoncentimetersLazy: number | null = null;
    private newtonmetersLazy: number | null = null;
    private poundalfeetLazy: number | null = null;
    private poundforceinchesLazy: number | null = null;
    private poundforcefeetLazy: number | null = null;
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

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
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

    private convertFromBase(toUnit: TorqueUnits): number {
        switch (toUnit) {
                
            case TorqueUnits.NewtonMillimeters:
                return this.value*1000;
            case TorqueUnits.NewtonCentimeters:
                return this.value*100;
            case TorqueUnits.NewtonMeters:
                return this.value;
            case TorqueUnits.PoundalFeet:
                return this.value/4.21401100938048e-2;
            case TorqueUnits.PoundForceInches:
                return this.value/1.129848290276167e-1;
            case TorqueUnits.PoundForceFeet:
                return this.value/1.3558179483314;
            case TorqueUnits.KilogramForceMillimeters:
                return this.value*101.971619222242;
            case TorqueUnits.KilogramForceCentimeters:
                return this.value*10.1971619222242;
            case TorqueUnits.KilogramForceMeters:
                return this.value*0.101971619222242;
            case TorqueUnits.TonneForceMillimeters:
                return this.value*0.101971619222242;
            case TorqueUnits.TonneForceCentimeters:
                return this.value*0.0101971619222242;
            case TorqueUnits.TonneForceMeters:
                return this.value*0.000101971619222242;
            case TorqueUnits.KilonewtonMillimeters:
                return (this.value*1000) / 1000;
            case TorqueUnits.MeganewtonMillimeters:
                return (this.value*1000) / 1000000;
            case TorqueUnits.KilonewtonCentimeters:
                return (this.value*100) / 1000;
            case TorqueUnits.MeganewtonCentimeters:
                return (this.value*100) / 1000000;
            case TorqueUnits.KilonewtonMeters:
                return (this.value) / 1000;
            case TorqueUnits.MeganewtonMeters:
                return (this.value) / 1000000;
            case TorqueUnits.KilopoundForceInches:
                return (this.value/1.129848290276167e-1) / 1000;
            case TorqueUnits.MegapoundForceInches:
                return (this.value/1.129848290276167e-1) / 1000000;
            case TorqueUnits.KilopoundForceFeet:
                return (this.value/1.3558179483314) / 1000;
            case TorqueUnits.MegapoundForceFeet:
                return (this.value/1.3558179483314) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: TorqueUnits): number {
        switch (fromUnit) {
                
            case TorqueUnits.NewtonMillimeters:
                return value*0.001;
            case TorqueUnits.NewtonCentimeters:
                return value*0.01;
            case TorqueUnits.NewtonMeters:
                return value;
            case TorqueUnits.PoundalFeet:
                return value*4.21401100938048e-2;
            case TorqueUnits.PoundForceInches:
                return value*1.129848290276167e-1;
            case TorqueUnits.PoundForceFeet:
                return value*1.3558179483314;
            case TorqueUnits.KilogramForceMillimeters:
                return value*0.00980665019960652;
            case TorqueUnits.KilogramForceCentimeters:
                return value*0.0980665019960652;
            case TorqueUnits.KilogramForceMeters:
                return value*9.80665019960652;
            case TorqueUnits.TonneForceMillimeters:
                return value*9.80665019960652;
            case TorqueUnits.TonneForceCentimeters:
                return value*98.0665019960652;
            case TorqueUnits.TonneForceMeters:
                return value*9806.65019960653;
            case TorqueUnits.KilonewtonMillimeters:
                return (value*0.001) * 1000;
            case TorqueUnits.MeganewtonMillimeters:
                return (value*0.001) * 1000000;
            case TorqueUnits.KilonewtonCentimeters:
                return (value*0.01) * 1000;
            case TorqueUnits.MeganewtonCentimeters:
                return (value*0.01) * 1000000;
            case TorqueUnits.KilonewtonMeters:
                return (value) * 1000;
            case TorqueUnits.MeganewtonMeters:
                return (value) * 1000000;
            case TorqueUnits.KilopoundForceInches:
                return (value*1.129848290276167e-1) * 1000;
            case TorqueUnits.MegapoundForceInches:
                return (value*1.129848290276167e-1) * 1000000;
            case TorqueUnits.KilopoundForceFeet:
                return (value*1.3558179483314) * 1000;
            case TorqueUnits.MegapoundForceFeet:
                return (value*1.3558179483314) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Torque to string.
     * Note! the default format for Torque is NewtonMeters.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Torque.
     * @returns The string format of the Torque.
     */
    public toString(toUnit: TorqueUnits = TorqueUnits.NewtonMeters): string {

        switch (toUnit) {
            
            case TorqueUnits.NewtonMillimeters:
                return this.NewtonMillimeters + ` N·mm`;
            case TorqueUnits.NewtonCentimeters:
                return this.NewtonCentimeters + ` N·cm`;
            case TorqueUnits.NewtonMeters:
                return this.NewtonMeters + ` N·m`;
            case TorqueUnits.PoundalFeet:
                return this.PoundalFeet + ` pdl·ft`;
            case TorqueUnits.PoundForceInches:
                return this.PoundForceInches + ` lbf·in`;
            case TorqueUnits.PoundForceFeet:
                return this.PoundForceFeet + ` lbf·ft`;
            case TorqueUnits.KilogramForceMillimeters:
                return this.KilogramForceMillimeters + ` kgf·mm`;
            case TorqueUnits.KilogramForceCentimeters:
                return this.KilogramForceCentimeters + ` kgf·cm`;
            case TorqueUnits.KilogramForceMeters:
                return this.KilogramForceMeters + ` kgf·m`;
            case TorqueUnits.TonneForceMillimeters:
                return this.TonneForceMillimeters + ` tf·mm`;
            case TorqueUnits.TonneForceCentimeters:
                return this.TonneForceCentimeters + ` tf·cm`;
            case TorqueUnits.TonneForceMeters:
                return this.TonneForceMeters + ` tf·m`;
            case TorqueUnits.KilonewtonMillimeters:
                return this.KilonewtonMillimeters + ` `;
            case TorqueUnits.MeganewtonMillimeters:
                return this.MeganewtonMillimeters + ` `;
            case TorqueUnits.KilonewtonCentimeters:
                return this.KilonewtonCentimeters + ` `;
            case TorqueUnits.MeganewtonCentimeters:
                return this.MeganewtonCentimeters + ` `;
            case TorqueUnits.KilonewtonMeters:
                return this.KilonewtonMeters + ` `;
            case TorqueUnits.MeganewtonMeters:
                return this.MeganewtonMeters + ` `;
            case TorqueUnits.KilopoundForceInches:
                return this.KilopoundForceInches + ` `;
            case TorqueUnits.MegapoundForceInches:
                return this.MegapoundForceInches + ` `;
            case TorqueUnits.KilopoundForceFeet:
                return this.KilopoundForceFeet + ` `;
            case TorqueUnits.MegapoundForceFeet:
                return this.MegapoundForceFeet + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given Torque are equals to the current Torque.
     * @param torque The other Torque.
     * @returns True if the given Torque are equal to the current Torque.
     */
    public equals(torque: Torque): boolean {
        return this.value === torque.BaseValue;
    }

    /**
     * Compare the given Torque against the current Torque.
     * @param torque The other Torque.
     * @returns 0 if they are equal, -1 if the current Torque is less then other, 1 if the current Torque is greater then other.
     */
    public compareTo(torque: Torque): number {

        if (this.value > torque.BaseValue)
            return 1;
        if (this.value < torque.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given Torque with the current Torque.
     * @param torque The other Torque.
     * @returns A new Torque instance with the results.
     */
    public add(torque: Torque): Torque {
        return new Torque(this.value + torque.BaseValue)
    }

    /**
     * Subtract the given Torque with the current Torque.
     * @param torque The other Torque.
     * @returns A new Torque instance with the results.
     */
    public subtract(torque: Torque): Torque {
        return new Torque(this.value - torque.BaseValue)
    }

    /**
     * Multiply the given Torque with the current Torque.
     * @param torque The other Torque.
     * @returns A new Torque instance with the results.
     */
    public multiply(torque: Torque): Torque {
        return new Torque(this.value * torque.BaseValue)
    }

    /**
     * Divide the given Torque with the current Torque.
     * @param torque The other Torque.
     * @returns A new Torque instance with the results.
     */
    public divide(torque: Torque): Torque {
        return new Torque(this.value / torque.BaseValue)
    }

    /**
     * Modulo the given Torque with the current Torque.
     * @param torque The other Torque.
     * @returns A new Torque instance with the results.
     */
    public modulo(torque: Torque): Torque {
        return new Torque(this.value % torque.BaseValue)
    }

    /**
     * Pow the given Torque with the current Torque.
     * @param torque The other Torque.
     * @returns A new Torque instance with the results.
     */
    public pow(torque: Torque): Torque {
        return new Torque(this.value ** torque.BaseValue)
    }
}
