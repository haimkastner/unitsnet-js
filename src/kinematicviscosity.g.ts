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
    private squaremeterspersecondLazy: number | null = null;
    private stokesLazy: number | null = null;
    private nanostokesLazy: number | null = null;
    private microstokesLazy: number | null = null;
    private centistokesLazy: number | null = null;
    private decistokesLazy: number | null = null;
    private kilostokesLazy: number | null = null;

    public constructor(value: number, fromUnit: KinematicViscosityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get SquareMetersPerSecond(): number {
        if(this.squaremeterspersecondLazy !== null){
            return this.squaremeterspersecondLazy;
        }
        return this.squaremeterspersecondLazy = this.convertFromBase(KinematicViscosityUnits.SquareMetersPerSecond);
    }

    public get Stokes(): number {
        if(this.stokesLazy !== null){
            return this.stokesLazy;
        }
        return this.stokesLazy = this.convertFromBase(KinematicViscosityUnits.Stokes);
    }

    public get Nanostokes(): number {
        if(this.nanostokesLazy !== null){
            return this.nanostokesLazy;
        }
        return this.nanostokesLazy = this.convertFromBase(KinematicViscosityUnits.Nanostokes);
    }

    public get Microstokes(): number {
        if(this.microstokesLazy !== null){
            return this.microstokesLazy;
        }
        return this.microstokesLazy = this.convertFromBase(KinematicViscosityUnits.Microstokes);
    }

    public get Centistokes(): number {
        if(this.centistokesLazy !== null){
            return this.centistokesLazy;
        }
        return this.centistokesLazy = this.convertFromBase(KinematicViscosityUnits.Centistokes);
    }

    public get Decistokes(): number {
        if(this.decistokesLazy !== null){
            return this.decistokesLazy;
        }
        return this.decistokesLazy = this.convertFromBase(KinematicViscosityUnits.Decistokes);
    }

    public get Kilostokes(): number {
        if(this.kilostokesLazy !== null){
            return this.kilostokesLazy;
        }
        return this.kilostokesLazy = this.convertFromBase(KinematicViscosityUnits.Kilostokes);
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
                return (this.value*1e4) / 1e-9;
            case KinematicViscosityUnits.Microstokes:
                return (this.value*1e4) / 0.000001;
            case KinematicViscosityUnits.Centistokes:
                return (this.value*1e4) / 0.01;
            case KinematicViscosityUnits.Decistokes:
                return (this.value*1e4) / 0.1;
            case KinematicViscosityUnits.Kilostokes:
                return (this.value*1e4) / 1000;
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
                return (value/1e4) * 1e-9;
            case KinematicViscosityUnits.Microstokes:
                return (value/1e4) * 0.000001;
            case KinematicViscosityUnits.Centistokes:
                return (value/1e4) * 0.01;
            case KinematicViscosityUnits.Decistokes:
                return (value/1e4) * 0.1;
            case KinematicViscosityUnits.Kilostokes:
                return (value/1e4) * 1000;
            default:
                break;
        }
        return NaN;
    }
}
