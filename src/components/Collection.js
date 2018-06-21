import React, { Component } from 'react';
import Article from './Article';
import PropTypes from 'prop-types';
import styles from '../sass/Collection.scss';

class Collection extends Component {
  constructor(props){
    super(props);
    this.state = {
      showArticles: false,
      
    };
  }

  renderArticles(articles){
    if(this.state.showArticles){
      return articles.map((item,i) => <Article article={item} key={i} />);
    }
  }

  toggleArticles = () => {
    this.setState({showArticles: !this.state.showArticles});
  }

  render() {
    const {collectionName, articles} = this.props.collection;
    return (
      <div className={styles.collection}>
        <h2 className={this.state.showArticles ? styles.selected : styles.collectionName} 
          onClick={this.toggleArticles}>{collectionName}</h2>
        {this.renderArticles(articles)}
      </div>
    );
  }
}

Collection.propTypes = {
  collection: PropTypes.shape({
    collectionName: PropTypes.string.isRequired,
      articles: PropTypes.array.isRequired
  }).isRequired
};

export default Collection;
