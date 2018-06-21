import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from '../sass/Article.scss';

class Article extends Component {
  constructor(props){
    super(props);
    this.state = {
      fullArticle: false, 
    };
  }

  toggleArticle = () => {
    this.setState({fullArticle: !this.state.fullArticle});
  }

  renderBody(){
    const {author, body} = this.props.article;
    if(this.state.fullArticle) {
      return (
        <div className={styles.fullArticle}>
          <p className={styles.body}>{body}</p>
          <h6 className={styles.author}>by: {author}</h6>
        </div>
      );
    }
  }

  render() {
    const {title} = this.props.article;
    return (
      <div className={styles.article}>
        <h2 className={this.state.fullArticle ? styles.selected : styles.title}
          onClick={this.toggleArticle}>{title}</h2>
        {this.renderBody()}
      </div>
    );
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default Article;
