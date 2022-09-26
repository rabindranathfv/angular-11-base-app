import * as fromOwnershipSelectors from './ownership.selectors';
import { Ownership } from 'src/app/interfaces/ownership/ownership.interface';

const createOwnershipAppState = ({
  ownerships = {
      1: {
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
              'f60e-be86-4356-a1cb-7234bf009a0f'
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
      2:  {
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
            'a&token=1cc1d884-01a0-4f2e-bbe9-828af370614d',
            'n=8a429e5b-352e-4b21-8ab1-2c28f1fe142f'
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
  }
} = {} ) => ({
  ownerships: {
    ids : [1, 2],
    entities: ownerships,
    error: {error: false , message: 'OK'}
  }
});

describe('Ownership Selectors', () => {
  it('should select all ownerships from Store', () => {
    const fakeStore = createOwnershipAppState();
    const selector = fromOwnershipSelectors.selectOwnerships(fakeStore);
    const ownerships: Ownership [] = Object.values(fakeStore.ownerships.entities);
    expect(selector).toEqual(ownerships);
  });

  it('should select ownership from Store', () => {
    const fakeStore = createOwnershipAppState();
    const selector = fromOwnershipSelectors.selectOwnership(fakeStore, {id: 1});
    const ownership: Ownership = Object.values(fakeStore.ownerships.entities)[0];
    expect(selector).toEqual(ownership);
  });

  it('should select error from Store', () => {
    const fakeStore = createOwnershipAppState();
    const selector = fromOwnershipSelectors.getError(fakeStore);
    expect(selector).toEqual(fakeStore.ownerships.error);
  });

});
