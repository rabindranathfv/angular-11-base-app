import { User } from 'src/app/interfaces/user/user';
import * as fromUsersActions from './user.actions';

const users: User[] = [
  {
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
  {
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
];

const error: any = {
  code: 'ERROR',
  url: 'localhost:3000/users/'
};

describe('Users Actions', () => {
  it('should return an action for loadUsers', () => {
    const action = fromUsersActions.loadUsers();
    expect(action.type).toBe(fromUsersActions.UsersActions.loadUsers);
  });

  it('should return an action for loadUsersSuccess', () => {
    const payloadUsers: User[] = users;
    const action = fromUsersActions.loadUsersSuccess({ users: payloadUsers});
    expect(action.type).toBe(fromUsersActions.UsersActions.loadUsersSuccess);
  });

  it('should return an action for loadUsersFailure', () => {
    const payloadError: any = error;
    const action = fromUsersActions.loadUsersFailure({ error: payloadError});
    expect(action.type).toBe(fromUsersActions.UsersActions.loadUsersFailure);
  });

  it('should return an action for loadUser', () => {
    const UserId = users[0].id;
    const action = fromUsersActions.loadUser({id: UserId});
    expect(action.type).toBe(fromUsersActions.UsersActions.loadUser);
  });

  it('should return an action for loadUserSuccess', () => {
    const payloadUser: User = users[0];
    const action = fromUsersActions.loadUserSuccess({ user: payloadUser});
    expect(action.type).toBe(fromUsersActions.UsersActions.loadUserSuccess);
  });

  it('should return an action for loadUserFailure', () => {
    const payloadError: any = error;
    const action = fromUsersActions.loadUserFailure({ error: payloadError});
    expect(action.type).toBe(fromUsersActions.UsersActions.loadUserFailure);
  });

  it('should return an action for createUser', () => {
    const newUser = users[0];
    const action = fromUsersActions.createUser({user: newUser});
    expect(action.type).toBe(fromUsersActions.UsersActions.createUser);
  });

  it('should return an action for createUserSuccess', () => {
    const newUser = users[0];
    const action = fromUsersActions.createUserSuccess({ user: newUser});
    expect(action.type).toBe(fromUsersActions.UsersActions.createUserSuccess);
  });

  it('should return an action for createUserFailure', () => {
    const payloadError: any = error;
    const action = fromUsersActions.createUserFailure({ error: payloadError});
    expect(action.type).toBe(fromUsersActions.UsersActions.createUserFailure);
  });

  it('should return an action for updateUser', () => {
    const updatedUser = users[0];
    const action = fromUsersActions.updateUser({user: updatedUser});
    expect(action.type).toBe(fromUsersActions.UsersActions.updateUser);
  });

  it('should return an action for updateUserSuccess', () => {
    const updatedUser = users[0];
    const action = fromUsersActions.updateUserSuccess({ user: updatedUser});
    expect(action.type).toBe(fromUsersActions.UsersActions.updateUserSuccess);
  });

  it('should return an action for updateUserFailure', () => {
    const payloadError: any = error;
    const action = fromUsersActions.updateUserFailure({ error: payloadError});
    expect(action.type).toBe(fromUsersActions.UsersActions.updateUserFailure);
  });

  it('should return an action for deleteUser', () => {
    const UserId = users[0].id;
    const action = fromUsersActions.deleteUser({id: UserId});
    expect(action.type).toBe(fromUsersActions.UsersActions.deleteUser);
  });

  it('should return an action for deleteUserSuccess', () => {
    const UserId = users[0].id;
    const action = fromUsersActions.deleteUserSuccess({ id: UserId});
    expect(action.type).toBe(fromUsersActions.UsersActions.deleteUserSuccess);
  });

  it('should return an action for deleteUserFailure', () => {
    const payloadError: any = error;
    const action = fromUsersActions.deleteUserFailure({ error: payloadError});
    expect(action.type).toBe(fromUsersActions.UsersActions.deleteUserFailure);
  });

});
