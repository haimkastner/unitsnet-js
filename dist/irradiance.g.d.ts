export declare enum IrradianceUnits {
    WattsPerSquareMeter = 0,
    WattsPerSquareCentimeter = 1,
    PicowattPerSquareMeter = 2,
    NanowattPerSquareMeter = 3,
    MicrowattPerSquareMeter = 4,
    KilowattPerSquareMeter = 5,
    MegawattPerSquareMeter = 6,
    PicowattPerSquareCentimeter = 7,
    NanowattPerSquareCentimeter = 8,
    MicrowattPerSquareCentimeter = 9,
    KilowattPerSquareCentimeter = 10,
    MegawattPerSquareCentimeter = 11
}
export declare class Irradiance {
    private value;
    private wattspersquaremeterLazy;
    private wattspersquarecentimeterLazy;
    private picowattpersquaremeterLazy;
    private nanowattpersquaremeterLazy;
    private microwattpersquaremeterLazy;
    private kilowattpersquaremeterLazy;
    private megawattpersquaremeterLazy;
    private picowattpersquarecentimeterLazy;
    private nanowattpersquarecentimeterLazy;
    private microwattpersquarecentimeterLazy;
    private kilowattpersquarecentimeterLazy;
    private megawattpersquarecentimeterLazy;
    constructor(value: number, fromUnit: IrradianceUnits);
    get WattsPerSquareMeter(): number;
    get WattsPerSquareCentimeter(): number;
    get PicowattPerSquareMeter(): number;
    get NanowattPerSquareMeter(): number;
    get MicrowattPerSquareMeter(): number;
    get KilowattPerSquareMeter(): number;
    get MegawattPerSquareMeter(): number;
    get PicowattPerSquareCentimeter(): number;
    get NanowattPerSquareCentimeter(): number;
    get MicrowattPerSquareCentimeter(): number;
    get KilowattPerSquareCentimeter(): number;
    get MegawattPerSquareCentimeter(): number;
    static FromWattsPerSquareMeter(value: number): Irradiance;
    static FromWattsPerSquareCentimeter(value: number): Irradiance;
    static FromPicowattPerSquareMeter(value: number): Irradiance;
    static FromNanowattPerSquareMeter(value: number): Irradiance;
    static FromMicrowattPerSquareMeter(value: number): Irradiance;
    static FromKilowattPerSquareMeter(value: number): Irradiance;
    static FromMegawattPerSquareMeter(value: number): Irradiance;
    static FromPicowattPerSquareCentimeter(value: number): Irradiance;
    static FromNanowattPerSquareCentimeter(value: number): Irradiance;
    static FromMicrowattPerSquareCentimeter(value: number): Irradiance;
    static FromKilowattPerSquareCentimeter(value: number): Irradiance;
    static FromMegawattPerSquareCentimeter(value: number): Irradiance;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: IrradianceUnits): string;
}
//# sourceMappingURL=irradiance.g.d.ts.map