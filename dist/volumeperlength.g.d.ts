export declare enum VolumePerLengthUnits {
    CubicMetersPerMeter = 0,
    LitersPerMeter = 1,
    OilBarrelsPerFoot = 2
}
export declare class VolumePerLength {
    private value;
    constructor(value: number, fromUnit: VolumePerLengthUnits);
    get CubicMetersPerMeter(): number;
    get LitersPerMeter(): number;
    get OilBarrelsPerFoot(): number;
    static FromCubicMetersPerMeter(value: number): VolumePerLength;
    static FromLitersPerMeter(value: number): VolumePerLength;
    static FromOilBarrelsPerFoot(value: number): VolumePerLength;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=volumeperlength.g.d.ts.map