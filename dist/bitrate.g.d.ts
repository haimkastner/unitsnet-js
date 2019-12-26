export declare enum BitRateUnits {
    BitsPerSecond = 0,
    BytesPerSecond = 1,
    Kilobitspersecond = 2,
    Megabitspersecond = 3,
    Gigabitspersecond = 4,
    Terabitspersecond = 5,
    Petabitspersecond = 6,
    Exabitspersecond = 7,
    Kilobytespersecond = 8,
    Megabytespersecond = 9,
    Gigabytespersecond = 10,
    Terabytespersecond = 11,
    Petabytespersecond = 12,
    Exabytespersecond = 13
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
    get Kilobitspersecond(): number;
    get Megabitspersecond(): number;
    get Gigabitspersecond(): number;
    get Terabitspersecond(): number;
    get Petabitspersecond(): number;
    get Exabitspersecond(): number;
    get Kilobytespersecond(): number;
    get Megabytespersecond(): number;
    get Gigabytespersecond(): number;
    get Terabytespersecond(): number;
    get Petabytespersecond(): number;
    get Exabytespersecond(): number;
    static FromBitsPerSecond(value: number): BitRate;
    static FromBytesPerSecond(value: number): BitRate;
    static FromKilobitspersecond(value: number): BitRate;
    static FromMegabitspersecond(value: number): BitRate;
    static FromGigabitspersecond(value: number): BitRate;
    static FromTerabitspersecond(value: number): BitRate;
    static FromPetabitspersecond(value: number): BitRate;
    static FromExabitspersecond(value: number): BitRate;
    static FromKilobytespersecond(value: number): BitRate;
    static FromMegabytespersecond(value: number): BitRate;
    static FromGigabytespersecond(value: number): BitRate;
    static FromTerabytespersecond(value: number): BitRate;
    static FromPetabytespersecond(value: number): BitRate;
    static FromExabytespersecond(value: number): BitRate;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=bitrate.g.d.ts.map