import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { CreateForm } from '../../components/heart_failure_tool/CreateForm';

const handleSubmit = () => {
    console.log('submit');
}

export const HeartFailureCreate = () => {
    return (
        <CreateForm 
        handleSubmit={handleSubmit}
        />
    );
};