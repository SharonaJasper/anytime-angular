import { User } from '../user';
import { Allevent } from './allevent';

export class Event {
    id: number=0;
    remark: string;
    user: User;
    allevent: Allevent;
}
