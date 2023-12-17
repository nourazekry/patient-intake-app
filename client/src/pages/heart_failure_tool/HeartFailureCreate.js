import React from 'react';
import { useEffect, useState } from 'react';
import { CreateForm } from '../../components/heart_failure_tool/CreateForm';

const handleSubmit = () => {
    console.log('submit');
}
function HeartFailureCreate() {
    const [masterList, setMasterList] = useState([]);

    useEffect(() => {
        const fetchFields = async () => {
          try {
            const response = await fetch(`/api/form_fields/heart_failure_tool/edit`);
            const result = await response.json();
            setMasterList(result.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchFields();
      }, []);
    return (
       <CreateForm 
        masterList={masterList}
        handleSubmit={handleSubmit}
        />
    );
}

export default HeartFailureCreate;