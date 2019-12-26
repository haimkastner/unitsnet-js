export enum MassMomentOfInertiaUnits {
    GramSquareMeters,
    GramSquareDecimeters,
    GramSquareCentimeters,
    GramSquareMillimeters,
    TonneSquareMeters,
    TonneSquareDecimeters,
    TonneSquareCentimeters,
    TonneSquareMilimeters,
    PoundSquareFeet,
    PoundSquareInches,
    SlugSquareFeet,
    SlugSquareInches,
    KilogramSquareMeter,
    KilogramSquareDecimeter,
    KilogramSquareCentimeter,
    KilogramSquareMillimeter,
    KilotonneSquareMeter,
    MegatonneSquareMeter,
    KilotonneSquareDecimeter,
    MegatonneSquareDecimeter,
    KilotonneSquareCentimeter,
    MegatonneSquareCentimeter,
    KilotonneSquareMilimeter,
    MegatonneSquareMilimeter
}

export class MassMomentOfInertia {
    private value: number;
    private gramsquaremetersLazy: number | null = null;
    private gramsquaredecimetersLazy: number | null = null;
    private gramsquarecentimetersLazy: number | null = null;
    private gramsquaremillimetersLazy: number | null = null;
    private tonnesquaremetersLazy: number | null = null;
    private tonnesquaredecimetersLazy: number | null = null;
    private tonnesquarecentimetersLazy: number | null = null;
    private tonnesquaremilimetersLazy: number | null = null;
    private poundsquarefeetLazy: number | null = null;
    private poundsquareinchesLazy: number | null = null;
    private slugsquarefeetLazy: number | null = null;
    private slugsquareinchesLazy: number | null = null;
    private kilogramsquaremeterLazy: number | null = null;
    private kilogramsquaredecimeterLazy: number | null = null;
    private kilogramsquarecentimeterLazy: number | null = null;
    private kilogramsquaremillimeterLazy: number | null = null;
    private kilotonnesquaremeterLazy: number | null = null;
    private megatonnesquaremeterLazy: number | null = null;
    private kilotonnesquaredecimeterLazy: number | null = null;
    private megatonnesquaredecimeterLazy: number | null = null;
    private kilotonnesquarecentimeterLazy: number | null = null;
    private megatonnesquarecentimeterLazy: number | null = null;
    private kilotonnesquaremilimeterLazy: number | null = null;
    private megatonnesquaremilimeterLazy: number | null = null;

    public constructor(value: number, fromUnit: MassMomentOfInertiaUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get GramSquareMeters(): number {
        if(this.gramsquaremetersLazy !== null){
            return this.gramsquaremetersLazy;
        }
        return this.gramsquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.GramSquareMeters);
    }

    public get GramSquareDecimeters(): number {
        if(this.gramsquaredecimetersLazy !== null){
            return this.gramsquaredecimetersLazy;
        }
        return this.gramsquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.GramSquareDecimeters);
    }

    public get GramSquareCentimeters(): number {
        if(this.gramsquarecentimetersLazy !== null){
            return this.gramsquarecentimetersLazy;
        }
        return this.gramsquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.GramSquareCentimeters);
    }

    public get GramSquareMillimeters(): number {
        if(this.gramsquaremillimetersLazy !== null){
            return this.gramsquaremillimetersLazy;
        }
        return this.gramsquaremillimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.GramSquareMillimeters);
    }

    public get TonneSquareMeters(): number {
        if(this.tonnesquaremetersLazy !== null){
            return this.tonnesquaremetersLazy;
        }
        return this.tonnesquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareMeters);
    }

    public get TonneSquareDecimeters(): number {
        if(this.tonnesquaredecimetersLazy !== null){
            return this.tonnesquaredecimetersLazy;
        }
        return this.tonnesquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareDecimeters);
    }

    public get TonneSquareCentimeters(): number {
        if(this.tonnesquarecentimetersLazy !== null){
            return this.tonnesquarecentimetersLazy;
        }
        return this.tonnesquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareCentimeters);
    }

    public get TonneSquareMilimeters(): number {
        if(this.tonnesquaremilimetersLazy !== null){
            return this.tonnesquaremilimetersLazy;
        }
        return this.tonnesquaremilimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareMilimeters);
    }

    public get PoundSquareFeet(): number {
        if(this.poundsquarefeetLazy !== null){
            return this.poundsquarefeetLazy;
        }
        return this.poundsquarefeetLazy = this.convertFromBase(MassMomentOfInertiaUnits.PoundSquareFeet);
    }

    public get PoundSquareInches(): number {
        if(this.poundsquareinchesLazy !== null){
            return this.poundsquareinchesLazy;
        }
        return this.poundsquareinchesLazy = this.convertFromBase(MassMomentOfInertiaUnits.PoundSquareInches);
    }

    public get SlugSquareFeet(): number {
        if(this.slugsquarefeetLazy !== null){
            return this.slugsquarefeetLazy;
        }
        return this.slugsquarefeetLazy = this.convertFromBase(MassMomentOfInertiaUnits.SlugSquareFeet);
    }

    public get SlugSquareInches(): number {
        if(this.slugsquareinchesLazy !== null){
            return this.slugsquareinchesLazy;
        }
        return this.slugsquareinchesLazy = this.convertFromBase(MassMomentOfInertiaUnits.SlugSquareInches);
    }

    public get KilogramSquareMeter(): number {
        if(this.kilogramsquaremeterLazy !== null){
            return this.kilogramsquaremeterLazy;
        }
        return this.kilogramsquaremeterLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilogramSquareMeter);
    }

    public get KilogramSquareDecimeter(): number {
        if(this.kilogramsquaredecimeterLazy !== null){
            return this.kilogramsquaredecimeterLazy;
        }
        return this.kilogramsquaredecimeterLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilogramSquareDecimeter);
    }

    public get KilogramSquareCentimeter(): number {
        if(this.kilogramsquarecentimeterLazy !== null){
            return this.kilogramsquarecentimeterLazy;
        }
        return this.kilogramsquarecentimeterLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilogramSquareCentimeter);
    }

    public get KilogramSquareMillimeter(): number {
        if(this.kilogramsquaremillimeterLazy !== null){
            return this.kilogramsquaremillimeterLazy;
        }
        return this.kilogramsquaremillimeterLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilogramSquareMillimeter);
    }

    public get KilotonneSquareMeter(): number {
        if(this.kilotonnesquaremeterLazy !== null){
            return this.kilotonnesquaremeterLazy;
        }
        return this.kilotonnesquaremeterLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilotonneSquareMeter);
    }

    public get MegatonneSquareMeter(): number {
        if(this.megatonnesquaremeterLazy !== null){
            return this.megatonnesquaremeterLazy;
        }
        return this.megatonnesquaremeterLazy = this.convertFromBase(MassMomentOfInertiaUnits.MegatonneSquareMeter);
    }

    public get KilotonneSquareDecimeter(): number {
        if(this.kilotonnesquaredecimeterLazy !== null){
            return this.kilotonnesquaredecimeterLazy;
        }
        return this.kilotonnesquaredecimeterLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilotonneSquareDecimeter);
    }

    public get MegatonneSquareDecimeter(): number {
        if(this.megatonnesquaredecimeterLazy !== null){
            return this.megatonnesquaredecimeterLazy;
        }
        return this.megatonnesquaredecimeterLazy = this.convertFromBase(MassMomentOfInertiaUnits.MegatonneSquareDecimeter);
    }

    public get KilotonneSquareCentimeter(): number {
        if(this.kilotonnesquarecentimeterLazy !== null){
            return this.kilotonnesquarecentimeterLazy;
        }
        return this.kilotonnesquarecentimeterLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilotonneSquareCentimeter);
    }

    public get MegatonneSquareCentimeter(): number {
        if(this.megatonnesquarecentimeterLazy !== null){
            return this.megatonnesquarecentimeterLazy;
        }
        return this.megatonnesquarecentimeterLazy = this.convertFromBase(MassMomentOfInertiaUnits.MegatonneSquareCentimeter);
    }

    public get KilotonneSquareMilimeter(): number {
        if(this.kilotonnesquaremilimeterLazy !== null){
            return this.kilotonnesquaremilimeterLazy;
        }
        return this.kilotonnesquaremilimeterLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilotonneSquareMilimeter);
    }

    public get MegatonneSquareMilimeter(): number {
        if(this.megatonnesquaremilimeterLazy !== null){
            return this.megatonnesquaremilimeterLazy;
        }
        return this.megatonnesquaremilimeterLazy = this.convertFromBase(MassMomentOfInertiaUnits.MegatonneSquareMilimeter);
    }

    public static FromGramSquareMeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.GramSquareMeters);
    }

    public static FromGramSquareDecimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.GramSquareDecimeters);
    }

    public static FromGramSquareCentimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.GramSquareCentimeters);
    }

    public static FromGramSquareMillimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.GramSquareMillimeters);
    }

    public static FromTonneSquareMeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.TonneSquareMeters);
    }

    public static FromTonneSquareDecimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.TonneSquareDecimeters);
    }

    public static FromTonneSquareCentimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.TonneSquareCentimeters);
    }

    public static FromTonneSquareMilimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.TonneSquareMilimeters);
    }

    public static FromPoundSquareFeet(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.PoundSquareFeet);
    }

    public static FromPoundSquareInches(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.PoundSquareInches);
    }

    public static FromSlugSquareFeet(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.SlugSquareFeet);
    }

    public static FromSlugSquareInches(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.SlugSquareInches);
    }

    public static FromKilogramSquareMeter(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilogramSquareMeter);
    }

    public static FromKilogramSquareDecimeter(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilogramSquareDecimeter);
    }

    public static FromKilogramSquareCentimeter(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilogramSquareCentimeter);
    }

    public static FromKilogramSquareMillimeter(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilogramSquareMillimeter);
    }

    public static FromKilotonneSquareMeter(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilotonneSquareMeter);
    }

    public static FromMegatonneSquareMeter(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MegatonneSquareMeter);
    }

    public static FromKilotonneSquareDecimeter(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilotonneSquareDecimeter);
    }

    public static FromMegatonneSquareDecimeter(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MegatonneSquareDecimeter);
    }

    public static FromKilotonneSquareCentimeter(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilotonneSquareCentimeter);
    }

    public static FromMegatonneSquareCentimeter(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MegatonneSquareCentimeter);
    }

    public static FromKilotonneSquareMilimeter(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilotonneSquareMilimeter);
    }

    public static FromMegatonneSquareMilimeter(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MegatonneSquareMilimeter);
    }

    private convertFromBase(toUnit: MassMomentOfInertiaUnits): number {
        switch (toUnit) {
                
            case MassMomentOfInertiaUnits.GramSquareMeters:
                return this.value*1e3;
            case MassMomentOfInertiaUnits.GramSquareDecimeters:
                return this.value*1e5;
            case MassMomentOfInertiaUnits.GramSquareCentimeters:
                return this.value*1e7;
            case MassMomentOfInertiaUnits.GramSquareMillimeters:
                return this.value*1e9;
            case MassMomentOfInertiaUnits.TonneSquareMeters:
                return this.value*1e-3;
            case MassMomentOfInertiaUnits.TonneSquareDecimeters:
                return this.value*1e-1;
            case MassMomentOfInertiaUnits.TonneSquareCentimeters:
                return this.value*1e1;
            case MassMomentOfInertiaUnits.TonneSquareMilimeters:
                return this.value*1e3;
            case MassMomentOfInertiaUnits.PoundSquareFeet:
                return this.value/4.21401101e-2;
            case MassMomentOfInertiaUnits.PoundSquareInches:
                return this.value/2.9263965e-4;
            case MassMomentOfInertiaUnits.SlugSquareFeet:
                return this.value/1.3558179619;
            case MassMomentOfInertiaUnits.SlugSquareInches:
                return this.value/9.41540242e-3;
            case MassMomentOfInertiaUnits.KilogramSquareMeter:
                return (this.value*1e3) / 1000;
            case MassMomentOfInertiaUnits.KilogramSquareDecimeter:
                return (this.value*1e5) / 1000;
            case MassMomentOfInertiaUnits.KilogramSquareCentimeter:
                return (this.value*1e7) / 1000;
            case MassMomentOfInertiaUnits.KilogramSquareMillimeter:
                return (this.value*1e9) / 1000;
            case MassMomentOfInertiaUnits.KilotonneSquareMeter:
                return (this.value*1e-3) / 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareMeter:
                return (this.value*1e-3) / 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareDecimeter:
                return (this.value*1e-1) / 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareDecimeter:
                return (this.value*1e-1) / 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareCentimeter:
                return (this.value*1e1) / 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareCentimeter:
                return (this.value*1e1) / 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareMilimeter:
                return (this.value*1e3) / 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareMilimeter:
                return (this.value*1e3) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: MassMomentOfInertiaUnits): number {
        switch (fromUnit) {
                
            case MassMomentOfInertiaUnits.GramSquareMeters:
                return value/1e3;
            case MassMomentOfInertiaUnits.GramSquareDecimeters:
                return value/1e5;
            case MassMomentOfInertiaUnits.GramSquareCentimeters:
                return value/1e7;
            case MassMomentOfInertiaUnits.GramSquareMillimeters:
                return value/1e9;
            case MassMomentOfInertiaUnits.TonneSquareMeters:
                return value/1e-3;
            case MassMomentOfInertiaUnits.TonneSquareDecimeters:
                return value/1e-1;
            case MassMomentOfInertiaUnits.TonneSquareCentimeters:
                return value/1e1;
            case MassMomentOfInertiaUnits.TonneSquareMilimeters:
                return value/1e3;
            case MassMomentOfInertiaUnits.PoundSquareFeet:
                return value*4.21401101e-2;
            case MassMomentOfInertiaUnits.PoundSquareInches:
                return value*2.9263965e-4;
            case MassMomentOfInertiaUnits.SlugSquareFeet:
                return value*1.3558179619;
            case MassMomentOfInertiaUnits.SlugSquareInches:
                return value*9.41540242e-3;
            case MassMomentOfInertiaUnits.KilogramSquareMeter:
                return (value/1e3) * 1000;
            case MassMomentOfInertiaUnits.KilogramSquareDecimeter:
                return (value/1e5) * 1000;
            case MassMomentOfInertiaUnits.KilogramSquareCentimeter:
                return (value/1e7) * 1000;
            case MassMomentOfInertiaUnits.KilogramSquareMillimeter:
                return (value/1e9) * 1000;
            case MassMomentOfInertiaUnits.KilotonneSquareMeter:
                return (value/1e-3) * 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareMeter:
                return (value/1e-3) * 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareDecimeter:
                return (value/1e-1) * 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareDecimeter:
                return (value/1e-1) * 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareCentimeter:
                return (value/1e1) * 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareCentimeter:
                return (value/1e1) * 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareMilimeter:
                return (value/1e3) * 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareMilimeter:
                return (value/1e3) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: MassMomentOfInertiaUnits = MassMomentOfInertiaUnits.KilogramSquareMeter): string {

        switch (toUnit) {
            
            case MassMomentOfInertiaUnits.GramSquareMeters:
                return this.GramSquareMeters + ` g·m²`;
            case MassMomentOfInertiaUnits.GramSquareDecimeters:
                return this.GramSquareDecimeters + ` g·dm²`;
            case MassMomentOfInertiaUnits.GramSquareCentimeters:
                return this.GramSquareCentimeters + ` g·cm²`;
            case MassMomentOfInertiaUnits.GramSquareMillimeters:
                return this.GramSquareMillimeters + ` g·mm²`;
            case MassMomentOfInertiaUnits.TonneSquareMeters:
                return this.TonneSquareMeters + ` t·m²`;
            case MassMomentOfInertiaUnits.TonneSquareDecimeters:
                return this.TonneSquareDecimeters + ` t·dm²`;
            case MassMomentOfInertiaUnits.TonneSquareCentimeters:
                return this.TonneSquareCentimeters + ` t·cm²`;
            case MassMomentOfInertiaUnits.TonneSquareMilimeters:
                return this.TonneSquareMilimeters + ` t·mm²`;
            case MassMomentOfInertiaUnits.PoundSquareFeet:
                return this.PoundSquareFeet + ` lb·ft²`;
            case MassMomentOfInertiaUnits.PoundSquareInches:
                return this.PoundSquareInches + ` lb·in²`;
            case MassMomentOfInertiaUnits.SlugSquareFeet:
                return this.SlugSquareFeet + ` slug·ft²`;
            case MassMomentOfInertiaUnits.SlugSquareInches:
                return this.SlugSquareInches + ` slug·in²`;
            case MassMomentOfInertiaUnits.KilogramSquareMeter:
                return this.KilogramSquareMeter + ` g·m²`;
            case MassMomentOfInertiaUnits.KilogramSquareDecimeter:
                return this.KilogramSquareDecimeter + ` g·dm²`;
            case MassMomentOfInertiaUnits.KilogramSquareCentimeter:
                return this.KilogramSquareCentimeter + ` g·cm²`;
            case MassMomentOfInertiaUnits.KilogramSquareMillimeter:
                return this.KilogramSquareMillimeter + ` g·mm²`;
            case MassMomentOfInertiaUnits.KilotonneSquareMeter:
                return this.KilotonneSquareMeter + ` t·m²`;
            case MassMomentOfInertiaUnits.MegatonneSquareMeter:
                return this.MegatonneSquareMeter + ` t·m²`;
            case MassMomentOfInertiaUnits.KilotonneSquareDecimeter:
                return this.KilotonneSquareDecimeter + ` t·dm²`;
            case MassMomentOfInertiaUnits.MegatonneSquareDecimeter:
                return this.MegatonneSquareDecimeter + ` t·dm²`;
            case MassMomentOfInertiaUnits.KilotonneSquareCentimeter:
                return this.KilotonneSquareCentimeter + ` t·cm²`;
            case MassMomentOfInertiaUnits.MegatonneSquareCentimeter:
                return this.MegatonneSquareCentimeter + ` t·cm²`;
            case MassMomentOfInertiaUnits.KilotonneSquareMilimeter:
                return this.KilotonneSquareMilimeter + ` t·mm²`;
            case MassMomentOfInertiaUnits.MegatonneSquareMilimeter:
                return this.MegatonneSquareMilimeter + ` t·mm²`;
        default:
            break;
        }
        return this.value.toString();
    }
}
