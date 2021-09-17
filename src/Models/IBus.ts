export interface IBus{
    id?: number;
    IsEqual(ibus: IBus): boolean;
}