export enum ElectricSurfaceChargeDensityUnits {
    CoulombsPerSquareMeter,
    CoulombsPerSquareCentimeter,
    CoulombsPerSquareInch
}

export class ElectricSurfaceChargeDensity {
    private value: number;

    public constructor(value: number, fromUnit: ElectricSurfaceChargeDensityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get CoulombsPerSquareMeter(): number {
        return this.convertFromBase(ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter);
    }

    public get CoulombsPerSquareCentimeter(): number {
        return this.convertFromBase(ElectricSurfaceChargeDensityUnits.CoulombsPerSquareCentimeter);
    }

    public get CoulombsPerSquareInch(): number {
        return this.convertFromBase(ElectricSurfaceChargeDensityUnits.CoulombsPerSquareInch);
    }

    public static FromCoulombsPerSquareMeter(value: number): ElectricSurfaceChargeDensity {
        return new ElectricSurfaceChargeDensity(value, ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter);
    }

    public static FromCoulombsPerSquareCentimeter(value: number): ElectricSurfaceChargeDensity {
        return new ElectricSurfaceChargeDensity(value, ElectricSurfaceChargeDensityUnits.CoulombsPerSquareCentimeter);
    }

    public static FromCoulombsPerSquareInch(value: number): ElectricSurfaceChargeDensity {
        return new ElectricSurfaceChargeDensity(value, ElectricSurfaceChargeDensityUnits.CoulombsPerSquareInch);
    }

    private convertFromBase(toUnit: ElectricSurfaceChargeDensityUnits): number {

            switch (toUnit) {
                
                case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter:
                    return this.value;
                
                case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareCentimeter:
                    return this.value * 1.0e4;
                
                case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareInch:
                    return this.value * 1.5500031000062000e3;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: ElectricSurfaceChargeDensityUnits): number {

                switch (fromUnit) {
                    
                case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter:
                    return this.value;
                
                case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareCentimeter:
                    return this.value / 1.0e4;
                
                case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareInch:
                    return this.value / 1.5500031000062000e3;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
