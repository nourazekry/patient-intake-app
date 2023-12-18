import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function HeartFailureFollowUp() {
  const [data, setData] = useState();
  const {id} = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/heart_failure_tool/edit/${id}`);
        const result = await response.json();
        console.log(result.data[0]);
        setData(result.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
    return (
        <form>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
      >
        Submit
      </Button>
    </form>
    );
};
export default HeartFailureFollowUp;