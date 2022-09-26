import * as fromOwnerSelectors from './owner.selectors';
import { Owner } from 'src/app/interfaces/owner/owner.interface';

const createOwnerAppState = ({
  owners = {
      1: {
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
      2: {
        id: 50,
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
          id: 20,
          ownerId: 50,
          titularFirstName: 'adsad',
          titularLastName: 'asdafda',
          titularTaxInternationalIdentifier: '306869574'
        }
      }
  }
} = {} ) => ({
  owners: {
    ids : [1, 2],
    entities: owners,
    error: {error: false , message: 'OK'}
  }
});

describe('Owner Selectors', () => {
  it('should select all owners from Store', () => {
    const fakeStore = createOwnerAppState();
    const selector = fromOwnerSelectors.selectOwners(fakeStore);
    const owners: Owner [] = Object.values(fakeStore.owners.entities);
    expect(selector).toEqual(owners);
  });

  it('should select owner from Store', () => {
    const fakeStore = createOwnerAppState();
    const selector = fromOwnerSelectors.selectOwner(fakeStore, {id: 1});
    const owner: Owner = Object.values(fakeStore.owners.entities)[0];
    expect(selector).toEqual(owner);
  });

  it('should select error from Store', () => {
    const fakeStore = createOwnerAppState();
    const selector = fromOwnerSelectors.getError(fakeStore);
    expect(selector).toEqual(fakeStore.owners.error);
  });

});
