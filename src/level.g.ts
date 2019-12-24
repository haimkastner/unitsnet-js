export enum LevelUnits {
    Decibels,
    Nepers
}

export class Level {
    private value: number;

    public constructor(value: number, fromUnit: LevelUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Decibels(): number {
        return this.convertFromBase(LevelUnits.Decibels);
    }

    public get Nepers(): number {
        return this.convertFromBase(LevelUnits.Nepers);
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
}
