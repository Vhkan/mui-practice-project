import React, { useState } from 'react';
import { Typography, FormLabel, FormControl, FormControlLabel, Radio, RadioGroup, Button, TextField, Container, Grid } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Create() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [category, setCategory] = useState('todos');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    setCategory('todos');

    if (title === '') {
      setTitleError(true);
    }
    if (details === '') {
      setDetailsError(true);
    }
    if (title && details) {
      //adding new data to db.json
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({ title, details, category })
      }).then(() => history.push('/'))
    }
  };

  return (
    <Container>
      <Typography variant="h5" component="h2" gutterBottom color="textSecondary">
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Note Title"
              variant="outlined"
              color="secondary"
              required
              error={titleError}
              helperText={titleError ? "Title is required." : null}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Details"
              variant="outlined"
              color="secondary"
              multiline
              required
              error={detailsError}
              helperText={detailsError ? "Details are required." : null}
              rows={4}
              onChange={(e) => setDetails(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              startIcon={<ArrowRightIcon />}
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Note Category</FormLabel>
              <RadioGroup row aria-label="position" name="position" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
                <FormControlLabel value="money" control={<Radio sx={{'&, &.Mui-checked': {color: 'pink'}}}/>} label='Money' />
                <FormControlLabel value="todos" control={<Radio sx={{'&, &.Mui-checked': {color: 'pink'}}}/>} label='Todos' />
                <FormControlLabel value="reminders" control={<Radio sx={{'&, &.Mui-checked': {color: 'pink'}}}/>} label='Reminders' />
                <FormControlLabel value="work" control={<Radio sx={{'&, &.Mui-checked': {color: 'pink'}}}/>} label='Work' />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
