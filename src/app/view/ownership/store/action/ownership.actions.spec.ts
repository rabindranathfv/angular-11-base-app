import { Ownership } from 'src/app/interfaces/ownership/ownership.interface';
import * as fromOwnershipsActions from './ownership.actions';

const ownerships: Ownership[] = [
  {
    id: 2,
    admissionDate: '2020-06-24',
    street: 'La Florida O',
    number: '12',
    department: '11',
    communes: [
        'Recreo',
        'Sabana Grande'
    ],
    propertyType: 'Department',
    hasWarehouse: '2',
    hasParking: '3',
    role: 'some',
    minimumAmount: '300',
    maximumAmount: '500',
    administrationPhone: '944423',
    administrationContact: '9293232',
    isAssertion: false,
    electricityClientNumber: '4343456',
    waterClientNumber: '456576',
    bedrooms: [
        '5',
        '1'
    ],
    bathrooms: [
        '5',
        '1'
    ],
    gasClientNumber: '3456467',
    surfaceM2: '120',
    orientation: 'E',
    realState: 'Some',
    metro: 'Chacaito',
    availableDate: '2020-06-27',
    moreFeatures: 'Some',
    images: [
        'ab3ff60e-be86-4356-a1cb-7234bf009a0f'
    ],
    customerId: 1,
    customer: {
        id: 1,
        name: 'Yamil Ferreira',
        country: 'usa',
        taxInternationalIdentifier: '306869574',
        address: 'Eaddress',
        legalRepresentative: 'Yamil Ferreira',
        email: 'skajskaj@gmail.com',
        primaryPhone: '212132',
        secondaryPhone: '43434',
        areas: [],
        configurationId: 1
    },
    ownerships_owners: [
        {
            id: 2,
            ownershipId: 2,
            ownerId: 5,
            owner: {
                id: 5,
                business: 'ASDADSA',
                position: 'adsSDdsadsad',
                comercialAddress: 'dfgdfg',
                admissionDate: '2020-10-31T00:00:00.000Z',
                fixedAmount: 5,
                administrationPercent: 5,
                brokeragePercent: 5,
                portfolioExecutives: [
                    'In Proccess'
                ],
                observations: 'dfgdfgdfg',
                assistantFirstName: 'dfgfdg',
                assistantLastName: 'dfgdfgfd',
                assistantPhone: '456465465',
                assistantEmail: 'dfgdfg@hgjgj.com',
                userId: 7
            }
        }
    ]
},
        {
            id: 3,
            admissionDate: '2020-10-13T00:00:00.000Z',
            street: '234234',
            number: '2342432',
            department: '4242424',
            communes: [
                'Santiago',
                'Santiago2'
            ],
            propertyType: 'apartamento',
            hasWarehouse: 'false',
            hasParking: 'false',
            role: 'Apartamento',
            minimumAmount: '23424324',
            maximumAmount: '23423424',
            administrationPhone: '12313131313',
            administrationContact: '23424242424',
            isAssertion: true,
            electricityClientNumber: '2342424',
            waterClientNumber: '42432424',
            bedrooms: [
                '4'
            ],
            bathrooms: [
                '5'
            ],
            gasClientNumber: '2342423423',
            surfaceM2: '234324223',
            orientation: '42424242',
            realState: 'sfsdfdsfdsf',
            metro: '424',
            availableDate: '2020-10-30T00:00:00.000Z',
            moreFeatures: 'adssadasdadasd',
            images: [
                '=1cc1d884-01a0-4f2e-bbe9-828af370614d',
                '&token=8a429e5b-352e-4b21-8ab1-2c28f1fe142f'
            ],
            customerId: 1,
            customer: {
                id: 1,
                name: 'Yamil Ferreira',
                country: 'usa',
                taxInternationalIdentifier: '306869574',
                address: 'Eaddress',
                legalRepresentative: 'Yamil Ferreira',
                email: 'skajskaj@gmail.com',
                primaryPhone: '212132',
                secondaryPhone: '43434',
                areas: [],
                configurationId: 1
            },
            ownerships_owners: [
                {
                    id: 3,
                    ownershipId: 3,
                    ownerId: 8,
                    owner: {
                        id: 8,
                        business: 'ASDSDd',
                        position: 'aasdsad',
                        comercialAddress: '01010101',
                        admissionDate: '2020-10-02T00:00:00.000Z',
                        fixedAmount: 10,
                        administrationPercent: 10,
                        brokeragePercent: 10,
                        portfolioExecutives: [
                            'In Proccess'
                        ],
                        observations: '10101010',
                        assistantFirstName: 'sdfdsfdsfdsfdsf',
                        assistantLastName: 'dsfdsfdsfsfsd',
                        assistantPhone: '01010101',
                        assistantEmail: 'do.wms.team@gmail.com',
                        userId: 43
                    }
                }
            ]
        }
];

const error: any = {
  code: 'ERROR',
  url: 'localhost:3000/ownerships/'
};

describe('Ownerships Actions', () => {
  it('should return an action for loadOwnerships', () => {
    const action = fromOwnershipsActions.loadOwnerships();
    expect(action.type).toBe(fromOwnershipsActions.OwnershipsActions.loadOwnerships);
  });

  it('should return an action for loadOwnershipsSuccess', () => {
    const payloadOwnerships: Ownership[] = ownerships;
    const action = fromOwnershipsActions.loadOwnershipsSuccess({ ownerships: payloadOwnerships});
    expect(action.type).toBe(fromOwnershipsActions.OwnershipsActions.loadOwnershipsSuccess);
  });

  it('should return an action for loadOwnershipsFailure', () => {
    const payloadError: any = error;
    const action = fromOwnershipsActions.loadOwnershipsFailure({ error: payloadError});
    expect(action.type).toBe(fromOwnershipsActions.OwnershipsActions.loadOwnershipsFailure);
  });

  it('should return an action for loadOwnership', () => {
    const OwnershipId = ownerships[0].id;
    const action = fromOwnershipsActions.loadOwnership({id: OwnershipId});
    expect(action.type).toBe(fromOwnershipsActions.OwnershipsActions.loadOwnership);
  });

  it('should return an action for loadOwnershipSuccess', () => {
    const payloadOwnership: Ownership = ownerships[0];
    const action = fromOwnershipsActions.loadOwnershipSuccess({ ownership: payloadOwnership});
    expect(action.type).toBe(fromOwnershipsActions.OwnershipsActions.loadOwnershipSuccess);
  });

  it('should return an action for loadOwnershipFailure', () => {
    const payloadError: any = error;
    const action = fromOwnershipsActions.loadOwnershipFailure({ error: payloadError});
    expect(action.type).toBe(fromOwnershipsActions.OwnershipsActions.loadOwnershipFailure);
  });

  it('should return an action for createOwnership', () => {
    const newOwnership = ownerships[0];
    const action = fromOwnershipsActions.createOwnership({ownership: newOwnership});
    expect(action.type).toBe(fromOwnershipsActions.OwnershipsActions.createOwnership);
  });

  it('should return an action for createOwnershipSuccess', () => {
    const newOwnership = ownerships[0];
    const action = fromOwnershipsActions.createOwnershipSuccess({ ownership: newOwnership});
    expect(action.type).toBe(fromOwnershipsActions.OwnershipsActions.createOwnershipSuccess);
  });

  it('should return an action for createOwnershipFailure', () => {
    const payloadError: any = error;
    const action = fromOwnershipsActions.createOwnershipFailure({ error: payloadError});
    expect(action.type).toBe(fromOwnershipsActions.OwnershipsActions.createOwnershipFailure);
  });

  it('should return an action for updateOwnership', () => {
    const updatedOwnership = ownerships[0];
    const action = fromOwnershipsActions.updateOwnership({ownership: updatedOwnership});
    expect(action.type).toBe(fromOwnershipsActions.OwnershipsActions.updateOwnership);
  });

  it('should return an action for updateOwnershipSuccess', () => {
    const updatedOwnership = ownerships[0];
    const action = fromOwnershipsActions.updateOwnershipSuccess({ ownership: updatedOwnership});
    expect(action.type).toBe(fromOwnershipsActions.OwnershipsActions.updateOwnershipSuccess);
  });

  it('should return an action for updateOwnershipFailure', () => {
    const payloadError: any = error;
    const action = fromOwnershipsActions.updateOwnershipFailure({ error: payloadError});
    expect(action.type).toBe(fromOwnershipsActions.OwnershipsActions.updateOwnershipFailure);
  });

  it('should return an action for deleteOwnership', () => {
    const OwnershipId = ownerships[0].id;
    const action = fromOwnershipsActions.deleteOwnership({id: OwnershipId});
    expect(action.type).toBe(fromOwnershipsActions.OwnershipsActions.deleteOwnership);
  });

  it('should return an action for deleteOwnershipSuccess', () => {
    const OwnershipId = ownerships[0].id;
    const action = fromOwnershipsActions.deleteOwnershipSuccess({ id: OwnershipId});
    expect(action.type).toBe(fromOwnershipsActions.OwnershipsActions.deleteOwnershipSuccess);
  });

  it('should return an action for deleteOwnershipFailure', () => {
    const payloadError: any = error;
    const action = fromOwnershipsActions.deleteOwnershipFailure({ error: payloadError});
    expect(action.type).toBe(fromOwnershipsActions.OwnershipsActions.deleteOwnershipFailure);
  });

});
