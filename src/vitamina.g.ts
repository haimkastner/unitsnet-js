export enum VitaminAUnits {
    InternationalUnits
}

export class VitaminA {
    private value: number;
    private internationalunitsLazy: number | null = null;

    public constructor(value: number, fromUnit: VitaminAUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get InternationalUnits(): number {
        if(this.internationalunitsLazy !== null){
            return this.internationalunitsLazy;
        }
        return this.internationalunitsLazy = this.convertFromBase(VitaminAUnits.InternationalUnits);
    }

    public static FromInternationalUnits(value: number): VitaminA {
        return new VitaminA(value, VitaminAUnits.InternationalUnits);
    }

    private convertFromBase(toUnit: VitaminAUnits): number {
        switch (toUnit) {
                
            case VitaminAUnits.InternationalUnits:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: VitaminAUnits): number {
        switch (fromUnit) {
                
            case VitaminAUnits.InternationalUnits:
                return value;
            default:
                break;
        }
        return NaN;
    }
}
