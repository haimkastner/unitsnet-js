export declare enum AreaMomentOfInertiaUnits {
    MetersToTheFourth = 0,
    DecimetersToTheFourth = 1,
    CentimetersToTheFourth = 2,
    MillimetersToTheFourth = 3,
    FeetToTheFourth = 4,
    InchesToTheFourth = 5
}
export declare class AreaMomentOfInertia {
    private value;
    constructor(value: number, fromUnit: AreaMomentOfInertiaUnits);
    get MetersToTheFourth(): number;
    get DecimetersToTheFourth(): number;
    get CentimetersToTheFourth(): number;
    get MillimetersToTheFourth(): number;
    get FeetToTheFourth(): number;
    get InchesToTheFourth(): number;
    static FromMetersToTheFourth(value: number): AreaMomentOfInertia;
    static FromDecimetersToTheFourth(value: number): AreaMomentOfInertia;
    static FromCentimetersToTheFourth(value: number): AreaMomentOfInertia;
    static FromMillimetersToTheFourth(value: number): AreaMomentOfInertia;
    static FromFeetToTheFourth(value: number): AreaMomentOfInertia;
    static FromInchesToTheFourth(value: number): AreaMomentOfInertia;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=areamomentofinertia.g.d.ts.map