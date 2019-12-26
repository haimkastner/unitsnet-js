export enum ElectricChargeUnits {
    Coulombs,
    AmpereHours,
    KiloampereHour,
    MegaampereHour
}

export class ElectricCharge {
    private value: number;
    private coulombsLazy: number | null = null;
    private amperehoursLazy: number | null = null;
    private kiloamperehourLazy: number | null = null;
    private megaamperehourLazy: number | null = null;

    public constructor(value: number, fromUnit: ElectricChargeUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Coulombs(): number {
        if(this.coulombsLazy !== null){
            return this.coulombsLazy;
        }
        return this.coulombsLazy = this.convertFromBase(ElectricChargeUnits.Coulombs);
    }

    public get AmpereHours(): number {
        if(this.amperehoursLazy !== null){
            return this.amperehoursLazy;
        }
        return this.amperehoursLazy = this.convertFromBase(ElectricChargeUnits.AmpereHours);
    }

    public get KiloampereHour(): number {
        if(this.kiloamperehourLazy !== null){
            return this.kiloamperehourLazy;
        }
        return this.kiloamperehourLazy = this.convertFromBase(ElectricChargeUnits.KiloampereHour);
    }

    public get MegaampereHour(): number {
        if(this.megaamperehourLazy !== null){
            return this.megaamperehourLazy;
        }
        return this.megaamperehourLazy = this.convertFromBase(ElectricChargeUnits.MegaampereHour);
    }

    public static FromCoulombs(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.Coulombs);
    }

    public static FromAmpereHours(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.AmpereHours);
    }

    public static FromKiloampereHour(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.KiloampereHour);
    }

    public static FromMegaampereHour(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.MegaampereHour);
    }

    private convertFromBase(toUnit: ElectricChargeUnits): number {
        switch (toUnit) {
                
            case ElectricChargeUnits.Coulombs:
                return this.value;
            case ElectricChargeUnits.AmpereHours:
                return this.value*2.77777777777e-4;
            case ElectricChargeUnits.KiloampereHour:
                return (this.value*2.77777777777e-4) / 1000;
            case ElectricChargeUnits.MegaampereHour:
                return (this.value*2.77777777777e-4) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricChargeUnits): number {
        switch (fromUnit) {
                
            case ElectricChargeUnits.Coulombs:
                return value;
            case ElectricChargeUnits.AmpereHours:
                return value/2.77777777777e-4;
            case ElectricChargeUnits.KiloampereHour:
                return (value/2.77777777777e-4) * 1000;
            case ElectricChargeUnits.MegaampereHour:
                return (value/2.77777777777e-4) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: ElectricChargeUnits = ElectricChargeUnits.Coulombs): string {

        switch (toUnit) {
            
            case ElectricChargeUnits.Coulombs:
                return this.Coulombs + ` C`;
            case ElectricChargeUnits.AmpereHours:
                return this.AmpereHours + ` A-h`;
            case ElectricChargeUnits.KiloampereHour:
                return this.KiloampereHour + ` A-h`;
            case ElectricChargeUnits.MegaampereHour:
                return this.MegaampereHour + ` A-h`;
        default:
            break;
        }
        return this.value.toString();
    }
}
