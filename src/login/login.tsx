/** below component is for login*/
//style
import { Wrapper } from './form.style';
//material Ui
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

type Props = {
  outhHandler: (obj: any) => any;
}
const Login: React.FC<Props> = ({ outhHandler }) => {
  return (
    <Wrapper>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <h2>Login</h2>
            <p>Get access to your Orders, Wishlist and Recommendations</p>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
            <form>
              <TextField type="email" label="Email" margin="normal"
                required fullWidth={true} variant="standard" placeholder="Email" />
              <TextField type="password" label="Password" margin="normal"
                required fullWidth={true} variant="standard" placeholder="Enter Password" />
              <Button type="submit" fullWidth={true} variant="contained" onClick={outhHandler} >Login</Button>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );

};

export default Login;
