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
    KilonewtonsPerCubicMillimeter,
    KilonewtonsPerCubicCentimeter,
    KilonewtonsPerCubicMeter,
    MeganewtonsPerCubicMeter,
    KilopoundsForcePerCubicInch,
    KilopoundsForcePerCubicFoot
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
    private kilonewtonspercubicmillimeterLazy: number | null = null;
    private kilonewtonspercubiccentimeterLazy: number | null = null;
    private kilonewtonspercubicmeterLazy: number | null = null;
    private meganewtonspercubicmeterLazy: number | null = null;
    private kilopoundsforcepercubicinchLazy: number | null = null;
    private kilopoundsforcepercubicfootLazy: number | null = null;

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

    public get KilonewtonsPerCubicMillimeter(): number {
        if(this.kilonewtonspercubicmillimeterLazy !== null){
            return this.kilonewtonspercubicmillimeterLazy;
        }
        return this.kilonewtonspercubicmillimeterLazy = this.convertFromBase(SpecificWeightUnits.KilonewtonsPerCubicMillimeter);
    }

    public get KilonewtonsPerCubicCentimeter(): number {
        if(this.kilonewtonspercubiccentimeterLazy !== null){
            return this.kilonewtonspercubiccentimeterLazy;
        }
        return this.kilonewtonspercubiccentimeterLazy = this.convertFromBase(SpecificWeightUnits.KilonewtonsPerCubicCentimeter);
    }

    public get KilonewtonsPerCubicMeter(): number {
        if(this.kilonewtonspercubicmeterLazy !== null){
            return this.kilonewtonspercubicmeterLazy;
        }
        return this.kilonewtonspercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.KilonewtonsPerCubicMeter);
    }

    public get MeganewtonsPerCubicMeter(): number {
        if(this.meganewtonspercubicmeterLazy !== null){
            return this.meganewtonspercubicmeterLazy;
        }
        return this.meganewtonspercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.MeganewtonsPerCubicMeter);
    }

    public get KilopoundsForcePerCubicInch(): number {
        if(this.kilopoundsforcepercubicinchLazy !== null){
            return this.kilopoundsforcepercubicinchLazy;
        }
        return this.kilopoundsforcepercubicinchLazy = this.convertFromBase(SpecificWeightUnits.KilopoundsForcePerCubicInch);
    }

    public get KilopoundsForcePerCubicFoot(): number {
        if(this.kilopoundsforcepercubicfootLazy !== null){
            return this.kilopoundsforcepercubicfootLazy;
        }
        return this.kilopoundsforcepercubicfootLazy = this.convertFromBase(SpecificWeightUnits.KilopoundsForcePerCubicFoot);
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

    public static FromKilonewtonsPerCubicMillimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilonewtonsPerCubicMillimeter);
    }

    public static FromKilonewtonsPerCubicCentimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilonewtonsPerCubicCentimeter);
    }

    public static FromKilonewtonsPerCubicMeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilonewtonsPerCubicMeter);
    }

    public static FromMeganewtonsPerCubicMeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.MeganewtonsPerCubicMeter);
    }

    public static FromKilopoundsForcePerCubicInch(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilopoundsForcePerCubicInch);
    }

    public static FromKilopoundsForcePerCubicFoot(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilopoundsForcePerCubicFoot);
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
            case SpecificWeightUnits.KilonewtonsPerCubicMillimeter:
                return (this.value*0.000000001) / 1000;
            case SpecificWeightUnits.KilonewtonsPerCubicCentimeter:
                return (this.value*0.000001) / 1000;
            case SpecificWeightUnits.KilonewtonsPerCubicMeter:
                return (this.value) / 1000;
            case SpecificWeightUnits.MeganewtonsPerCubicMeter:
                return (this.value) / 1000000;
            case SpecificWeightUnits.KilopoundsForcePerCubicInch:
                return (this.value/2.714471375263134e5) / 1000;
            case SpecificWeightUnits.KilopoundsForcePerCubicFoot:
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
            case SpecificWeightUnits.KilonewtonsPerCubicMillimeter:
                return (value*1000000000) * 1000;
            case SpecificWeightUnits.KilonewtonsPerCubicCentimeter:
                return (value*1000000) * 1000;
            case SpecificWeightUnits.KilonewtonsPerCubicMeter:
                return (value) * 1000;
            case SpecificWeightUnits.MeganewtonsPerCubicMeter:
                return (value) * 1000000;
            case SpecificWeightUnits.KilopoundsForcePerCubicInch:
                return (value*2.714471375263134e5) * 1000;
            case SpecificWeightUnits.KilopoundsForcePerCubicFoot:
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
            case SpecificWeightUnits.KilonewtonsPerCubicMillimeter:
                return this.KilonewtonsPerCubicMillimeter + ` N/mm³`;
            case SpecificWeightUnits.KilonewtonsPerCubicCentimeter:
                return this.KilonewtonsPerCubicCentimeter + ` N/cm³`;
            case SpecificWeightUnits.KilonewtonsPerCubicMeter:
                return this.KilonewtonsPerCubicMeter + ` N/m³`;
            case SpecificWeightUnits.MeganewtonsPerCubicMeter:
                return this.MeganewtonsPerCubicMeter + ` N/m³`;
            case SpecificWeightUnits.KilopoundsForcePerCubicInch:
                return this.KilopoundsForcePerCubicInch + ` lbf/in³`;
            case SpecificWeightUnits.KilopoundsForcePerCubicFoot:
                return this.KilopoundsForcePerCubicFoot + ` lbf/ft³`;
        default:
            break;
        }
        return this.value.toString();
    }
}
