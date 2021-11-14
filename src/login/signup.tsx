/** below component is for login*/
//style
import { Wrapper } from './form.style';
//material Ui
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const Signup: React.FC = () => {
  return (
    <Wrapper>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <h2>SignUp</h2>
            <p>We do not share your personal details with anyone.</p>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
            <form>
            <TextField type="text" fullWidth={true} name ="firstame"  margin="normal" variant="standard" label="First Name" placeholder="Enter Your first name"/>
                <TextField type="text" fullWidth={true}  margin="normal" name ="lastame"  variant="standard" label="Last Name" placeholder="Enter Your Last name"/>
                <TextField type="email" label="Email" margin="normal"
                required fullWidth={true} variant="standard" placeholder="Email" />
                <TextField type="password" margin="normal" required label="Password" fullWidth={true}  variant="standard" placeholder="Enter Password"/>
                <TextField type="password"  margin="normal" required fullWidth={true} label="Confirm Password"  variant="standard" placeholder="Re-enter Password"/>
                <Button  type="submit"  fullWidth={true} variant="contained" >Signup</Button>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );

};

export default Signup;
