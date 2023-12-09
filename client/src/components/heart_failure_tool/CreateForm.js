import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export const CreateForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
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