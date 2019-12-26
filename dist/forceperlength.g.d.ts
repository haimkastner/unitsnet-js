export declare enum ForcePerLengthUnits {
    NewtonsPerMeter = 0,
    KilogramsForcePerMeter = 1,
    PoundsForcePerFoot = 2,
    PoundsForcePerInch = 3,
    PoundsForcePerYard = 4,
    NanonewtonPerMeter = 5,
    MicronewtonPerMeter = 6,
    CentinewtonPerMeter = 7,
    DecinewtonPerMeter = 8,
    KilonewtonPerMeter = 9,
    MeganewtonPerMeter = 10
}
export declare class ForcePerLength {
    private value;
    private newtonspermeterLazy;
    private kilogramsforcepermeterLazy;
    private poundsforceperfootLazy;
    private poundsforceperinchLazy;
    private poundsforceperyardLazy;
    private nanonewtonpermeterLazy;
    private micronewtonpermeterLazy;
    private centinewtonpermeterLazy;
    private decinewtonpermeterLazy;
    private kilonewtonpermeterLazy;
    private meganewtonpermeterLazy;
    constructor(value: number, fromUnit: ForcePerLengthUnits);
    get NewtonsPerMeter(): number;
    get KilogramsForcePerMeter(): number;
    get PoundsForcePerFoot(): number;
    get PoundsForcePerInch(): number;
    get PoundsForcePerYard(): number;
    get NanonewtonPerMeter(): number;
    get MicronewtonPerMeter(): number;
    get CentinewtonPerMeter(): number;
    get DecinewtonPerMeter(): number;
    get KilonewtonPerMeter(): number;
    get MeganewtonPerMeter(): number;
    static FromNewtonsPerMeter(value: number): ForcePerLength;
    static FromKilogramsForcePerMeter(value: number): ForcePerLength;
    static FromPoundsForcePerFoot(value: number): ForcePerLength;
    static FromPoundsForcePerInch(value: number): ForcePerLength;
    static FromPoundsForcePerYard(value: number): ForcePerLength;
    static FromNanonewtonPerMeter(value: number): ForcePerLength;
    static FromMicronewtonPerMeter(value: number): ForcePerLength;
    static FromCentinewtonPerMeter(value: number): ForcePerLength;
    static FromDecinewtonPerMeter(value: number): ForcePerLength;
    static FromKilonewtonPerMeter(value: number): ForcePerLength;
    static FromMeganewtonPerMeter(value: number): ForcePerLength;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ForcePerLengthUnits): string;
}
//# sourceMappingURL=forceperlength.g.d.ts.map