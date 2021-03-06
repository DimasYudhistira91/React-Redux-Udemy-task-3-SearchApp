import React, { Component } from 'react';
import unsplash from '../src/api/unsplash'
import SearchBar from './components/searchBar';
import ImageList from './components/imageList';

class App extends Component {
  state= {
    images: []
  }

  onSearchSubmit = async (term) => {
    const response = await unsplash
      .get('/search/photos', {
        params: {query: term},
      })

    this.setState({ images: response.data.results })
    console.log(this.state.images);
    
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} images
        <ImageList unsplashImg={this.state.images}/>
      </div>
    );
  }
}

export default App;
