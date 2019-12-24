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

    public constructor(value: number, fromUnit: ForcePerLengthUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get NewtonsPerMeter(): number {
        return this.convertFromBase(ForcePerLengthUnits.NewtonsPerMeter);
    }

    public get KilogramsForcePerMeter(): number {
        return this.convertFromBase(ForcePerLengthUnits.KilogramsForcePerMeter);
    }

    public get PoundsForcePerFoot(): number {
        return this.convertFromBase(ForcePerLengthUnits.PoundsForcePerFoot);
    }

    public get PoundsForcePerInch(): number {
        return this.convertFromBase(ForcePerLengthUnits.PoundsForcePerInch);
    }

    public get PoundsForcePerYard(): number {
        return this.convertFromBase(ForcePerLengthUnits.PoundsForcePerYard);
    }

    public get Nanonewtonspermeter(): number {
        return this.convertFromBase(ForcePerLengthUnits.Nanonewtonspermeter);
    }

    public get Micronewtonspermeter(): number {
        return this.convertFromBase(ForcePerLengthUnits.Micronewtonspermeter);
    }

    public get Centinewtonspermeter(): number {
        return this.convertFromBase(ForcePerLengthUnits.Centinewtonspermeter);
    }

    public get Decinewtonspermeter(): number {
        return this.convertFromBase(ForcePerLengthUnits.Decinewtonspermeter);
    }

    public get Kilonewtonspermeter(): number {
        return this.convertFromBase(ForcePerLengthUnits.Kilonewtonspermeter);
    }

    public get Meganewtonspermeter(): number {
        return this.convertFromBase(ForcePerLengthUnits.Meganewtonspermeter);
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
                    return (this.value) * 1e-9;
                
                case ForcePerLengthUnits.Micronewtonspermeter:
                    return (this.value) * 0.000001;
                
                case ForcePerLengthUnits.Centinewtonspermeter:
                    return (this.value) * 0.01;
                
                case ForcePerLengthUnits.Decinewtonspermeter:
                    return (this.value) * 0.1;
                
                case ForcePerLengthUnits.Kilonewtonspermeter:
                    return (this.value) * 1000;
                
                case ForcePerLengthUnits.Meganewtonspermeter:
                    return (this.value) * 1000000;
                
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
                    return (value) / 1e-9;
                
                case ForcePerLengthUnits.Micronewtonspermeter:
                    return (value) / 0.000001;
                
                case ForcePerLengthUnits.Centinewtonspermeter:
                    return (value) / 0.01;
                
                case ForcePerLengthUnits.Decinewtonspermeter:
                    return (value) / 0.1;
                
                case ForcePerLengthUnits.Kilonewtonspermeter:
                    return (value) / 1000;
                
                case ForcePerLengthUnits.Meganewtonspermeter:
                    return (value) / 1000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
