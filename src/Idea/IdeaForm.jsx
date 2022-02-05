import { TextField, Button } from '@mui/material';
import { React, useState } from 'react';
import { postFetchResponse } from './IdeaFetch';

function IdeaForm(props) {
  const [apiURL, setApiURL] = useState(process.env.REACT_APP_API_URL);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [problem, setProblem] = useState('');
  const [sphere, setSphere] = useState('');
  const [geo_focus, setGeoFocus] = useState('');
  const [investor_requirements, setInvestorRequirements] = useState('');

  function handleIdeaChange(event) {
    const { target: { value } } = event;
    setName(event);
    setDescription(event);
    setProblem(event);
    setSphere(event);
    setGeoFocus(event);
    setInvestorRequirements(event);
  }

  async function formSubmit(formData) {
    const data = new FormData(formData);
    console.log('Inside formSubmit');
    postFetchResponse(data);
  }

  const handleSubmit = (event) => {
    formSubmit(event.target);
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="idea_form" autoComplete="off">
        <TextField id="name_input" label="Name of idea" variant="outlined" type="text" name="idea[name]" onChange={handleIdeaChange} />
        <TextField id="description_input" label="description" variant="outlined" type="text" name="idea[description]" onChange={handleIdeaChange} />
        <TextField id="problem_input" label="problem" variant="outlined" type="text" name="idea[problem]" onChange={handleIdeaChange} />
        <TextField id="sphere_input" label="sphere" variant="outlined" type="text" name="idea[sphere]" onChange={handleIdeaChange} />
        <TextField id="geo_focus_input" label="geo_focus" variant="outlined" type="text" name="idea[geo_focus]" onChange={handleIdeaChange} />
        <TextField id="investor_requirements_input" label="investor_requirements" variant="outlined" type="text" name="idea[investor_requirements]" onChange={handleIdeaChange} />
        <Button variant="contained" color="primary" type="submit"> Add new Idea </Button>
      </form>
    </div>
  );
}

export default IdeaForm;
