import {AuctionObject} from './auction-object';
export interface Object {
    id?: string;
    name: string,
    priceStart: number,
    dateEnd: Date,
    categoryId: number,
    auctionObjects : AuctionObject[];
}