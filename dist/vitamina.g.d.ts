export declare enum VitaminAUnits {
    InternationalUnits = 0
}
export declare class VitaminA {
    private value;
    constructor(value: number, fromUnit: VitaminAUnits);
    get InternationalUnits(): number;
    static FromInternationalUnits(value: number): VitaminA;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=vitamina.g.d.ts.map