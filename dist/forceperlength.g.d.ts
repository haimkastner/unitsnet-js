export declare enum ForcePerLengthUnits {
    NewtonsPerMeter = 0,
    KilogramsForcePerMeter = 1,
    PoundsForcePerFoot = 2,
    PoundsForcePerInch = 3,
    PoundsForcePerYard = 4,
    Nanonewtonspermeter = 5,
    Micronewtonspermeter = 6,
    Centinewtonspermeter = 7,
    Decinewtonspermeter = 8,
    Kilonewtonspermeter = 9,
    Meganewtonspermeter = 10
}
export declare class ForcePerLength {
    private value;
    constructor(value: number, fromUnit: ForcePerLengthUnits);
    get NewtonsPerMeter(): number;
    get KilogramsForcePerMeter(): number;
    get PoundsForcePerFoot(): number;
    get PoundsForcePerInch(): number;
    get PoundsForcePerYard(): number;
    get Nanonewtonspermeter(): number;
    get Micronewtonspermeter(): number;
    get Centinewtonspermeter(): number;
    get Decinewtonspermeter(): number;
    get Kilonewtonspermeter(): number;
    get Meganewtonspermeter(): number;
    static FromNewtonsPerMeter(value: number): ForcePerLength;
    static FromKilogramsForcePerMeter(value: number): ForcePerLength;
    static FromPoundsForcePerFoot(value: number): ForcePerLength;
    static FromPoundsForcePerInch(value: number): ForcePerLength;
    static FromPoundsForcePerYard(value: number): ForcePerLength;
    static FromNanonewtonspermeter(value: number): ForcePerLength;
    static FromMicronewtonspermeter(value: number): ForcePerLength;
    static FromCentinewtonspermeter(value: number): ForcePerLength;
    static FromDecinewtonspermeter(value: number): ForcePerLength;
    static FromKilonewtonspermeter(value: number): ForcePerLength;
    static FromMeganewtonspermeter(value: number): ForcePerLength;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=forceperlength.g.d.ts.map