export enum AngleUnits {
    Radians,
    Degrees,
    Arcminutes,
    Arcseconds,
    Gradians,
    Revolutions,
    Nanoradian,
    Microradian,
    Centiradian,
    Deciradian,
    Nanodegree,
    Microdegree
}

export class Angle {
    private value: number;
    private radiansLazy: number | null = null;
    private degreesLazy: number | null = null;
    private arcminutesLazy: number | null = null;
    private arcsecondsLazy: number | null = null;
    private gradiansLazy: number | null = null;
    private revolutionsLazy: number | null = null;
    private nanoradianLazy: number | null = null;
    private microradianLazy: number | null = null;
    private centiradianLazy: number | null = null;
    private deciradianLazy: number | null = null;
    private nanodegreeLazy: number | null = null;
    private microdegreeLazy: number | null = null;

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

    public get Nanoradian(): number {
        if(this.nanoradianLazy !== null){
            return this.nanoradianLazy;
        }
        return this.nanoradianLazy = this.convertFromBase(AngleUnits.Nanoradian);
    }

    public get Microradian(): number {
        if(this.microradianLazy !== null){
            return this.microradianLazy;
        }
        return this.microradianLazy = this.convertFromBase(AngleUnits.Microradian);
    }

    public get Centiradian(): number {
        if(this.centiradianLazy !== null){
            return this.centiradianLazy;
        }
        return this.centiradianLazy = this.convertFromBase(AngleUnits.Centiradian);
    }

    public get Deciradian(): number {
        if(this.deciradianLazy !== null){
            return this.deciradianLazy;
        }
        return this.deciradianLazy = this.convertFromBase(AngleUnits.Deciradian);
    }

    public get Nanodegree(): number {
        if(this.nanodegreeLazy !== null){
            return this.nanodegreeLazy;
        }
        return this.nanodegreeLazy = this.convertFromBase(AngleUnits.Nanodegree);
    }

    public get Microdegree(): number {
        if(this.microdegreeLazy !== null){
            return this.microdegreeLazy;
        }
        return this.microdegreeLazy = this.convertFromBase(AngleUnits.Microdegree);
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

    public static FromNanoradian(value: number): Angle {
        return new Angle(value, AngleUnits.Nanoradian);
    }

    public static FromMicroradian(value: number): Angle {
        return new Angle(value, AngleUnits.Microradian);
    }

    public static FromCentiradian(value: number): Angle {
        return new Angle(value, AngleUnits.Centiradian);
    }

    public static FromDeciradian(value: number): Angle {
        return new Angle(value, AngleUnits.Deciradian);
    }

    public static FromNanodegree(value: number): Angle {
        return new Angle(value, AngleUnits.Nanodegree);
    }

    public static FromMicrodegree(value: number): Angle {
        return new Angle(value, AngleUnits.Microdegree);
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
            case AngleUnits.Nanoradian:
                return (this.value/180*Math.PI) / 1e-9;
            case AngleUnits.Microradian:
                return (this.value/180*Math.PI) / 0.000001;
            case AngleUnits.Centiradian:
                return (this.value/180*Math.PI) / 0.01;
            case AngleUnits.Deciradian:
                return (this.value/180*Math.PI) / 0.1;
            case AngleUnits.Nanodegree:
                return (this.value) / 1e-9;
            case AngleUnits.Microdegree:
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
            case AngleUnits.Nanoradian:
                return (value*180/Math.PI) * 1e-9;
            case AngleUnits.Microradian:
                return (value*180/Math.PI) * 0.000001;
            case AngleUnits.Centiradian:
                return (value*180/Math.PI) * 0.01;
            case AngleUnits.Deciradian:
                return (value*180/Math.PI) * 0.1;
            case AngleUnits.Nanodegree:
                return (value) * 1e-9;
            case AngleUnits.Microdegree:
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
            case AngleUnits.Nanoradian:
                return this.Nanoradian + ` rad`;
            case AngleUnits.Microradian:
                return this.Microradian + ` rad`;
            case AngleUnits.Centiradian:
                return this.Centiradian + ` rad`;
            case AngleUnits.Deciradian:
                return this.Deciradian + ` rad`;
            case AngleUnits.Nanodegree:
                return this.Nanodegree + ` °`;
            case AngleUnits.Microdegree:
                return this.Microdegree + ` °`;
        default:
            break;
        }
        return this.value.toString();
    }
}
