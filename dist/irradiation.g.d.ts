export declare enum IrradiationUnits {
    JoulesPerSquareMeter = 0,
    JoulesPerSquareCentimeter = 1,
    JoulesPerSquareMillimeter = 2,
    WattHoursPerSquareMeter = 3,
    KilojoulePerSquareMeter = 4,
    KilowattHourPerSquareMeter = 5
}
export declare class Irradiation {
    private value;
    private joulespersquaremeterLazy;
    private joulespersquarecentimeterLazy;
    private joulespersquaremillimeterLazy;
    private watthourspersquaremeterLazy;
    private kilojoulepersquaremeterLazy;
    private kilowatthourpersquaremeterLazy;
    constructor(value: number, fromUnit: IrradiationUnits);
    get JoulesPerSquareMeter(): number;
    get JoulesPerSquareCentimeter(): number;
    get JoulesPerSquareMillimeter(): number;
    get WattHoursPerSquareMeter(): number;
    get KilojoulePerSquareMeter(): number;
    get KilowattHourPerSquareMeter(): number;
    static FromJoulesPerSquareMeter(value: number): Irradiation;
    static FromJoulesPerSquareCentimeter(value: number): Irradiation;
    static FromJoulesPerSquareMillimeter(value: number): Irradiation;
    static FromWattHoursPerSquareMeter(value: number): Irradiation;
    static FromKilojoulePerSquareMeter(value: number): Irradiation;
    static FromKilowattHourPerSquareMeter(value: number): Irradiation;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: IrradiationUnits): string;
}
//# sourceMappingURL=irradiation.g.d.ts.map