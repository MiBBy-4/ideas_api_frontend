import React, { Component } from 'react';
import IdeaItem from './IdeaItem';

const apiURL = 'http://localhost:3000/api/v1/ideas';

class IdeaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.getIdeas();
  }

  getIdeas() {
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseItems) => {
        this.setState({
          items: responseItems,
        });
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item) => (
            <IdeaItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}
export default IdeaList;