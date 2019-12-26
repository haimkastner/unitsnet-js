export enum ReactiveEnergyUnits {
    VoltampereReactiveHours,
    KilovoltampereReactiveHours,
    MegavoltampereReactiveHours
}

export class ReactiveEnergy {
    private value: number;
    private voltamperereactivehoursLazy: number | null = null;
    private kilovoltamperereactivehoursLazy: number | null = null;
    private megavoltamperereactivehoursLazy: number | null = null;

    public constructor(value: number, fromUnit: ReactiveEnergyUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get VoltampereReactiveHours(): number {
        if(this.voltamperereactivehoursLazy !== null){
            return this.voltamperereactivehoursLazy;
        }
        return this.voltamperereactivehoursLazy = this.convertFromBase(ReactiveEnergyUnits.VoltampereReactiveHours);
    }

    public get KilovoltampereReactiveHours(): number {
        if(this.kilovoltamperereactivehoursLazy !== null){
            return this.kilovoltamperereactivehoursLazy;
        }
        return this.kilovoltamperereactivehoursLazy = this.convertFromBase(ReactiveEnergyUnits.KilovoltampereReactiveHours);
    }

    public get MegavoltampereReactiveHours(): number {
        if(this.megavoltamperereactivehoursLazy !== null){
            return this.megavoltamperereactivehoursLazy;
        }
        return this.megavoltamperereactivehoursLazy = this.convertFromBase(ReactiveEnergyUnits.MegavoltampereReactiveHours);
    }

    public static FromVoltampereReactiveHours(value: number): ReactiveEnergy {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.VoltampereReactiveHours);
    }

    public static FromKilovoltampereReactiveHours(value: number): ReactiveEnergy {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.KilovoltampereReactiveHours);
    }

    public static FromMegavoltampereReactiveHours(value: number): ReactiveEnergy {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.MegavoltampereReactiveHours);
    }

    private convertFromBase(toUnit: ReactiveEnergyUnits): number {
        switch (toUnit) {
                
            case ReactiveEnergyUnits.VoltampereReactiveHours:
                return this.value;
            case ReactiveEnergyUnits.KilovoltampereReactiveHours:
                return (this.value) / 1000;
            case ReactiveEnergyUnits.MegavoltampereReactiveHours:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ReactiveEnergyUnits): number {
        switch (fromUnit) {
                
            case ReactiveEnergyUnits.VoltampereReactiveHours:
                return value;
            case ReactiveEnergyUnits.KilovoltampereReactiveHours:
                return (value) * 1000;
            case ReactiveEnergyUnits.MegavoltampereReactiveHours:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: ReactiveEnergyUnits = ReactiveEnergyUnits.VoltampereReactiveHours): string {

        switch (toUnit) {
            
            case ReactiveEnergyUnits.VoltampereReactiveHours:
                return this.VoltampereReactiveHours + ` varh`;
            case ReactiveEnergyUnits.KilovoltampereReactiveHours:
                return this.KilovoltampereReactiveHours + ` varh`;
            case ReactiveEnergyUnits.MegavoltampereReactiveHours:
                return this.MegavoltampereReactiveHours + ` varh`;
        default:
            break;
        }
        return this.value.toString();
    }
}
