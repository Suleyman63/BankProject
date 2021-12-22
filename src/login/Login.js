import React, { useEffect } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Link,
  Typography,
  LinearProgress,
} from "@material-ui/core";
import "./Login.css";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { toast } from "react-toastify";
import { useStateValue } from "../StateProvider";
import service from "../service/BankService";
import { useHistory } from "react-router";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const LoginForm = (props) => (
  <Grid>
    <Paper elevation={10} className="login-form">
      <Grid align="center">
        <Avatar className="icon-login">
          <LockOutlinedIcon />
        </Avatar>
        <h3 className="register-header mt-4">LOGIN</h3>
      </Grid>
      <Form>
        <Field
          as={TextField}
          className="mt-3"
          label="Username"
          name="username"
          placeholder="Enter username"
          fullWidth
        />
        <Field
          as={TextField}
          className="mt-3"
          label="Password"
          name="password"
          placeholder="Enter password"
          type="password"
          fullWidth
        />

        <Button
          className="mt-5"
          type="submit"
          variant="contained"
          fullWidth
          onClick={props.submitForm}
          disabled={props.isSubmitting}
          color="secondary"
        >
          SUBMIT
        </Button>
      </Form>

      <Typography className="mt-4">
        if you have not account?
        <Link className="ms-4" href="register">
          Register
        </Link>
      </Typography>
      <Typography className="mt-4">
        <Link className="ms-4" href="#">
          Forgot password ?
        </Link>
      </Typography>
      {props.isSubmitting && <LinearProgress />}
    </Paper>
  </Grid>
);

const Login = () => {
  const history = useHistory();
  const [{ userInfo }, dispatch] = useStateValue();

  useEffect(() => {
    localStorage.clear("auth");
  }, []);

  return (
    <div>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={Yup.object({
          username: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("username Required"),
          password: Yup.string()
            .max(20, "Must be 20 characters or less")
            .min(6, "Must be at least 6 character")
            .required("Password Required"),
        })}
        onSubmit={(values, actions) => {
          service
            .login(values)
            .then((res) => {
              localStorage.removeItem("auth");
              if (res.status === 200) {
                toast.success("Login Successful", {
                  position: toast.POSITION.TOP_CENTER,
                });
                const userInfo = res.data;
                localStorage.setItem(
                  "auth",
                  JSON.stringify({ token: userInfo.jwt })
                );
                dispatch({
                  type: "LOGIN",
                  item: userInfo,
                });
                if (userInfo?.user?.isAdmin) {
                  history.push("/admin");
                } else {
                  history.push("/user");
                }
                actions.resetForm();
                actions.setSubmitting(false);
              }
            })
            .catch(() => {
              actions.setSubmitting(false);
              actions.resetForm();
              toast.error("Login Denied", {
                position: toast.POSITION.TOP_CENTER,
              });
            });
        }}
        component={LoginForm}
      ></Formik>
    </div>
  );
};

export default Login;
