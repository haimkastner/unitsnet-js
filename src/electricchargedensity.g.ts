export enum ElectricChargeDensityUnits {
    CoulombsPerCubicMeter
}

export class ElectricChargeDensity {
    private value: number;

    public constructor(value: number, fromUnit: ElectricChargeDensityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get CoulombsPerCubicMeter(): number {
        return this.convertFromBase(ElectricChargeDensityUnits.CoulombsPerCubicMeter);
    }

    public static FromCoulombsPerCubicMeter(value: number): ElectricChargeDensity {
        return new ElectricChargeDensity(value, ElectricChargeDensityUnits.CoulombsPerCubicMeter);
    }

    private convertFromBase(toUnit: ElectricChargeDensityUnits): number {

                switch (toUnit) {
                    
                case ElectricChargeDensityUnits.CoulombsPerCubicMeter:
                    return this.value;
                
                    default:
                        break;
                }
                return NaN;
            
    }

    private convertToBase(value: number, fromUnit: ElectricChargeDensityUnits): number {

                switch (fromUnit) {
                    
                case ElectricChargeDensityUnits.CoulombsPerCubicMeter:
                    return value;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
