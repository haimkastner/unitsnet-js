import { BaseUnit } from '../../src/base-unit';

export type BaseUnitClass = new (value: number, fromUnit?: string) => BaseUnit;
