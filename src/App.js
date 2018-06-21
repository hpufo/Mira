import React, { Component } from 'react';
import axios from 'axios';
import Collection from './components/Collection';
import styles from './sass/App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      collections: [],
      failedToLoad: false
    };
  }
  
  componentDidMount(){
    const filePath = './example.txt';
    this.loadJSON(filePath);
  }

  loadJSON(filePath){
    axios.get(filePath)
    .then((response) => this.setState({collections: response.data.collections}))
    .catch(e => {
      console.log('Failed to get json');
      this.setState({failedToLoad: true})
    })
  }

  renderTopics(){
    if(!this.state.failedToLoad)
      return this.state.collections.map((item, i) => <Collection collection={item} key={i} />);
    else
      return <h2>Failed to load file</h2>;
  }

  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <h1 className={styles.header}>Knowledge Center</h1>
        </header>
        <h2 className={styles.topicsHeader}>Topics:</h2>
        <div className={styles.topics}>
          {this.renderTopics()}
        </div>
      </div>
    );
  }
}

export default App;
