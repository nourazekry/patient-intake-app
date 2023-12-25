import { Button, Grid, Typography, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
function Report({data}) {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h4" align='center' sx={{fontWeight: 'bold'}}>
                    Report
                </Typography>
                <Divider />
            </Grid>
            <Grid container>
                {data && Object.keys(data).map(element => {
                return (
                    <Grid item container>
                    <Typography variant="h6">
                        {data[element]}
                    </Typography>
                    </Grid>
                );
            })}
            <img src='/assets/download.png'/>
            <img src='/assets/download.png'/>
            </Grid>
            <Grid item>
            <Grid item>
                <Link to="/heart_failure_tool" justifyContentstyle={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="secondary">
                        Cancel
                    </Button>
                </Link>
            </Grid>
            
          </Grid>
        </Grid>      
    );
}

export default Report;