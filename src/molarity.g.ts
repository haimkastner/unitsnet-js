export enum MolarityUnits {
    MolesPerCubicMeter,
    MolesPerLiter,
    Picomolesperliter,
    Nanomolesperliter,
    Micromolesperliter,
    Centimolesperliter,
    Decimolesperliter
}

export class Molarity {
    private value: number;

    public constructor(value: number, fromUnit: MolarityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get MolesPerCubicMeter(): number {
        return this.convertFromBase(MolarityUnits.MolesPerCubicMeter);
    }

    public get MolesPerLiter(): number {
        return this.convertFromBase(MolarityUnits.MolesPerLiter);
    }

    public get Picomolesperliter(): number {
        return this.convertFromBase(MolarityUnits.Picomolesperliter);
    }

    public get Nanomolesperliter(): number {
        return this.convertFromBase(MolarityUnits.Nanomolesperliter);
    }

    public get Micromolesperliter(): number {
        return this.convertFromBase(MolarityUnits.Micromolesperliter);
    }

    public get Centimolesperliter(): number {
        return this.convertFromBase(MolarityUnits.Centimolesperliter);
    }

    public get Decimolesperliter(): number {
        return this.convertFromBase(MolarityUnits.Decimolesperliter);
    }

    public static FromMolesPerCubicMeter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.MolesPerCubicMeter);
    }

    public static FromMolesPerLiter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.MolesPerLiter);
    }

    public static FromPicomolesperliter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.Picomolesperliter);
    }

    public static FromNanomolesperliter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.Nanomolesperliter);
    }

    public static FromMicromolesperliter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.Micromolesperliter);
    }

    public static FromCentimolesperliter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.Centimolesperliter);
    }

    public static FromDecimolesperliter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.Decimolesperliter);
    }

    private convertFromBase(toUnit: MolarityUnits): number {

            switch (toUnit) {
                
                case MolarityUnits.MolesPerCubicMeter:
                    return this.value;
                
                case MolarityUnits.MolesPerLiter:
                    return this.value*1e-3;
                
                case MolarityUnits.Picomolesperliter:
                    return (this.value/1e-3) * 1e-12;
                
                case MolarityUnits.Nanomolesperliter:
                    return (this.value/1e-3) * 1e-9;
                
                case MolarityUnits.Micromolesperliter:
                    return (this.value/1e-3) * 0.000001;
                
                case MolarityUnits.Centimolesperliter:
                    return (this.value/1e-3) * 0.01;
                
                case MolarityUnits.Decimolesperliter:
                    return (this.value/1e-3) * 0.1;
                
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
                
                case MolarityUnits.Picomolesperliter:
                    return (value*1e-3) / 1e-12;
                
                case MolarityUnits.Nanomolesperliter:
                    return (value*1e-3) / 1e-9;
                
                case MolarityUnits.Micromolesperliter:
                    return (value*1e-3) / 0.000001;
                
                case MolarityUnits.Centimolesperliter:
                    return (value*1e-3) / 0.01;
                
                case MolarityUnits.Decimolesperliter:
                    return (value*1e-3) / 0.1;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
