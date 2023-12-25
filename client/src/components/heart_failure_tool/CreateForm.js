import {
  Grid,
  Radio,
  RadioGroup,
  Typography,
  Divider,
  Autocomplete,
  FormControlLabel,
  Checkbox,
  Card,
  CardContent,
  Pagination,
  Box,
  Input,
  InputAdornment
} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Report from './Report';

const CreateForm = ({ masterList, handleSubmit }) => {

const renderSubcategory = (index, name) => (
  <Grid item xs={12} key={index}>
    <Divider align='left'>
      <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
        {name}
      </Typography>
    </Divider>
  </Grid>
);

const renderTextField = (index, name, field, required, value, onChange) => (
  <Grid item xs={12} key={index}>
    <TextField
      id={field}
      label={name}
      required={required}
      value={value}
      fullWidth
      onChange={onChange}
    />
  </Grid>
);
const EquationField = ({ name, field, required, unit, calculatedValue }) => (
  <Grid item xs={12}>
    <TextField
      id={field}
      label={name}
      required={required}
      value={calculatedValue}
      fullWidth
      type='number'
      InputProps={{
        readOnly: true,
        endAdornment: <InputAdornment position="end">{unit}</InputAdornment>,
      }}
    />
  </Grid>
);

const renderNumField = (index, name, field, type, options, required, value, onChange, formikValues, setFieldValue) => {
  
  if (type === 'equation') {
    // Parse options to get the equation and unit
    const { equation, unit } = options ? JSON.parse(options) : { equation: '', unit: '' };

    // Evaluate the equation based on other field values
    const calculatedValue = evaluateEquation(equation, formikValues, field, value, setFieldValue);

    return (
      <EquationField
        key={index}
        name={name}
        field={field}
        required={required}
        unit={unit}
        calculatedValue={calculatedValue}
      />
    );
  } else {
    const { unit } = options ? JSON.parse(options) : {unit: '' };

    return (
      <Grid item xs={12} key={index}>
        <TextField
          id={field}
          label={name}
          required={required}
          value={value}
          fullWidth
          type='number'
          onChange={onChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">{unit}</InputAdornment>,
          }}
        />

      </Grid>
    );
  }
};

// Helper function to evaluate the equation
const evaluateEquation = (equation, formikValues, field, value, setFieldValue) => {
  try {
    // Replace variable names in the equation with their values
    const substitutedEquation = equation.replace(/([a-zA-Z]+)/g, (match, p1) => {
      return formikValues[p1] || 0; // Use 0 if the variable is not found
    });
    // Evaluate the substituted equation
    const res = eval(substitutedEquation);
    // setFieldValue(field, res);
    return res;
  } catch (error) {
    console.error('Error evaluating equation:', error);
    return null;
  }
};


const renderAutocomplete = (index, name, field, required, value, onChange) => (
  <Grid item xs={12} key={index}>
    <Autocomplete
      id={field}
      label={name}
      required={required}
      value={value}
      fullWidth
      onChange={onChange}
    />
  </Grid>
);


  const [initialValuesState, setInitialValuesState] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const itemsPerPage = 1; // Set the number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({});
  useEffect(() => {
    // Iterate through masterList to initialize initial values
    const newInitialValues = {};
    Object.keys(masterList).forEach((category) => {
      masterList[category].forEach((field) => {
        if(field.type === 'text' || field.type === 'num') {
          newInitialValues[field.field] = '';
        } else if(field.type === 'bool'){
          newInitialValues[field.field] = false;
        } else if(field.type === 'checkbox'){
          newInitialValues[field.field] = '';
        } else if (field.type === 'date'){
          newInitialValues[field.field] = null;
        }
        
      });
    });
    setInitialValuesState(newInitialValues);
  }, []);
  useEffect(() => {
    console.log(selectedOptions);
  }, [selectedOptions]);
  

  const formik = useFormik({
    initialValues: initialValuesState,
    onSubmit: (values) => {
      alert('Saved Successfully!');
      setSubmitted(true);
    },
  });

  const renderCheckbox = (index, name, field, options, required, value, onChange) => {
      // Render a single checkbox for a single option
      return (
        <Grid item xs={12} key={index}>
          <Typography sx={{ fontWeight: 'bold' }}>{name}</Typography>
          <FormControlLabel
            control={<Checkbox />}
            id={name}
            required={required}
            value={value}
            onChange={onChange}
          />
        </Grid>
      );
  };
  const handleRadioChange = (groupName, value) => {

    // Update the selected option for the specific radio group
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [groupName]: value,
    }));
  };
  const renderRadioGroup = (index, fieldName, uniqueFieldName, options, required) => {
    if(!options){
      return;
    }
    const optionsArray = options.split('|');

    return (
      <Grid item xs={12} key={uniqueFieldName} sx={{fontWeight: 'bold'}}>
        <Typography>
          {fieldName}
        </Typography>
        <RadioGroup
          row
          name={uniqueFieldName}
          value={selectedOptions[uniqueFieldName] || ''}
          onChange={(event) => handleRadioChange(uniqueFieldName, event.target.value)}
          required={required}
        >
        {optionsArray && optionsArray.map((option) => {
          return (
            <FormControlLabel
              value={option}
              name={`${uniqueFieldName}-${option}`}
              label={option}
              control={<Radio />}
              checked={selectedOptions[uniqueFieldName] === option}
            />
          );
        })}
      </RadioGroup>
      </Grid>   
    );

  };

  const handleCheckboxChange = (uniqueFieldName, value) => {
    // Update the selected options for the specific multiselect group
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [uniqueFieldName]: value,
    }));
  };
  
  const renderMultiselect = (index, fieldName, uniqueFieldName, options, required) => {
    if (!options) {
      return;
    }
    const optionsArray = options.split('|');
  
    return (
      <Grid item xs={12} key={uniqueFieldName} sx={{ fontWeight: 'bold' }}>
        <Typography>{fieldName}</Typography>
        {optionsArray &&
          optionsArray.map((option) => (
            <FormControlLabel
              key={`${uniqueFieldName}-${option}`}
              control={
                <Checkbox
                  checked={(selectedOptions[uniqueFieldName] || []).includes(option)}
                  onChange={(event) => {
                    const selectedValues = selectedOptions[uniqueFieldName] || [];
                    const updatedValues = event.target.checked
                      ? [...selectedValues, option]
                      : selectedValues.filter((value) => value !== option);
  
                    handleCheckboxChange(uniqueFieldName, updatedValues);
                  }}
                />
              }
              label={option}
            />
          ))}
      </Grid>
    );
  };

  const renderField = (field, index) => {
    if (field.type === 'text') {
      return renderTextField(
        index,
        field.name,
        field.field,
        field.required === 1,
        formik.values[field.field],
        formik.handleChange
      );
    }else if (field.type === 'autocomplete') {
      return renderAutocomplete(
        index,
        field.name,
        field.field,
        field.required === 1,
        formik.values[field.field]
      );
    }else if (field.type == 'num' || field.type == 'equation') {
      return renderNumField(
        index,
        field.name,
        field.field,
        field.type,
        field.options,
        field.required === 1,
        formik.values[field.field] || '',
        formik.handleChange,
        formik.values,
        formik.setFieldValue
      );
    } else if (field.type === 'bool'){
      return renderRadioGroup(
        index,
        field.name,
        field.field,
        'Yes|No',
        field.required === 1,
        formik.values[field.field] || false,
        formik.handleChange
      );
    } else if (field.type === 'checkbox'){
      return renderRadioGroup(
        index,
        field.name,
        field.field,
        field.options,
        field.required === 1,
        formik.values[field.field] || '',
      );
    } else if (field.type === 'multiselect'){
      return renderMultiselect(
        index,
        field.name,
        field.field,
        field.options,
        field.required === 1,
        formik.values[field.field] || '',
      );
    } else if (field.type === 'subcategory') {
       return renderSubcategory(index, field.name);
      }else if(field.type === 'date') { return (
        <Grid item xs={12} md={6}>
          <Typography>{field.name}</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              name={field.field}
              format="DD/MM/YYYY"
              required={field.required === 1}
              value={formik.values[field.field] || null}
            />
          </LocalizationProvider>
        </Grid>
      );
      }
  }



  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <Card>
      <CardContent>
        {submitted ? (<Report data={formik.values}/>) : (<form onSubmit={() => {
          alert(JSON.stringify(formik.values));
          // formik.handleSubmit();
        }}>
          <Grid container key="top">
            {masterList &&
              Object.keys(masterList)
                .slice(startIndex, endIndex)
                .map((category) => (
                  <Grid item xs={12} key={category}>
                    <Typography variant="h4" sx={{fontWeight: 'bold'}} gutterBottom>
                      {category}
                    </Typography>
                    <Divider />
                    <br></br>
                    <Grid container spacing={1}>
       
                      {masterList[category] &&
                        masterList[category].map((field, index) => (
                          <>
                          {/* if field does not have children render it */}
                          <Grid item md={field.type == 'subcategory' ? 12 : 6} xs={12}>
                            {(!field.children || field.children.length == 0) && renderField(field, index)}
                          </Grid>
                          {/* if field has children render it and each of its children in a box*/ }
                          {field.children && field.children.length > 0 && (
                             <Grid item sx={{borderStyle: 'solid'}}>
                              <Grid container spacing={2}>
                               <Grid item xs={12}>
                                {renderField(field, index)}
                              </Grid>
                              {field.children && field.children.map((child, childIndex) => {
                              return(<Grid item xs={6} key={childIndex}>
                                {renderField(child, childIndex)}
                              </Grid>);
                              })} 
                              </Grid>
                              
                            </Grid> 
                            
                          )}
                          </>
                        ))}
                  </Grid>
                  </Grid>
                ))}
          </Grid>
          <Grid container justifyContent="center">
            <Pagination
              count={Math.ceil(
                Object.keys(masterList).length / itemsPerPage
              )}
              page={currentPage}
              onChange={handleChangePage}
              color="primary"
            />
          </Grid>
          <Grid container justifyContent='space-between'>
            <Grid item xs={6}>
            <Link to="/heart_failure_tool" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="secondary">
                    Cancel
                </Button>
            </Link>
          </Grid>
          <Grid item xs={6} sx={{textAlign: 'right'}}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onChange={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
          </Grid>
        </form>)}
      </CardContent>
    </Card>
  );
};

export default CreateForm;
