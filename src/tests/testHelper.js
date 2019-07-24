import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import React from 'react';

const defaultStore = { responsive: { fakeWidth: 1200 } };
const mockedStore = configureMockStore()(defaultStore);

export const mountWithProvider = children => (store = mockedStore) =>
  mount(<Provider store={store}>{children}</Provider>);
