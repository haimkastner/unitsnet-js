export declare enum ElectricResistivityUnits {
    OhmMeters = 0,
    OhmsCentimeter = 1,
    PicoohmMeters = 2,
    NanoohmMeters = 3,
    MicroohmMeters = 4,
    KiloohmMeters = 5,
    MegaohmMeters = 6,
    PicoohmsCentimeter = 7,
    NanoohmsCentimeter = 8,
    MicroohmsCentimeter = 9,
    KiloohmsCentimeter = 10,
    MegaohmsCentimeter = 11
}
export declare class ElectricResistivity {
    private value;
    private ohmmetersLazy;
    private ohmscentimeterLazy;
    private picoohmmetersLazy;
    private nanoohmmetersLazy;
    private microohmmetersLazy;
    private kiloohmmetersLazy;
    private megaohmmetersLazy;
    private picoohmscentimeterLazy;
    private nanoohmscentimeterLazy;
    private microohmscentimeterLazy;
    private kiloohmscentimeterLazy;
    private megaohmscentimeterLazy;
    constructor(value: number, fromUnit: ElectricResistivityUnits);
    get OhmMeters(): number;
    get OhmsCentimeter(): number;
    get PicoohmMeters(): number;
    get NanoohmMeters(): number;
    get MicroohmMeters(): number;
    get KiloohmMeters(): number;
    get MegaohmMeters(): number;
    get PicoohmsCentimeter(): number;
    get NanoohmsCentimeter(): number;
    get MicroohmsCentimeter(): number;
    get KiloohmsCentimeter(): number;
    get MegaohmsCentimeter(): number;
    static FromOhmMeters(value: number): ElectricResistivity;
    static FromOhmsCentimeter(value: number): ElectricResistivity;
    static FromPicoohmMeters(value: number): ElectricResistivity;
    static FromNanoohmMeters(value: number): ElectricResistivity;
    static FromMicroohmMeters(value: number): ElectricResistivity;
    static FromKiloohmMeters(value: number): ElectricResistivity;
    static FromMegaohmMeters(value: number): ElectricResistivity;
    static FromPicoohmsCentimeter(value: number): ElectricResistivity;
    static FromNanoohmsCentimeter(value: number): ElectricResistivity;
    static FromMicroohmsCentimeter(value: number): ElectricResistivity;
    static FromKiloohmsCentimeter(value: number): ElectricResistivity;
    static FromMegaohmsCentimeter(value: number): ElectricResistivity;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ElectricResistivityUnits): string;
}
//# sourceMappingURL=electricresistivity.g.d.ts.map