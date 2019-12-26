export enum LinearDensityUnits {
    GramsPerMeter,
    PoundsPerFoot,
    Kilogramspermeter
}

export class LinearDensity {
    private value: number;
    private gramspermeterLazy: number | null = null;
    private poundsperfootLazy: number | null = null;
    private kilogramspermeterLazy: number | null = null;

    public constructor(value: number, fromUnit: LinearDensityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get GramsPerMeter(): number {
        if(this.gramspermeterLazy !== null){
            return this.gramspermeterLazy;
        }
        return this.gramspermeterLazy = this.convertFromBase(LinearDensityUnits.GramsPerMeter);
    }

    public get PoundsPerFoot(): number {
        if(this.poundsperfootLazy !== null){
            return this.poundsperfootLazy;
        }
        return this.poundsperfootLazy = this.convertFromBase(LinearDensityUnits.PoundsPerFoot);
    }

    public get Kilogramspermeter(): number {
        if(this.kilogramspermeterLazy !== null){
            return this.kilogramspermeterLazy;
        }
        return this.kilogramspermeterLazy = this.convertFromBase(LinearDensityUnits.Kilogramspermeter);
    }

    public static FromGramsPerMeter(value: number): LinearDensity {
        return new LinearDensity(value, LinearDensityUnits.GramsPerMeter);
    }

    public static FromPoundsPerFoot(value: number): LinearDensity {
        return new LinearDensity(value, LinearDensityUnits.PoundsPerFoot);
    }

    public static FromKilogramspermeter(value: number): LinearDensity {
        return new LinearDensity(value, LinearDensityUnits.Kilogramspermeter);
    }

    private convertFromBase(toUnit: LinearDensityUnits): number {
        switch (toUnit) {
                
            case LinearDensityUnits.GramsPerMeter:
                return this.value/1e-3;
            case LinearDensityUnits.PoundsPerFoot:
                return this.value/1.48816394;
            case LinearDensityUnits.Kilogramspermeter:
                return (this.value/1e-3) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: LinearDensityUnits): number {
        switch (fromUnit) {
                
            case LinearDensityUnits.GramsPerMeter:
                return value*1e-3;
            case LinearDensityUnits.PoundsPerFoot:
                return value*1.48816394;
            case LinearDensityUnits.Kilogramspermeter:
                return (value*1e-3) * 1000;
            default:
                break;
        }
        return NaN;
    }
}
