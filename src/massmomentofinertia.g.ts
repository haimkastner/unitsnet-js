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
    Kilogramsquaremeters,
    Kilogramsquaredecimeters,
    Kilogramsquarecentimeters,
    Kilogramsquaremillimeters,
    Kilotonnesquaremeters,
    Megatonnesquaremeters,
    Kilotonnesquaredecimeters,
    Megatonnesquaredecimeters,
    Kilotonnesquarecentimeters,
    Megatonnesquarecentimeters,
    Kilotonnesquaremilimeters,
    Megatonnesquaremilimeters
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

    public get Kilogramsquaremeters(): number {
        if(this.kilogramsquaremetersLazy !== null){
            return this.kilogramsquaremetersLazy;
        }
        return this.kilogramsquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.Kilogramsquaremeters);
    }

    public get Kilogramsquaredecimeters(): number {
        if(this.kilogramsquaredecimetersLazy !== null){
            return this.kilogramsquaredecimetersLazy;
        }
        return this.kilogramsquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.Kilogramsquaredecimeters);
    }

    public get Kilogramsquarecentimeters(): number {
        if(this.kilogramsquarecentimetersLazy !== null){
            return this.kilogramsquarecentimetersLazy;
        }
        return this.kilogramsquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.Kilogramsquarecentimeters);
    }

    public get Kilogramsquaremillimeters(): number {
        if(this.kilogramsquaremillimetersLazy !== null){
            return this.kilogramsquaremillimetersLazy;
        }
        return this.kilogramsquaremillimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.Kilogramsquaremillimeters);
    }

    public get Kilotonnesquaremeters(): number {
        if(this.kilotonnesquaremetersLazy !== null){
            return this.kilotonnesquaremetersLazy;
        }
        return this.kilotonnesquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.Kilotonnesquaremeters);
    }

    public get Megatonnesquaremeters(): number {
        if(this.megatonnesquaremetersLazy !== null){
            return this.megatonnesquaremetersLazy;
        }
        return this.megatonnesquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.Megatonnesquaremeters);
    }

    public get Kilotonnesquaredecimeters(): number {
        if(this.kilotonnesquaredecimetersLazy !== null){
            return this.kilotonnesquaredecimetersLazy;
        }
        return this.kilotonnesquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.Kilotonnesquaredecimeters);
    }

    public get Megatonnesquaredecimeters(): number {
        if(this.megatonnesquaredecimetersLazy !== null){
            return this.megatonnesquaredecimetersLazy;
        }
        return this.megatonnesquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.Megatonnesquaredecimeters);
    }

    public get Kilotonnesquarecentimeters(): number {
        if(this.kilotonnesquarecentimetersLazy !== null){
            return this.kilotonnesquarecentimetersLazy;
        }
        return this.kilotonnesquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.Kilotonnesquarecentimeters);
    }

    public get Megatonnesquarecentimeters(): number {
        if(this.megatonnesquarecentimetersLazy !== null){
            return this.megatonnesquarecentimetersLazy;
        }
        return this.megatonnesquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.Megatonnesquarecentimeters);
    }

    public get Kilotonnesquaremilimeters(): number {
        if(this.kilotonnesquaremilimetersLazy !== null){
            return this.kilotonnesquaremilimetersLazy;
        }
        return this.kilotonnesquaremilimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.Kilotonnesquaremilimeters);
    }

    public get Megatonnesquaremilimeters(): number {
        if(this.megatonnesquaremilimetersLazy !== null){
            return this.megatonnesquaremilimetersLazy;
        }
        return this.megatonnesquaremilimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.Megatonnesquaremilimeters);
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

    public static FromKilogramsquaremeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.Kilogramsquaremeters);
    }

    public static FromKilogramsquaredecimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.Kilogramsquaredecimeters);
    }

    public static FromKilogramsquarecentimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.Kilogramsquarecentimeters);
    }

    public static FromKilogramsquaremillimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.Kilogramsquaremillimeters);
    }

    public static FromKilotonnesquaremeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.Kilotonnesquaremeters);
    }

    public static FromMegatonnesquaremeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.Megatonnesquaremeters);
    }

    public static FromKilotonnesquaredecimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.Kilotonnesquaredecimeters);
    }

    public static FromMegatonnesquaredecimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.Megatonnesquaredecimeters);
    }

    public static FromKilotonnesquarecentimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.Kilotonnesquarecentimeters);
    }

    public static FromMegatonnesquarecentimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.Megatonnesquarecentimeters);
    }

    public static FromKilotonnesquaremilimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.Kilotonnesquaremilimeters);
    }

    public static FromMegatonnesquaremilimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.Megatonnesquaremilimeters);
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
            case MassMomentOfInertiaUnits.Kilogramsquaremeters:
                return (this.value*1e3) / 1000;
            case MassMomentOfInertiaUnits.Kilogramsquaredecimeters:
                return (this.value*1e5) / 1000;
            case MassMomentOfInertiaUnits.Kilogramsquarecentimeters:
                return (this.value*1e7) / 1000;
            case MassMomentOfInertiaUnits.Kilogramsquaremillimeters:
                return (this.value*1e9) / 1000;
            case MassMomentOfInertiaUnits.Kilotonnesquaremeters:
                return (this.value*1e-3) / 1000;
            case MassMomentOfInertiaUnits.Megatonnesquaremeters:
                return (this.value*1e-3) / 1000000;
            case MassMomentOfInertiaUnits.Kilotonnesquaredecimeters:
                return (this.value*1e-1) / 1000;
            case MassMomentOfInertiaUnits.Megatonnesquaredecimeters:
                return (this.value*1e-1) / 1000000;
            case MassMomentOfInertiaUnits.Kilotonnesquarecentimeters:
                return (this.value*1e1) / 1000;
            case MassMomentOfInertiaUnits.Megatonnesquarecentimeters:
                return (this.value*1e1) / 1000000;
            case MassMomentOfInertiaUnits.Kilotonnesquaremilimeters:
                return (this.value*1e3) / 1000;
            case MassMomentOfInertiaUnits.Megatonnesquaremilimeters:
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
            case MassMomentOfInertiaUnits.Kilogramsquaremeters:
                return (value/1e3) * 1000;
            case MassMomentOfInertiaUnits.Kilogramsquaredecimeters:
                return (value/1e5) * 1000;
            case MassMomentOfInertiaUnits.Kilogramsquarecentimeters:
                return (value/1e7) * 1000;
            case MassMomentOfInertiaUnits.Kilogramsquaremillimeters:
                return (value/1e9) * 1000;
            case MassMomentOfInertiaUnits.Kilotonnesquaremeters:
                return (value/1e-3) * 1000;
            case MassMomentOfInertiaUnits.Megatonnesquaremeters:
                return (value/1e-3) * 1000000;
            case MassMomentOfInertiaUnits.Kilotonnesquaredecimeters:
                return (value/1e-1) * 1000;
            case MassMomentOfInertiaUnits.Megatonnesquaredecimeters:
                return (value/1e-1) * 1000000;
            case MassMomentOfInertiaUnits.Kilotonnesquarecentimeters:
                return (value/1e1) * 1000;
            case MassMomentOfInertiaUnits.Megatonnesquarecentimeters:
                return (value/1e1) * 1000000;
            case MassMomentOfInertiaUnits.Kilotonnesquaremilimeters:
                return (value/1e3) * 1000;
            case MassMomentOfInertiaUnits.Megatonnesquaremilimeters:
                return (value/1e3) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
