import { BaseUnit } from "../base-unit";

/** API DTO represents a Force */
export interface ForceDto {
    /** The value of the Force */
    value: number;
    /**  The specific unit that the Force value is representing */
    unit: ForceUnits;
}

/** ForceUnits enumeration */
export enum ForceUnits {
    /** One dyne is equal to 10 micronewtons, 10e−5 N or to 10 nsn (nanosthenes) in the old metre–tonne–second system of units. */
    Dyne = "Dyn",
    /** The kilogram-force, or kilopond, is equal to the magnitude of the force exerted on one kilogram of mass in a 9.80665 m/s2 gravitational field (standard gravity). Therefore, one kilogram-force is by definition equal to 9.80665 N. */
    KilogramsForce = "KilogramForce",
    /** The tonne-force, metric ton-force, megagram-force, and megapond (Mp) are each 1000 kilograms-force. */
    TonnesForce = "TonneForce",
    /** The newton (symbol: N) is the unit of force in the International System of Units (SI). It is defined as 1 kg⋅m/s2, the force which gives a mass of 1 kilogram an acceleration of 1 metre per second per second. */
    Newtons = "Newton",
    /** The kilogram-force, or kilopond, is equal to the magnitude of the force exerted on one kilogram of mass in a 9.80665 m/s2 gravitational field (standard gravity). Therefore, one kilogram-force is by definition equal to 9.80665 N. */
    KiloPonds = "KiloPond",
    /** The poundal is defined as the force necessary to accelerate 1 pound-mass at 1 foot per second per second. 1 pdl = 0.138254954376 N exactly. */
    Poundals = "Poundal",
    /** The standard values of acceleration of the standard gravitational field (gn) and the international avoirdupois pound (lb) result in a pound-force equal to 4.4482216152605 N. */
    PoundsForce = "PoundForce",
    /** An ounce-force is 1⁄16 of a pound-force, or about 0.2780139 newtons. */
    OunceForce = "OunceForce",
    /** The short ton-force is a unit of force equal to 2,000 pounds-force (907.18474 kgf), that is most commonly used in the United States – known there simply as the ton or US ton. */
    ShortTonsForce = "ShortTonForce",
    /** */
    Micronewtons = "Micronewton",
    /** */
    Millinewtons = "Millinewton",
    /** */
    Decanewtons = "Decanewton",
    /** */
    Kilonewtons = "Kilonewton",
    /** */
    Meganewtons = "Meganewton",
    /** */
    KilopoundsForce = "KilopoundForce"
}

/** In physics, a force is any influence that causes an object to undergo a certain change, either concerning its movement, direction, or geometrical construction. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate, or a flexible object to deform, or both. Force can also be described by intuitive concepts such as a push or a pull. A force has both magnitude and direction, making it a vector quantity. It is measured in the SI unit of newtons and represented by the symbol F. */
export class Force extends BaseUnit {
    private value: number;
    private dyneLazy: number | null = null;
    private kilogramsforceLazy: number | null = null;
    private tonnesforceLazy: number | null = null;
    private newtonsLazy: number | null = null;
    private kilopondsLazy: number | null = null;
    private poundalsLazy: number | null = null;
    private poundsforceLazy: number | null = null;
    private ounceforceLazy: number | null = null;
    private shorttonsforceLazy: number | null = null;
    private micronewtonsLazy: number | null = null;
    private millinewtonsLazy: number | null = null;
    private decanewtonsLazy: number | null = null;
    private kilonewtonsLazy: number | null = null;
    private meganewtonsLazy: number | null = null;
    private kilopoundsforceLazy: number | null = null;

    /**
     * Create a new Force.
     * @param value The value.
     * @param fromUnit The ‘Force’ unit to create from.
     * The default unit is Newtons
     */
    public constructor(value: number, fromUnit: ForceUnits = ForceUnits.Newtons) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Force is Newtons.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** One dyne is equal to 10 micronewtons, 10e−5 N or to 10 nsn (nanosthenes) in the old metre–tonne–second system of units. */
    public get Dyne(): number {
        if(this.dyneLazy !== null){
            return this.dyneLazy;
        }
        return this.dyneLazy = this.convertFromBase(ForceUnits.Dyne);
    }

    /** The kilogram-force, or kilopond, is equal to the magnitude of the force exerted on one kilogram of mass in a 9.80665 m/s2 gravitational field (standard gravity). Therefore, one kilogram-force is by definition equal to 9.80665 N. */
    public get KilogramsForce(): number {
        if(this.kilogramsforceLazy !== null){
            return this.kilogramsforceLazy;
        }
        return this.kilogramsforceLazy = this.convertFromBase(ForceUnits.KilogramsForce);
    }

    /** The tonne-force, metric ton-force, megagram-force, and megapond (Mp) are each 1000 kilograms-force. */
    public get TonnesForce(): number {
        if(this.tonnesforceLazy !== null){
            return this.tonnesforceLazy;
        }
        return this.tonnesforceLazy = this.convertFromBase(ForceUnits.TonnesForce);
    }

    /** The newton (symbol: N) is the unit of force in the International System of Units (SI). It is defined as 1 kg⋅m/s2, the force which gives a mass of 1 kilogram an acceleration of 1 metre per second per second. */
    public get Newtons(): number {
        if(this.newtonsLazy !== null){
            return this.newtonsLazy;
        }
        return this.newtonsLazy = this.convertFromBase(ForceUnits.Newtons);
    }

    /** The kilogram-force, or kilopond, is equal to the magnitude of the force exerted on one kilogram of mass in a 9.80665 m/s2 gravitational field (standard gravity). Therefore, one kilogram-force is by definition equal to 9.80665 N. */
    public get KiloPonds(): number {
        if(this.kilopondsLazy !== null){
            return this.kilopondsLazy;
        }
        return this.kilopondsLazy = this.convertFromBase(ForceUnits.KiloPonds);
    }

    /** The poundal is defined as the force necessary to accelerate 1 pound-mass at 1 foot per second per second. 1 pdl = 0.138254954376 N exactly. */
    public get Poundals(): number {
        if(this.poundalsLazy !== null){
            return this.poundalsLazy;
        }
        return this.poundalsLazy = this.convertFromBase(ForceUnits.Poundals);
    }

    /** The standard values of acceleration of the standard gravitational field (gn) and the international avoirdupois pound (lb) result in a pound-force equal to 4.4482216152605 N. */
    public get PoundsForce(): number {
        if(this.poundsforceLazy !== null){
            return this.poundsforceLazy;
        }
        return this.poundsforceLazy = this.convertFromBase(ForceUnits.PoundsForce);
    }

    /** An ounce-force is 1⁄16 of a pound-force, or about 0.2780139 newtons. */
    public get OunceForce(): number {
        if(this.ounceforceLazy !== null){
            return this.ounceforceLazy;
        }
        return this.ounceforceLazy = this.convertFromBase(ForceUnits.OunceForce);
    }

    /** The short ton-force is a unit of force equal to 2,000 pounds-force (907.18474 kgf), that is most commonly used in the United States – known there simply as the ton or US ton. */
    public get ShortTonsForce(): number {
        if(this.shorttonsforceLazy !== null){
            return this.shorttonsforceLazy;
        }
        return this.shorttonsforceLazy = this.convertFromBase(ForceUnits.ShortTonsForce);
    }

    /** */
    public get Micronewtons(): number {
        if(this.micronewtonsLazy !== null){
            return this.micronewtonsLazy;
        }
        return this.micronewtonsLazy = this.convertFromBase(ForceUnits.Micronewtons);
    }

    /** */
    public get Millinewtons(): number {
        if(this.millinewtonsLazy !== null){
            return this.millinewtonsLazy;
        }
        return this.millinewtonsLazy = this.convertFromBase(ForceUnits.Millinewtons);
    }

    /** */
    public get Decanewtons(): number {
        if(this.decanewtonsLazy !== null){
            return this.decanewtonsLazy;
        }
        return this.decanewtonsLazy = this.convertFromBase(ForceUnits.Decanewtons);
    }

    /** */
    public get Kilonewtons(): number {
        if(this.kilonewtonsLazy !== null){
            return this.kilonewtonsLazy;
        }
        return this.kilonewtonsLazy = this.convertFromBase(ForceUnits.Kilonewtons);
    }

    /** */
    public get Meganewtons(): number {
        if(this.meganewtonsLazy !== null){
            return this.meganewtonsLazy;
        }
        return this.meganewtonsLazy = this.convertFromBase(ForceUnits.Meganewtons);
    }

    /** */
    public get KilopoundsForce(): number {
        if(this.kilopoundsforceLazy !== null){
            return this.kilopoundsforceLazy;
        }
        return this.kilopoundsforceLazy = this.convertFromBase(ForceUnits.KilopoundsForce);
    }

    /**
     * Create a new Force instance from a Dyne
     * One dyne is equal to 10 micronewtons, 10e−5 N or to 10 nsn (nanosthenes) in the old metre–tonne–second system of units.
     * @param value The unit as Dyne to create a new Force from.
     * @returns The new Force instance.
     */
    public static FromDyne(value: number): Force {
        return new Force(value, ForceUnits.Dyne);
    }

    /**
     * Create a new Force instance from a KilogramsForce
     * The kilogram-force, or kilopond, is equal to the magnitude of the force exerted on one kilogram of mass in a 9.80665 m/s2 gravitational field (standard gravity). Therefore, one kilogram-force is by definition equal to 9.80665 N.
     * @param value The unit as KilogramsForce to create a new Force from.
     * @returns The new Force instance.
     */
    public static FromKilogramsForce(value: number): Force {
        return new Force(value, ForceUnits.KilogramsForce);
    }

    /**
     * Create a new Force instance from a TonnesForce
     * The tonne-force, metric ton-force, megagram-force, and megapond (Mp) are each 1000 kilograms-force.
     * @param value The unit as TonnesForce to create a new Force from.
     * @returns The new Force instance.
     */
    public static FromTonnesForce(value: number): Force {
        return new Force(value, ForceUnits.TonnesForce);
    }

    /**
     * Create a new Force instance from a Newtons
     * The newton (symbol: N) is the unit of force in the International System of Units (SI). It is defined as 1 kg⋅m/s2, the force which gives a mass of 1 kilogram an acceleration of 1 metre per second per second.
     * @param value The unit as Newtons to create a new Force from.
     * @returns The new Force instance.
     */
    public static FromNewtons(value: number): Force {
        return new Force(value, ForceUnits.Newtons);
    }

    /**
     * Create a new Force instance from a KiloPonds
     * The kilogram-force, or kilopond, is equal to the magnitude of the force exerted on one kilogram of mass in a 9.80665 m/s2 gravitational field (standard gravity). Therefore, one kilogram-force is by definition equal to 9.80665 N.
     * @param value The unit as KiloPonds to create a new Force from.
     * @returns The new Force instance.
     */
    public static FromKiloPonds(value: number): Force {
        return new Force(value, ForceUnits.KiloPonds);
    }

    /**
     * Create a new Force instance from a Poundals
     * The poundal is defined as the force necessary to accelerate 1 pound-mass at 1 foot per second per second. 1 pdl = 0.138254954376 N exactly.
     * @param value The unit as Poundals to create a new Force from.
     * @returns The new Force instance.
     */
    public static FromPoundals(value: number): Force {
        return new Force(value, ForceUnits.Poundals);
    }

    /**
     * Create a new Force instance from a PoundsForce
     * The standard values of acceleration of the standard gravitational field (gn) and the international avoirdupois pound (lb) result in a pound-force equal to 4.4482216152605 N.
     * @param value The unit as PoundsForce to create a new Force from.
     * @returns The new Force instance.
     */
    public static FromPoundsForce(value: number): Force {
        return new Force(value, ForceUnits.PoundsForce);
    }

    /**
     * Create a new Force instance from a OunceForce
     * An ounce-force is 1⁄16 of a pound-force, or about 0.2780139 newtons.
     * @param value The unit as OunceForce to create a new Force from.
     * @returns The new Force instance.
     */
    public static FromOunceForce(value: number): Force {
        return new Force(value, ForceUnits.OunceForce);
    }

    /**
     * Create a new Force instance from a ShortTonsForce
     * The short ton-force is a unit of force equal to 2,000 pounds-force (907.18474 kgf), that is most commonly used in the United States – known there simply as the ton or US ton.
     * @param value The unit as ShortTonsForce to create a new Force from.
     * @returns The new Force instance.
     */
    public static FromShortTonsForce(value: number): Force {
        return new Force(value, ForceUnits.ShortTonsForce);
    }

    /**
     * Create a new Force instance from a Micronewtons
     *
     * @param value The unit as Micronewtons to create a new Force from.
     * @returns The new Force instance.
     */
    public static FromMicronewtons(value: number): Force {
        return new Force(value, ForceUnits.Micronewtons);
    }

    /**
     * Create a new Force instance from a Millinewtons
     *
     * @param value The unit as Millinewtons to create a new Force from.
     * @returns The new Force instance.
     */
    public static FromMillinewtons(value: number): Force {
        return new Force(value, ForceUnits.Millinewtons);
    }

    /**
     * Create a new Force instance from a Decanewtons
     *
     * @param value The unit as Decanewtons to create a new Force from.
     * @returns The new Force instance.
     */
    public static FromDecanewtons(value: number): Force {
        return new Force(value, ForceUnits.Decanewtons);
    }

    /**
     * Create a new Force instance from a Kilonewtons
     *
     * @param value The unit as Kilonewtons to create a new Force from.
     * @returns The new Force instance.
     */
    public static FromKilonewtons(value: number): Force {
        return new Force(value, ForceUnits.Kilonewtons);
    }

    /**
     * Create a new Force instance from a Meganewtons
     *
     * @param value The unit as Meganewtons to create a new Force from.
     * @returns The new Force instance.
     */
    public static FromMeganewtons(value: number): Force {
        return new Force(value, ForceUnits.Meganewtons);
    }

    /**
     * Create a new Force instance from a KilopoundsForce
     *
     * @param value The unit as KilopoundsForce to create a new Force from.
     * @returns The new Force instance.
     */
    public static FromKilopoundsForce(value: number): Force {
        return new Force(value, ForceUnits.KilopoundsForce);
    }

    /**
     * Create API DTO represent a Force unit.
     * @param holdInUnit The specific Force unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ForceUnits = ForceUnits.Newtons): ForceDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Force unit from an API DTO representation.
     * @param dtoForce The Force API DTO representation
     */
    public static FromDto(dtoForce: ForceDto): Force {
        return new Force(dtoForce.value, dtoForce.unit);
    }

    /**
     * Convert Force to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ForceUnits): number {
        switch (toUnit) {
            case ForceUnits.Dyne: return this.Dyne;
            case ForceUnits.KilogramsForce: return this.KilogramsForce;
            case ForceUnits.TonnesForce: return this.TonnesForce;
            case ForceUnits.Newtons: return this.Newtons;
            case ForceUnits.KiloPonds: return this.KiloPonds;
            case ForceUnits.Poundals: return this.Poundals;
            case ForceUnits.PoundsForce: return this.PoundsForce;
            case ForceUnits.OunceForce: return this.OunceForce;
            case ForceUnits.ShortTonsForce: return this.ShortTonsForce;
            case ForceUnits.Micronewtons: return this.Micronewtons;
            case ForceUnits.Millinewtons: return this.Millinewtons;
            case ForceUnits.Decanewtons: return this.Decanewtons;
            case ForceUnits.Kilonewtons: return this.Kilonewtons;
            case ForceUnits.Meganewtons: return this.Meganewtons;
            case ForceUnits.KilopoundsForce: return this.KilopoundsForce;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: ForceUnits): number {
        switch (toUnit) {
                
            case ForceUnits.Dyne:
                return this.value * 1e5;
            case ForceUnits.KilogramsForce:
                return this.value / 9.80665;
            case ForceUnits.TonnesForce:
                return this.value / (9.80665 * 1000);
            case ForceUnits.Newtons:
                return this.value;
            case ForceUnits.KiloPonds:
                return this.value / 9.80665;
            case ForceUnits.Poundals:
                return this.value / 0.138254954376;
            case ForceUnits.PoundsForce:
                return this.value / 4.4482216152605;
            case ForceUnits.OunceForce:
                return this.value / (4.4482216152605 / 16);
            case ForceUnits.ShortTonsForce:
                return this.value / (4.4482216152605 * 2000);
            case ForceUnits.Micronewtons:
                return (this.value) / 0.000001;
            case ForceUnits.Millinewtons:
                return (this.value) / 0.001;
            case ForceUnits.Decanewtons:
                return (this.value) / 10;
            case ForceUnits.Kilonewtons:
                return (this.value) / 1000;
            case ForceUnits.Meganewtons:
                return (this.value) / 1000000;
            case ForceUnits.KilopoundsForce:
                return (this.value / 4.4482216152605) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ForceUnits): number {
        switch (fromUnit) {
                
            case ForceUnits.Dyne:
                return value / 1e5;
            case ForceUnits.KilogramsForce:
                return value * 9.80665;
            case ForceUnits.TonnesForce:
                return value * (9.80665 * 1000);
            case ForceUnits.Newtons:
                return value;
            case ForceUnits.KiloPonds:
                return value * 9.80665;
            case ForceUnits.Poundals:
                return value * 0.138254954376;
            case ForceUnits.PoundsForce:
                return value * 4.4482216152605;
            case ForceUnits.OunceForce:
                return value * (4.4482216152605 / 16);
            case ForceUnits.ShortTonsForce:
                return value * (4.4482216152605 * 2000);
            case ForceUnits.Micronewtons:
                return (value) * 0.000001;
            case ForceUnits.Millinewtons:
                return (value) * 0.001;
            case ForceUnits.Decanewtons:
                return (value) * 10;
            case ForceUnits.Kilonewtons:
                return (value) * 1000;
            case ForceUnits.Meganewtons:
                return (value) * 1000000;
            case ForceUnits.KilopoundsForce:
                return (value * 4.4482216152605) * 1000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Force to string.
     * Note! the default format for Force is Newtons.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Force.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the Force.
     */
    public toString(unit: ForceUnits = ForceUnits.Newtons, fractionalDigits?: number): string {

        switch (unit) {
            
            case ForceUnits.Dyne:
                return super.truncateFractionDigits(this.Dyne, fractionalDigits) + ` dyn`;
            case ForceUnits.KilogramsForce:
                return super.truncateFractionDigits(this.KilogramsForce, fractionalDigits) + ` kgf`;
            case ForceUnits.TonnesForce:
                return super.truncateFractionDigits(this.TonnesForce, fractionalDigits) + ` tf`;
            case ForceUnits.Newtons:
                return super.truncateFractionDigits(this.Newtons, fractionalDigits) + ` N`;
            case ForceUnits.KiloPonds:
                return super.truncateFractionDigits(this.KiloPonds, fractionalDigits) + ` kp`;
            case ForceUnits.Poundals:
                return super.truncateFractionDigits(this.Poundals, fractionalDigits) + ` pdl`;
            case ForceUnits.PoundsForce:
                return super.truncateFractionDigits(this.PoundsForce, fractionalDigits) + ` lbf`;
            case ForceUnits.OunceForce:
                return super.truncateFractionDigits(this.OunceForce, fractionalDigits) + ` ozf`;
            case ForceUnits.ShortTonsForce:
                return super.truncateFractionDigits(this.ShortTonsForce, fractionalDigits) + ` tf (short)`;
            case ForceUnits.Micronewtons:
                return super.truncateFractionDigits(this.Micronewtons, fractionalDigits) + ` μN`;
            case ForceUnits.Millinewtons:
                return super.truncateFractionDigits(this.Millinewtons, fractionalDigits) + ` mN`;
            case ForceUnits.Decanewtons:
                return super.truncateFractionDigits(this.Decanewtons, fractionalDigits) + ` daN`;
            case ForceUnits.Kilonewtons:
                return super.truncateFractionDigits(this.Kilonewtons, fractionalDigits) + ` kN`;
            case ForceUnits.Meganewtons:
                return super.truncateFractionDigits(this.Meganewtons, fractionalDigits) + ` MN`;
            case ForceUnits.KilopoundsForce:
                return super.truncateFractionDigits(this.KilopoundsForce, fractionalDigits) + ` klbf`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Force unit abbreviation.
     * Note! the default abbreviation for Force is Newtons.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Force.
     * @returns The abbreviation string of Force.
     */
    public getUnitAbbreviation(unitAbbreviation: ForceUnits = ForceUnits.Newtons): string {

        switch (unitAbbreviation) {
            
            case ForceUnits.Dyne:
                return `dyn`;
            case ForceUnits.KilogramsForce:
                return `kgf`;
            case ForceUnits.TonnesForce:
                return `tf`;
            case ForceUnits.Newtons:
                return `N`;
            case ForceUnits.KiloPonds:
                return `kp`;
            case ForceUnits.Poundals:
                return `pdl`;
            case ForceUnits.PoundsForce:
                return `lbf`;
            case ForceUnits.OunceForce:
                return `ozf`;
            case ForceUnits.ShortTonsForce:
                return `tf (short)`;
            case ForceUnits.Micronewtons:
                return `μN`;
            case ForceUnits.Millinewtons:
                return `mN`;
            case ForceUnits.Decanewtons:
                return `daN`;
            case ForceUnits.Kilonewtons:
                return `kN`;
            case ForceUnits.Meganewtons:
                return `MN`;
            case ForceUnits.KilopoundsForce:
                return `klbf`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Force are equals to the current Force.
     * @param force The other Force.
     * @returns True if the given Force are equal to the current Force.
     */
    public equals(force: Force): boolean {
        return super.internalEquals(this.value, force.BaseValue);
    }

    /**
     * Compare the given Force against the current Force.
     * @param force The other Force.
     * @returns 0 if they are equal, -1 if the current Force is less then other, 1 if the current Force is greater then other.
     */
    public compareTo(force: Force): number {
        return super.internalCompareTo(this.value, force.BaseValue);
    }

    /**
     * Add the given Force with the current Force.
     * @param force The other Force.
     * @returns A new Force instance with the results.
     */
    public add(force: Force): Force {
        return new Force(super.internalAdd(this.value, force.BaseValue))
    }

    /**
     * Subtract the given Force with the current Force.
     * @param force The other Force.
     * @returns A new Force instance with the results.
     */
    public subtract(force: Force): Force {
        return new Force(super.internalSubtract(this.value, force.BaseValue))
    }

    /**
     * Multiply the given Force with the current Force.
     * @param force The other Force.
     * @returns A new Force instance with the results.
     */
    public multiply(force: Force): Force {
        return new Force(super.internalMultiply(this.value, force.BaseValue))
    }

    /**
     * Divide the given Force with the current Force.
     * @param force The other Force.
     * @returns A new Force instance with the results.
     */
    public divide(force: Force): Force {
        return new Force(super.internalDivide(this.value, force.BaseValue))
    }

    /**
     * Modulo the given Force with the current Force.
     * @param force The other Force.
     * @returns A new Force instance with the results.
     */
    public modulo(force: Force): Force {
        return new Force(super.internalModulo(this.value, force.BaseValue))
    }

    /**
     * Pow the given Force with the current Force.
     * @param force The other Force.
     * @returns A new Force instance with the results.
     */
    public pow(force: Force): Force {
        return new Force(super.internalPow(this.value, force.BaseValue))
    }
}
