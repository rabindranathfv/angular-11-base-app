import * as fromUserReducer from './user.reducer';
import * as fromUsersActions from './../action/user.actions';
import { User } from 'src/app/interfaces/user/user';

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

describe('Users Reducer', () => {
  describe('should run all reducers with actions', () => {
    it('should load initial user state', () => {
      const action = {} as any;

      const result = fromUserReducer.UserAppReducer(fromUserReducer.initialState, action);

      expect(result).toBe(fromUserReducer.initialState);
    });

    it('should apply reducer loadUsers into state', (done) => {
      const actionInitial = {} as any;
      const initialUserState = fromUserReducer.UserAppReducer(fromUserReducer.initialState, actionInitial);

      const newAction = fromUsersActions.loadUsers();
      const newState = fromUserReducer.userReducer(initialUserState, newAction);

      expect(newState).toEqual(initialUserState);
      done();
    });

    it('should apply reducer loadUsersSuccess into state', (done) => {
      const actionInitial = {} as any;
      const initialUserState = fromUserReducer.UserAppReducer(fromUserReducer.initialState, actionInitial);

      const payloadUsers: User[] = users;
      const newAction = fromUsersActions.loadUsersSuccess({ users: payloadUsers});
      const newState = fromUserReducer.userReducer(initialUserState, newAction);

      expect(Object.values(newState.entities)).toEqual(payloadUsers);
      done();
    });

    it('should apply reducer loadUsersFailure into state', () => {
      const actionInitial = {} as any;
      const initialUserState = fromUserReducer.UserAppReducer(fromUserReducer.initialState, actionInitial);

      const payloadError: any = new Error('http error');
      const newAction = fromUsersActions.loadUsersFailure({ error: payloadError});
      const newState = fromUserReducer.userReducer(initialUserState, newAction);

      expect(newState.error).toBe(payloadError);
    });

    it('should apply reducer loadUser into state', (done) => {
      const actionInitial = {} as any;
      const initialUserState = fromUserReducer.UserAppReducer(fromUserReducer.initialState, actionInitial);

      const newAction = fromUsersActions.loadUser({id: 2});
      const newState = fromUserReducer.userReducer(initialUserState, newAction);

      expect(newState).toEqual(initialUserState);
      done();
    });

    it('should apply reducer loadUserSuccess into state', (done) => {
      const actionInitial = {} as any;
      const initialUserState = fromUserReducer.UserAppReducer(fromUserReducer.initialState, actionInitial);

      const payloadUser: User = users[0];
      const newAction = fromUsersActions.loadUserSuccess({ user: payloadUser});
      const newState = fromUserReducer.userReducer(initialUserState, newAction);
      expect(Object.values(newState.entities)[0]).toEqual(payloadUser);
      done();
    });

    it('should apply reducer loadUserFailure into state', () => {
      const actionInitial = {} as any;
      const initialUserState = fromUserReducer.UserAppReducer(fromUserReducer.initialState, actionInitial);

      const payloadError: any = new Error('http error');
      const newAction = fromUsersActions.loadUserFailure({ error: payloadError});
      const newState = fromUserReducer.userReducer(initialUserState, newAction);

      expect(newState.error).toBe(payloadError);
    });

    it('should apply reducer createUser into state', (done) => {
      const actionInitial = {} as any;
      const initialUserState = fromUserReducer.UserAppReducer(fromUserReducer.initialState, actionInitial);
      const payloadUser: User = users[0];
      const newAction = fromUsersActions.createUser({user: payloadUser});
      const newState = fromUserReducer.userReducer(initialUserState, newAction);

      expect(newState).toEqual({...initialUserState, error: null});
      done();
    });

    it('should apply reducer createUserSuccess into state', (done) => {
      const actionInitial = {} as any;
      const initialUserState = fromUserReducer.UserAppReducer(fromUserReducer.initialState, actionInitial);

      const payloadUser: User = users[0];
      const newAction = fromUsersActions.createUserSuccess({ user: payloadUser});
      const newState = fromUserReducer.userReducer(initialUserState, newAction);
      expect(Object.values(newState.entities)[0]).toEqual(payloadUser);
      done();
    });

    it('should apply reducer createUserFailure into state', () => {
      const actionInitial = {} as any;
      const initialUserState = fromUserReducer.UserAppReducer(fromUserReducer.initialState, actionInitial);

      const payloadError: any = new Error('http error');
      const newAction = fromUsersActions.createUserFailure({ error: payloadError});
      const newState = fromUserReducer.userReducer(initialUserState, newAction);

      expect(newState.error).toBe(payloadError);
    });

    it('should apply reducer updateUser into state', (done) => {
      const actionInitial = {} as any;
      const initialUserState = fromUserReducer.UserAppReducer(fromUserReducer.initialState, actionInitial);
      const payloadUser: User = users[0];
      const newAction = fromUsersActions.updateUser({user: payloadUser});
      const newState = fromUserReducer.userReducer(initialUserState, newAction);

      expect(newState).toEqual({...initialUserState, error: null});
      done();
    });

    it('should apply reducer updateUserSuccess into state', (done) => {
      const actionInitial = {} as any;
      const initialUserState = fromUserReducer.UserAppReducer(fromUserReducer.initialState, actionInitial);

      const payloadUser: User = users[0];
      const secondaryAction = fromUsersActions.createUserSuccess({ user: payloadUser});
      const secondaryState = fromUserReducer.userReducer(initialUserState, secondaryAction);

      const editedUser: User = {...payloadUser, firstName: 'EditedName'};
      const newAction = fromUsersActions.updateUserSuccess({ user: editedUser});
      const newState = fromUserReducer.userReducer(secondaryState, newAction);

      expect(Object.values(newState.entities)[0]).toEqual(editedUser);
      done();
    });

    it('should apply reducer updateUserFailure into state', () => {
      const actionInitial = {} as any;
      const initialUserState = fromUserReducer.UserAppReducer(fromUserReducer.initialState, actionInitial);

      const payloadError: any = new Error('http error');
      const newAction = fromUsersActions.updateUserFailure({ error: payloadError});
      const newState = fromUserReducer.userReducer(initialUserState, newAction);

      expect(newState.error).toBe(payloadError);
    });

    it('should apply reducer deleteUser into state', (done) => {
      const actionInitial = {} as any;
      const initialUserState = fromUserReducer.UserAppReducer(fromUserReducer.initialState, actionInitial);

      const userId = users[0].id;
      const newAction = fromUsersActions.deleteUser({id: userId});
      const newState = fromUserReducer.userReducer(initialUserState, newAction);

      expect(newState).toEqual(initialUserState);
      done();
    });

    it('should apply reducer deleteUserSuccess into state', (done) => {
      const actionInitial = {} as any;
      const initialUserState = fromUserReducer.UserAppReducer(fromUserReducer.initialState, actionInitial);

      const payloadUser: User = users[0];
      const secondaryAction = fromUsersActions.createUserSuccess({ user: payloadUser});
      const secondaryState = fromUserReducer.userReducer(initialUserState, secondaryAction);

      const newAction = fromUsersActions.deleteUserSuccess({id: payloadUser.id});
      const newState = fromUserReducer.userReducer(secondaryState, newAction);

      expect(Object.values(newState.entities)).toEqual([]);
      done();
    });

    it('should apply reducer deleteUserFailure into state', () => {
      const actionInitial = {} as any;
      const initialUserState = fromUserReducer.UserAppReducer(fromUserReducer.initialState, actionInitial);

      const payloadError: any = new Error('http error');
      const newAction = fromUsersActions.deleteUserFailure({ error: payloadError});
      const newState = fromUserReducer.userReducer(initialUserState, newAction);

      expect(newState.error).toBe(payloadError);
    });

  });
});
