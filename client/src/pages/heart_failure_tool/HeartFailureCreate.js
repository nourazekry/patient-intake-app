import React from 'react';
import { useEffect, useState } from 'react';
import CreateForm from '../../components/heart_failure_tool/CreateForm';

function HeartFailureCreate() {
    const [masterList, setMasterList] = useState([]);

    useEffect(() => {
        const fetchFields = async () => {
          try {
            const response = await fetch(`/api/form_fields/heart_failure_tool/1`);
            const result = await response.json();
            setMasterList(result.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchFields();
      }, []);

      const handleSubmit = async (values) => {
        try {
            alert(JSON.stringify(values));

          // Assuming `values` is an object containing the form data
          const response = await fetch('/api/form_fields/heart_failure_tool/1/save', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });
      
          const result = await response.json();
          // Handle the result as needed
          console.log(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    return (
       <CreateForm 
        masterList={masterList}
        onSubmitCallback={handleSubmit}
        />
    );
}

export default HeartFailureCreate;