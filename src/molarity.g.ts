export enum MolarityUnits {
    MolesPerCubicMeter,
    MolesPerLiter,
    PicomolesPerLiter,
    NanomolesPerLiter,
    MicromolesPerLiter,
    CentimolesPerLiter,
    DecimolesPerLiter
}

export class Molarity {
    private value: number;
    private molespercubicmeterLazy: number | null = null;
    private molesperliterLazy: number | null = null;
    private picomolesperliterLazy: number | null = null;
    private nanomolesperliterLazy: number | null = null;
    private micromolesperliterLazy: number | null = null;
    private centimolesperliterLazy: number | null = null;
    private decimolesperliterLazy: number | null = null;

    public constructor(value: number, fromUnit: MolarityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get MolesPerCubicMeter(): number {
        if(this.molespercubicmeterLazy !== null){
            return this.molespercubicmeterLazy;
        }
        return this.molespercubicmeterLazy = this.convertFromBase(MolarityUnits.MolesPerCubicMeter);
    }

    public get MolesPerLiter(): number {
        if(this.molesperliterLazy !== null){
            return this.molesperliterLazy;
        }
        return this.molesperliterLazy = this.convertFromBase(MolarityUnits.MolesPerLiter);
    }

    public get PicomolesPerLiter(): number {
        if(this.picomolesperliterLazy !== null){
            return this.picomolesperliterLazy;
        }
        return this.picomolesperliterLazy = this.convertFromBase(MolarityUnits.PicomolesPerLiter);
    }

    public get NanomolesPerLiter(): number {
        if(this.nanomolesperliterLazy !== null){
            return this.nanomolesperliterLazy;
        }
        return this.nanomolesperliterLazy = this.convertFromBase(MolarityUnits.NanomolesPerLiter);
    }

    public get MicromolesPerLiter(): number {
        if(this.micromolesperliterLazy !== null){
            return this.micromolesperliterLazy;
        }
        return this.micromolesperliterLazy = this.convertFromBase(MolarityUnits.MicromolesPerLiter);
    }

    public get CentimolesPerLiter(): number {
        if(this.centimolesperliterLazy !== null){
            return this.centimolesperliterLazy;
        }
        return this.centimolesperliterLazy = this.convertFromBase(MolarityUnits.CentimolesPerLiter);
    }

    public get DecimolesPerLiter(): number {
        if(this.decimolesperliterLazy !== null){
            return this.decimolesperliterLazy;
        }
        return this.decimolesperliterLazy = this.convertFromBase(MolarityUnits.DecimolesPerLiter);
    }

    public static FromMolesPerCubicMeter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.MolesPerCubicMeter);
    }

    public static FromMolesPerLiter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.MolesPerLiter);
    }

    public static FromPicomolesPerLiter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.PicomolesPerLiter);
    }

    public static FromNanomolesPerLiter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.NanomolesPerLiter);
    }

    public static FromMicromolesPerLiter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.MicromolesPerLiter);
    }

    public static FromCentimolesPerLiter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.CentimolesPerLiter);
    }

    public static FromDecimolesPerLiter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.DecimolesPerLiter);
    }

    private convertFromBase(toUnit: MolarityUnits): number {
        switch (toUnit) {
                
            case MolarityUnits.MolesPerCubicMeter:
                return this.value;
            case MolarityUnits.MolesPerLiter:
                return this.value*1e-3;
            case MolarityUnits.PicomolesPerLiter:
                return (this.value*1e-3) / 1e-12;
            case MolarityUnits.NanomolesPerLiter:
                return (this.value*1e-3) / 1e-9;
            case MolarityUnits.MicromolesPerLiter:
                return (this.value*1e-3) / 0.000001;
            case MolarityUnits.CentimolesPerLiter:
                return (this.value*1e-3) / 0.01;
            case MolarityUnits.DecimolesPerLiter:
                return (this.value*1e-3) / 0.1;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: MolarityUnits): number {
        switch (fromUnit) {
                
            case MolarityUnits.MolesPerCubicMeter:
                return value;
            case MolarityUnits.MolesPerLiter:
                return value/1e-3;
            case MolarityUnits.PicomolesPerLiter:
                return (value/1e-3) * 1e-12;
            case MolarityUnits.NanomolesPerLiter:
                return (value/1e-3) * 1e-9;
            case MolarityUnits.MicromolesPerLiter:
                return (value/1e-3) * 0.000001;
            case MolarityUnits.CentimolesPerLiter:
                return (value/1e-3) * 0.01;
            case MolarityUnits.DecimolesPerLiter:
                return (value/1e-3) * 0.1;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: MolarityUnits = MolarityUnits.MolesPerCubicMeter): string {

        switch (toUnit) {
            
            case MolarityUnits.MolesPerCubicMeter:
                return this.MolesPerCubicMeter + ` mol/m³`;
            case MolarityUnits.MolesPerLiter:
                return this.MolesPerLiter + ` mol/L`;
            case MolarityUnits.PicomolesPerLiter:
                return this.PicomolesPerLiter + ` mol/L`;
            case MolarityUnits.NanomolesPerLiter:
                return this.NanomolesPerLiter + ` mol/L`;
            case MolarityUnits.MicromolesPerLiter:
                return this.MicromolesPerLiter + ` mol/L`;
            case MolarityUnits.CentimolesPerLiter:
                return this.CentimolesPerLiter + ` mol/L`;
            case MolarityUnits.DecimolesPerLiter:
                return this.DecimolesPerLiter + ` mol/L`;
        default:
            break;
        }
        return this.value.toString();
    }
}
