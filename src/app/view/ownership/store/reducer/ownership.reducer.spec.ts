import * as fromOwnershipReducer from './ownership.reducer';
import * as fromOwnershipsActions from '../action/ownership.actions';
import { Ownership } from 'src/app/interfaces/ownership/ownership.interface';

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
                'token=1cc1d884-01a0-4f2e-bbe9-828af370614d',
                '=8a429e5b-352e-4b21-8ab1-2c28f1fe142f'
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

describe('Ownerships Reducer', () => {
  describe('should run all reducers with actions', () => {
    it('should load initial ownership state', () => {
      const action = {} as any;

      const result = fromOwnershipReducer.OwnershipAppReducer(fromOwnershipReducer.initialState, action);

      expect(result).toBe(fromOwnershipReducer.initialState);
    });

    it('should apply reducer loadOwnerships into state', (done) => {
      const actionInitial = {} as any;
      const initialOwnershipState = fromOwnershipReducer.OwnershipAppReducer(fromOwnershipReducer.initialState, actionInitial);

      const newAction = fromOwnershipsActions.loadOwnerships();
      const newState = fromOwnershipReducer.ownershipReducer(initialOwnershipState, newAction);

      expect(newState).toEqual(initialOwnershipState);
      done();
    });

    it('should apply reducer loadOwnershipsSuccess into state', (done) => {
      const actionInitial = {} as any;
      const initialOwnershipState = fromOwnershipReducer.OwnershipAppReducer(fromOwnershipReducer.initialState, actionInitial);

      const payloadOwnerships: Ownership[] = ownerships;
      const newAction = fromOwnershipsActions.loadOwnershipsSuccess({ ownerships: payloadOwnerships});
      const newState = fromOwnershipReducer.ownershipReducer(initialOwnershipState, newAction);
      expect(Object.values(newState.entities)).toEqual(payloadOwnerships);
      done();
    });

    it('should apply reducer loadOwnershipsFailure into state', () => {
      const actionInitial = {} as any;
      const initialOwnershipState = fromOwnershipReducer.OwnershipAppReducer(fromOwnershipReducer.initialState, actionInitial);

      const payloadError: any = new Error('http error');
      const newAction = fromOwnershipsActions.loadOwnershipsFailure({ error: payloadError});
      const newState = fromOwnershipReducer.ownershipReducer(initialOwnershipState, newAction);

      expect(newState.error).toBe(payloadError);
    });

    it('should apply reducer loadOwnership into state', (done) => {
      const actionInitial = {} as any;
      const initialOwnershipState = fromOwnershipReducer.OwnershipAppReducer(fromOwnershipReducer.initialState, actionInitial);

      const newAction = fromOwnershipsActions.loadOwnership({id: 2});
      const newState = fromOwnershipReducer.ownershipReducer(initialOwnershipState, newAction);

      expect(newState).toEqual(initialOwnershipState);
      done();
    });

    it('should apply reducer loadOwnershipSuccess into state', (done) => {
      const actionInitial = {} as any;
      const initialOwnershipState = fromOwnershipReducer.OwnershipAppReducer(fromOwnershipReducer.initialState, actionInitial);

      const payloadOwnership: Ownership = ownerships[0];
      const newAction = fromOwnershipsActions.loadOwnershipSuccess({ ownership: payloadOwnership});
      const newState = fromOwnershipReducer.ownershipReducer(initialOwnershipState, newAction);
      expect(Object.values(newState.entities)[0]).toEqual(payloadOwnership);
      done();
    });

    it('should apply reducer loadOwnershipFailure into state', () => {
      const actionInitial = {} as any;
      const initialOwnershipState = fromOwnershipReducer.OwnershipAppReducer(fromOwnershipReducer.initialState, actionInitial);

      const payloadError: any = new Error('http error');
      const newAction = fromOwnershipsActions.loadOwnershipFailure({ error: payloadError});
      const newState = fromOwnershipReducer.ownershipReducer(initialOwnershipState, newAction);

      expect(newState.error).toBe(payloadError);
    });

    it('should apply reducer createOwnership into state', (done) => {
      const actionInitial = {} as any;
      const initialOwnershipState = fromOwnershipReducer.OwnershipAppReducer(fromOwnershipReducer.initialState, actionInitial);
      const payloadOwnership: Ownership = ownerships[0];
      const newAction = fromOwnershipsActions.createOwnership({ownership: payloadOwnership});
      const newState = fromOwnershipReducer.ownershipReducer(initialOwnershipState, newAction);

      expect(newState).toEqual({...initialOwnershipState, error: null});
      done();
    });

    it('should apply reducer createOwnershipSuccess into state', (done) => {
      const actionInitial = {} as any;
      const initialOwnershipState = fromOwnershipReducer.OwnershipAppReducer(fromOwnershipReducer.initialState, actionInitial);

      const payloadOwnership: Ownership = ownerships[0];
      const newAction = fromOwnershipsActions.createOwnershipSuccess({ ownership: payloadOwnership});
      const newState = fromOwnershipReducer.ownershipReducer(initialOwnershipState, newAction);
      expect(Object.values(newState.entities)[0]).toEqual(payloadOwnership);
      done();
    });

    it('should apply reducer createOwnershipFailure into state', () => {
      const actionInitial = {} as any;
      const initialOwnershipState = fromOwnershipReducer.OwnershipAppReducer(fromOwnershipReducer.initialState, actionInitial);

      const payloadError: any = new Error('http error');
      const newAction = fromOwnershipsActions.createOwnershipFailure({ error: payloadError});
      const newState = fromOwnershipReducer.ownershipReducer(initialOwnershipState, newAction);

      expect(newState.error).toBe(payloadError);
    });

    it('should apply reducer updateOwnership into state', (done) => {
      const actionInitial = {} as any;
      const initialOwnershipState = fromOwnershipReducer.OwnershipAppReducer(fromOwnershipReducer.initialState, actionInitial);
      const payloadOwnership: Ownership = ownerships[0];
      const newAction = fromOwnershipsActions.updateOwnership({ownership: payloadOwnership});
      const newState = fromOwnershipReducer.ownershipReducer(initialOwnershipState, newAction);

      expect(newState).toEqual({...initialOwnershipState, error: null});
      done();
    });

    it('should apply reducer updateOwnershipSuccess into state', (done) => {
      const actionInitial = {} as any;
      const initialOwnershipState = fromOwnershipReducer.OwnershipAppReducer(fromOwnershipReducer.initialState, actionInitial);

      const payloadOwnership: Ownership = ownerships[0];
      const secondaryAction = fromOwnershipsActions.createOwnershipSuccess({ ownership: payloadOwnership});
      const secondaryState = fromOwnershipReducer.ownershipReducer(initialOwnershipState, secondaryAction);

      const editedOwnership: Ownership = {...payloadOwnership, propertyType: 'Edited'};
      const newAction = fromOwnershipsActions.updateOwnershipSuccess({ ownership: editedOwnership});
      const newState = fromOwnershipReducer.ownershipReducer(secondaryState, newAction);

      expect(Object.values(newState.entities)[0]).toEqual(editedOwnership);
      done();
    });

    it('should apply reducer updateOwnershipFailure into state', () => {
      const actionInitial = {} as any;
      const initialOwnershipState = fromOwnershipReducer.OwnershipAppReducer(fromOwnershipReducer.initialState, actionInitial);

      const payloadError: any = new Error('http error');
      const newAction = fromOwnershipsActions.updateOwnershipFailure({ error: payloadError});
      const newState = fromOwnershipReducer.ownershipReducer(initialOwnershipState, newAction);

      expect(newState.error).toBe(payloadError);
    });

    it('should apply reducer deleteOwnership into state', (done) => {
      const actionInitial = {} as any;
      const initialOwnershipState = fromOwnershipReducer.OwnershipAppReducer(fromOwnershipReducer.initialState, actionInitial);

      const ownershipId = ownerships[0].id;
      const newAction = fromOwnershipsActions.deleteOwnership({id: ownershipId});
      const newState = fromOwnershipReducer.ownershipReducer(initialOwnershipState, newAction);

      expect(newState).toEqual(initialOwnershipState);
      done();
    });

    it('should apply reducer deleteOwnershipSuccess into state', (done) => {
      const actionInitial = {} as any;
      const initialOwnershipState = fromOwnershipReducer.OwnershipAppReducer(fromOwnershipReducer.initialState, actionInitial);

      const payloadOwnership: Ownership = ownerships[0];
      const secondaryAction = fromOwnershipsActions.createOwnershipSuccess({ ownership: payloadOwnership});
      const secondaryState = fromOwnershipReducer.ownershipReducer(initialOwnershipState, secondaryAction);

      const newAction = fromOwnershipsActions.deleteOwnershipSuccess({id: payloadOwnership.id});
      const newState = fromOwnershipReducer.ownershipReducer(secondaryState, newAction);

      expect(Object.values(newState.entities)).toEqual([]);
      done();
    });

    it('should apply reducer deleteOwnershipFailure into state', () => {
      const actionInitial = {} as any;
      const initialOwnershipState = fromOwnershipReducer.OwnershipAppReducer(fromOwnershipReducer.initialState, actionInitial);

      const payloadError: any = new Error('http error');
      const newAction = fromOwnershipsActions.deleteOwnershipFailure({ error: payloadError});
      const newState = fromOwnershipReducer.ownershipReducer(initialOwnershipState, newAction);

      expect(newState.error).toBe(payloadError);
    });

  });
});
