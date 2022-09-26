import * as fromAuthSelectors from './auth.selectors';

const createAuthState = ({
    user = {
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
      }
    },
    token = 'sdsd',
  } = {} ) => ({
      auth: {
        user,
        token,
        error : new Error('http error'),
        loggedIn: true
      }
    });



describe('Auth Selectors', () => {

  it('should select token from Store', () => {
      const fakeStore = createAuthState();
      const selector = fromAuthSelectors.getToken(fakeStore);
      expect(selector).toEqual(fakeStore.auth.token);
  });

  it('should select error from Store', () => {
    const fakeStore = createAuthState();
    const selector = fromAuthSelectors.getError(fakeStore);
    expect(selector).toEqual(fakeStore.auth.error);
  });

  it('should select loggedIn from Store', () => {
    const fakeStore = createAuthState();
    const selector = fromAuthSelectors.isLoggedIn(fakeStore);
    expect(selector).toEqual(fakeStore.auth.loggedIn);
  });

  it('should select user from Store', () => {
    const fakeStore = createAuthState();
    const selector = fromAuthSelectors.getUser(fakeStore);
    expect(selector).toEqual(fakeStore.auth.user);
  });

});
