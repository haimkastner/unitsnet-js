export enum ElectricSurfaceChargeDensityUnits {
    CoulombsPerSquareMeter,
    CoulombsPerSquareCentimeter,
    CoulombsPerSquareInch
}

export class ElectricSurfaceChargeDensity {
    private value: number;
    private coulombspersquaremeterLazy: number | null = null;
    private coulombspersquarecentimeterLazy: number | null = null;
    private coulombspersquareinchLazy: number | null = null;

    public constructor(value: number, fromUnit: ElectricSurfaceChargeDensityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get CoulombsPerSquareMeter(): number {
        if(this.coulombspersquaremeterLazy !== null){
            return this.coulombspersquaremeterLazy;
        }
        return this.coulombspersquaremeterLazy = this.convertFromBase(ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter);
    }

    public get CoulombsPerSquareCentimeter(): number {
        if(this.coulombspersquarecentimeterLazy !== null){
            return this.coulombspersquarecentimeterLazy;
        }
        return this.coulombspersquarecentimeterLazy = this.convertFromBase(ElectricSurfaceChargeDensityUnits.CoulombsPerSquareCentimeter);
    }

    public get CoulombsPerSquareInch(): number {
        if(this.coulombspersquareinchLazy !== null){
            return this.coulombspersquareinchLazy;
        }
        return this.coulombspersquareinchLazy = this.convertFromBase(ElectricSurfaceChargeDensityUnits.CoulombsPerSquareInch);
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
                return this.value / 1.0e4;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareInch:
                return this.value / 1.5500031000062000e3;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricSurfaceChargeDensityUnits): number {
        switch (fromUnit) {
                
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter:
                return value;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareCentimeter:
                return value * 1.0e4;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareInch:
                return value * 1.5500031000062000e3;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: ElectricSurfaceChargeDensityUnits = ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter): string {

        switch (toUnit) {
            
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter:
                return this.CoulombsPerSquareMeter + ` C/m²`;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareCentimeter:
                return this.CoulombsPerSquareCentimeter + ` C/cm²`;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareInch:
                return this.CoulombsPerSquareInch + ` C/in²`;
        default:
            break;
        }
        return this.value.toString();
    }
}
