import * as fromUserSelectors from './user.selectors';
import { User } from 'src/app/interfaces/user/user';

const createUserAppState = ({
  users = {
      1: {
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
      2: {
        id: 20,
        firstName : 'Geraldo',
        lastName: 'Villarroel',
        dni: '65646464',
        dniFile: 'https://www.test.com',
        street: 'calle',
        number: '333',
        department: '122',
        email: 'osvacolijim@gmail.com',
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
    }
  }
} = {} ) => ({
  users: {
    ids : [1, 2],
    entities: users,
    error: undefined
  }
});

describe('User Selectors', () => {
  it('should select all users from Store', () => {
    const fakeStore = createUserAppState();
    const selector = fromUserSelectors.selectUsers(fakeStore);
    const users: User [] = Object.values(fakeStore.users.entities);
    expect(selector).toEqual(users);
  });

  it('should select user from Store', () => {
    const fakeStore = createUserAppState();
    const selector = fromUserSelectors.selectUser(fakeStore, {id: 1});
    const user: User = Object.values(fakeStore.users.entities)[0];
    expect(selector).toEqual(user);
  });

});
