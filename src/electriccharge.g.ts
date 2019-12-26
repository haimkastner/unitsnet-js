export enum ElectricChargeUnits {
    Coulombs,
    AmpereHours,
    KiloampereHours,
    MegaampereHours
}

export class ElectricCharge {
    private value: number;
    private coulombsLazy: number | null = null;
    private amperehoursLazy: number | null = null;
    private kiloamperehoursLazy: number | null = null;
    private megaamperehoursLazy: number | null = null;

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

    public get KiloampereHours(): number {
        if(this.kiloamperehoursLazy !== null){
            return this.kiloamperehoursLazy;
        }
        return this.kiloamperehoursLazy = this.convertFromBase(ElectricChargeUnits.KiloampereHours);
    }

    public get MegaampereHours(): number {
        if(this.megaamperehoursLazy !== null){
            return this.megaamperehoursLazy;
        }
        return this.megaamperehoursLazy = this.convertFromBase(ElectricChargeUnits.MegaampereHours);
    }

    public static FromCoulombs(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.Coulombs);
    }

    public static FromAmpereHours(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.AmpereHours);
    }

    public static FromKiloampereHours(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.KiloampereHours);
    }

    public static FromMegaampereHours(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.MegaampereHours);
    }

    private convertFromBase(toUnit: ElectricChargeUnits): number {
        switch (toUnit) {
                
            case ElectricChargeUnits.Coulombs:
                return this.value;
            case ElectricChargeUnits.AmpereHours:
                return this.value*2.77777777777e-4;
            case ElectricChargeUnits.KiloampereHours:
                return (this.value*2.77777777777e-4) / 1000;
            case ElectricChargeUnits.MegaampereHours:
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
            case ElectricChargeUnits.KiloampereHours:
                return (value/2.77777777777e-4) * 1000;
            case ElectricChargeUnits.MegaampereHours:
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
            case ElectricChargeUnits.KiloampereHours:
                return this.KiloampereHours + ` A-h`;
            case ElectricChargeUnits.MegaampereHours:
                return this.MegaampereHours + ` A-h`;
        default:
            break;
        }
        return this.value.toString();
    }
}
