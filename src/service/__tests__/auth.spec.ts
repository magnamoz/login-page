import { TOKEN_KEY } from '../../constants';
import { isAuthenticated, getToken, login, logout } from '../auth';

type storageStateIndex = {
  [index: string]: string;
};

const localStorageMock = (function () {
  let store: storageStateIndex = {};

  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key: string) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('[service] - Auth', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('should be able to add token', () => {
    const token = 'teste';
    login(token);

    expect(localStorage.getItem(TOKEN_KEY)).toEqual(token);
  });

  it('should get token from storage', () => {
    const token = 'teste2';
    login(token);

    getToken();

    expect(localStorage.getItem(TOKEN_KEY)).toEqual(token);
  });

  it('should ble to verify if there is a token and return a boolean', () => {
    login('token');

    const hasStorageToken = isAuthenticated();
    expect(hasStorageToken).toBeTruthy();
  });

  it('should be able to remove token', () => {
    login('token');

    logout();

    expect(localStorage.getItem(TOKEN_KEY)).toBeUndefined();
  });
});
