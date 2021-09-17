import { Stop } from './Stop'
import { IBus } from './IBus';

export interface BusRoute extends IBus {
    id?: number;
    stops: Stop[];
    routeName: string;
    IsEqual(busRoute: BusRoute): boolean;
}