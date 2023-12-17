import { 
  Grid,
   Radio, 
   RadioGroup, 
   Typography, Divider, 
   Autocomplete, 
   Pagination, 
   FormControlLabel, 
   Checkbox, 
   Card, 
   CardContent 
  } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';

const renderSubcategory = (index, name) => {
  return(
    <Grid item md={12} key={index}>
    <Divider align='left'>
        <Typography variant='h5'>
          {name}
        </Typography>
    </Divider>
    
    </Grid>
  );
}

const renderTextField = (index, name, field, required, value) => {
  return(
    <Grid item xs={12} md={6} key={index}>
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




const CreateForm = ({ data, masterList, handleSubmit }) => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const itemsPerPage = 1; // Set the number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleRadioChange = (name, value) => {
    // Update the selected option for the specific radio group
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [name]: value,
    }));
  };

  const renderRadioGroup = (name, options, required) => {
    return (
      <Grid item md={12}>
        <Typography>
          {name}
        </Typography>
        <RadioGroup
        row
        name={name}
        value={selectedOptions[name] || ''}
        onChange={(event) => handleRadioChange(name, event.target.value)}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option}
            value={option}
            control={
            <Radio />}
            label={option}
            required={required}
          />
        ))}
      </RadioGroup>
      </Grid>
      
    );
  };

  const renderCheckbox = (index, name, field, options, required) => {
    const optionsArr = options.split('|');
    console.log(optionsArr);

    if (optionsArr.length > 1) {
      // Render a group of radio buttons for multiple options
      return renderRadioGroup(name, optionsArr, required);
    } else {
      // Render a single checkbox for a single option
      return (
        <Grid item md={12} xs={6}>
          <Typography>
            {name}
          </Typography>
          <FormControlLabel
          md={12}
          xs={6}
          control={<Checkbox />}
          id={optionsArr[0]}
          label={optionsArr[0]}
          required={required}
          value={selectedOptions[name] || ''}
        />
        </Grid>
        
      );
    }
  };

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
                <Grid item xs={12} key={category}>
                  <Typography variant="h4" gutterBottom>
                    {category}
                  </Typography>
                  <Divider />
                  <br></br>
                  {masterList[category] &&
                    masterList[category].map((field, index) => (
                      <Grid>
                        {field.type === 'text' && renderTextField(index, field.name, field.field, field.requred === 1, formik.values[field.field])}
                        {field.type === 'autocomplete' && renderAutocomplete(index, field.name, field.field, field.requred === 1, formik.values[field.field])}
                        {field.type === 'checkbox' && renderCheckbox(index, field.name, field.field, field.options, field.requred === 1, formik.values[field.field])}
                        {field.type === 'subcategory' && renderSubcategory(index, field.name)}
                        {field.type === 'date' && (
                          <Grid item xs={12} md={6}>
                            <Typography>{field.name}</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DatePicker name={field.field} format="DD/MM/YYYY" required={field.required === 1} />
                            </LocalizationProvider>
                          </Grid>
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
