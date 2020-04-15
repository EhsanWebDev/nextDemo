import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Link from "next/link";
const SignUp = () => {
  return (
    <div>
      <AppBar style={{ marginBottom: "40px" }} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Link href="/">
            <Button color="inherit">SignIn</Button>
          </Link>
          <Link href="/signup">
            <Button variant="contained" color="secondary">
              Sign Up
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xs">
        <Typography variant="h4" gutterBottom>
          Signup Page
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            style={{ display: "block", margin: "10px" }}
            id="outlined-required"
            label="Name"
            variant="outlined"
          />
          <TextField
            style={{ display: "block", margin: "10px" }}
            id="outlined-required"
            label="Email"
            variant="outlined"
          />
          <TextField
            style={{ display: "block", margin: "10px" }}
            id="outlined-required"
            label="Password"
            variant="outlined"
          />
          <Link href="/">
            <Button
              style={{ margin: "10px" }}
              variant="outlined"
              color="primary"
            >
              Login
            </Button>
          </Link>

          <Button variant="outlined" color="secondary">
            Sign Up
          </Button>
        </form>
      </Container>
    </div>
  );
};
export default SignUp;
