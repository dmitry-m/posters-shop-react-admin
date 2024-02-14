import { useEffect, useState } from "react";
import { Link, useRedirect } from "react-admin";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CircularProgress,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import {
  Form,
  required,
  TextInput,
  useTranslate,
  useLogin,
  useNotify,
} from "react-admin";

import Box from "@mui/material/Box";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const translate = useTranslate();
  const redirect = useRedirect();
  const notify = useNotify();
  const login = useLogin();
  const location = useLocation();

  useEffect(() => {
    localStorage.getItem("user") && redirect("/");
  });

  const handleSubmit = ({ username, password }: FormValues) => {
    setLoading(true);
    return fetch("api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {})
      .catch((error: Error) => {
        setLoading(false);
        notify(
          typeof error === "string"
            ? error
            : typeof error === "undefined" || !error.message
            ? "pos.auth.register_error"
            : error.message,
          {
            type: "error",
            messageArgs: {
              _:
                typeof error === "string"
                  ? error
                  : error && error.message
                  ? error.message
                  : undefined,
            },
          }
        );
      });
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "flex-start",
          background: "url(https://source.unsplash.com/featured/1600x900)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Card sx={{ minWidth: 300, marginTop: "6em" }}>
          <Box
            sx={{
              margin: "1em",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Avatar sx={{ bgcolor: "secondary.main" }}>
              <LockIcon />
            </Avatar>
          </Box>
          <Box
            sx={{
              marginTop: "1em",
              display: "flex",
              justifyContent: "center",
              color: (theme) => theme.palette.grey[500],
            }}
          >
            Hint: demo / demo
          </Box>
          <Box sx={{ padding: "0 1em 1em 1em" }}>
            <Box sx={{ marginTop: "1em" }}>
              <TextInput
                autoFocus
                source="username"
                label={translate("ra.auth.username")}
                disabled={loading}
                validate={required()}
                fullWidth
              />
            </Box>
            <Box sx={{ marginTop: "1em" }}>
              <TextInput
                source="password_repeat"
                label={translate("ra.auth.password")}
                type="password"
                disabled={loading}
                validate={required()}
                fullWidth
              />
            </Box>
            <Box sx={{ marginTop: "1em" }}>
              <TextInput
                source="password"
                label={translate("pos.auth.password_repeat")}
                type="password"
                disabled={loading}
                validate={required()}
                fullWidth
              />
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: "1em",
              display: "flex",
              justifyContent: "center",
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <Link to="/login"> {translate("ra.auth.sign_in")}</Link>
          </Box>
          <CardActions sx={{ padding: "0 1em 1em 1em" }}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              disabled={loading}
              fullWidth
            >
              {loading && <CircularProgress size={25} thickness={2} />}
              {translate("pos.auth.register")}
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Form>
  );
};

Register.propTypes = {
  authProvider: PropTypes.func,
  previousRoute: PropTypes.string,
};

export default Register;

interface FormValues {
  username?: string;
  password?: string;
}
