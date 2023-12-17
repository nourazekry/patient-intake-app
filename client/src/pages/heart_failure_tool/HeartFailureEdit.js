import React from 'react';
import { useEffect, useState } from 'react';
import { CreateForm } from '../../components/heart_failure_tool/CreateForm';
import { useParams } from 'react-router-dom';
const handleSubmit = () => {
    console.log('submit');
}
function HeartFailureEdit() {
    const [data, setData] = useState([]);
    const [fields, setFields] = useState([]);

    const {id} = useParams();
    console.log(id);
    useEffect(() => {
        const fetchFields = async () => {
          try {
            const response = await fetch(`/api/form_fields/heart_failure_tool/edit`);
            const result = await response.json();
            console.log(result.data);
            setFields(result.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchFields();
      }, []);
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
       <CreateForm 
        data={data}
        masterList={fields}
        handleSubmit={handleSubmit}
        />
    );
}

export default HeartFailureEdit;