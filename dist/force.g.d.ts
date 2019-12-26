export declare enum ForceUnits {
    Dyne = 0,
    KilogramsForce = 1,
    TonnesForce = 2,
    Newtons = 3,
    KiloPonds = 4,
    Poundals = 5,
    PoundsForce = 6,
    OunceForce = 7,
    Micronewtons = 8,
    Decanewtons = 9,
    Kilonewtons = 10,
    Meganewtons = 11
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
    private micronewtonsLazy;
    private decanewtonsLazy;
    private kilonewtonsLazy;
    private meganewtonsLazy;
    constructor(value: number, fromUnit: ForceUnits);
    get Dyne(): number;
    get KilogramsForce(): number;
    get TonnesForce(): number;
    get Newtons(): number;
    get KiloPonds(): number;
    get Poundals(): number;
    get PoundsForce(): number;
    get OunceForce(): number;
    get Micronewtons(): number;
    get Decanewtons(): number;
    get Kilonewtons(): number;
    get Meganewtons(): number;
    static FromDyne(value: number): Force;
    static FromKilogramsForce(value: number): Force;
    static FromTonnesForce(value: number): Force;
    static FromNewtons(value: number): Force;
    static FromKiloPonds(value: number): Force;
    static FromPoundals(value: number): Force;
    static FromPoundsForce(value: number): Force;
    static FromOunceForce(value: number): Force;
    static FromMicronewtons(value: number): Force;
    static FromDecanewtons(value: number): Force;
    static FromKilonewtons(value: number): Force;
    static FromMeganewtons(value: number): Force;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=force.g.d.ts.map