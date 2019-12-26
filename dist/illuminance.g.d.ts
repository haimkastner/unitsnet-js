export declare enum IlluminanceUnits {
    Lux = 0,
    Kilolux = 1,
    Megalux = 2
}
export declare class Illuminance {
    private value;
    private luxLazy;
    private kiloluxLazy;
    private megaluxLazy;
    constructor(value: number, fromUnit: IlluminanceUnits);
    get Lux(): number;
    get Kilolux(): number;
    get Megalux(): number;
    static FromLux(value: number): Illuminance;
    static FromKilolux(value: number): Illuminance;
    static FromMegalux(value: number): Illuminance;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=illuminance.g.d.ts.map