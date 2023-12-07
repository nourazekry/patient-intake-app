import * as React from 'react';
import { DataTable } from '../../components/DataTable';
import { Box } from '@mui/material';
import { Sidebar } from '../../components/Sidebar';
import { Header } from '../../components/Header';
import CreateIcon from '@mui/icons-material/Create';
import {IconButton} from '@mui/material';
import { Button, Link } from "@mui/material";


const columns = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'firstName', headerName: 'First name', flex: 1 },
  { field: 'lastName', headerName: 'Last name', flex: 1 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    flex: 1
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    flex: 1,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    renderCell: (params) => {
      return <Link href={`/heart_failure_tool/edit/${params.row.id}`}><CreateIcon/></Link>;
    }
  },
  {
    field: "follow-up_visit",
    headerName: "Follow-up Visit",
    flex: 1,
    renderCell: (params) => {
      return <Link href={`/heart_failure_tool/follow-up/${params.row.id}`}>Follow-up Visit</Link>;
    }
  },
  {
    field: "discharge",
    headerName: "Discharge",
    flex: 1,
    renderCell: (params) => {
      return <Link href={`/heart_failure_tool/discharge/${params.row.id}`}>Discharge</Link>;
    }
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


export const HeartFailureTable = () => {

  return (
        <DataTable 
          rows={rows}
          columns={columns}
        />      
  );
}
