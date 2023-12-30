import * as React from 'react';
import DataTable from '../../components/DataTable';
import CreateIcon from '@mui/icons-material/Create';
import { useEffect, useState } from 'react';
import { Link, Grid, Stack, Button } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; 
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import { useTheme } from '@emotion/react';

function HeartFailureMain() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    

{ field: 'national_id', headerName: 'National ID', flex: 1, filterable: true },
{ field: 'full_name', headerName: 'Full Name', flex: 1, filterable: true },
{ field: 'entry_date', headerName: 'Entry Date'},
{
  field: "edit",
  headerName: "Edit",
  flex: 1,
  align: 'center',
  headerAlign: 'center',
  renderCell: (params) => {
    return <Link href={`/heart_failure_tool/edit/${params.row.id}`}><CreateIcon sx={{color: 'secondary.main'}}/></Link>;
  }
},
{
  field: "follow-up_visit",
  headerName: "Follow-up Visit",
  flex: 1,
  headerAlign: 'center',
  align: 'center',
  renderCell: (params) => {
    return <Link href={`/heart_failure_tool/follow-up/${params.row.id}`}><AssignmentReturnedIcon sx={{color: 'secondary.main'}} /></Link>;
  }
},
{
  field: "discharge",
  headerName: "Discharge",
  flex: 1,
  headerAlign: 'center',
  align: 'center',
  renderCell: (params) => {
    return <Link href={`/heart_failure_tool/discharge/${params.row.id}`}><ExitToAppIcon sx={{color: 'secondary.main'}} /></Link>;
  }
}
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/heart_failure_tool");
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    // Show a loading indicator
    return <CircularProgress />;
  }

  
    return (
      <Stack
        spacing={2}
      >
        <Grid>
          <Button variant='contained' sx={{bgcolor: 'secondary.main'}} href={`/heart_failure_tool/create`}>
          Create
        </Button>   
        </Grid> 
        {data && data.length > 0 && <DataTable 
          rows={data}
          columns={columns}
        />}
      </Stack>
    );

}

export default HeartFailureMain;

