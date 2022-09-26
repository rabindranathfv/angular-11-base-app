import { Account } from '../account/account';
import { Customer } from '../customers/customers.interface';
import { Owner } from '../owner/owner.interface';
import { User } from '../user/user';

export interface Ownership {
    id: number;
    admissionDate: string;
    street: string;
    number: string;
    department: string;
    communes: string[];
    propertyType: string;
    hasWarehouse: string;
    hasParking: string;
    role: string;
    minimumAmount: string;
    maximumAmount: string;
    administrationPhone: string;
    administrationContact: string;
    isAssertion: boolean;
    electricityClientNumber: string;
    waterClientNumber: string;
    bedrooms: string[];
    bathrooms: string[];
    gasClientNumber: string;
    surfaceM2: string;
    orientation: string;
    realState: string;
    metro: string;
    availableDate: string;
    moreFeatures: string;
    images: string[];
    customerId: number;
    customer: Customer;
    ownerships_owners: any[];
}
