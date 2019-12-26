export declare enum BitRateUnits {
    BitsPerSecond = 0,
    BytesPerSecond = 1,
    KilobitPerSecond = 2,
    MegabitPerSecond = 3,
    GigabitPerSecond = 4,
    TerabitPerSecond = 5,
    PetabitPerSecond = 6,
    ExabitPerSecond = 7,
    KilobytePerSecond = 8,
    MegabytePerSecond = 9,
    GigabytePerSecond = 10,
    TerabytePerSecond = 11,
    PetabytePerSecond = 12,
    ExabytePerSecond = 13
}
export declare class BitRate {
    private value;
    private bitspersecondLazy;
    private bytespersecondLazy;
    private kilobitpersecondLazy;
    private megabitpersecondLazy;
    private gigabitpersecondLazy;
    private terabitpersecondLazy;
    private petabitpersecondLazy;
    private exabitpersecondLazy;
    private kilobytepersecondLazy;
    private megabytepersecondLazy;
    private gigabytepersecondLazy;
    private terabytepersecondLazy;
    private petabytepersecondLazy;
    private exabytepersecondLazy;
    constructor(value: number, fromUnit: BitRateUnits);
    get BitsPerSecond(): number;
    get BytesPerSecond(): number;
    get KilobitPerSecond(): number;
    get MegabitPerSecond(): number;
    get GigabitPerSecond(): number;
    get TerabitPerSecond(): number;
    get PetabitPerSecond(): number;
    get ExabitPerSecond(): number;
    get KilobytePerSecond(): number;
    get MegabytePerSecond(): number;
    get GigabytePerSecond(): number;
    get TerabytePerSecond(): number;
    get PetabytePerSecond(): number;
    get ExabytePerSecond(): number;
    static FromBitsPerSecond(value: number): BitRate;
    static FromBytesPerSecond(value: number): BitRate;
    static FromKilobitPerSecond(value: number): BitRate;
    static FromMegabitPerSecond(value: number): BitRate;
    static FromGigabitPerSecond(value: number): BitRate;
    static FromTerabitPerSecond(value: number): BitRate;
    static FromPetabitPerSecond(value: number): BitRate;
    static FromExabitPerSecond(value: number): BitRate;
    static FromKilobytePerSecond(value: number): BitRate;
    static FromMegabytePerSecond(value: number): BitRate;
    static FromGigabytePerSecond(value: number): BitRate;
    static FromTerabytePerSecond(value: number): BitRate;
    static FromPetabytePerSecond(value: number): BitRate;
    static FromExabytePerSecond(value: number): BitRate;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: BitRateUnits): string;
}
//# sourceMappingURL=bitrate.g.d.ts.map