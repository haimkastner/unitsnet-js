export enum PowerDensityUnits {
    WattsPerCubicMeter,
    WattsPerCubicInch,
    WattsPerCubicFoot,
    WattsPerLiter,
    Picowattspercubicmeter,
    Nanowattspercubicmeter,
    Microwattspercubicmeter,
    Deciwattspercubicmeter,
    Decawattspercubicmeter,
    Kilowattspercubicmeter,
    Megawattspercubicmeter,
    Gigawattspercubicmeter,
    Terawattspercubicmeter,
    Picowattspercubicinch,
    Nanowattspercubicinch,
    Microwattspercubicinch,
    Deciwattspercubicinch,
    Decawattspercubicinch,
    Kilowattspercubicinch,
    Megawattspercubicinch,
    Gigawattspercubicinch,
    Terawattspercubicinch,
    Picowattspercubicfoot,
    Nanowattspercubicfoot,
    Microwattspercubicfoot,
    Deciwattspercubicfoot,
    Decawattspercubicfoot,
    Kilowattspercubicfoot,
    Megawattspercubicfoot,
    Gigawattspercubicfoot,
    Terawattspercubicfoot,
    Picowattsperliter,
    Nanowattsperliter,
    Microwattsperliter,
    Deciwattsperliter,
    Decawattsperliter,
    Kilowattsperliter,
    Megawattsperliter,
    Gigawattsperliter,
    Terawattsperliter
}

export class PowerDensity {
    private value: number;

    public constructor(value: number, fromUnit: PowerDensityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get WattsPerCubicMeter(): number {
        return this.convertFromBase(PowerDensityUnits.WattsPerCubicMeter);
    }

    public get WattsPerCubicInch(): number {
        return this.convertFromBase(PowerDensityUnits.WattsPerCubicInch);
    }

    public get WattsPerCubicFoot(): number {
        return this.convertFromBase(PowerDensityUnits.WattsPerCubicFoot);
    }

    public get WattsPerLiter(): number {
        return this.convertFromBase(PowerDensityUnits.WattsPerLiter);
    }

    public get Picowattspercubicmeter(): number {
        return this.convertFromBase(PowerDensityUnits.Picowattspercubicmeter);
    }

    public get Nanowattspercubicmeter(): number {
        return this.convertFromBase(PowerDensityUnits.Nanowattspercubicmeter);
    }

    public get Microwattspercubicmeter(): number {
        return this.convertFromBase(PowerDensityUnits.Microwattspercubicmeter);
    }

    public get Deciwattspercubicmeter(): number {
        return this.convertFromBase(PowerDensityUnits.Deciwattspercubicmeter);
    }

    public get Decawattspercubicmeter(): number {
        return this.convertFromBase(PowerDensityUnits.Decawattspercubicmeter);
    }

    public get Kilowattspercubicmeter(): number {
        return this.convertFromBase(PowerDensityUnits.Kilowattspercubicmeter);
    }

    public get Megawattspercubicmeter(): number {
        return this.convertFromBase(PowerDensityUnits.Megawattspercubicmeter);
    }

    public get Gigawattspercubicmeter(): number {
        return this.convertFromBase(PowerDensityUnits.Gigawattspercubicmeter);
    }

    public get Terawattspercubicmeter(): number {
        return this.convertFromBase(PowerDensityUnits.Terawattspercubicmeter);
    }

    public get Picowattspercubicinch(): number {
        return this.convertFromBase(PowerDensityUnits.Picowattspercubicinch);
    }

    public get Nanowattspercubicinch(): number {
        return this.convertFromBase(PowerDensityUnits.Nanowattspercubicinch);
    }

    public get Microwattspercubicinch(): number {
        return this.convertFromBase(PowerDensityUnits.Microwattspercubicinch);
    }

    public get Deciwattspercubicinch(): number {
        return this.convertFromBase(PowerDensityUnits.Deciwattspercubicinch);
    }

    public get Decawattspercubicinch(): number {
        return this.convertFromBase(PowerDensityUnits.Decawattspercubicinch);
    }

    public get Kilowattspercubicinch(): number {
        return this.convertFromBase(PowerDensityUnits.Kilowattspercubicinch);
    }

    public get Megawattspercubicinch(): number {
        return this.convertFromBase(PowerDensityUnits.Megawattspercubicinch);
    }

    public get Gigawattspercubicinch(): number {
        return this.convertFromBase(PowerDensityUnits.Gigawattspercubicinch);
    }

    public get Terawattspercubicinch(): number {
        return this.convertFromBase(PowerDensityUnits.Terawattspercubicinch);
    }

    public get Picowattspercubicfoot(): number {
        return this.convertFromBase(PowerDensityUnits.Picowattspercubicfoot);
    }

    public get Nanowattspercubicfoot(): number {
        return this.convertFromBase(PowerDensityUnits.Nanowattspercubicfoot);
    }

    public get Microwattspercubicfoot(): number {
        return this.convertFromBase(PowerDensityUnits.Microwattspercubicfoot);
    }

    public get Deciwattspercubicfoot(): number {
        return this.convertFromBase(PowerDensityUnits.Deciwattspercubicfoot);
    }

    public get Decawattspercubicfoot(): number {
        return this.convertFromBase(PowerDensityUnits.Decawattspercubicfoot);
    }

    public get Kilowattspercubicfoot(): number {
        return this.convertFromBase(PowerDensityUnits.Kilowattspercubicfoot);
    }

    public get Megawattspercubicfoot(): number {
        return this.convertFromBase(PowerDensityUnits.Megawattspercubicfoot);
    }

    public get Gigawattspercubicfoot(): number {
        return this.convertFromBase(PowerDensityUnits.Gigawattspercubicfoot);
    }

    public get Terawattspercubicfoot(): number {
        return this.convertFromBase(PowerDensityUnits.Terawattspercubicfoot);
    }

    public get Picowattsperliter(): number {
        return this.convertFromBase(PowerDensityUnits.Picowattsperliter);
    }

    public get Nanowattsperliter(): number {
        return this.convertFromBase(PowerDensityUnits.Nanowattsperliter);
    }

    public get Microwattsperliter(): number {
        return this.convertFromBase(PowerDensityUnits.Microwattsperliter);
    }

    public get Deciwattsperliter(): number {
        return this.convertFromBase(PowerDensityUnits.Deciwattsperliter);
    }

    public get Decawattsperliter(): number {
        return this.convertFromBase(PowerDensityUnits.Decawattsperliter);
    }

    public get Kilowattsperliter(): number {
        return this.convertFromBase(PowerDensityUnits.Kilowattsperliter);
    }

    public get Megawattsperliter(): number {
        return this.convertFromBase(PowerDensityUnits.Megawattsperliter);
    }

    public get Gigawattsperliter(): number {
        return this.convertFromBase(PowerDensityUnits.Gigawattsperliter);
    }

    public get Terawattsperliter(): number {
        return this.convertFromBase(PowerDensityUnits.Terawattsperliter);
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

    public static FromPicowattspercubicmeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Picowattspercubicmeter);
    }

    public static FromNanowattspercubicmeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Nanowattspercubicmeter);
    }

    public static FromMicrowattspercubicmeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Microwattspercubicmeter);
    }

    public static FromDeciwattspercubicmeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Deciwattspercubicmeter);
    }

    public static FromDecawattspercubicmeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Decawattspercubicmeter);
    }

    public static FromKilowattspercubicmeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Kilowattspercubicmeter);
    }

    public static FromMegawattspercubicmeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Megawattspercubicmeter);
    }

    public static FromGigawattspercubicmeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Gigawattspercubicmeter);
    }

    public static FromTerawattspercubicmeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Terawattspercubicmeter);
    }

    public static FromPicowattspercubicinch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Picowattspercubicinch);
    }

    public static FromNanowattspercubicinch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Nanowattspercubicinch);
    }

    public static FromMicrowattspercubicinch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Microwattspercubicinch);
    }

    public static FromDeciwattspercubicinch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Deciwattspercubicinch);
    }

    public static FromDecawattspercubicinch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Decawattspercubicinch);
    }

    public static FromKilowattspercubicinch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Kilowattspercubicinch);
    }

    public static FromMegawattspercubicinch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Megawattspercubicinch);
    }

    public static FromGigawattspercubicinch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Gigawattspercubicinch);
    }

    public static FromTerawattspercubicinch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Terawattspercubicinch);
    }

    public static FromPicowattspercubicfoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Picowattspercubicfoot);
    }

    public static FromNanowattspercubicfoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Nanowattspercubicfoot);
    }

    public static FromMicrowattspercubicfoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Microwattspercubicfoot);
    }

    public static FromDeciwattspercubicfoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Deciwattspercubicfoot);
    }

    public static FromDecawattspercubicfoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Decawattspercubicfoot);
    }

    public static FromKilowattspercubicfoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Kilowattspercubicfoot);
    }

    public static FromMegawattspercubicfoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Megawattspercubicfoot);
    }

    public static FromGigawattspercubicfoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Gigawattspercubicfoot);
    }

    public static FromTerawattspercubicfoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Terawattspercubicfoot);
    }

    public static FromPicowattsperliter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Picowattsperliter);
    }

    public static FromNanowattsperliter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Nanowattsperliter);
    }

    public static FromMicrowattsperliter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Microwattsperliter);
    }

    public static FromDeciwattsperliter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Deciwattsperliter);
    }

    public static FromDecawattsperliter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Decawattsperliter);
    }

    public static FromKilowattsperliter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Kilowattsperliter);
    }

    public static FromMegawattsperliter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Megawattsperliter);
    }

    public static FromGigawattsperliter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Gigawattsperliter);
    }

    public static FromTerawattsperliter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.Terawattsperliter);
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
                
                case PowerDensityUnits.Picowattspercubicmeter:
                    return (this.value) * 1e-12;
                
                case PowerDensityUnits.Nanowattspercubicmeter:
                    return (this.value) * 1e-9;
                
                case PowerDensityUnits.Microwattspercubicmeter:
                    return (this.value) * 0.000001;
                
                case PowerDensityUnits.Deciwattspercubicmeter:
                    return (this.value) * 0.1;
                
                case PowerDensityUnits.Decawattspercubicmeter:
                    return (this.value) * 10;
                
                case PowerDensityUnits.Kilowattspercubicmeter:
                    return (this.value) * 1000;
                
                case PowerDensityUnits.Megawattspercubicmeter:
                    return (this.value) * 1000000;
                
                case PowerDensityUnits.Gigawattspercubicmeter:
                    return (this.value) * 1000000000;
                
                case PowerDensityUnits.Terawattspercubicmeter:
                    return (this.value) * 1000000000000;
                
                case PowerDensityUnits.Picowattspercubicinch:
                    return (this.value*6.102374409473228e4) * 1e-12;
                
                case PowerDensityUnits.Nanowattspercubicinch:
                    return (this.value*6.102374409473228e4) * 1e-9;
                
                case PowerDensityUnits.Microwattspercubicinch:
                    return (this.value*6.102374409473228e4) * 0.000001;
                
                case PowerDensityUnits.Deciwattspercubicinch:
                    return (this.value*6.102374409473228e4) * 0.1;
                
                case PowerDensityUnits.Decawattspercubicinch:
                    return (this.value*6.102374409473228e4) * 10;
                
                case PowerDensityUnits.Kilowattspercubicinch:
                    return (this.value*6.102374409473228e4) * 1000;
                
                case PowerDensityUnits.Megawattspercubicinch:
                    return (this.value*6.102374409473228e4) * 1000000;
                
                case PowerDensityUnits.Gigawattspercubicinch:
                    return (this.value*6.102374409473228e4) * 1000000000;
                
                case PowerDensityUnits.Terawattspercubicinch:
                    return (this.value*6.102374409473228e4) * 1000000000000;
                
                case PowerDensityUnits.Picowattspercubicfoot:
                    return (this.value*3.531466672148859e1) * 1e-12;
                
                case PowerDensityUnits.Nanowattspercubicfoot:
                    return (this.value*3.531466672148859e1) * 1e-9;
                
                case PowerDensityUnits.Microwattspercubicfoot:
                    return (this.value*3.531466672148859e1) * 0.000001;
                
                case PowerDensityUnits.Deciwattspercubicfoot:
                    return (this.value*3.531466672148859e1) * 0.1;
                
                case PowerDensityUnits.Decawattspercubicfoot:
                    return (this.value*3.531466672148859e1) * 10;
                
                case PowerDensityUnits.Kilowattspercubicfoot:
                    return (this.value*3.531466672148859e1) * 1000;
                
                case PowerDensityUnits.Megawattspercubicfoot:
                    return (this.value*3.531466672148859e1) * 1000000;
                
                case PowerDensityUnits.Gigawattspercubicfoot:
                    return (this.value*3.531466672148859e1) * 1000000000;
                
                case PowerDensityUnits.Terawattspercubicfoot:
                    return (this.value*3.531466672148859e1) * 1000000000000;
                
                case PowerDensityUnits.Picowattsperliter:
                    return (this.value*1.0e3) * 1e-12;
                
                case PowerDensityUnits.Nanowattsperliter:
                    return (this.value*1.0e3) * 1e-9;
                
                case PowerDensityUnits.Microwattsperliter:
                    return (this.value*1.0e3) * 0.000001;
                
                case PowerDensityUnits.Deciwattsperliter:
                    return (this.value*1.0e3) * 0.1;
                
                case PowerDensityUnits.Decawattsperliter:
                    return (this.value*1.0e3) * 10;
                
                case PowerDensityUnits.Kilowattsperliter:
                    return (this.value*1.0e3) * 1000;
                
                case PowerDensityUnits.Megawattsperliter:
                    return (this.value*1.0e3) * 1000000;
                
                case PowerDensityUnits.Gigawattsperliter:
                    return (this.value*1.0e3) * 1000000000;
                
                case PowerDensityUnits.Terawattsperliter:
                    return (this.value*1.0e3) * 1000000000000;
                
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
                
                case PowerDensityUnits.Picowattspercubicmeter:
                    return (value) / 1e-12;
                
                case PowerDensityUnits.Nanowattspercubicmeter:
                    return (value) / 1e-9;
                
                case PowerDensityUnits.Microwattspercubicmeter:
                    return (value) / 0.000001;
                
                case PowerDensityUnits.Deciwattspercubicmeter:
                    return (value) / 0.1;
                
                case PowerDensityUnits.Decawattspercubicmeter:
                    return (value) / 10;
                
                case PowerDensityUnits.Kilowattspercubicmeter:
                    return (value) / 1000;
                
                case PowerDensityUnits.Megawattspercubicmeter:
                    return (value) / 1000000;
                
                case PowerDensityUnits.Gigawattspercubicmeter:
                    return (value) / 1000000000;
                
                case PowerDensityUnits.Terawattspercubicmeter:
                    return (value) / 1000000000000;
                
                case PowerDensityUnits.Picowattspercubicinch:
                    return (value/6.102374409473228e4) / 1e-12;
                
                case PowerDensityUnits.Nanowattspercubicinch:
                    return (value/6.102374409473228e4) / 1e-9;
                
                case PowerDensityUnits.Microwattspercubicinch:
                    return (value/6.102374409473228e4) / 0.000001;
                
                case PowerDensityUnits.Deciwattspercubicinch:
                    return (value/6.102374409473228e4) / 0.1;
                
                case PowerDensityUnits.Decawattspercubicinch:
                    return (value/6.102374409473228e4) / 10;
                
                case PowerDensityUnits.Kilowattspercubicinch:
                    return (value/6.102374409473228e4) / 1000;
                
                case PowerDensityUnits.Megawattspercubicinch:
                    return (value/6.102374409473228e4) / 1000000;
                
                case PowerDensityUnits.Gigawattspercubicinch:
                    return (value/6.102374409473228e4) / 1000000000;
                
                case PowerDensityUnits.Terawattspercubicinch:
                    return (value/6.102374409473228e4) / 1000000000000;
                
                case PowerDensityUnits.Picowattspercubicfoot:
                    return (value/3.531466672148859e1) / 1e-12;
                
                case PowerDensityUnits.Nanowattspercubicfoot:
                    return (value/3.531466672148859e1) / 1e-9;
                
                case PowerDensityUnits.Microwattspercubicfoot:
                    return (value/3.531466672148859e1) / 0.000001;
                
                case PowerDensityUnits.Deciwattspercubicfoot:
                    return (value/3.531466672148859e1) / 0.1;
                
                case PowerDensityUnits.Decawattspercubicfoot:
                    return (value/3.531466672148859e1) / 10;
                
                case PowerDensityUnits.Kilowattspercubicfoot:
                    return (value/3.531466672148859e1) / 1000;
                
                case PowerDensityUnits.Megawattspercubicfoot:
                    return (value/3.531466672148859e1) / 1000000;
                
                case PowerDensityUnits.Gigawattspercubicfoot:
                    return (value/3.531466672148859e1) / 1000000000;
                
                case PowerDensityUnits.Terawattspercubicfoot:
                    return (value/3.531466672148859e1) / 1000000000000;
                
                case PowerDensityUnits.Picowattsperliter:
                    return (value/1.0e3) / 1e-12;
                
                case PowerDensityUnits.Nanowattsperliter:
                    return (value/1.0e3) / 1e-9;
                
                case PowerDensityUnits.Microwattsperliter:
                    return (value/1.0e3) / 0.000001;
                
                case PowerDensityUnits.Deciwattsperliter:
                    return (value/1.0e3) / 0.1;
                
                case PowerDensityUnits.Decawattsperliter:
                    return (value/1.0e3) / 10;
                
                case PowerDensityUnits.Kilowattsperliter:
                    return (value/1.0e3) / 1000;
                
                case PowerDensityUnits.Megawattsperliter:
                    return (value/1.0e3) / 1000000;
                
                case PowerDensityUnits.Gigawattsperliter:
                    return (value/1.0e3) / 1000000000;
                
                case PowerDensityUnits.Terawattsperliter:
                    return (value/1.0e3) / 1000000000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
