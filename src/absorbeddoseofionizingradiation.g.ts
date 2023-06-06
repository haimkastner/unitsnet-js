/** AbsorbedDoseOfIonizingRadiationUnits enumeration */
export enum AbsorbedDoseOfIonizingRadiationUnits {
    /** The gray is the unit of ionizing radiation dose in the SI, defined as the absorption of one joule of radiation energy per kilogram of matter. */
    Grays,
    /** The rad is a unit of absorbed radiation dose, defined as 1 rad = 0.01 Gy = 0.01 J/kg. */
    Rads,
    /** */
    Femtograys,
    /** */
    Picograys,
    /** */
    Nanograys,
    /** */
    Micrograys,
    /** */
    Milligrays,
    /** */
    Centigrays,
    /** */
    Kilograys,
    /** */
    Megagrays,
    /** */
    Gigagrays,
    /** */
    Teragrays,
    /** */
    Petagrays,
    /** */
    Millirads,
    /** */
    Kilorads,
    /** */
    Megarads
}

/** Absorbed dose is a dose quantity which is the measure of the energy deposited in matter by ionizing radiation per unit mass. */
export class AbsorbedDoseOfIonizingRadiation {
    private value: number;
    private graysLazy: number | null = null;
    private radsLazy: number | null = null;
    private femtograysLazy: number | null = null;
    private picograysLazy: number | null = null;
    private nanograysLazy: number | null = null;
    private micrograysLazy: number | null = null;
    private milligraysLazy: number | null = null;
    private centigraysLazy: number | null = null;
    private kilograysLazy: number | null = null;
    private megagraysLazy: number | null = null;
    private gigagraysLazy: number | null = null;
    private teragraysLazy: number | null = null;
    private petagraysLazy: number | null = null;
    private milliradsLazy: number | null = null;
    private kiloradsLazy: number | null = null;
    private megaradsLazy: number | null = null;

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation.
     * @param value The value.
     * @param fromUnit The ‘AbsorbedDoseOfIonizingRadiation’ unit to create from.
     * The default unit is Grays
     */
    public constructor(value: number, fromUnit: AbsorbedDoseOfIonizingRadiationUnits = AbsorbedDoseOfIonizingRadiationUnits.Grays) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of AbsorbedDoseOfIonizingRadiation is Grays.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** The gray is the unit of ionizing radiation dose in the SI, defined as the absorption of one joule of radiation energy per kilogram of matter. */
    public get Grays(): number {
        if(this.graysLazy !== null){
            return this.graysLazy;
        }
        return this.graysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Grays);
    }

    /** The rad is a unit of absorbed radiation dose, defined as 1 rad = 0.01 Gy = 0.01 J/kg. */
    public get Rads(): number {
        if(this.radsLazy !== null){
            return this.radsLazy;
        }
        return this.radsLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Rads);
    }

    /** */
    public get Femtograys(): number {
        if(this.femtograysLazy !== null){
            return this.femtograysLazy;
        }
        return this.femtograysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Femtograys);
    }

    /** */
    public get Picograys(): number {
        if(this.picograysLazy !== null){
            return this.picograysLazy;
        }
        return this.picograysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Picograys);
    }

    /** */
    public get Nanograys(): number {
        if(this.nanograysLazy !== null){
            return this.nanograysLazy;
        }
        return this.nanograysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Nanograys);
    }

    /** */
    public get Micrograys(): number {
        if(this.micrograysLazy !== null){
            return this.micrograysLazy;
        }
        return this.micrograysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Micrograys);
    }

    /** */
    public get Milligrays(): number {
        if(this.milligraysLazy !== null){
            return this.milligraysLazy;
        }
        return this.milligraysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Milligrays);
    }

    /** */
    public get Centigrays(): number {
        if(this.centigraysLazy !== null){
            return this.centigraysLazy;
        }
        return this.centigraysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Centigrays);
    }

    /** */
    public get Kilograys(): number {
        if(this.kilograysLazy !== null){
            return this.kilograysLazy;
        }
        return this.kilograysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Kilograys);
    }

    /** */
    public get Megagrays(): number {
        if(this.megagraysLazy !== null){
            return this.megagraysLazy;
        }
        return this.megagraysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Megagrays);
    }

    /** */
    public get Gigagrays(): number {
        if(this.gigagraysLazy !== null){
            return this.gigagraysLazy;
        }
        return this.gigagraysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Gigagrays);
    }

    /** */
    public get Teragrays(): number {
        if(this.teragraysLazy !== null){
            return this.teragraysLazy;
        }
        return this.teragraysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Teragrays);
    }

    /** */
    public get Petagrays(): number {
        if(this.petagraysLazy !== null){
            return this.petagraysLazy;
        }
        return this.petagraysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Petagrays);
    }

    /** */
    public get Millirads(): number {
        if(this.milliradsLazy !== null){
            return this.milliradsLazy;
        }
        return this.milliradsLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Millirads);
    }

    /** */
    public get Kilorads(): number {
        if(this.kiloradsLazy !== null){
            return this.kiloradsLazy;
        }
        return this.kiloradsLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Kilorads);
    }

    /** */
    public get Megarads(): number {
        if(this.megaradsLazy !== null){
            return this.megaradsLazy;
        }
        return this.megaradsLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Megarads);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Grays
     * The gray is the unit of ionizing radiation dose in the SI, defined as the absorption of one joule of radiation energy per kilogram of matter.
     * @param value The unit as Grays to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromGrays(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Grays);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Rads
     * The rad is a unit of absorbed radiation dose, defined as 1 rad = 0.01 Gy = 0.01 J/kg.
     * @param value The unit as Rads to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromRads(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Rads);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Femtograys
     *
     * @param value The unit as Femtograys to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromFemtograys(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Femtograys);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Picograys
     *
     * @param value The unit as Picograys to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromPicograys(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Picograys);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Nanograys
     *
     * @param value The unit as Nanograys to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromNanograys(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Nanograys);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Micrograys
     *
     * @param value The unit as Micrograys to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromMicrograys(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Micrograys);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Milligrays
     *
     * @param value The unit as Milligrays to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromMilligrays(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Milligrays);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Centigrays
     *
     * @param value The unit as Centigrays to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromCentigrays(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Centigrays);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Kilograys
     *
     * @param value The unit as Kilograys to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromKilograys(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Kilograys);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Megagrays
     *
     * @param value The unit as Megagrays to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromMegagrays(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Megagrays);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Gigagrays
     *
     * @param value The unit as Gigagrays to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromGigagrays(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Gigagrays);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Teragrays
     *
     * @param value The unit as Teragrays to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromTeragrays(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Teragrays);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Petagrays
     *
     * @param value The unit as Petagrays to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromPetagrays(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Petagrays);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Millirads
     *
     * @param value The unit as Millirads to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromMillirads(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Millirads);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Kilorads
     *
     * @param value The unit as Kilorads to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromKilorads(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Kilorads);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Megarads
     *
     * @param value The unit as Megarads to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromMegarads(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Megarads);
    }

    private convertFromBase(toUnit: AbsorbedDoseOfIonizingRadiationUnits): number {
        switch (toUnit) {
                
            case AbsorbedDoseOfIonizingRadiationUnits.Grays:
                return this.value;
            case AbsorbedDoseOfIonizingRadiationUnits.Rads:
                return this.value * 100;
            case AbsorbedDoseOfIonizingRadiationUnits.Femtograys:
                return (this.value) / 1e-15;
            case AbsorbedDoseOfIonizingRadiationUnits.Picograys:
                return (this.value) / 1e-12;
            case AbsorbedDoseOfIonizingRadiationUnits.Nanograys:
                return (this.value) / 1e-9;
            case AbsorbedDoseOfIonizingRadiationUnits.Micrograys:
                return (this.value) / 0.000001;
            case AbsorbedDoseOfIonizingRadiationUnits.Milligrays:
                return (this.value) / 0.001;
            case AbsorbedDoseOfIonizingRadiationUnits.Centigrays:
                return (this.value) / 0.01;
            case AbsorbedDoseOfIonizingRadiationUnits.Kilograys:
                return (this.value) / 1000;
            case AbsorbedDoseOfIonizingRadiationUnits.Megagrays:
                return (this.value) / 1000000;
            case AbsorbedDoseOfIonizingRadiationUnits.Gigagrays:
                return (this.value) / 1000000000;
            case AbsorbedDoseOfIonizingRadiationUnits.Teragrays:
                return (this.value) / 1000000000000;
            case AbsorbedDoseOfIonizingRadiationUnits.Petagrays:
                return (this.value) / 1000000000000000;
            case AbsorbedDoseOfIonizingRadiationUnits.Millirads:
                return (this.value * 100) / 0.001;
            case AbsorbedDoseOfIonizingRadiationUnits.Kilorads:
                return (this.value * 100) / 1000;
            case AbsorbedDoseOfIonizingRadiationUnits.Megarads:
                return (this.value * 100) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: AbsorbedDoseOfIonizingRadiationUnits): number {
        switch (fromUnit) {
                
            case AbsorbedDoseOfIonizingRadiationUnits.Grays:
                return value;
            case AbsorbedDoseOfIonizingRadiationUnits.Rads:
                return value / 100;
            case AbsorbedDoseOfIonizingRadiationUnits.Femtograys:
                return (value) * 1e-15;
            case AbsorbedDoseOfIonizingRadiationUnits.Picograys:
                return (value) * 1e-12;
            case AbsorbedDoseOfIonizingRadiationUnits.Nanograys:
                return (value) * 1e-9;
            case AbsorbedDoseOfIonizingRadiationUnits.Micrograys:
                return (value) * 0.000001;
            case AbsorbedDoseOfIonizingRadiationUnits.Milligrays:
                return (value) * 0.001;
            case AbsorbedDoseOfIonizingRadiationUnits.Centigrays:
                return (value) * 0.01;
            case AbsorbedDoseOfIonizingRadiationUnits.Kilograys:
                return (value) * 1000;
            case AbsorbedDoseOfIonizingRadiationUnits.Megagrays:
                return (value) * 1000000;
            case AbsorbedDoseOfIonizingRadiationUnits.Gigagrays:
                return (value) * 1000000000;
            case AbsorbedDoseOfIonizingRadiationUnits.Teragrays:
                return (value) * 1000000000000;
            case AbsorbedDoseOfIonizingRadiationUnits.Petagrays:
                return (value) * 1000000000000000;
            case AbsorbedDoseOfIonizingRadiationUnits.Millirads:
                return (value / 100) * 0.001;
            case AbsorbedDoseOfIonizingRadiationUnits.Kilorads:
                return (value / 100) * 1000;
            case AbsorbedDoseOfIonizingRadiationUnits.Megarads:
                return (value / 100) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the AbsorbedDoseOfIonizingRadiation to string.
     * Note! the default format for AbsorbedDoseOfIonizingRadiation is Grays.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the AbsorbedDoseOfIonizingRadiation.
     * @returns The string format of the AbsorbedDoseOfIonizingRadiation.
     */
    public toString(unit: AbsorbedDoseOfIonizingRadiationUnits = AbsorbedDoseOfIonizingRadiationUnits.Grays): string {

        switch (unit) {
            
            case AbsorbedDoseOfIonizingRadiationUnits.Grays:
                return this.Grays + ` Gy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Rads:
                return this.Rads + ` rad`;
            case AbsorbedDoseOfIonizingRadiationUnits.Femtograys:
                return this.Femtograys + ` `;
            case AbsorbedDoseOfIonizingRadiationUnits.Picograys:
                return this.Picograys + ` `;
            case AbsorbedDoseOfIonizingRadiationUnits.Nanograys:
                return this.Nanograys + ` `;
            case AbsorbedDoseOfIonizingRadiationUnits.Micrograys:
                return this.Micrograys + ` `;
            case AbsorbedDoseOfIonizingRadiationUnits.Milligrays:
                return this.Milligrays + ` `;
            case AbsorbedDoseOfIonizingRadiationUnits.Centigrays:
                return this.Centigrays + ` `;
            case AbsorbedDoseOfIonizingRadiationUnits.Kilograys:
                return this.Kilograys + ` `;
            case AbsorbedDoseOfIonizingRadiationUnits.Megagrays:
                return this.Megagrays + ` `;
            case AbsorbedDoseOfIonizingRadiationUnits.Gigagrays:
                return this.Gigagrays + ` `;
            case AbsorbedDoseOfIonizingRadiationUnits.Teragrays:
                return this.Teragrays + ` `;
            case AbsorbedDoseOfIonizingRadiationUnits.Petagrays:
                return this.Petagrays + ` `;
            case AbsorbedDoseOfIonizingRadiationUnits.Millirads:
                return this.Millirads + ` `;
            case AbsorbedDoseOfIonizingRadiationUnits.Kilorads:
                return this.Kilorads + ` `;
            case AbsorbedDoseOfIonizingRadiationUnits.Megarads:
                return this.Megarads + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get AbsorbedDoseOfIonizingRadiation unit abbreviation.
     * Note! the default abbreviation for AbsorbedDoseOfIonizingRadiation is Grays.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the AbsorbedDoseOfIonizingRadiation.
     * @returns The abbreviation string of AbsorbedDoseOfIonizingRadiation.
     */
    public getUnitAbbreviation(unitAbbreviation: AbsorbedDoseOfIonizingRadiationUnits = AbsorbedDoseOfIonizingRadiationUnits.Grays): string {

        switch (unitAbbreviation) {
            
            case AbsorbedDoseOfIonizingRadiationUnits.Grays:
                return `Gy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Rads:
                return `rad`;
            case AbsorbedDoseOfIonizingRadiationUnits.Femtograys:
                return ``;
            case AbsorbedDoseOfIonizingRadiationUnits.Picograys:
                return ``;
            case AbsorbedDoseOfIonizingRadiationUnits.Nanograys:
                return ``;
            case AbsorbedDoseOfIonizingRadiationUnits.Micrograys:
                return ``;
            case AbsorbedDoseOfIonizingRadiationUnits.Milligrays:
                return ``;
            case AbsorbedDoseOfIonizingRadiationUnits.Centigrays:
                return ``;
            case AbsorbedDoseOfIonizingRadiationUnits.Kilograys:
                return ``;
            case AbsorbedDoseOfIonizingRadiationUnits.Megagrays:
                return ``;
            case AbsorbedDoseOfIonizingRadiationUnits.Gigagrays:
                return ``;
            case AbsorbedDoseOfIonizingRadiationUnits.Teragrays:
                return ``;
            case AbsorbedDoseOfIonizingRadiationUnits.Petagrays:
                return ``;
            case AbsorbedDoseOfIonizingRadiationUnits.Millirads:
                return ``;
            case AbsorbedDoseOfIonizingRadiationUnits.Kilorads:
                return ``;
            case AbsorbedDoseOfIonizingRadiationUnits.Megarads:
                return ``;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given AbsorbedDoseOfIonizingRadiation are equals to the current AbsorbedDoseOfIonizingRadiation.
     * @param absorbedDoseOfIonizingRadiation The other AbsorbedDoseOfIonizingRadiation.
     * @returns True if the given AbsorbedDoseOfIonizingRadiation are equal to the current AbsorbedDoseOfIonizingRadiation.
     */
    public equals(absorbedDoseOfIonizingRadiation: AbsorbedDoseOfIonizingRadiation): boolean {
        return this.value === absorbedDoseOfIonizingRadiation.BaseValue;
    }

    /**
     * Compare the given AbsorbedDoseOfIonizingRadiation against the current AbsorbedDoseOfIonizingRadiation.
     * @param absorbedDoseOfIonizingRadiation The other AbsorbedDoseOfIonizingRadiation.
     * @returns 0 if they are equal, -1 if the current AbsorbedDoseOfIonizingRadiation is less then other, 1 if the current AbsorbedDoseOfIonizingRadiation is greater then other.
     */
    public compareTo(absorbedDoseOfIonizingRadiation: AbsorbedDoseOfIonizingRadiation): number {

        if (this.value > absorbedDoseOfIonizingRadiation.BaseValue)
            return 1;
        if (this.value < absorbedDoseOfIonizingRadiation.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given AbsorbedDoseOfIonizingRadiation with the current AbsorbedDoseOfIonizingRadiation.
     * @param absorbedDoseOfIonizingRadiation The other AbsorbedDoseOfIonizingRadiation.
     * @returns A new AbsorbedDoseOfIonizingRadiation instance with the results.
     */
    public add(absorbedDoseOfIonizingRadiation: AbsorbedDoseOfIonizingRadiation): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(this.value + absorbedDoseOfIonizingRadiation.BaseValue)
    }

    /**
     * Subtract the given AbsorbedDoseOfIonizingRadiation with the current AbsorbedDoseOfIonizingRadiation.
     * @param absorbedDoseOfIonizingRadiation The other AbsorbedDoseOfIonizingRadiation.
     * @returns A new AbsorbedDoseOfIonizingRadiation instance with the results.
     */
    public subtract(absorbedDoseOfIonizingRadiation: AbsorbedDoseOfIonizingRadiation): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(this.value - absorbedDoseOfIonizingRadiation.BaseValue)
    }

    /**
     * Multiply the given AbsorbedDoseOfIonizingRadiation with the current AbsorbedDoseOfIonizingRadiation.
     * @param absorbedDoseOfIonizingRadiation The other AbsorbedDoseOfIonizingRadiation.
     * @returns A new AbsorbedDoseOfIonizingRadiation instance with the results.
     */
    public multiply(absorbedDoseOfIonizingRadiation: AbsorbedDoseOfIonizingRadiation): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(this.value * absorbedDoseOfIonizingRadiation.BaseValue)
    }

    /**
     * Divide the given AbsorbedDoseOfIonizingRadiation with the current AbsorbedDoseOfIonizingRadiation.
     * @param absorbedDoseOfIonizingRadiation The other AbsorbedDoseOfIonizingRadiation.
     * @returns A new AbsorbedDoseOfIonizingRadiation instance with the results.
     */
    public divide(absorbedDoseOfIonizingRadiation: AbsorbedDoseOfIonizingRadiation): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(this.value / absorbedDoseOfIonizingRadiation.BaseValue)
    }

    /**
     * Modulo the given AbsorbedDoseOfIonizingRadiation with the current AbsorbedDoseOfIonizingRadiation.
     * @param absorbedDoseOfIonizingRadiation The other AbsorbedDoseOfIonizingRadiation.
     * @returns A new AbsorbedDoseOfIonizingRadiation instance with the results.
     */
    public modulo(absorbedDoseOfIonizingRadiation: AbsorbedDoseOfIonizingRadiation): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(this.value % absorbedDoseOfIonizingRadiation.BaseValue)
    }

    /**
     * Pow the given AbsorbedDoseOfIonizingRadiation with the current AbsorbedDoseOfIonizingRadiation.
     * @param absorbedDoseOfIonizingRadiation The other AbsorbedDoseOfIonizingRadiation.
     * @returns A new AbsorbedDoseOfIonizingRadiation instance with the results.
     */
    public pow(absorbedDoseOfIonizingRadiation: AbsorbedDoseOfIonizingRadiation): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(this.value ** absorbedDoseOfIonizingRadiation.BaseValue)
    }
}
