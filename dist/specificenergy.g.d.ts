export declare enum SpecificEnergyUnits {
    JoulesPerKilogram = 0,
    CaloriesPerGram = 1,
    WattHoursPerKilogram = 2,
    BtuPerPound = 3,
    Kilojoulesperkilogram = 4,
    Megajoulesperkilogram = 5,
    Kilocaloriespergram = 6,
    Kilowatthoursperkilogram = 7,
    Megawatthoursperkilogram = 8
}
export declare class SpecificEnergy {
    private value;
    constructor(value: number, fromUnit: SpecificEnergyUnits);
    get JoulesPerKilogram(): number;
    get CaloriesPerGram(): number;
    get WattHoursPerKilogram(): number;
    get BtuPerPound(): number;
    get Kilojoulesperkilogram(): number;
    get Megajoulesperkilogram(): number;
    get Kilocaloriespergram(): number;
    get Kilowatthoursperkilogram(): number;
    get Megawatthoursperkilogram(): number;
    static FromJoulesPerKilogram(value: number): SpecificEnergy;
    static FromCaloriesPerGram(value: number): SpecificEnergy;
    static FromWattHoursPerKilogram(value: number): SpecificEnergy;
    static FromBtuPerPound(value: number): SpecificEnergy;
    static FromKilojoulesperkilogram(value: number): SpecificEnergy;
    static FromMegajoulesperkilogram(value: number): SpecificEnergy;
    static FromKilocaloriespergram(value: number): SpecificEnergy;
    static FromKilowatthoursperkilogram(value: number): SpecificEnergy;
    static FromMegawatthoursperkilogram(value: number): SpecificEnergy;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=specificenergy.g.d.ts.map