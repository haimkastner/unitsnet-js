export enum AngleUnits {
    Radians,
    Degrees,
    Arcminutes,
    Arcseconds,
    Gradians,
    Revolutions,
    Nanoradians,
    Microradians,
    Centiradians,
    Deciradians,
    Nanodegrees,
    Microdegrees
}

export class Angle {
    private value: number;

    public constructor(value: number, fromUnit: AngleUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Radians(): number {
        return this.convertFromBase(AngleUnits.Radians);
    }

    public get Degrees(): number {
        return this.convertFromBase(AngleUnits.Degrees);
    }

    public get Arcminutes(): number {
        return this.convertFromBase(AngleUnits.Arcminutes);
    }

    public get Arcseconds(): number {
        return this.convertFromBase(AngleUnits.Arcseconds);
    }

    public get Gradians(): number {
        return this.convertFromBase(AngleUnits.Gradians);
    }

    public get Revolutions(): number {
        return this.convertFromBase(AngleUnits.Revolutions);
    }

    public get Nanoradians(): number {
        return this.convertFromBase(AngleUnits.Nanoradians);
    }

    public get Microradians(): number {
        return this.convertFromBase(AngleUnits.Microradians);
    }

    public get Centiradians(): number {
        return this.convertFromBase(AngleUnits.Centiradians);
    }

    public get Deciradians(): number {
        return this.convertFromBase(AngleUnits.Deciradians);
    }

    public get Nanodegrees(): number {
        return this.convertFromBase(AngleUnits.Nanodegrees);
    }

    public get Microdegrees(): number {
        return this.convertFromBase(AngleUnits.Microdegrees);
    }

    public static FromRadians(value: number): Angle {
        return new Angle(value, AngleUnits.Radians);
    }

    public static FromDegrees(value: number): Angle {
        return new Angle(value, AngleUnits.Degrees);
    }

    public static FromArcminutes(value: number): Angle {
        return new Angle(value, AngleUnits.Arcminutes);
    }

    public static FromArcseconds(value: number): Angle {
        return new Angle(value, AngleUnits.Arcseconds);
    }

    public static FromGradians(value: number): Angle {
        return new Angle(value, AngleUnits.Gradians);
    }

    public static FromRevolutions(value: number): Angle {
        return new Angle(value, AngleUnits.Revolutions);
    }

    public static FromNanoradians(value: number): Angle {
        return new Angle(value, AngleUnits.Nanoradians);
    }

    public static FromMicroradians(value: number): Angle {
        return new Angle(value, AngleUnits.Microradians);
    }

    public static FromCentiradians(value: number): Angle {
        return new Angle(value, AngleUnits.Centiradians);
    }

    public static FromDeciradians(value: number): Angle {
        return new Angle(value, AngleUnits.Deciradians);
    }

    public static FromNanodegrees(value: number): Angle {
        return new Angle(value, AngleUnits.Nanodegrees);
    }

    public static FromMicrodegrees(value: number): Angle {
        return new Angle(value, AngleUnits.Microdegrees);
    }

    private convertFromBase(toUnit: AngleUnits): number {

            switch (toUnit) {
                
                case AngleUnits.Radians:
                    return this.value/180*Math.PI;
                
                case AngleUnits.Degrees:
                    return this.value;
                
                case AngleUnits.Arcminutes:
                    return this.value*60;
                
                case AngleUnits.Arcseconds:
                    return this.value*3600;
                
                case AngleUnits.Gradians:
                    return this.value/0.9;
                
                case AngleUnits.Revolutions:
                    return this.value/360;
                
                case AngleUnits.Nanoradians:
                    return (this.value*180/Math.PI) * 1e-9;
                
                case AngleUnits.Microradians:
                    return (this.value*180/Math.PI) * 0.000001;
                
                case AngleUnits.Centiradians:
                    return (this.value*180/Math.PI) * 0.01;
                
                case AngleUnits.Deciradians:
                    return (this.value*180/Math.PI) * 0.1;
                
                case AngleUnits.Nanodegrees:
                    return (this.value) * 1e-9;
                
                case AngleUnits.Microdegrees:
                    return (this.value) * 0.000001;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: AngleUnits): number {

                switch (fromUnit) {
                    
                case AngleUnits.Radians:
                    return value*180/Math.PI;
                
                case AngleUnits.Degrees:
                    return value;
                
                case AngleUnits.Arcminutes:
                    return value/60;
                
                case AngleUnits.Arcseconds:
                    return value/3600;
                
                case AngleUnits.Gradians:
                    return value*0.9;
                
                case AngleUnits.Revolutions:
                    return value*360;
                
                case AngleUnits.Nanoradians:
                    return (value/180*Math.PI) / 1e-9;
                
                case AngleUnits.Microradians:
                    return (value/180*Math.PI) / 0.000001;
                
                case AngleUnits.Centiradians:
                    return (value/180*Math.PI) / 0.01;
                
                case AngleUnits.Deciradians:
                    return (value/180*Math.PI) / 0.1;
                
                case AngleUnits.Nanodegrees:
                    return (value) / 1e-9;
                
                case AngleUnits.Microdegrees:
                    return (value) / 0.000001;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
