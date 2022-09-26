import * as fromAuthReducer from './auth.reducer';
import { fromAuthActions } from '../actions/auth.actions';
import { User } from 'src/app/interfaces/user/user';

describe('Auth Reducer', () => {

  const user: User = {
    id : 7,
    firstName : 'Geraldo ',
    lastName : 'Villarroel ',
    dni : '65646464 ',
    dniFile : 'https://www.test.com ',
    street : 'calle ',
    number : '333 ',
    department : '122 ',
    email : 'gvillarroel9@gmail.com ',
    phone : '23232 ',
    mobile : '343434 ',
    business : 'H ',
    position : 'dsd ',
    comercialAddress : '2sdsd ',
    anotherContactFullName : 'sdsd ',
    anotherContactPhone : '232323 ',
    anotherContactEmail : 'sdsds@gmail.com ',
    observations : 'sds ',
    image : 'https://www.test.com ',
    isActive : true,
    customerId : 1,
    roleId : 1,
    role : {
      id : 1,
      name : 'Super Admin ',
      customerId : null
    },
    buttons: ''
  };
  const credentials = {email: 'test@test.com', password: '123456789'};
  const token = 'AXxxvzzdsvmm32mnids43mi4mcdsvs';

  describe('an unknown action', () => {

    it('should load intital auth state', () => {
      const action = {} as any;

      const result = fromAuthReducer.authReducer(fromAuthReducer.initialAuthState, action);

      expect(result).toBe(fromAuthReducer.initialAuthState);
    });

    it( 'should apply reducer login into state', (done) => {
      const actionInitial = {} as any;
      const initialAuthState = fromAuthReducer.AuthReducer(fromAuthReducer.initialAuthState, actionInitial);

      const newAction = fromAuthActions.login(credentials);
      const newState = fromAuthReducer.AuthReducer(initialAuthState, newAction);

      expect(newState).toEqual(initialAuthState);
      done();
    });

    it( 'should apply reducer loginSuccess into state', (done) => {
      const actionInitial = {} as any;
      const initialAuthState = fromAuthReducer.AuthReducer(fromAuthReducer.initialAuthState, actionInitial);

      const newAction = fromAuthActions.loginSuccess({ token, user, });
      const newState = fromAuthReducer.AuthReducer(initialAuthState, newAction);

      expect(newState.user).toEqual(user);
      expect(newState.token).toEqual(token);
      expect(newState.loggedIn).toEqual(true);
      done();
    });

    it( 'should apply reducer loginFailure into state', (done) => {
      const actionInitial = {} as any;
      const initialAuthState = fromAuthReducer.AuthReducer(fromAuthReducer.initialAuthState, actionInitial);

      const error: any = new Error('http error');
      const newAction = fromAuthActions.loginFailure({ error });
      const newState = fromAuthReducer.AuthReducer(initialAuthState, newAction);

      expect(newState.error).toEqual(error);
      expect(newState.loggedIn).toEqual(false);
      done();
    });

    it( 'should apply reducer logout into state', (done) => {
      const actionInitial = {} as any;
      const initialAuthState = fromAuthReducer.AuthReducer(fromAuthReducer.initialAuthState, actionInitial);

      const newAction = fromAuthActions.logout();
      const newState = fromAuthReducer.AuthReducer(initialAuthState, newAction);

      expect(newState).toEqual(fromAuthReducer.initialAuthState);
      done();
    });

    it( 'should apply reducer recoverPassword into state', (done) => {
      const actionInitial = {} as any;
      const initialAuthState = fromAuthReducer.AuthReducer(fromAuthReducer.initialAuthState, actionInitial);

      const newAction = fromAuthActions.recoverPassword({email: credentials.email});
      const newState = fromAuthReducer.AuthReducer(initialAuthState, newAction);

      expect(newState).toEqual(initialAuthState);
      done();
    });

    it( 'should apply reducer recoverPasswordSuccess into state', (done) => {
      const actionInitial = {} as any;
      const initialAuthState = fromAuthReducer.AuthReducer(fromAuthReducer.initialAuthState, actionInitial);

      const newAction = fromAuthActions.recoverPasswordSuccess();
      const newState = fromAuthReducer.AuthReducer(initialAuthState, newAction);

      expect(newState.error).toEqual(false);
      done();
    });

    it( 'should apply reducer recoverPasswordFailure into state', (done) => {
      const actionInitial = {} as any;
      const initialAuthState = fromAuthReducer.AuthReducer(fromAuthReducer.initialAuthState, actionInitial);

      const error: any = new Error('http error');
      const newAction = fromAuthActions.recoverPasswordFailure({ error });
      const newState = fromAuthReducer.AuthReducer(initialAuthState, newAction);

      expect(newState.error).toEqual(error);
      done();
    });

    it( 'should apply reducer changePassword into state', (done) => {
      const actionInitial = {} as any;
      const initialAuthState = fromAuthReducer.AuthReducer(fromAuthReducer.initialAuthState, actionInitial);

      const newAction = fromAuthActions.changePassword({token, password: credentials.password, cPassword: credentials.password });
      const newState = fromAuthReducer.AuthReducer(initialAuthState, newAction);

      expect(newState).toEqual(initialAuthState);
      done();
    });

    it( 'should apply reducer changePasswordSuccess into state', (done) => {
      const actionInitial = {} as any;
      const initialAuthState = fromAuthReducer.AuthReducer(fromAuthReducer.initialAuthState, actionInitial);

      const newAction = fromAuthActions.changePasswordSuccess();
      const newState = fromAuthReducer.AuthReducer(initialAuthState, newAction);

      expect(newState.error).toEqual(false);
      done();
    });

    it( 'should apply reducer changePasswordFailure into state', (done) => {
      const actionInitial = {} as any;
      const initialAuthState = fromAuthReducer.AuthReducer(fromAuthReducer.initialAuthState, actionInitial);

      const error: any = new Error('http error');
      const newAction = fromAuthActions.changePasswordFailure({ error });
      const newState = fromAuthReducer.AuthReducer(initialAuthState, newAction);

      expect(newState.error).toEqual(error);
      done();
    });

  });
});
