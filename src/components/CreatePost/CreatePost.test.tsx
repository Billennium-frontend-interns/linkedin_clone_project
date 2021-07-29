import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import { CreatePost } from './CreatePost';

it('Inputing text should update textarea', () => {
  const history = createMemoryHistory();

  const utils = render(
    <Router history={history}>
      <CreatePost />
    </Router>
  );

  const postInput = utils.getByPlaceholderText('What do you want to say?') as HTMLInputElement;

  fireEvent.change(postInput, { target: { value: 'example text' } });

  expect(postInput.value).toBe('example text');
});

it('Click button should clear textarea', () => {
  const history = createMemoryHistory();

  const utils = render(
    <Router history={history}>
      <CreatePost />
    </Router>
  );

  const postInput = utils.getByPlaceholderText('What do you want to say?') as HTMLInputElement;
  const postAdd = utils.getByText(/Add Post/);

  fireEvent.change(postInput, { target: { value: '' } });
  fireEvent.click(postAdd);

  expect(postInput.value).toBe('');
});
