export enum VolumePerLengthUnits {
    CubicMetersPerMeter,
    LitersPerMeter,
    OilBarrelsPerFoot
}

export class VolumePerLength {
    private value: number;
    private cubicmeterspermeterLazy: number | null = null;
    private literspermeterLazy: number | null = null;
    private oilbarrelsperfootLazy: number | null = null;

    public constructor(value: number, fromUnit: VolumePerLengthUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get CubicMetersPerMeter(): number {
        if(this.cubicmeterspermeterLazy !== null){
            return this.cubicmeterspermeterLazy;
        }
        return this.cubicmeterspermeterLazy = this.convertFromBase(VolumePerLengthUnits.CubicMetersPerMeter);
    }

    public get LitersPerMeter(): number {
        if(this.literspermeterLazy !== null){
            return this.literspermeterLazy;
        }
        return this.literspermeterLazy = this.convertFromBase(VolumePerLengthUnits.LitersPerMeter);
    }

    public get OilBarrelsPerFoot(): number {
        if(this.oilbarrelsperfootLazy !== null){
            return this.oilbarrelsperfootLazy;
        }
        return this.oilbarrelsperfootLazy = this.convertFromBase(VolumePerLengthUnits.OilBarrelsPerFoot);
    }

    public static FromCubicMetersPerMeter(value: number): VolumePerLength {
        return new VolumePerLength(value, VolumePerLengthUnits.CubicMetersPerMeter);
    }

    public static FromLitersPerMeter(value: number): VolumePerLength {
        return new VolumePerLength(value, VolumePerLengthUnits.LitersPerMeter);
    }

    public static FromOilBarrelsPerFoot(value: number): VolumePerLength {
        return new VolumePerLength(value, VolumePerLengthUnits.OilBarrelsPerFoot);
    }

    private convertFromBase(toUnit: VolumePerLengthUnits): number {
        switch (toUnit) {
                
            case VolumePerLengthUnits.CubicMetersPerMeter:
                return this.value;
            case VolumePerLengthUnits.LitersPerMeter:
                return this.value*1000;
            case VolumePerLengthUnits.OilBarrelsPerFoot:
                return this.value*1.91713408;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: VolumePerLengthUnits): number {
        switch (fromUnit) {
                
            case VolumePerLengthUnits.CubicMetersPerMeter:
                return value;
            case VolumePerLengthUnits.LitersPerMeter:
                return value/1000;
            case VolumePerLengthUnits.OilBarrelsPerFoot:
                return value/1.91713408;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: VolumePerLengthUnits = VolumePerLengthUnits.CubicMetersPerMeter): string {

        switch (toUnit) {
            
            case VolumePerLengthUnits.CubicMetersPerMeter:
                return this.CubicMetersPerMeter + ` m³/m`;
            case VolumePerLengthUnits.LitersPerMeter:
                return this.LitersPerMeter + ` l/m`;
            case VolumePerLengthUnits.OilBarrelsPerFoot:
                return this.OilBarrelsPerFoot + ` bbl/ft`;
        default:
            break;
        }
        return this.value.toString();
    }
}
