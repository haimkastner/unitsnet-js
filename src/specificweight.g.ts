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
    Kilonewtonspercubicmillimeter,
    Kilonewtonspercubiccentimeter,
    Kilonewtonspercubicmeter,
    Meganewtonspercubicmeter,
    Kilopoundsforcepercubicinch,
    Kilopoundsforcepercubicfoot
}

export class SpecificWeight {
    private value: number;

    public constructor(value: number, fromUnit: SpecificWeightUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get NewtonsPerCubicMillimeter(): number {
        return this.convertFromBase(SpecificWeightUnits.NewtonsPerCubicMillimeter);
    }

    public get NewtonsPerCubicCentimeter(): number {
        return this.convertFromBase(SpecificWeightUnits.NewtonsPerCubicCentimeter);
    }

    public get NewtonsPerCubicMeter(): number {
        return this.convertFromBase(SpecificWeightUnits.NewtonsPerCubicMeter);
    }

    public get KilogramsForcePerCubicMillimeter(): number {
        return this.convertFromBase(SpecificWeightUnits.KilogramsForcePerCubicMillimeter);
    }

    public get KilogramsForcePerCubicCentimeter(): number {
        return this.convertFromBase(SpecificWeightUnits.KilogramsForcePerCubicCentimeter);
    }

    public get KilogramsForcePerCubicMeter(): number {
        return this.convertFromBase(SpecificWeightUnits.KilogramsForcePerCubicMeter);
    }

    public get PoundsForcePerCubicInch(): number {
        return this.convertFromBase(SpecificWeightUnits.PoundsForcePerCubicInch);
    }

    public get PoundsForcePerCubicFoot(): number {
        return this.convertFromBase(SpecificWeightUnits.PoundsForcePerCubicFoot);
    }

    public get TonnesForcePerCubicMillimeter(): number {
        return this.convertFromBase(SpecificWeightUnits.TonnesForcePerCubicMillimeter);
    }

    public get TonnesForcePerCubicCentimeter(): number {
        return this.convertFromBase(SpecificWeightUnits.TonnesForcePerCubicCentimeter);
    }

    public get TonnesForcePerCubicMeter(): number {
        return this.convertFromBase(SpecificWeightUnits.TonnesForcePerCubicMeter);
    }

    public get Kilonewtonspercubicmillimeter(): number {
        return this.convertFromBase(SpecificWeightUnits.Kilonewtonspercubicmillimeter);
    }

    public get Kilonewtonspercubiccentimeter(): number {
        return this.convertFromBase(SpecificWeightUnits.Kilonewtonspercubiccentimeter);
    }

    public get Kilonewtonspercubicmeter(): number {
        return this.convertFromBase(SpecificWeightUnits.Kilonewtonspercubicmeter);
    }

    public get Meganewtonspercubicmeter(): number {
        return this.convertFromBase(SpecificWeightUnits.Meganewtonspercubicmeter);
    }

    public get Kilopoundsforcepercubicinch(): number {
        return this.convertFromBase(SpecificWeightUnits.Kilopoundsforcepercubicinch);
    }

    public get Kilopoundsforcepercubicfoot(): number {
        return this.convertFromBase(SpecificWeightUnits.Kilopoundsforcepercubicfoot);
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

    public static FromKilonewtonspercubicmillimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.Kilonewtonspercubicmillimeter);
    }

    public static FromKilonewtonspercubiccentimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.Kilonewtonspercubiccentimeter);
    }

    public static FromKilonewtonspercubicmeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.Kilonewtonspercubicmeter);
    }

    public static FromMeganewtonspercubicmeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.Meganewtonspercubicmeter);
    }

    public static FromKilopoundsforcepercubicinch(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.Kilopoundsforcepercubicinch);
    }

    public static FromKilopoundsforcepercubicfoot(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.Kilopoundsforcepercubicfoot);
    }

    private convertFromBase(toUnit: SpecificWeightUnits): number {

            switch (toUnit) {
                
                case SpecificWeightUnits.NewtonsPerCubicMillimeter:
                    return this.value*1000000000;
                
                case SpecificWeightUnits.NewtonsPerCubicCentimeter:
                    return this.value*1000000;
                
                case SpecificWeightUnits.NewtonsPerCubicMeter:
                    return this.value;
                
                case SpecificWeightUnits.KilogramsForcePerCubicMillimeter:
                    return this.value*9.80665e9;
                
                case SpecificWeightUnits.KilogramsForcePerCubicCentimeter:
                    return this.value*9.80665e6;
                
                case SpecificWeightUnits.KilogramsForcePerCubicMeter:
                    return this.value*9.80665;
                
                case SpecificWeightUnits.PoundsForcePerCubicInch:
                    return this.value*2.714471375263134e5;
                
                case SpecificWeightUnits.PoundsForcePerCubicFoot:
                    return this.value*1.570874638462462e2;
                
                case SpecificWeightUnits.TonnesForcePerCubicMillimeter:
                    return this.value*9.80665e12;
                
                case SpecificWeightUnits.TonnesForcePerCubicCentimeter:
                    return this.value*9.80665e9;
                
                case SpecificWeightUnits.TonnesForcePerCubicMeter:
                    return this.value*9.80665e3;
                
                case SpecificWeightUnits.Kilonewtonspercubicmillimeter:
                    return (this.value*0.000000001) * 1000;
                
                case SpecificWeightUnits.Kilonewtonspercubiccentimeter:
                    return (this.value*0.000001) * 1000;
                
                case SpecificWeightUnits.Kilonewtonspercubicmeter:
                    return (this.value) * 1000;
                
                case SpecificWeightUnits.Meganewtonspercubicmeter:
                    return (this.value) * 1000000;
                
                case SpecificWeightUnits.Kilopoundsforcepercubicinch:
                    return (this.value/2.714471375263134e5) * 1000;
                
                case SpecificWeightUnits.Kilopoundsforcepercubicfoot:
                    return (this.value/1.570874638462462e2) * 1000;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: SpecificWeightUnits): number {

                switch (fromUnit) {
                    
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
                
                case SpecificWeightUnits.Kilonewtonspercubicmillimeter:
                    return (this.value*1000000000) / 1000;
                
                case SpecificWeightUnits.Kilonewtonspercubiccentimeter:
                    return (this.value*1000000) / 1000;
                
                case SpecificWeightUnits.Kilonewtonspercubicmeter:
                    return (this.value) / 1000;
                
                case SpecificWeightUnits.Meganewtonspercubicmeter:
                    return (this.value) / 1000000;
                
                case SpecificWeightUnits.Kilopoundsforcepercubicinch:
                    return (this.value*2.714471375263134e5) / 1000;
                
                case SpecificWeightUnits.Kilopoundsforcepercubicfoot:
                    return (this.value*1.570874638462462e2) / 1000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
