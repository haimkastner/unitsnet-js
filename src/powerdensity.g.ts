export enum PowerDensityUnits {
    WattsPerCubicMeter,
    WattsPerCubicInch,
    WattsPerCubicFoot,
    WattsPerLiter,
    PicowattPerCubicMeter,
    NanowattPerCubicMeter,
    MicrowattPerCubicMeter,
    DeciwattPerCubicMeter,
    DecawattPerCubicMeter,
    KilowattPerCubicMeter,
    MegawattPerCubicMeter,
    GigawattPerCubicMeter,
    TerawattPerCubicMeter,
    PicowattPerCubicInch,
    NanowattPerCubicInch,
    MicrowattPerCubicInch,
    DeciwattPerCubicInch,
    DecawattPerCubicInch,
    KilowattPerCubicInch,
    MegawattPerCubicInch,
    GigawattPerCubicInch,
    TerawattPerCubicInch,
    PicowattPerCubicFoot,
    NanowattPerCubicFoot,
    MicrowattPerCubicFoot,
    DeciwattPerCubicFoot,
    DecawattPerCubicFoot,
    KilowattPerCubicFoot,
    MegawattPerCubicFoot,
    GigawattPerCubicFoot,
    TerawattPerCubicFoot,
    PicowattPerLiter,
    NanowattPerLiter,
    MicrowattPerLiter,
    DeciwattPerLiter,
    DecawattPerLiter,
    KilowattPerLiter,
    MegawattPerLiter,
    GigawattPerLiter,
    TerawattPerLiter
}

export class PowerDensity {
    private value: number;
    private wattspercubicmeterLazy: number | null = null;
    private wattspercubicinchLazy: number | null = null;
    private wattspercubicfootLazy: number | null = null;
    private wattsperliterLazy: number | null = null;
    private picowattpercubicmeterLazy: number | null = null;
    private nanowattpercubicmeterLazy: number | null = null;
    private microwattpercubicmeterLazy: number | null = null;
    private deciwattpercubicmeterLazy: number | null = null;
    private decawattpercubicmeterLazy: number | null = null;
    private kilowattpercubicmeterLazy: number | null = null;
    private megawattpercubicmeterLazy: number | null = null;
    private gigawattpercubicmeterLazy: number | null = null;
    private terawattpercubicmeterLazy: number | null = null;
    private picowattpercubicinchLazy: number | null = null;
    private nanowattpercubicinchLazy: number | null = null;
    private microwattpercubicinchLazy: number | null = null;
    private deciwattpercubicinchLazy: number | null = null;
    private decawattpercubicinchLazy: number | null = null;
    private kilowattpercubicinchLazy: number | null = null;
    private megawattpercubicinchLazy: number | null = null;
    private gigawattpercubicinchLazy: number | null = null;
    private terawattpercubicinchLazy: number | null = null;
    private picowattpercubicfootLazy: number | null = null;
    private nanowattpercubicfootLazy: number | null = null;
    private microwattpercubicfootLazy: number | null = null;
    private deciwattpercubicfootLazy: number | null = null;
    private decawattpercubicfootLazy: number | null = null;
    private kilowattpercubicfootLazy: number | null = null;
    private megawattpercubicfootLazy: number | null = null;
    private gigawattpercubicfootLazy: number | null = null;
    private terawattpercubicfootLazy: number | null = null;
    private picowattperliterLazy: number | null = null;
    private nanowattperliterLazy: number | null = null;
    private microwattperliterLazy: number | null = null;
    private deciwattperliterLazy: number | null = null;
    private decawattperliterLazy: number | null = null;
    private kilowattperliterLazy: number | null = null;
    private megawattperliterLazy: number | null = null;
    private gigawattperliterLazy: number | null = null;
    private terawattperliterLazy: number | null = null;

    public constructor(value: number, fromUnit: PowerDensityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get WattsPerCubicMeter(): number {
        if(this.wattspercubicmeterLazy !== null){
            return this.wattspercubicmeterLazy;
        }
        return this.wattspercubicmeterLazy = this.convertFromBase(PowerDensityUnits.WattsPerCubicMeter);
    }

    public get WattsPerCubicInch(): number {
        if(this.wattspercubicinchLazy !== null){
            return this.wattspercubicinchLazy;
        }
        return this.wattspercubicinchLazy = this.convertFromBase(PowerDensityUnits.WattsPerCubicInch);
    }

    public get WattsPerCubicFoot(): number {
        if(this.wattspercubicfootLazy !== null){
            return this.wattspercubicfootLazy;
        }
        return this.wattspercubicfootLazy = this.convertFromBase(PowerDensityUnits.WattsPerCubicFoot);
    }

    public get WattsPerLiter(): number {
        if(this.wattsperliterLazy !== null){
            return this.wattsperliterLazy;
        }
        return this.wattsperliterLazy = this.convertFromBase(PowerDensityUnits.WattsPerLiter);
    }

    public get PicowattPerCubicMeter(): number {
        if(this.picowattpercubicmeterLazy !== null){
            return this.picowattpercubicmeterLazy;
        }
        return this.picowattpercubicmeterLazy = this.convertFromBase(PowerDensityUnits.PicowattPerCubicMeter);
    }

    public get NanowattPerCubicMeter(): number {
        if(this.nanowattpercubicmeterLazy !== null){
            return this.nanowattpercubicmeterLazy;
        }
        return this.nanowattpercubicmeterLazy = this.convertFromBase(PowerDensityUnits.NanowattPerCubicMeter);
    }

    public get MicrowattPerCubicMeter(): number {
        if(this.microwattpercubicmeterLazy !== null){
            return this.microwattpercubicmeterLazy;
        }
        return this.microwattpercubicmeterLazy = this.convertFromBase(PowerDensityUnits.MicrowattPerCubicMeter);
    }

    public get DeciwattPerCubicMeter(): number {
        if(this.deciwattpercubicmeterLazy !== null){
            return this.deciwattpercubicmeterLazy;
        }
        return this.deciwattpercubicmeterLazy = this.convertFromBase(PowerDensityUnits.DeciwattPerCubicMeter);
    }

    public get DecawattPerCubicMeter(): number {
        if(this.decawattpercubicmeterLazy !== null){
            return this.decawattpercubicmeterLazy;
        }
        return this.decawattpercubicmeterLazy = this.convertFromBase(PowerDensityUnits.DecawattPerCubicMeter);
    }

    public get KilowattPerCubicMeter(): number {
        if(this.kilowattpercubicmeterLazy !== null){
            return this.kilowattpercubicmeterLazy;
        }
        return this.kilowattpercubicmeterLazy = this.convertFromBase(PowerDensityUnits.KilowattPerCubicMeter);
    }

    public get MegawattPerCubicMeter(): number {
        if(this.megawattpercubicmeterLazy !== null){
            return this.megawattpercubicmeterLazy;
        }
        return this.megawattpercubicmeterLazy = this.convertFromBase(PowerDensityUnits.MegawattPerCubicMeter);
    }

    public get GigawattPerCubicMeter(): number {
        if(this.gigawattpercubicmeterLazy !== null){
            return this.gigawattpercubicmeterLazy;
        }
        return this.gigawattpercubicmeterLazy = this.convertFromBase(PowerDensityUnits.GigawattPerCubicMeter);
    }

    public get TerawattPerCubicMeter(): number {
        if(this.terawattpercubicmeterLazy !== null){
            return this.terawattpercubicmeterLazy;
        }
        return this.terawattpercubicmeterLazy = this.convertFromBase(PowerDensityUnits.TerawattPerCubicMeter);
    }

    public get PicowattPerCubicInch(): number {
        if(this.picowattpercubicinchLazy !== null){
            return this.picowattpercubicinchLazy;
        }
        return this.picowattpercubicinchLazy = this.convertFromBase(PowerDensityUnits.PicowattPerCubicInch);
    }

    public get NanowattPerCubicInch(): number {
        if(this.nanowattpercubicinchLazy !== null){
            return this.nanowattpercubicinchLazy;
        }
        return this.nanowattpercubicinchLazy = this.convertFromBase(PowerDensityUnits.NanowattPerCubicInch);
    }

    public get MicrowattPerCubicInch(): number {
        if(this.microwattpercubicinchLazy !== null){
            return this.microwattpercubicinchLazy;
        }
        return this.microwattpercubicinchLazy = this.convertFromBase(PowerDensityUnits.MicrowattPerCubicInch);
    }

    public get DeciwattPerCubicInch(): number {
        if(this.deciwattpercubicinchLazy !== null){
            return this.deciwattpercubicinchLazy;
        }
        return this.deciwattpercubicinchLazy = this.convertFromBase(PowerDensityUnits.DeciwattPerCubicInch);
    }

    public get DecawattPerCubicInch(): number {
        if(this.decawattpercubicinchLazy !== null){
            return this.decawattpercubicinchLazy;
        }
        return this.decawattpercubicinchLazy = this.convertFromBase(PowerDensityUnits.DecawattPerCubicInch);
    }

    public get KilowattPerCubicInch(): number {
        if(this.kilowattpercubicinchLazy !== null){
            return this.kilowattpercubicinchLazy;
        }
        return this.kilowattpercubicinchLazy = this.convertFromBase(PowerDensityUnits.KilowattPerCubicInch);
    }

    public get MegawattPerCubicInch(): number {
        if(this.megawattpercubicinchLazy !== null){
            return this.megawattpercubicinchLazy;
        }
        return this.megawattpercubicinchLazy = this.convertFromBase(PowerDensityUnits.MegawattPerCubicInch);
    }

    public get GigawattPerCubicInch(): number {
        if(this.gigawattpercubicinchLazy !== null){
            return this.gigawattpercubicinchLazy;
        }
        return this.gigawattpercubicinchLazy = this.convertFromBase(PowerDensityUnits.GigawattPerCubicInch);
    }

    public get TerawattPerCubicInch(): number {
        if(this.terawattpercubicinchLazy !== null){
            return this.terawattpercubicinchLazy;
        }
        return this.terawattpercubicinchLazy = this.convertFromBase(PowerDensityUnits.TerawattPerCubicInch);
    }

    public get PicowattPerCubicFoot(): number {
        if(this.picowattpercubicfootLazy !== null){
            return this.picowattpercubicfootLazy;
        }
        return this.picowattpercubicfootLazy = this.convertFromBase(PowerDensityUnits.PicowattPerCubicFoot);
    }

    public get NanowattPerCubicFoot(): number {
        if(this.nanowattpercubicfootLazy !== null){
            return this.nanowattpercubicfootLazy;
        }
        return this.nanowattpercubicfootLazy = this.convertFromBase(PowerDensityUnits.NanowattPerCubicFoot);
    }

    public get MicrowattPerCubicFoot(): number {
        if(this.microwattpercubicfootLazy !== null){
            return this.microwattpercubicfootLazy;
        }
        return this.microwattpercubicfootLazy = this.convertFromBase(PowerDensityUnits.MicrowattPerCubicFoot);
    }

    public get DeciwattPerCubicFoot(): number {
        if(this.deciwattpercubicfootLazy !== null){
            return this.deciwattpercubicfootLazy;
        }
        return this.deciwattpercubicfootLazy = this.convertFromBase(PowerDensityUnits.DeciwattPerCubicFoot);
    }

    public get DecawattPerCubicFoot(): number {
        if(this.decawattpercubicfootLazy !== null){
            return this.decawattpercubicfootLazy;
        }
        return this.decawattpercubicfootLazy = this.convertFromBase(PowerDensityUnits.DecawattPerCubicFoot);
    }

    public get KilowattPerCubicFoot(): number {
        if(this.kilowattpercubicfootLazy !== null){
            return this.kilowattpercubicfootLazy;
        }
        return this.kilowattpercubicfootLazy = this.convertFromBase(PowerDensityUnits.KilowattPerCubicFoot);
    }

    public get MegawattPerCubicFoot(): number {
        if(this.megawattpercubicfootLazy !== null){
            return this.megawattpercubicfootLazy;
        }
        return this.megawattpercubicfootLazy = this.convertFromBase(PowerDensityUnits.MegawattPerCubicFoot);
    }

    public get GigawattPerCubicFoot(): number {
        if(this.gigawattpercubicfootLazy !== null){
            return this.gigawattpercubicfootLazy;
        }
        return this.gigawattpercubicfootLazy = this.convertFromBase(PowerDensityUnits.GigawattPerCubicFoot);
    }

    public get TerawattPerCubicFoot(): number {
        if(this.terawattpercubicfootLazy !== null){
            return this.terawattpercubicfootLazy;
        }
        return this.terawattpercubicfootLazy = this.convertFromBase(PowerDensityUnits.TerawattPerCubicFoot);
    }

    public get PicowattPerLiter(): number {
        if(this.picowattperliterLazy !== null){
            return this.picowattperliterLazy;
        }
        return this.picowattperliterLazy = this.convertFromBase(PowerDensityUnits.PicowattPerLiter);
    }

    public get NanowattPerLiter(): number {
        if(this.nanowattperliterLazy !== null){
            return this.nanowattperliterLazy;
        }
        return this.nanowattperliterLazy = this.convertFromBase(PowerDensityUnits.NanowattPerLiter);
    }

    public get MicrowattPerLiter(): number {
        if(this.microwattperliterLazy !== null){
            return this.microwattperliterLazy;
        }
        return this.microwattperliterLazy = this.convertFromBase(PowerDensityUnits.MicrowattPerLiter);
    }

    public get DeciwattPerLiter(): number {
        if(this.deciwattperliterLazy !== null){
            return this.deciwattperliterLazy;
        }
        return this.deciwattperliterLazy = this.convertFromBase(PowerDensityUnits.DeciwattPerLiter);
    }

    public get DecawattPerLiter(): number {
        if(this.decawattperliterLazy !== null){
            return this.decawattperliterLazy;
        }
        return this.decawattperliterLazy = this.convertFromBase(PowerDensityUnits.DecawattPerLiter);
    }

    public get KilowattPerLiter(): number {
        if(this.kilowattperliterLazy !== null){
            return this.kilowattperliterLazy;
        }
        return this.kilowattperliterLazy = this.convertFromBase(PowerDensityUnits.KilowattPerLiter);
    }

    public get MegawattPerLiter(): number {
        if(this.megawattperliterLazy !== null){
            return this.megawattperliterLazy;
        }
        return this.megawattperliterLazy = this.convertFromBase(PowerDensityUnits.MegawattPerLiter);
    }

    public get GigawattPerLiter(): number {
        if(this.gigawattperliterLazy !== null){
            return this.gigawattperliterLazy;
        }
        return this.gigawattperliterLazy = this.convertFromBase(PowerDensityUnits.GigawattPerLiter);
    }

    public get TerawattPerLiter(): number {
        if(this.terawattperliterLazy !== null){
            return this.terawattperliterLazy;
        }
        return this.terawattperliterLazy = this.convertFromBase(PowerDensityUnits.TerawattPerLiter);
    }

    public static FromWattsPerCubicMeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.WattsPerCubicMeter);
    }

    public static FromWattsPerCubicInch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.WattsPerCubicInch);
    }

    public static FromWattsPerCubicFoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.WattsPerCubicFoot);
    }

    public static FromWattsPerLiter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.WattsPerLiter);
    }

    public static FromPicowattPerCubicMeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.PicowattPerCubicMeter);
    }

    public static FromNanowattPerCubicMeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.NanowattPerCubicMeter);
    }

    public static FromMicrowattPerCubicMeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.MicrowattPerCubicMeter);
    }

    public static FromDeciwattPerCubicMeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.DeciwattPerCubicMeter);
    }

    public static FromDecawattPerCubicMeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.DecawattPerCubicMeter);
    }

    public static FromKilowattPerCubicMeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.KilowattPerCubicMeter);
    }

    public static FromMegawattPerCubicMeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.MegawattPerCubicMeter);
    }

    public static FromGigawattPerCubicMeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.GigawattPerCubicMeter);
    }

    public static FromTerawattPerCubicMeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.TerawattPerCubicMeter);
    }

    public static FromPicowattPerCubicInch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.PicowattPerCubicInch);
    }

    public static FromNanowattPerCubicInch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.NanowattPerCubicInch);
    }

    public static FromMicrowattPerCubicInch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.MicrowattPerCubicInch);
    }

    public static FromDeciwattPerCubicInch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.DeciwattPerCubicInch);
    }

    public static FromDecawattPerCubicInch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.DecawattPerCubicInch);
    }

    public static FromKilowattPerCubicInch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.KilowattPerCubicInch);
    }

    public static FromMegawattPerCubicInch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.MegawattPerCubicInch);
    }

    public static FromGigawattPerCubicInch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.GigawattPerCubicInch);
    }

    public static FromTerawattPerCubicInch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.TerawattPerCubicInch);
    }

    public static FromPicowattPerCubicFoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.PicowattPerCubicFoot);
    }

    public static FromNanowattPerCubicFoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.NanowattPerCubicFoot);
    }

    public static FromMicrowattPerCubicFoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.MicrowattPerCubicFoot);
    }

    public static FromDeciwattPerCubicFoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.DeciwattPerCubicFoot);
    }

    public static FromDecawattPerCubicFoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.DecawattPerCubicFoot);
    }

    public static FromKilowattPerCubicFoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.KilowattPerCubicFoot);
    }

    public static FromMegawattPerCubicFoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.MegawattPerCubicFoot);
    }

    public static FromGigawattPerCubicFoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.GigawattPerCubicFoot);
    }

    public static FromTerawattPerCubicFoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.TerawattPerCubicFoot);
    }

    public static FromPicowattPerLiter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.PicowattPerLiter);
    }

    public static FromNanowattPerLiter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.NanowattPerLiter);
    }

    public static FromMicrowattPerLiter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.MicrowattPerLiter);
    }

    public static FromDeciwattPerLiter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.DeciwattPerLiter);
    }

    public static FromDecawattPerLiter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.DecawattPerLiter);
    }

    public static FromKilowattPerLiter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.KilowattPerLiter);
    }

    public static FromMegawattPerLiter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.MegawattPerLiter);
    }

    public static FromGigawattPerLiter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.GigawattPerLiter);
    }

    public static FromTerawattPerLiter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.TerawattPerLiter);
    }

    private convertFromBase(toUnit: PowerDensityUnits): number {
        switch (toUnit) {
                
            case PowerDensityUnits.WattsPerCubicMeter:
                return this.value;
            case PowerDensityUnits.WattsPerCubicInch:
                return this.value/6.102374409473228e4;
            case PowerDensityUnits.WattsPerCubicFoot:
                return this.value/3.531466672148859e1;
            case PowerDensityUnits.WattsPerLiter:
                return this.value/1.0e3;
            case PowerDensityUnits.PicowattPerCubicMeter:
                return (this.value) / 1e-12;
            case PowerDensityUnits.NanowattPerCubicMeter:
                return (this.value) / 1e-9;
            case PowerDensityUnits.MicrowattPerCubicMeter:
                return (this.value) / 0.000001;
            case PowerDensityUnits.DeciwattPerCubicMeter:
                return (this.value) / 0.1;
            case PowerDensityUnits.DecawattPerCubicMeter:
                return (this.value) / 10;
            case PowerDensityUnits.KilowattPerCubicMeter:
                return (this.value) / 1000;
            case PowerDensityUnits.MegawattPerCubicMeter:
                return (this.value) / 1000000;
            case PowerDensityUnits.GigawattPerCubicMeter:
                return (this.value) / 1000000000;
            case PowerDensityUnits.TerawattPerCubicMeter:
                return (this.value) / 1000000000000;
            case PowerDensityUnits.PicowattPerCubicInch:
                return (this.value/6.102374409473228e4) / 1e-12;
            case PowerDensityUnits.NanowattPerCubicInch:
                return (this.value/6.102374409473228e4) / 1e-9;
            case PowerDensityUnits.MicrowattPerCubicInch:
                return (this.value/6.102374409473228e4) / 0.000001;
            case PowerDensityUnits.DeciwattPerCubicInch:
                return (this.value/6.102374409473228e4) / 0.1;
            case PowerDensityUnits.DecawattPerCubicInch:
                return (this.value/6.102374409473228e4) / 10;
            case PowerDensityUnits.KilowattPerCubicInch:
                return (this.value/6.102374409473228e4) / 1000;
            case PowerDensityUnits.MegawattPerCubicInch:
                return (this.value/6.102374409473228e4) / 1000000;
            case PowerDensityUnits.GigawattPerCubicInch:
                return (this.value/6.102374409473228e4) / 1000000000;
            case PowerDensityUnits.TerawattPerCubicInch:
                return (this.value/6.102374409473228e4) / 1000000000000;
            case PowerDensityUnits.PicowattPerCubicFoot:
                return (this.value/3.531466672148859e1) / 1e-12;
            case PowerDensityUnits.NanowattPerCubicFoot:
                return (this.value/3.531466672148859e1) / 1e-9;
            case PowerDensityUnits.MicrowattPerCubicFoot:
                return (this.value/3.531466672148859e1) / 0.000001;
            case PowerDensityUnits.DeciwattPerCubicFoot:
                return (this.value/3.531466672148859e1) / 0.1;
            case PowerDensityUnits.DecawattPerCubicFoot:
                return (this.value/3.531466672148859e1) / 10;
            case PowerDensityUnits.KilowattPerCubicFoot:
                return (this.value/3.531466672148859e1) / 1000;
            case PowerDensityUnits.MegawattPerCubicFoot:
                return (this.value/3.531466672148859e1) / 1000000;
            case PowerDensityUnits.GigawattPerCubicFoot:
                return (this.value/3.531466672148859e1) / 1000000000;
            case PowerDensityUnits.TerawattPerCubicFoot:
                return (this.value/3.531466672148859e1) / 1000000000000;
            case PowerDensityUnits.PicowattPerLiter:
                return (this.value/1.0e3) / 1e-12;
            case PowerDensityUnits.NanowattPerLiter:
                return (this.value/1.0e3) / 1e-9;
            case PowerDensityUnits.MicrowattPerLiter:
                return (this.value/1.0e3) / 0.000001;
            case PowerDensityUnits.DeciwattPerLiter:
                return (this.value/1.0e3) / 0.1;
            case PowerDensityUnits.DecawattPerLiter:
                return (this.value/1.0e3) / 10;
            case PowerDensityUnits.KilowattPerLiter:
                return (this.value/1.0e3) / 1000;
            case PowerDensityUnits.MegawattPerLiter:
                return (this.value/1.0e3) / 1000000;
            case PowerDensityUnits.GigawattPerLiter:
                return (this.value/1.0e3) / 1000000000;
            case PowerDensityUnits.TerawattPerLiter:
                return (this.value/1.0e3) / 1000000000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: PowerDensityUnits): number {
        switch (fromUnit) {
                
            case PowerDensityUnits.WattsPerCubicMeter:
                return value;
            case PowerDensityUnits.WattsPerCubicInch:
                return value*6.102374409473228e4;
            case PowerDensityUnits.WattsPerCubicFoot:
                return value*3.531466672148859e1;
            case PowerDensityUnits.WattsPerLiter:
                return value*1.0e3;
            case PowerDensityUnits.PicowattPerCubicMeter:
                return (value) * 1e-12;
            case PowerDensityUnits.NanowattPerCubicMeter:
                return (value) * 1e-9;
            case PowerDensityUnits.MicrowattPerCubicMeter:
                return (value) * 0.000001;
            case PowerDensityUnits.DeciwattPerCubicMeter:
                return (value) * 0.1;
            case PowerDensityUnits.DecawattPerCubicMeter:
                return (value) * 10;
            case PowerDensityUnits.KilowattPerCubicMeter:
                return (value) * 1000;
            case PowerDensityUnits.MegawattPerCubicMeter:
                return (value) * 1000000;
            case PowerDensityUnits.GigawattPerCubicMeter:
                return (value) * 1000000000;
            case PowerDensityUnits.TerawattPerCubicMeter:
                return (value) * 1000000000000;
            case PowerDensityUnits.PicowattPerCubicInch:
                return (value*6.102374409473228e4) * 1e-12;
            case PowerDensityUnits.NanowattPerCubicInch:
                return (value*6.102374409473228e4) * 1e-9;
            case PowerDensityUnits.MicrowattPerCubicInch:
                return (value*6.102374409473228e4) * 0.000001;
            case PowerDensityUnits.DeciwattPerCubicInch:
                return (value*6.102374409473228e4) * 0.1;
            case PowerDensityUnits.DecawattPerCubicInch:
                return (value*6.102374409473228e4) * 10;
            case PowerDensityUnits.KilowattPerCubicInch:
                return (value*6.102374409473228e4) * 1000;
            case PowerDensityUnits.MegawattPerCubicInch:
                return (value*6.102374409473228e4) * 1000000;
            case PowerDensityUnits.GigawattPerCubicInch:
                return (value*6.102374409473228e4) * 1000000000;
            case PowerDensityUnits.TerawattPerCubicInch:
                return (value*6.102374409473228e4) * 1000000000000;
            case PowerDensityUnits.PicowattPerCubicFoot:
                return (value*3.531466672148859e1) * 1e-12;
            case PowerDensityUnits.NanowattPerCubicFoot:
                return (value*3.531466672148859e1) * 1e-9;
            case PowerDensityUnits.MicrowattPerCubicFoot:
                return (value*3.531466672148859e1) * 0.000001;
            case PowerDensityUnits.DeciwattPerCubicFoot:
                return (value*3.531466672148859e1) * 0.1;
            case PowerDensityUnits.DecawattPerCubicFoot:
                return (value*3.531466672148859e1) * 10;
            case PowerDensityUnits.KilowattPerCubicFoot:
                return (value*3.531466672148859e1) * 1000;
            case PowerDensityUnits.MegawattPerCubicFoot:
                return (value*3.531466672148859e1) * 1000000;
            case PowerDensityUnits.GigawattPerCubicFoot:
                return (value*3.531466672148859e1) * 1000000000;
            case PowerDensityUnits.TerawattPerCubicFoot:
                return (value*3.531466672148859e1) * 1000000000000;
            case PowerDensityUnits.PicowattPerLiter:
                return (value*1.0e3) * 1e-12;
            case PowerDensityUnits.NanowattPerLiter:
                return (value*1.0e3) * 1e-9;
            case PowerDensityUnits.MicrowattPerLiter:
                return (value*1.0e3) * 0.000001;
            case PowerDensityUnits.DeciwattPerLiter:
                return (value*1.0e3) * 0.1;
            case PowerDensityUnits.DecawattPerLiter:
                return (value*1.0e3) * 10;
            case PowerDensityUnits.KilowattPerLiter:
                return (value*1.0e3) * 1000;
            case PowerDensityUnits.MegawattPerLiter:
                return (value*1.0e3) * 1000000;
            case PowerDensityUnits.GigawattPerLiter:
                return (value*1.0e3) * 1000000000;
            case PowerDensityUnits.TerawattPerLiter:
                return (value*1.0e3) * 1000000000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: PowerDensityUnits = PowerDensityUnits.WattsPerCubicMeter): string {

        switch (toUnit) {
            
            case PowerDensityUnits.WattsPerCubicMeter:
                return this.WattsPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.WattsPerCubicInch:
                return this.WattsPerCubicInch + ` W/in³`;
            case PowerDensityUnits.WattsPerCubicFoot:
                return this.WattsPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.WattsPerLiter:
                return this.WattsPerLiter + ` W/l`;
            case PowerDensityUnits.PicowattPerCubicMeter:
                return this.PicowattPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.NanowattPerCubicMeter:
                return this.NanowattPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.MicrowattPerCubicMeter:
                return this.MicrowattPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.DeciwattPerCubicMeter:
                return this.DeciwattPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.DecawattPerCubicMeter:
                return this.DecawattPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.KilowattPerCubicMeter:
                return this.KilowattPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.MegawattPerCubicMeter:
                return this.MegawattPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.GigawattPerCubicMeter:
                return this.GigawattPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.TerawattPerCubicMeter:
                return this.TerawattPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.PicowattPerCubicInch:
                return this.PicowattPerCubicInch + ` W/in³`;
            case PowerDensityUnits.NanowattPerCubicInch:
                return this.NanowattPerCubicInch + ` W/in³`;
            case PowerDensityUnits.MicrowattPerCubicInch:
                return this.MicrowattPerCubicInch + ` W/in³`;
            case PowerDensityUnits.DeciwattPerCubicInch:
                return this.DeciwattPerCubicInch + ` W/in³`;
            case PowerDensityUnits.DecawattPerCubicInch:
                return this.DecawattPerCubicInch + ` W/in³`;
            case PowerDensityUnits.KilowattPerCubicInch:
                return this.KilowattPerCubicInch + ` W/in³`;
            case PowerDensityUnits.MegawattPerCubicInch:
                return this.MegawattPerCubicInch + ` W/in³`;
            case PowerDensityUnits.GigawattPerCubicInch:
                return this.GigawattPerCubicInch + ` W/in³`;
            case PowerDensityUnits.TerawattPerCubicInch:
                return this.TerawattPerCubicInch + ` W/in³`;
            case PowerDensityUnits.PicowattPerCubicFoot:
                return this.PicowattPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.NanowattPerCubicFoot:
                return this.NanowattPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.MicrowattPerCubicFoot:
                return this.MicrowattPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.DeciwattPerCubicFoot:
                return this.DeciwattPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.DecawattPerCubicFoot:
                return this.DecawattPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.KilowattPerCubicFoot:
                return this.KilowattPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.MegawattPerCubicFoot:
                return this.MegawattPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.GigawattPerCubicFoot:
                return this.GigawattPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.TerawattPerCubicFoot:
                return this.TerawattPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.PicowattPerLiter:
                return this.PicowattPerLiter + ` W/l`;
            case PowerDensityUnits.NanowattPerLiter:
                return this.NanowattPerLiter + ` W/l`;
            case PowerDensityUnits.MicrowattPerLiter:
                return this.MicrowattPerLiter + ` W/l`;
            case PowerDensityUnits.DeciwattPerLiter:
                return this.DeciwattPerLiter + ` W/l`;
            case PowerDensityUnits.DecawattPerLiter:
                return this.DecawattPerLiter + ` W/l`;
            case PowerDensityUnits.KilowattPerLiter:
                return this.KilowattPerLiter + ` W/l`;
            case PowerDensityUnits.MegawattPerLiter:
                return this.MegawattPerLiter + ` W/l`;
            case PowerDensityUnits.GigawattPerLiter:
                return this.GigawattPerLiter + ` W/l`;
            case PowerDensityUnits.TerawattPerLiter:
                return this.TerawattPerLiter + ` W/l`;
        default:
            break;
        }
        return this.value.toString();
    }
}
