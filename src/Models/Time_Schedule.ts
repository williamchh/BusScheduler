import { IBus } from './IBus';

export interface TimeSchedule extends IBus {
    id?:number;
    arrive: Arrival[];
    lineNumber: number;
    routeName: string;
    firstStopCode: string;
    IsEqual(bus: TimeSchedule): boolean;
}

export interface Arrival {
    id: number,
    arrive: {
        hours: string,
        minutes: string
    }
}