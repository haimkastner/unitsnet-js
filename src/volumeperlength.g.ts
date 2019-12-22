export enum VolumePerLengthUnits {
    CubicMetersPerMeter,
    LitersPerMeter,
    OilBarrelsPerFoot
}

export class VolumePerLength {
    private value: number;

    public constructor(value: number, fromUnit: VolumePerLengthUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get CubicMetersPerMeter(): number {
        return this.convertFromBase(VolumePerLengthUnits.CubicMetersPerMeter);
    }

    public get LitersPerMeter(): number {
        return this.convertFromBase(VolumePerLengthUnits.LitersPerMeter);
    }

    public get OilBarrelsPerFoot(): number {
        return this.convertFromBase(VolumePerLengthUnits.OilBarrelsPerFoot);
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
                    return this.value/1000;
                
                case VolumePerLengthUnits.OilBarrelsPerFoot:
                    return this.value/1.91713408;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: VolumePerLengthUnits): number {

                switch (fromUnit) {
                    
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
}
