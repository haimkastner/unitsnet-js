export declare enum IrradianceUnits {
    WattsPerSquareMeter = 0,
    WattsPerSquareCentimeter = 1,
    PicowattsPerSquareMeter = 2,
    NanowattsPerSquareMeter = 3,
    MicrowattsPerSquareMeter = 4,
    KilowattsPerSquareMeter = 5,
    MegawattsPerSquareMeter = 6,
    PicowattsPerSquareCentimeter = 7,
    NanowattsPerSquareCentimeter = 8,
    MicrowattsPerSquareCentimeter = 9,
    KilowattsPerSquareCentimeter = 10,
    MegawattsPerSquareCentimeter = 11
}
export declare class Irradiance {
    private value;
    private wattspersquaremeterLazy;
    private wattspersquarecentimeterLazy;
    private picowattspersquaremeterLazy;
    private nanowattspersquaremeterLazy;
    private microwattspersquaremeterLazy;
    private kilowattspersquaremeterLazy;
    private megawattspersquaremeterLazy;
    private picowattspersquarecentimeterLazy;
    private nanowattspersquarecentimeterLazy;
    private microwattspersquarecentimeterLazy;
    private kilowattspersquarecentimeterLazy;
    private megawattspersquarecentimeterLazy;
    constructor(value: number, fromUnit: IrradianceUnits);
    get WattsPerSquareMeter(): number;
    get WattsPerSquareCentimeter(): number;
    get PicowattsPerSquareMeter(): number;
    get NanowattsPerSquareMeter(): number;
    get MicrowattsPerSquareMeter(): number;
    get KilowattsPerSquareMeter(): number;
    get MegawattsPerSquareMeter(): number;
    get PicowattsPerSquareCentimeter(): number;
    get NanowattsPerSquareCentimeter(): number;
    get MicrowattsPerSquareCentimeter(): number;
    get KilowattsPerSquareCentimeter(): number;
    get MegawattsPerSquareCentimeter(): number;
    static FromWattsPerSquareMeter(value: number): Irradiance;
    static FromWattsPerSquareCentimeter(value: number): Irradiance;
    static FromPicowattsPerSquareMeter(value: number): Irradiance;
    static FromNanowattsPerSquareMeter(value: number): Irradiance;
    static FromMicrowattsPerSquareMeter(value: number): Irradiance;
    static FromKilowattsPerSquareMeter(value: number): Irradiance;
    static FromMegawattsPerSquareMeter(value: number): Irradiance;
    static FromPicowattsPerSquareCentimeter(value: number): Irradiance;
    static FromNanowattsPerSquareCentimeter(value: number): Irradiance;
    static FromMicrowattsPerSquareCentimeter(value: number): Irradiance;
    static FromKilowattsPerSquareCentimeter(value: number): Irradiance;
    static FromMegawattsPerSquareCentimeter(value: number): Irradiance;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: IrradianceUnits): string;
}
//# sourceMappingURL=irradiance.g.d.ts.map