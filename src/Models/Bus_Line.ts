import { IBus } from './IBus';

export interface BusLine extends IBus {
    id?: number;
    lineNumber: number;
    busRoutes: string[];
    IsEqual(busLine: BusLine): boolean;
}