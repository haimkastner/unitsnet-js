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

    public constructor(value: number, fromUnit: MassMomentOfInertiaUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get GramSquareMeters(): number {
        return this.convertFromBase(MassMomentOfInertiaUnits.GramSquareMeters);
    }

    public get GramSquareDecimeters(): number {
        return this.convertFromBase(MassMomentOfInertiaUnits.GramSquareDecimeters);
    }

    public get GramSquareCentimeters(): number {
        return this.convertFromBase(MassMomentOfInertiaUnits.GramSquareCentimeters);
    }

    public get GramSquareMillimeters(): number {
        return this.convertFromBase(MassMomentOfInertiaUnits.GramSquareMillimeters);
    }

    public get TonneSquareMeters(): number {
        return this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareMeters);
    }

    public get TonneSquareDecimeters(): number {
        return this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareDecimeters);
    }

    public get TonneSquareCentimeters(): number {
        return this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareCentimeters);
    }

    public get TonneSquareMilimeters(): number {
        return this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareMilimeters);
    }

    public get PoundSquareFeet(): number {
        return this.convertFromBase(MassMomentOfInertiaUnits.PoundSquareFeet);
    }

    public get PoundSquareInches(): number {
        return this.convertFromBase(MassMomentOfInertiaUnits.PoundSquareInches);
    }

    public get SlugSquareFeet(): number {
        return this.convertFromBase(MassMomentOfInertiaUnits.SlugSquareFeet);
    }

    public get SlugSquareInches(): number {
        return this.convertFromBase(MassMomentOfInertiaUnits.SlugSquareInches);
    }

    public get Kilogramsquaremeters(): number {
        return this.convertFromBase(MassMomentOfInertiaUnits.Kilogramsquaremeters);
    }

    public get Kilogramsquaredecimeters(): number {
        return this.convertFromBase(MassMomentOfInertiaUnits.Kilogramsquaredecimeters);
    }

    public get Kilogramsquarecentimeters(): number {
        return this.convertFromBase(MassMomentOfInertiaUnits.Kilogramsquarecentimeters);
    }

    public get Kilogramsquaremillimeters(): number {
        return this.convertFromBase(MassMomentOfInertiaUnits.Kilogramsquaremillimeters);
    }

    public get Kilotonnesquaremeters(): number {
        return this.convertFromBase(MassMomentOfInertiaUnits.Kilotonnesquaremeters);
    }

    public get Megatonnesquaremeters(): number {
        return this.convertFromBase(MassMomentOfInertiaUnits.Megatonnesquaremeters);
    }

    public get Kilotonnesquaredecimeters(): number {
        return this.convertFromBase(MassMomentOfInertiaUnits.Kilotonnesquaredecimeters);
    }

    public get Megatonnesquaredecimeters(): number {
        return this.convertFromBase(MassMomentOfInertiaUnits.Megatonnesquaredecimeters);
    }

    public get Kilotonnesquarecentimeters(): number {
        return this.convertFromBase(MassMomentOfInertiaUnits.Kilotonnesquarecentimeters);
    }

    public get Megatonnesquarecentimeters(): number {
        return this.convertFromBase(MassMomentOfInertiaUnits.Megatonnesquarecentimeters);
    }

    public get Kilotonnesquaremilimeters(): number {
        return this.convertFromBase(MassMomentOfInertiaUnits.Kilotonnesquaremilimeters);
    }

    public get Megatonnesquaremilimeters(): number {
        return this.convertFromBase(MassMomentOfInertiaUnits.Megatonnesquaremilimeters);
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
