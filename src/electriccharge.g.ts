export enum ElectricChargeUnits {
    Coulombs,
    AmpereHours,
    Kiloamperehours,
    Megaamperehours
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

    public get Kiloamperehours(): number {
        if(this.kiloamperehoursLazy !== null){
            return this.kiloamperehoursLazy;
        }
        return this.kiloamperehoursLazy = this.convertFromBase(ElectricChargeUnits.Kiloamperehours);
    }

    public get Megaamperehours(): number {
        if(this.megaamperehoursLazy !== null){
            return this.megaamperehoursLazy;
        }
        return this.megaamperehoursLazy = this.convertFromBase(ElectricChargeUnits.Megaamperehours);
    }

    public static FromCoulombs(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.Coulombs);
    }

    public static FromAmpereHours(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.AmpereHours);
    }

    public static FromKiloamperehours(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.Kiloamperehours);
    }

    public static FromMegaamperehours(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.Megaamperehours);
    }

    private convertFromBase(toUnit: ElectricChargeUnits): number {
        switch (toUnit) {
                
            case ElectricChargeUnits.Coulombs:
                return this.value;
            case ElectricChargeUnits.AmpereHours:
                return this.value*2.77777777777e-4;
            case ElectricChargeUnits.Kiloamperehours:
                return (this.value*2.77777777777e-4) / 1000;
            case ElectricChargeUnits.Megaamperehours:
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
            case ElectricChargeUnits.Kiloamperehours:
                return (value/2.77777777777e-4) * 1000;
            case ElectricChargeUnits.Megaamperehours:
                return (value/2.77777777777e-4) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
