import { Account } from '../account/account';
import { User } from '../user/user';

export interface Owner {
    id: number;
    business: string;
    position: string;
    comercialAddress: string;
    admissionDate: string;
    fixedAmount: number;
    administrationPercent: number;
    brokeragePercent: number;
    portfolioExecutives: string[];
    observations: string;
    assistantFirstName: string;
    assistantLastName: string;
    assistantPhone: string;
    assistantEmail: string;
    userId: number;
    user: User;
    account: Account;
}
