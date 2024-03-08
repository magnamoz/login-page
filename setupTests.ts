// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

const editable = (value: string) => ({
  configurable: true,
  get: () => value,
  set: (v: string) => (value = v),
});
Object.defineProperty(navigator, 'userAgent', editable(navigator.userAgent));

type storageStateIndex = {
  [index: string]: string;
};

const storageState: storageStateIndex = {
  name: 'jest',
  type: 'javascript',
};

Object.defineProperty(window, 'localStorage', {
  writable: true,
  value: {
    removeItem: (key: string) => {
      delete localStorage[key];
    },
    getItem: (key: string) => {
      localStorage[key] || null;
    },
    setItem: (key: string, value: string) => {
      localStorage[key] = value.toString();
    },
    ...storageState,
  },
});

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useFormContext: () => ({
    handleSubmit: () => jest.fn(),
    control: {
      register: jest.fn(),
      unregister: jest.fn(),
      getFieldState: jest.fn(),
      _names: {
        array: new Set('test'),
        mount: new Set('test'),
        unMount: new Set('test'),
        watch: new Set('test'),
        focus: 'test',
        watchAll: false,
      },
      _subjects: {
        watch: jest.fn(),
        array: jest.fn(),
        state: jest.fn(),
      },
      _getWatch: jest.fn(),
      _formValues: ['test'],
      _defaultValues: ['test'],
    },
    getValues: () => {
      return [];
    },
    setValue: () => jest.fn(),
    formState: () => jest.fn(),
    watch: () => jest.fn(),
  }),
  Controller: () => [],
  useSubscribe: () => ({
    r: { current: { subject: { subscribe: () => jest.fn() } } },
  }),
}));
