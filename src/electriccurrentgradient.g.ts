export enum ElectricCurrentGradientUnits {
    AmperesPerSecond
}

export class ElectricCurrentGradient {
    private value: number;
    private amperespersecondLazy: number | null = null;

    public constructor(value: number, fromUnit: ElectricCurrentGradientUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get AmperesPerSecond(): number {
        if(this.amperespersecondLazy !== null){
            return this.amperespersecondLazy;
        }
        return this.amperespersecondLazy = this.convertFromBase(ElectricCurrentGradientUnits.AmperesPerSecond);
    }

    public static FromAmperesPerSecond(value: number): ElectricCurrentGradient {
        return new ElectricCurrentGradient(value, ElectricCurrentGradientUnits.AmperesPerSecond);
    }

    private convertFromBase(toUnit: ElectricCurrentGradientUnits): number {
        switch (toUnit) {
                
            case ElectricCurrentGradientUnits.AmperesPerSecond:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricCurrentGradientUnits): number {
        switch (fromUnit) {
                
            case ElectricCurrentGradientUnits.AmperesPerSecond:
                return value;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: ElectricCurrentGradientUnits = ElectricCurrentGradientUnits.AmperesPerSecond): string {

        switch (toUnit) {
            
            case ElectricCurrentGradientUnits.AmperesPerSecond:
                return this.AmperesPerSecond + ` A/s`;
        default:
            break;
        }
        return this.value.toString();
    }
}
