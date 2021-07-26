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

  const searchInput = utils.getByTestId('searchInput') as HTMLInputElement;
  const headerLinks = utils.getAllByRole('link');
  const dropdownOpener = utils.getByTestId('dropdownOpener') as HTMLButtonElement;

  return {
    utils,
    searchInput,
    headerLinks,
    dropdownOpener
  };
};

describe('<Header />', () => {
  it('is serach render in Header', async () => {
    const { searchInput } = setup();

    expect(searchInput).toBeInTheDocument();
  });

  it('is all 3 render in Header', async () => {
    const { headerLinks } = setup();

    expect(headerLinks.length).toBe(3);
  });

  it('dropdown dont show at render', async () => {
    const { utils } = setup();

    expect(utils.getAllByRole('button').length).toBe(1);
  });

  it('dropdown shows correctly', async () => {
    const { dropdownOpener, utils } = setup();

    fireEvent.click(dropdownOpener);

    expect(utils.getAllByRole('button').length).toBe(3);
  });
});
