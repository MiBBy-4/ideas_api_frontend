import { TextField, Button } from '@mui/material';
import { React, useState } from 'react';
import { postIdeas } from '../apiRequests/IdeasRequests';

function IdeaForm() {
  const [state, setState] = useState({
    name: '',
    description: '',
    problem: '',
    sphere: '',
    geo_focus: '',
    investor_requirements: '',
  });

  function handleIdeaChange(event) {
    const { target: { value } } = event;
    const { target: { name } } = event;
    setState({
      ...state,
      [name]: value,
    });
  }

  async function formSubmit(formData) {
    const data = new FormData(formData);
    postIdeas(data);
  }

  const handleSubmit = (event) => {
    formSubmit(event.target);
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="idea_form" autoComplete="off">
        <TextField id="name_input" label="Name of idea" variant="outlined" type="text" name="name" onChange={handleIdeaChange} />
        <TextField id="description_input" label="description" variant="outlined" type="text" name="description" onChange={handleIdeaChange} />
        <TextField id="problem_input" label="problem" variant="outlined" type="text" name="problem" onChange={handleIdeaChange} />
        <TextField id="sphere_input" label="sphere" variant="outlined" type="text" name="sphere" onChange={handleIdeaChange} />
        <TextField id="geo_focus_input" label="geo_focus" variant="outlined" type="text" name="geo_focus" onChange={handleIdeaChange} />
        <TextField id="investor_requirements_input" label="investor_requirements" variant="outlined" type="text" name="investor_requirements" onChange={handleIdeaChange} />
        <Button variant="contained" color="primary" type="submit"> Add new Idea </Button>
      </form>
    </div>
  );
}

export default IdeaForm;
