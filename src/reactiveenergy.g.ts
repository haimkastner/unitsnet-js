export enum ReactiveEnergyUnits {
    VoltampereReactiveHours,
    KilovoltampereReactiveHour,
    MegavoltampereReactiveHour
}

export class ReactiveEnergy {
    private value: number;
    private voltamperereactivehoursLazy: number | null = null;
    private kilovoltamperereactivehourLazy: number | null = null;
    private megavoltamperereactivehourLazy: number | null = null;

    public constructor(value: number, fromUnit: ReactiveEnergyUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get VoltampereReactiveHours(): number {
        if(this.voltamperereactivehoursLazy !== null){
            return this.voltamperereactivehoursLazy;
        }
        return this.voltamperereactivehoursLazy = this.convertFromBase(ReactiveEnergyUnits.VoltampereReactiveHours);
    }

    public get KilovoltampereReactiveHour(): number {
        if(this.kilovoltamperereactivehourLazy !== null){
            return this.kilovoltamperereactivehourLazy;
        }
        return this.kilovoltamperereactivehourLazy = this.convertFromBase(ReactiveEnergyUnits.KilovoltampereReactiveHour);
    }

    public get MegavoltampereReactiveHour(): number {
        if(this.megavoltamperereactivehourLazy !== null){
            return this.megavoltamperereactivehourLazy;
        }
        return this.megavoltamperereactivehourLazy = this.convertFromBase(ReactiveEnergyUnits.MegavoltampereReactiveHour);
    }

    public static FromVoltampereReactiveHours(value: number): ReactiveEnergy {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.VoltampereReactiveHours);
    }

    public static FromKilovoltampereReactiveHour(value: number): ReactiveEnergy {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.KilovoltampereReactiveHour);
    }

    public static FromMegavoltampereReactiveHour(value: number): ReactiveEnergy {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.MegavoltampereReactiveHour);
    }

    private convertFromBase(toUnit: ReactiveEnergyUnits): number {
        switch (toUnit) {
                
            case ReactiveEnergyUnits.VoltampereReactiveHours:
                return this.value;
            case ReactiveEnergyUnits.KilovoltampereReactiveHour:
                return (this.value) / 1000;
            case ReactiveEnergyUnits.MegavoltampereReactiveHour:
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
            case ReactiveEnergyUnits.KilovoltampereReactiveHour:
                return (value) * 1000;
            case ReactiveEnergyUnits.MegavoltampereReactiveHour:
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
            case ReactiveEnergyUnits.KilovoltampereReactiveHour:
                return this.KilovoltampereReactiveHour + ` varh`;
            case ReactiveEnergyUnits.MegavoltampereReactiveHour:
                return this.MegavoltampereReactiveHour + ` varh`;
        default:
            break;
        }
        return this.value.toString();
    }
}
