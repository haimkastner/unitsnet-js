export declare enum ElectricResistivityUnits {
    OhmMeters = 0,
    OhmsCentimeter = 1,
    PicoohmMeter = 2,
    NanoohmMeter = 3,
    MicroohmMeter = 4,
    KiloohmMeter = 5,
    MegaohmMeter = 6,
    PicoohmCentimeter = 7,
    NanoohmCentimeter = 8,
    MicroohmCentimeter = 9,
    KiloohmCentimeter = 10,
    MegaohmCentimeter = 11
}
export declare class ElectricResistivity {
    private value;
    private ohmmetersLazy;
    private ohmscentimeterLazy;
    private picoohmmeterLazy;
    private nanoohmmeterLazy;
    private microohmmeterLazy;
    private kiloohmmeterLazy;
    private megaohmmeterLazy;
    private picoohmcentimeterLazy;
    private nanoohmcentimeterLazy;
    private microohmcentimeterLazy;
    private kiloohmcentimeterLazy;
    private megaohmcentimeterLazy;
    constructor(value: number, fromUnit: ElectricResistivityUnits);
    get OhmMeters(): number;
    get OhmsCentimeter(): number;
    get PicoohmMeter(): number;
    get NanoohmMeter(): number;
    get MicroohmMeter(): number;
    get KiloohmMeter(): number;
    get MegaohmMeter(): number;
    get PicoohmCentimeter(): number;
    get NanoohmCentimeter(): number;
    get MicroohmCentimeter(): number;
    get KiloohmCentimeter(): number;
    get MegaohmCentimeter(): number;
    static FromOhmMeters(value: number): ElectricResistivity;
    static FromOhmsCentimeter(value: number): ElectricResistivity;
    static FromPicoohmMeter(value: number): ElectricResistivity;
    static FromNanoohmMeter(value: number): ElectricResistivity;
    static FromMicroohmMeter(value: number): ElectricResistivity;
    static FromKiloohmMeter(value: number): ElectricResistivity;
    static FromMegaohmMeter(value: number): ElectricResistivity;
    static FromPicoohmCentimeter(value: number): ElectricResistivity;
    static FromNanoohmCentimeter(value: number): ElectricResistivity;
    static FromMicroohmCentimeter(value: number): ElectricResistivity;
    static FromKiloohmCentimeter(value: number): ElectricResistivity;
    static FromMegaohmCentimeter(value: number): ElectricResistivity;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ElectricResistivityUnits): string;
}
//# sourceMappingURL=electricresistivity.g.d.ts.map