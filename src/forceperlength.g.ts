export enum ForcePerLengthUnits {
    NewtonsPerMeter,
    KilogramsForcePerMeter,
    PoundsForcePerFoot,
    PoundsForcePerInch,
    PoundsForcePerYard,
    Nanonewtonspermeter,
    Micronewtonspermeter,
    Centinewtonspermeter,
    Decinewtonspermeter,
    Kilonewtonspermeter,
    Meganewtonspermeter
}

export class ForcePerLength {
    private value: number;
    private newtonspermeterLazy: number | null = null;
    private kilogramsforcepermeterLazy: number | null = null;
    private poundsforceperfootLazy: number | null = null;
    private poundsforceperinchLazy: number | null = null;
    private poundsforceperyardLazy: number | null = null;
    private nanonewtonspermeterLazy: number | null = null;
    private micronewtonspermeterLazy: number | null = null;
    private centinewtonspermeterLazy: number | null = null;
    private decinewtonspermeterLazy: number | null = null;
    private kilonewtonspermeterLazy: number | null = null;
    private meganewtonspermeterLazy: number | null = null;

    public constructor(value: number, fromUnit: ForcePerLengthUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get NewtonsPerMeter(): number {
        if(this.newtonspermeterLazy !== null){
            return this.newtonspermeterLazy;
        }
        return this.newtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.NewtonsPerMeter);
    }

    public get KilogramsForcePerMeter(): number {
        if(this.kilogramsforcepermeterLazy !== null){
            return this.kilogramsforcepermeterLazy;
        }
        return this.kilogramsforcepermeterLazy = this.convertFromBase(ForcePerLengthUnits.KilogramsForcePerMeter);
    }

    public get PoundsForcePerFoot(): number {
        if(this.poundsforceperfootLazy !== null){
            return this.poundsforceperfootLazy;
        }
        return this.poundsforceperfootLazy = this.convertFromBase(ForcePerLengthUnits.PoundsForcePerFoot);
    }

    public get PoundsForcePerInch(): number {
        if(this.poundsforceperinchLazy !== null){
            return this.poundsforceperinchLazy;
        }
        return this.poundsforceperinchLazy = this.convertFromBase(ForcePerLengthUnits.PoundsForcePerInch);
    }

    public get PoundsForcePerYard(): number {
        if(this.poundsforceperyardLazy !== null){
            return this.poundsforceperyardLazy;
        }
        return this.poundsforceperyardLazy = this.convertFromBase(ForcePerLengthUnits.PoundsForcePerYard);
    }

    public get Nanonewtonspermeter(): number {
        if(this.nanonewtonspermeterLazy !== null){
            return this.nanonewtonspermeterLazy;
        }
        return this.nanonewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.Nanonewtonspermeter);
    }

    public get Micronewtonspermeter(): number {
        if(this.micronewtonspermeterLazy !== null){
            return this.micronewtonspermeterLazy;
        }
        return this.micronewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.Micronewtonspermeter);
    }

    public get Centinewtonspermeter(): number {
        if(this.centinewtonspermeterLazy !== null){
            return this.centinewtonspermeterLazy;
        }
        return this.centinewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.Centinewtonspermeter);
    }

    public get Decinewtonspermeter(): number {
        if(this.decinewtonspermeterLazy !== null){
            return this.decinewtonspermeterLazy;
        }
        return this.decinewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.Decinewtonspermeter);
    }

    public get Kilonewtonspermeter(): number {
        if(this.kilonewtonspermeterLazy !== null){
            return this.kilonewtonspermeterLazy;
        }
        return this.kilonewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.Kilonewtonspermeter);
    }

    public get Meganewtonspermeter(): number {
        if(this.meganewtonspermeterLazy !== null){
            return this.meganewtonspermeterLazy;
        }
        return this.meganewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.Meganewtonspermeter);
    }

    public static FromNewtonsPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.NewtonsPerMeter);
    }

    public static FromKilogramsForcePerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.KilogramsForcePerMeter);
    }

    public static FromPoundsForcePerFoot(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.PoundsForcePerFoot);
    }

    public static FromPoundsForcePerInch(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.PoundsForcePerInch);
    }

    public static FromPoundsForcePerYard(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.PoundsForcePerYard);
    }

    public static FromNanonewtonspermeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.Nanonewtonspermeter);
    }

    public static FromMicronewtonspermeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.Micronewtonspermeter);
    }

    public static FromCentinewtonspermeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.Centinewtonspermeter);
    }

    public static FromDecinewtonspermeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.Decinewtonspermeter);
    }

    public static FromKilonewtonspermeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.Kilonewtonspermeter);
    }

    public static FromMeganewtonspermeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.Meganewtonspermeter);
    }

    private convertFromBase(toUnit: ForcePerLengthUnits): number {
        switch (toUnit) {
                
            case ForcePerLengthUnits.NewtonsPerMeter:
                return this.value;
            case ForcePerLengthUnits.KilogramsForcePerMeter:
                return this.value/9.80665002864;
            case ForcePerLengthUnits.PoundsForcePerFoot:
                return this.value/14.59390292;
            case ForcePerLengthUnits.PoundsForcePerInch:
                return this.value/1.75126835e2;
            case ForcePerLengthUnits.PoundsForcePerYard:
                return this.value/4.864634307;
            case ForcePerLengthUnits.Nanonewtonspermeter:
                return (this.value) / 1e-9;
            case ForcePerLengthUnits.Micronewtonspermeter:
                return (this.value) / 0.000001;
            case ForcePerLengthUnits.Centinewtonspermeter:
                return (this.value) / 0.01;
            case ForcePerLengthUnits.Decinewtonspermeter:
                return (this.value) / 0.1;
            case ForcePerLengthUnits.Kilonewtonspermeter:
                return (this.value) / 1000;
            case ForcePerLengthUnits.Meganewtonspermeter:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ForcePerLengthUnits): number {
        switch (fromUnit) {
                
            case ForcePerLengthUnits.NewtonsPerMeter:
                return value;
            case ForcePerLengthUnits.KilogramsForcePerMeter:
                return value*9.80665002864;
            case ForcePerLengthUnits.PoundsForcePerFoot:
                return value*14.59390292;
            case ForcePerLengthUnits.PoundsForcePerInch:
                return value*1.75126835e2;
            case ForcePerLengthUnits.PoundsForcePerYard:
                return value*4.864634307;
            case ForcePerLengthUnits.Nanonewtonspermeter:
                return (value) * 1e-9;
            case ForcePerLengthUnits.Micronewtonspermeter:
                return (value) * 0.000001;
            case ForcePerLengthUnits.Centinewtonspermeter:
                return (value) * 0.01;
            case ForcePerLengthUnits.Decinewtonspermeter:
                return (value) * 0.1;
            case ForcePerLengthUnits.Kilonewtonspermeter:
                return (value) * 1000;
            case ForcePerLengthUnits.Meganewtonspermeter:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
