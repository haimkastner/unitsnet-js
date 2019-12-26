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
    KilogramSquareMeters,
    KilogramSquareDecimeters,
    KilogramSquareCentimeters,
    KilogramSquareMillimeters,
    KilotonneSquareMeters,
    MegatonneSquareMeters,
    KilotonneSquareDecimeters,
    MegatonneSquareDecimeters,
    KilotonneSquareCentimeters,
    MegatonneSquareCentimeters,
    KilotonneSquareMilimeters,
    MegatonneSquareMilimeters
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
    private kilogramsquaremetersLazy: number | null = null;
    private kilogramsquaredecimetersLazy: number | null = null;
    private kilogramsquarecentimetersLazy: number | null = null;
    private kilogramsquaremillimetersLazy: number | null = null;
    private kilotonnesquaremetersLazy: number | null = null;
    private megatonnesquaremetersLazy: number | null = null;
    private kilotonnesquaredecimetersLazy: number | null = null;
    private megatonnesquaredecimetersLazy: number | null = null;
    private kilotonnesquarecentimetersLazy: number | null = null;
    private megatonnesquarecentimetersLazy: number | null = null;
    private kilotonnesquaremilimetersLazy: number | null = null;
    private megatonnesquaremilimetersLazy: number | null = null;

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

    public get KilogramSquareMeters(): number {
        if(this.kilogramsquaremetersLazy !== null){
            return this.kilogramsquaremetersLazy;
        }
        return this.kilogramsquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilogramSquareMeters);
    }

    public get KilogramSquareDecimeters(): number {
        if(this.kilogramsquaredecimetersLazy !== null){
            return this.kilogramsquaredecimetersLazy;
        }
        return this.kilogramsquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilogramSquareDecimeters);
    }

    public get KilogramSquareCentimeters(): number {
        if(this.kilogramsquarecentimetersLazy !== null){
            return this.kilogramsquarecentimetersLazy;
        }
        return this.kilogramsquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilogramSquareCentimeters);
    }

    public get KilogramSquareMillimeters(): number {
        if(this.kilogramsquaremillimetersLazy !== null){
            return this.kilogramsquaremillimetersLazy;
        }
        return this.kilogramsquaremillimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilogramSquareMillimeters);
    }

    public get KilotonneSquareMeters(): number {
        if(this.kilotonnesquaremetersLazy !== null){
            return this.kilotonnesquaremetersLazy;
        }
        return this.kilotonnesquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilotonneSquareMeters);
    }

    public get MegatonneSquareMeters(): number {
        if(this.megatonnesquaremetersLazy !== null){
            return this.megatonnesquaremetersLazy;
        }
        return this.megatonnesquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.MegatonneSquareMeters);
    }

    public get KilotonneSquareDecimeters(): number {
        if(this.kilotonnesquaredecimetersLazy !== null){
            return this.kilotonnesquaredecimetersLazy;
        }
        return this.kilotonnesquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilotonneSquareDecimeters);
    }

    public get MegatonneSquareDecimeters(): number {
        if(this.megatonnesquaredecimetersLazy !== null){
            return this.megatonnesquaredecimetersLazy;
        }
        return this.megatonnesquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.MegatonneSquareDecimeters);
    }

    public get KilotonneSquareCentimeters(): number {
        if(this.kilotonnesquarecentimetersLazy !== null){
            return this.kilotonnesquarecentimetersLazy;
        }
        return this.kilotonnesquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilotonneSquareCentimeters);
    }

    public get MegatonneSquareCentimeters(): number {
        if(this.megatonnesquarecentimetersLazy !== null){
            return this.megatonnesquarecentimetersLazy;
        }
        return this.megatonnesquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.MegatonneSquareCentimeters);
    }

    public get KilotonneSquareMilimeters(): number {
        if(this.kilotonnesquaremilimetersLazy !== null){
            return this.kilotonnesquaremilimetersLazy;
        }
        return this.kilotonnesquaremilimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilotonneSquareMilimeters);
    }

    public get MegatonneSquareMilimeters(): number {
        if(this.megatonnesquaremilimetersLazy !== null){
            return this.megatonnesquaremilimetersLazy;
        }
        return this.megatonnesquaremilimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.MegatonneSquareMilimeters);
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

    public static FromKilogramSquareMeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilogramSquareMeters);
    }

    public static FromKilogramSquareDecimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilogramSquareDecimeters);
    }

    public static FromKilogramSquareCentimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilogramSquareCentimeters);
    }

    public static FromKilogramSquareMillimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilogramSquareMillimeters);
    }

    public static FromKilotonneSquareMeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilotonneSquareMeters);
    }

    public static FromMegatonneSquareMeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MegatonneSquareMeters);
    }

    public static FromKilotonneSquareDecimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilotonneSquareDecimeters);
    }

    public static FromMegatonneSquareDecimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MegatonneSquareDecimeters);
    }

    public static FromKilotonneSquareCentimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilotonneSquareCentimeters);
    }

    public static FromMegatonneSquareCentimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MegatonneSquareCentimeters);
    }

    public static FromKilotonneSquareMilimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilotonneSquareMilimeters);
    }

    public static FromMegatonneSquareMilimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MegatonneSquareMilimeters);
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
            case MassMomentOfInertiaUnits.KilogramSquareMeters:
                return (this.value*1e3) / 1000;
            case MassMomentOfInertiaUnits.KilogramSquareDecimeters:
                return (this.value*1e5) / 1000;
            case MassMomentOfInertiaUnits.KilogramSquareCentimeters:
                return (this.value*1e7) / 1000;
            case MassMomentOfInertiaUnits.KilogramSquareMillimeters:
                return (this.value*1e9) / 1000;
            case MassMomentOfInertiaUnits.KilotonneSquareMeters:
                return (this.value*1e-3) / 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareMeters:
                return (this.value*1e-3) / 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareDecimeters:
                return (this.value*1e-1) / 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareDecimeters:
                return (this.value*1e-1) / 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareCentimeters:
                return (this.value*1e1) / 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareCentimeters:
                return (this.value*1e1) / 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareMilimeters:
                return (this.value*1e3) / 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareMilimeters:
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
            case MassMomentOfInertiaUnits.KilogramSquareMeters:
                return (value/1e3) * 1000;
            case MassMomentOfInertiaUnits.KilogramSquareDecimeters:
                return (value/1e5) * 1000;
            case MassMomentOfInertiaUnits.KilogramSquareCentimeters:
                return (value/1e7) * 1000;
            case MassMomentOfInertiaUnits.KilogramSquareMillimeters:
                return (value/1e9) * 1000;
            case MassMomentOfInertiaUnits.KilotonneSquareMeters:
                return (value/1e-3) * 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareMeters:
                return (value/1e-3) * 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareDecimeters:
                return (value/1e-1) * 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareDecimeters:
                return (value/1e-1) * 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareCentimeters:
                return (value/1e1) * 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareCentimeters:
                return (value/1e1) * 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareMilimeters:
                return (value/1e3) * 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareMilimeters:
                return (value/1e3) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: MassMomentOfInertiaUnits = MassMomentOfInertiaUnits.KilogramSquareMeters): string {

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
            case MassMomentOfInertiaUnits.KilogramSquareMeters:
                return this.KilogramSquareMeters + ` g·m²`;
            case MassMomentOfInertiaUnits.KilogramSquareDecimeters:
                return this.KilogramSquareDecimeters + ` g·dm²`;
            case MassMomentOfInertiaUnits.KilogramSquareCentimeters:
                return this.KilogramSquareCentimeters + ` g·cm²`;
            case MassMomentOfInertiaUnits.KilogramSquareMillimeters:
                return this.KilogramSquareMillimeters + ` g·mm²`;
            case MassMomentOfInertiaUnits.KilotonneSquareMeters:
                return this.KilotonneSquareMeters + ` t·m²`;
            case MassMomentOfInertiaUnits.MegatonneSquareMeters:
                return this.MegatonneSquareMeters + ` t·m²`;
            case MassMomentOfInertiaUnits.KilotonneSquareDecimeters:
                return this.KilotonneSquareDecimeters + ` t·dm²`;
            case MassMomentOfInertiaUnits.MegatonneSquareDecimeters:
                return this.MegatonneSquareDecimeters + ` t·dm²`;
            case MassMomentOfInertiaUnits.KilotonneSquareCentimeters:
                return this.KilotonneSquareCentimeters + ` t·cm²`;
            case MassMomentOfInertiaUnits.MegatonneSquareCentimeters:
                return this.MegatonneSquareCentimeters + ` t·cm²`;
            case MassMomentOfInertiaUnits.KilotonneSquareMilimeters:
                return this.KilotonneSquareMilimeters + ` t·mm²`;
            case MassMomentOfInertiaUnits.MegatonneSquareMilimeters:
                return this.MegatonneSquareMilimeters + ` t·mm²`;
        default:
            break;
        }
        return this.value.toString();
    }
}
