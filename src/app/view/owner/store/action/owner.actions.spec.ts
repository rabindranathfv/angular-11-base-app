import { Account } from 'src/app/interfaces/account/account';
import { Owner } from 'src/app/interfaces/owner/owner.interface';
import * as fromOwnersActions from './owner.actions';

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
      ownerId: 55,
      titularFirstName: 'adsad',
      titularLastName: 'asdafda',
      titularTaxInternationalIdentifier: '306869574'
    }
  }
];

const error: any = {
  code: 'ERROR',
  url: 'localhost:3000/owners/'
};

describe('Owners Actions', () => {
  it('should return an action for loadOwners', () => {
    const action = fromOwnersActions.loadOwners();
    expect(action.type).toBe(fromOwnersActions.OwnersActions.loadOwners);
  });

  it('should return an action for loadOwnersSuccess', () => {
    const payloadOwners: Owner[] = owners;
    const action = fromOwnersActions.loadOwnersSuccess({ owners: payloadOwners});
    expect(action.type).toBe(fromOwnersActions.OwnersActions.loadOwnersSuccess);
  });

  it('should return an action for loadOwnersFailure', () => {
    const payloadError: any = error;
    const action = fromOwnersActions.loadOwnersFailure({ error: payloadError});
    expect(action.type).toBe(fromOwnersActions.OwnersActions.loadOwnersFailure);
  });

  it('should return an action for loadOwner', () => {
    const OwnerId = owners[0].id;
    const action = fromOwnersActions.loadOwner({id: OwnerId});
    expect(action.type).toBe(fromOwnersActions.OwnersActions.loadOwner);
  });

  it('should return an action for loadOwnerSuccess', () => {
    const payloadOwner: Owner = owners[0];
    const action = fromOwnersActions.loadOwnerSuccess({ owner: payloadOwner});
    expect(action.type).toBe(fromOwnersActions.OwnersActions.loadOwnerSuccess);
  });

  it('should return an action for loadOwnerFailure', () => {
    const payloadError: any = error;
    const action = fromOwnersActions.loadOwnerFailure({ error: payloadError});
    expect(action.type).toBe(fromOwnersActions.OwnersActions.loadOwnerFailure);
  });

  it('should return an action for createOwner', () => {
    const newOwner = owners[0];
    const action = fromOwnersActions.createOwner({owner: newOwner});
    expect(action.type).toBe(fromOwnersActions.OwnersActions.createOwner);
  });

  it('should return an action for createOwnerSuccess', () => {
    const newOwner = owners[0];
    const action = fromOwnersActions.createOwnerSuccess({ owner: newOwner});
    expect(action.type).toBe(fromOwnersActions.OwnersActions.createOwnerSuccess);
  });

  it('should return an action for createOwnerFailure', () => {
    const payloadError: any = error;
    const action = fromOwnersActions.createOwnerFailure({ error: payloadError});
    expect(action.type).toBe(fromOwnersActions.OwnersActions.createOwnerFailure);
  });

  it('should return an action for updateOwner', () => {
    const updatedOwner = owners[0];
    const action = fromOwnersActions.updateOwner({owner: updatedOwner});
    expect(action.type).toBe(fromOwnersActions.OwnersActions.updateOwner);
  });

  it('should return an action for updateOwnerSuccess', () => {
    const updatedOwner = owners[0];
    const action = fromOwnersActions.updateOwnerSuccess({ owner: updatedOwner});
    expect(action.type).toBe(fromOwnersActions.OwnersActions.updateOwnerSuccess);
  });

  it('should return an action for updateOwnerFailure', () => {
    const payloadError: any = error;
    const action = fromOwnersActions.updateOwnerFailure({ error: payloadError});
    expect(action.type).toBe(fromOwnersActions.OwnersActions.updateOwnerFailure);
  });

  it('should return an action for deleteOwner', () => {
    const OwnerId = owners[0].id;
    const action = fromOwnersActions.deleteOwner({id: OwnerId});
    expect(action.type).toBe(fromOwnersActions.OwnersActions.deleteOwner);
  });

  it('should return an action for deleteOwnerSuccess', () => {
    const OwnerId = owners[0].id;
    const action = fromOwnersActions.deleteOwnerSuccess({ id: OwnerId});
    expect(action.type).toBe(fromOwnersActions.OwnersActions.deleteOwnerSuccess);
  });

  it('should return an action for deleteOwnerFailure', () => {
    const payloadError: any = error;
    const action = fromOwnersActions.deleteOwnerFailure({ error: payloadError});
    expect(action.type).toBe(fromOwnersActions.OwnersActions.deleteOwnerFailure);
  });

});
