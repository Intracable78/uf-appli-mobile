import { User } from './user.model';
export interface Object {
    id?: string;
    name: string,
    priceStart: number,
    dateEnd: Date,
    user: User,
    // auctionObjects?: AuctionObject[];
}