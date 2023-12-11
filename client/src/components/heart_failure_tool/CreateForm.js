import { Typography, Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const CreateForm = ({data, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
        <Typography>
          Patient Data
        </Typography>
        <Divider />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onChange={handleSubmit}
        >
          Submit
        </Button>
      </form>
    );
};