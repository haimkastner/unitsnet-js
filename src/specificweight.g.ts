export enum SpecificWeightUnits {
    NewtonsPerCubicMillimeter,
    NewtonsPerCubicCentimeter,
    NewtonsPerCubicMeter,
    KilogramsForcePerCubicMillimeter,
    KilogramsForcePerCubicCentimeter,
    KilogramsForcePerCubicMeter,
    PoundsForcePerCubicInch,
    PoundsForcePerCubicFoot,
    TonnesForcePerCubicMillimeter,
    TonnesForcePerCubicCentimeter,
    TonnesForcePerCubicMeter,
    KilonewtonPerCubicMillimeter,
    KilonewtonPerCubicCentimeter,
    KilonewtonPerCubicMeter,
    MeganewtonPerCubicMeter,
    KilopoundForcePerCubicInch,
    KilopoundForcePerCubicFoot
}

export class SpecificWeight {
    private value: number;
    private newtonspercubicmillimeterLazy: number | null = null;
    private newtonspercubiccentimeterLazy: number | null = null;
    private newtonspercubicmeterLazy: number | null = null;
    private kilogramsforcepercubicmillimeterLazy: number | null = null;
    private kilogramsforcepercubiccentimeterLazy: number | null = null;
    private kilogramsforcepercubicmeterLazy: number | null = null;
    private poundsforcepercubicinchLazy: number | null = null;
    private poundsforcepercubicfootLazy: number | null = null;
    private tonnesforcepercubicmillimeterLazy: number | null = null;
    private tonnesforcepercubiccentimeterLazy: number | null = null;
    private tonnesforcepercubicmeterLazy: number | null = null;
    private kilonewtonpercubicmillimeterLazy: number | null = null;
    private kilonewtonpercubiccentimeterLazy: number | null = null;
    private kilonewtonpercubicmeterLazy: number | null = null;
    private meganewtonpercubicmeterLazy: number | null = null;
    private kilopoundforcepercubicinchLazy: number | null = null;
    private kilopoundforcepercubicfootLazy: number | null = null;

    public constructor(value: number, fromUnit: SpecificWeightUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get NewtonsPerCubicMillimeter(): number {
        if(this.newtonspercubicmillimeterLazy !== null){
            return this.newtonspercubicmillimeterLazy;
        }
        return this.newtonspercubicmillimeterLazy = this.convertFromBase(SpecificWeightUnits.NewtonsPerCubicMillimeter);
    }

    public get NewtonsPerCubicCentimeter(): number {
        if(this.newtonspercubiccentimeterLazy !== null){
            return this.newtonspercubiccentimeterLazy;
        }
        return this.newtonspercubiccentimeterLazy = this.convertFromBase(SpecificWeightUnits.NewtonsPerCubicCentimeter);
    }

    public get NewtonsPerCubicMeter(): number {
        if(this.newtonspercubicmeterLazy !== null){
            return this.newtonspercubicmeterLazy;
        }
        return this.newtonspercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.NewtonsPerCubicMeter);
    }

    public get KilogramsForcePerCubicMillimeter(): number {
        if(this.kilogramsforcepercubicmillimeterLazy !== null){
            return this.kilogramsforcepercubicmillimeterLazy;
        }
        return this.kilogramsforcepercubicmillimeterLazy = this.convertFromBase(SpecificWeightUnits.KilogramsForcePerCubicMillimeter);
    }

    public get KilogramsForcePerCubicCentimeter(): number {
        if(this.kilogramsforcepercubiccentimeterLazy !== null){
            return this.kilogramsforcepercubiccentimeterLazy;
        }
        return this.kilogramsforcepercubiccentimeterLazy = this.convertFromBase(SpecificWeightUnits.KilogramsForcePerCubicCentimeter);
    }

    public get KilogramsForcePerCubicMeter(): number {
        if(this.kilogramsforcepercubicmeterLazy !== null){
            return this.kilogramsforcepercubicmeterLazy;
        }
        return this.kilogramsforcepercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.KilogramsForcePerCubicMeter);
    }

    public get PoundsForcePerCubicInch(): number {
        if(this.poundsforcepercubicinchLazy !== null){
            return this.poundsforcepercubicinchLazy;
        }
        return this.poundsforcepercubicinchLazy = this.convertFromBase(SpecificWeightUnits.PoundsForcePerCubicInch);
    }

    public get PoundsForcePerCubicFoot(): number {
        if(this.poundsforcepercubicfootLazy !== null){
            return this.poundsforcepercubicfootLazy;
        }
        return this.poundsforcepercubicfootLazy = this.convertFromBase(SpecificWeightUnits.PoundsForcePerCubicFoot);
    }

    public get TonnesForcePerCubicMillimeter(): number {
        if(this.tonnesforcepercubicmillimeterLazy !== null){
            return this.tonnesforcepercubicmillimeterLazy;
        }
        return this.tonnesforcepercubicmillimeterLazy = this.convertFromBase(SpecificWeightUnits.TonnesForcePerCubicMillimeter);
    }

    public get TonnesForcePerCubicCentimeter(): number {
        if(this.tonnesforcepercubiccentimeterLazy !== null){
            return this.tonnesforcepercubiccentimeterLazy;
        }
        return this.tonnesforcepercubiccentimeterLazy = this.convertFromBase(SpecificWeightUnits.TonnesForcePerCubicCentimeter);
    }

    public get TonnesForcePerCubicMeter(): number {
        if(this.tonnesforcepercubicmeterLazy !== null){
            return this.tonnesforcepercubicmeterLazy;
        }
        return this.tonnesforcepercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.TonnesForcePerCubicMeter);
    }

    public get KilonewtonPerCubicMillimeter(): number {
        if(this.kilonewtonpercubicmillimeterLazy !== null){
            return this.kilonewtonpercubicmillimeterLazy;
        }
        return this.kilonewtonpercubicmillimeterLazy = this.convertFromBase(SpecificWeightUnits.KilonewtonPerCubicMillimeter);
    }

    public get KilonewtonPerCubicCentimeter(): number {
        if(this.kilonewtonpercubiccentimeterLazy !== null){
            return this.kilonewtonpercubiccentimeterLazy;
        }
        return this.kilonewtonpercubiccentimeterLazy = this.convertFromBase(SpecificWeightUnits.KilonewtonPerCubicCentimeter);
    }

    public get KilonewtonPerCubicMeter(): number {
        if(this.kilonewtonpercubicmeterLazy !== null){
            return this.kilonewtonpercubicmeterLazy;
        }
        return this.kilonewtonpercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.KilonewtonPerCubicMeter);
    }

    public get MeganewtonPerCubicMeter(): number {
        if(this.meganewtonpercubicmeterLazy !== null){
            return this.meganewtonpercubicmeterLazy;
        }
        return this.meganewtonpercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.MeganewtonPerCubicMeter);
    }

    public get KilopoundForcePerCubicInch(): number {
        if(this.kilopoundforcepercubicinchLazy !== null){
            return this.kilopoundforcepercubicinchLazy;
        }
        return this.kilopoundforcepercubicinchLazy = this.convertFromBase(SpecificWeightUnits.KilopoundForcePerCubicInch);
    }

    public get KilopoundForcePerCubicFoot(): number {
        if(this.kilopoundforcepercubicfootLazy !== null){
            return this.kilopoundforcepercubicfootLazy;
        }
        return this.kilopoundforcepercubicfootLazy = this.convertFromBase(SpecificWeightUnits.KilopoundForcePerCubicFoot);
    }

    public static FromNewtonsPerCubicMillimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.NewtonsPerCubicMillimeter);
    }

    public static FromNewtonsPerCubicCentimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.NewtonsPerCubicCentimeter);
    }

    public static FromNewtonsPerCubicMeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.NewtonsPerCubicMeter);
    }

    public static FromKilogramsForcePerCubicMillimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilogramsForcePerCubicMillimeter);
    }

    public static FromKilogramsForcePerCubicCentimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilogramsForcePerCubicCentimeter);
    }

    public static FromKilogramsForcePerCubicMeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilogramsForcePerCubicMeter);
    }

    public static FromPoundsForcePerCubicInch(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.PoundsForcePerCubicInch);
    }

    public static FromPoundsForcePerCubicFoot(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.PoundsForcePerCubicFoot);
    }

    public static FromTonnesForcePerCubicMillimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.TonnesForcePerCubicMillimeter);
    }

    public static FromTonnesForcePerCubicCentimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.TonnesForcePerCubicCentimeter);
    }

    public static FromTonnesForcePerCubicMeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.TonnesForcePerCubicMeter);
    }

    public static FromKilonewtonPerCubicMillimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilonewtonPerCubicMillimeter);
    }

    public static FromKilonewtonPerCubicCentimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilonewtonPerCubicCentimeter);
    }

    public static FromKilonewtonPerCubicMeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilonewtonPerCubicMeter);
    }

    public static FromMeganewtonPerCubicMeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.MeganewtonPerCubicMeter);
    }

    public static FromKilopoundForcePerCubicInch(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilopoundForcePerCubicInch);
    }

    public static FromKilopoundForcePerCubicFoot(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilopoundForcePerCubicFoot);
    }

    private convertFromBase(toUnit: SpecificWeightUnits): number {
        switch (toUnit) {
                
            case SpecificWeightUnits.NewtonsPerCubicMillimeter:
                return this.value*0.000000001;
            case SpecificWeightUnits.NewtonsPerCubicCentimeter:
                return this.value*0.000001;
            case SpecificWeightUnits.NewtonsPerCubicMeter:
                return this.value;
            case SpecificWeightUnits.KilogramsForcePerCubicMillimeter:
                return this.value/9.80665e9;
            case SpecificWeightUnits.KilogramsForcePerCubicCentimeter:
                return this.value/9.80665e6;
            case SpecificWeightUnits.KilogramsForcePerCubicMeter:
                return this.value/9.80665;
            case SpecificWeightUnits.PoundsForcePerCubicInch:
                return this.value/2.714471375263134e5;
            case SpecificWeightUnits.PoundsForcePerCubicFoot:
                return this.value/1.570874638462462e2;
            case SpecificWeightUnits.TonnesForcePerCubicMillimeter:
                return this.value/9.80665e12;
            case SpecificWeightUnits.TonnesForcePerCubicCentimeter:
                return this.value/9.80665e9;
            case SpecificWeightUnits.TonnesForcePerCubicMeter:
                return this.value/9.80665e3;
            case SpecificWeightUnits.KilonewtonPerCubicMillimeter:
                return (this.value*0.000000001) / 1000;
            case SpecificWeightUnits.KilonewtonPerCubicCentimeter:
                return (this.value*0.000001) / 1000;
            case SpecificWeightUnits.KilonewtonPerCubicMeter:
                return (this.value) / 1000;
            case SpecificWeightUnits.MeganewtonPerCubicMeter:
                return (this.value) / 1000000;
            case SpecificWeightUnits.KilopoundForcePerCubicInch:
                return (this.value/2.714471375263134e5) / 1000;
            case SpecificWeightUnits.KilopoundForcePerCubicFoot:
                return (this.value/1.570874638462462e2) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: SpecificWeightUnits): number {
        switch (fromUnit) {
                
            case SpecificWeightUnits.NewtonsPerCubicMillimeter:
                return value*1000000000;
            case SpecificWeightUnits.NewtonsPerCubicCentimeter:
                return value*1000000;
            case SpecificWeightUnits.NewtonsPerCubicMeter:
                return value;
            case SpecificWeightUnits.KilogramsForcePerCubicMillimeter:
                return value*9.80665e9;
            case SpecificWeightUnits.KilogramsForcePerCubicCentimeter:
                return value*9.80665e6;
            case SpecificWeightUnits.KilogramsForcePerCubicMeter:
                return value*9.80665;
            case SpecificWeightUnits.PoundsForcePerCubicInch:
                return value*2.714471375263134e5;
            case SpecificWeightUnits.PoundsForcePerCubicFoot:
                return value*1.570874638462462e2;
            case SpecificWeightUnits.TonnesForcePerCubicMillimeter:
                return value*9.80665e12;
            case SpecificWeightUnits.TonnesForcePerCubicCentimeter:
                return value*9.80665e9;
            case SpecificWeightUnits.TonnesForcePerCubicMeter:
                return value*9.80665e3;
            case SpecificWeightUnits.KilonewtonPerCubicMillimeter:
                return (value*1000000000) * 1000;
            case SpecificWeightUnits.KilonewtonPerCubicCentimeter:
                return (value*1000000) * 1000;
            case SpecificWeightUnits.KilonewtonPerCubicMeter:
                return (value) * 1000;
            case SpecificWeightUnits.MeganewtonPerCubicMeter:
                return (value) * 1000000;
            case SpecificWeightUnits.KilopoundForcePerCubicInch:
                return (value*2.714471375263134e5) * 1000;
            case SpecificWeightUnits.KilopoundForcePerCubicFoot:
                return (value*1.570874638462462e2) * 1000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: SpecificWeightUnits = SpecificWeightUnits.NewtonsPerCubicMeter): string {

        switch (toUnit) {
            
            case SpecificWeightUnits.NewtonsPerCubicMillimeter:
                return this.NewtonsPerCubicMillimeter + ` N/mm³`;
            case SpecificWeightUnits.NewtonsPerCubicCentimeter:
                return this.NewtonsPerCubicCentimeter + ` N/cm³`;
            case SpecificWeightUnits.NewtonsPerCubicMeter:
                return this.NewtonsPerCubicMeter + ` N/m³`;
            case SpecificWeightUnits.KilogramsForcePerCubicMillimeter:
                return this.KilogramsForcePerCubicMillimeter + ` kgf/mm³`;
            case SpecificWeightUnits.KilogramsForcePerCubicCentimeter:
                return this.KilogramsForcePerCubicCentimeter + ` kgf/cm³`;
            case SpecificWeightUnits.KilogramsForcePerCubicMeter:
                return this.KilogramsForcePerCubicMeter + ` kgf/m³`;
            case SpecificWeightUnits.PoundsForcePerCubicInch:
                return this.PoundsForcePerCubicInch + ` lbf/in³`;
            case SpecificWeightUnits.PoundsForcePerCubicFoot:
                return this.PoundsForcePerCubicFoot + ` lbf/ft³`;
            case SpecificWeightUnits.TonnesForcePerCubicMillimeter:
                return this.TonnesForcePerCubicMillimeter + ` tf/mm³`;
            case SpecificWeightUnits.TonnesForcePerCubicCentimeter:
                return this.TonnesForcePerCubicCentimeter + ` tf/cm³`;
            case SpecificWeightUnits.TonnesForcePerCubicMeter:
                return this.TonnesForcePerCubicMeter + ` tf/m³`;
            case SpecificWeightUnits.KilonewtonPerCubicMillimeter:
                return this.KilonewtonPerCubicMillimeter + ` N/mm³`;
            case SpecificWeightUnits.KilonewtonPerCubicCentimeter:
                return this.KilonewtonPerCubicCentimeter + ` N/cm³`;
            case SpecificWeightUnits.KilonewtonPerCubicMeter:
                return this.KilonewtonPerCubicMeter + ` N/m³`;
            case SpecificWeightUnits.MeganewtonPerCubicMeter:
                return this.MeganewtonPerCubicMeter + ` N/m³`;
            case SpecificWeightUnits.KilopoundForcePerCubicInch:
                return this.KilopoundForcePerCubicInch + ` lbf/in³`;
            case SpecificWeightUnits.KilopoundForcePerCubicFoot:
                return this.KilopoundForcePerCubicFoot + ` lbf/ft³`;
        default:
            break;
        }
        return this.value.toString();
    }
}
