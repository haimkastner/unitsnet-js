export declare enum IrradiationUnits {
    JoulesPerSquareMeter = 0,
    JoulesPerSquareCentimeter = 1,
    JoulesPerSquareMillimeter = 2,
    WattHoursPerSquareMeter = 3,
    Kilojoulespersquaremeter = 4,
    Kilowatthourspersquaremeter = 5
}
export declare class Irradiation {
    private value;
    private joulespersquaremeterLazy;
    private joulespersquarecentimeterLazy;
    private joulespersquaremillimeterLazy;
    private watthourspersquaremeterLazy;
    private kilojoulespersquaremeterLazy;
    private kilowatthourspersquaremeterLazy;
    constructor(value: number, fromUnit: IrradiationUnits);
    get JoulesPerSquareMeter(): number;
    get JoulesPerSquareCentimeter(): number;
    get JoulesPerSquareMillimeter(): number;
    get WattHoursPerSquareMeter(): number;
    get Kilojoulespersquaremeter(): number;
    get Kilowatthourspersquaremeter(): number;
    static FromJoulesPerSquareMeter(value: number): Irradiation;
    static FromJoulesPerSquareCentimeter(value: number): Irradiation;
    static FromJoulesPerSquareMillimeter(value: number): Irradiation;
    static FromWattHoursPerSquareMeter(value: number): Irradiation;
    static FromKilojoulespersquaremeter(value: number): Irradiation;
    static FromKilowatthourspersquaremeter(value: number): Irradiation;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=irradiation.g.d.ts.map