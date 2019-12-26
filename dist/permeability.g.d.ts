export declare enum PermeabilityUnits {
    HenriesPerMeter = 0
}
export declare class Permeability {
    private value;
    private henriespermeterLazy;
    constructor(value: number, fromUnit: PermeabilityUnits);
    get HenriesPerMeter(): number;
    static FromHenriesPerMeter(value: number): Permeability;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=permeability.g.d.ts.map