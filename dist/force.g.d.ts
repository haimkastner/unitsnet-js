export declare enum ForceUnits {
    Dyne = 0,
    KilogramsForce = 1,
    TonnesForce = 2,
    Newtons = 3,
    KiloPonds = 4,
    Poundals = 5,
    PoundsForce = 6,
    OunceForce = 7,
    Micronewton = 8,
    Decanewton = 9,
    Kilonewton = 10,
    Meganewton = 11
}
export declare class Force {
    private value;
    private dyneLazy;
    private kilogramsforceLazy;
    private tonnesforceLazy;
    private newtonsLazy;
    private kilopondsLazy;
    private poundalsLazy;
    private poundsforceLazy;
    private ounceforceLazy;
    private micronewtonLazy;
    private decanewtonLazy;
    private kilonewtonLazy;
    private meganewtonLazy;
    constructor(value: number, fromUnit: ForceUnits);
    get Dyne(): number;
    get KilogramsForce(): number;
    get TonnesForce(): number;
    get Newtons(): number;
    get KiloPonds(): number;
    get Poundals(): number;
    get PoundsForce(): number;
    get OunceForce(): number;
    get Micronewton(): number;
    get Decanewton(): number;
    get Kilonewton(): number;
    get Meganewton(): number;
    static FromDyne(value: number): Force;
    static FromKilogramsForce(value: number): Force;
    static FromTonnesForce(value: number): Force;
    static FromNewtons(value: number): Force;
    static FromKiloPonds(value: number): Force;
    static FromPoundals(value: number): Force;
    static FromPoundsForce(value: number): Force;
    static FromOunceForce(value: number): Force;
    static FromMicronewton(value: number): Force;
    static FromDecanewton(value: number): Force;
    static FromKilonewton(value: number): Force;
    static FromMeganewton(value: number): Force;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ForceUnits): string;
}
//# sourceMappingURL=force.g.d.ts.map