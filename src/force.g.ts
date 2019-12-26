export enum ForceUnits {
    Dyne,
    KilogramsForce,
    TonnesForce,
    Newtons,
    KiloPonds,
    Poundals,
    PoundsForce,
    OunceForce,
    Micronewton,
    Decanewton,
    Kilonewton,
    Meganewton
}

export class Force {
    private value: number;
    private dyneLazy: number | null = null;
    private kilogramsforceLazy: number | null = null;
    private tonnesforceLazy: number | null = null;
    private newtonsLazy: number | null = null;
    private kilopondsLazy: number | null = null;
    private poundalsLazy: number | null = null;
    private poundsforceLazy: number | null = null;
    private ounceforceLazy: number | null = null;
    private micronewtonLazy: number | null = null;
    private decanewtonLazy: number | null = null;
    private kilonewtonLazy: number | null = null;
    private meganewtonLazy: number | null = null;

    public constructor(value: number, fromUnit: ForceUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Dyne(): number {
        if(this.dyneLazy !== null){
            return this.dyneLazy;
        }
        return this.dyneLazy = this.convertFromBase(ForceUnits.Dyne);
    }

    public get KilogramsForce(): number {
        if(this.kilogramsforceLazy !== null){
            return this.kilogramsforceLazy;
        }
        return this.kilogramsforceLazy = this.convertFromBase(ForceUnits.KilogramsForce);
    }

    public get TonnesForce(): number {
        if(this.tonnesforceLazy !== null){
            return this.tonnesforceLazy;
        }
        return this.tonnesforceLazy = this.convertFromBase(ForceUnits.TonnesForce);
    }

    public get Newtons(): number {
        if(this.newtonsLazy !== null){
            return this.newtonsLazy;
        }
        return this.newtonsLazy = this.convertFromBase(ForceUnits.Newtons);
    }

    public get KiloPonds(): number {
        if(this.kilopondsLazy !== null){
            return this.kilopondsLazy;
        }
        return this.kilopondsLazy = this.convertFromBase(ForceUnits.KiloPonds);
    }

    public get Poundals(): number {
        if(this.poundalsLazy !== null){
            return this.poundalsLazy;
        }
        return this.poundalsLazy = this.convertFromBase(ForceUnits.Poundals);
    }

    public get PoundsForce(): number {
        if(this.poundsforceLazy !== null){
            return this.poundsforceLazy;
        }
        return this.poundsforceLazy = this.convertFromBase(ForceUnits.PoundsForce);
    }

    public get OunceForce(): number {
        if(this.ounceforceLazy !== null){
            return this.ounceforceLazy;
        }
        return this.ounceforceLazy = this.convertFromBase(ForceUnits.OunceForce);
    }

    public get Micronewton(): number {
        if(this.micronewtonLazy !== null){
            return this.micronewtonLazy;
        }
        return this.micronewtonLazy = this.convertFromBase(ForceUnits.Micronewton);
    }

    public get Decanewton(): number {
        if(this.decanewtonLazy !== null){
            return this.decanewtonLazy;
        }
        return this.decanewtonLazy = this.convertFromBase(ForceUnits.Decanewton);
    }

    public get Kilonewton(): number {
        if(this.kilonewtonLazy !== null){
            return this.kilonewtonLazy;
        }
        return this.kilonewtonLazy = this.convertFromBase(ForceUnits.Kilonewton);
    }

    public get Meganewton(): number {
        if(this.meganewtonLazy !== null){
            return this.meganewtonLazy;
        }
        return this.meganewtonLazy = this.convertFromBase(ForceUnits.Meganewton);
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

    public static FromMicronewton(value: number): Force {
        return new Force(value, ForceUnits.Micronewton);
    }

    public static FromDecanewton(value: number): Force {
        return new Force(value, ForceUnits.Decanewton);
    }

    public static FromKilonewton(value: number): Force {
        return new Force(value, ForceUnits.Kilonewton);
    }

    public static FromMeganewton(value: number): Force {
        return new Force(value, ForceUnits.Meganewton);
    }

    private convertFromBase(toUnit: ForceUnits): number {
        switch (toUnit) {
                
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
            case ForceUnits.Micronewton:
                return (this.value) / 0.000001;
            case ForceUnits.Decanewton:
                return (this.value) / 10;
            case ForceUnits.Kilonewton:
                return (this.value) / 1000;
            case ForceUnits.Meganewton:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ForceUnits): number {
        switch (fromUnit) {
                
            case ForceUnits.Dyne:
                return value/1e5;
            case ForceUnits.KilogramsForce:
                return value*9.80665002864;
            case ForceUnits.TonnesForce:
                return value*9.80665002864e3;
            case ForceUnits.Newtons:
                return value;
            case ForceUnits.KiloPonds:
                return value*9.80665002864;
            case ForceUnits.Poundals:
                return value*0.13825502798973041652092282466083;
            case ForceUnits.PoundsForce:
                return value*4.4482216152605095551842641431421;
            case ForceUnits.OunceForce:
                return value*2.780138509537812e-1;
            case ForceUnits.Micronewton:
                return (value) * 0.000001;
            case ForceUnits.Decanewton:
                return (value) * 10;
            case ForceUnits.Kilonewton:
                return (value) * 1000;
            case ForceUnits.Meganewton:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: ForceUnits = ForceUnits.Newtons): string {

        switch (toUnit) {
            
            case ForceUnits.Dyne:
                return this.Dyne + ` dyn`;
            case ForceUnits.KilogramsForce:
                return this.KilogramsForce + ` kgf`;
            case ForceUnits.TonnesForce:
                return this.TonnesForce + ` Ton`;
            case ForceUnits.Newtons:
                return this.Newtons + ` N`;
            case ForceUnits.KiloPonds:
                return this.KiloPonds + ` kp`;
            case ForceUnits.Poundals:
                return this.Poundals + ` pdl`;
            case ForceUnits.PoundsForce:
                return this.PoundsForce + ` lbf`;
            case ForceUnits.OunceForce:
                return this.OunceForce + ` ozf`;
            case ForceUnits.Micronewton:
                return this.Micronewton + ` N`;
            case ForceUnits.Decanewton:
                return this.Decanewton + ` N`;
            case ForceUnits.Kilonewton:
                return this.Kilonewton + ` N`;
            case ForceUnits.Meganewton:
                return this.Meganewton + ` N`;
        default:
            break;
        }
        return this.value.toString();
    }
}
