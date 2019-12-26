export enum ForcePerLengthUnits {
    NewtonsPerMeter,
    KilogramsForcePerMeter,
    PoundsForcePerFoot,
    PoundsForcePerInch,
    PoundsForcePerYard,
    NanonewtonPerMeter,
    MicronewtonPerMeter,
    CentinewtonPerMeter,
    DecinewtonPerMeter,
    KilonewtonPerMeter,
    MeganewtonPerMeter
}

export class ForcePerLength {
    private value: number;
    private newtonspermeterLazy: number | null = null;
    private kilogramsforcepermeterLazy: number | null = null;
    private poundsforceperfootLazy: number | null = null;
    private poundsforceperinchLazy: number | null = null;
    private poundsforceperyardLazy: number | null = null;
    private nanonewtonpermeterLazy: number | null = null;
    private micronewtonpermeterLazy: number | null = null;
    private centinewtonpermeterLazy: number | null = null;
    private decinewtonpermeterLazy: number | null = null;
    private kilonewtonpermeterLazy: number | null = null;
    private meganewtonpermeterLazy: number | null = null;

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

    public get NanonewtonPerMeter(): number {
        if(this.nanonewtonpermeterLazy !== null){
            return this.nanonewtonpermeterLazy;
        }
        return this.nanonewtonpermeterLazy = this.convertFromBase(ForcePerLengthUnits.NanonewtonPerMeter);
    }

    public get MicronewtonPerMeter(): number {
        if(this.micronewtonpermeterLazy !== null){
            return this.micronewtonpermeterLazy;
        }
        return this.micronewtonpermeterLazy = this.convertFromBase(ForcePerLengthUnits.MicronewtonPerMeter);
    }

    public get CentinewtonPerMeter(): number {
        if(this.centinewtonpermeterLazy !== null){
            return this.centinewtonpermeterLazy;
        }
        return this.centinewtonpermeterLazy = this.convertFromBase(ForcePerLengthUnits.CentinewtonPerMeter);
    }

    public get DecinewtonPerMeter(): number {
        if(this.decinewtonpermeterLazy !== null){
            return this.decinewtonpermeterLazy;
        }
        return this.decinewtonpermeterLazy = this.convertFromBase(ForcePerLengthUnits.DecinewtonPerMeter);
    }

    public get KilonewtonPerMeter(): number {
        if(this.kilonewtonpermeterLazy !== null){
            return this.kilonewtonpermeterLazy;
        }
        return this.kilonewtonpermeterLazy = this.convertFromBase(ForcePerLengthUnits.KilonewtonPerMeter);
    }

    public get MeganewtonPerMeter(): number {
        if(this.meganewtonpermeterLazy !== null){
            return this.meganewtonpermeterLazy;
        }
        return this.meganewtonpermeterLazy = this.convertFromBase(ForcePerLengthUnits.MeganewtonPerMeter);
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

    public static FromNanonewtonPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.NanonewtonPerMeter);
    }

    public static FromMicronewtonPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.MicronewtonPerMeter);
    }

    public static FromCentinewtonPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.CentinewtonPerMeter);
    }

    public static FromDecinewtonPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.DecinewtonPerMeter);
    }

    public static FromKilonewtonPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.KilonewtonPerMeter);
    }

    public static FromMeganewtonPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.MeganewtonPerMeter);
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
            case ForcePerLengthUnits.NanonewtonPerMeter:
                return (this.value) / 1e-9;
            case ForcePerLengthUnits.MicronewtonPerMeter:
                return (this.value) / 0.000001;
            case ForcePerLengthUnits.CentinewtonPerMeter:
                return (this.value) / 0.01;
            case ForcePerLengthUnits.DecinewtonPerMeter:
                return (this.value) / 0.1;
            case ForcePerLengthUnits.KilonewtonPerMeter:
                return (this.value) / 1000;
            case ForcePerLengthUnits.MeganewtonPerMeter:
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
            case ForcePerLengthUnits.NanonewtonPerMeter:
                return (value) * 1e-9;
            case ForcePerLengthUnits.MicronewtonPerMeter:
                return (value) * 0.000001;
            case ForcePerLengthUnits.CentinewtonPerMeter:
                return (value) * 0.01;
            case ForcePerLengthUnits.DecinewtonPerMeter:
                return (value) * 0.1;
            case ForcePerLengthUnits.KilonewtonPerMeter:
                return (value) * 1000;
            case ForcePerLengthUnits.MeganewtonPerMeter:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: ForcePerLengthUnits = ForcePerLengthUnits.NewtonsPerMeter): string {

        switch (toUnit) {
            
            case ForcePerLengthUnits.NewtonsPerMeter:
                return this.NewtonsPerMeter + ` N/m`;
            case ForcePerLengthUnits.KilogramsForcePerMeter:
                return this.KilogramsForcePerMeter + ` kgf/m`;
            case ForcePerLengthUnits.PoundsForcePerFoot:
                return this.PoundsForcePerFoot + ` lbf/ft`;
            case ForcePerLengthUnits.PoundsForcePerInch:
                return this.PoundsForcePerInch + ` lbf/in`;
            case ForcePerLengthUnits.PoundsForcePerYard:
                return this.PoundsForcePerYard + ` lbf/yd`;
            case ForcePerLengthUnits.NanonewtonPerMeter:
                return this.NanonewtonPerMeter + ` N/m`;
            case ForcePerLengthUnits.MicronewtonPerMeter:
                return this.MicronewtonPerMeter + ` N/m`;
            case ForcePerLengthUnits.CentinewtonPerMeter:
                return this.CentinewtonPerMeter + ` N/m`;
            case ForcePerLengthUnits.DecinewtonPerMeter:
                return this.DecinewtonPerMeter + ` N/m`;
            case ForcePerLengthUnits.KilonewtonPerMeter:
                return this.KilonewtonPerMeter + ` N/m`;
            case ForcePerLengthUnits.MeganewtonPerMeter:
                return this.MeganewtonPerMeter + ` N/m`;
        default:
            break;
        }
        return this.value.toString();
    }
}
