import { IBus } from './IBus';

export interface Bus extends IBus {
    id?: number;
    lineNumber: number;
    route: string;
    arrivalId: number;
    IsEqual(bus: Bus): boolean;
}