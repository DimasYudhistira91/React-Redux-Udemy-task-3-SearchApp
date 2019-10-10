import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: ''
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <div className="ui icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Cari di sini..."
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
