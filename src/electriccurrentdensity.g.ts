export enum ElectricCurrentDensityUnits {
    AmperesPerSquareMeter,
    AmperesPerSquareInch,
    AmperesPerSquareFoot
}

export class ElectricCurrentDensity {
    private value: number;
    private amperespersquaremeterLazy: number | null = null;
    private amperespersquareinchLazy: number | null = null;
    private amperespersquarefootLazy: number | null = null;

    public constructor(value: number, fromUnit: ElectricCurrentDensityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get AmperesPerSquareMeter(): number {
        if(this.amperespersquaremeterLazy !== null){
            return this.amperespersquaremeterLazy;
        }
        return this.amperespersquaremeterLazy = this.convertFromBase(ElectricCurrentDensityUnits.AmperesPerSquareMeter);
    }

    public get AmperesPerSquareInch(): number {
        if(this.amperespersquareinchLazy !== null){
            return this.amperespersquareinchLazy;
        }
        return this.amperespersquareinchLazy = this.convertFromBase(ElectricCurrentDensityUnits.AmperesPerSquareInch);
    }

    public get AmperesPerSquareFoot(): number {
        if(this.amperespersquarefootLazy !== null){
            return this.amperespersquarefootLazy;
        }
        return this.amperespersquarefootLazy = this.convertFromBase(ElectricCurrentDensityUnits.AmperesPerSquareFoot);
    }

    public static FromAmperesPerSquareMeter(value: number): ElectricCurrentDensity {
        return new ElectricCurrentDensity(value, ElectricCurrentDensityUnits.AmperesPerSquareMeter);
    }

    public static FromAmperesPerSquareInch(value: number): ElectricCurrentDensity {
        return new ElectricCurrentDensity(value, ElectricCurrentDensityUnits.AmperesPerSquareInch);
    }

    public static FromAmperesPerSquareFoot(value: number): ElectricCurrentDensity {
        return new ElectricCurrentDensity(value, ElectricCurrentDensityUnits.AmperesPerSquareFoot);
    }

    private convertFromBase(toUnit: ElectricCurrentDensityUnits): number {
        switch (toUnit) {
                
            case ElectricCurrentDensityUnits.AmperesPerSquareMeter:
                return this.value;
            case ElectricCurrentDensityUnits.AmperesPerSquareInch:
                return this.value / 1.5500031000062000e3;
            case ElectricCurrentDensityUnits.AmperesPerSquareFoot:
                return this.value / 1.0763910416709722e1;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricCurrentDensityUnits): number {
        switch (fromUnit) {
                
            case ElectricCurrentDensityUnits.AmperesPerSquareMeter:
                return value;
            case ElectricCurrentDensityUnits.AmperesPerSquareInch:
                return value * 1.5500031000062000e3;
            case ElectricCurrentDensityUnits.AmperesPerSquareFoot:
                return value * 1.0763910416709722e1;
            default:
                break;
        }
        return NaN;
    }
}
