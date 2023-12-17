import { Grid, Typography, Divider, Autocomplete, FormControlLabel, Checkbox } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


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
    <Grid item md={12} key={index}>
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



export const CreateForm = ({data, masterList, handleSubmit}) => {
  const formik = useFormik({
    initialValues: {
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container>

        {masterList && Object.keys(masterList).map((category) => {
          console.log(category);
          return (
          <Grid container>
            <Grid>
              <Typography>
                {category}
              </Typography>
              <Divider />
            </Grid>
            
            { masterList[category] && masterList[category].map((field, index) => {
              console.log('here')
              if(field.type == 'text'){
              return renderTextField(index, field.name, field.field, field.requred == 1, formik.values[field.field])
              } else if (field.type == 'autocomplete') {
                return renderAutocomplete(index, field.name, field.field, field.requred == 1, formik.values[field.field])
              } else if (field.type == 'checkbox') {
                return renderCheckbox(index, field.name, field.field, field.options, field.requred == 1, formik.values[field.field])
              } else if(field.type === 'date'){
                return (   
                  <Grid>
                  <Typography>
                    {field.name}
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                      name = {field.field}
                      format="DD/MM/YYYY" 
                      required={field.required == 1}
                    />
                  </LocalizationProvider>
                  </Grid>
                );
              }else {
                return renderTextField(index, field.name, field.field, field.requred == 1, formik.values[field.field])
              }
            })}
          </Grid>
          );
        })}
        
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onChange={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
        
      </form>
    );
};