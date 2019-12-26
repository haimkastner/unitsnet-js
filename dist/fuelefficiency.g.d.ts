export declare enum FuelEfficiencyUnits {
    LitersPer100Kilometers = 0,
    MilesPerUsGallon = 1,
    MilesPerUkGallon = 2,
    KilometersPerLiters = 3
}
export declare class FuelEfficiency {
    private value;
    private litersper100kilometersLazy;
    private milesperusgallonLazy;
    private milesperukgallonLazy;
    private kilometersperlitersLazy;
    constructor(value: number, fromUnit: FuelEfficiencyUnits);
    get LitersPer100Kilometers(): number;
    get MilesPerUsGallon(): number;
    get MilesPerUkGallon(): number;
    get KilometersPerLiters(): number;
    static FromLitersPer100Kilometers(value: number): FuelEfficiency;
    static FromMilesPerUsGallon(value: number): FuelEfficiency;
    static FromMilesPerUkGallon(value: number): FuelEfficiency;
    static FromKilometersPerLiters(value: number): FuelEfficiency;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=fuelefficiency.g.d.ts.map