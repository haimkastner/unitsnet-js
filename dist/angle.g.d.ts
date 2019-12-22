export declare enum AngleUnits {
    Radians = 0,
    Degrees = 1,
    Arcminutes = 2,
    Arcseconds = 3,
    Gradians = 4,
    Revolutions = 5,
    Nanoradians = 6,
    Microradians = 7,
    Centiradians = 8,
    Deciradians = 9,
    Nanodegrees = 10,
    Microdegrees = 11
}
export declare class Angle {
    private value;
    constructor(value: number, fromUnit: AngleUnits);
    get Radians(): number;
    get Degrees(): number;
    get Arcminutes(): number;
    get Arcseconds(): number;
    get Gradians(): number;
    get Revolutions(): number;
    get Nanoradians(): number;
    get Microradians(): number;
    get Centiradians(): number;
    get Deciradians(): number;
    get Nanodegrees(): number;
    get Microdegrees(): number;
    static FromRadians(value: number): Angle;
    static FromDegrees(value: number): Angle;
    static FromArcminutes(value: number): Angle;
    static FromArcseconds(value: number): Angle;
    static FromGradians(value: number): Angle;
    static FromRevolutions(value: number): Angle;
    static FromNanoradians(value: number): Angle;
    static FromMicroradians(value: number): Angle;
    static FromCentiradians(value: number): Angle;
    static FromDeciradians(value: number): Angle;
    static FromNanodegrees(value: number): Angle;
    static FromMicrodegrees(value: number): Angle;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=angle.g.d.ts.map