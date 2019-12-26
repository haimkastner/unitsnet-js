export declare enum ElectricResistivityUnits {
    OhmMeters = 0,
    OhmsCentimeter = 1,
    Picoohmmeters = 2,
    Nanoohmmeters = 3,
    Microohmmeters = 4,
    Kiloohmmeters = 5,
    Megaohmmeters = 6,
    Picoohmscentimeter = 7,
    Nanoohmscentimeter = 8,
    Microohmscentimeter = 9,
    Kiloohmscentimeter = 10,
    Megaohmscentimeter = 11
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
    get Picoohmmeters(): number;
    get Nanoohmmeters(): number;
    get Microohmmeters(): number;
    get Kiloohmmeters(): number;
    get Megaohmmeters(): number;
    get Picoohmscentimeter(): number;
    get Nanoohmscentimeter(): number;
    get Microohmscentimeter(): number;
    get Kiloohmscentimeter(): number;
    get Megaohmscentimeter(): number;
    static FromOhmMeters(value: number): ElectricResistivity;
    static FromOhmsCentimeter(value: number): ElectricResistivity;
    static FromPicoohmmeters(value: number): ElectricResistivity;
    static FromNanoohmmeters(value: number): ElectricResistivity;
    static FromMicroohmmeters(value: number): ElectricResistivity;
    static FromKiloohmmeters(value: number): ElectricResistivity;
    static FromMegaohmmeters(value: number): ElectricResistivity;
    static FromPicoohmscentimeter(value: number): ElectricResistivity;
    static FromNanoohmscentimeter(value: number): ElectricResistivity;
    static FromMicroohmscentimeter(value: number): ElectricResistivity;
    static FromKiloohmscentimeter(value: number): ElectricResistivity;
    static FromMegaohmscentimeter(value: number): ElectricResistivity;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=electricresistivity.g.d.ts.map