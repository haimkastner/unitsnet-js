export declare enum InformationUnits {
    Bytes = 0,
    Bits = 1,
    Kilobytes = 2,
    Megabytes = 3,
    Gigabytes = 4,
    Terabytes = 5,
    Petabytes = 6,
    Exabytes = 7,
    Kilobits = 8,
    Megabits = 9,
    Gigabits = 10,
    Terabits = 11,
    Petabits = 12,
    Exabits = 13
}
export declare class Information {
    private value;
    private bytesLazy;
    private bitsLazy;
    private kilobytesLazy;
    private megabytesLazy;
    private gigabytesLazy;
    private terabytesLazy;
    private petabytesLazy;
    private exabytesLazy;
    private kilobitsLazy;
    private megabitsLazy;
    private gigabitsLazy;
    private terabitsLazy;
    private petabitsLazy;
    private exabitsLazy;
    constructor(value: number, fromUnit: InformationUnits);
    get Bytes(): number;
    get Bits(): number;
    get Kilobytes(): number;
    get Megabytes(): number;
    get Gigabytes(): number;
    get Terabytes(): number;
    get Petabytes(): number;
    get Exabytes(): number;
    get Kilobits(): number;
    get Megabits(): number;
    get Gigabits(): number;
    get Terabits(): number;
    get Petabits(): number;
    get Exabits(): number;
    static FromBytes(value: number): Information;
    static FromBits(value: number): Information;
    static FromKilobytes(value: number): Information;
    static FromMegabytes(value: number): Information;
    static FromGigabytes(value: number): Information;
    static FromTerabytes(value: number): Information;
    static FromPetabytes(value: number): Information;
    static FromExabytes(value: number): Information;
    static FromKilobits(value: number): Information;
    static FromMegabits(value: number): Information;
    static FromGigabits(value: number): Information;
    static FromTerabits(value: number): Information;
    static FromPetabits(value: number): Information;
    static FromExabits(value: number): Information;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: InformationUnits): string;
}
//# sourceMappingURL=information.g.d.ts.map