import { hot } from 'react-hot-loader';
import React, {Component, Fragment} from 'react';
import {Movies} from "./Movies";
import {methodCall} from "./methods";

class App extends Component {
  state = {
      search: '',
      movies: [],
      moviesSearch: [],
  };

  onChange = ({target: {value: search}}) => {
    this.setState({ search,
        moviesSearch: this.state.movies
            .filter(item => item.name.toLowerCase()
                .includes(this.state.search.toLowerCase()))
    });
  };

  componentDidMount() {
      methodCall('moviesSearch').then(movies => {
        this.setState(() => ({
              movies, moviesSearch: movies
          }));
      });
  }

  render() {
    return (
        <Fragment>
          <input value={this.state.search} onChange={this.onChange}/>
          <Movies movies={this.state.moviesSearch} title={'Filmes'}/>
        </Fragment>
    );
  }
}

export default hot(module)(App);
