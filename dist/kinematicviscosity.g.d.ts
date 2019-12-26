export declare enum KinematicViscosityUnits {
    SquareMetersPerSecond = 0,
    Stokes = 1,
    Nanostokes = 2,
    Microstokes = 3,
    Centistokes = 4,
    Decistokes = 5,
    Kilostokes = 6
}
export declare class KinematicViscosity {
    private value;
    private squaremeterspersecondLazy;
    private stokesLazy;
    private nanostokesLazy;
    private microstokesLazy;
    private centistokesLazy;
    private decistokesLazy;
    private kilostokesLazy;
    constructor(value: number, fromUnit: KinematicViscosityUnits);
    get SquareMetersPerSecond(): number;
    get Stokes(): number;
    get Nanostokes(): number;
    get Microstokes(): number;
    get Centistokes(): number;
    get Decistokes(): number;
    get Kilostokes(): number;
    static FromSquareMetersPerSecond(value: number): KinematicViscosity;
    static FromStokes(value: number): KinematicViscosity;
    static FromNanostokes(value: number): KinematicViscosity;
    static FromMicrostokes(value: number): KinematicViscosity;
    static FromCentistokes(value: number): KinematicViscosity;
    static FromDecistokes(value: number): KinematicViscosity;
    static FromKilostokes(value: number): KinematicViscosity;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=kinematicviscosity.g.d.ts.map