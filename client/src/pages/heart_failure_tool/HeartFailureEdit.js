import React from 'react';
import { useEffect, useState } from 'react';
import { CreateForm } from '../../components/heart_failure_tool/CreateForm';
import { useParams } from 'react-router-dom';
const handleSubmit = () => {
    console.log('submit');
}
function HeartFailureEdit() {
    const [data, setData] = useState([]);
    const {id} = useParams();
    console.log(id);
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
        handleSubmit={handleSubmit}
        />
    );
}

export default HeartFailureEdit;