export enum VitaminAUnits {
    InternationalUnits
}

export class VitaminA {
    private value: number;

    public constructor(value: number, fromUnit: VitaminAUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get InternationalUnits(): number {
        return this.convertFromBase(VitaminAUnits.InternationalUnits);
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
