import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a Volume */
export interface VolumeDto {
    /** The value of the Volume */
    value: number;
    /**  The specific unit that the Volume value is representing */
    unit: VolumeUnits;
}

/** VolumeUnits enumeration */
export enum VolumeUnits {
    /** */
    Liters = "Liter",
    /** */
    CubicMeters = "CubicMeter",
    /** */
    CubicKilometers = "CubicKilometer",
    /** */
    CubicHectometers = "CubicHectometer",
    /** */
    CubicDecimeters = "CubicDecimeter",
    /** */
    CubicCentimeters = "CubicCentimeter",
    /** */
    CubicMillimeters = "CubicMillimeter",
    /** */
    CubicMicrometers = "CubicMicrometer",
    /** */
    CubicMiles = "CubicMile",
    /** */
    CubicYards = "CubicYard",
    /** */
    CubicFeet = "CubicFoot",
    /** */
    CubicInches = "CubicInch",
    /** The British imperial gallon (frequently called simply "gallon") is defined as exactly 4.54609 litres. */
    ImperialGallons = "ImperialGallon",
    /** */
    ImperialOunces = "ImperialOunce",
    /** The US liquid gallon (frequently called simply "gallon") is legally defined as 231 cubic inches, which is exactly 3.785411784 litres. */
    UsGallons = "UsGallon",
    /** */
    UsOunces = "UsOunce",
    /** */
    UsTablespoons = "UsTablespoon",
    /** */
    AuTablespoons = "AuTablespoon",
    /** */
    UkTablespoons = "UkTablespoon",
    /** */
    MetricTeaspoons = "MetricTeaspoon",
    /** */
    UsTeaspoons = "UsTeaspoon",
    /** */
    MetricCups = "MetricCup",
    /** */
    UsCustomaryCups = "UsCustomaryCup",
    /** */
    UsLegalCups = "UsLegalCup",
    /** */
    OilBarrels = "OilBarrel",
    /** */
    UsBeerBarrels = "UsBeerBarrel",
    /** */
    ImperialBeerBarrels = "ImperialBeerBarrel",
    /** */
    UsQuarts = "UsQuart",
    /** */
    ImperialQuarts = "ImperialQuart",
    /** */
    UsPints = "UsPint",
    /** */
    AcreFeet = "AcreFoot",
    /** */
    ImperialPints = "ImperialPint",
    /** */
    BoardFeet = "BoardFoot",
    /** */
    Nanoliters = "Nanoliter",
    /** */
    Microliters = "Microliter",
    /** */
    Milliliters = "Milliliter",
    /** */
    Centiliters = "Centiliter",
    /** */
    Deciliters = "Deciliter",
    /** */
    Decaliters = "Decaliter",
    /** */
    Hectoliters = "Hectoliter",
    /** */
    Kiloliters = "Kiloliter",
    /** */
    Megaliters = "Megaliter",
    /** */
    HectocubicMeters = "HectocubicMeter",
    /** */
    KilocubicMeters = "KilocubicMeter",
    /** */
    HectocubicFeet = "HectocubicFoot",
    /** */
    KilocubicFeet = "KilocubicFoot",
    /** */
    MegacubicFeet = "MegacubicFoot",
    /** */
    KiloimperialGallons = "KiloimperialGallon",
    /** */
    MegaimperialGallons = "MegaimperialGallon",
    /** */
    DecausGallons = "DecausGallon",
    /** */
    DeciusGallons = "DeciusGallon",
    /** */
    HectousGallons = "HectousGallon",
    /** */
    KilousGallons = "KilousGallon",
    /** */
    MegausGallons = "MegausGallon"
}

/** Volume is the quantity of three-dimensional space enclosed by some closed boundary, for example, the space that a substance (solid, liquid, gas, or plasma) or shape occupies or contains.[1] Volume is often quantified numerically using the SI derived unit, the cubic metre. The volume of a container is generally understood to be the capacity of the container, i. e. the amount of fluid (gas or liquid) that the container could hold, rather than the amount of space the container itself displaces. */
export class Volume extends BaseUnit {
    private value: number;
    private litersLazy: number | null = null;
    private cubicmetersLazy: number | null = null;
    private cubickilometersLazy: number | null = null;
    private cubichectometersLazy: number | null = null;
    private cubicdecimetersLazy: number | null = null;
    private cubiccentimetersLazy: number | null = null;
    private cubicmillimetersLazy: number | null = null;
    private cubicmicrometersLazy: number | null = null;
    private cubicmilesLazy: number | null = null;
    private cubicyardsLazy: number | null = null;
    private cubicfeetLazy: number | null = null;
    private cubicinchesLazy: number | null = null;
    private imperialgallonsLazy: number | null = null;
    private imperialouncesLazy: number | null = null;
    private usgallonsLazy: number | null = null;
    private usouncesLazy: number | null = null;
    private ustablespoonsLazy: number | null = null;
    private autablespoonsLazy: number | null = null;
    private uktablespoonsLazy: number | null = null;
    private metricteaspoonsLazy: number | null = null;
    private usteaspoonsLazy: number | null = null;
    private metriccupsLazy: number | null = null;
    private uscustomarycupsLazy: number | null = null;
    private uslegalcupsLazy: number | null = null;
    private oilbarrelsLazy: number | null = null;
    private usbeerbarrelsLazy: number | null = null;
    private imperialbeerbarrelsLazy: number | null = null;
    private usquartsLazy: number | null = null;
    private imperialquartsLazy: number | null = null;
    private uspintsLazy: number | null = null;
    private acrefeetLazy: number | null = null;
    private imperialpintsLazy: number | null = null;
    private boardfeetLazy: number | null = null;
    private nanolitersLazy: number | null = null;
    private microlitersLazy: number | null = null;
    private millilitersLazy: number | null = null;
    private centilitersLazy: number | null = null;
    private decilitersLazy: number | null = null;
    private decalitersLazy: number | null = null;
    private hectolitersLazy: number | null = null;
    private kilolitersLazy: number | null = null;
    private megalitersLazy: number | null = null;
    private hectocubicmetersLazy: number | null = null;
    private kilocubicmetersLazy: number | null = null;
    private hectocubicfeetLazy: number | null = null;
    private kilocubicfeetLazy: number | null = null;
    private megacubicfeetLazy: number | null = null;
    private kiloimperialgallonsLazy: number | null = null;
    private megaimperialgallonsLazy: number | null = null;
    private decausgallonsLazy: number | null = null;
    private deciusgallonsLazy: number | null = null;
    private hectousgallonsLazy: number | null = null;
    private kilousgallonsLazy: number | null = null;
    private megausgallonsLazy: number | null = null;

    /**
     * Create a new Volume.
     * @param value The value.
     * @param fromUnit The ‘Volume’ unit to create from.
     * The default unit is CubicMeters
     */
    public constructor(value: number, fromUnit: VolumeUnits = VolumeUnits.CubicMeters) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Volume is CubicMeters.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Liters(): number {
        if(this.litersLazy !== null){
            return this.litersLazy;
        }
        return this.litersLazy = this.convertFromBase(VolumeUnits.Liters);
    }

    /** */
    public get CubicMeters(): number {
        if(this.cubicmetersLazy !== null){
            return this.cubicmetersLazy;
        }
        return this.cubicmetersLazy = this.convertFromBase(VolumeUnits.CubicMeters);
    }

    /** */
    public get CubicKilometers(): number {
        if(this.cubickilometersLazy !== null){
            return this.cubickilometersLazy;
        }
        return this.cubickilometersLazy = this.convertFromBase(VolumeUnits.CubicKilometers);
    }

    /** */
    public get CubicHectometers(): number {
        if(this.cubichectometersLazy !== null){
            return this.cubichectometersLazy;
        }
        return this.cubichectometersLazy = this.convertFromBase(VolumeUnits.CubicHectometers);
    }

    /** */
    public get CubicDecimeters(): number {
        if(this.cubicdecimetersLazy !== null){
            return this.cubicdecimetersLazy;
        }
        return this.cubicdecimetersLazy = this.convertFromBase(VolumeUnits.CubicDecimeters);
    }

    /** */
    public get CubicCentimeters(): number {
        if(this.cubiccentimetersLazy !== null){
            return this.cubiccentimetersLazy;
        }
        return this.cubiccentimetersLazy = this.convertFromBase(VolumeUnits.CubicCentimeters);
    }

    /** */
    public get CubicMillimeters(): number {
        if(this.cubicmillimetersLazy !== null){
            return this.cubicmillimetersLazy;
        }
        return this.cubicmillimetersLazy = this.convertFromBase(VolumeUnits.CubicMillimeters);
    }

    /** */
    public get CubicMicrometers(): number {
        if(this.cubicmicrometersLazy !== null){
            return this.cubicmicrometersLazy;
        }
        return this.cubicmicrometersLazy = this.convertFromBase(VolumeUnits.CubicMicrometers);
    }

    /** */
    public get CubicMiles(): number {
        if(this.cubicmilesLazy !== null){
            return this.cubicmilesLazy;
        }
        return this.cubicmilesLazy = this.convertFromBase(VolumeUnits.CubicMiles);
    }

    /** */
    public get CubicYards(): number {
        if(this.cubicyardsLazy !== null){
            return this.cubicyardsLazy;
        }
        return this.cubicyardsLazy = this.convertFromBase(VolumeUnits.CubicYards);
    }

    /** */
    public get CubicFeet(): number {
        if(this.cubicfeetLazy !== null){
            return this.cubicfeetLazy;
        }
        return this.cubicfeetLazy = this.convertFromBase(VolumeUnits.CubicFeet);
    }

    /** */
    public get CubicInches(): number {
        if(this.cubicinchesLazy !== null){
            return this.cubicinchesLazy;
        }
        return this.cubicinchesLazy = this.convertFromBase(VolumeUnits.CubicInches);
    }

    /** The British imperial gallon (frequently called simply "gallon") is defined as exactly 4.54609 litres. */
    public get ImperialGallons(): number {
        if(this.imperialgallonsLazy !== null){
            return this.imperialgallonsLazy;
        }
        return this.imperialgallonsLazy = this.convertFromBase(VolumeUnits.ImperialGallons);
    }

    /** */
    public get ImperialOunces(): number {
        if(this.imperialouncesLazy !== null){
            return this.imperialouncesLazy;
        }
        return this.imperialouncesLazy = this.convertFromBase(VolumeUnits.ImperialOunces);
    }

    /** The US liquid gallon (frequently called simply "gallon") is legally defined as 231 cubic inches, which is exactly 3.785411784 litres. */
    public get UsGallons(): number {
        if(this.usgallonsLazy !== null){
            return this.usgallonsLazy;
        }
        return this.usgallonsLazy = this.convertFromBase(VolumeUnits.UsGallons);
    }

    /** */
    public get UsOunces(): number {
        if(this.usouncesLazy !== null){
            return this.usouncesLazy;
        }
        return this.usouncesLazy = this.convertFromBase(VolumeUnits.UsOunces);
    }

    /** */
    public get UsTablespoons(): number {
        if(this.ustablespoonsLazy !== null){
            return this.ustablespoonsLazy;
        }
        return this.ustablespoonsLazy = this.convertFromBase(VolumeUnits.UsTablespoons);
    }

    /** */
    public get AuTablespoons(): number {
        if(this.autablespoonsLazy !== null){
            return this.autablespoonsLazy;
        }
        return this.autablespoonsLazy = this.convertFromBase(VolumeUnits.AuTablespoons);
    }

    /** */
    public get UkTablespoons(): number {
        if(this.uktablespoonsLazy !== null){
            return this.uktablespoonsLazy;
        }
        return this.uktablespoonsLazy = this.convertFromBase(VolumeUnits.UkTablespoons);
    }

    /** */
    public get MetricTeaspoons(): number {
        if(this.metricteaspoonsLazy !== null){
            return this.metricteaspoonsLazy;
        }
        return this.metricteaspoonsLazy = this.convertFromBase(VolumeUnits.MetricTeaspoons);
    }

    /** */
    public get UsTeaspoons(): number {
        if(this.usteaspoonsLazy !== null){
            return this.usteaspoonsLazy;
        }
        return this.usteaspoonsLazy = this.convertFromBase(VolumeUnits.UsTeaspoons);
    }

    /** */
    public get MetricCups(): number {
        if(this.metriccupsLazy !== null){
            return this.metriccupsLazy;
        }
        return this.metriccupsLazy = this.convertFromBase(VolumeUnits.MetricCups);
    }

    /** */
    public get UsCustomaryCups(): number {
        if(this.uscustomarycupsLazy !== null){
            return this.uscustomarycupsLazy;
        }
        return this.uscustomarycupsLazy = this.convertFromBase(VolumeUnits.UsCustomaryCups);
    }

    /** */
    public get UsLegalCups(): number {
        if(this.uslegalcupsLazy !== null){
            return this.uslegalcupsLazy;
        }
        return this.uslegalcupsLazy = this.convertFromBase(VolumeUnits.UsLegalCups);
    }

    /** */
    public get OilBarrels(): number {
        if(this.oilbarrelsLazy !== null){
            return this.oilbarrelsLazy;
        }
        return this.oilbarrelsLazy = this.convertFromBase(VolumeUnits.OilBarrels);
    }

    /** */
    public get UsBeerBarrels(): number {
        if(this.usbeerbarrelsLazy !== null){
            return this.usbeerbarrelsLazy;
        }
        return this.usbeerbarrelsLazy = this.convertFromBase(VolumeUnits.UsBeerBarrels);
    }

    /** */
    public get ImperialBeerBarrels(): number {
        if(this.imperialbeerbarrelsLazy !== null){
            return this.imperialbeerbarrelsLazy;
        }
        return this.imperialbeerbarrelsLazy = this.convertFromBase(VolumeUnits.ImperialBeerBarrels);
    }

    /** */
    public get UsQuarts(): number {
        if(this.usquartsLazy !== null){
            return this.usquartsLazy;
        }
        return this.usquartsLazy = this.convertFromBase(VolumeUnits.UsQuarts);
    }

    /** */
    public get ImperialQuarts(): number {
        if(this.imperialquartsLazy !== null){
            return this.imperialquartsLazy;
        }
        return this.imperialquartsLazy = this.convertFromBase(VolumeUnits.ImperialQuarts);
    }

    /** */
    public get UsPints(): number {
        if(this.uspintsLazy !== null){
            return this.uspintsLazy;
        }
        return this.uspintsLazy = this.convertFromBase(VolumeUnits.UsPints);
    }

    /** */
    public get AcreFeet(): number {
        if(this.acrefeetLazy !== null){
            return this.acrefeetLazy;
        }
        return this.acrefeetLazy = this.convertFromBase(VolumeUnits.AcreFeet);
    }

    /** */
    public get ImperialPints(): number {
        if(this.imperialpintsLazy !== null){
            return this.imperialpintsLazy;
        }
        return this.imperialpintsLazy = this.convertFromBase(VolumeUnits.ImperialPints);
    }

    /** */
    public get BoardFeet(): number {
        if(this.boardfeetLazy !== null){
            return this.boardfeetLazy;
        }
        return this.boardfeetLazy = this.convertFromBase(VolumeUnits.BoardFeet);
    }

    /** */
    public get Nanoliters(): number {
        if(this.nanolitersLazy !== null){
            return this.nanolitersLazy;
        }
        return this.nanolitersLazy = this.convertFromBase(VolumeUnits.Nanoliters);
    }

    /** */
    public get Microliters(): number {
        if(this.microlitersLazy !== null){
            return this.microlitersLazy;
        }
        return this.microlitersLazy = this.convertFromBase(VolumeUnits.Microliters);
    }

    /** */
    public get Milliliters(): number {
        if(this.millilitersLazy !== null){
            return this.millilitersLazy;
        }
        return this.millilitersLazy = this.convertFromBase(VolumeUnits.Milliliters);
    }

    /** */
    public get Centiliters(): number {
        if(this.centilitersLazy !== null){
            return this.centilitersLazy;
        }
        return this.centilitersLazy = this.convertFromBase(VolumeUnits.Centiliters);
    }

    /** */
    public get Deciliters(): number {
        if(this.decilitersLazy !== null){
            return this.decilitersLazy;
        }
        return this.decilitersLazy = this.convertFromBase(VolumeUnits.Deciliters);
    }

    /** */
    public get Decaliters(): number {
        if(this.decalitersLazy !== null){
            return this.decalitersLazy;
        }
        return this.decalitersLazy = this.convertFromBase(VolumeUnits.Decaliters);
    }

    /** */
    public get Hectoliters(): number {
        if(this.hectolitersLazy !== null){
            return this.hectolitersLazy;
        }
        return this.hectolitersLazy = this.convertFromBase(VolumeUnits.Hectoliters);
    }

    /** */
    public get Kiloliters(): number {
        if(this.kilolitersLazy !== null){
            return this.kilolitersLazy;
        }
        return this.kilolitersLazy = this.convertFromBase(VolumeUnits.Kiloliters);
    }

    /** */
    public get Megaliters(): number {
        if(this.megalitersLazy !== null){
            return this.megalitersLazy;
        }
        return this.megalitersLazy = this.convertFromBase(VolumeUnits.Megaliters);
    }

    /** */
    public get HectocubicMeters(): number {
        if(this.hectocubicmetersLazy !== null){
            return this.hectocubicmetersLazy;
        }
        return this.hectocubicmetersLazy = this.convertFromBase(VolumeUnits.HectocubicMeters);
    }

    /** */
    public get KilocubicMeters(): number {
        if(this.kilocubicmetersLazy !== null){
            return this.kilocubicmetersLazy;
        }
        return this.kilocubicmetersLazy = this.convertFromBase(VolumeUnits.KilocubicMeters);
    }

    /** */
    public get HectocubicFeet(): number {
        if(this.hectocubicfeetLazy !== null){
            return this.hectocubicfeetLazy;
        }
        return this.hectocubicfeetLazy = this.convertFromBase(VolumeUnits.HectocubicFeet);
    }

    /** */
    public get KilocubicFeet(): number {
        if(this.kilocubicfeetLazy !== null){
            return this.kilocubicfeetLazy;
        }
        return this.kilocubicfeetLazy = this.convertFromBase(VolumeUnits.KilocubicFeet);
    }

    /** */
    public get MegacubicFeet(): number {
        if(this.megacubicfeetLazy !== null){
            return this.megacubicfeetLazy;
        }
        return this.megacubicfeetLazy = this.convertFromBase(VolumeUnits.MegacubicFeet);
    }

    /** */
    public get KiloimperialGallons(): number {
        if(this.kiloimperialgallonsLazy !== null){
            return this.kiloimperialgallonsLazy;
        }
        return this.kiloimperialgallonsLazy = this.convertFromBase(VolumeUnits.KiloimperialGallons);
    }

    /** */
    public get MegaimperialGallons(): number {
        if(this.megaimperialgallonsLazy !== null){
            return this.megaimperialgallonsLazy;
        }
        return this.megaimperialgallonsLazy = this.convertFromBase(VolumeUnits.MegaimperialGallons);
    }

    /** */
    public get DecausGallons(): number {
        if(this.decausgallonsLazy !== null){
            return this.decausgallonsLazy;
        }
        return this.decausgallonsLazy = this.convertFromBase(VolumeUnits.DecausGallons);
    }

    /** */
    public get DeciusGallons(): number {
        if(this.deciusgallonsLazy !== null){
            return this.deciusgallonsLazy;
        }
        return this.deciusgallonsLazy = this.convertFromBase(VolumeUnits.DeciusGallons);
    }

    /** */
    public get HectousGallons(): number {
        if(this.hectousgallonsLazy !== null){
            return this.hectousgallonsLazy;
        }
        return this.hectousgallonsLazy = this.convertFromBase(VolumeUnits.HectousGallons);
    }

    /** */
    public get KilousGallons(): number {
        if(this.kilousgallonsLazy !== null){
            return this.kilousgallonsLazy;
        }
        return this.kilousgallonsLazy = this.convertFromBase(VolumeUnits.KilousGallons);
    }

    /** */
    public get MegausGallons(): number {
        if(this.megausgallonsLazy !== null){
            return this.megausgallonsLazy;
        }
        return this.megausgallonsLazy = this.convertFromBase(VolumeUnits.MegausGallons);
    }

    /**
     * Create a new Volume instance from a Liters
     *
     * @param value The unit as Liters to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromLiters(value: number): Volume {
        return new Volume(value, VolumeUnits.Liters);
    }

    /**
     * Create a new Volume instance from a CubicMeters
     *
     * @param value The unit as CubicMeters to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromCubicMeters(value: number): Volume {
        return new Volume(value, VolumeUnits.CubicMeters);
    }

    /**
     * Create a new Volume instance from a CubicKilometers
     *
     * @param value The unit as CubicKilometers to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromCubicKilometers(value: number): Volume {
        return new Volume(value, VolumeUnits.CubicKilometers);
    }

    /**
     * Create a new Volume instance from a CubicHectometers
     *
     * @param value The unit as CubicHectometers to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromCubicHectometers(value: number): Volume {
        return new Volume(value, VolumeUnits.CubicHectometers);
    }

    /**
     * Create a new Volume instance from a CubicDecimeters
     *
     * @param value The unit as CubicDecimeters to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromCubicDecimeters(value: number): Volume {
        return new Volume(value, VolumeUnits.CubicDecimeters);
    }

    /**
     * Create a new Volume instance from a CubicCentimeters
     *
     * @param value The unit as CubicCentimeters to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromCubicCentimeters(value: number): Volume {
        return new Volume(value, VolumeUnits.CubicCentimeters);
    }

    /**
     * Create a new Volume instance from a CubicMillimeters
     *
     * @param value The unit as CubicMillimeters to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromCubicMillimeters(value: number): Volume {
        return new Volume(value, VolumeUnits.CubicMillimeters);
    }

    /**
     * Create a new Volume instance from a CubicMicrometers
     *
     * @param value The unit as CubicMicrometers to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromCubicMicrometers(value: number): Volume {
        return new Volume(value, VolumeUnits.CubicMicrometers);
    }

    /**
     * Create a new Volume instance from a CubicMiles
     *
     * @param value The unit as CubicMiles to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromCubicMiles(value: number): Volume {
        return new Volume(value, VolumeUnits.CubicMiles);
    }

    /**
     * Create a new Volume instance from a CubicYards
     *
     * @param value The unit as CubicYards to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromCubicYards(value: number): Volume {
        return new Volume(value, VolumeUnits.CubicYards);
    }

    /**
     * Create a new Volume instance from a CubicFeet
     *
     * @param value The unit as CubicFeet to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromCubicFeet(value: number): Volume {
        return new Volume(value, VolumeUnits.CubicFeet);
    }

    /**
     * Create a new Volume instance from a CubicInches
     *
     * @param value The unit as CubicInches to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromCubicInches(value: number): Volume {
        return new Volume(value, VolumeUnits.CubicInches);
    }

    /**
     * Create a new Volume instance from a ImperialGallons
     * The British imperial gallon (frequently called simply "gallon") is defined as exactly 4.54609 litres.
     * @param value The unit as ImperialGallons to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromImperialGallons(value: number): Volume {
        return new Volume(value, VolumeUnits.ImperialGallons);
    }

    /**
     * Create a new Volume instance from a ImperialOunces
     *
     * @param value The unit as ImperialOunces to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromImperialOunces(value: number): Volume {
        return new Volume(value, VolumeUnits.ImperialOunces);
    }

    /**
     * Create a new Volume instance from a UsGallons
     * The US liquid gallon (frequently called simply "gallon") is legally defined as 231 cubic inches, which is exactly 3.785411784 litres.
     * @param value The unit as UsGallons to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromUsGallons(value: number): Volume {
        return new Volume(value, VolumeUnits.UsGallons);
    }

    /**
     * Create a new Volume instance from a UsOunces
     *
     * @param value The unit as UsOunces to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromUsOunces(value: number): Volume {
        return new Volume(value, VolumeUnits.UsOunces);
    }

    /**
     * Create a new Volume instance from a UsTablespoons
     *
     * @param value The unit as UsTablespoons to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromUsTablespoons(value: number): Volume {
        return new Volume(value, VolumeUnits.UsTablespoons);
    }

    /**
     * Create a new Volume instance from a AuTablespoons
     *
     * @param value The unit as AuTablespoons to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromAuTablespoons(value: number): Volume {
        return new Volume(value, VolumeUnits.AuTablespoons);
    }

    /**
     * Create a new Volume instance from a UkTablespoons
     *
     * @param value The unit as UkTablespoons to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromUkTablespoons(value: number): Volume {
        return new Volume(value, VolumeUnits.UkTablespoons);
    }

    /**
     * Create a new Volume instance from a MetricTeaspoons
     *
     * @param value The unit as MetricTeaspoons to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromMetricTeaspoons(value: number): Volume {
        return new Volume(value, VolumeUnits.MetricTeaspoons);
    }

    /**
     * Create a new Volume instance from a UsTeaspoons
     *
     * @param value The unit as UsTeaspoons to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromUsTeaspoons(value: number): Volume {
        return new Volume(value, VolumeUnits.UsTeaspoons);
    }

    /**
     * Create a new Volume instance from a MetricCups
     *
     * @param value The unit as MetricCups to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromMetricCups(value: number): Volume {
        return new Volume(value, VolumeUnits.MetricCups);
    }

    /**
     * Create a new Volume instance from a UsCustomaryCups
     *
     * @param value The unit as UsCustomaryCups to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromUsCustomaryCups(value: number): Volume {
        return new Volume(value, VolumeUnits.UsCustomaryCups);
    }

    /**
     * Create a new Volume instance from a UsLegalCups
     *
     * @param value The unit as UsLegalCups to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromUsLegalCups(value: number): Volume {
        return new Volume(value, VolumeUnits.UsLegalCups);
    }

    /**
     * Create a new Volume instance from a OilBarrels
     *
     * @param value The unit as OilBarrels to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromOilBarrels(value: number): Volume {
        return new Volume(value, VolumeUnits.OilBarrels);
    }

    /**
     * Create a new Volume instance from a UsBeerBarrels
     *
     * @param value The unit as UsBeerBarrels to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromUsBeerBarrels(value: number): Volume {
        return new Volume(value, VolumeUnits.UsBeerBarrels);
    }

    /**
     * Create a new Volume instance from a ImperialBeerBarrels
     *
     * @param value The unit as ImperialBeerBarrels to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromImperialBeerBarrels(value: number): Volume {
        return new Volume(value, VolumeUnits.ImperialBeerBarrels);
    }

    /**
     * Create a new Volume instance from a UsQuarts
     *
     * @param value The unit as UsQuarts to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromUsQuarts(value: number): Volume {
        return new Volume(value, VolumeUnits.UsQuarts);
    }

    /**
     * Create a new Volume instance from a ImperialQuarts
     *
     * @param value The unit as ImperialQuarts to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromImperialQuarts(value: number): Volume {
        return new Volume(value, VolumeUnits.ImperialQuarts);
    }

    /**
     * Create a new Volume instance from a UsPints
     *
     * @param value The unit as UsPints to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromUsPints(value: number): Volume {
        return new Volume(value, VolumeUnits.UsPints);
    }

    /**
     * Create a new Volume instance from a AcreFeet
     *
     * @param value The unit as AcreFeet to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromAcreFeet(value: number): Volume {
        return new Volume(value, VolumeUnits.AcreFeet);
    }

    /**
     * Create a new Volume instance from a ImperialPints
     *
     * @param value The unit as ImperialPints to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromImperialPints(value: number): Volume {
        return new Volume(value, VolumeUnits.ImperialPints);
    }

    /**
     * Create a new Volume instance from a BoardFeet
     *
     * @param value The unit as BoardFeet to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromBoardFeet(value: number): Volume {
        return new Volume(value, VolumeUnits.BoardFeet);
    }

    /**
     * Create a new Volume instance from a Nanoliters
     *
     * @param value The unit as Nanoliters to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromNanoliters(value: number): Volume {
        return new Volume(value, VolumeUnits.Nanoliters);
    }

    /**
     * Create a new Volume instance from a Microliters
     *
     * @param value The unit as Microliters to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromMicroliters(value: number): Volume {
        return new Volume(value, VolumeUnits.Microliters);
    }

    /**
     * Create a new Volume instance from a Milliliters
     *
     * @param value The unit as Milliliters to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromMilliliters(value: number): Volume {
        return new Volume(value, VolumeUnits.Milliliters);
    }

    /**
     * Create a new Volume instance from a Centiliters
     *
     * @param value The unit as Centiliters to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromCentiliters(value: number): Volume {
        return new Volume(value, VolumeUnits.Centiliters);
    }

    /**
     * Create a new Volume instance from a Deciliters
     *
     * @param value The unit as Deciliters to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromDeciliters(value: number): Volume {
        return new Volume(value, VolumeUnits.Deciliters);
    }

    /**
     * Create a new Volume instance from a Decaliters
     *
     * @param value The unit as Decaliters to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromDecaliters(value: number): Volume {
        return new Volume(value, VolumeUnits.Decaliters);
    }

    /**
     * Create a new Volume instance from a Hectoliters
     *
     * @param value The unit as Hectoliters to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromHectoliters(value: number): Volume {
        return new Volume(value, VolumeUnits.Hectoliters);
    }

    /**
     * Create a new Volume instance from a Kiloliters
     *
     * @param value The unit as Kiloliters to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromKiloliters(value: number): Volume {
        return new Volume(value, VolumeUnits.Kiloliters);
    }

    /**
     * Create a new Volume instance from a Megaliters
     *
     * @param value The unit as Megaliters to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromMegaliters(value: number): Volume {
        return new Volume(value, VolumeUnits.Megaliters);
    }

    /**
     * Create a new Volume instance from a HectocubicMeters
     *
     * @param value The unit as HectocubicMeters to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromHectocubicMeters(value: number): Volume {
        return new Volume(value, VolumeUnits.HectocubicMeters);
    }

    /**
     * Create a new Volume instance from a KilocubicMeters
     *
     * @param value The unit as KilocubicMeters to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromKilocubicMeters(value: number): Volume {
        return new Volume(value, VolumeUnits.KilocubicMeters);
    }

    /**
     * Create a new Volume instance from a HectocubicFeet
     *
     * @param value The unit as HectocubicFeet to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromHectocubicFeet(value: number): Volume {
        return new Volume(value, VolumeUnits.HectocubicFeet);
    }

    /**
     * Create a new Volume instance from a KilocubicFeet
     *
     * @param value The unit as KilocubicFeet to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromKilocubicFeet(value: number): Volume {
        return new Volume(value, VolumeUnits.KilocubicFeet);
    }

    /**
     * Create a new Volume instance from a MegacubicFeet
     *
     * @param value The unit as MegacubicFeet to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromMegacubicFeet(value: number): Volume {
        return new Volume(value, VolumeUnits.MegacubicFeet);
    }

    /**
     * Create a new Volume instance from a KiloimperialGallons
     *
     * @param value The unit as KiloimperialGallons to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromKiloimperialGallons(value: number): Volume {
        return new Volume(value, VolumeUnits.KiloimperialGallons);
    }

    /**
     * Create a new Volume instance from a MegaimperialGallons
     *
     * @param value The unit as MegaimperialGallons to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromMegaimperialGallons(value: number): Volume {
        return new Volume(value, VolumeUnits.MegaimperialGallons);
    }

    /**
     * Create a new Volume instance from a DecausGallons
     *
     * @param value The unit as DecausGallons to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromDecausGallons(value: number): Volume {
        return new Volume(value, VolumeUnits.DecausGallons);
    }

    /**
     * Create a new Volume instance from a DeciusGallons
     *
     * @param value The unit as DeciusGallons to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromDeciusGallons(value: number): Volume {
        return new Volume(value, VolumeUnits.DeciusGallons);
    }

    /**
     * Create a new Volume instance from a HectousGallons
     *
     * @param value The unit as HectousGallons to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromHectousGallons(value: number): Volume {
        return new Volume(value, VolumeUnits.HectousGallons);
    }

    /**
     * Create a new Volume instance from a KilousGallons
     *
     * @param value The unit as KilousGallons to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromKilousGallons(value: number): Volume {
        return new Volume(value, VolumeUnits.KilousGallons);
    }

    /**
     * Create a new Volume instance from a MegausGallons
     *
     * @param value The unit as MegausGallons to create a new Volume from.
     * @returns The new Volume instance.
     */
    public static FromMegausGallons(value: number): Volume {
        return new Volume(value, VolumeUnits.MegausGallons);
    }

    /**
     * Create API DTO represent a Volume unit.
     * @param holdInUnit The specific Volume unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: VolumeUnits = VolumeUnits.CubicMeters): VolumeDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Volume unit from an API DTO representation.
     * @param dtoVolume The Volume API DTO representation
     */
    public static FromDto(dtoVolume: VolumeDto): Volume {
        return new Volume(dtoVolume.value, dtoVolume.unit);
    }

    /**
     * Convert Volume to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: VolumeUnits): number {
        switch (toUnit) {
            case VolumeUnits.Liters: return this.Liters;
            case VolumeUnits.CubicMeters: return this.CubicMeters;
            case VolumeUnits.CubicKilometers: return this.CubicKilometers;
            case VolumeUnits.CubicHectometers: return this.CubicHectometers;
            case VolumeUnits.CubicDecimeters: return this.CubicDecimeters;
            case VolumeUnits.CubicCentimeters: return this.CubicCentimeters;
            case VolumeUnits.CubicMillimeters: return this.CubicMillimeters;
            case VolumeUnits.CubicMicrometers: return this.CubicMicrometers;
            case VolumeUnits.CubicMiles: return this.CubicMiles;
            case VolumeUnits.CubicYards: return this.CubicYards;
            case VolumeUnits.CubicFeet: return this.CubicFeet;
            case VolumeUnits.CubicInches: return this.CubicInches;
            case VolumeUnits.ImperialGallons: return this.ImperialGallons;
            case VolumeUnits.ImperialOunces: return this.ImperialOunces;
            case VolumeUnits.UsGallons: return this.UsGallons;
            case VolumeUnits.UsOunces: return this.UsOunces;
            case VolumeUnits.UsTablespoons: return this.UsTablespoons;
            case VolumeUnits.AuTablespoons: return this.AuTablespoons;
            case VolumeUnits.UkTablespoons: return this.UkTablespoons;
            case VolumeUnits.MetricTeaspoons: return this.MetricTeaspoons;
            case VolumeUnits.UsTeaspoons: return this.UsTeaspoons;
            case VolumeUnits.MetricCups: return this.MetricCups;
            case VolumeUnits.UsCustomaryCups: return this.UsCustomaryCups;
            case VolumeUnits.UsLegalCups: return this.UsLegalCups;
            case VolumeUnits.OilBarrels: return this.OilBarrels;
            case VolumeUnits.UsBeerBarrels: return this.UsBeerBarrels;
            case VolumeUnits.ImperialBeerBarrels: return this.ImperialBeerBarrels;
            case VolumeUnits.UsQuarts: return this.UsQuarts;
            case VolumeUnits.ImperialQuarts: return this.ImperialQuarts;
            case VolumeUnits.UsPints: return this.UsPints;
            case VolumeUnits.AcreFeet: return this.AcreFeet;
            case VolumeUnits.ImperialPints: return this.ImperialPints;
            case VolumeUnits.BoardFeet: return this.BoardFeet;
            case VolumeUnits.Nanoliters: return this.Nanoliters;
            case VolumeUnits.Microliters: return this.Microliters;
            case VolumeUnits.Milliliters: return this.Milliliters;
            case VolumeUnits.Centiliters: return this.Centiliters;
            case VolumeUnits.Deciliters: return this.Deciliters;
            case VolumeUnits.Decaliters: return this.Decaliters;
            case VolumeUnits.Hectoliters: return this.Hectoliters;
            case VolumeUnits.Kiloliters: return this.Kiloliters;
            case VolumeUnits.Megaliters: return this.Megaliters;
            case VolumeUnits.HectocubicMeters: return this.HectocubicMeters;
            case VolumeUnits.KilocubicMeters: return this.KilocubicMeters;
            case VolumeUnits.HectocubicFeet: return this.HectocubicFeet;
            case VolumeUnits.KilocubicFeet: return this.KilocubicFeet;
            case VolumeUnits.MegacubicFeet: return this.MegacubicFeet;
            case VolumeUnits.KiloimperialGallons: return this.KiloimperialGallons;
            case VolumeUnits.MegaimperialGallons: return this.MegaimperialGallons;
            case VolumeUnits.DecausGallons: return this.DecausGallons;
            case VolumeUnits.DeciusGallons: return this.DeciusGallons;
            case VolumeUnits.HectousGallons: return this.HectousGallons;
            case VolumeUnits.KilousGallons: return this.KilousGallons;
            case VolumeUnits.MegausGallons: return this.MegausGallons;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: VolumeUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case VolumeUnits.Liters: return super.internalMultiply(this.value, 1e3);
                case VolumeUnits.CubicMeters: return this.value;
                case VolumeUnits.CubicKilometers: return super.internalDivide(this.value, 1e9);
                case VolumeUnits.CubicHectometers: return super.internalDivide(this.value, 1e6);
                case VolumeUnits.CubicDecimeters: return super.internalMultiply(this.value, 1e3);
                case VolumeUnits.CubicCentimeters: return super.internalMultiply(this.value, 1e6);
                case VolumeUnits.CubicMillimeters: return super.internalMultiply(this.value, 1e9);
                case VolumeUnits.CubicMicrometers: return super.internalMultiply(this.value, 1e18);
                case VolumeUnits.CubicMiles: return super.internalDivide(this.value, 4.16818182544058e9);
                case VolumeUnits.CubicYards: return super.internalDivide(this.value, 0.764554858);
                case VolumeUnits.CubicFeet: return super.internalDivide(this.value, 2.8316846592e-2);
                case VolumeUnits.CubicInches: return super.internalDivide(this.value, 1.6387064e-5);
                case VolumeUnits.ImperialGallons: return super.internalDivide(this.value, 0.00454609);
                case VolumeUnits.ImperialOunces: return super.internalDivide(this.value, 2.8413062499962901241875439064617e-5);
                case VolumeUnits.UsGallons: return super.internalDivide(this.value, 0.003785411784);
                case VolumeUnits.UsOunces: return super.internalDivide(this.value, 2.957352956253760505068307980135e-5);
                case VolumeUnits.UsTablespoons: return super.internalDivide(this.value, 1.478676478125e-5);
                case VolumeUnits.AuTablespoons: return super.internalDivide(this.value, 2e-5);
                case VolumeUnits.UkTablespoons: return super.internalDivide(this.value, 1.5e-5);
                case VolumeUnits.MetricTeaspoons: return super.internalDivide(this.value, 0.5e-5);
                case VolumeUnits.UsTeaspoons: return super.internalDivide(this.value, 4.92892159375e-6);
                case VolumeUnits.MetricCups: return super.internalDivide(this.value, 0.00025);
                case VolumeUnits.UsCustomaryCups: return super.internalDivide(this.value, 0.0002365882365);
                case VolumeUnits.UsLegalCups: return super.internalDivide(this.value, 0.00024);
                case VolumeUnits.OilBarrels: return super.internalDivide(this.value, 0.158987294928);
                case VolumeUnits.UsBeerBarrels: return super.internalDivide(this.value, 0.1173477658);
                case VolumeUnits.ImperialBeerBarrels: return super.internalDivide(this.value, 0.16365924);
                case VolumeUnits.UsQuarts: return super.internalDivide(this.value, 9.46352946e-4);
                case VolumeUnits.ImperialQuarts: return super.internalDivide(this.value, 1.1365225e-3);
                case VolumeUnits.UsPints: return super.internalDivide(this.value, 4.73176473e-4);
                case VolumeUnits.AcreFeet: return super.internalMultiply(this.value, 0.000810714);
                case VolumeUnits.ImperialPints: return super.internalDivide(this.value, 5.6826125e-4);
                case VolumeUnits.BoardFeet: return super.internalDivide(this.value, 2.3597372158e-3);
                case VolumeUnits.Nanoliters: {
                    const value3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(value3, 1e-9);
                }
                case VolumeUnits.Microliters: {
                    const value3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(value3, 0.000001);
                }
                case VolumeUnits.Milliliters: {
                    const value3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(value3, 0.001);
                }
                case VolumeUnits.Centiliters: {
                    const value3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(value3, 0.01);
                }
                case VolumeUnits.Deciliters: {
                    const value3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(value3, 0.1);
                }
                case VolumeUnits.Decaliters: {
                    const value3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(value3, 10);
                }
                case VolumeUnits.Hectoliters: {
                    const value3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(value3, 100);
                }
                case VolumeUnits.Kiloliters: {
                    const value3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(value3, 1000);
                }
                case VolumeUnits.Megaliters: {
                    const value3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(value3, 1000000);
                }
                case VolumeUnits.HectocubicMeters: return super.internalDivide(this.value, 100);
                case VolumeUnits.KilocubicMeters: return super.internalDivide(this.value, 1000);
                case VolumeUnits.HectocubicFeet: {
                    const value3 = super.internalDivide(this.value, 2.8316846592e-2);
                    return super.internalDivide(value3, 100);
                }
                case VolumeUnits.KilocubicFeet: {
                    const value3 = super.internalDivide(this.value, 2.8316846592e-2);
                    return super.internalDivide(value3, 1000);
                }
                case VolumeUnits.MegacubicFeet: {
                    const value3 = super.internalDivide(this.value, 2.8316846592e-2);
                    return super.internalDivide(value3, 1000000);
                }
                case VolumeUnits.KiloimperialGallons: {
                    const value3 = super.internalDivide(this.value, 0.00454609);
                    return super.internalDivide(value3, 1000);
                }
                case VolumeUnits.MegaimperialGallons: {
                    const value3 = super.internalDivide(this.value, 0.00454609);
                    return super.internalDivide(value3, 1000000);
                }
                case VolumeUnits.DecausGallons: {
                    const value3 = super.internalDivide(this.value, 0.003785411784);
                    return super.internalDivide(value3, 10);
                }
                case VolumeUnits.DeciusGallons: {
                    const value3 = super.internalDivide(this.value, 0.003785411784);
                    return super.internalDivide(value3, 0.1);
                }
                case VolumeUnits.HectousGallons: {
                    const value3 = super.internalDivide(this.value, 0.003785411784);
                    return super.internalDivide(value3, 100);
                }
                case VolumeUnits.KilousGallons: {
                    const value3 = super.internalDivide(this.value, 0.003785411784);
                    return super.internalDivide(value3, 1000);
                }
                case VolumeUnits.MegausGallons: {
                    const value3 = super.internalDivide(this.value, 0.003785411784);
                    return super.internalDivide(value3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case VolumeUnits.Liters: return this.value * 1e3;
            case VolumeUnits.CubicMeters: return this.value;
            case VolumeUnits.CubicKilometers: return this.value / 1e9;
            case VolumeUnits.CubicHectometers: return this.value / 1e6;
            case VolumeUnits.CubicDecimeters: return this.value * 1e3;
            case VolumeUnits.CubicCentimeters: return this.value * 1e6;
            case VolumeUnits.CubicMillimeters: return this.value * 1e9;
            case VolumeUnits.CubicMicrometers: return this.value * 1e18;
            case VolumeUnits.CubicMiles: return this.value / 4.16818182544058e9;
            case VolumeUnits.CubicYards: return this.value / 0.764554858;
            case VolumeUnits.CubicFeet: return this.value / 2.8316846592e-2;
            case VolumeUnits.CubicInches: return this.value / 1.6387064e-5;
            case VolumeUnits.ImperialGallons: return this.value / 0.00454609;
            case VolumeUnits.ImperialOunces: return this.value / 2.8413062499962901241875439064617e-5;
            case VolumeUnits.UsGallons: return this.value / 0.003785411784;
            case VolumeUnits.UsOunces: return this.value / 2.957352956253760505068307980135e-5;
            case VolumeUnits.UsTablespoons: return this.value / 1.478676478125e-5;
            case VolumeUnits.AuTablespoons: return this.value / 2e-5;
            case VolumeUnits.UkTablespoons: return this.value / 1.5e-5;
            case VolumeUnits.MetricTeaspoons: return this.value / 0.5e-5;
            case VolumeUnits.UsTeaspoons: return this.value / 4.92892159375e-6;
            case VolumeUnits.MetricCups: return this.value / 0.00025;
            case VolumeUnits.UsCustomaryCups: return this.value / 0.0002365882365;
            case VolumeUnits.UsLegalCups: return this.value / 0.00024;
            case VolumeUnits.OilBarrels: return this.value / 0.158987294928;
            case VolumeUnits.UsBeerBarrels: return this.value / 0.1173477658;
            case VolumeUnits.ImperialBeerBarrels: return this.value / 0.16365924;
            case VolumeUnits.UsQuarts: return this.value / 9.46352946e-4;
            case VolumeUnits.ImperialQuarts: return this.value / 1.1365225e-3;
            case VolumeUnits.UsPints: return this.value / 4.73176473e-4;
            case VolumeUnits.AcreFeet: return this.value * 0.000810714;
            case VolumeUnits.ImperialPints: return this.value / 5.6826125e-4;
            case VolumeUnits.BoardFeet: return this.value / 2.3597372158e-3;
            case VolumeUnits.Nanoliters: return (this.value * 1e3) / 1e-9;
            case VolumeUnits.Microliters: return (this.value * 1e3) / 0.000001;
            case VolumeUnits.Milliliters: return (this.value * 1e3) / 0.001;
            case VolumeUnits.Centiliters: return (this.value * 1e3) / 0.01;
            case VolumeUnits.Deciliters: return (this.value * 1e3) / 0.1;
            case VolumeUnits.Decaliters: return (this.value * 1e3) / 10;
            case VolumeUnits.Hectoliters: return (this.value * 1e3) / 100;
            case VolumeUnits.Kiloliters: return (this.value * 1e3) / 1000;
            case VolumeUnits.Megaliters: return (this.value * 1e3) / 1000000;
            case VolumeUnits.HectocubicMeters: return (this.value) / 100;
            case VolumeUnits.KilocubicMeters: return (this.value) / 1000;
            case VolumeUnits.HectocubicFeet: return (this.value / 2.8316846592e-2) / 100;
            case VolumeUnits.KilocubicFeet: return (this.value / 2.8316846592e-2) / 1000;
            case VolumeUnits.MegacubicFeet: return (this.value / 2.8316846592e-2) / 1000000;
            case VolumeUnits.KiloimperialGallons: return (this.value / 0.00454609) / 1000;
            case VolumeUnits.MegaimperialGallons: return (this.value / 0.00454609) / 1000000;
            case VolumeUnits.DecausGallons: return (this.value / 0.003785411784) / 10;
            case VolumeUnits.DeciusGallons: return (this.value / 0.003785411784) / 0.1;
            case VolumeUnits.HectousGallons: return (this.value / 0.003785411784) / 100;
            case VolumeUnits.KilousGallons: return (this.value / 0.003785411784) / 1000;
            case VolumeUnits.MegausGallons: return (this.value / 0.003785411784) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: VolumeUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case VolumeUnits.Liters: return super.internalDivide(value, 1e3);
                case VolumeUnits.CubicMeters: return value;
                case VolumeUnits.CubicKilometers: return super.internalMultiply(value, 1e9);
                case VolumeUnits.CubicHectometers: return super.internalMultiply(value, 1e6);
                case VolumeUnits.CubicDecimeters: return super.internalDivide(value, 1e3);
                case VolumeUnits.CubicCentimeters: return super.internalDivide(value, 1e6);
                case VolumeUnits.CubicMillimeters: return super.internalDivide(value, 1e9);
                case VolumeUnits.CubicMicrometers: return super.internalDivide(value, 1e18);
                case VolumeUnits.CubicMiles: return super.internalMultiply(value, 4.16818182544058e9);
                case VolumeUnits.CubicYards: return super.internalMultiply(value, 0.764554858);
                case VolumeUnits.CubicFeet: return super.internalMultiply(value, 2.8316846592e-2);
                case VolumeUnits.CubicInches: return super.internalMultiply(value, 1.6387064e-5);
                case VolumeUnits.ImperialGallons: return super.internalMultiply(value, 0.00454609);
                case VolumeUnits.ImperialOunces: return super.internalMultiply(value, 2.8413062499962901241875439064617e-5);
                case VolumeUnits.UsGallons: return super.internalMultiply(value, 0.003785411784);
                case VolumeUnits.UsOunces: return super.internalMultiply(value, 2.957352956253760505068307980135e-5);
                case VolumeUnits.UsTablespoons: return super.internalMultiply(value, 1.478676478125e-5);
                case VolumeUnits.AuTablespoons: return super.internalMultiply(value, 2e-5);
                case VolumeUnits.UkTablespoons: return super.internalMultiply(value, 1.5e-5);
                case VolumeUnits.MetricTeaspoons: return super.internalMultiply(value, 0.5e-5);
                case VolumeUnits.UsTeaspoons: return super.internalMultiply(value, 4.92892159375e-6);
                case VolumeUnits.MetricCups: return super.internalMultiply(value, 0.00025);
                case VolumeUnits.UsCustomaryCups: return super.internalMultiply(value, 0.0002365882365);
                case VolumeUnits.UsLegalCups: return super.internalMultiply(value, 0.00024);
                case VolumeUnits.OilBarrels: return super.internalMultiply(value, 0.158987294928);
                case VolumeUnits.UsBeerBarrels: return super.internalMultiply(value, 0.1173477658);
                case VolumeUnits.ImperialBeerBarrels: return super.internalMultiply(value, 0.16365924);
                case VolumeUnits.UsQuarts: return super.internalMultiply(value, 9.46352946e-4);
                case VolumeUnits.ImperialQuarts: return super.internalMultiply(value, 1.1365225e-3);
                case VolumeUnits.UsPints: return super.internalMultiply(value, 4.73176473e-4);
                case VolumeUnits.AcreFeet: return super.internalDivide(value, 0.000810714);
                case VolumeUnits.ImperialPints: return super.internalMultiply(value, 5.6826125e-4);
                case VolumeUnits.BoardFeet: return super.internalMultiply(value, 2.3597372158e-3);
                case VolumeUnits.Nanoliters: {
                    const value3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(value3, 1e-9);
                }
                case VolumeUnits.Microliters: {
                    const value3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(value3, 0.000001);
                }
                case VolumeUnits.Milliliters: {
                    const value3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(value3, 0.001);
                }
                case VolumeUnits.Centiliters: {
                    const value3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(value3, 0.01);
                }
                case VolumeUnits.Deciliters: {
                    const value3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(value3, 0.1);
                }
                case VolumeUnits.Decaliters: {
                    const value3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(value3, 10);
                }
                case VolumeUnits.Hectoliters: {
                    const value3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(value3, 100);
                }
                case VolumeUnits.Kiloliters: {
                    const value3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(value3, 1000);
                }
                case VolumeUnits.Megaliters: {
                    const value3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(value3, 1000000);
                }
                case VolumeUnits.HectocubicMeters: return super.internalMultiply(value, 100);
                case VolumeUnits.KilocubicMeters: return super.internalMultiply(value, 1000);
                case VolumeUnits.HectocubicFeet: {
                    const value3 = super.internalMultiply(value, 2.8316846592e-2);
                    return super.internalMultiply(value3, 100);
                }
                case VolumeUnits.KilocubicFeet: {
                    const value3 = super.internalMultiply(value, 2.8316846592e-2);
                    return super.internalMultiply(value3, 1000);
                }
                case VolumeUnits.MegacubicFeet: {
                    const value3 = super.internalMultiply(value, 2.8316846592e-2);
                    return super.internalMultiply(value3, 1000000);
                }
                case VolumeUnits.KiloimperialGallons: {
                    const value3 = super.internalMultiply(value, 0.00454609);
                    return super.internalMultiply(value3, 1000);
                }
                case VolumeUnits.MegaimperialGallons: {
                    const value3 = super.internalMultiply(value, 0.00454609);
                    return super.internalMultiply(value3, 1000000);
                }
                case VolumeUnits.DecausGallons: {
                    const value3 = super.internalMultiply(value, 0.003785411784);
                    return super.internalMultiply(value3, 10);
                }
                case VolumeUnits.DeciusGallons: {
                    const value3 = super.internalMultiply(value, 0.003785411784);
                    return super.internalMultiply(value3, 0.1);
                }
                case VolumeUnits.HectousGallons: {
                    const value3 = super.internalMultiply(value, 0.003785411784);
                    return super.internalMultiply(value3, 100);
                }
                case VolumeUnits.KilousGallons: {
                    const value3 = super.internalMultiply(value, 0.003785411784);
                    return super.internalMultiply(value3, 1000);
                }
                case VolumeUnits.MegausGallons: {
                    const value3 = super.internalMultiply(value, 0.003785411784);
                    return super.internalMultiply(value3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case VolumeUnits.Liters: return value / 1e3;
            case VolumeUnits.CubicMeters: return value;
            case VolumeUnits.CubicKilometers: return value * 1e9;
            case VolumeUnits.CubicHectometers: return value * 1e6;
            case VolumeUnits.CubicDecimeters: return value / 1e3;
            case VolumeUnits.CubicCentimeters: return value / 1e6;
            case VolumeUnits.CubicMillimeters: return value / 1e9;
            case VolumeUnits.CubicMicrometers: return value / 1e18;
            case VolumeUnits.CubicMiles: return value * 4.16818182544058e9;
            case VolumeUnits.CubicYards: return value * 0.764554858;
            case VolumeUnits.CubicFeet: return value * 2.8316846592e-2;
            case VolumeUnits.CubicInches: return value * 1.6387064e-5;
            case VolumeUnits.ImperialGallons: return value * 0.00454609;
            case VolumeUnits.ImperialOunces: return value * 2.8413062499962901241875439064617e-5;
            case VolumeUnits.UsGallons: return value * 0.003785411784;
            case VolumeUnits.UsOunces: return value * 2.957352956253760505068307980135e-5;
            case VolumeUnits.UsTablespoons: return value * 1.478676478125e-5;
            case VolumeUnits.AuTablespoons: return value * 2e-5;
            case VolumeUnits.UkTablespoons: return value * 1.5e-5;
            case VolumeUnits.MetricTeaspoons: return value * 0.5e-5;
            case VolumeUnits.UsTeaspoons: return value * 4.92892159375e-6;
            case VolumeUnits.MetricCups: return value * 0.00025;
            case VolumeUnits.UsCustomaryCups: return value * 0.0002365882365;
            case VolumeUnits.UsLegalCups: return value * 0.00024;
            case VolumeUnits.OilBarrels: return value * 0.158987294928;
            case VolumeUnits.UsBeerBarrels: return value * 0.1173477658;
            case VolumeUnits.ImperialBeerBarrels: return value * 0.16365924;
            case VolumeUnits.UsQuarts: return value * 9.46352946e-4;
            case VolumeUnits.ImperialQuarts: return value * 1.1365225e-3;
            case VolumeUnits.UsPints: return value * 4.73176473e-4;
            case VolumeUnits.AcreFeet: return value / 0.000810714;
            case VolumeUnits.ImperialPints: return value * 5.6826125e-4;
            case VolumeUnits.BoardFeet: return value * 2.3597372158e-3;
            case VolumeUnits.Nanoliters: return (value / 1e3) * 1e-9;
            case VolumeUnits.Microliters: return (value / 1e3) * 0.000001;
            case VolumeUnits.Milliliters: return (value / 1e3) * 0.001;
            case VolumeUnits.Centiliters: return (value / 1e3) * 0.01;
            case VolumeUnits.Deciliters: return (value / 1e3) * 0.1;
            case VolumeUnits.Decaliters: return (value / 1e3) * 10;
            case VolumeUnits.Hectoliters: return (value / 1e3) * 100;
            case VolumeUnits.Kiloliters: return (value / 1e3) * 1000;
            case VolumeUnits.Megaliters: return (value / 1e3) * 1000000;
            case VolumeUnits.HectocubicMeters: return (value) * 100;
            case VolumeUnits.KilocubicMeters: return (value) * 1000;
            case VolumeUnits.HectocubicFeet: return (value * 2.8316846592e-2) * 100;
            case VolumeUnits.KilocubicFeet: return (value * 2.8316846592e-2) * 1000;
            case VolumeUnits.MegacubicFeet: return (value * 2.8316846592e-2) * 1000000;
            case VolumeUnits.KiloimperialGallons: return (value * 0.00454609) * 1000;
            case VolumeUnits.MegaimperialGallons: return (value * 0.00454609) * 1000000;
            case VolumeUnits.DecausGallons: return (value * 0.003785411784) * 10;
            case VolumeUnits.DeciusGallons: return (value * 0.003785411784) * 0.1;
            case VolumeUnits.HectousGallons: return (value * 0.003785411784) * 100;
            case VolumeUnits.KilousGallons: return (value * 0.003785411784) * 1000;
            case VolumeUnits.MegausGallons: return (value * 0.003785411784) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the Volume to string.
     * Note! the default format for Volume is CubicMeters.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Volume.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the Volume.
     */
    public toString(unit: VolumeUnits = VolumeUnits.CubicMeters, fractionalDigits?: number): string {

        switch (unit) {
            
            case VolumeUnits.Liters:
                return super.truncateFractionDigits(this.Liters, fractionalDigits) + ` l`;
            case VolumeUnits.CubicMeters:
                return super.truncateFractionDigits(this.CubicMeters, fractionalDigits) + ` m³`;
            case VolumeUnits.CubicKilometers:
                return super.truncateFractionDigits(this.CubicKilometers, fractionalDigits) + ` km³`;
            case VolumeUnits.CubicHectometers:
                return super.truncateFractionDigits(this.CubicHectometers, fractionalDigits) + ` hm³`;
            case VolumeUnits.CubicDecimeters:
                return super.truncateFractionDigits(this.CubicDecimeters, fractionalDigits) + ` dm³`;
            case VolumeUnits.CubicCentimeters:
                return super.truncateFractionDigits(this.CubicCentimeters, fractionalDigits) + ` cm³`;
            case VolumeUnits.CubicMillimeters:
                return super.truncateFractionDigits(this.CubicMillimeters, fractionalDigits) + ` mm³`;
            case VolumeUnits.CubicMicrometers:
                return super.truncateFractionDigits(this.CubicMicrometers, fractionalDigits) + ` µm³`;
            case VolumeUnits.CubicMiles:
                return super.truncateFractionDigits(this.CubicMiles, fractionalDigits) + ` mi³`;
            case VolumeUnits.CubicYards:
                return super.truncateFractionDigits(this.CubicYards, fractionalDigits) + ` yd³`;
            case VolumeUnits.CubicFeet:
                return super.truncateFractionDigits(this.CubicFeet, fractionalDigits) + ` ft³`;
            case VolumeUnits.CubicInches:
                return super.truncateFractionDigits(this.CubicInches, fractionalDigits) + ` in³`;
            case VolumeUnits.ImperialGallons:
                return super.truncateFractionDigits(this.ImperialGallons, fractionalDigits) + ` gal (imp.)`;
            case VolumeUnits.ImperialOunces:
                return super.truncateFractionDigits(this.ImperialOunces, fractionalDigits) + ` oz (imp.)`;
            case VolumeUnits.UsGallons:
                return super.truncateFractionDigits(this.UsGallons, fractionalDigits) + ` gal (U.S.)`;
            case VolumeUnits.UsOunces:
                return super.truncateFractionDigits(this.UsOunces, fractionalDigits) + ` oz (U.S.)`;
            case VolumeUnits.UsTablespoons:
                return super.truncateFractionDigits(this.UsTablespoons, fractionalDigits) + ` undefined`;
            case VolumeUnits.AuTablespoons:
                return super.truncateFractionDigits(this.AuTablespoons, fractionalDigits) + ` undefined`;
            case VolumeUnits.UkTablespoons:
                return super.truncateFractionDigits(this.UkTablespoons, fractionalDigits) + ` undefined`;
            case VolumeUnits.MetricTeaspoons:
                return super.truncateFractionDigits(this.MetricTeaspoons, fractionalDigits) + ` tsp`;
            case VolumeUnits.UsTeaspoons:
                return super.truncateFractionDigits(this.UsTeaspoons, fractionalDigits) + ` undefined`;
            case VolumeUnits.MetricCups:
                return super.truncateFractionDigits(this.MetricCups, fractionalDigits) + ` undefined`;
            case VolumeUnits.UsCustomaryCups:
                return super.truncateFractionDigits(this.UsCustomaryCups, fractionalDigits) + ` undefined`;
            case VolumeUnits.UsLegalCups:
                return super.truncateFractionDigits(this.UsLegalCups, fractionalDigits) + ` undefined`;
            case VolumeUnits.OilBarrels:
                return super.truncateFractionDigits(this.OilBarrels, fractionalDigits) + ` bbl`;
            case VolumeUnits.UsBeerBarrels:
                return super.truncateFractionDigits(this.UsBeerBarrels, fractionalDigits) + ` bl (U.S.)`;
            case VolumeUnits.ImperialBeerBarrels:
                return super.truncateFractionDigits(this.ImperialBeerBarrels, fractionalDigits) + ` bl (imp.)`;
            case VolumeUnits.UsQuarts:
                return super.truncateFractionDigits(this.UsQuarts, fractionalDigits) + ` qt (U.S.)`;
            case VolumeUnits.ImperialQuarts:
                return super.truncateFractionDigits(this.ImperialQuarts, fractionalDigits) + ` qt (imp.)`;
            case VolumeUnits.UsPints:
                return super.truncateFractionDigits(this.UsPints, fractionalDigits) + ` pt (U.S.)`;
            case VolumeUnits.AcreFeet:
                return super.truncateFractionDigits(this.AcreFeet, fractionalDigits) + ` ac-ft`;
            case VolumeUnits.ImperialPints:
                return super.truncateFractionDigits(this.ImperialPints, fractionalDigits) + ` pt (imp.)`;
            case VolumeUnits.BoardFeet:
                return super.truncateFractionDigits(this.BoardFeet, fractionalDigits) + ` bf`;
            case VolumeUnits.Nanoliters:
                return super.truncateFractionDigits(this.Nanoliters, fractionalDigits) + ` nl`;
            case VolumeUnits.Microliters:
                return super.truncateFractionDigits(this.Microliters, fractionalDigits) + ` μl`;
            case VolumeUnits.Milliliters:
                return super.truncateFractionDigits(this.Milliliters, fractionalDigits) + ` ml`;
            case VolumeUnits.Centiliters:
                return super.truncateFractionDigits(this.Centiliters, fractionalDigits) + ` cl`;
            case VolumeUnits.Deciliters:
                return super.truncateFractionDigits(this.Deciliters, fractionalDigits) + ` dl`;
            case VolumeUnits.Decaliters:
                return super.truncateFractionDigits(this.Decaliters, fractionalDigits) + ` dal`;
            case VolumeUnits.Hectoliters:
                return super.truncateFractionDigits(this.Hectoliters, fractionalDigits) + ` hl`;
            case VolumeUnits.Kiloliters:
                return super.truncateFractionDigits(this.Kiloliters, fractionalDigits) + ` kl`;
            case VolumeUnits.Megaliters:
                return super.truncateFractionDigits(this.Megaliters, fractionalDigits) + ` Ml`;
            case VolumeUnits.HectocubicMeters:
                return super.truncateFractionDigits(this.HectocubicMeters, fractionalDigits) + ` hm³`;
            case VolumeUnits.KilocubicMeters:
                return super.truncateFractionDigits(this.KilocubicMeters, fractionalDigits) + ` km³`;
            case VolumeUnits.HectocubicFeet:
                return super.truncateFractionDigits(this.HectocubicFeet, fractionalDigits) + ` hft³`;
            case VolumeUnits.KilocubicFeet:
                return super.truncateFractionDigits(this.KilocubicFeet, fractionalDigits) + ` kft³`;
            case VolumeUnits.MegacubicFeet:
                return super.truncateFractionDigits(this.MegacubicFeet, fractionalDigits) + ` Mft³`;
            case VolumeUnits.KiloimperialGallons:
                return super.truncateFractionDigits(this.KiloimperialGallons, fractionalDigits) + ` kgal (imp.)`;
            case VolumeUnits.MegaimperialGallons:
                return super.truncateFractionDigits(this.MegaimperialGallons, fractionalDigits) + ` Mgal (imp.)`;
            case VolumeUnits.DecausGallons:
                return super.truncateFractionDigits(this.DecausGallons, fractionalDigits) + ` dagal (U.S.)`;
            case VolumeUnits.DeciusGallons:
                return super.truncateFractionDigits(this.DeciusGallons, fractionalDigits) + ` dgal (U.S.)`;
            case VolumeUnits.HectousGallons:
                return super.truncateFractionDigits(this.HectousGallons, fractionalDigits) + ` hgal (U.S.)`;
            case VolumeUnits.KilousGallons:
                return super.truncateFractionDigits(this.KilousGallons, fractionalDigits) + ` kgal (U.S.)`;
            case VolumeUnits.MegausGallons:
                return super.truncateFractionDigits(this.MegausGallons, fractionalDigits) + ` Mgal (U.S.)`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Volume unit abbreviation.
     * Note! the default abbreviation for Volume is CubicMeters.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Volume.
     * @returns The abbreviation string of Volume.
     */
    public getUnitAbbreviation(unitAbbreviation: VolumeUnits = VolumeUnits.CubicMeters): string {

        switch (unitAbbreviation) {
            
            case VolumeUnits.Liters:
                return `l`;
            case VolumeUnits.CubicMeters:
                return `m³`;
            case VolumeUnits.CubicKilometers:
                return `km³`;
            case VolumeUnits.CubicHectometers:
                return `hm³`;
            case VolumeUnits.CubicDecimeters:
                return `dm³`;
            case VolumeUnits.CubicCentimeters:
                return `cm³`;
            case VolumeUnits.CubicMillimeters:
                return `mm³`;
            case VolumeUnits.CubicMicrometers:
                return `µm³`;
            case VolumeUnits.CubicMiles:
                return `mi³`;
            case VolumeUnits.CubicYards:
                return `yd³`;
            case VolumeUnits.CubicFeet:
                return `ft³`;
            case VolumeUnits.CubicInches:
                return `in³`;
            case VolumeUnits.ImperialGallons:
                return `gal (imp.)`;
            case VolumeUnits.ImperialOunces:
                return `oz (imp.)`;
            case VolumeUnits.UsGallons:
                return `gal (U.S.)`;
            case VolumeUnits.UsOunces:
                return `oz (U.S.)`;
            case VolumeUnits.UsTablespoons:
                return `undefined`;
            case VolumeUnits.AuTablespoons:
                return `undefined`;
            case VolumeUnits.UkTablespoons:
                return `undefined`;
            case VolumeUnits.MetricTeaspoons:
                return `tsp`;
            case VolumeUnits.UsTeaspoons:
                return `undefined`;
            case VolumeUnits.MetricCups:
                return `undefined`;
            case VolumeUnits.UsCustomaryCups:
                return `undefined`;
            case VolumeUnits.UsLegalCups:
                return `undefined`;
            case VolumeUnits.OilBarrels:
                return `bbl`;
            case VolumeUnits.UsBeerBarrels:
                return `bl (U.S.)`;
            case VolumeUnits.ImperialBeerBarrels:
                return `bl (imp.)`;
            case VolumeUnits.UsQuarts:
                return `qt (U.S.)`;
            case VolumeUnits.ImperialQuarts:
                return `qt (imp.)`;
            case VolumeUnits.UsPints:
                return `pt (U.S.)`;
            case VolumeUnits.AcreFeet:
                return `ac-ft`;
            case VolumeUnits.ImperialPints:
                return `pt (imp.)`;
            case VolumeUnits.BoardFeet:
                return `bf`;
            case VolumeUnits.Nanoliters:
                return `nl`;
            case VolumeUnits.Microliters:
                return `μl`;
            case VolumeUnits.Milliliters:
                return `ml`;
            case VolumeUnits.Centiliters:
                return `cl`;
            case VolumeUnits.Deciliters:
                return `dl`;
            case VolumeUnits.Decaliters:
                return `dal`;
            case VolumeUnits.Hectoliters:
                return `hl`;
            case VolumeUnits.Kiloliters:
                return `kl`;
            case VolumeUnits.Megaliters:
                return `Ml`;
            case VolumeUnits.HectocubicMeters:
                return `hm³`;
            case VolumeUnits.KilocubicMeters:
                return `km³`;
            case VolumeUnits.HectocubicFeet:
                return `hft³`;
            case VolumeUnits.KilocubicFeet:
                return `kft³`;
            case VolumeUnits.MegacubicFeet:
                return `Mft³`;
            case VolumeUnits.KiloimperialGallons:
                return `kgal (imp.)`;
            case VolumeUnits.MegaimperialGallons:
                return `Mgal (imp.)`;
            case VolumeUnits.DecausGallons:
                return `dagal (U.S.)`;
            case VolumeUnits.DeciusGallons:
                return `dgal (U.S.)`;
            case VolumeUnits.HectousGallons:
                return `hgal (U.S.)`;
            case VolumeUnits.KilousGallons:
                return `kgal (U.S.)`;
            case VolumeUnits.MegausGallons:
                return `Mgal (U.S.)`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Volume are equals to the current Volume.
     * @param volume The other Volume.
     * @returns True if the given Volume are equal to the current Volume.
     */
    public equals(volume: Volume): boolean {
        return super.internalEquals(this.value, volume.BaseValue);
    }

    /**
     * Compare the given Volume against the current Volume.
     * @param volume The other Volume.
     * @returns 0 if they are equal, -1 if the current Volume is less then other, 1 if the current Volume is greater then other.
     */
    public compareTo(volume: Volume): number {
        return super.internalCompareTo(this.value, volume.BaseValue);
    }

    /**
     * Add the given Volume with the current Volume.
     * @param volume The other Volume.
     * @returns A new Volume instance with the results.
     */
    public add(volume: Volume): Volume {
        return new Volume(super.internalAdd(this.value, volume.BaseValue))
    }

    /**
     * Subtract the given Volume with the current Volume.
     * @param volume The other Volume.
     * @returns A new Volume instance with the results.
     */
    public subtract(volume: Volume): Volume {
        return new Volume(super.internalSubtract(this.value, volume.BaseValue))
    }

    /**
     * Multiply the given Volume with the current Volume.
     * @param volume The other Volume.
     * @returns A new Volume instance with the results.
     */
    public multiply(volume: Volume): Volume {
        return new Volume(super.internalMultiply(this.value, volume.BaseValue))
    }

    /**
     * Divide the given Volume with the current Volume.
     * @param volume The other Volume.
     * @returns A new Volume instance with the results.
     */
    public divide(volume: Volume): Volume {
        return new Volume(super.internalDivide(this.value, volume.BaseValue))
    }

    /**
     * Modulo the given Volume with the current Volume.
     * @param volume The other Volume.
     * @returns A new Volume instance with the results.
     */
    public modulo(volume: Volume): Volume {
        return new Volume(super.internalModulo(this.value, volume.BaseValue))
    }

    /**
     * Pow the given Volume with the current Volume.
     * @param volume The other Volume.
     * @returns A new Volume instance with the results.
     */
    public pow(volume: Volume): Volume {
        return new Volume(super.internalPow(this.value, volume.BaseValue))
    }
}
