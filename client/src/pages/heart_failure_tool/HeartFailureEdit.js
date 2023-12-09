import React from 'react';

import { CreateForm } from '../../components/heart_failure_tool/CreateForm';
const handleSubmit = () => {
    console.log('submit');
}
export const HeartFailureEdit = () => {
    return (
       <CreateForm 
        handleSubmit={handleSubmit}
        />
    );
};