import { User } from "./user.model";
import { Object } from "./object.model";

export interface ObjectSold {
    id: number;
    object: Object;
    user: User
    amount: number;
    end_date: Date;

}