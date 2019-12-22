export declare enum LevelUnits {
    Decibels = 0,
    Nepers = 1
}
export declare class Level {
    private value;
    constructor(value: number, fromUnit: LevelUnits);
    get Decibels(): number;
    get Nepers(): number;
    static FromDecibels(value: number): Level;
    static FromNepers(value: number): Level;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=level.g.d.ts.map