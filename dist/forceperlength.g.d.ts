export declare enum ForcePerLengthUnits {
    NewtonsPerMeter = 0,
    KilogramsForcePerMeter = 1,
    PoundsForcePerFoot = 2,
    PoundsForcePerInch = 3,
    PoundsForcePerYard = 4,
    NanonewtonsPerMeter = 5,
    MicronewtonsPerMeter = 6,
    CentinewtonsPerMeter = 7,
    DecinewtonsPerMeter = 8,
    KilonewtonsPerMeter = 9,
    MeganewtonsPerMeter = 10
}
export declare class ForcePerLength {
    private value;
    private newtonspermeterLazy;
    private kilogramsforcepermeterLazy;
    private poundsforceperfootLazy;
    private poundsforceperinchLazy;
    private poundsforceperyardLazy;
    private nanonewtonspermeterLazy;
    private micronewtonspermeterLazy;
    private centinewtonspermeterLazy;
    private decinewtonspermeterLazy;
    private kilonewtonspermeterLazy;
    private meganewtonspermeterLazy;
    constructor(value: number, fromUnit: ForcePerLengthUnits);
    get NewtonsPerMeter(): number;
    get KilogramsForcePerMeter(): number;
    get PoundsForcePerFoot(): number;
    get PoundsForcePerInch(): number;
    get PoundsForcePerYard(): number;
    get NanonewtonsPerMeter(): number;
    get MicronewtonsPerMeter(): number;
    get CentinewtonsPerMeter(): number;
    get DecinewtonsPerMeter(): number;
    get KilonewtonsPerMeter(): number;
    get MeganewtonsPerMeter(): number;
    static FromNewtonsPerMeter(value: number): ForcePerLength;
    static FromKilogramsForcePerMeter(value: number): ForcePerLength;
    static FromPoundsForcePerFoot(value: number): ForcePerLength;
    static FromPoundsForcePerInch(value: number): ForcePerLength;
    static FromPoundsForcePerYard(value: number): ForcePerLength;
    static FromNanonewtonsPerMeter(value: number): ForcePerLength;
    static FromMicronewtonsPerMeter(value: number): ForcePerLength;
    static FromCentinewtonsPerMeter(value: number): ForcePerLength;
    static FromDecinewtonsPerMeter(value: number): ForcePerLength;
    static FromKilonewtonsPerMeter(value: number): ForcePerLength;
    static FromMeganewtonsPerMeter(value: number): ForcePerLength;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ForcePerLengthUnits): string;
}
//# sourceMappingURL=forceperlength.g.d.ts.map