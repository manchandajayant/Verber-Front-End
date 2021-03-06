import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Typography,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { signUpUser } from "../../Store/actions/userActions";
import useStyles from "./styles";

const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setuserName] = useState("");

  const data = { password, email, userName };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(signUpUser(data));
  };

  if (!user.newUser) {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            className={classes.Typography}
          >
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.Typography}
                  autoComplete="uname"
                  variant="outlined"
                  required
                  fullWidth
                  label="FirstName"
                  autoFocus
                  name="username"
                  onChange={(e) => setuserName(e.target.value)}
                  value={userName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.Typography}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.Typography}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={onSubmit}
              className={classes.button}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link
                  href="/login"
                  variant="body2"
                  className={classes.Typography}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  } else {
    return (
      <div>
        <Typography varaint="h4" className={classes.Typography}>
          Welcome {user.newUser.userName} <br />
          <Link href="/login"> Now Login to conitnue</Link>
        </Typography>
      </div>
    );
  }
};

export default SignUp;
