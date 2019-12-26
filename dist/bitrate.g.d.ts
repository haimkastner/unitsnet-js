export declare enum BitRateUnits {
    BitsPerSecond = 0,
    BytesPerSecond = 1,
    KilobitsPerSecond = 2,
    MegabitsPerSecond = 3,
    GigabitsPerSecond = 4,
    TerabitsPerSecond = 5,
    PetabitsPerSecond = 6,
    ExabitsPerSecond = 7,
    KilobytesPerSecond = 8,
    MegabytesPerSecond = 9,
    GigabytesPerSecond = 10,
    TerabytesPerSecond = 11,
    PetabytesPerSecond = 12,
    ExabytesPerSecond = 13
}
export declare class BitRate {
    private value;
    private bitspersecondLazy;
    private bytespersecondLazy;
    private kilobitspersecondLazy;
    private megabitspersecondLazy;
    private gigabitspersecondLazy;
    private terabitspersecondLazy;
    private petabitspersecondLazy;
    private exabitspersecondLazy;
    private kilobytespersecondLazy;
    private megabytespersecondLazy;
    private gigabytespersecondLazy;
    private terabytespersecondLazy;
    private petabytespersecondLazy;
    private exabytespersecondLazy;
    constructor(value: number, fromUnit: BitRateUnits);
    get BitsPerSecond(): number;
    get BytesPerSecond(): number;
    get KilobitsPerSecond(): number;
    get MegabitsPerSecond(): number;
    get GigabitsPerSecond(): number;
    get TerabitsPerSecond(): number;
    get PetabitsPerSecond(): number;
    get ExabitsPerSecond(): number;
    get KilobytesPerSecond(): number;
    get MegabytesPerSecond(): number;
    get GigabytesPerSecond(): number;
    get TerabytesPerSecond(): number;
    get PetabytesPerSecond(): number;
    get ExabytesPerSecond(): number;
    static FromBitsPerSecond(value: number): BitRate;
    static FromBytesPerSecond(value: number): BitRate;
    static FromKilobitsPerSecond(value: number): BitRate;
    static FromMegabitsPerSecond(value: number): BitRate;
    static FromGigabitsPerSecond(value: number): BitRate;
    static FromTerabitsPerSecond(value: number): BitRate;
    static FromPetabitsPerSecond(value: number): BitRate;
    static FromExabitsPerSecond(value: number): BitRate;
    static FromKilobytesPerSecond(value: number): BitRate;
    static FromMegabytesPerSecond(value: number): BitRate;
    static FromGigabytesPerSecond(value: number): BitRate;
    static FromTerabytesPerSecond(value: number): BitRate;
    static FromPetabytesPerSecond(value: number): BitRate;
    static FromExabytesPerSecond(value: number): BitRate;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: BitRateUnits): string;
}
//# sourceMappingURL=bitrate.g.d.ts.map