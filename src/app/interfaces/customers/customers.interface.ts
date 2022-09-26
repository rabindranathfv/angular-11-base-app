import { Configuration } from '../configuration/configuration.interface';

export interface Customer {
    id: number;
    name: string;
    taxInternationalIdentifier?: string;
    country?: string;
    address: string;
    legalRepresentative?: string;
    email: string;
    primaryPhone: string;
    secondaryPhone?: string;
    areas?: any;
    configurationId?: number;
    configuration?: Configuration;
}
