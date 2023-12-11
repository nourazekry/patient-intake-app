import * as React from 'react';
import DataTable from '../../components/DataTable';
import CreateIcon from '@mui/icons-material/Create';
import { useEffect, useState } from 'react';
import { Link } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

function HeartFailureMain() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    

{ field: 'id', headerName: 'ID', flex: 1 },
{ field: 'full_name', headerName: 'Full Name', flex: 1 },
{ field: 'sex', headerName: 'Sex', flex: 1 },
{ field: 'entry_date', headerName: 'Entry Date', flex: 1 },
{
  field: "edit",
  headerName: "Edit",
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

  if (data && data.length > 0) {
    // Render the DataTable when data is available
    return (
      <DataTable 
        rows={data}
        columns={columns}
      />
    );
  } else {
    // Render a message when there is no data
    return <div>No data available</div>;
  }
}

export default HeartFailureMain;

