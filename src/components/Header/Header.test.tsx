import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Header } from './Header';

afterEach(cleanup);

const setup = () => {
  const history = createMemoryHistory();
  const utils = render(
    <Router history={history}>
      <Header />
    </Router>
  );

  const searchHeader = utils.getByTestId('searchHeader');
  const searchHeaderInput = utils.getByTestId('searchHeaderInput') as HTMLInputElement;
  const navigationHeader = utils.getByTestId('navigationHeader');
  const navigationHeaderLinks = utils.getAllByRole('link');
  const navigationHeaderDropdownOpener = utils.getByTestId('navigationHeaderDropdownOpener');

  return {
    utils,
    searchHeader,
    searchHeaderInput,
    navigationHeader,
    navigationHeaderLinks,
    navigationHeaderDropdownOpener
  };
};

describe('<Header />', () => {
  it('should search component be visible', async () => {
    const { searchHeader } = setup();

    expect(searchHeader).toBeInTheDocument();
  });

  it('should search input be visible', async () => {
    const { searchHeaderInput } = setup();

    expect(searchHeaderInput).toBeInTheDocument();
  });

  it('should navgitaion component be visible', async () => {
    const { navigationHeader } = setup();

    expect(navigationHeader).toBeInTheDocument();
  });

  it('should all links be visible', async () => {
    const { navigationHeaderLinks } = setup();

    expect(navigationHeaderLinks.length).toBe(3);
  });

  it('should dropdown initially not be visible', async () => {
    const { utils } = setup();

    expect(utils.queryByTestId('navigationHeaderDropdown')).not.toBeInTheDocument();
  });

  it('should shows dropdown correctly after clicking it', async () => {
    const { navigationHeaderDropdownOpener, utils } = setup();

    fireEvent.click(navigationHeaderDropdownOpener);

    expect(utils.getByTestId('navigationHeaderDropdown')).toBeInTheDocument();
  });

  it('should show what user is typing in input', async () => {
    const { searchHeaderInput } = setup();

    fireEvent.change(searchHeaderInput, { target: { value: 'Mariusz' } });

    expect(searchHeaderInput.value).toBe('Mariusz');
  });
});
