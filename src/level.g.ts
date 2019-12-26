export enum LevelUnits {
    Decibels,
    Nepers
}

export class Level {
    private value: number;
    private decibelsLazy: number | null = null;
    private nepersLazy: number | null = null;

    public constructor(value: number, fromUnit: LevelUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Decibels(): number {
        if(this.decibelsLazy !== null){
            return this.decibelsLazy;
        }
        return this.decibelsLazy = this.convertFromBase(LevelUnits.Decibels);
    }

    public get Nepers(): number {
        if(this.nepersLazy !== null){
            return this.nepersLazy;
        }
        return this.nepersLazy = this.convertFromBase(LevelUnits.Nepers);
    }

    public static FromDecibels(value: number): Level {
        return new Level(value, LevelUnits.Decibels);
    }

    public static FromNepers(value: number): Level {
        return new Level(value, LevelUnits.Nepers);
    }

    private convertFromBase(toUnit: LevelUnits): number {
        switch (toUnit) {
                
            case LevelUnits.Decibels:
                return this.value;
            case LevelUnits.Nepers:
                return 0.115129254*this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: LevelUnits): number {
        switch (fromUnit) {
                
            case LevelUnits.Decibels:
                return value;
            case LevelUnits.Nepers:
                return (1/0.115129254)*value;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: LevelUnits = LevelUnits.Decibels): string {

        switch (toUnit) {
            
            case LevelUnits.Decibels:
                return this.Decibels + ` dB`;
            case LevelUnits.Nepers:
                return this.Nepers + ` Np`;
        default:
            break;
        }
        return this.value.toString();
    }
}
