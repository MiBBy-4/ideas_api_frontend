import React, { Component } from 'react';
import IdeaItem from './IdeaItem';
import IdeaForm from './IdeaForm';

const apiURL = 'http://localhost:3000/api/v1/ideas';

class IdeaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.updateIdeaList = this.updateIdeaList.bind(this);
  }

  componentDidMount() {
    this.getIdeas();
  }

  getIdeas() {
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseItems) => {
        this.setState({
          items: responseItems.reverse(),
        });
      });
  }

  updateIdeaList(item) {
    let updatedItems = this.state.items;
    updatedItems.unshift(item);
    this.setState({
      items: updatedItems,
    });
  }

  render() {
    return (
      <div>
        <IdeaForm apiURL={apiURL} updateIdeaList={this.updateIdeaList} />
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