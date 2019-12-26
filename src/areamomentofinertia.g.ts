export enum AreaMomentOfInertiaUnits {
    MetersToTheFourth,
    DecimetersToTheFourth,
    CentimetersToTheFourth,
    MillimetersToTheFourth,
    FeetToTheFourth,
    InchesToTheFourth
}

export class AreaMomentOfInertia {
    private value: number;
    private meterstothefourthLazy: number | null = null;
    private decimeterstothefourthLazy: number | null = null;
    private centimeterstothefourthLazy: number | null = null;
    private millimeterstothefourthLazy: number | null = null;
    private feettothefourthLazy: number | null = null;
    private inchestothefourthLazy: number | null = null;

    public constructor(value: number, fromUnit: AreaMomentOfInertiaUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get MetersToTheFourth(): number {
        if(this.meterstothefourthLazy !== null){
            return this.meterstothefourthLazy;
        }
        return this.meterstothefourthLazy = this.convertFromBase(AreaMomentOfInertiaUnits.MetersToTheFourth);
    }

    public get DecimetersToTheFourth(): number {
        if(this.decimeterstothefourthLazy !== null){
            return this.decimeterstothefourthLazy;
        }
        return this.decimeterstothefourthLazy = this.convertFromBase(AreaMomentOfInertiaUnits.DecimetersToTheFourth);
    }

    public get CentimetersToTheFourth(): number {
        if(this.centimeterstothefourthLazy !== null){
            return this.centimeterstothefourthLazy;
        }
        return this.centimeterstothefourthLazy = this.convertFromBase(AreaMomentOfInertiaUnits.CentimetersToTheFourth);
    }

    public get MillimetersToTheFourth(): number {
        if(this.millimeterstothefourthLazy !== null){
            return this.millimeterstothefourthLazy;
        }
        return this.millimeterstothefourthLazy = this.convertFromBase(AreaMomentOfInertiaUnits.MillimetersToTheFourth);
    }

    public get FeetToTheFourth(): number {
        if(this.feettothefourthLazy !== null){
            return this.feettothefourthLazy;
        }
        return this.feettothefourthLazy = this.convertFromBase(AreaMomentOfInertiaUnits.FeetToTheFourth);
    }

    public get InchesToTheFourth(): number {
        if(this.inchestothefourthLazy !== null){
            return this.inchestothefourthLazy;
        }
        return this.inchestothefourthLazy = this.convertFromBase(AreaMomentOfInertiaUnits.InchesToTheFourth);
    }

    public static FromMetersToTheFourth(value: number): AreaMomentOfInertia {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.MetersToTheFourth);
    }

    public static FromDecimetersToTheFourth(value: number): AreaMomentOfInertia {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.DecimetersToTheFourth);
    }

    public static FromCentimetersToTheFourth(value: number): AreaMomentOfInertia {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.CentimetersToTheFourth);
    }

    public static FromMillimetersToTheFourth(value: number): AreaMomentOfInertia {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.MillimetersToTheFourth);
    }

    public static FromFeetToTheFourth(value: number): AreaMomentOfInertia {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.FeetToTheFourth);
    }

    public static FromInchesToTheFourth(value: number): AreaMomentOfInertia {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.InchesToTheFourth);
    }

    private convertFromBase(toUnit: AreaMomentOfInertiaUnits): number {
        switch (toUnit) {
                
            case AreaMomentOfInertiaUnits.MetersToTheFourth:
                return this.value;
            case AreaMomentOfInertiaUnits.DecimetersToTheFourth:
                return this.value*1e4;
            case AreaMomentOfInertiaUnits.CentimetersToTheFourth:
                return this.value*1e8;
            case AreaMomentOfInertiaUnits.MillimetersToTheFourth:
                return this.value*1e12;
            case AreaMomentOfInertiaUnits.FeetToTheFourth:
                return this.value/Math.pow(0.3048, 4);
            case AreaMomentOfInertiaUnits.InchesToTheFourth:
                return this.value/Math.pow(2.54e-2, 4);
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: AreaMomentOfInertiaUnits): number {
        switch (fromUnit) {
                
            case AreaMomentOfInertiaUnits.MetersToTheFourth:
                return value;
            case AreaMomentOfInertiaUnits.DecimetersToTheFourth:
                return value/1e4;
            case AreaMomentOfInertiaUnits.CentimetersToTheFourth:
                return value/1e8;
            case AreaMomentOfInertiaUnits.MillimetersToTheFourth:
                return value/1e12;
            case AreaMomentOfInertiaUnits.FeetToTheFourth:
                return value*Math.pow(0.3048, 4);
            case AreaMomentOfInertiaUnits.InchesToTheFourth:
                return value*Math.pow(2.54e-2, 4);
            default:
                break;
        }
        return NaN;
    }
}
