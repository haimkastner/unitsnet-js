export declare enum SolidAngleUnits {
    Steradians = 0
}
export declare class SolidAngle {
    private value;
    private steradiansLazy;
    constructor(value: number, fromUnit: SolidAngleUnits);
    get Steradians(): number;
    static FromSteradians(value: number): SolidAngle;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: SolidAngleUnits): string;
}
//# sourceMappingURL=solidangle.g.d.ts.map