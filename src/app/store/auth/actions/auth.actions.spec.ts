import * as fromAuthActions from './auth.actions';
import { User } from 'src/app/interfaces/user/user';

describe('Auth Actions', () => {

  it('should return an action for login', () => {
    const credentials = {email: 'test@test.com', password: '123456789'};
    const action = fromAuthActions.login(credentials);
    expect(action.type).toBe(fromAuthActions.AuthActions.login);
  });

  it('should return an action for loginSuccess', () => {
    const token = 'AXxxvzzdsvmm32mnids43mi4mcdsvs';
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
    const action = fromAuthActions.loginSuccess({token, user});
    expect(action.type).toBe(fromAuthActions.AuthActions.loginSuccess);
  });

  it('should return an action for loginFailure', () => {
    const error = new Error('http error');
    const action = fromAuthActions.loginFailure({error});
    expect(action.type).toBe(fromAuthActions.AuthActions.loginFailure);
  });

  it('should return an action for logout', () => {
    const action = fromAuthActions.logout();
    expect(action.type).toBe(fromAuthActions.AuthActions.logout);
  });

  it('should return an action for recoverPassword', () => {
    const action = fromAuthActions.recoverPassword({email: 'test@test.com'});
    expect(action.type).toBe(fromAuthActions.AuthActions.recoverPassword);
  });

  it('should return an action for recoverPasswordSuccess', () => {
    const action = fromAuthActions.recoverPasswordSuccess();
    expect(action.type).toBe(fromAuthActions.AuthActions.recoverPasswordSuccess);
  });

  it('should return an action for recoverPasswordFailure', () => {
    const error = new Error('http error');
    const action = fromAuthActions.recoverPasswordFailure({error});
    expect(action.type).toBe(fromAuthActions.AuthActions.recoverPasswordFailure);
  });

  it('should return an action for changePassword', () => {
    const data = { token: 'a84as8Jk4df4gdJ', password: '12345566', cPassword: '12345566' };
    const action = fromAuthActions.changePassword(data);
    expect(action.type).toBe(fromAuthActions.AuthActions.changePassword);
  });

  it('should return an action for changePasswordSuccess', () => {
    const action = fromAuthActions.changePasswordSuccess();
    expect(action.type).toBe(fromAuthActions.AuthActions.changePasswordSuccess);
  });

  it('should return an action for changePasswordFailure', () => {
    const error = new Error('http error');
    const action = fromAuthActions.changePasswordFailure({error});
    expect(action.type).toBe(fromAuthActions.AuthActions.changePasswordFailure);
  });

});
