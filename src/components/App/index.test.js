import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App, { updateSearchTopStoriesState } from './index';

const prevState = {
  results: {
    redux: {
      hits: [
        { title: '1', author: '1', num_comments: 1, points: 2, objectID: 'w' },
        { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'x' },
      ],
      page: 0
    },
  },
  searchKey: "redux"
};

const hits = [
  { title: '3', author: '3', num_comments: 2, points: 3, objectID: 'y' },
  { title: '4', author: '4', num_comments: 2, points: 2, objectID: 'z' },
];

const page = 1;

const newState = {
  results: {
    redux: {
      hits: [
        { title: '1', author: '1', num_comments: 1, points: 2, objectID: 'w' },
        { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'x' },
        { title: '3', author: '3', num_comments: 2, points: 3, objectID: 'y' },
        { title: '4', author: '4', num_comments: 2, points: 2, objectID: 'z' },
      ],
      page: 1
    },
  },
  isLoading: false
};

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <App />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('updateSearchTopStoriesState function', () => {
    const state = updateSearchTopStoriesState(hits, page)(prevState);
    expect(state).toEqual(newState);
  });

});
