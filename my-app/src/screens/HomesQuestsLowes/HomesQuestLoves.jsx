import React, { Component } from 'react';
import MainSection from '../MainSection/MainSection';

// constants
import hotelArray from '../../constants/hotelArray';
import baseURL from '../../constants/baseURL';

export default class HomesQuestLoves extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: { hotelArray },
    };
  }

  componentDidMount() {
    fetch(`${baseURL}hotels/popular`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>{error.message}</div>;
    } if (!isLoaded) {
      return <div>Загрузка...</div>;
    }
    return (
      <MainSection title="Homes guests loves" array={items.slice(0, 4)} />
    );
  }
}
