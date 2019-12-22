export declare enum FrequencyUnits {
    Hertz = 0,
    RadiansPerSecond = 1,
    CyclesPerMinute = 2,
    CyclesPerHour = 3,
    BeatsPerMinute = 4,
    Kilohertz = 5,
    Megahertz = 6,
    Gigahertz = 7,
    Terahertz = 8
}
export declare class Frequency {
    private value;
    constructor(value: number, fromUnit: FrequencyUnits);
    get Hertz(): number;
    get RadiansPerSecond(): number;
    get CyclesPerMinute(): number;
    get CyclesPerHour(): number;
    get BeatsPerMinute(): number;
    get Kilohertz(): number;
    get Megahertz(): number;
    get Gigahertz(): number;
    get Terahertz(): number;
    static FromHertz(value: number): Frequency;
    static FromRadiansPerSecond(value: number): Frequency;
    static FromCyclesPerMinute(value: number): Frequency;
    static FromCyclesPerHour(value: number): Frequency;
    static FromBeatsPerMinute(value: number): Frequency;
    static FromKilohertz(value: number): Frequency;
    static FromMegahertz(value: number): Frequency;
    static FromGigahertz(value: number): Frequency;
    static FromTerahertz(value: number): Frequency;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=frequency.g.d.ts.map