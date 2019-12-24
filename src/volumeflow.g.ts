export enum VolumeFlowUnits {
    CubicMetersPerSecond,
    CubicMetersPerMinute,
    CubicMetersPerHour,
    CubicMetersPerDay,
    CubicFeetPerSecond,
    CubicFeetPerMinute,
    CubicFeetPerHour,
    CubicYardsPerSecond,
    CubicYardsPerMinute,
    CubicYardsPerHour,
    CubicYardsPerDay,
    MillionUsGallonsPerDay,
    UsGallonsPerDay,
    LitersPerSecond,
    LitersPerMinute,
    LitersPerHour,
    LitersPerDay,
    UsGallonsPerSecond,
    UsGallonsPerMinute,
    UkGallonsPerDay,
    UkGallonsPerHour,
    UkGallonsPerMinute,
    UkGallonsPerSecond,
    KilousGallonsPerMinute,
    UsGallonsPerHour,
    CubicDecimetersPerMinute,
    OilBarrelsPerDay,
    OilBarrelsPerMinute,
    OilBarrelsPerHour,
    OilBarrelsPerSecond,
    CubicMillimetersPerSecond,
    AcreFeetPerSecond,
    AcreFeetPerMinute,
    AcreFeetPerHour,
    AcreFeetPerDay,
    Nanolitersperminute,
    Microlitersperminute,
    Centilitersperminute,
    Decilitersperminute,
    Kilolitersperminute,
    Nanolitersperday,
    Microlitersperday,
    Centilitersperday,
    Decilitersperday,
    Kilolitersperday,
    Megalitersperday,
    Megaukgallonspersecond
}

export class VolumeFlow {
    private value: number;

    public constructor(value: number, fromUnit: VolumeFlowUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get CubicMetersPerSecond(): number {
        return this.convertFromBase(VolumeFlowUnits.CubicMetersPerSecond);
    }

    public get CubicMetersPerMinute(): number {
        return this.convertFromBase(VolumeFlowUnits.CubicMetersPerMinute);
    }

    public get CubicMetersPerHour(): number {
        return this.convertFromBase(VolumeFlowUnits.CubicMetersPerHour);
    }

    public get CubicMetersPerDay(): number {
        return this.convertFromBase(VolumeFlowUnits.CubicMetersPerDay);
    }

    public get CubicFeetPerSecond(): number {
        return this.convertFromBase(VolumeFlowUnits.CubicFeetPerSecond);
    }

    public get CubicFeetPerMinute(): number {
        return this.convertFromBase(VolumeFlowUnits.CubicFeetPerMinute);
    }

    public get CubicFeetPerHour(): number {
        return this.convertFromBase(VolumeFlowUnits.CubicFeetPerHour);
    }

    public get CubicYardsPerSecond(): number {
        return this.convertFromBase(VolumeFlowUnits.CubicYardsPerSecond);
    }

    public get CubicYardsPerMinute(): number {
        return this.convertFromBase(VolumeFlowUnits.CubicYardsPerMinute);
    }

    public get CubicYardsPerHour(): number {
        return this.convertFromBase(VolumeFlowUnits.CubicYardsPerHour);
    }

    public get CubicYardsPerDay(): number {
        return this.convertFromBase(VolumeFlowUnits.CubicYardsPerDay);
    }

    public get MillionUsGallonsPerDay(): number {
        return this.convertFromBase(VolumeFlowUnits.MillionUsGallonsPerDay);
    }

    public get UsGallonsPerDay(): number {
        return this.convertFromBase(VolumeFlowUnits.UsGallonsPerDay);
    }

    public get LitersPerSecond(): number {
        return this.convertFromBase(VolumeFlowUnits.LitersPerSecond);
    }

    public get LitersPerMinute(): number {
        return this.convertFromBase(VolumeFlowUnits.LitersPerMinute);
    }

    public get LitersPerHour(): number {
        return this.convertFromBase(VolumeFlowUnits.LitersPerHour);
    }

    public get LitersPerDay(): number {
        return this.convertFromBase(VolumeFlowUnits.LitersPerDay);
    }

    public get UsGallonsPerSecond(): number {
        return this.convertFromBase(VolumeFlowUnits.UsGallonsPerSecond);
    }

    public get UsGallonsPerMinute(): number {
        return this.convertFromBase(VolumeFlowUnits.UsGallonsPerMinute);
    }

    public get UkGallonsPerDay(): number {
        return this.convertFromBase(VolumeFlowUnits.UkGallonsPerDay);
    }

    public get UkGallonsPerHour(): number {
        return this.convertFromBase(VolumeFlowUnits.UkGallonsPerHour);
    }

    public get UkGallonsPerMinute(): number {
        return this.convertFromBase(VolumeFlowUnits.UkGallonsPerMinute);
    }

    public get UkGallonsPerSecond(): number {
        return this.convertFromBase(VolumeFlowUnits.UkGallonsPerSecond);
    }

    public get KilousGallonsPerMinute(): number {
        return this.convertFromBase(VolumeFlowUnits.KilousGallonsPerMinute);
    }

    public get UsGallonsPerHour(): number {
        return this.convertFromBase(VolumeFlowUnits.UsGallonsPerHour);
    }

    public get CubicDecimetersPerMinute(): number {
        return this.convertFromBase(VolumeFlowUnits.CubicDecimetersPerMinute);
    }

    public get OilBarrelsPerDay(): number {
        return this.convertFromBase(VolumeFlowUnits.OilBarrelsPerDay);
    }

    public get OilBarrelsPerMinute(): number {
        return this.convertFromBase(VolumeFlowUnits.OilBarrelsPerMinute);
    }

    public get OilBarrelsPerHour(): number {
        return this.convertFromBase(VolumeFlowUnits.OilBarrelsPerHour);
    }

    public get OilBarrelsPerSecond(): number {
        return this.convertFromBase(VolumeFlowUnits.OilBarrelsPerSecond);
    }

    public get CubicMillimetersPerSecond(): number {
        return this.convertFromBase(VolumeFlowUnits.CubicMillimetersPerSecond);
    }

    public get AcreFeetPerSecond(): number {
        return this.convertFromBase(VolumeFlowUnits.AcreFeetPerSecond);
    }

    public get AcreFeetPerMinute(): number {
        return this.convertFromBase(VolumeFlowUnits.AcreFeetPerMinute);
    }

    public get AcreFeetPerHour(): number {
        return this.convertFromBase(VolumeFlowUnits.AcreFeetPerHour);
    }

    public get AcreFeetPerDay(): number {
        return this.convertFromBase(VolumeFlowUnits.AcreFeetPerDay);
    }

    public get Nanolitersperminute(): number {
        return this.convertFromBase(VolumeFlowUnits.Nanolitersperminute);
    }

    public get Microlitersperminute(): number {
        return this.convertFromBase(VolumeFlowUnits.Microlitersperminute);
    }

    public get Centilitersperminute(): number {
        return this.convertFromBase(VolumeFlowUnits.Centilitersperminute);
    }

    public get Decilitersperminute(): number {
        return this.convertFromBase(VolumeFlowUnits.Decilitersperminute);
    }

    public get Kilolitersperminute(): number {
        return this.convertFromBase(VolumeFlowUnits.Kilolitersperminute);
    }

    public get Nanolitersperday(): number {
        return this.convertFromBase(VolumeFlowUnits.Nanolitersperday);
    }

    public get Microlitersperday(): number {
        return this.convertFromBase(VolumeFlowUnits.Microlitersperday);
    }

    public get Centilitersperday(): number {
        return this.convertFromBase(VolumeFlowUnits.Centilitersperday);
    }

    public get Decilitersperday(): number {
        return this.convertFromBase(VolumeFlowUnits.Decilitersperday);
    }

    public get Kilolitersperday(): number {
        return this.convertFromBase(VolumeFlowUnits.Kilolitersperday);
    }

    public get Megalitersperday(): number {
        return this.convertFromBase(VolumeFlowUnits.Megalitersperday);
    }

    public get Megaukgallonspersecond(): number {
        return this.convertFromBase(VolumeFlowUnits.Megaukgallonspersecond);
    }

    public static FromCubicMetersPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMetersPerSecond);
    }

    public static FromCubicMetersPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMetersPerMinute);
    }

    public static FromCubicMetersPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMetersPerHour);
    }

    public static FromCubicMetersPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMetersPerDay);
    }

    public static FromCubicFeetPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicFeetPerSecond);
    }

    public static FromCubicFeetPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicFeetPerMinute);
    }

    public static FromCubicFeetPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicFeetPerHour);
    }

    public static FromCubicYardsPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicYardsPerSecond);
    }

    public static FromCubicYardsPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicYardsPerMinute);
    }

    public static FromCubicYardsPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicYardsPerHour);
    }

    public static FromCubicYardsPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicYardsPerDay);
    }

    public static FromMillionUsGallonsPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MillionUsGallonsPerDay);
    }

    public static FromUsGallonsPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.UsGallonsPerDay);
    }

    public static FromLitersPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.LitersPerSecond);
    }

    public static FromLitersPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.LitersPerMinute);
    }

    public static FromLitersPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.LitersPerHour);
    }

    public static FromLitersPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.LitersPerDay);
    }

    public static FromUsGallonsPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.UsGallonsPerSecond);
    }

    public static FromUsGallonsPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.UsGallonsPerMinute);
    }

    public static FromUkGallonsPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.UkGallonsPerDay);
    }

    public static FromUkGallonsPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.UkGallonsPerHour);
    }

    public static FromUkGallonsPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.UkGallonsPerMinute);
    }

    public static FromUkGallonsPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.UkGallonsPerSecond);
    }

    public static FromKilousGallonsPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.KilousGallonsPerMinute);
    }

    public static FromUsGallonsPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.UsGallonsPerHour);
    }

    public static FromCubicDecimetersPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicDecimetersPerMinute);
    }

    public static FromOilBarrelsPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.OilBarrelsPerDay);
    }

    public static FromOilBarrelsPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.OilBarrelsPerMinute);
    }

    public static FromOilBarrelsPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.OilBarrelsPerHour);
    }

    public static FromOilBarrelsPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.OilBarrelsPerSecond);
    }

    public static FromCubicMillimetersPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMillimetersPerSecond);
    }

    public static FromAcreFeetPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.AcreFeetPerSecond);
    }

    public static FromAcreFeetPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.AcreFeetPerMinute);
    }

    public static FromAcreFeetPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.AcreFeetPerHour);
    }

    public static FromAcreFeetPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.AcreFeetPerDay);
    }

    public static FromNanolitersperminute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.Nanolitersperminute);
    }

    public static FromMicrolitersperminute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.Microlitersperminute);
    }

    public static FromCentilitersperminute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.Centilitersperminute);
    }

    public static FromDecilitersperminute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.Decilitersperminute);
    }

    public static FromKilolitersperminute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.Kilolitersperminute);
    }

    public static FromNanolitersperday(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.Nanolitersperday);
    }

    public static FromMicrolitersperday(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.Microlitersperday);
    }

    public static FromCentilitersperday(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.Centilitersperday);
    }

    public static FromDecilitersperday(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.Decilitersperday);
    }

    public static FromKilolitersperday(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.Kilolitersperday);
    }

    public static FromMegalitersperday(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.Megalitersperday);
    }

    public static FromMegaukgallonspersecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.Megaukgallonspersecond);
    }

    private convertFromBase(toUnit: VolumeFlowUnits): number {

                switch (toUnit) {
                    
                case VolumeFlowUnits.CubicMetersPerSecond:
                    return this.value;
                
                case VolumeFlowUnits.CubicMetersPerMinute:
                    return this.value*60;
                
                case VolumeFlowUnits.CubicMetersPerHour:
                    return this.value*3600;
                
                case VolumeFlowUnits.CubicMetersPerDay:
                    return this.value*86400;
                
                case VolumeFlowUnits.CubicFeetPerSecond:
                    return this.value*35.314666721;
                
                case VolumeFlowUnits.CubicFeetPerMinute:
                    return this.value*2118.88000326;
                
                case VolumeFlowUnits.CubicFeetPerHour:
                    return this.value/7.8657907199999087346816086183876e-6;
                
                case VolumeFlowUnits.CubicYardsPerSecond:
                    return this.value/0.764554857984;
                
                case VolumeFlowUnits.CubicYardsPerMinute:
                    return this.value/0.0127425809664;
                
                case VolumeFlowUnits.CubicYardsPerHour:
                    return this.value/2.1237634944E-4;
                
                case VolumeFlowUnits.CubicYardsPerDay:
                    return this.value*113007;
                
                case VolumeFlowUnits.MillionUsGallonsPerDay:
                    return this.value*22.824465227;
                
                case VolumeFlowUnits.UsGallonsPerDay:
                    return this.value*22824465.227;
                
                case VolumeFlowUnits.LitersPerSecond:
                    return this.value*1000;
                
                case VolumeFlowUnits.LitersPerMinute:
                    return this.value*60000.00000;
                
                case VolumeFlowUnits.LitersPerHour:
                    return this.value*3600000.000;
                
                case VolumeFlowUnits.LitersPerDay:
                    return this.value*86400000;
                
                case VolumeFlowUnits.UsGallonsPerSecond:
                    return this.value*264.1720523581484;
                
                case VolumeFlowUnits.UsGallonsPerMinute:
                    return this.value*15850.323141489;
                
                case VolumeFlowUnits.UkGallonsPerDay:
                    return this.value*19005304;
                
                case VolumeFlowUnits.UkGallonsPerHour:
                    return this.value*791887.667;
                
                case VolumeFlowUnits.UkGallonsPerMinute:
                    return this.value*13198.2;
                
                case VolumeFlowUnits.UkGallonsPerSecond:
                    return this.value*219.969;
                
                case VolumeFlowUnits.KilousGallonsPerMinute:
                    return this.value*15.850323141489;
                
                case VolumeFlowUnits.UsGallonsPerHour:
                    return this.value*951019.38848933424;
                
                case VolumeFlowUnits.CubicDecimetersPerMinute:
                    return this.value*60000.00000;
                
                case VolumeFlowUnits.OilBarrelsPerDay:
                    return this.value/1.8401307283333333333333333333333e-6;
                
                case VolumeFlowUnits.OilBarrelsPerMinute:
                    return this.value/2.64978825e-3;
                
                case VolumeFlowUnits.OilBarrelsPerHour:
                    return this.value/4.41631375e-5;
                
                case VolumeFlowUnits.OilBarrelsPerSecond:
                    return this.value*6.28981;
                
                case VolumeFlowUnits.CubicMillimetersPerSecond:
                    return this.value/1e-9;
                
                case VolumeFlowUnits.AcreFeetPerSecond:
                    return this.value*0.000810713194;
                
                case VolumeFlowUnits.AcreFeetPerMinute:
                    return this.value*0.0486427916;
                
                case VolumeFlowUnits.AcreFeetPerHour:
                    return this.value*2.91857;
                
                case VolumeFlowUnits.AcreFeetPerDay:
                    return this.value*70.0457;
                
                case VolumeFlowUnits.Nanolitersperminute:
                    return (this.value*60000.00000) / 1e-9;
                
                case VolumeFlowUnits.Microlitersperminute:
                    return (this.value*60000.00000) / 0.000001;
                
                case VolumeFlowUnits.Centilitersperminute:
                    return (this.value*60000.00000) / 0.01;
                
                case VolumeFlowUnits.Decilitersperminute:
                    return (this.value*60000.00000) / 0.1;
                
                case VolumeFlowUnits.Kilolitersperminute:
                    return (this.value*60000.00000) / 1000;
                
                case VolumeFlowUnits.Nanolitersperday:
                    return (this.value*86400000) / 1e-9;
                
                case VolumeFlowUnits.Microlitersperday:
                    return (this.value*86400000) / 0.000001;
                
                case VolumeFlowUnits.Centilitersperday:
                    return (this.value*86400000) / 0.01;
                
                case VolumeFlowUnits.Decilitersperday:
                    return (this.value*86400000) / 0.1;
                
                case VolumeFlowUnits.Kilolitersperday:
                    return (this.value*86400000) / 1000;
                
                case VolumeFlowUnits.Megalitersperday:
                    return (this.value*86400000) / 1000000;
                
                case VolumeFlowUnits.Megaukgallonspersecond:
                    return (this.value*219.969) / 1000000;
                
                    default:
                        break;
                }
                return NaN;
            
    }

    private convertToBase(value: number, fromUnit: VolumeFlowUnits): number {

                switch (fromUnit) {
                    
                case VolumeFlowUnits.CubicMetersPerSecond:
                    return value;
                
                case VolumeFlowUnits.CubicMetersPerMinute:
                    return value/60;
                
                case VolumeFlowUnits.CubicMetersPerHour:
                    return value/3600;
                
                case VolumeFlowUnits.CubicMetersPerDay:
                    return value/86400;
                
                case VolumeFlowUnits.CubicFeetPerSecond:
                    return value/35.314666721;
                
                case VolumeFlowUnits.CubicFeetPerMinute:
                    return value/2118.88000326;
                
                case VolumeFlowUnits.CubicFeetPerHour:
                    return value*7.8657907199999087346816086183876e-6;
                
                case VolumeFlowUnits.CubicYardsPerSecond:
                    return value*0.764554857984;
                
                case VolumeFlowUnits.CubicYardsPerMinute:
                    return value*0.0127425809664;
                
                case VolumeFlowUnits.CubicYardsPerHour:
                    return value*2.1237634944E-4;
                
                case VolumeFlowUnits.CubicYardsPerDay:
                    return value/113007;
                
                case VolumeFlowUnits.MillionUsGallonsPerDay:
                    return value/22.824465227;
                
                case VolumeFlowUnits.UsGallonsPerDay:
                    return value/22824465.227;
                
                case VolumeFlowUnits.LitersPerSecond:
                    return value/1000;
                
                case VolumeFlowUnits.LitersPerMinute:
                    return value/60000.00000;
                
                case VolumeFlowUnits.LitersPerHour:
                    return value/3600000.000;
                
                case VolumeFlowUnits.LitersPerDay:
                    return value/86400000;
                
                case VolumeFlowUnits.UsGallonsPerSecond:
                    return value/264.1720523581484;
                
                case VolumeFlowUnits.UsGallonsPerMinute:
                    return value/15850.323141489;
                
                case VolumeFlowUnits.UkGallonsPerDay:
                    return value/19005304;
                
                case VolumeFlowUnits.UkGallonsPerHour:
                    return value/791887.667;
                
                case VolumeFlowUnits.UkGallonsPerMinute:
                    return value/13198.2;
                
                case VolumeFlowUnits.UkGallonsPerSecond:
                    return value/219.969;
                
                case VolumeFlowUnits.KilousGallonsPerMinute:
                    return value/15.850323141489;
                
                case VolumeFlowUnits.UsGallonsPerHour:
                    return value/951019.38848933424;
                
                case VolumeFlowUnits.CubicDecimetersPerMinute:
                    return value/60000.00000;
                
                case VolumeFlowUnits.OilBarrelsPerDay:
                    return value*1.8401307283333333333333333333333e-6;
                
                case VolumeFlowUnits.OilBarrelsPerMinute:
                    return value*2.64978825e-3;
                
                case VolumeFlowUnits.OilBarrelsPerHour:
                    return value*4.41631375e-5;
                
                case VolumeFlowUnits.OilBarrelsPerSecond:
                    return value/6.28981;
                
                case VolumeFlowUnits.CubicMillimetersPerSecond:
                    return value*1e-9;
                
                case VolumeFlowUnits.AcreFeetPerSecond:
                    return value/0.000810713194;
                
                case VolumeFlowUnits.AcreFeetPerMinute:
                    return value/0.0486427916;
                
                case VolumeFlowUnits.AcreFeetPerHour:
                    return value/2.91857;
                
                case VolumeFlowUnits.AcreFeetPerDay:
                    return value/70.0457;
                
                case VolumeFlowUnits.Nanolitersperminute:
                    return (value/60000.00000) * 1e-9;
                
                case VolumeFlowUnits.Microlitersperminute:
                    return (value/60000.00000) * 0.000001;
                
                case VolumeFlowUnits.Centilitersperminute:
                    return (value/60000.00000) * 0.01;
                
                case VolumeFlowUnits.Decilitersperminute:
                    return (value/60000.00000) * 0.1;
                
                case VolumeFlowUnits.Kilolitersperminute:
                    return (value/60000.00000) * 1000;
                
                case VolumeFlowUnits.Nanolitersperday:
                    return (value/86400000) * 1e-9;
                
                case VolumeFlowUnits.Microlitersperday:
                    return (value/86400000) * 0.000001;
                
                case VolumeFlowUnits.Centilitersperday:
                    return (value/86400000) * 0.01;
                
                case VolumeFlowUnits.Decilitersperday:
                    return (value/86400000) * 0.1;
                
                case VolumeFlowUnits.Kilolitersperday:
                    return (value/86400000) * 1000;
                
                case VolumeFlowUnits.Megalitersperday:
                    return (value/86400000) * 1000000;
                
                case VolumeFlowUnits.Megaukgallonspersecond:
                    return (value/219.969) * 1000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
