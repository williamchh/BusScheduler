import { IBus } from './IBus';

export interface Stop extends IBus {
    id?: number;
    code: string;
    sequence: number;
    IsEqual(bus: Stop): boolean;
}