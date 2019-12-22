export enum ForceUnits {
    Dyne,
    KilogramsForce,
    TonnesForce,
    Newtons,
    KiloPonds,
    Poundals,
    PoundsForce,
    OunceForce,
    Micronewtons,
    Kilonewtons,
    Meganewtons
}

export class Force {
    private value: number;

    public constructor(value: number, fromUnit: ForceUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Dyne(): number {
        return this.convertFromBase(ForceUnits.Dyne);
    }

    public get KilogramsForce(): number {
        return this.convertFromBase(ForceUnits.KilogramsForce);
    }

    public get TonnesForce(): number {
        return this.convertFromBase(ForceUnits.TonnesForce);
    }

    public get Newtons(): number {
        return this.convertFromBase(ForceUnits.Newtons);
    }

    public get KiloPonds(): number {
        return this.convertFromBase(ForceUnits.KiloPonds);
    }

    public get Poundals(): number {
        return this.convertFromBase(ForceUnits.Poundals);
    }

    public get PoundsForce(): number {
        return this.convertFromBase(ForceUnits.PoundsForce);
    }

    public get OunceForce(): number {
        return this.convertFromBase(ForceUnits.OunceForce);
    }

    public get Micronewtons(): number {
        return this.convertFromBase(ForceUnits.Micronewtons);
    }

    public get Kilonewtons(): number {
        return this.convertFromBase(ForceUnits.Kilonewtons);
    }

    public get Meganewtons(): number {
        return this.convertFromBase(ForceUnits.Meganewtons);
    }

    public static FromDyne(value: number): Force {
        return new Force(value, ForceUnits.Dyne);
    }

    public static FromKilogramsForce(value: number): Force {
        return new Force(value, ForceUnits.KilogramsForce);
    }

    public static FromTonnesForce(value: number): Force {
        return new Force(value, ForceUnits.TonnesForce);
    }

    public static FromNewtons(value: number): Force {
        return new Force(value, ForceUnits.Newtons);
    }

    public static FromKiloPonds(value: number): Force {
        return new Force(value, ForceUnits.KiloPonds);
    }

    public static FromPoundals(value: number): Force {
        return new Force(value, ForceUnits.Poundals);
    }

    public static FromPoundsForce(value: number): Force {
        return new Force(value, ForceUnits.PoundsForce);
    }

    public static FromOunceForce(value: number): Force {
        return new Force(value, ForceUnits.OunceForce);
    }

    public static FromMicronewtons(value: number): Force {
        return new Force(value, ForceUnits.Micronewtons);
    }

    public static FromKilonewtons(value: number): Force {
        return new Force(value, ForceUnits.Kilonewtons);
    }

    public static FromMeganewtons(value: number): Force {
        return new Force(value, ForceUnits.Meganewtons);
    }

    private convertFromBase(toUnit: ForceUnits): number {

            switch (toUnit) {
                
                case ForceUnits.Dyne:
                    return this.value/1e5;
                
                case ForceUnits.KilogramsForce:
                    return this.value*9.80665002864;
                
                case ForceUnits.TonnesForce:
                    return this.value*9.80665002864e3;
                
                case ForceUnits.Newtons:
                    return this.value;
                
                case ForceUnits.KiloPonds:
                    return this.value*9.80665002864;
                
                case ForceUnits.Poundals:
                    return this.value*0.13825502798973041652092282466083;
                
                case ForceUnits.PoundsForce:
                    return this.value*4.4482216152605095551842641431421;
                
                case ForceUnits.OunceForce:
                    return this.value*2.780138509537812e-1;
                
                case ForceUnits.Micronewtons:
                    return (this.value) * 0.000001;
                
                case ForceUnits.Kilonewtons:
                    return (this.value) * 1000;
                
                case ForceUnits.Meganewtons:
                    return (this.value) * 1000000;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: ForceUnits): number {

                switch (fromUnit) {
                    
                case ForceUnits.Dyne:
                    return this.value*1e5;
                
                case ForceUnits.KilogramsForce:
                    return this.value/9.80665002864;
                
                case ForceUnits.TonnesForce:
                    return this.value/9.80665002864e3;
                
                case ForceUnits.Newtons:
                    return this.value;
                
                case ForceUnits.KiloPonds:
                    return this.value/9.80665002864;
                
                case ForceUnits.Poundals:
                    return this.value/0.13825502798973041652092282466083;
                
                case ForceUnits.PoundsForce:
                    return this.value/4.4482216152605095551842641431421;
                
                case ForceUnits.OunceForce:
                    return this.value/2.780138509537812e-1;
                
                case ForceUnits.Micronewtons:
                    return (this.value) / 0.000001;
                
                case ForceUnits.Kilonewtons:
                    return (this.value) / 1000;
                
                case ForceUnits.Meganewtons:
                    return (this.value) / 1000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
