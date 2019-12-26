export declare enum InformationUnits {
    Bytes = 0,
    Bits = 1,
    Kilobyte = 2,
    Megabyte = 3,
    Gigabyte = 4,
    Terabyte = 5,
    Petabyte = 6,
    Exabyte = 7,
    Kilobit = 8,
    Megabit = 9,
    Gigabit = 10,
    Terabit = 11,
    Petabit = 12,
    Exabit = 13
}
export declare class Information {
    private value;
    private bytesLazy;
    private bitsLazy;
    private kilobyteLazy;
    private megabyteLazy;
    private gigabyteLazy;
    private terabyteLazy;
    private petabyteLazy;
    private exabyteLazy;
    private kilobitLazy;
    private megabitLazy;
    private gigabitLazy;
    private terabitLazy;
    private petabitLazy;
    private exabitLazy;
    constructor(value: number, fromUnit: InformationUnits);
    get Bytes(): number;
    get Bits(): number;
    get Kilobyte(): number;
    get Megabyte(): number;
    get Gigabyte(): number;
    get Terabyte(): number;
    get Petabyte(): number;
    get Exabyte(): number;
    get Kilobit(): number;
    get Megabit(): number;
    get Gigabit(): number;
    get Terabit(): number;
    get Petabit(): number;
    get Exabit(): number;
    static FromBytes(value: number): Information;
    static FromBits(value: number): Information;
    static FromKilobyte(value: number): Information;
    static FromMegabyte(value: number): Information;
    static FromGigabyte(value: number): Information;
    static FromTerabyte(value: number): Information;
    static FromPetabyte(value: number): Information;
    static FromExabyte(value: number): Information;
    static FromKilobit(value: number): Information;
    static FromMegabit(value: number): Information;
    static FromGigabit(value: number): Information;
    static FromTerabit(value: number): Information;
    static FromPetabit(value: number): Information;
    static FromExabit(value: number): Information;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: InformationUnits): string;
}
//# sourceMappingURL=information.g.d.ts.map