import { Object } from './object.model';
import { UserAuctionObject } from './userAuctionObject';

export interface AuctionObject {
    object: Object;
    user: UserAuctionObject;
    auction_price: number;
    auction_date: Date;
}