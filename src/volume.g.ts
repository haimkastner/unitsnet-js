export enum VolumeUnits {
    Liters,
    CubicMeters,
    CubicKilometers,
    CubicHectometers,
    CubicDecimeters,
    CubicCentimeters,
    CubicMillimeters,
    CubicMicrometers,
    CubicMiles,
    CubicYards,
    CubicFeet,
    CubicInches,
    ImperialGallons,
    ImperialOunces,
    UsGallons,
    UsOunces,
    UsTablespoons,
    AuTablespoons,
    UkTablespoons,
    MetricTeaspoons,
    UsTeaspoons,
    MetricCups,
    UsCustomaryCups,
    UsLegalCups,
    OilBarrels,
    UsBeerBarrels,
    ImperialBeerBarrels,
    UsQuarts,
    UsPints,
    AcreFeet,
    ImperialPints,
    Microliters,
    Centiliters,
    Deciliters,
    Hectoliters,
    Kiloliters,
    Megaliters,
    Hectocubicmeters,
    Kilocubicmeters,
    Hectocubicfeet,
    Kilocubicfeet,
    Megacubicfeet,
    Kiloimperialgallons,
    Megaimperialgallons,
    Kilousgallons,
    Megausgallons
}

export class Volume {
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
    private uspintsLazy: number | null = null;
    private acrefeetLazy: number | null = null;
    private imperialpintsLazy: number | null = null;
    private microlitersLazy: number | null = null;
    private centilitersLazy: number | null = null;
    private decilitersLazy: number | null = null;
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
    private kilousgallonsLazy: number | null = null;
    private megausgallonsLazy: number | null = null;

    public constructor(value: number, fromUnit: VolumeUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Liters(): number {
        if(this.litersLazy !== null){
            return this.litersLazy;
        }
        return this.litersLazy = this.convertFromBase(VolumeUnits.Liters);
    }

    public get CubicMeters(): number {
        if(this.cubicmetersLazy !== null){
            return this.cubicmetersLazy;
        }
        return this.cubicmetersLazy = this.convertFromBase(VolumeUnits.CubicMeters);
    }

    public get CubicKilometers(): number {
        if(this.cubickilometersLazy !== null){
            return this.cubickilometersLazy;
        }
        return this.cubickilometersLazy = this.convertFromBase(VolumeUnits.CubicKilometers);
    }

    public get CubicHectometers(): number {
        if(this.cubichectometersLazy !== null){
            return this.cubichectometersLazy;
        }
        return this.cubichectometersLazy = this.convertFromBase(VolumeUnits.CubicHectometers);
    }

    public get CubicDecimeters(): number {
        if(this.cubicdecimetersLazy !== null){
            return this.cubicdecimetersLazy;
        }
        return this.cubicdecimetersLazy = this.convertFromBase(VolumeUnits.CubicDecimeters);
    }

    public get CubicCentimeters(): number {
        if(this.cubiccentimetersLazy !== null){
            return this.cubiccentimetersLazy;
        }
        return this.cubiccentimetersLazy = this.convertFromBase(VolumeUnits.CubicCentimeters);
    }

    public get CubicMillimeters(): number {
        if(this.cubicmillimetersLazy !== null){
            return this.cubicmillimetersLazy;
        }
        return this.cubicmillimetersLazy = this.convertFromBase(VolumeUnits.CubicMillimeters);
    }

    public get CubicMicrometers(): number {
        if(this.cubicmicrometersLazy !== null){
            return this.cubicmicrometersLazy;
        }
        return this.cubicmicrometersLazy = this.convertFromBase(VolumeUnits.CubicMicrometers);
    }

    public get CubicMiles(): number {
        if(this.cubicmilesLazy !== null){
            return this.cubicmilesLazy;
        }
        return this.cubicmilesLazy = this.convertFromBase(VolumeUnits.CubicMiles);
    }

    public get CubicYards(): number {
        if(this.cubicyardsLazy !== null){
            return this.cubicyardsLazy;
        }
        return this.cubicyardsLazy = this.convertFromBase(VolumeUnits.CubicYards);
    }

    public get CubicFeet(): number {
        if(this.cubicfeetLazy !== null){
            return this.cubicfeetLazy;
        }
        return this.cubicfeetLazy = this.convertFromBase(VolumeUnits.CubicFeet);
    }

    public get CubicInches(): number {
        if(this.cubicinchesLazy !== null){
            return this.cubicinchesLazy;
        }
        return this.cubicinchesLazy = this.convertFromBase(VolumeUnits.CubicInches);
    }

    public get ImperialGallons(): number {
        if(this.imperialgallonsLazy !== null){
            return this.imperialgallonsLazy;
        }
        return this.imperialgallonsLazy = this.convertFromBase(VolumeUnits.ImperialGallons);
    }

    public get ImperialOunces(): number {
        if(this.imperialouncesLazy !== null){
            return this.imperialouncesLazy;
        }
        return this.imperialouncesLazy = this.convertFromBase(VolumeUnits.ImperialOunces);
    }

    public get UsGallons(): number {
        if(this.usgallonsLazy !== null){
            return this.usgallonsLazy;
        }
        return this.usgallonsLazy = this.convertFromBase(VolumeUnits.UsGallons);
    }

    public get UsOunces(): number {
        if(this.usouncesLazy !== null){
            return this.usouncesLazy;
        }
        return this.usouncesLazy = this.convertFromBase(VolumeUnits.UsOunces);
    }

    public get UsTablespoons(): number {
        if(this.ustablespoonsLazy !== null){
            return this.ustablespoonsLazy;
        }
        return this.ustablespoonsLazy = this.convertFromBase(VolumeUnits.UsTablespoons);
    }

    public get AuTablespoons(): number {
        if(this.autablespoonsLazy !== null){
            return this.autablespoonsLazy;
        }
        return this.autablespoonsLazy = this.convertFromBase(VolumeUnits.AuTablespoons);
    }

    public get UkTablespoons(): number {
        if(this.uktablespoonsLazy !== null){
            return this.uktablespoonsLazy;
        }
        return this.uktablespoonsLazy = this.convertFromBase(VolumeUnits.UkTablespoons);
    }

    public get MetricTeaspoons(): number {
        if(this.metricteaspoonsLazy !== null){
            return this.metricteaspoonsLazy;
        }
        return this.metricteaspoonsLazy = this.convertFromBase(VolumeUnits.MetricTeaspoons);
    }

    public get UsTeaspoons(): number {
        if(this.usteaspoonsLazy !== null){
            return this.usteaspoonsLazy;
        }
        return this.usteaspoonsLazy = this.convertFromBase(VolumeUnits.UsTeaspoons);
    }

    public get MetricCups(): number {
        if(this.metriccupsLazy !== null){
            return this.metriccupsLazy;
        }
        return this.metriccupsLazy = this.convertFromBase(VolumeUnits.MetricCups);
    }

    public get UsCustomaryCups(): number {
        if(this.uscustomarycupsLazy !== null){
            return this.uscustomarycupsLazy;
        }
        return this.uscustomarycupsLazy = this.convertFromBase(VolumeUnits.UsCustomaryCups);
    }

    public get UsLegalCups(): number {
        if(this.uslegalcupsLazy !== null){
            return this.uslegalcupsLazy;
        }
        return this.uslegalcupsLazy = this.convertFromBase(VolumeUnits.UsLegalCups);
    }

    public get OilBarrels(): number {
        if(this.oilbarrelsLazy !== null){
            return this.oilbarrelsLazy;
        }
        return this.oilbarrelsLazy = this.convertFromBase(VolumeUnits.OilBarrels);
    }

    public get UsBeerBarrels(): number {
        if(this.usbeerbarrelsLazy !== null){
            return this.usbeerbarrelsLazy;
        }
        return this.usbeerbarrelsLazy = this.convertFromBase(VolumeUnits.UsBeerBarrels);
    }

    public get ImperialBeerBarrels(): number {
        if(this.imperialbeerbarrelsLazy !== null){
            return this.imperialbeerbarrelsLazy;
        }
        return this.imperialbeerbarrelsLazy = this.convertFromBase(VolumeUnits.ImperialBeerBarrels);
    }

    public get UsQuarts(): number {
        if(this.usquartsLazy !== null){
            return this.usquartsLazy;
        }
        return this.usquartsLazy = this.convertFromBase(VolumeUnits.UsQuarts);
    }

    public get UsPints(): number {
        if(this.uspintsLazy !== null){
            return this.uspintsLazy;
        }
        return this.uspintsLazy = this.convertFromBase(VolumeUnits.UsPints);
    }

    public get AcreFeet(): number {
        if(this.acrefeetLazy !== null){
            return this.acrefeetLazy;
        }
        return this.acrefeetLazy = this.convertFromBase(VolumeUnits.AcreFeet);
    }

    public get ImperialPints(): number {
        if(this.imperialpintsLazy !== null){
            return this.imperialpintsLazy;
        }
        return this.imperialpintsLazy = this.convertFromBase(VolumeUnits.ImperialPints);
    }

    public get Microliters(): number {
        if(this.microlitersLazy !== null){
            return this.microlitersLazy;
        }
        return this.microlitersLazy = this.convertFromBase(VolumeUnits.Microliters);
    }

    public get Centiliters(): number {
        if(this.centilitersLazy !== null){
            return this.centilitersLazy;
        }
        return this.centilitersLazy = this.convertFromBase(VolumeUnits.Centiliters);
    }

    public get Deciliters(): number {
        if(this.decilitersLazy !== null){
            return this.decilitersLazy;
        }
        return this.decilitersLazy = this.convertFromBase(VolumeUnits.Deciliters);
    }

    public get Hectoliters(): number {
        if(this.hectolitersLazy !== null){
            return this.hectolitersLazy;
        }
        return this.hectolitersLazy = this.convertFromBase(VolumeUnits.Hectoliters);
    }

    public get Kiloliters(): number {
        if(this.kilolitersLazy !== null){
            return this.kilolitersLazy;
        }
        return this.kilolitersLazy = this.convertFromBase(VolumeUnits.Kiloliters);
    }

    public get Megaliters(): number {
        if(this.megalitersLazy !== null){
            return this.megalitersLazy;
        }
        return this.megalitersLazy = this.convertFromBase(VolumeUnits.Megaliters);
    }

    public get Hectocubicmeters(): number {
        if(this.hectocubicmetersLazy !== null){
            return this.hectocubicmetersLazy;
        }
        return this.hectocubicmetersLazy = this.convertFromBase(VolumeUnits.Hectocubicmeters);
    }

    public get Kilocubicmeters(): number {
        if(this.kilocubicmetersLazy !== null){
            return this.kilocubicmetersLazy;
        }
        return this.kilocubicmetersLazy = this.convertFromBase(VolumeUnits.Kilocubicmeters);
    }

    public get Hectocubicfeet(): number {
        if(this.hectocubicfeetLazy !== null){
            return this.hectocubicfeetLazy;
        }
        return this.hectocubicfeetLazy = this.convertFromBase(VolumeUnits.Hectocubicfeet);
    }

    public get Kilocubicfeet(): number {
        if(this.kilocubicfeetLazy !== null){
            return this.kilocubicfeetLazy;
        }
        return this.kilocubicfeetLazy = this.convertFromBase(VolumeUnits.Kilocubicfeet);
    }

    public get Megacubicfeet(): number {
        if(this.megacubicfeetLazy !== null){
            return this.megacubicfeetLazy;
        }
        return this.megacubicfeetLazy = this.convertFromBase(VolumeUnits.Megacubicfeet);
    }

    public get Kiloimperialgallons(): number {
        if(this.kiloimperialgallonsLazy !== null){
            return this.kiloimperialgallonsLazy;
        }
        return this.kiloimperialgallonsLazy = this.convertFromBase(VolumeUnits.Kiloimperialgallons);
    }

    public get Megaimperialgallons(): number {
        if(this.megaimperialgallonsLazy !== null){
            return this.megaimperialgallonsLazy;
        }
        return this.megaimperialgallonsLazy = this.convertFromBase(VolumeUnits.Megaimperialgallons);
    }

    public get Kilousgallons(): number {
        if(this.kilousgallonsLazy !== null){
            return this.kilousgallonsLazy;
        }
        return this.kilousgallonsLazy = this.convertFromBase(VolumeUnits.Kilousgallons);
    }

    public get Megausgallons(): number {
        if(this.megausgallonsLazy !== null){
            return this.megausgallonsLazy;
        }
        return this.megausgallonsLazy = this.convertFromBase(VolumeUnits.Megausgallons);
    }

    public static FromLiters(value: number): Volume {
        return new Volume(value, VolumeUnits.Liters);
    }

    public static FromCubicMeters(value: number): Volume {
        return new Volume(value, VolumeUnits.CubicMeters);
    }

    public static FromCubicKilometers(value: number): Volume {
        return new Volume(value, VolumeUnits.CubicKilometers);
    }

    public static FromCubicHectometers(value: number): Volume {
        return new Volume(value, VolumeUnits.CubicHectometers);
    }

    public static FromCubicDecimeters(value: number): Volume {
        return new Volume(value, VolumeUnits.CubicDecimeters);
    }

    public static FromCubicCentimeters(value: number): Volume {
        return new Volume(value, VolumeUnits.CubicCentimeters);
    }

    public static FromCubicMillimeters(value: number): Volume {
        return new Volume(value, VolumeUnits.CubicMillimeters);
    }

    public static FromCubicMicrometers(value: number): Volume {
        return new Volume(value, VolumeUnits.CubicMicrometers);
    }

    public static FromCubicMiles(value: number): Volume {
        return new Volume(value, VolumeUnits.CubicMiles);
    }

    public static FromCubicYards(value: number): Volume {
        return new Volume(value, VolumeUnits.CubicYards);
    }

    public static FromCubicFeet(value: number): Volume {
        return new Volume(value, VolumeUnits.CubicFeet);
    }

    public static FromCubicInches(value: number): Volume {
        return new Volume(value, VolumeUnits.CubicInches);
    }

    public static FromImperialGallons(value: number): Volume {
        return new Volume(value, VolumeUnits.ImperialGallons);
    }

    public static FromImperialOunces(value: number): Volume {
        return new Volume(value, VolumeUnits.ImperialOunces);
    }

    public static FromUsGallons(value: number): Volume {
        return new Volume(value, VolumeUnits.UsGallons);
    }

    public static FromUsOunces(value: number): Volume {
        return new Volume(value, VolumeUnits.UsOunces);
    }

    public static FromUsTablespoons(value: number): Volume {
        return new Volume(value, VolumeUnits.UsTablespoons);
    }

    public static FromAuTablespoons(value: number): Volume {
        return new Volume(value, VolumeUnits.AuTablespoons);
    }

    public static FromUkTablespoons(value: number): Volume {
        return new Volume(value, VolumeUnits.UkTablespoons);
    }

    public static FromMetricTeaspoons(value: number): Volume {
        return new Volume(value, VolumeUnits.MetricTeaspoons);
    }

    public static FromUsTeaspoons(value: number): Volume {
        return new Volume(value, VolumeUnits.UsTeaspoons);
    }

    public static FromMetricCups(value: number): Volume {
        return new Volume(value, VolumeUnits.MetricCups);
    }

    public static FromUsCustomaryCups(value: number): Volume {
        return new Volume(value, VolumeUnits.UsCustomaryCups);
    }

    public static FromUsLegalCups(value: number): Volume {
        return new Volume(value, VolumeUnits.UsLegalCups);
    }

    public static FromOilBarrels(value: number): Volume {
        return new Volume(value, VolumeUnits.OilBarrels);
    }

    public static FromUsBeerBarrels(value: number): Volume {
        return new Volume(value, VolumeUnits.UsBeerBarrels);
    }

    public static FromImperialBeerBarrels(value: number): Volume {
        return new Volume(value, VolumeUnits.ImperialBeerBarrels);
    }

    public static FromUsQuarts(value: number): Volume {
        return new Volume(value, VolumeUnits.UsQuarts);
    }

    public static FromUsPints(value: number): Volume {
        return new Volume(value, VolumeUnits.UsPints);
    }

    public static FromAcreFeet(value: number): Volume {
        return new Volume(value, VolumeUnits.AcreFeet);
    }

    public static FromImperialPints(value: number): Volume {
        return new Volume(value, VolumeUnits.ImperialPints);
    }

    public static FromMicroliters(value: number): Volume {
        return new Volume(value, VolumeUnits.Microliters);
    }

    public static FromCentiliters(value: number): Volume {
        return new Volume(value, VolumeUnits.Centiliters);
    }

    public static FromDeciliters(value: number): Volume {
        return new Volume(value, VolumeUnits.Deciliters);
    }

    public static FromHectoliters(value: number): Volume {
        return new Volume(value, VolumeUnits.Hectoliters);
    }

    public static FromKiloliters(value: number): Volume {
        return new Volume(value, VolumeUnits.Kiloliters);
    }

    public static FromMegaliters(value: number): Volume {
        return new Volume(value, VolumeUnits.Megaliters);
    }

    public static FromHectocubicmeters(value: number): Volume {
        return new Volume(value, VolumeUnits.Hectocubicmeters);
    }

    public static FromKilocubicmeters(value: number): Volume {
        return new Volume(value, VolumeUnits.Kilocubicmeters);
    }

    public static FromHectocubicfeet(value: number): Volume {
        return new Volume(value, VolumeUnits.Hectocubicfeet);
    }

    public static FromKilocubicfeet(value: number): Volume {
        return new Volume(value, VolumeUnits.Kilocubicfeet);
    }

    public static FromMegacubicfeet(value: number): Volume {
        return new Volume(value, VolumeUnits.Megacubicfeet);
    }

    public static FromKiloimperialgallons(value: number): Volume {
        return new Volume(value, VolumeUnits.Kiloimperialgallons);
    }

    public static FromMegaimperialgallons(value: number): Volume {
        return new Volume(value, VolumeUnits.Megaimperialgallons);
    }

    public static FromKilousgallons(value: number): Volume {
        return new Volume(value, VolumeUnits.Kilousgallons);
    }

    public static FromMegausgallons(value: number): Volume {
        return new Volume(value, VolumeUnits.Megausgallons);
    }

    private convertFromBase(toUnit: VolumeUnits): number {
        switch (toUnit) {
                
            case VolumeUnits.Liters:
                return this.value*1e3;
            case VolumeUnits.CubicMeters:
                return this.value;
            case VolumeUnits.CubicKilometers:
                return this.value/1e9;
            case VolumeUnits.CubicHectometers:
                return this.value/1e6;
            case VolumeUnits.CubicDecimeters:
                return this.value*1e3;
            case VolumeUnits.CubicCentimeters:
                return this.value*1e6;
            case VolumeUnits.CubicMillimeters:
                return this.value*1e9;
            case VolumeUnits.CubicMicrometers:
                return this.value*1e18;
            case VolumeUnits.CubicMiles:
                return this.value/4.16818182544058e9;
            case VolumeUnits.CubicYards:
                return this.value/0.764554858;
            case VolumeUnits.CubicFeet:
                return this.value/0.0283168;
            case VolumeUnits.CubicInches:
                return this.value/(1.6387*1e-5);
            case VolumeUnits.ImperialGallons:
                return this.value/0.00454609000000181429905810072407;
            case VolumeUnits.ImperialOunces:
                return this.value/2.8413062499962901241875439064617e-5;
            case VolumeUnits.UsGallons:
                return this.value/0.00378541;
            case VolumeUnits.UsOunces:
                return this.value/2.957352956253760505068307980135e-5;
            case VolumeUnits.UsTablespoons:
                return this.value/1.478676478125e-5;
            case VolumeUnits.AuTablespoons:
                return this.value/2e-5;
            case VolumeUnits.UkTablespoons:
                return this.value/1.5e-5;
            case VolumeUnits.MetricTeaspoons:
                return this.value/0.5e-5;
            case VolumeUnits.UsTeaspoons:
                return this.value/4.92892159375e-6;
            case VolumeUnits.MetricCups:
                return this.value/0.00025;
            case VolumeUnits.UsCustomaryCups:
                return this.value/0.0002365882365;
            case VolumeUnits.UsLegalCups:
                return this.value/0.00024;
            case VolumeUnits.OilBarrels:
                return this.value/0.158987294928;
            case VolumeUnits.UsBeerBarrels:
                return this.value/0.1173477658;
            case VolumeUnits.ImperialBeerBarrels:
                return this.value/0.16365924;
            case VolumeUnits.UsQuarts:
                return this.value/9.46352946e-4;
            case VolumeUnits.UsPints:
                return this.value/4.73176473e-4;
            case VolumeUnits.AcreFeet:
                return this.value*0.000810714;
            case VolumeUnits.ImperialPints:
                return this.value / 5.6826125e-4;
            case VolumeUnits.Microliters:
                return (this.value*1e3) / 0.000001;
            case VolumeUnits.Centiliters:
                return (this.value*1e3) / 0.01;
            case VolumeUnits.Deciliters:
                return (this.value*1e3) / 0.1;
            case VolumeUnits.Hectoliters:
                return (this.value*1e3) / 100;
            case VolumeUnits.Kiloliters:
                return (this.value*1e3) / 1000;
            case VolumeUnits.Megaliters:
                return (this.value*1e3) / 1000000;
            case VolumeUnits.Hectocubicmeters:
                return (this.value) / 100;
            case VolumeUnits.Kilocubicmeters:
                return (this.value) / 1000;
            case VolumeUnits.Hectocubicfeet:
                return (this.value/0.0283168) / 100;
            case VolumeUnits.Kilocubicfeet:
                return (this.value/0.0283168) / 1000;
            case VolumeUnits.Megacubicfeet:
                return (this.value/0.0283168) / 1000000;
            case VolumeUnits.Kiloimperialgallons:
                return (this.value/0.00454609000000181429905810072407) / 1000;
            case VolumeUnits.Megaimperialgallons:
                return (this.value/0.00454609000000181429905810072407) / 1000000;
            case VolumeUnits.Kilousgallons:
                return (this.value/0.00378541) / 1000;
            case VolumeUnits.Megausgallons:
                return (this.value/0.00378541) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: VolumeUnits): number {
        switch (fromUnit) {
                
            case VolumeUnits.Liters:
                return value/1e3;
            case VolumeUnits.CubicMeters:
                return value;
            case VolumeUnits.CubicKilometers:
                return value*1e9;
            case VolumeUnits.CubicHectometers:
                return value*1e6;
            case VolumeUnits.CubicDecimeters:
                return value/1e3;
            case VolumeUnits.CubicCentimeters:
                return value/1e6;
            case VolumeUnits.CubicMillimeters:
                return value/1e9;
            case VolumeUnits.CubicMicrometers:
                return value/1e18;
            case VolumeUnits.CubicMiles:
                return value*4.16818182544058e9;
            case VolumeUnits.CubicYards:
                return value*0.764554858;
            case VolumeUnits.CubicFeet:
                return value*0.0283168;
            case VolumeUnits.CubicInches:
                return value*1.6387*1e-5;
            case VolumeUnits.ImperialGallons:
                return value*0.00454609000000181429905810072407;
            case VolumeUnits.ImperialOunces:
                return value*2.8413062499962901241875439064617e-5;
            case VolumeUnits.UsGallons:
                return value*0.00378541;
            case VolumeUnits.UsOunces:
                return value*2.957352956253760505068307980135e-5;
            case VolumeUnits.UsTablespoons:
                return value*1.478676478125e-5;
            case VolumeUnits.AuTablespoons:
                return value*2e-5;
            case VolumeUnits.UkTablespoons:
                return value*1.5e-5;
            case VolumeUnits.MetricTeaspoons:
                return value*0.5e-5;
            case VolumeUnits.UsTeaspoons:
                return value*4.92892159375e-6;
            case VolumeUnits.MetricCups:
                return value*0.00025;
            case VolumeUnits.UsCustomaryCups:
                return value*0.0002365882365;
            case VolumeUnits.UsLegalCups:
                return value*0.00024;
            case VolumeUnits.OilBarrels:
                return value*0.158987294928;
            case VolumeUnits.UsBeerBarrels:
                return value*0.1173477658;
            case VolumeUnits.ImperialBeerBarrels:
                return value*0.16365924;
            case VolumeUnits.UsQuarts:
                return value*9.46352946e-4;
            case VolumeUnits.UsPints:
                return value*4.73176473e-4;
            case VolumeUnits.AcreFeet:
                return value/0.000810714;
            case VolumeUnits.ImperialPints:
                return value * 5.6826125e-4;
            case VolumeUnits.Microliters:
                return (value/1e3) * 0.000001;
            case VolumeUnits.Centiliters:
                return (value/1e3) * 0.01;
            case VolumeUnits.Deciliters:
                return (value/1e3) * 0.1;
            case VolumeUnits.Hectoliters:
                return (value/1e3) * 100;
            case VolumeUnits.Kiloliters:
                return (value/1e3) * 1000;
            case VolumeUnits.Megaliters:
                return (value/1e3) * 1000000;
            case VolumeUnits.Hectocubicmeters:
                return (value) * 100;
            case VolumeUnits.Kilocubicmeters:
                return (value) * 1000;
            case VolumeUnits.Hectocubicfeet:
                return (value*0.0283168) * 100;
            case VolumeUnits.Kilocubicfeet:
                return (value*0.0283168) * 1000;
            case VolumeUnits.Megacubicfeet:
                return (value*0.0283168) * 1000000;
            case VolumeUnits.Kiloimperialgallons:
                return (value*0.00454609000000181429905810072407) * 1000;
            case VolumeUnits.Megaimperialgallons:
                return (value*0.00454609000000181429905810072407) * 1000000;
            case VolumeUnits.Kilousgallons:
                return (value*0.00378541) * 1000;
            case VolumeUnits.Megausgallons:
                return (value*0.00378541) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
