import { Grid, Stack, Typography, Divider, Autocomplete, Pagination, FormControlLabel, Checkbox, Card, CardContent } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';


const renderTextField = (index, name, field, required, value) => {
  return(
    <Grid item md={12} key={index}>
      <TextField
    id={field}
    label={name}
    required={required}
    value={value}
  />
    </Grid>
  );
}

const renderAutocomplete = (index, name, field, required, value) => {
  return(
    <Grid item md={6} key={index}>
      <Autocomplete
    id={field}
    label={name}
    required={required}
    value={value}
  />
    </Grid>
    
  );
}

const renderCheckbox = (index, name, field, options, required, value) => {
  const optionsArr = options.split('|');
  console.log(optionsArr);

  return (
    <Grid item md={12} key={index}>
    <Typography>
        {name}
      </Typography>
      {optionsArr && optionsArr.map((option) => {
      return(
          <FormControlLabel
          control={<Checkbox />}
          id={option}
          label={option}
          required={required}
          value={value}
        />
      )})}
    </Grid>
  );
}

const CreateForm = ({ data, masterList, handleSubmit }) => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const itemsPerPage = 1; // Set the number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  return (
    <Card>
      <CardContent>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            {masterList &&
              Object.keys(masterList)
              .slice(startIndex, endIndex)
              .map(category => (
                <Grid item container direction="column" key={category}>
                  <Grid item spacing={2}>
                  <Typography variant="h5" gutterBottom>
                    {category}
                  </Typography>
                  <Divider />
                  <br></br>
                  </Grid>
                  {masterList[category] &&
                    masterList[category].map((field, index) => (
                      <Grid item key={index}>
                        {field.type === 'text' && renderTextField(index, field.name, field.field, field.requred === 1, formik.values[field.field])}
                        {field.type === 'autocomplete' && renderAutocomplete(index, field.name, field.field, field.requred === 1, formik.values[field.field])}
                        {field.type === 'checkbox' && renderCheckbox(index, field.name, field.field, field.options, field.requred === 1, formik.values[field.field])}
                        {field.type === 'date' && (
                          <div>
                            <Typography>{field.name}</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DatePicker name={field.field} format="DD/MM/YYYY" required={field.required === 1} />
                            </LocalizationProvider>
                          </div>
                        )}
                      </Grid>
                    ))}
                </Grid>
              ))}
            </Grid>
            <Grid container justifyContent="center">
              <Pagination
                count={Math.ceil(Object.keys(masterList).length / itemsPerPage)}
                page={currentPage}
                onChange={handleChangePage}
                color="primary"
              />
            </Grid>
          <Grid item>
            <Button variant="contained" color="primary" type="submit" onChange={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateForm;
