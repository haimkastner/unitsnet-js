export enum ReactiveEnergyUnits {
    VoltampereReactiveHours,
    Kilovoltamperereactivehours,
    Megavoltamperereactivehours
}

export class ReactiveEnergy {
    private value: number;

    public constructor(value: number, fromUnit: ReactiveEnergyUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get VoltampereReactiveHours(): number {
        return this.convertFromBase(ReactiveEnergyUnits.VoltampereReactiveHours);
    }

    public get Kilovoltamperereactivehours(): number {
        return this.convertFromBase(ReactiveEnergyUnits.Kilovoltamperereactivehours);
    }

    public get Megavoltamperereactivehours(): number {
        return this.convertFromBase(ReactiveEnergyUnits.Megavoltamperereactivehours);
    }

    public static FromVoltampereReactiveHours(value: number): ReactiveEnergy {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.VoltampereReactiveHours);
    }

    public static FromKilovoltamperereactivehours(value: number): ReactiveEnergy {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.Kilovoltamperereactivehours);
    }

    public static FromMegavoltamperereactivehours(value: number): ReactiveEnergy {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.Megavoltamperereactivehours);
    }

    private convertFromBase(toUnit: ReactiveEnergyUnits): number {

                switch (toUnit) {
                    
                case ReactiveEnergyUnits.VoltampereReactiveHours:
                    return this.value;
                
                case ReactiveEnergyUnits.Kilovoltamperereactivehours:
                    return (this.value) * 1000;
                
                case ReactiveEnergyUnits.Megavoltamperereactivehours:
                    return (this.value) * 1000000;
                
                    default:
                        break;
                }
                return NaN;
            
    }

    private convertToBase(value: number, fromUnit: ReactiveEnergyUnits): number {

                switch (fromUnit) {
                    
                case ReactiveEnergyUnits.VoltampereReactiveHours:
                    return value;
                
                case ReactiveEnergyUnits.Kilovoltamperereactivehours:
                    return (value) / 1000;
                
                case ReactiveEnergyUnits.Megavoltamperereactivehours:
                    return (value) / 1000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
