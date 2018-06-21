import React from 'react';
import ReactDOM from 'react-dom';
import Collection from '../components/Collection';

const props = {
  collectionName: 'Topic',
  articles: [] 
};
describe('Collection', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Collection collection={props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
