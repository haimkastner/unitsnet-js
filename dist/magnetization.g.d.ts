export declare enum MagnetizationUnits {
    AmperesPerMeter = 0
}
export declare class Magnetization {
    private value;
    private amperespermeterLazy;
    constructor(value: number, fromUnit: MagnetizationUnits);
    get AmperesPerMeter(): number;
    static FromAmperesPerMeter(value: number): Magnetization;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=magnetization.g.d.ts.map