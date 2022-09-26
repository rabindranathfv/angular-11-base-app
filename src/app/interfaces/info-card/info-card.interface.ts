import { Button } from '../button/button.interface';

export interface InfoCardData {
    id?: number;
    name?: string;
    position?: string;
    address?: string;
    email?: string;
    phone?: string;
    buttons?: Button [];
    route?: string;
    firstName?: string;
    lastName?: string;
    role?: string;
    image?: string;
    propertyType?: string;
    hasParking?: string;
    hasWarehouse?: string;
}
