import * as fromOwnerReducer from './owner.reducer';
import * as fromOwnersActions from './../action/owner.actions';
import { Owner } from 'src/app/interfaces/owner/owner.interface';

const owners: Owner[] = [
  {
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
    assistantEmail: 'dfgdfg@hgjgj.com',
    assistantFirstName: 'dfgfdg',
    assistantLastName: 'dfgdfgfd',
    assistantPhone: '456465465',
    userId: 7,
    user : {
      id: 7,
      firstName : 'Geraldo',
      lastName: 'Villarroel',
      dni: '65646464',
      dniFile: 'https://www.test.com',
      street: 'calle',
      number: '333',
      department: '122',
      email: 'gvillarroel9@gmail.com',
      phone: '23232',
      mobile: '343434',
      business: 'H',
      position: 'dsd',
      comercialAddress: '2sdsd',
      anotherContactFullName: 'sdsd',
      anotherContactPhone: '232323',
      anotherContactEmail: 'sdsds@gmail.com',
      observations: 'sds',
      image: 'https://www.test.com',
      isActive: true,
      customerId: 1,
      roleId: 1,
      role: 'Admin',
      buttons: ''
    },
    account: {
      accountNumber: '306869574',
      accountType: '306869574',
      bank: '306869574',
      id: 2,
      ownerId: 5,
      titularFirstName: 'adsad',
      titularLastName: 'asdafda',
      titularTaxInternationalIdentifier: '306869574'
    }
  },
  {
    id: 80,
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
    assistantEmail: 'dfgdfg@hgjgj.com',
    assistantFirstName: 'dfgfdg',
    assistantLastName: 'dfgdfgfd',
    assistantPhone: '456465465',
    userId: 7,
    user : {
      id: 7555,
      firstName : 'Geraldo',
      lastName: 'Villarroel',
      dni: '65646464',
      dniFile: 'https://www.test.com',
      street: 'calle',
      number: '333',
      department: '122',
      email: '555555@gmail.com',
      phone: '23232',
      mobile: '343434',
      business: 'H',
      position: 'dsd',
      comercialAddress: '2sdsd',
      anotherContactFullName: 'sdsd',
      anotherContactPhone: '232323',
      anotherContactEmail: 'sdsds@gmail.com',
      observations: 'sds',
      image: 'https://www.test.com',
      isActive: true,
      customerId: 1,
      roleId: 1,
      role: 'Admin',
      buttons: ''
    },
    account: {
      accountNumber: '306869574',
      accountType: '306869574',
      bank: '306869574',
      id: 45,
      ownerId: 80,
      titularFirstName: 'adsad',
      titularLastName: 'asdafda',
      titularTaxInternationalIdentifier: '306869574'
    }
  }
];

describe('Owners Reducer', () => {
  describe('should run all reducers with actions', () => {
    it('should load initial owner state', () => {
      const action = {} as any;

      const result = fromOwnerReducer.OwnerAppReducer(fromOwnerReducer.initialState, action);

      expect(result).toBe(fromOwnerReducer.initialState);
    });

    it('should apply reducer loadOwners into state', (done) => {
      const actionInitial = {} as any;
      const initialOwnerState = fromOwnerReducer.OwnerAppReducer(fromOwnerReducer.initialState, actionInitial);

      const newAction = fromOwnersActions.loadOwners();
      const newState = fromOwnerReducer.ownerReducer(initialOwnerState, newAction);

      expect(newState).toEqual(initialOwnerState);
      done();
    });

    it('should apply reducer loadOwnersSuccess into state', (done) => {
      const actionInitial = {} as any;
      const initialOwnerState = fromOwnerReducer.OwnerAppReducer(fromOwnerReducer.initialState, actionInitial);

      const payloadOwners: Owner[] = owners;
      const newAction = fromOwnersActions.loadOwnersSuccess({ owners: payloadOwners});
      const newState = fromOwnerReducer.ownerReducer(initialOwnerState, newAction);
      expect(Object.values(newState.entities)).toEqual(payloadOwners);
      done();
    });

    it('should apply reducer loadOwnersFailure into state', () => {
      const actionInitial = {} as any;
      const initialOwnerState = fromOwnerReducer.OwnerAppReducer(fromOwnerReducer.initialState, actionInitial);

      const payloadError: any = new Error('http error');
      const newAction = fromOwnersActions.loadOwnersFailure({ error: payloadError});
      const newState = fromOwnerReducer.ownerReducer(initialOwnerState, newAction);

      expect(newState.error).toBe(payloadError);
    });

    it('should apply reducer loadOwner into state', (done) => {
      const actionInitial = {} as any;
      const initialOwnerState = fromOwnerReducer.OwnerAppReducer(fromOwnerReducer.initialState, actionInitial);

      const newAction = fromOwnersActions.loadOwner({id: 2});
      const newState = fromOwnerReducer.ownerReducer(initialOwnerState, newAction);

      expect(newState).toEqual(initialOwnerState);
      done();
    });

    it('should apply reducer loadOwnerSuccess into state', (done) => {
      const actionInitial = {} as any;
      const initialOwnerState = fromOwnerReducer.OwnerAppReducer(fromOwnerReducer.initialState, actionInitial);

      const payloadOwner: Owner = owners[0];
      const newAction = fromOwnersActions.loadOwnerSuccess({ owner: payloadOwner});
      const newState = fromOwnerReducer.ownerReducer(initialOwnerState, newAction);
      expect(Object.values(newState.entities)[0]).toEqual(payloadOwner);
      done();
    });

    it('should apply reducer loadOwnerFailure into state', () => {
      const actionInitial = {} as any;
      const initialOwnerState = fromOwnerReducer.OwnerAppReducer(fromOwnerReducer.initialState, actionInitial);

      const payloadError: any = new Error('http error');
      const newAction = fromOwnersActions.loadOwnerFailure({ error: payloadError});
      const newState = fromOwnerReducer.ownerReducer(initialOwnerState, newAction);

      expect(newState.error).toBe(payloadError);
    });

    it('should apply reducer createOwner into state', (done) => {
      const actionInitial = {} as any;
      const initialOwnerState = fromOwnerReducer.OwnerAppReducer(fromOwnerReducer.initialState, actionInitial);
      const payloadOwner: Owner = owners[0];
      const newAction = fromOwnersActions.createOwner({owner: payloadOwner});
      const newState = fromOwnerReducer.ownerReducer(initialOwnerState, newAction);

      expect(newState).toEqual({...initialOwnerState, error: null});
      done();
    });

    it('should apply reducer createOwnerSuccess into state', (done) => {
      const actionInitial = {} as any;
      const initialOwnerState = fromOwnerReducer.OwnerAppReducer(fromOwnerReducer.initialState, actionInitial);

      const payloadOwner: Owner = owners[0];
      const newAction = fromOwnersActions.createOwnerSuccess({ owner: payloadOwner});
      const newState = fromOwnerReducer.ownerReducer(initialOwnerState, newAction);
      expect(Object.values(newState.entities)[0]).toEqual(payloadOwner);
      done();
    });

    it('should apply reducer createOwnerFailure into state', () => {
      const actionInitial = {} as any;
      const initialOwnerState = fromOwnerReducer.OwnerAppReducer(fromOwnerReducer.initialState, actionInitial);

      const payloadError: any = new Error('http error');
      const newAction = fromOwnersActions.createOwnerFailure({ error: payloadError});
      const newState = fromOwnerReducer.ownerReducer(initialOwnerState, newAction);

      expect(newState.error).toBe(payloadError);
    });

    it('should apply reducer updateOwner into state', (done) => {
      const actionInitial = {} as any;
      const initialOwnerState = fromOwnerReducer.OwnerAppReducer(fromOwnerReducer.initialState, actionInitial);
      const payloadOwner: Owner = owners[0];
      const newAction = fromOwnersActions.updateOwner({owner: payloadOwner});
      const newState = fromOwnerReducer.ownerReducer(initialOwnerState, newAction);

      expect(newState).toEqual({...initialOwnerState, error: null});
      done();
    });

    it('should apply reducer updateOwnerSuccess into state', (done) => {
      const actionInitial = {} as any;
      const initialOwnerState = fromOwnerReducer.OwnerAppReducer(fromOwnerReducer.initialState, actionInitial);

      const payloadOwner: Owner = owners[0];
      const secondaryAction = fromOwnersActions.createOwnerSuccess({ owner: payloadOwner});
      const secondaryState = fromOwnerReducer.ownerReducer(initialOwnerState, secondaryAction);

      const editedOwner: Owner = {...payloadOwner, business: 'EditedName'};
      const newAction = fromOwnersActions.updateOwnerSuccess({ owner: editedOwner});
      const newState = fromOwnerReducer.ownerReducer(secondaryState, newAction);

      expect(Object.values(newState.entities)[0]).toEqual(editedOwner);
      done();
    });

    it('should apply reducer updateOwnerFailure into state', () => {
      const actionInitial = {} as any;
      const initialOwnerState = fromOwnerReducer.OwnerAppReducer(fromOwnerReducer.initialState, actionInitial);

      const payloadError: any = new Error('http error');
      const newAction = fromOwnersActions.updateOwnerFailure({ error: payloadError});
      const newState = fromOwnerReducer.ownerReducer(initialOwnerState, newAction);

      expect(newState.error).toBe(payloadError);
    });

    it('should apply reducer deleteOwner into state', (done) => {
      const actionInitial = {} as any;
      const initialOwnerState = fromOwnerReducer.OwnerAppReducer(fromOwnerReducer.initialState, actionInitial);

      const ownerId = owners[0].id;
      const newAction = fromOwnersActions.deleteOwner({id: ownerId});
      const newState = fromOwnerReducer.ownerReducer(initialOwnerState, newAction);

      expect(newState).toEqual(initialOwnerState);
      done();
    });

    it('should apply reducer deleteOwnerSuccess into state', (done) => {
      const actionInitial = {} as any;
      const initialOwnerState = fromOwnerReducer.OwnerAppReducer(fromOwnerReducer.initialState, actionInitial);

      const payloadOwner: Owner = owners[0];
      const secondaryAction = fromOwnersActions.createOwnerSuccess({ owner: payloadOwner});
      const secondaryState = fromOwnerReducer.ownerReducer(initialOwnerState, secondaryAction);

      const newAction = fromOwnersActions.deleteOwnerSuccess({id: payloadOwner.id});
      const newState = fromOwnerReducer.ownerReducer(secondaryState, newAction);

      expect(Object.values(newState.entities)).toEqual([]);
      done();
    });

    it('should apply reducer deleteOwnerFailure into state', () => {
      const actionInitial = {} as any;
      const initialOwnerState = fromOwnerReducer.OwnerAppReducer(fromOwnerReducer.initialState, actionInitial);

      const payloadError: any = new Error('http error');
      const newAction = fromOwnersActions.deleteOwnerFailure({ error: payloadError});
      const newState = fromOwnerReducer.ownerReducer(initialOwnerState, newAction);

      expect(newState.error).toBe(payloadError);
    });

  });
});
