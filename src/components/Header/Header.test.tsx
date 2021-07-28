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
  it('is search component in Header', async () => {
    const { searchHeader } = setup();

    expect(searchHeader).toBeInTheDocument();
  });

  it('is search input in Header', async () => {
    const { searchHeaderInput } = setup();

    expect(searchHeaderInput).toBeInTheDocument();
  });

  it('is navgitaion component in Header', async () => {
    const { navigationHeader } = setup();

    expect(navigationHeader).toBeInTheDocument();
  });

  it('is all links in Header', async () => {
    const { navigationHeaderLinks } = setup();

    expect(navigationHeaderLinks.length).toBe(3);
  });

  it('dropdown initially is not visible', async () => {
    const { utils } = setup();

    expect(utils.queryByTestId('navigationHeaderDropdown')).not.toBeInTheDocument();
  });

  it('dropdown shows correctly after clicking it', async () => {
    const { navigationHeaderDropdownOpener, utils } = setup();

    fireEvent.click(navigationHeaderDropdownOpener);

    expect(utils.getByTestId('navigationHeaderDropdown')).toBeInTheDocument();
  });
});
