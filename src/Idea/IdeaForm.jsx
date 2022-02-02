import { TextField, Button } from '@mui/material';
import React, { Component } from 'react';

class IdeaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiURL: props.apiURL,
      name: '',
      description: '',
      problem: '',
      sphere: '',
      geo_focus: '',
      investor_requirements: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleIdeaChange = this.handleIdeaChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.formSubmit(event.target);
  }

  handleIdeaChange(event) {
    this.setState({
      name: event.target.value,
      description: event.target.value,
      problem: event.target.value,
      sphere: event.target.value,
      geo_focus: event.target.value,
      investor_requirements: event.target.value,
    });
  }

  async formSubmit(formData) {
    const data = new FormData(formData);
    await fetch(this.state.apiURL, {
      method: 'POST',
      mode: 'cors',
      body: data,
    }).then((response) => response.json())
      .then((response) => this.props.updateIdeaList(response));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="idea_form" autoComplete="off">
          <TextField id="name_input" label="Name of idea" variant="outlined" type="text" name="idea[name]" onChange={this.handleIdeaChange} />
          <TextField id="description_input" label="description" variant="outlined" type="text" name="idea[description]" onChange={this.handleIdeaChange} />
          <TextField id="problem_input" label="problem" variant="outlined" type="text" name="idea[problem]" onChange={this.handleIdeaChange} />
          <TextField id="sphere_input" label="sphere" variant="outlined" type="text" name="idea[sphere]" onChange={this.handleIdeaChange} />
          <TextField id="geo_focus_input" label="geo_focus" variant="outlined" type="text" name="idea[geo_focus]" onChange={this.handleIdeaChange} />
          <TextField id="investor_requirements_input" label="investor_requirements" variant="outlined" type="text" name="idea[investor_requirements]" onChange={this.handleIdeaChange} />
          <Button variant="contained" color="primary" type="submit"> Add new Idea </Button>
        </form>
      </div>
    );
  }
}

export default IdeaForm;