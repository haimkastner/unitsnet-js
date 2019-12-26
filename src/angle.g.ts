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
    private radiansLazy: number | null = null;
    private degreesLazy: number | null = null;
    private arcminutesLazy: number | null = null;
    private arcsecondsLazy: number | null = null;
    private gradiansLazy: number | null = null;
    private revolutionsLazy: number | null = null;
    private nanoradiansLazy: number | null = null;
    private microradiansLazy: number | null = null;
    private centiradiansLazy: number | null = null;
    private deciradiansLazy: number | null = null;
    private nanodegreesLazy: number | null = null;
    private microdegreesLazy: number | null = null;

    public constructor(value: number, fromUnit: AngleUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Radians(): number {
        if(this.radiansLazy !== null){
            return this.radiansLazy;
        }
        return this.radiansLazy = this.convertFromBase(AngleUnits.Radians);
    }

    public get Degrees(): number {
        if(this.degreesLazy !== null){
            return this.degreesLazy;
        }
        return this.degreesLazy = this.convertFromBase(AngleUnits.Degrees);
    }

    public get Arcminutes(): number {
        if(this.arcminutesLazy !== null){
            return this.arcminutesLazy;
        }
        return this.arcminutesLazy = this.convertFromBase(AngleUnits.Arcminutes);
    }

    public get Arcseconds(): number {
        if(this.arcsecondsLazy !== null){
            return this.arcsecondsLazy;
        }
        return this.arcsecondsLazy = this.convertFromBase(AngleUnits.Arcseconds);
    }

    public get Gradians(): number {
        if(this.gradiansLazy !== null){
            return this.gradiansLazy;
        }
        return this.gradiansLazy = this.convertFromBase(AngleUnits.Gradians);
    }

    public get Revolutions(): number {
        if(this.revolutionsLazy !== null){
            return this.revolutionsLazy;
        }
        return this.revolutionsLazy = this.convertFromBase(AngleUnits.Revolutions);
    }

    public get Nanoradians(): number {
        if(this.nanoradiansLazy !== null){
            return this.nanoradiansLazy;
        }
        return this.nanoradiansLazy = this.convertFromBase(AngleUnits.Nanoradians);
    }

    public get Microradians(): number {
        if(this.microradiansLazy !== null){
            return this.microradiansLazy;
        }
        return this.microradiansLazy = this.convertFromBase(AngleUnits.Microradians);
    }

    public get Centiradians(): number {
        if(this.centiradiansLazy !== null){
            return this.centiradiansLazy;
        }
        return this.centiradiansLazy = this.convertFromBase(AngleUnits.Centiradians);
    }

    public get Deciradians(): number {
        if(this.deciradiansLazy !== null){
            return this.deciradiansLazy;
        }
        return this.deciradiansLazy = this.convertFromBase(AngleUnits.Deciradians);
    }

    public get Nanodegrees(): number {
        if(this.nanodegreesLazy !== null){
            return this.nanodegreesLazy;
        }
        return this.nanodegreesLazy = this.convertFromBase(AngleUnits.Nanodegrees);
    }

    public get Microdegrees(): number {
        if(this.microdegreesLazy !== null){
            return this.microdegreesLazy;
        }
        return this.microdegreesLazy = this.convertFromBase(AngleUnits.Microdegrees);
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
                return (this.value/180*Math.PI) / 1e-9;
            case AngleUnits.Microradians:
                return (this.value/180*Math.PI) / 0.000001;
            case AngleUnits.Centiradians:
                return (this.value/180*Math.PI) / 0.01;
            case AngleUnits.Deciradians:
                return (this.value/180*Math.PI) / 0.1;
            case AngleUnits.Nanodegrees:
                return (this.value) / 1e-9;
            case AngleUnits.Microdegrees:
                return (this.value) / 0.000001;
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
                return (value*180/Math.PI) * 1e-9;
            case AngleUnits.Microradians:
                return (value*180/Math.PI) * 0.000001;
            case AngleUnits.Centiradians:
                return (value*180/Math.PI) * 0.01;
            case AngleUnits.Deciradians:
                return (value*180/Math.PI) * 0.1;
            case AngleUnits.Nanodegrees:
                return (value) * 1e-9;
            case AngleUnits.Microdegrees:
                return (value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: AngleUnits = AngleUnits.Degrees): string {

        switch (toUnit) {
            
            case AngleUnits.Radians:
                return this.Radians + ` rad`;
            case AngleUnits.Degrees:
                return this.Degrees + ` °`;
            case AngleUnits.Arcminutes:
                return this.Arcminutes + ` '`;
            case AngleUnits.Arcseconds:
                return this.Arcseconds + ` ″`;
            case AngleUnits.Gradians:
                return this.Gradians + ` g`;
            case AngleUnits.Revolutions:
                return this.Revolutions + ` r`;
            case AngleUnits.Nanoradians:
                return this.Nanoradians + ` rad`;
            case AngleUnits.Microradians:
                return this.Microradians + ` rad`;
            case AngleUnits.Centiradians:
                return this.Centiradians + ` rad`;
            case AngleUnits.Deciradians:
                return this.Deciradians + ` rad`;
            case AngleUnits.Nanodegrees:
                return this.Nanodegrees + ` °`;
            case AngleUnits.Microdegrees:
                return this.Microdegrees + ` °`;
        default:
            break;
        }
        return this.value.toString();
    }
}
