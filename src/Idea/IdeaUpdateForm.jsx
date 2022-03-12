import { TextField, Button } from '@mui/material';
import { React, useState } from 'react';
import { useNavigate } from 'react-router';
import { updateIdea } from '../apiRequests/AdminRequests';
import Errors from '../Errors';

export default function IdeaUpdateForm(props) {
  const { idea } = props;
  const [state, setState] = useState({
    name: idea.name,
    description: idea.description,
    problem: idea.problem,
    sphere: idea.sphere,
    geo_focus: idea.geo_focus,
    investor_requirements: idea.investor_requirements,
  });
  const [error, setErrors] = useState([]);

  const navigate = useNavigate();

  function handleIdeaChange(event) {
    const { target: { value, name } } = event;
    setState({
      ...state,
      [name]: value,
    });
  }

  async function formSubmit(formData) {
    const data = new FormData(formData);
    const { id } = idea;
    const response = await updateIdea(id, data);
    const { data: { status, errors } } = response;
    if (status === 200) {
      navigate('/ideas')
    } else {
      setErrors(errors);
    }
  }

  const handleSubmit = (event) => {
    formSubmit(event.target);
    event.preventDefault();
  };

  return (
    <div>
      { error.length !== 0 ? (
        <Errors errors={error} />
      ) : (null) }
      <form onSubmit={handleSubmit} id="idea_form" autoComplete="off">
        <TextField id="name_input" label="Name of idea" value={state.name} variant="outlined" type="text" name="name" onChange={handleIdeaChange} />
        <TextField id="description_input" label="description" value={state.description} variant="outlined" type="text" name="description" onChange={handleIdeaChange} />
        <TextField id="problem_input" label="problem" value={state.problem} variant="outlined" type="text" name="problem" onChange={handleIdeaChange} />
        <TextField id="sphere_input" label="sphere" value={state.sphere} variant="outlined" type="text" name="sphere" onChange={handleIdeaChange} />
        <TextField id="geo_focus_input" label="geo_focus" value={state.geo_focus} variant="outlined" type="text" name="geo_focus" onChange={handleIdeaChange} />
        <TextField id="investor_requirements_input" label="investor_requirements" value={state.investor_requirements} variant="outlined" type="text" name="investor_requirements" onChange={handleIdeaChange} />
        <Button variant="contained" color="primary" type="submit"> Update Idea </Button>
      </form>
    </div>
  );
}
