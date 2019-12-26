export declare enum AngleUnits {
    Radians = 0,
    Degrees = 1,
    Arcminutes = 2,
    Arcseconds = 3,
    Gradians = 4,
    Revolutions = 5,
    Nanoradian = 6,
    Microradian = 7,
    Centiradian = 8,
    Deciradian = 9,
    Nanodegree = 10,
    Microdegree = 11
}
export declare class Angle {
    private value;
    private radiansLazy;
    private degreesLazy;
    private arcminutesLazy;
    private arcsecondsLazy;
    private gradiansLazy;
    private revolutionsLazy;
    private nanoradianLazy;
    private microradianLazy;
    private centiradianLazy;
    private deciradianLazy;
    private nanodegreeLazy;
    private microdegreeLazy;
    constructor(value: number, fromUnit: AngleUnits);
    get Radians(): number;
    get Degrees(): number;
    get Arcminutes(): number;
    get Arcseconds(): number;
    get Gradians(): number;
    get Revolutions(): number;
    get Nanoradian(): number;
    get Microradian(): number;
    get Centiradian(): number;
    get Deciradian(): number;
    get Nanodegree(): number;
    get Microdegree(): number;
    static FromRadians(value: number): Angle;
    static FromDegrees(value: number): Angle;
    static FromArcminutes(value: number): Angle;
    static FromArcseconds(value: number): Angle;
    static FromGradians(value: number): Angle;
    static FromRevolutions(value: number): Angle;
    static FromNanoradian(value: number): Angle;
    static FromMicroradian(value: number): Angle;
    static FromCentiradian(value: number): Angle;
    static FromDeciradian(value: number): Angle;
    static FromNanodegree(value: number): Angle;
    static FromMicrodegree(value: number): Angle;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: AngleUnits): string;
}
//# sourceMappingURL=angle.g.d.ts.map