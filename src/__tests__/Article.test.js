import React from 'react';
import ReactDOM from 'react-dom';
import Article from '../components/Article';

const props = {
  title: 'title',
  author: 'author',
  body: 'body' 
};

describe('Article', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Article article={props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
