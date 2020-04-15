import Layout from "./layout";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import { Link as RouterLink } from "react-router-dom";
const Index = () => {
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
          Login Page
        </Typography>
        <form Validate autoComplete="off">
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
          <Button style={{ margin: "10px" }} variant="outlined" color="primary">
            Login
          </Button>
          <Link href="/signup">
            <Button variant="outlined" color="secondary">
              Sign Up
            </Button>
          </Link>
        </form>
      </Container>
    </div>
  );
};

export default Index;
