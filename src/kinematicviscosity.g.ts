export enum KinematicViscosityUnits {
    SquareMetersPerSecond,
    Stokes,
    Nanostokes,
    Microstokes,
    Centistokes,
    Decistokes,
    Kilostokes
}

export class KinematicViscosity {
    private value: number;

    public constructor(value: number, fromUnit: KinematicViscosityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get SquareMetersPerSecond(): number {
        return this.convertFromBase(KinematicViscosityUnits.SquareMetersPerSecond);
    }

    public get Stokes(): number {
        return this.convertFromBase(KinematicViscosityUnits.Stokes);
    }

    public get Nanostokes(): number {
        return this.convertFromBase(KinematicViscosityUnits.Nanostokes);
    }

    public get Microstokes(): number {
        return this.convertFromBase(KinematicViscosityUnits.Microstokes);
    }

    public get Centistokes(): number {
        return this.convertFromBase(KinematicViscosityUnits.Centistokes);
    }

    public get Decistokes(): number {
        return this.convertFromBase(KinematicViscosityUnits.Decistokes);
    }

    public get Kilostokes(): number {
        return this.convertFromBase(KinematicViscosityUnits.Kilostokes);
    }

    public static FromSquareMetersPerSecond(value: number): KinematicViscosity {
        return new KinematicViscosity(value, KinematicViscosityUnits.SquareMetersPerSecond);
    }

    public static FromStokes(value: number): KinematicViscosity {
        return new KinematicViscosity(value, KinematicViscosityUnits.Stokes);
    }

    public static FromNanostokes(value: number): KinematicViscosity {
        return new KinematicViscosity(value, KinematicViscosityUnits.Nanostokes);
    }

    public static FromMicrostokes(value: number): KinematicViscosity {
        return new KinematicViscosity(value, KinematicViscosityUnits.Microstokes);
    }

    public static FromCentistokes(value: number): KinematicViscosity {
        return new KinematicViscosity(value, KinematicViscosityUnits.Centistokes);
    }

    public static FromDecistokes(value: number): KinematicViscosity {
        return new KinematicViscosity(value, KinematicViscosityUnits.Decistokes);
    }

    public static FromKilostokes(value: number): KinematicViscosity {
        return new KinematicViscosity(value, KinematicViscosityUnits.Kilostokes);
    }

    private convertFromBase(toUnit: KinematicViscosityUnits): number {

            switch (toUnit) {
                
                case KinematicViscosityUnits.SquareMetersPerSecond:
                    return this.value;
                
                case KinematicViscosityUnits.Stokes:
                    return this.value*1e4;
                
                case KinematicViscosityUnits.Nanostokes:
                    return (this.value/1e4) * 1e-9;
                
                case KinematicViscosityUnits.Microstokes:
                    return (this.value/1e4) * 0.000001;
                
                case KinematicViscosityUnits.Centistokes:
                    return (this.value/1e4) * 0.01;
                
                case KinematicViscosityUnits.Decistokes:
                    return (this.value/1e4) * 0.1;
                
                case KinematicViscosityUnits.Kilostokes:
                    return (this.value/1e4) * 1000;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: KinematicViscosityUnits): number {

                switch (fromUnit) {
                    
                case KinematicViscosityUnits.SquareMetersPerSecond:
                    return value;
                
                case KinematicViscosityUnits.Stokes:
                    return value/1e4;
                
                case KinematicViscosityUnits.Nanostokes:
                    return (value*1e4) / 1e-9;
                
                case KinematicViscosityUnits.Microstokes:
                    return (value*1e4) / 0.000001;
                
                case KinematicViscosityUnits.Centistokes:
                    return (value*1e4) / 0.01;
                
                case KinematicViscosityUnits.Decistokes:
                    return (value*1e4) / 0.1;
                
                case KinematicViscosityUnits.Kilostokes:
                    return (value*1e4) / 1000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
