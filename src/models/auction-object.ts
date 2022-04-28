import { Object } from './object.model';
import { User } from './user.model';


export interface AuctionObject {
    object: Object;
    user: User;
    auction_price: number;
    auction_date: Date;
}