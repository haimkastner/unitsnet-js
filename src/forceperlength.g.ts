export enum ForcePerLengthUnits {
    NewtonsPerMeter,
    KilogramsForcePerMeter,
    PoundsForcePerFoot,
    PoundsForcePerInch,
    PoundsForcePerYard,
    NanonewtonsPerMeter,
    MicronewtonsPerMeter,
    CentinewtonsPerMeter,
    DecinewtonsPerMeter,
    KilonewtonsPerMeter,
    MeganewtonsPerMeter
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

    public get NanonewtonsPerMeter(): number {
        if(this.nanonewtonspermeterLazy !== null){
            return this.nanonewtonspermeterLazy;
        }
        return this.nanonewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.NanonewtonsPerMeter);
    }

    public get MicronewtonsPerMeter(): number {
        if(this.micronewtonspermeterLazy !== null){
            return this.micronewtonspermeterLazy;
        }
        return this.micronewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.MicronewtonsPerMeter);
    }

    public get CentinewtonsPerMeter(): number {
        if(this.centinewtonspermeterLazy !== null){
            return this.centinewtonspermeterLazy;
        }
        return this.centinewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.CentinewtonsPerMeter);
    }

    public get DecinewtonsPerMeter(): number {
        if(this.decinewtonspermeterLazy !== null){
            return this.decinewtonspermeterLazy;
        }
        return this.decinewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.DecinewtonsPerMeter);
    }

    public get KilonewtonsPerMeter(): number {
        if(this.kilonewtonspermeterLazy !== null){
            return this.kilonewtonspermeterLazy;
        }
        return this.kilonewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.KilonewtonsPerMeter);
    }

    public get MeganewtonsPerMeter(): number {
        if(this.meganewtonspermeterLazy !== null){
            return this.meganewtonspermeterLazy;
        }
        return this.meganewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.MeganewtonsPerMeter);
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

    public static FromNanonewtonsPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.NanonewtonsPerMeter);
    }

    public static FromMicronewtonsPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.MicronewtonsPerMeter);
    }

    public static FromCentinewtonsPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.CentinewtonsPerMeter);
    }

    public static FromDecinewtonsPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.DecinewtonsPerMeter);
    }

    public static FromKilonewtonsPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.KilonewtonsPerMeter);
    }

    public static FromMeganewtonsPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.MeganewtonsPerMeter);
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
            case ForcePerLengthUnits.NanonewtonsPerMeter:
                return (this.value) / 1e-9;
            case ForcePerLengthUnits.MicronewtonsPerMeter:
                return (this.value) / 0.000001;
            case ForcePerLengthUnits.CentinewtonsPerMeter:
                return (this.value) / 0.01;
            case ForcePerLengthUnits.DecinewtonsPerMeter:
                return (this.value) / 0.1;
            case ForcePerLengthUnits.KilonewtonsPerMeter:
                return (this.value) / 1000;
            case ForcePerLengthUnits.MeganewtonsPerMeter:
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
            case ForcePerLengthUnits.NanonewtonsPerMeter:
                return (value) * 1e-9;
            case ForcePerLengthUnits.MicronewtonsPerMeter:
                return (value) * 0.000001;
            case ForcePerLengthUnits.CentinewtonsPerMeter:
                return (value) * 0.01;
            case ForcePerLengthUnits.DecinewtonsPerMeter:
                return (value) * 0.1;
            case ForcePerLengthUnits.KilonewtonsPerMeter:
                return (value) * 1000;
            case ForcePerLengthUnits.MeganewtonsPerMeter:
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
            case ForcePerLengthUnits.NanonewtonsPerMeter:
                return this.NanonewtonsPerMeter + ` N/m`;
            case ForcePerLengthUnits.MicronewtonsPerMeter:
                return this.MicronewtonsPerMeter + ` N/m`;
            case ForcePerLengthUnits.CentinewtonsPerMeter:
                return this.CentinewtonsPerMeter + ` N/m`;
            case ForcePerLengthUnits.DecinewtonsPerMeter:
                return this.DecinewtonsPerMeter + ` N/m`;
            case ForcePerLengthUnits.KilonewtonsPerMeter:
                return this.KilonewtonsPerMeter + ` N/m`;
            case ForcePerLengthUnits.MeganewtonsPerMeter:
                return this.MeganewtonsPerMeter + ` N/m`;
        default:
            break;
        }
        return this.value.toString();
    }
}
