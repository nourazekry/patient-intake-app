import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Grid, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function HomePage({ tools }) {
  const theme = useTheme();

  return (
    <Grid container justifyContent="center" alignItems="flex-start" spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h2" color="primary" align="center">
          Welcome to ICC Patient Directory!
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={4}>
          {tools.map((tool) => (
            <Grid item key={tool.id} xs={12} sm={6} md={4} lg={3}>
              <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
                <Typography variant="h5" gutterBottom>
                  {tool.text}
                </Typography>
                <Link to={tool.url} style={{ textDecoration: "none" }}>
                  <Button variant="contained">
                    {tool.icon}
                  </Button>
                </Link>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomePage;

