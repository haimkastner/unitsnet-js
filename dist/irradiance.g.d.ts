export declare enum IrradianceUnits {
    WattsPerSquareMeter = 0,
    WattsPerSquareCentimeter = 1,
    Picowattspersquaremeter = 2,
    Nanowattspersquaremeter = 3,
    Microwattspersquaremeter = 4,
    Kilowattspersquaremeter = 5,
    Megawattspersquaremeter = 6,
    Picowattspersquarecentimeter = 7,
    Nanowattspersquarecentimeter = 8,
    Microwattspersquarecentimeter = 9,
    Kilowattspersquarecentimeter = 10,
    Megawattspersquarecentimeter = 11
}
export declare class Irradiance {
    private value;
    constructor(value: number, fromUnit: IrradianceUnits);
    get WattsPerSquareMeter(): number;
    get WattsPerSquareCentimeter(): number;
    get Picowattspersquaremeter(): number;
    get Nanowattspersquaremeter(): number;
    get Microwattspersquaremeter(): number;
    get Kilowattspersquaremeter(): number;
    get Megawattspersquaremeter(): number;
    get Picowattspersquarecentimeter(): number;
    get Nanowattspersquarecentimeter(): number;
    get Microwattspersquarecentimeter(): number;
    get Kilowattspersquarecentimeter(): number;
    get Megawattspersquarecentimeter(): number;
    static FromWattsPerSquareMeter(value: number): Irradiance;
    static FromWattsPerSquareCentimeter(value: number): Irradiance;
    static FromPicowattspersquaremeter(value: number): Irradiance;
    static FromNanowattspersquaremeter(value: number): Irradiance;
    static FromMicrowattspersquaremeter(value: number): Irradiance;
    static FromKilowattspersquaremeter(value: number): Irradiance;
    static FromMegawattspersquaremeter(value: number): Irradiance;
    static FromPicowattspersquarecentimeter(value: number): Irradiance;
    static FromNanowattspersquarecentimeter(value: number): Irradiance;
    static FromMicrowattspersquarecentimeter(value: number): Irradiance;
    static FromKilowattspersquarecentimeter(value: number): Irradiance;
    static FromMegawattspersquarecentimeter(value: number): Irradiance;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=irradiance.g.d.ts.map